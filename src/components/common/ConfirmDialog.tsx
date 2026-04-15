import { AlertCircle, CheckCircle, Info, TriangleAlert } from 'lucide-react'
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

export interface ConfirmDialogProps {
  /** 다이얼로그 열림 여부 */
  open: boolean
  /** 제목 (기본값: "확인") */
  title?: string
  /** 본문 메시지 */
  message: string
  /** 상세 메시지 */
  detail?: string
  /** 아이콘 타입 */
  iconType?: IconType
  /** 확인 버튼 텍스트 (기본값: "확인") */
  confirmText?: string
  /** 취소 버튼 텍스트 (기본값: "취소") */
  cancelText?: string
  /** 확인 콜백 */
  onConfirm: () => void
  /** 취소 콜백 */
  onCancel: () => void
}

const iconMap: Record<IconType, React.ReactNode> = {
  information: <Info className="size-5 text-blue-500" />,
  question: <CheckCircle className="size-5 text-blue-500" />,
  warning: <TriangleAlert className="size-5 text-amber-500" />,
  error: <AlertCircle className="size-5 text-red-500" />,
}

export default function ConfirmDialog({
  open,
  title = '확인',
  message,
  detail,
  iconType = 'question',
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onCancel()}>
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
          <Button variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
