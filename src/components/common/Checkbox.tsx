import { useId } from 'react'
import { Checkbox as ShadCheckbox } from '#/components/ui/checkbox'

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  /** 체크박스 오른쪽 레이블 텍스트 */
  label?: string
  id?: string
  disabled?: boolean
  className?: string
}

export default function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  id,
  disabled,
  className = '',
}: CheckboxProps) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <ShadCheckbox
        id={inputId}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={(v) => onChange?.(v === true)}
        disabled={disabled}
      />
      {label && (
        <label
          htmlFor={inputId}
          className={`text-xs text-gray-700 select-none ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
