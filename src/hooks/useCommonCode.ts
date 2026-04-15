import { useCallback, useMemo, useRef } from 'react'
import { create } from 'zustand'
import apiClient from '#/api/client'

// ---------------------------------------------------------------------------
// 타입 정의
// ---------------------------------------------------------------------------

/** 공통코드 1건 — gds_cmnCd 1행에 대응 */
export interface CommonCodeItem {
  ctgrId: string
  taskDivCd?: string
  cmmnCd: string
  cmmnCdNm: string
  upprCd?: string
  sortSeq?: number
  useYn?: string
  cmmnCdNmCont?: string
  itemCd01?: string
  itemCd02?: string
  itemCd03?: string
  itemCd04?: string
  itemCd05?: string
  itemCd06?: string
  itemCd07?: string
  befrCd?: string
}

/** 공통코드 그룹 조회 파라미터 — gfn_setCmnCd의 objTranData 1건 대응 */
export interface CommonCodeParam {
  /** 카테고리 ID (필수) */
  ctgrId: string
  /** 업무구분코드 */
  taskDivCd?: string
  /** 첫 행 구분: A(전체), S(선택), N(해당없음) */
  msgDiv?: 'A' | 'S' | 'N'
  /** 필터 표현식 (예: "&& cmmnCd != 'S'") */
  filStr?: string
}

/** 공통코드 그룹 키 (ctgrId|taskDivCd) */
type GroupKey = string

/** useCommonCode 반환 타입 */
export interface UseCommonCodeReturn {
  /**
   * 공통코드 그룹 조회 — gfn_setCmnCd 대응.
   *
   * 캐시에 있으면 즉시 반환, 없으면 API 호출 후 캐싱.
   *
   * @example
   * const codes = await getCommonCode('BC003', 'ICED')
   */
  getCommonCode: (ctgrId: string, taskDivCd?: string) => Promise<CommonCodeItem[]>

  /**
   * 코드 값으로 명칭 조회 — 그리드/콤보 display 시 사용.
   *
   * @example
   * const name = getCodeName('BC003', '01') // "검체검사"
   * const name = getCodeName('BC003', '01', 'ICED')
   */
  getCodeName: (ctgrId: string, code: string, taskDivCd?: string) => string

  /**
   * 여러 그룹 일괄 로드 — gfn_setCmnCd 배열 파라미터 대응.
   *
   * 이미 캐시된 그룹은 건너뛰고, 미캐시 그룹만 한 번에 API 호출한다.
   *
   * @example
   * await loadCommonCodes([
   *   { ctgrId: 'BC003', taskDivCd: 'ICED' },
   *   { ctgrId: 'BC041', taskDivCd: 'ICED' },
   *   { ctgrId: 'BC005', taskDivCd: 'ICED' },
   * ])
   */
  loadCommonCodes: (params: CommonCodeParam[]) => Promise<void>

  /**
   * 공통코드 그룹을 콤보/라디오용 옵션 배열로 반환.
   *
   * msgDiv를 지정하면 첫 행에 "전체"/"선택"/"해당없음" 추가.
   * filStr로 추가 필터링 가능.
   *
   * @example
   * const options = getCommonCodeOptions('BC003', {
   *   taskDivCd: 'ICED',
   *   msgDiv: 'A',
   *   filStr: (item) => item.cmmnCd !== 'S',
   * })
   */
  getCommonCodeOptions: (
    ctgrId: string,
    options?: {
      taskDivCd?: string
      msgDiv?: 'A' | 'S' | 'N'
      filStr?: (item: CommonCodeItem) => boolean
    },
  ) => Array<{ value: string; label: string }>

  /** 현재 로드된 공통코드 맵 (읽기 전용) */
  commonCodes: ReadonlyMap<GroupKey, CommonCodeItem[]>

  /** 로딩 중인 그룹 키 Set */
  loadingGroups: ReadonlySet<GroupKey>

  /** 캐시 초기화 (로그아웃, 언어 변경 등) */
  clearCache: () => void
}

// ---------------------------------------------------------------------------
// Zustand Store (공통코드 캐시)
// ---------------------------------------------------------------------------

interface CommonCodeState {
  /** ctgrId|taskDivCd → CommonCodeItem[] */
  codeMap: Map<GroupKey, CommonCodeItem[]>
  /** 로딩 중인 그룹 키 */
  loadingKeys: Set<GroupKey>
  /** 진행 중인 Promise (중복 호출 방지) */
  pendingRequests: Map<string, Promise<void>>

  setCodeGroup: (key: GroupKey, items: CommonCodeItem[]) => void
  getCodeGroup: (key: GroupKey) => CommonCodeItem[] | undefined
  setLoading: (key: GroupKey, loading: boolean) => void
  clear: () => void
}

const makeGroupKey = (ctgrId: string, taskDivCd?: string): GroupKey =>
  taskDivCd ? `${ctgrId}|${taskDivCd}` : ctgrId

export const useCommonCodeStore = create<CommonCodeState>((set, get) => ({
  codeMap: new Map(),
  loadingKeys: new Set(),
  pendingRequests: new Map(),

  setCodeGroup: (key, items) => {
    set((state) => {
      const newMap = new Map(state.codeMap)
      newMap.set(key, items)
      const newLoading = new Set(state.loadingKeys)
      newLoading.delete(key)
      return { codeMap: newMap, loadingKeys: newLoading }
    })
  },

  getCodeGroup: (key) => get().codeMap.get(key),

  setLoading: (key, loading) => {
    set((state) => {
      const newLoading = new Set(state.loadingKeys)
      if (loading) {
        newLoading.add(key)
      } else {
        newLoading.delete(key)
      }
      return { loadingKeys: newLoading }
    })
  },

  clear: () => set({ codeMap: new Map(), loadingKeys: new Set(), pendingRequests: new Map() }),
}))

// ---------------------------------------------------------------------------
// API 호출 (gfn_setCmnCd의 서버 통신 부분)
// ---------------------------------------------------------------------------

interface CommonCodeApiRequest {
  ctgrId: string
  taskDivCd?: string
}

interface CommonCodeApiResponse {
  httpStatus?: string
  code?: number
  result?: CommonCodeItem[]
  [key: string]: unknown
}

/**
 * 서버에서 공통코드 일괄 조회.
 *
 * 원본: POST /la/common-code/list
 * body: { commonCodeList: [{ ctgrId, taskDivCd }, ...] }
 *
 * TODO: [H8] SvcDefinition + dsRequest 패턴으로 전환 예정
 * 현재 apiClient.post 직접 호출 방식은 프로젝트의 표준 API 패턴(SvcDefinition + NxDataset)과
 * 불일치하므로, 안정화 이후 아래와 같이 전환할 것:
 *
 * ```typescript
 * const SVC_COMMON_CODE: SvcDefinition = {
 *   svcId: 'fetchCommonCodes',
 *   url: 'POST::la::common-code/list',
 *   inDs: 'ds_commonCodeList',
 *   outDs: 'ds_result=result',
 * }
 * const result = await dsRequest(SVC_COMMON_CODE, { ds_commonCodeList: dsReq })
 * ```
 */
async function fetchCommonCodes(requests: CommonCodeApiRequest[]): Promise<CommonCodeItem[]> {
  if (requests.length === 0) return []

  try {
    const response = await apiClient.post<CommonCodeApiResponse>('/la/common-code/list', {
      commonCodeList: requests,
    })

    return (response.data?.result as CommonCodeItem[]) ?? []
  } catch (err) {
    console.error('[useCommonCode] fetchCommonCodes error:', err)
    return []
  }
}

// ---------------------------------------------------------------------------
// 훅
// ---------------------------------------------------------------------------

/**
 * 공통코드 관리 훅 — Nexacro Frame.xjs의 공통코드 관련 함수 대응.
 *
 * Zustand 기반 캐시 + API 호출로 공통코드를 관리한다.
 * 한번 로드된 코드는 캐시에서 즉시 반환하며, 중복 호출을 방지한다.
 *
 * ## 원본 함수 매핑
 *
 * | Nexacro (Frame.xjs) | React (useCommonCode) |
 * |---|---|
 * | gfn_setCmnCd | loadCommonCodes |
 * | gfn_setCmnCdAsync | loadCommonCodes (기본 비동기) |
 * | gfn_setCmnCdSync | loadCommonCodes + await |
 * | _gfn_deployCmnCd | getCommonCodeOptions (내부 처리) |
 * | _gfn_setCmnCdCallback | loadCommonCodes 내부 처리 |
 * | _gfn_appendCmnCdData | setCodeGroup 내부 처리 |
 * | gfn_addColumnCmnCd | skip (TypeScript 타입으로 대체) |
 * | gfn_setDtdicComp | TODO: 별도 useDtdic 훅 예정 |
 * | gfn_NComboInit | TODO: 다단계 콤보 전용 훅 예정 |
 * | gfn_setCmnOffice | TODO: 사무소/부서 전용 훅 예정 |
 * | gfn_setDtaAuthDs | TODO: 자료접근권한 전용 훅 예정 |
 * | gfn_setCtrlFromDs | skip (React 상태 바인딩으로 대체) |
 *
 * @example
 * ```tsx
 * function SearchForm() {
 *   const { getCommonCode, getCodeName, loadCommonCodes, getCommonCodeOptions } = useCommonCode()
 *
 *   useEffect(() => {
 *     loadCommonCodes([
 *       { ctgrId: 'BC003', taskDivCd: 'ICED' },
 *       { ctgrId: 'BC005', taskDivCd: 'ICED' },
 *     ])
 *   }, [loadCommonCodes])
 *
 *   // 콤보에 바인딩할 옵션 생성
 *   const bizOptions = getCommonCodeOptions('BC003', {
 *     taskDivCd: 'ICED',
 *     msgDiv: 'A',
 *   })
 *
 *   // 코드 → 명칭 변환
 *   const bizName = getCodeName('BC003', '01', 'ICED')
 *
 *   return (
 *     <select>
 *       {bizOptions.map((opt) => (
 *         <option key={opt.value} value={opt.value}>{opt.label}</option>
 *       ))}
 *     </select>
 *   )
 * }
 * ```
 */
export function useCommonCode(): UseCommonCodeReturn {
  const codeMap = useCommonCodeStore((s) => s.codeMap)
  const loadingKeys = useCommonCodeStore((s) => s.loadingKeys)
  const setCodeGroup = useCommonCodeStore((s) => s.setCodeGroup)
  const setLoading = useCommonCodeStore((s) => s.setLoading)
  const clear = useCommonCodeStore((s) => s.clear)

  // pendingRequests는 ref로 접근 (비React 상태)
  const pendingRef = useRef(useCommonCodeStore.getState().pendingRequests)

  // ---------- getCommonCode ----------

  const getCommonCode = useCallback(
    async (ctgrId: string, taskDivCd?: string): Promise<CommonCodeItem[]> => {
      const key = makeGroupKey(ctgrId, taskDivCd)

      // 캐시 히트
      const cached = useCommonCodeStore.getState().getCodeGroup(key)
      if (cached) return cached

      // 이미 로딩 중이면 기존 Promise 대기
      const pending = pendingRef.current.get(key)
      if (pending) {
        await pending
        return useCommonCodeStore.getState().getCodeGroup(key) ?? []
      }

      // API 호출
      const promise = (async () => {
        setLoading(key, true)
        try {
          const items = await fetchCommonCodes([{ ctgrId, taskDivCd }])
          const grouped = items.filter(
            (item) => item.ctgrId === ctgrId && (taskDivCd ? item.taskDivCd === taskDivCd : true),
          )
          setCodeGroup(key, grouped)
        } finally {
          pendingRef.current.delete(key)
        }
      })()

      pendingRef.current.set(key, promise)
      await promise

      return useCommonCodeStore.getState().getCodeGroup(key) ?? []
    },
    [setCodeGroup, setLoading],
  )

  // ---------- getCodeName ----------

  const getCodeName = useCallback((ctgrId: string, code: string, taskDivCd?: string): string => {
    const key = makeGroupKey(ctgrId, taskDivCd)
    const items = useCommonCodeStore.getState().getCodeGroup(key)
    if (!items) return code

    const found = items.find((item) => item.cmmnCd === code)
    return found?.cmmnCdNm ?? code
  }, [])

  // ---------- loadCommonCodes ----------

  const loadCommonCodes = useCallback(
    async (params: CommonCodeParam[]): Promise<void> => {
      // 미캐시 그룹 필터링
      const state = useCommonCodeStore.getState()
      const toFetch: CommonCodeApiRequest[] = []
      const toFetchKeys: GroupKey[] = []

      for (const p of params) {
        const key = makeGroupKey(p.ctgrId, p.taskDivCd)
        if (!state.getCodeGroup(key) && !pendingRef.current.has(key)) {
          toFetch.push({ ctgrId: p.ctgrId, taskDivCd: p.taskDivCd })
          toFetchKeys.push(key)
        }
      }

      if (toFetch.length === 0) return

      // 로딩 상태 설정
      for (const key of toFetchKeys) {
        setLoading(key, true)
      }

      // 단일 API 호출로 일괄 조회
      const promise = (async () => {
        try {
          const allItems = await fetchCommonCodes(toFetch)

          // 그룹별로 분류하여 캐시에 저장
          const grouped = new Map<GroupKey, CommonCodeItem[]>()

          for (const item of allItems) {
            const key = makeGroupKey(item.ctgrId, item.taskDivCd)
            if (!grouped.has(key)) {
              grouped.set(key, [])
            }
            grouped.get(key)!.push(item)
          }

          for (const [key, items] of grouped) {
            setCodeGroup(key, items)
          }

          // 요청했지만 결과가 없는 그룹은 빈 배열로 캐시
          for (const key of toFetchKeys) {
            if (!grouped.has(key)) {
              setCodeGroup(key, [])
            }
          }
        } finally {
          for (const key of toFetchKeys) {
            pendingRef.current.delete(key)
          }
        }
      })()

      for (const key of toFetchKeys) {
        pendingRef.current.set(key, promise)
      }

      await promise
    },
    [setCodeGroup, setLoading],
  )

  // ---------- getCommonCodeOptions ----------

  const getCommonCodeOptions = useCallback(
    (
      ctgrId: string,
      options?: {
        taskDivCd?: string
        msgDiv?: 'A' | 'S' | 'N'
        filStr?: (item: CommonCodeItem) => boolean
      },
    ): Array<{ value: string; label: string }> => {
      const key = makeGroupKey(ctgrId, options?.taskDivCd)
      const items = useCommonCodeStore.getState().getCodeGroup(key) ?? []

      let filtered = items
      if (options?.filStr) {
        filtered = filtered.filter(options.filStr)
      }

      const result: Array<{ value: string; label: string }> = []

      // 첫 행 추가 (gfn_deployCmnCd의 msgDiv 처리)
      if (options?.msgDiv) {
        const labelMap = { A: '전체', S: '선택', N: '해당없음' }
        result.push({ value: '', label: labelMap[options.msgDiv] })
      }

      for (const item of filtered) {
        result.push({ value: item.cmmnCd, label: item.cmmnCdNm })
      }

      return result
    },
    [],
  )

  // ---------- 반환 ----------

  const commonCodes = useMemo(() => codeMap as ReadonlyMap<GroupKey, CommonCodeItem[]>, [codeMap])
  const loadingGroups = useMemo(() => loadingKeys as ReadonlySet<GroupKey>, [loadingKeys])

  return {
    getCommonCode,
    getCodeName,
    loadCommonCodes,
    getCommonCodeOptions,
    commonCodes,
    loadingGroups,
    clearCache: clear,
  }
}
