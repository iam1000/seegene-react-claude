import dayjs, { type Dayjs } from 'dayjs'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface DateRangePickerProps {
  fromDate: string
  toDate: string
  onChange: (from: string, to: string) => void
  disabled?: boolean
}

// locale 기반 요일 레이블 (시작 요일 자동 적용)
function getWeekLabels(locale: string) {
  dayjs.locale(locale)
  const firstDay = dayjs.localeData().firstDayOfWeek() // 0=일, 1=월
  const all = ['일', '월', '화', '수', '목', '금', '토']
  return [...all.slice(firstDay), ...all.slice(0, firstDay)]
}

function MonthCalendar({
  month,
  fromDate,
  toDate,
  hoverDate,
  onSelect,
  onHover,
  onPrevMonth,
  onNextMonth,
  showPrev = true,
  showNext = true,
  weekLabels,
  firstDayOfWeek,
}: {
  month: Dayjs
  fromDate: Dayjs | null
  toDate: Dayjs | null
  hoverDate: Dayjs | null
  onSelect: (d: Dayjs) => void
  onHover: (d: Dayjs | null) => void
  onPrevMonth: () => void
  onNextMonth: () => void
  showPrev?: boolean
  showNext?: boolean
  weekLabels: string[]
  firstDayOfWeek: number
}) {
  const startOfMonth = month.startOf('month')
  const endOfMonth = month.endOf('month')
  // 시작 요일을 locale 기준으로 보정
  const startDay = (startOfMonth.day() - firstDayOfWeek + 7) % 7
  const totalDays = endOfMonth.date()

  const cells: (Dayjs | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => startOfMonth.add(i, 'day')),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const rangeEnd = toDate ?? hoverDate

  const isInRange = (d: Dayjs) => {
    if (!fromDate || !rangeEnd) return false
    const [s, e] = fromDate.isBefore(rangeEnd) ? [fromDate, rangeEnd] : [rangeEnd, fromDate]
    return d.isAfter(s) && d.isBefore(e)
  }

  const isFrom = (d: Dayjs) => fromDate?.isSame(d, 'day') ?? false
  const isTo = (d: Dayjs) => (toDate ?? hoverDate)?.isSame(d, 'day') ?? false

  return (
    <div className="w-[200px]">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-2">
        {showPrev ? (
          <button
            onClick={onPrevMonth}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500"
          >
            ‹
          </button>
        ) : (
          <div className="w-6" />
        )}
        <span className="text-xs font-medium">{month.format('YYYY년 MM월')}</span>
        {showNext ? (
          <button
            onClick={onNextMonth}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500"
          >
            ›
          </button>
        ) : (
          <div className="w-6" />
        )}
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-1">
        {weekLabels.map((d, i) => (
          <div
            key={d}
            className={`text-center text-[10px] font-medium py-0.5 ${
              i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-gray-500'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />
          const dayOfWeek = (d.day() - firstDayOfWeek + 7) % 7 // locale 기준 컬럼 위치
          const from = isFrom(d)
          const to = isTo(d)
          const inRange = isInRange(d)
          const isToday = d.isSame(dayjs(), 'day')

          return (
            <button
              key={i}
              onClick={() => onSelect(d)}
              onMouseEnter={() => onHover(d)}
              onMouseLeave={() => onHover(null)}
              className={`
                relative h-7 text-[11px] flex items-center justify-center
                ${from || to ? 'text-white z-10' : ''}
                ${inRange ? 'bg-blue-50' : ''}
                ${from ? 'rounded-l-full' : ''}
                ${to ? 'rounded-r-full' : ''}
                ${from || to ? '' : 'hover:bg-blue-100 rounded-full'}
                ${!from && !to && dayOfWeek === 0 ? 'text-red-400' : ''}
                ${!from && !to && dayOfWeek === 6 ? 'text-blue-400' : ''}
              `}
            >
              {(from || to) && (
                <span className="absolute inset-0.5 rounded-full bg-blue-500 flex items-center justify-center text-white z-10">
                  {d.date()}
                </span>
              )}
              {isToday && !from && !to && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
              )}
              {!from && !to && <span className="relative z-10">{d.date()}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function DateRangePicker({
  fromDate,
  toDate,
  onChange,
  disabled,
}: DateRangePickerProps) {
  const { i18n } = useTranslation()
  const locale = i18n.language?.split('-')[0] ?? 'ko'
  dayjs.locale(locale)
  const firstDayOfWeek = dayjs.localeData().firstDayOfWeek()
  const weekLabels = getWeekLabels(locale)

  const [open, setOpen] = useState(false)
  const [leftMonth, setLeftMonth] = useState(dayjs(fromDate || undefined).startOf('month'))
  const [tempFrom, setTempFrom] = useState<Dayjs | null>(fromDate ? dayjs(fromDate) : null)
  const [tempTo, setTempTo] = useState<Dayjs | null>(toDate ? dayjs(toDate) : null)
  const [hoverDate, setHoverDate] = useState<Dayjs | null>(null)
  const [selectingFrom, setSelectingFrom] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const rightMonth = leftMonth.add(1, 'month')

  const handleOpen = () => {
    if (disabled) return
    setTempFrom(fromDate ? dayjs(fromDate) : null)
    setTempTo(toDate ? dayjs(toDate) : null)
    setLeftMonth(dayjs(fromDate || undefined).startOf('month'))
    setSelectingFrom(true)
    setOpen(true)
  }

  const handleSelect = (d: Dayjs) => {
    if (selectingFrom) {
      setTempFrom(d)
      setTempTo(null)
      setSelectingFrom(false)
    } else {
      if (d.isBefore(tempFrom)) {
        setTempFrom(d)
        setTempTo(tempFrom)
      } else {
        setTempTo(d)
      }
      setSelectingFrom(true)
    }
  }

  const handleQuickSelect = (type: 'today' | 'week' | 'week2' | 'month') => {
    const today = dayjs()
    const map = {
      today: [today, today],
      week: [today.subtract(6, 'day'), today],
      week2: [today.subtract(13, 'day'), today],
      month: [today.subtract(1, 'month').add(1, 'day'), today],
    }
    const [from, to] = map[type]
    setTempFrom(from)
    setTempTo(to)
    setSelectingFrom(true)
  }

  const handleConfirm = () => {
    if (!tempFrom || !tempTo) return
    onChange(tempFrom.format('YYYY-MM-DD'), tempTo.format('YYYY-MM-DD'))
    setOpen(false)
  }

  const handleReset = () => {
    setTempFrom(null)
    setTempTo(null)
    setSelectingFrom(true)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-1">
      {/* From 입력 */}
      <button
        onClick={handleOpen}
        disabled={disabled}
        className="flex items-center gap-1 border border-gray-300 h-6 px-2 text-xs min-w-[100px] bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <span className={fromDate ? 'text-gray-800' : 'text-gray-400'}>
          {fromDate || 'YYYY-MM-DD'}
        </span>
        <span className="text-gray-400 text-[10px]">▼</span>
      </button>

      <span className="text-gray-400 text-xs">~</span>

      {/* To 입력 */}
      <button
        onClick={handleOpen}
        disabled={disabled}
        className="flex items-center gap-1 border border-gray-300 h-6 px-2 text-xs min-w-[100px] bg-white hover:border-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <span className={toDate ? 'text-gray-800' : 'text-gray-400'}>{toDate || 'YYYY-MM-DD'}</span>
        <span className="text-gray-400 text-[10px]">▼</span>
      </button>

      {/* 팝업 */}
      {open && (
        <div
          className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-300 shadow-lg rounded"
          style={{ width: 470 }}
        >
          {/* 타이틀 */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
            <span className="text-xs font-medium text-gray-700">기간 달력</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-sm leading-none"
            >
              ✕
            </button>
          </div>

          {/* 달력 2개 */}
          <div className="flex gap-4 px-4 pt-3 pb-2">
            <MonthCalendar
              month={leftMonth}
              fromDate={tempFrom}
              toDate={tempTo}
              hoverDate={hoverDate}
              onSelect={handleSelect}
              onHover={setHoverDate}
              onPrevMonth={() => setLeftMonth((m) => m.subtract(1, 'month'))}
              onNextMonth={() => setLeftMonth((m) => m.add(1, 'month'))}
              showNext={false}
              weekLabels={weekLabels}
              firstDayOfWeek={firstDayOfWeek}
            />
            <div className="w-px bg-gray-200" />
            <MonthCalendar
              month={rightMonth}
              fromDate={tempFrom}
              toDate={tempTo}
              hoverDate={hoverDate}
              onSelect={handleSelect}
              onHover={setHoverDate}
              onPrevMonth={() => setLeftMonth((m) => m.subtract(1, 'month'))}
              onNextMonth={() => setLeftMonth((m) => m.add(1, 'month'))}
              showPrev={false}
              weekLabels={weekLabels}
              firstDayOfWeek={firstDayOfWeek}
            />
          </div>

          {/* 빠른 선택 버튼 */}
          <div className="flex items-center gap-1 px-4 py-2 border-t border-gray-100">
            {[
              { label: '당일', type: 'today' as const },
              { label: '1주', type: 'week' as const },
              { label: '2주', type: 'week2' as const },
              { label: '1개월', type: 'month' as const },
            ].map(({ label, type }) => (
              <button
                key={type}
                onClick={() => handleQuickSelect(type)}
                className="px-3 h-6 text-xs border border-gray-300 hover:bg-gray-50 rounded"
              >
                {label}
              </button>
            ))}
          </div>

          {/* 선택기간 표시 */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-t border-gray-100">
            <span className="text-[11px] text-gray-500">선택기간</span>
            <span className="text-xs font-medium text-blue-600">
              {tempFrom?.format('YYYY-MM-DD') ?? '____-__-__'}
            </span>
            <span className="text-gray-400 text-xs">~</span>
            <span className="text-xs font-medium text-blue-600">
              {tempTo?.format('YYYY-MM-DD') ?? '____-__-__'}
            </span>
          </div>

          {/* 하단 버튼 */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <button
              onClick={handleReset}
              className="px-4 h-7 text-xs border border-gray-300 hover:bg-gray-50 rounded"
            >
              초기화
            </button>
            <button
              onClick={handleConfirm}
              disabled={!tempFrom || !tempTo}
              className="px-6 h-7 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
