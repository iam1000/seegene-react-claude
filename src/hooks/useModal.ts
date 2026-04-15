import { useCallback, useMemo } from 'react'
import {
  type ModalOptions,
  type OpenPopupConfig,
  type PopupComponentProps,
  type PopupResult,
  useModalStore,
} from '#/store/useModalStore'

/**
 * useModal 반환 타입
 */
export interface UseModalReturn {
  /**
   * 팝업 열기 — gfn_openPopup 대응.
   *
   * Promise 기반으로 동작하며, 팝업이 닫힐 때 결과를 반환한다.
   *
   * @example
   * const { openPopup } = useModal()
   * const result = await openPopup({
   *   id: 'selectPatient',
   *   component: PatientSearchPopup,
   *   title: '환자 검색',
   *   width: 800,
   *   height: 600,
   *   arguments: { deptCd: 'DT', searchType: 'name' },
   * })
   * if (result.reason === 'confirm') {
   *   console.log('선택된 환자:', result.data)
   * }
   */
  openPopup: (params: OpenPopupParams) => Promise<PopupResult>

  /**
   * 현재 팝업 닫기 + 결과 반환 — gfn_closePopup 대응.
   *
   * 팝업 컴포넌트 내부에서 호출한다.
   * modalId 없이 호출하면 최상위 모달을 닫는다.
   *
   * @example
   * // 확인 버튼 클릭 시
   * closePopup({ reason: 'confirm', data: selectedRow })
   *
   * // 취소 또는 단순 닫기
   * closePopup()
   */
  closePopup: (result?: PopupResult) => void

  /**
   * 특정 ID의 팝업 닫기 — 외부에서 특정 팝업을 명시적으로 닫을 때 사용.
   */
  closePopupById: (id: string, result?: PopupResult) => void

  /**
   * 팝업 인자 가져오기 — gfn_getPopupArguments 대응.
   *
   * 팝업 컴포넌트 내부에서 사용. PopupComponentProps를 통해
   * popupArguments로도 접근 가능하나, 훅 기반 접근이 필요할 때 사용.
   *
   * @example
   * const args = getArguments()
   * const deptCd = args.deptCd as string
   */
  getArguments: () => Record<string, unknown>

  /**
   * 현재 컴포넌트가 팝업 내부인지 여부 — gfn_isPopupFrame 대응.
   */
  isPopup: boolean

  /**
   * 특정 모달이 열려 있는지 확인
   */
  isModalOpen: (id: string) => boolean

  /** 현재 열린 모달 수 */
  modalCount: number
}

/**
 * openPopup 파라미터 — OpenPopupConfig를 평탄화하여 사용 편의성을 높인 형태.
 */
export interface OpenPopupParams {
  /** 팝업 고유 ID (sPopupId 대응) */
  id: string
  /** 팝업으로 렌더링할 React 컴포넌트 */
  component: React.ComponentType<PopupComponentProps>
  /** 팝업 타이틀 */
  title?: string
  /** 팝업 너비 (px) */
  width?: number
  /** 팝업 높이 (px) */
  height?: number
  /** 모달 여부 (기본: true) */
  modal?: boolean
  /** 팝업에 전달할 인자 (oArg 대응) */
  arguments?: Record<string, unknown>
  /** 추가 옵션 */
  options?: Omit<ModalOptions, 'modal' | 'width' | 'height'>
}

/**
 * 팝업/모달 관리 훅 — Nexacro Popup.xjs의 React 전환.
 *
 * Nexacro의 gfn_openPopup / gfn_closePopup / gfn_getPopupArguments /
 * gfn_isPopupFrame을 React 훅으로 통합 제공한다.
 *
 * ## 원본 함수 매핑
 *
 * | Nexacro (Popup.xjs) | React (useModal) |
 * |---|---|
 * | gfn_openPopup | openPopup |
 * | gfn_closePopup | closePopup |
 * | gfn_getPopupArguments | getArguments / popupArguments prop |
 * | gfn_isPopupFrame | isPopup |
 * | gfn_cmnPopup | openPopup (통합) |
 * | gfn_popupClose | closePopup (통합) |
 * | gfn_openDqPopup | TODO: 별도 DQ 팝업 훅으로 분리 예정 |
 * | gfn_getPositionPopupPersonal | skip (웹: 화면 중앙 정렬) |
 * | gfn_resolvePopupPositionAndSize | skip (웹: 화면 중앙 정렬) |
 * | gfn_wrapQuoteByPopupTitleText | 불필요 (React에서 문자열 그대로 사용) |
 * | gfn_getCellBind | Grid 훅으로 이동 예정 |
 * | gfn_openDqPopupCallback | TODO: DQ 팝업 내부 처리 |
 *
 * @param modalId - 팝업 컴포넌트 내부에서 사용 시, 자신의 모달 ID를 전달.
 *   ModalContainer가 PopupComponentProps.modalId로 자동 주입하므로
 *   일반적으로 직접 전달할 필요 없음.
 *
 * @example
 * // === 팝업을 여는 쪽 (부모 화면) ===
 * function PatientListPage() {
 *   const { openPopup } = useModal()
 *
 *   const handleSearch = async () => {
 *     const result = await openPopup({
 *       id: 'patientSearch',
 *       component: PatientSearchPopup,
 *       title: '환자 검색',
 *       width: 800,
 *       height: 600,
 *       arguments: { deptCd: 'DT' },
 *     })
 *     if (result.reason === 'confirm') {
 *       setPatient(result.data as PatientInfo)
 *     }
 *   }
 *
 *   return <Button onClick={handleSearch}>환자 검색</Button>
 * }
 *
 * // === 팝업 컴포넌트 (자식 화면) ===
 * function PatientSearchPopup({ popupArguments, closePopup }: PopupComponentProps) {
 *   const deptCd = popupArguments.deptCd as string
 *
 *   const handleSelect = (patient: PatientInfo) => {
 *     closePopup({ reason: 'confirm', data: patient })
 *   }
 *
 *   return (
 *     <div>
 *       <p>부서: {deptCd}</p>
 *       <Button onClick={() => handleSelect(selectedRow)}>선택</Button>
 *       <Button variant="outline" onClick={() => closePopup()}>취소</Button>
 *     </div>
 *   )
 * }
 */
export function useModal(modalId?: string): UseModalReturn {
  const modals = useModalStore((s) => s.modals)
  const openModalAction = useModalStore((s) => s.openModal)
  const closeModalAction = useModalStore((s) => s.closeModal)
  const isModalOpenCheck = useModalStore((s) => s.isModalOpen)

  const openPopup = useCallback(
    (params: OpenPopupParams): Promise<PopupResult> => {
      return new Promise<PopupResult>((resolve) => {
        const config: OpenPopupConfig = {
          id: params.id,
          component: params.component,
          title: params.title,
          arguments: params.arguments,
          options: {
            modal: params.modal,
            width: params.width,
            height: params.height,
            ...params.options,
          },
        }
        openModalAction(config, resolve)
      })
    },
    [openModalAction],
  )

  const closePopup = useCallback(
    (result?: PopupResult) => {
      if (modalId) {
        // 팝업 내부에서 호출: 자신의 모달 닫기
        closeModalAction(modalId, result ?? { reason: 'cancel' })
      } else {
        // 외부에서 호출: 최상위 모달 닫기
        const top = useModalStore.getState().getTopModal()
        if (top) {
          closeModalAction(top.id, result ?? { reason: 'cancel' })
        }
      }
    },
    [modalId, closeModalAction],
  )

  const closePopupById = useCallback(
    (id: string, result?: PopupResult) => {
      closeModalAction(id, result ?? { reason: 'cancel' })
    },
    [closeModalAction],
  )

  const getArguments = useCallback((): Record<string, unknown> => {
    if (!modalId) return {}
    const modal = useModalStore.getState().modals.find((m) => m.id === modalId)
    return modal?.arguments ?? {}
  }, [modalId])

  const isPopup = useMemo(() => {
    if (!modalId) return false
    return modals.some((m) => m.id === modalId)
  }, [modalId, modals])

  const isModalOpen = useCallback((id: string) => isModalOpenCheck(id), [isModalOpenCheck])

  const modalCount = modals.length

  return {
    openPopup,
    closePopup,
    closePopupById,
    getArguments,
    isPopup,
    isModalOpen,
    modalCount,
  }
}

export type { ModalOptions, PopupComponentProps, PopupResult } from '#/store/useModalStore'
