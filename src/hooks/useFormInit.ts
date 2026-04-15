import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type CommonCodeParam, useCommonCode } from '#/hooks/useCommonCode'
import { type MenuInfo, useFrame } from '#/hooks/useFrame'

// ---------------------------------------------------------------------------
// 타입 정의
// ---------------------------------------------------------------------------

/** 화면 권한 정보 — gds_menu의 YN_ADD, YN_MOD, YN_DEL, YN_PRINT, YN_TRANS 대응 */
export interface FormPermissions {
  /** 신규(행추가) 권한 */
  canAdd: boolean
  /** 조회 권한 (기본 true — 메뉴에 접근 가능하면 조회 가능) */
  canSearch: boolean
  /** 저장(수정) 권한 */
  canSave: boolean
  /** 삭제 권한 */
  canDelete: boolean
  /** 출력 권한 */
  canPrint: boolean
  /** 엑셀 다운로드 권한 */
  canExcel: boolean
}

/** useFormInit 옵션 */
export interface FormInitOptions {
  /** 현재 화면의 메뉴 ID (권한 조회, 브로드캐스트 구독 등에 사용) */
  menuId: string

  /**
   * 초기화 시 로드할 공통코드 목록.
   *
   * gfn_formOnLoad에서 gfn_setCmnCd를 호출하는 패턴을 대체한다.
   *
   * @example
   * commonCodes: [
   *   { ctgrId: 'BC003', taskDivCd: 'ICED' },
   *   { ctgrId: 'BC005', taskDivCd: 'ICED' },
   * ]
   */
  commonCodes?: CommonCodeParam[]

  /**
   * 초기화 완료 후 실행할 콜백.
   *
   * 공통코드 로드, 권한 체크 등이 모두 완료된 후 호출된다.
   * 원본 gfn_formOnLoad의 마지막 부분 / fn_onload에 해당.
   */
  onReady?: () => void | Promise<void>

  /**
   * 화면 권한을 강제 오버라이드.
   *
   * 메뉴 트리 기반 자동 권한 대신 수동으로 지정할 때 사용.
   */
  permissions?: Partial<FormPermissions>

  /** 초기화 자동 실행 여부 (기본: true) */
  autoInit?: boolean
}

/** useFormInit 반환 타입 */
export interface UseFormInitReturn {
  /**
   * 초기화 완료 여부.
   *
   * true가 되기 전에는 화면 렌더링을 대기하거나 스켈레톤을 표시한다.
   */
  isInitialized: boolean

  /** 초기화 중 오류 발생 여부 */
  isError: boolean

  /** 오류 메시지 */
  errorMessage: string | null

  /**
   * 화면 권한 — gfn_setBtnAuth, gfn_setAuthGrid 대응.
   *
   * 메뉴 트리에서 조회한 권한 플래그에 기반한다.
   *
   * @example
   * if (!permissions.canSave) {
   *   // 저장 버튼 비활성화
   * }
   */
  permissions: FormPermissions

  /**
   * 현재 화면의 메뉴 정보.
   */
  menuInfo: MenuInfo | undefined

  /**
   * 화면 경로(breadcrumb) 문자열.
   *
   * @example
   * "LIS관리 > 검사실관리 > 검사항목관리"
   */
  navigation: string

  /**
   * 수동 초기화 트리거.
   *
   * autoInit=false로 설정한 경우, 원하는 시점에 호출한다.
   */
  initialize: () => Promise<void>

  /**
   * 초기화 리셋 및 재실행 — 화면 리로드 시 사용.
   */
  reinitialize: () => Promise<void>
}

// ---------------------------------------------------------------------------
// 기본 권한
// ---------------------------------------------------------------------------

const DEFAULT_PERMISSIONS: FormPermissions = {
  canAdd: false,
  canSearch: true,
  canSave: false,
  canDelete: false,
  canPrint: false,
  canExcel: false,
}

// ---------------------------------------------------------------------------
// 훅
// ---------------------------------------------------------------------------

/**
 * 폼 초기화 훅 — Nexacro gfn_formOnLoad + 관련 초기화 함수 통합 대응.
 *
 * 화면 컴포넌트의 마운트 시 다음을 자동으로 수행한다:
 * 1. 메뉴 정보 조회 및 권한 체크
 * 2. 공통코드 일괄 로드
 * 3. onReady 콜백 실행
 *
 * ## 원본 함수 매핑
 *
 * | Nexacro (Frame.xjs) | React (useFormInit) |
 * |---|---|
 * | gfn_formOnLoad | useFormInit (자동 실행) |
 * | _gfn_formOnLoad_authNlog | permissions (권한 자동 적용) |
 * | gfn_initComp | skip (React 컴포넌트 lifecycle으로 대체) |
 * | gfn_initEnable | skip (React disabled prop으로 대체) |
 * | gfn_setAuthGrid | permissions.canAdd / canDelete |
 * | gfn_setBtnAuth | permissions (통합) |
 * | gfn_setCmnCd (formOnLoad 내) | commonCodes 옵션 |
 * | gfn_setCompValidation | skip (useValidation 훅으로 분리됨) |
 * | gfn_applyI18n | skip (react-i18next로 대체) |
 * | _gfn_formOnLoad_hotkey | skip (웹: 브라우저 단축키 사용) |
 * | _gfn_formOnLoad_workFrameSet | skip (Nexacro FrameSet 전용) |
 * | _gfn_formOnLoad_floating | skip (Floating Popup: 웹에서 미사용) |
 * | _gfn_formOnLoad_div_Work | skip (Nexacro 전용) |
 * | _gfn_formOnLoad_popup | skip (useModal로 대체) |
 * | gfn_formOnLoadAfter | skip (Nexacro 전용) |
 * | gfn_resetComp | reinitialize |
 * | gfn_editKillFocus | skip (HTML input blur 기본 동작) |
 * | gfn_onkeydown | TODO: 단축키 훅 별도 구현 예정 |
 * | gfn_onkeyup | TODO: 단축키 훅 별도 구현 예정 |
 * | gfn_callKeyFunction | TODO: 단축키 훅 별도 구현 예정 |
 * | gfn_gridCheck | skip (React ref 기반 체크) |
 * | gfn_setGridTitle | skip (React 컴포넌트 prop으로 처리) |
 * | gfn_setGridTitleInit | skip |
 * | gfn_setGridTitleCnt | skip |
 * | gfn_openReportPopup | TODO: useReport 훅 별도 구현 예정 |
 * | gfn_openReportDiv | TODO: useReport 훅 별도 구현 예정 |
 * | gfn_openChartDiv | skip (IBChart 래퍼로 대체) |
 * | gfn_setChartDiv | skip (IBChart 래퍼로 대체) |
 * | gfn_addSettingComps | skip (Nexacro 컴포넌트 복사 전용) |
 * | gfn_addSettingComp | skip |
 * | gfn_addSettingObjects | skip |
 * | gfn_addSettingDataset | skip |
 * | gfn_addSettingGrid | skip |
 * | gfn_addSettingDiv | skip |
 * | gfn_addSettingTab | skip |
 *
 * @example
 * ```tsx
 * function LA_M00_010() {
 *   const {
 *     isInitialized,
 *     permissions,
 *     navigation,
 *   } = useFormInit({
 *     menuId: 'LA00000022',
 *     commonCodes: [
 *       { ctgrId: 'BC003', taskDivCd: 'ICED' },
 *       { ctgrId: 'BC005', taskDivCd: 'ICED' },
 *     ],
 *     onReady: () => {
 *       console.log('화면 초기화 완료')
 *     },
 *   })
 *
 *   if (!isInitialized) {
 *     return <div>로딩 중...</div>
 *   }
 *
 *   return (
 *     <div>
 *       <p>{navigation}</p>
 *       <button disabled={!permissions.canSave}>저장</button>
 *       <button disabled={!permissions.canDelete}>삭제</button>
 *       <button disabled={!permissions.canPrint}>출력</button>
 *       <button disabled={!permissions.canExcel}>엑셀</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useFormInit(options: FormInitOptions): UseFormInitReturn {
  const { menuId, commonCodes, onReady, permissions: permOverrides, autoInit = true } = options

  const [isInitialized, setIsInitialized] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { getMenuInfo, getNavigation } = useFrame(menuId)
  const { loadCommonCodes } = useCommonCode()

  // 중복 실행 방지
  const initRunningRef = useRef(false)
  const mountedRef = useRef(true)

  // 메뉴 정보
  const menuInfo = useMemo(() => getMenuInfo(menuId), [menuId, getMenuInfo])

  // 경로(breadcrumb)
  const navigation = useMemo(() => getNavigation(menuId), [menuId, getNavigation])

  // ---------- 권한 계산 ----------

  const permissions = useMemo<FormPermissions>(() => {
    // 메뉴 트리에서 권한 조회
    const base: FormPermissions = { ...DEFAULT_PERMISSIONS }

    if (menuInfo) {
      base.canAdd = menuInfo.ynAdd ?? false
      base.canSave = menuInfo.ynMod ?? false
      base.canDelete = menuInfo.ynDel ?? false
      base.canPrint = menuInfo.ynPrint ?? false
      base.canExcel = menuInfo.ynTrans ?? false
    }

    // 오버라이드 적용
    if (permOverrides) {
      if (permOverrides.canAdd !== undefined) base.canAdd = permOverrides.canAdd
      if (permOverrides.canSearch !== undefined) base.canSearch = permOverrides.canSearch
      if (permOverrides.canSave !== undefined) base.canSave = permOverrides.canSave
      if (permOverrides.canDelete !== undefined) base.canDelete = permOverrides.canDelete
      if (permOverrides.canPrint !== undefined) base.canPrint = permOverrides.canPrint
      if (permOverrides.canExcel !== undefined) base.canExcel = permOverrides.canExcel
    }

    return base
  }, [menuInfo, permOverrides])

  // ---------- 초기화 로직 ----------

  const initialize = useCallback(async () => {
    if (initRunningRef.current) return
    initRunningRef.current = true

    setIsError(false)
    setErrorMessage(null)

    try {
      // 1. 공통코드 일괄 로드
      if (commonCodes && commonCodes.length > 0) {
        await loadCommonCodes(commonCodes)
      }

      // 2. onReady 콜백 실행
      if (onReady && mountedRef.current) {
        await onReady()
      }

      if (mountedRef.current) {
        setIsInitialized(true)
      }
    } catch (err) {
      console.error(`[useFormInit] 초기화 실패 (menuId: ${menuId}):`, err)
      if (mountedRef.current) {
        setIsError(true)
        setErrorMessage(err instanceof Error ? err.message : '화면 초기화 중 오류가 발생했습니다.')
      }
    } finally {
      initRunningRef.current = false
    }
  }, [menuId, commonCodes, loadCommonCodes, onReady])

  // ---------- reinitialize ----------

  const reinitialize = useCallback(async () => {
    setIsInitialized(false)
    initRunningRef.current = false
    await initialize()
  }, [initialize])

  // ---------- 자동 초기화 ----------

  useEffect(() => {
    mountedRef.current = true

    if (autoInit) {
      initialize()
    }

    return () => {
      mountedRef.current = false
    }
  }, [autoInit, initialize])

  return {
    isInitialized,
    isError,
    errorMessage,
    permissions,
    menuInfo,
    navigation,
    initialize,
    reinitialize,
  }
}
