import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadSelect,
} from '#/components/ui/select'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps {
  value?: string
  onChange?: (value: string) => void
  options: SelectOption[]
  /** 첫 번째 빈 옵션 레이블 (예: '전체', '선택') */
  placeholder?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function Select({
  value,
  onChange,
  options,
  placeholder,
  disabled,
  className = '',
  style,
}: SelectProps) {
  return (
    <ShadSelect value={value} onValueChange={(v) => onChange?.(v ?? '')} disabled={disabled}>
      <SelectTrigger size="sm" className={`h-6 text-xs rounded-none ${className}`} style={style}>
        <SelectValue placeholder={placeholder ?? ''} />
      </SelectTrigger>
      <SelectContent>
        {placeholder !== undefined && <SelectItem value="">{placeholder}</SelectItem>}
        {options.map((opt) => (
          <SelectItem
            key={opt.value}
            value={opt.value || `__opt_${opt.label}`}
            disabled={opt.disabled}
          >
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadSelect>
  )
}
