import { useCallback, useEffect, useRef, useState } from 'react'
import type {
  ChartData,
  ChartEventHandlers,
  ChartLayout,
  ChartTheme,
  DrilldownData,
  IBChartInstance,
  IBChartOptions,
  MultiChartGrid,
  MultiChartItem,
  SlideDataSet,
  SlideLayoutSet,
} from '#/types/ibchart'

/* ------------------------------------------------------------------ */
/*  훅 옵션 인터페이스                                                 */
/* ------------------------------------------------------------------ */

export interface UseIBChartOptions {
  /** 차트 고유 ID */
  id: string
  /** 차트 레이아웃 설정 */
  layout: ChartLayout
  /** 초기 데이터 */
  data?: ChartData
  /** 테마 */
  theme?: ChartTheme
  /** 차트 너비 */
  width?: string | number
  /** 차트 높이 */
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
}

/* ------------------------------------------------------------------ */
/*  반환 타입                                                          */
/* ------------------------------------------------------------------ */

export interface UseIBChartReturn {
  /** 차트를 렌더링할 DOM 요소 ref */
  containerRef: React.RefObject<HTMLDivElement | null>
  /** IBChart 인스턴스 (초기화 전에는 null) */
  chart: IBChartInstance | null
  /** IBChart 라이브러리 로드 완료 여부 */
  isReady: boolean
  /** 데이터 갱신 */
  setData: (data: ChartData) => void
  /** 레이아웃 갱신 */
  setLayout: (layout: ChartLayout) => void
  /** 테마 갱신 */
  setTheme: (theme: ChartTheme) => void
  /** 슬라이드 레이아웃 갱신 */
  setSlideLayouts: (layouts: SlideLayoutSet) => void
  /** 슬라이드 데이터 갱신 */
  setSlideData: (data: SlideDataSet) => void
  /** 드릴다운 데이터 갱신 */
  setDrilldownData: (data: DrilldownData[]) => void
  /** 드릴다운 깊이 반환 */
  getDrilldownDepth: () => number
  /** 범례 전체 선택/해제 */
  toggleAllLegend: (visible: boolean) => void
  /** 프리로더 표시 */
  showPreloader: () => void
  /** 프리로더 숨김 */
  hidePreloader: () => void
  /** 차트 스냅샷(Base64 PNG) 반환 */
  getSnapshot: () => string | null
  /** 차트를 이미지 파일로 저장 */
  saveAsImage: (filename?: string) => void
  /** 차트를 파일로 다운로드 */
  downloadToLocal: (filename: string, type: string, url?: string) => void
  /** 데이터 에디터 표시 */
  showDataEditor: () => void
  /** 데이터 에디터 숨김 */
  hideDataEditor: () => void
  /** 멀티 차트: 특정 차트에 데이터 설정 */
  setDataById: (chartId: string, data: ChartData) => void
  /** 멀티 차트: 특정 차트에 레이아웃 설정 */
  setLayoutById: (chartId: string, layout: ChartLayout) => void
  /** 멀티 차트: 특정 차트에 테마 설정 */
  setThemeById: (chartId: string, theme: ChartTheme) => void
  /** 멀티 차트: 인덱스로 차트 ID 조회 */
  getChartIdAt: (index: number) => string | null
  /** 차트 크기 재계산 */
  resize: () => void
}

/* ------------------------------------------------------------------ */
/*  라이선스 키 — 환경변수에서 주입                                    */
/* ------------------------------------------------------------------ */

function getLicenseKey(): string {
  // Vite 환경변수에서 IBChart 라이선스 키를 가져온다.
  // .env 파일에 VITE_IBCHART_LICENSE_KEY=... 형태로 설정.
  // TODO: IBChart API 연동 — 라이선스 주입 방식 확인 후 보완
  return (
    (import.meta as unknown as { env: Record<string, string> }).env.VITE_IBCHART_LICENSE_KEY ?? ''
  )
}

/* ------------------------------------------------------------------ */
/*  useIBChart 훅                                                      */
/* ------------------------------------------------------------------ */

export function useIBChart(options: UseIBChartOptions): UseIBChartReturn {
  const { id, layout, data, theme, events } = options

  const containerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<IBChartInstance | null>(null)
  const [isReady, setIsReady] = useState(false)

  // 이벤트/옵션을 ref에 보관하여 차트 재생성 없이 최신 값을 참조
  const eventsRef = useRef(events)
  eventsRef.current = events

  const optionsRef = useRef(options)
  optionsRef.current = options

  /* ---- 차트 생성/소멸 ---- */
  useEffect(() => {
    if (!containerRef.current) return
    if (!window.IBChart) return

    const opts = optionsRef.current

    // React StrictMode 이중 실행 대응: 기존 인스턴스 제거
    const existing = window.IBChart.findById(id)
    if (existing) {
      existing.dispose()
    }

    // 라이선스 설정
    const licenseKey = getLicenseKey()
    if (licenseKey) {
      window.IBChart.setLicense(licenseKey)
    }

    // 차트 옵션 구성
    const chartOptions: IBChartOptions = {
      id,
      width: opts.width ?? '100%',
      height: opts.height ?? '100%',
      backgroundColor: opts.backgroundColor ?? '#FFFFFF',
      layout: opts.layout,
      data: opts.data,
      theme: opts.theme,
      slideLayouts: opts.slideLayouts,
      slideData: opts.slideData,
      drilldown: opts.drilldown,
      noDataText: opts.noDataText,
      animation: opts.animation,
      events: {
        onReady: (chart) => {
          setIsReady(true)
          eventsRef.current?.onReady?.(chart)
        },
        onItemClick: (e) => eventsRef.current?.onItemClick?.(e),
        onItemDoubleClick: (e) => eventsRef.current?.onItemDoubleClick?.(e),
        onLegendClick: (e) => eventsRef.current?.onLegendClick?.(e),
        onDrilldown: (e) => eventsRef.current?.onDrilldown?.(e),
        onDrillup: (e) => eventsRef.current?.onDrillup?.(e),
      },
    }

    // 멀티 차트 설정
    if (opts.multi) {
      chartOptions.multi = opts.multi
      chartOptions.multiItems = opts.multiItems
    }

    // TODO: IBChart API 연동 — window.IBChart.create() 호출
    chartRef.current = window.IBChart.create(chartOptions)

    return () => {
      chartRef.current?.dispose()
      chartRef.current = null
      setIsReady(false)
    }
  }, [id])

  /* ---- 데이터 변경 반영 ---- */
  useEffect(() => {
    if (!chartRef.current || !data) return
    // TODO: IBChart API 연동 — setData 호출
    chartRef.current.setData(data)
  }, [data])

  /* ---- 레이아웃 변경 반영 ---- */
  useEffect(() => {
    if (!chartRef.current || !isReady) return
    // TODO: IBChart API 연동 — setLayout 호출
    chartRef.current.setLayout(layout)
  }, [layout, isReady])

  /* ---- 테마 변경 반영 ---- */
  useEffect(() => {
    if (!chartRef.current || !theme || !isReady) return
    // TODO: IBChart API 연동 — setTheme 호출
    chartRef.current.setTheme(theme)
  }, [theme, isReady])

  /* ---- 리사이즈 감지 ---- */
  useEffect(() => {
    const el = containerRef.current
    if (!el || !chartRef.current) return

    const observer = new ResizeObserver(() => {
      chartRef.current?.resize()
    })
    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [])

  /* ---- 제어 함수들 ---- */

  const setDataFn = useCallback((newData: ChartData) => {
    chartRef.current?.setData(newData)
  }, [])

  const setLayoutFn = useCallback((newLayout: ChartLayout) => {
    chartRef.current?.setLayout(newLayout)
  }, [])

  const setThemeFn = useCallback((newTheme: ChartTheme) => {
    chartRef.current?.setTheme(newTheme)
  }, [])

  const setSlideLayoutsFn = useCallback((layouts: SlideLayoutSet) => {
    chartRef.current?.setSlideLayouts(layouts)
  }, [])

  const setSlideDataFn = useCallback((newData: SlideDataSet) => {
    chartRef.current?.setSlideData(newData)
  }, [])

  const setDrilldownDataFn = useCallback((newData: DrilldownData[]) => {
    chartRef.current?.setDrilldownData(newData)
  }, [])

  const getDrilldownDepthFn = useCallback((): number => {
    return chartRef.current?.getDrilldownDepth() ?? 0
  }, [])

  const toggleAllLegendFn = useCallback((visible: boolean) => {
    chartRef.current?.toggleAllLegend(visible)
  }, [])

  const showPreloaderFn = useCallback(() => {
    chartRef.current?.showPreloader()
  }, [])

  const hidePreloaderFn = useCallback(() => {
    chartRef.current?.hidePreloader()
  }, [])

  const getSnapshotFn = useCallback((): string | null => {
    return chartRef.current?.getSnapshot() ?? null
  }, [])

  const saveAsImageFn = useCallback((filename?: string) => {
    chartRef.current?.saveAsImage(filename)
  }, [])

  const downloadToLocalFn = useCallback((filename: string, type: string, url?: string) => {
    chartRef.current?.downloadToLocal(filename, type, url)
  }, [])

  const showDataEditorFn = useCallback(() => {
    chartRef.current?.showDataEditor()
  }, [])

  const hideDataEditorFn = useCallback(() => {
    chartRef.current?.hideDataEditor()
  }, [])

  const setDataByIdFn = useCallback((chartId: string, newData: ChartData) => {
    chartRef.current?.setDataById(chartId, newData)
  }, [])

  const setLayoutByIdFn = useCallback((chartId: string, newLayout: ChartLayout) => {
    chartRef.current?.setLayoutById(chartId, newLayout)
  }, [])

  const setThemeByIdFn = useCallback((chartId: string, newTheme: ChartTheme) => {
    chartRef.current?.setThemeById(chartId, newTheme)
  }, [])

  const getChartIdAtFn = useCallback((index: number): string | null => {
    return chartRef.current?.getChartIdAt(index) ?? null
  }, [])

  const resizeFn = useCallback(() => {
    chartRef.current?.resize()
  }, [])

  return {
    containerRef,
    chart: chartRef.current,
    isReady,
    setData: setDataFn,
    setLayout: setLayoutFn,
    setTheme: setThemeFn,
    setSlideLayouts: setSlideLayoutsFn,
    setSlideData: setSlideDataFn,
    setDrilldownData: setDrilldownDataFn,
    getDrilldownDepth: getDrilldownDepthFn,
    toggleAllLegend: toggleAllLegendFn,
    showPreloader: showPreloaderFn,
    hidePreloader: hidePreloaderFn,
    getSnapshot: getSnapshotFn,
    saveAsImage: saveAsImageFn,
    downloadToLocal: downloadToLocalFn,
    showDataEditor: showDataEditorFn,
    hideDataEditor: hideDataEditorFn,
    setDataById: setDataByIdFn,
    setLayoutById: setLayoutByIdFn,
    setThemeById: setThemeByIdFn,
    getChartIdAt: getChartIdAtFn,
    resize: resizeFn,
  }
}
