import { useState } from 'react'
import { ko } from 'react-day-picker/locale'
import { Calendar } from '#/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '#/components/ui/popover'

export interface DatePickerProps {
  /** YYYYMMDD 형식 (예: '20260301'). 빈 문자열 허용. */
  value: string
  /** YYYYMMDD 형식으로 반환 */
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
  className?: string
}

function parseToDate(v: string): Date | undefined {
  if (!v || v.length < 8) return undefined
  const y = parseInt(v.slice(0, 4), 10)
  const m = parseInt(v.slice(4, 6), 10) - 1
  const d = parseInt(v.slice(6, 8), 10)
  const date = new Date(y, m, d)
  return Number.isNaN(date.getTime()) ? undefined : date
}

function formatToYMD(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}${m}${day}`
}

function formatDisplay(v: string): string {
  if (!v || v.length < 8) return ''
  return `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`
}

export default function DatePicker({
  value,
  onChange,
  disabled,
  placeholder = 'YYYY-MM-DD',
  className = '',
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const selected = parseToDate(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        className={`inline-flex items-center gap-1 border border-input h-6 px-2 text-xs min-w-[100px] bg-background
          hover:bg-muted disabled:bg-input/50 disabled:cursor-not-allowed ${className}`}
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <span className="text-muted-foreground text-[10px]">▼</span>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" side="bottom">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(day) => {
            if (day) {
              onChange(formatToYMD(day))
              setOpen(false)
            }
          }}
          locale={ko}
          defaultMonth={selected}
        />
      </PopoverContent>
    </Popover>
  )
}
