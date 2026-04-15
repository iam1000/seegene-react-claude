import { useIBChart } from '#/hooks/useIBChart'
import type {
  ChartData,
  ChartEventHandlers,
  ChartLayout,
  ChartLayoutConfig,
  ChartSeries,
  ChartTheme,
  DrilldownData,
  MultiChartGrid,
  MultiChartItem,
  SlideDataSet,
  SlideLayoutSet,
} from '#/types/ibchart'

/* ------------------------------------------------------------------ */
/*  Props 인터페이스                                                   */
/* ------------------------------------------------------------------ */

export interface IBChartProps {
  /** 차트 고유 ID */
  id: string
  /** 차트 레이아웃 설정 */
  layout: ChartLayout
  /** 차트 데이터 */
  data?: ChartData
  /** 테마 */
  theme?: ChartTheme
  /** 차트 너비 (CSS 단위 또는 숫자) */
  width?: string | number
  /** 차트 높이 (CSS 단위 또는 숫자) */
  height?: string | number
  /** 배경색 */
  backgroundColor?: string
  /** 이벤트 핸들러 */
  events?: ChartEventHandlers
  /** 슬라이드 레이아웃 */
  slideLayouts?: SlideLayoutSet
  /** 슬라이드 데이터 */
  slideData?: SlideDataSet
  /** 드릴다운 데이터 */
  drilldown?: DrilldownData[]
  /** 멀티 차트 그리드 설정 */
  multi?: MultiChartGrid
  /** 멀티 차트 개별 항목 */
  multiItems?: MultiChartItem[]
  /** 데이터 없음 표시 문구 */
  noDataText?: string
  /** 애니메이션 활성화 */
  animation?: boolean
  /** 추가 CSS 클래스 */
  className?: string
}

/* ------------------------------------------------------------------ */
/*  폴백 프리뷰 (IBChart 미로드 시)                                   */
/* ------------------------------------------------------------------ */

/** 레이아웃에서 시리즈 정보를 추출하는 헬퍼 */
function extractSeriesFromLayout(
  layout: ChartLayout,
): { series: ChartSeries[]; categoryField: string } | null {
  if (typeof layout === 'string') return null
  const config = layout as ChartLayoutConfig
  return {
    series: config.series ?? [],
    categoryField: config.categoryField ?? '',
  }
}

/** IBChart 미로드 시 간단한 테이블 프리뷰를 렌더링 */
function ChartFallback({
  layout,
  data,
  height,
  noDataText,
}: {
  layout: ChartLayout
  data: ChartData
  height: string | number
  noDataText: string
}) {
  const info = extractSeriesFromLayout(layout)
  const chartType = typeof layout === 'string' ? 'chart' : (layout as ChartLayoutConfig).type
  const title = typeof layout === 'string' ? '' : (layout as ChartLayoutConfig).title

  return (
    <div style={{ height }} className="flex flex-col border border-gray-300 overflow-auto text-xs">
      {/* 헤더 */}
      <div className="flex items-center justify-between bg-[#4a4a4a] text-white px-3 py-2 sticky top-0">
        <span className="font-medium">{title || `[${chartType}]`}</span>
        <span className="text-gray-400 text-[10px]">IBChart not loaded</span>
      </div>

      {/* 데이터 테이블 프리뷰 */}
      {data.length === 0 || !info ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-gray-400">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Chart icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l4-4 4 4 5-5"
            />
          </svg>
          <span>{noDataText}</span>
        </div>
      ) : (
        <div className="overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-2 py-1 text-left border-r border-gray-200">
                  {info.categoryField || '#'}
                </th>
                {info.series.map((s) => (
                  <th key={s.id} className="px-2 py-1 text-right border-r border-gray-200">
                    {s.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-blue-50">
                  <td className="px-2 py-1 border-r border-gray-200">
                    {info.categoryField ? String(row[info.categoryField] ?? '') : i + 1}
                  </td>
                  {info.series.map((s) => (
                    <td
                      key={s.id}
                      className="px-2 py-1 text-right border-r border-gray-200 tabular-nums"
                    >
                      {row[s.dataField] != null ? String(row[s.dataField]) : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  IBChart 컴포넌트                                                   */
/* ------------------------------------------------------------------ */

export default function IBChart({
  id,
  layout,
  data = [],
  theme,
  width = '100%',
  height = '100%',
  backgroundColor,
  events,
  slideLayouts,
  slideData,
  drilldown,
  multi,
  multiItems,
  noDataText = 'No data',
  animation = true,
  className,
}: IBChartProps) {
  const { containerRef } = useIBChart({
    id,
    layout,
    data,
    theme,
    width,
    height,
    backgroundColor,
    events,
    slideLayouts,
    slideData,
    drilldown,
    multi,
    multiItems,
    noDataText,
    animation,
  })

  // IBChart 라이브러리가 로드되지 않은 경우 폴백 프리뷰 렌더링
  if (!window.IBChart) {
    return <ChartFallback layout={layout} data={data} height={height} noDataText={noDataText} />
  }

  return <div ref={containerRef} id={id} className={className} style={{ width, height }} />
}
