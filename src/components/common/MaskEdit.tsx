import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'

export interface MaskEditProps {
  /** IMask 패턴 (예: '000-0000-0000', '0000/00/00') */
  mask: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  className?: string
  id?: string
}

/**
 * Nexacro MaskEdit 대응 — 입력 포맷 마스크 적용
 *
 * 자주 쓰는 마스크 패턴:
 *   전화번호:  '000-0000-0000'
 *   사업자번호: '000-00-00000'
 *   주민번호:  '000000-0000000'
 *   날짜:      '0000/00/00'
 *   우편번호:  '00000'
 */
const MaskEdit = forwardRef<HTMLInputElement, MaskEditProps>(function MaskEdit(
  { mask, value, onChange, className = '', ...props },
  ref,
) {
  return (
    <IMaskInput
      inputRef={ref}
      mask={mask}
      value={value ?? ''}
      onAccept={(v) => onChange?.(String(v))}
      className={`h-6 px-1.5 text-xs border border-input bg-background text-foreground
        placeholder:text-muted-foreground focus:outline-none focus:border-ring
        disabled:bg-input/50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
})

export default MaskEdit
