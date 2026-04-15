/**
 * ## broadcast 사용 시 주의 (원본 gfn_multicast* 대비 변경)
 *
 * 원본 Nexacro: 함수명 문자열을 지정하면 대상 폼에서 해당 함수를 동적 조회/호출 (사전 등록 불필요)
 * React 전환: 수신 측에서 반드시 onBroadcast(eventName, handler)로 사전 등록해야 함
 *
 * @example
 * // 발신 측
 * const { broadcast } = useFrame()
 * broadcast('fn_refresh', { type: 'save' }, ['LA00000022'])
 *
 * // 수신 측 (반드시 useEffect에서 등록!)
 * const { onBroadcast } = useFrame()
 * useEffect(() => {
 *   return onBroadcast('fn_refresh', (data) => { ... })
 * }, [onBroadcast])
 */
import { useCallback, useRef } from 'react'
import { useAppStore } from '#/store/useAppStore'

// ---------------------------------------------------------------------------
// 타입 정의
// ---------------------------------------------------------------------------

/** 메뉴 트리 노드 — gds_menu 1행에 대응 */
export interface MenuInfo {
  menuId: string
  menuNm: string
  menuLvl?: number
  menuGrp?: string
  frmUrl?: string
  prgmId?: string
  path?: string
  accsParm?: string
  /** 권한 플래그 */
  ynAdd?: boolean
  ynMod?: boolean
  ynDel?: boolean
  ynPrint?: boolean
  ynTrans?: boolean
}

/** openMenu 파라미터 */
export interface OpenMenuParams {
  menuId: string
  title?: string
  path?: string
  params?: Record<string, unknown>
}

/** 브로드캐스트 이벤트 페이로드 */
export interface BroadcastPayload<T = unknown> {
  event: string
  data?: T
  /** 발신자 menuId (자동 설정) */
  source?: string
}

/** 브로드캐스트 핸들러 타입 */
export type BroadcastHandler<T = unknown> = (payload: BroadcastPayload<T>) => void

/** useFrame 반환 타입 */
export interface UseFrameReturn {
  /**
   * 메뉴 열기 — gfn_menuOpen / gfn_newMdi 대응.
   *
   * useAppStore의 openTabs에 탭을 추가하고 활성 메뉴로 설정한다.
   * 이미 열려 있으면 해당 탭을 활성화만 한다.
   */
  openMenu: (params: OpenMenuParams) => void

  /**
   * 탭 닫기 — MDI 탭 닫기 대응.
   *
   * 닫힌 탭이 현재 활성 탭이면 인접 탭을 활성화한다.
   */
  closeMenu: (menuId: string) => void

  /** 현재 활성 메뉴 ID */
  activeMenuId: string | null

  /** 현재 활성 메뉴 정보 */
  getActiveMenu: () => { id: string; title: string; path: string } | null

  /**
   * 메뉴 경로(breadcrumb) 생성 — gfn_getNavigation 대응.
   *
   * menuTree에서 menuId를 찾아 상위 메뉴까지의 경로를 " > " 구분자로 반환한다.
   *
   * @example
   * getNavigation('LA00000022') // "LIS관리 > 검사실관리 > 검사항목관리"
   */
  getNavigation: (menuId: string) => string

  /**
   * 메뉴 트리 설정 — 앱 초기화 시 서버에서 받은 메뉴 데이터를 등록.
   */
  setMenuTree: (menus: MenuInfo[]) => void

  /**
   * 메뉴 정보 조회 — gfn_getMenuInfo 대응.
   */
  getMenuInfo: (menuId: string) => MenuInfo | undefined

  /**
   * 열린 화면에 이벤트 브로드캐스트 — gfn_multicast* 대응.
   *
   * 모든 구독자에게 이벤트를 전파한다.
   * targetMenuIds를 지정하면 해당 메뉴들에만 전파한다.
   *
   * @example
   * broadcast('barcodeReceived', { barcode: '123456' })
   * broadcast('refresh', undefined, ['LA00000022', 'LA00000019'])
   */
  broadcast: <T = unknown>(
    event: string,
    data?: T,
    targetMenuIds?: string[],
    delayMs?: number,
  ) => void

  /**
   * 이벤트 수신 리스너 등록 — 컴포넌트 내에서 호출.
   *
   * 반환된 unsubscribe 함수로 리스너를 해제한다.
   * 컴포넌트 unmount 시 자동 해제를 위해 useEffect 내에서 사용한다.
   *
   * @example
   * useEffect(() => {
   *   return onBroadcast('barcodeReceived', (payload) => {
   *     console.log(payload.data)
   *   })
   * }, [onBroadcast])
   */
  onBroadcast: <T = unknown>(event: string, handler: BroadcastHandler<T>) => () => void

  /** 열린 탭 목록 */
  openTabs: Array<{ id: string; title: string; path: string }>

  /** MDI 최대 탭 수 (gfn_FRAME_MDI_MAX_CNT 대응, 기본 15) */
  maxTabCount: number
}

// ---------------------------------------------------------------------------
// 브로드캐스트 이벤트 버스 (모듈 스코프 싱글턴)
// ---------------------------------------------------------------------------

type ListenerEntry = {
  event: string
  handler: BroadcastHandler
  menuId?: string
}

const listeners: ListenerEntry[] = []

function emitBroadcast<T = unknown>(
  event: string,
  data?: T,
  source?: string,
  targetMenuIds?: string[],
  delayMs?: number,
) {
  const payload: BroadcastPayload<T> = { event, data, source }

  const matched = listeners.filter((entry) => {
    if (entry.event !== event) return false
    if (targetMenuIds && entry.menuId && !targetMenuIds.includes(entry.menuId)) return false
    return true
  })

  if (!delayMs || delayMs <= 0) {
    // 지연 없이 즉시 호출
    for (const entry of matched) {
      try {
        entry.handler(payload as BroadcastPayload)
      } catch (err) {
        console.error(`[useFrame.broadcast] handler error for event "${event}":`, err)
      }
    }
  } else {
    // delayMs 간격으로 순차 호출
    matched.forEach((entry, index) => {
      setTimeout(() => {
        try {
          entry.handler(payload as BroadcastPayload)
        } catch (err) {
          console.error(`[useFrame.broadcast] handler error for event "${event}":`, err)
        }
      }, delayMs * index)
    })
  }
}

function subscribeBroadcast(event: string, handler: BroadcastHandler, menuId?: string): () => void {
  const entry: ListenerEntry = { event, handler, menuId }
  listeners.push(entry)

  return () => {
    const idx = listeners.indexOf(entry)
    if (idx >= 0) listeners.splice(idx, 1)
  }
}

// ---------------------------------------------------------------------------
// 메뉴 트리 저장소 (모듈 스코프)
// ---------------------------------------------------------------------------

let menuTree: MenuInfo[] = []
const menuMap = new Map<string, MenuInfo>()

function rebuildMenuMap() {
  menuMap.clear()
  for (const m of menuTree) {
    menuMap.set(m.menuId, m)
  }
}

// ---------------------------------------------------------------------------
// 훅
// ---------------------------------------------------------------------------

/** MDI 최대 탭 수 (gfn_FRAME_MDI_MAX_CNT 대응) */
const MAX_TAB_COUNT = 15

/**
 * 메뉴/MDI 탭 관리 훅 — Nexacro Frame.xjs의 메뉴/화면 관리 함수 대응.
 *
 * ## 원본 함수 매핑
 *
 * | Nexacro (Frame.xjs) | React (useFrame) |
 * |---|---|
 * | gfn_menuOpen | openMenu |
 * | gfn_newMdi | openMenu (통합) |
 * | gfn_setOpenMenuDs | openMenu 내부 처리 |
 * | gfn_getScreenId | activeMenuId / getActiveMenu |
 * | gfn_getArgument | React Router searchParams / useModal.getArguments |
 * | gfn_getNavigation | getNavigation |
 * | gfn_getMenuInfo | getMenuInfo |
 * | gfn_getFormInfo | getMenuInfo (통합) |
 * | gfn_multicastOpenAllForm | broadcast |
 * | gfn_multicastOpenMdiForm | broadcast (통합) |
 * | gfn_multicastOpenPopupForm | broadcast (통합) |
 * | gfn_multicastCallFuncs | broadcast 내부 처리 |
 * | gfn_multicastCallFunc | broadcast 내부 처리 |
 * | gfn_multicastOpenFormByUrl | broadcast (통합) |
 * | gfn_multicastOpenFormByMenuId | broadcast (targetMenuIds 지정) |
 * | gfn_multicastOpenFormByPrgmId | broadcast (prgmId → menuId 변환 후 사용) |
 * | gfn_multicastOpenAllForms | broadcast (targetMenuIds 미지정) |
 * | gfn_multicastOpenAllMdiForms | broadcast (통합) |
 * | gfn_multicastOpenAllPopupForms | broadcast (통합) |
 * | gfn_sendRecvBarcodeByUrl | broadcast('barcodeReceived', ...) |
 * | gfn_sendRecvBarcodeByMenuId | broadcast('barcodeReceived', ...) |
 * | gfn_sendRecvBarcodeByPrgmId | broadcast('barcodeReceived', ...) |
 * | gfn_sendRecvBarcode | broadcast 내부 처리 |
 * | gfn_findMenuFormByPrgmId | skip (React Router로 대체) |
 * | gfn_findMenuFormByMenuId | skip (React Router로 대체) |
 * | gfn_findMenuFormByUrl | skip (React Router로 대체) |
 * | gfn_findMdiFormByPrgmId | skip (React Router로 대체) |
 * | gfn_findMdiFormByMenuId | skip (React Router로 대체) |
 * | gfn_findMdiFormByUrl | skip (React Router로 대체) |
 * | gfn_findPopupFormByPrgmId | skip (React Router로 대체) |
 * | gfn_findPopupFormByMenuId | skip (React Router로 대체) |
 * | gfn_findPopupFormByUrl | skip (React Router로 대체) |
 * | gfn_getFrameChildObject | skip (Nexacro FrameSet 전용) |
 * | gfn_floatingClose | skip (Floating Popup: 웹에서 미사용) |
 * | gfn_floatingAllClose | skip |
 * | gfn_activeFloatingPopup | skip |
 * | gfn_closeFloating | skip |
 * | gfn_setPopupPsn | skip (팝업 개인화: 별도 구현 예정) |
 * | gfn_getPopupFormUrlForPsn | skip |
 * | gfn_setFormSizeByPrgmId | skip (웹: CSS로 처리) |
 * | gfn_saveFormSizeByPrgmId | skip |
 * | gfn_calibrateFormSize | skip (웹: CSS로 처리) |
 * | gfn_sortComponentByPosition | skip (웹: DOM 순서 사용) |
 * | gfn_fixedSizeComponent | skip (웹: CSS로 처리) |
 * | gfn_getAccsParmByMenu | getMenuInfo(id)?.accsParm |
 * | gfn_getProgramIdByFormUrl | skip (React에서는 menuId 기반) |
 * | gfn_clearEventOnBeforeClose | skip (React lifecycle로 대체) |
 * | gfn_checkEventOnBeforeClose | TODO: onBeforeClose guard 별도 구현 |
 * | gfn_getFormForStackingComp | skip (Nexacro Frame 전용) |
 * | gfn_invalidateSession | useAuthStore.logout() |
 * | gfn_isAuthViewDebug | skip (디버그 팝업 전용) |
 * | gfn_openDebugTrView | skip |
 *
 * @param menuId - 현재 화면의 메뉴 ID (브로드캐스트 수신 시 필터링에 사용)
 *
 * @example
 * ```tsx
 * function MyPage() {
 *   const { openMenu, closeMenu, broadcast, onBroadcast } = useFrame('LA00000022')
 *
 *   // 다른 메뉴 열기
 *   openMenu({ menuId: 'LA00000019', title: '검사실관리', path: '/la/la-0019' })
 *
 *   // 바코드 수신 이벤트 등록
 *   useEffect(() => {
 *     return onBroadcast('barcodeReceived', (payload) => {
 *       console.log('barcode:', payload.data)
 *     })
 *   }, [onBroadcast])
 *
 *   // 다른 화면에 이벤트 전파
 *   broadcast('dataChanged', { type: 'save' })
 * }
 * ```
 */
export function useFrame(menuId?: string): UseFrameReturn {
  const openTabs = useAppStore((s) => s.openTabs)
  const activeMenuIdFromStore = useAppStore((s) => s.activeMenuId)
  const addTab = useAppStore((s) => s.addTab)
  const removeTab = useAppStore((s) => s.removeTab)
  const setActiveMenu = useAppStore((s) => s.setActiveMenu)

  // menuId ref (브로드캐스트 구독 시 사용)
  const menuIdRef = useRef(menuId)
  menuIdRef.current = menuId

  // ---------- openMenu ----------

  const openMenu = useCallback(
    (params: OpenMenuParams) => {
      const { menuId: targetMenuId, title, path, params: _args } = params

      // 이미 열려 있으면 활성화만
      const existing = openTabs.find((t) => t.id === targetMenuId)
      if (existing) {
        setActiveMenu(targetMenuId)
        return
      }

      // 최대 탭 수 체크
      if (openTabs.length >= MAX_TAB_COUNT) {
        console.warn(`[useFrame.openMenu] 최대 탭 수(${MAX_TAB_COUNT})를 초과합니다.`)
        return
      }

      // 메뉴 트리에서 정보 보충
      const menuInfo = menuMap.get(targetMenuId)
      const resolvedTitle = title ?? menuInfo?.menuNm ?? targetMenuId
      const resolvedPath = path ?? menuInfo?.frmUrl ?? `/${targetMenuId}`

      addTab({
        id: targetMenuId,
        title: resolvedTitle,
        path: resolvedPath,
      })
      setActiveMenu(targetMenuId)
    },
    [openTabs, addTab, setActiveMenu],
  )

  // ---------- closeMenu ----------

  const closeMenu = useCallback(
    (targetMenuId: string) => {
      const tabIndex = openTabs.findIndex((t) => t.id === targetMenuId)
      if (tabIndex < 0) return

      removeTab(targetMenuId)

      // 닫은 탭이 현재 활성 탭이면 인접 탭 활성화
      if (activeMenuIdFromStore === targetMenuId) {
        const remaining = openTabs.filter((t) => t.id !== targetMenuId)
        if (remaining.length > 0) {
          // 가능하면 같은 인덱스, 없으면 마지막 탭
          const nextIndex = Math.min(tabIndex, remaining.length - 1)
          setActiveMenu(remaining[nextIndex].id)
        } else {
          setActiveMenu('')
        }
      }
    },
    [openTabs, activeMenuIdFromStore, removeTab, setActiveMenu],
  )

  // ---------- getActiveMenu ----------

  const getActiveMenu = useCallback(() => {
    if (!activeMenuIdFromStore) return null
    const tab = openTabs.find((t) => t.id === activeMenuIdFromStore)
    return tab ?? null
  }, [openTabs, activeMenuIdFromStore])

  // ---------- getNavigation ----------

  const getNavigation = useCallback((targetMenuId: string): string => {
    const parts: string[] = []
    const current = menuMap.get(targetMenuId)

    if (!current) return targetMenuId

    parts.unshift(current.menuNm)

    let parentId = current.menuGrp
    let depth = 0
    const maxDepth = 10 // 무한 루프 방지

    while (parentId && depth < maxDepth) {
      const parent = menuMap.get(parentId)
      if (!parent) break
      parts.unshift(parent.menuNm)
      parentId = parent.menuGrp
      depth++
    }

    return parts.join(' > ')
  }, [])

  // ---------- setMenuTree ----------

  const setMenuTree = useCallback((menus: MenuInfo[]) => {
    menuTree = menus
    rebuildMenuMap()
  }, [])

  // ---------- getMenuInfo ----------

  const getMenuInfo = useCallback((targetMenuId: string): MenuInfo | undefined => {
    return menuMap.get(targetMenuId)
  }, [])

  // ---------- broadcast ----------

  const broadcast = useCallback(
    <T = unknown>(event: string, data?: T, targetMenuIds?: string[], delayMs?: number) => {
      emitBroadcast(event, data, menuIdRef.current, targetMenuIds, delayMs)
    },
    [],
  )

  // ---------- onBroadcast ----------

  const onBroadcast = useCallback(
    <T = unknown>(event: string, handler: BroadcastHandler<T>): (() => void) => {
      return subscribeBroadcast(event, handler as BroadcastHandler, menuIdRef.current)
    },
    [],
  )

  return {
    openMenu,
    closeMenu,
    activeMenuId: activeMenuIdFromStore,
    getActiveMenu,
    getNavigation,
    setMenuTree,
    getMenuInfo,
    broadcast,
    onBroadcast,
    openTabs,
    maxTabCount: MAX_TAB_COUNT,
  }
}

// ---------------------------------------------------------------------------
// 유틸리티 함수 (훅 외부에서 사용)
// ---------------------------------------------------------------------------

/**
 * 메뉴 트리를 직접 설정 (훅 밖에서 사용).
 * 앱 초기화 시 서버 응답을 받아 호출한다.
 */
export function setGlobalMenuTree(menus: MenuInfo[]): void {
  menuTree = menus
  rebuildMenuMap()
}

/**
 * 메뉴 정보를 직접 조회 (훅 밖에서 사용).
 */
export function getGlobalMenuInfo(targetMenuId: string): MenuInfo | undefined {
  return menuMap.get(targetMenuId)
}

/**
 * prgmId로 menuId 조회 — gfn_multicastOpenFormByPrgmId 내부 로직 대응.
 */
export function findMenuIdByPrgmId(prgmId: string): string | undefined {
  for (const m of menuTree) {
    if (m.prgmId === prgmId) return m.menuId
  }
  return undefined
}

/**
 * 브로드캐스트 직접 호출 (훅 밖에서 사용) — gfn_multicast* 이벤트 핸들러 내 호출 대응.
 */
export function broadcastGlobal<T = unknown>(
  event: string,
  data?: T,
  targetMenuIds?: string[],
  delayMs?: number,
): void {
  emitBroadcast(event, data, undefined, targetMenuIds, delayMs)
}
