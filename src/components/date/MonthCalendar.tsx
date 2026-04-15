import dayjs, { type Dayjs } from 'dayjs'

export interface MonthCalendarProps {
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
}

/** locale 기준 요일 레이블 배열 반환 (시작 요일 자동 적용) */
export function getWeekLabels(locale: string): string[] {
  dayjs.locale(locale)
  const firstDay = dayjs.localeData().firstDayOfWeek()
  const all = ['일', '월', '화', '수', '목', '금', '토']
  return [...all.slice(firstDay), ...all.slice(0, firstDay)]
}

export default function MonthCalendar({
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
}: MonthCalendarProps) {
  const startOfMonth = month.startOf('month')
  const endOfMonth = month.endOf('month')
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
            type="button"
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
            type="button"
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
          const dayOfWeek = (d.day() - firstDayOfWeek + 7) % 7
          const from = isFrom(d)
          const to = isTo(d)
          const inRange = isInRange(d)
          const isToday = d.isSame(dayjs(), 'day')

          return (
            <button
              key={i}
              type="button"
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
