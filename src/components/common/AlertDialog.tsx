import { AlertCircle, CheckCircle, Info, TriangleAlert } from 'lucide-react'
import { useCallback, useEffect, useRef } from 'react'
import { Button } from '#/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import type { IconType } from '#/store/useMessageStore'

export interface AlertDialogProps {
  /** 다이얼로그 열림 여부 */
  open: boolean
  /** 제목 (기본값: "알림") */
  title?: string
  /** 본문 메시지 */
  message: string
  /** 상세 메시지 (오류 상세 등) */
  detail?: string
  /** 아이콘 타입 */
  iconType?: IconType
  /** 확인 버튼 텍스트 (기본값: "확인") */
  confirmText?: string
  /** 자동 닫기 타이머(ms). 0이면 비활성 */
  autoCloseMs?: number
  /** 확인 또는 닫기 콜백 */
  onClose: () => void
}

const iconMap: Record<IconType, React.ReactNode> = {
  information: <Info className="size-5 text-blue-500" />,
  question: <CheckCircle className="size-5 text-blue-500" />,
  warning: <TriangleAlert className="size-5 text-amber-500" />,
  error: <AlertCircle className="size-5 text-red-500" />,
}

export default function AlertDialog({
  open,
  title = '알림',
  message,
  detail,
  iconType = 'information',
  confirmText = '확인',
  autoCloseMs = 0,
  onClose,
}: AlertDialogProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    clearTimer()
    if (open && autoCloseMs > 0) {
      timerRef.current = setTimeout(() => {
        onClose()
      }, autoCloseMs)
    }
    return clearTimer
  }, [open, autoCloseMs, onClose, clearTimer])

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {iconMap[iconType]}
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="whitespace-pre-wrap">{message}</DialogDescription>
        {detail && (
          <div className="mt-1 max-h-40 overflow-y-auto rounded-md border bg-muted/50 p-3 text-xs text-muted-foreground whitespace-pre-wrap">
            {detail}
          </div>
        )}
        <DialogFooter>
          <Button onClick={onClose}>{confirmText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
