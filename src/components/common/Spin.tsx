import { forwardRef } from 'react'
import { Input } from '#/components/ui/input'

export interface SpinProps {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  readOnly?: boolean
  className?: string
  id?: string
}

/**
 * Nexacro Spin 대응 — 숫자 증감 입력 필드
 */
const Spin = forwardRef<HTMLInputElement, SpinProps>(function Spin(
  { value, onChange, min, max, step = 1, className = '', ...props },
  ref,
) {
  return (
    <Input
      ref={ref}
      type="number"
      value={value ?? ''}
      onChange={(v) => {
        const n = Number(v)
        if (!Number.isNaN(n)) onChange?.(n)
      }}
      min={min}
      max={max}
      step={step}
      className={`h-6 text-xs px-1.5 rounded-none ${className}`}
      {...props}
    />
  )
})

export default Spin
