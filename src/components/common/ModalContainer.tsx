import { XIcon } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { Button } from '#/components/ui/button'
import type { ModalEntry, PopupResult } from '#/store/useModalStore'
import { useModalStore } from '#/store/useModalStore'

/**
 * 모달 렌더링 컨테이너 — 모달 스택의 모든 활성 모달을 렌더링.
 *
 * App.tsx의 최상위에 한 번만 배치하면 동작한다.
 * Nexacro의 ChildFrame + showModal 패턴을 React Portal + Dialog로 전환.
 *
 * ## 기능
 * - 다중 모달 스택 지원 (z-index 자동 관리)
 * - ESC 키로 최상위 모달만 닫기
 * - 오버레이 클릭으로 닫기 (옵션)
 * - 크기 조절 (width, height props)
 * - 모달/모드리스 구분 (modal 옵션)
 *
 * @example
 * // App.tsx
 * function App() {
 *   return (
 *     <>
 *       <RouterProvider router={router} />
 *       <ModalContainer />
 *     </>
 *   )
 * }
 */
export default function ModalContainer() {
  const modals = useModalStore((s) => s.modals)
  const closeModal = useModalStore((s) => s.closeModal)

  // ESC 키로 최상위 모달만 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || modals.length === 0) return

      const topModal = modals[modals.length - 1]
      if (topModal.options.closeOnEscape) {
        e.preventDefault()
        e.stopPropagation()
        closeModal(topModal.id, { reason: 'cancel' })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modals, closeModal])

  if (modals.length === 0) return null

  return (
    <div data-slot="modal-container">
      {modals.map((modal) => (
        <ModalOverlay key={modal.id} modal={modal} onClose={closeModal} />
      ))}
    </div>
  )
}

// ─── 내부 컴포넌트 ────────────────────────────────────────────────

interface ModalOverlayProps {
  modal: ModalEntry
  onClose: (id: string, result?: PopupResult) => void
}

function ModalOverlay({ modal, onClose }: ModalOverlayProps) {
  const { id, component: Component, title, arguments: args, options, zIndex } = modal

  const handleOverlayClick = useCallback(() => {
    if (options.closeOnOverlay) {
      onClose(id, { reason: 'cancel' })
    }
  }, [id, options.closeOnOverlay, onClose])

  const handleCloseButton = useCallback(() => {
    onClose(id, { reason: 'cancel' })
  }, [id, onClose])

  const handleClosePopup = useCallback(
    (result?: unknown) => {
      if (result && typeof result === 'object' && 'reason' in result) {
        onClose(id, result as PopupResult)
      } else if (result !== undefined) {
        onClose(id, { reason: 'confirm', data: result })
      } else {
        onClose(id, { reason: 'cancel' })
      }
    },
    [id, onClose],
  )

  return (
    <>
      {/* 오버레이 */}
      {options.modal && (
        <div
          className="fixed inset-0 supports-backdrop-filter:backdrop-blur-xs"
          style={{
            zIndex,
            backgroundColor: options.overlayColor,
          }}
          onClick={handleOverlayClick}
          onKeyDown={undefined}
          role="presentation"
        />
      )}

      {/* 모달 본체 */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: zIndex + 1 }}
        role="dialog"
        aria-modal={options.modal}
        aria-label={title || undefined}
      >
        <div
          className={[
            'pointer-events-auto flex flex-col rounded-xl bg-popover text-popover-foreground ring-1 ring-foreground/10 shadow-lg outline-none',
            'animate-in fade-in-0 zoom-in-95',
            options.className,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            width: options.width,
            maxWidth: 'calc(100vw - 2rem)',
            height: options.height,
            maxHeight: 'calc(100vh - 2rem)',
          }}
        >
          {/* 타이틀바 */}
          {options.showTitle && (
            <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
              <h2 className="font-heading text-base leading-none font-medium truncate">{title}</h2>
              <Button variant="ghost" size="icon-sm" onClick={handleCloseButton} aria-label="닫기">
                <XIcon className="size-4" />
              </Button>
            </div>
          )}

          {/* 콘텐츠 영역 */}
          <div className="flex-1 overflow-auto p-4">
            <Component modalId={id} popupArguments={args} closePopup={handleClosePopup} />
          </div>
        </div>
      </div>
    </>
  )
}
