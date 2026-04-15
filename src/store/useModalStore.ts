import type React from 'react'
import { create } from 'zustand'

/**
 * 모달 옵션 — gfn_openPopup의 oOption에 대응.
 * 좌표 기반 위치 지정은 웹에서 skip (항상 화면 중앙 정렬).
 */
export interface ModalOptions {
  /** 모달 여부 (기본: true). false면 modeless 동작 */
  modal?: boolean
  /** 팝업 너비 (px) */
  width?: number
  /** 팝업 높이 (px) */
  height?: number
  /** 타이틀바 표시 여부 (기본: true) */
  showTitle?: boolean
  /** 오버레이 색상 (기본: rgba(0,0,0,0.2)) */
  overlayColor?: string
  /** 크기 조절 가능 여부 (기본: false) */
  resizable?: boolean
  /** ESC로 닫기 허용 (기본: true) */
  closeOnEscape?: boolean
  /** 오버레이 클릭으로 닫기 허용 (기본: false) */
  closeOnOverlay?: boolean
  /** 커스텀 CSS 클래스 */
  className?: string
}

/**
 * 팝업 열기 요청 파라미터 — gfn_openPopup(sPopupId, sUrl, oArg, sPopupCallback, oOption)에 대응.
 */
export interface OpenPopupConfig {
  /** 팝업 고유 ID (gfn_openPopup의 sPopupId) */
  id: string
  /** 팝업으로 렌더링할 React 컴포넌트 */
  component: React.ComponentType<PopupComponentProps>
  /** 팝업 타이틀 (oOption.title 대응) */
  title?: string
  /** 팝업에 전달할 인자 (oArg 대응 — gfn_getPopupArguments로 조회) */
  arguments?: Record<string, unknown>
  /** 팝업 옵션 */
  options?: ModalOptions
}

/**
 * 팝업 결과 — gfn_closePopup(objRtn)의 objRtn에 대응.
 */
export interface PopupResult {
  /** 닫힘 사유: confirm(확인), cancel(취소/ESC/오버레이) */
  reason: 'confirm' | 'cancel'
  /** 반환 데이터 */
  data?: unknown
}

/**
 * 모달 스택 아이템 — 활성 모달 1건의 내부 상태.
 */
export interface ModalEntry {
  /** 팝업 고유 ID */
  id: string
  /** 렌더링할 컴포넌트 */
  component: React.ComponentType<PopupComponentProps>
  /** 타이틀 */
  title: string
  /** 팝업 인자 */
  arguments: Record<string, unknown>
  /** 옵션 */
  options: Required<ModalOptions>
  /** Promise resolve (닫힐 때 결과 전달) */
  resolve: (result: PopupResult) => void
  /** z-index 기준값 (스택 순서) */
  zIndex: number
}

/**
 * 팝업 내부 컴포넌트가 받는 Props.
 * ModalContainer가 자동으로 주입한다.
 */
export interface PopupComponentProps {
  /** 팝업 고유 ID */
  modalId: string
  /** 팝업 인자 (gfn_getPopupArguments 대응) */
  popupArguments: Record<string, unknown>
  /** 팝업 닫기 함수 (gfn_closePopup 대응) */
  closePopup: (result?: unknown) => void
}

/** z-index 시작값 (shadcn Dialog의 기본 z-50 = 50보다 충분히 높게) */
const BASE_Z_INDEX = 100

/** 기본 모달 옵션 */
const DEFAULT_OPTIONS: Required<ModalOptions> = {
  modal: true,
  width: 600,
  height: 400,
  showTitle: true,
  overlayColor: 'rgba(0,0,0,0.2)',
  resizable: false,
  closeOnEscape: true,
  closeOnOverlay: false,
  className: '',
}

interface ModalState {
  /** 활성 모달 스택 (다중 팝업 지원) */
  modals: ModalEntry[]

  /** 모달 추가 (Promise resolve를 포함) */
  openModal: (config: OpenPopupConfig, resolve: (result: PopupResult) => void) => void

  /** 모달 제거 + 결과 반환 */
  closeModal: (id: string, result?: PopupResult) => void

  /** 최상위 모달 반환 */
  getTopModal: () => ModalEntry | undefined

  /** 특정 모달 열림 여부 */
  isModalOpen: (id: string) => boolean

  /** 모달 전체 초기화 (로그아웃 등) */
  clearAll: () => void
}

/**
 * 모달 스택 Zustand 저장소
 *
 * Nexacro ChildFrame 기반 팝업 관리를 React Portal + Dialog 패턴으로 전환.
 * 다중 팝업(스택)을 지원하며, 각 모달은 Promise 기반으로 결과를 반환한다.
 *
 * @example
 * // 직접 사용하지 말고 useModal 훅을 통해 사용할 것
 * import { useModal } from '#/hooks/useModal'
 * const { openPopup, closePopup } = useModal()
 */
export const useModalStore = create<ModalState>((set, get) => ({
  modals: [],

  openModal: (config, resolve) => {
    set((state) => {
      // 동일 ID가 이미 열려 있으면 즉시 cancel로 resolve (Promise hang 방지)
      if (state.modals.some((m) => m.id === config.id)) {
        resolve({ reason: 'cancel' })
        return state
      }

      const entry: ModalEntry = {
        id: config.id,
        component: config.component,
        title: config.title ?? '',
        arguments: config.arguments ?? {},
        options: { ...DEFAULT_OPTIONS, ...config.options },
        resolve,
        zIndex: BASE_Z_INDEX + state.modals.length * 10,
      }

      return { modals: [...state.modals, entry] }
    })
  },

  closeModal: (id, result) => {
    const modal = get().modals.find((m) => m.id === id)
    if (!modal) return

    // resolve 호출로 Promise 완료
    modal.resolve(result ?? { reason: 'cancel' })

    set((state) => ({
      modals: state.modals.filter((m) => m.id !== id),
    }))
  },

  getTopModal: () => {
    const { modals } = get()
    return modals.length > 0 ? modals[modals.length - 1] : undefined
  },

  isModalOpen: (id) => get().modals.some((m) => m.id === id),

  clearAll: () => {
    // 열린 모달 모두 cancel로 resolve
    for (const modal of get().modals) {
      modal.resolve({ reason: 'cancel' })
    }
    set({ modals: [] })
  },
}))
