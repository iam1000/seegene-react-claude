import { ScrollArea } from '#/components/ui/scroll-area'

export interface ListBoxItem {
  value: string
  label: string
  disabled?: boolean
}

export interface ListBoxProps {
  items: ListBoxItem[]
  value?: string
  onChange?: (value: string) => void
  /** 다중 선택 여부 */
  multiple?: boolean
  selectedValues?: string[]
  onChangeMultiple?: (values: string[]) => void
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * Nexacro ListBox 대응 — 스크롤 가능한 선택 목록
 * shadcn ScrollArea 기반
 */
export default function ListBox({
  items,
  value,
  onChange,
  multiple = false,
  selectedValues = [],
  onChangeMultiple,
  disabled = false,
  className = '',
  style,
}: ListBoxProps) {
  const handleClick = (item: ListBoxItem) => {
    if (disabled || item.disabled) return

    if (multiple && onChangeMultiple) {
      const next = selectedValues.includes(item.value)
        ? selectedValues.filter((v) => v !== item.value)
        : [...selectedValues, item.value]
      onChangeMultiple(next)
    } else {
      onChange?.(item.value)
    }
  }

  const isSelected = (v: string) => (multiple ? selectedValues.includes(v) : value === v)

  return (
    <ScrollArea
      className={`border border-input bg-background ${disabled ? 'opacity-50' : ''} ${className}`}
      style={style}
    >
      {items.map((item) => (
        <div
          key={item.value}
          onClick={() => handleClick(item)}
          className={`px-2 py-1 text-xs cursor-pointer select-none
            ${isSelected(item.value) ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}
            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {item.label}
        </div>
      ))}
    </ScrollArea>
  )
}
