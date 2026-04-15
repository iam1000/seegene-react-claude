/**
 * IBChart 타입 정의
 *
 * rMateChartH5 → IBChart 전환을 위한 인터페이스.
 * IBChart API 문서 확보 후 실제 API에 맞춰 보완 필요.
 */

/* ------------------------------------------------------------------ */
/*  차트 타입                                                          */
/* ------------------------------------------------------------------ */

/** 지원 차트 타입 — rMateChartH5에서 사용된 유형 + 일반적인 차트 유형 */
export type ChartType =
  | 'line'
  | 'bar'
  | 'column'
  | 'area'
  | 'pie'
  | 'donut'
  | 'scatter'
  | 'bubble'
  | 'radar'
  | 'combination'
  | 'stackedBar'
  | 'stackedColumn'
  | 'stackedArea'
  | 'waterfall'
  | 'gauge'
  | 'heatmap'
  | 'treemap'
  | 'funnel'

/* ------------------------------------------------------------------ */
/*  시리즈 & 축                                                        */
/* ------------------------------------------------------------------ */

/** 개별 시리즈 정의 */
export interface ChartSeries {
  /** 시리즈 식별자 */
  id: string
  /** 시리즈 표시명 (범례 레이블) */
  name: string
  /** 시리즈 차트 타입 (combination 차트에서 시리즈별 다른 타입 지정) */
  type?: ChartType
  /** 데이터 필드명 — 데이터 배열의 key */
  dataField: string
  /** 시리즈 색상 */
  color?: string
  /** Y축 인덱스 (듀얼 축 차트에서 사용, 기본 0) */
  yAxisIndex?: number
  /** 시리즈 표시 여부 */
  visible?: boolean
  /** 데이터 라벨 표시 여부 */
  showDataLabel?: boolean
  /** 데이터 라벨 포맷 함수 */
  dataLabelFormatter?: (value: number) => string
  /** 시리즈별 추가 스타일 */
  style?: SeriesStyle
}

/** 시리즈 스타일 옵션 */
export interface SeriesStyle {
  /** 선 두께 (line, area) */
  lineWidth?: number
  /** 선 스타일 */
  lineStyle?: 'solid' | 'dashed' | 'dotted'
  /** 마커 표시 여부 (line, area, scatter) */
  showMarker?: boolean
  /** 마커 크기 */
  markerSize?: number
  /** 마커 모양 */
  markerShape?: 'circle' | 'square' | 'diamond' | 'triangle'
  /** 채우기 투명도 (0-1) */
  fillOpacity?: number
  /** 바 너비 비율 (0-1, bar/column) */
  barWidthRatio?: number
  /** 바 모서리 반경 (bar/column) */
  borderRadius?: number
}

/** 축 정의 */
export interface ChartAxis {
  /** 축 표시 여부 */
  visible?: boolean
  /** 축 제목 */
  title?: string
  /** 축 제목 스타일 */
  titleStyle?: TextStyle
  /** 축 라벨 포맷 함수 */
  labelFormatter?: (value: string | number) => string
  /** 축 라벨 회전 각도 (도) */
  labelRotation?: number
  /** 축 라벨 스타일 */
  labelStyle?: TextStyle
  /** 축 최솟값 (수치 축) */
  min?: number
  /** 축 최댓값 (수치 축) */
  max?: number
  /** 축 간격 (수치 축) */
  interval?: number
  /** 그리드 라인 표시 여부 */
  showGridLine?: boolean
  /** 그리드 라인 색상 */
  gridLineColor?: string
  /** 그리드 라인 스타일 */
  gridLineStyle?: 'solid' | 'dashed' | 'dotted'
  /** 축 선 색상 */
  lineColor?: string
  /** 축 반전 여부 */
  inverted?: boolean
}

/* ------------------------------------------------------------------ */
/*  텍스트 & 범례                                                      */
/* ------------------------------------------------------------------ */

/** 텍스트 스타일 */
export interface TextStyle {
  fontSize?: number
  fontFamily?: string
  fontWeight?: 'normal' | 'bold' | number
  color?: string
  align?: 'left' | 'center' | 'right'
}

/** 범례 설정 */
export interface ChartLegend {
  /** 범례 표시 여부 */
  visible?: boolean
  /** 범례 위치 */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** 범례 정렬 */
  align?: 'start' | 'center' | 'end'
  /** 범례 아이템 클릭 시 시리즈 토글 */
  interactive?: boolean
  /** 범례 텍스트 스타일 */
  textStyle?: TextStyle
  /** 범례 전체 선택/해제 버튼 표시 (rMateChart의 LegendAllCheck 대응) */
  showAllToggle?: boolean
}

/* ------------------------------------------------------------------ */
/*  툴팁                                                               */
/* ------------------------------------------------------------------ */

/** 툴팁 설정 */
export interface ChartTooltip {
  /** 툴팁 활성화 여부 */
  enabled?: boolean
  /** 공유 툴팁 (여러 시리즈의 동일 카테고리 데이터 함께 표시) */
  shared?: boolean
  /** 툴팁 포맷 함수 */
  formatter?: (params: TooltipParams) => string
  /** 툴팁 배경색 */
  backgroundColor?: string
  /** 툴팁 텍스트 스타일 */
  textStyle?: TextStyle
  /** 툴팁 테두리 색상 */
  borderColor?: string
}

/** 툴팁 콜백 파라미터 */
export interface TooltipParams {
  seriesName: string
  seriesIndex: number
  dataIndex: number
  category: string | number
  value: number
  color: string
  /** 전체 데이터 포인트 (raw 행) */
  data: Record<string, unknown>
}

/* ------------------------------------------------------------------ */
/*  데이터                                                             */
/* ------------------------------------------------------------------ */

/**
 * 차트 데이터 — 배열 기반 (rMateChart의 Dataset→XML/Array 변환 패턴 통합)
 *
 * 각 항목은 { category: 'Jan', sales: 100, cost: 80 } 형태의 Record.
 * categoryField에 지정된 key가 카테고리(X축)로 사용되고,
 * 각 시리즈의 dataField가 값(Y축)으로 매핑된다.
 */
export type ChartData = Record<string, unknown>[]

/** 드릴다운 데이터 정의 (rMateChart의 drilldown 대응) */
export interface DrilldownData {
  /** 드릴다운 트리거 카테고리 값 */
  triggerValue: string | number
  /** 드릴다운 시 표시할 데이터 */
  data: ChartData
  /** 드릴다운 레이아웃 (차트 타입/시리즈 재정의) */
  series?: ChartSeries[]
  /** 하위 드릴다운 (중첩 가능) */
  children?: DrilldownData[]
}

/* ------------------------------------------------------------------ */
/*  테마 & 레이아웃                                                    */
/* ------------------------------------------------------------------ */

/** 차트 테마 — 사전 정의 테마명 또는 커스텀 테마 객체 */
export type ChartTheme = string | ChartThemeConfig

/** 커스텀 테마 설정 */
export interface ChartThemeConfig {
  /** 테마 이름 */
  name?: string
  /** 배경색 */
  backgroundColor?: string
  /** 시리즈 기본 색상 팔레트 */
  colors?: string[]
  /** 제목 텍스트 스타일 */
  titleStyle?: TextStyle
  /** 축 라벨 스타일 */
  axisLabelStyle?: TextStyle
  /** 그리드 라인 색상 */
  gridLineColor?: string
  /** 글꼴 패밀리 */
  fontFamily?: string
}

/** 차트 레이아웃 — XML 문자열 또는 구조화된 객체 */
export type ChartLayout = string | ChartLayoutConfig

/** 구조화된 레이아웃 설정 */
export interface ChartLayoutConfig {
  /** 차트 타입 */
  type: ChartType
  /** 차트 제목 */
  title?: string
  /** 차트 부제목 */
  subtitle?: string
  /** 카테고리 필드명 (X축에 매핑될 데이터 키) */
  categoryField: string
  /** 시리즈 정의 배열 */
  series: ChartSeries[]
  /** X축 설정 */
  xAxis?: ChartAxis
  /** Y축 설정 (배열: 듀얼 축 지원) */
  yAxis?: ChartAxis | ChartAxis[]
  /** 범례 설정 */
  legend?: ChartLegend
  /** 툴팁 설정 */
  tooltip?: ChartTooltip
  /** 드릴다운 데이터 */
  drilldown?: DrilldownData[]
}

/* ------------------------------------------------------------------ */
/*  슬라이드 차트                                                      */
/* ------------------------------------------------------------------ */

/** 슬라이드 차트 레이아웃 세트 (rMateChart의 SlideLayoutSet 대응) */
export interface SlideLayoutSet {
  /** 슬라이드 목록 */
  slides: ChartLayoutConfig[]
  /** 자동 전환 간격 (ms, 0이면 수동) */
  autoPlayInterval?: number
  /** 전환 애니메이션 */
  transition?: 'slide' | 'fade' | 'none'
}

/** 슬라이드 차트 데이터 세트 */
export interface SlideDataSet {
  /** 슬라이드별 데이터 배열 (slides 인덱스와 매칭) */
  datasets: ChartData[]
}

/* ------------------------------------------------------------------ */
/*  이벤트                                                             */
/* ------------------------------------------------------------------ */

/** 차트 아이템 클릭 이벤트 파라미터 */
export interface ChartItemClickEvent {
  /** 시리즈 이름 */
  seriesName: string
  /** 시리즈 인덱스 */
  seriesIndex: number
  /** 데이터 인덱스 */
  dataIndex: number
  /** 카테고리 값 */
  category: string | number
  /** 데이터 값 */
  value: number
  /** 원본 데이터 행 */
  data: Record<string, unknown>
}

/** 차트 범례 클릭 이벤트 파라미터 */
export interface ChartLegendClickEvent {
  /** 범례 아이템명 (시리즈명) */
  seriesName: string
  /** 현재 표시 상태 */
  visible: boolean
}

/** 드릴다운 이벤트 파라미터 */
export interface ChartDrilldownEvent {
  /** 현재 드릴다운 깊이 */
  depth: number
  /** 트리거 카테고리 값 */
  triggerValue: string | number
  /** 드릴다운 경로 */
  path: (string | number)[]
}

/** 차트 이벤트 핸들러 맵 */
export interface ChartEventHandlers {
  /** 차트 초기화 완료 */
  onReady?: (chart: IBChartInstance) => void
  /** 데이터 항목 클릭 */
  onItemClick?: (event: ChartItemClickEvent) => void
  /** 데이터 항목 더블클릭 */
  onItemDoubleClick?: (event: ChartItemClickEvent) => void
  /** 범례 아이템 클릭 */
  onLegendClick?: (event: ChartLegendClickEvent) => void
  /** 드릴다운 진입 */
  onDrilldown?: (event: ChartDrilldownEvent) => void
  /** 드릴다운 복귀 (drill-up) */
  onDrillup?: (event: ChartDrilldownEvent) => void
}

/* ------------------------------------------------------------------ */
/*  멀티 차트                                                          */
/* ------------------------------------------------------------------ */

/** 멀티 차트 그리드 설정 (rMateChartH5Multi 대응) */
export interface MultiChartGrid {
  /** 차트 개수 */
  chartCount: number
  /** 가로 열 개수 */
  columns: number
  /** 열 간격 (px) */
  columnGap?: number
  /** 행 간격 (px) */
  rowGap?: number
}

/** 멀티 차트 내 개별 차트 설정 */
export interface MultiChartItem {
  /** 차트 인덱스 (0-based) */
  index: number
  /** 레이아웃 설정 */
  layout: ChartLayout
  /** 데이터 */
  data?: ChartData
  /** 테마 */
  theme?: ChartTheme
  /** 이벤트 핸들러 */
  events?: ChartEventHandlers
}

/* ------------------------------------------------------------------ */
/*  차트 옵션 (종합)                                                   */
/* ------------------------------------------------------------------ */

/** IBChart 생성 옵션 */
export interface IBChartOptions {
  /** 차트 고유 ID */
  id: string
  /** 차트 너비 */
  width?: string | number
  /** 차트 높이 */
  height?: string | number
  /** 배경색 */
  backgroundColor?: string
  /** 테마 설정 */
  theme?: ChartTheme
  /** 레이아웃 설정 */
  layout: ChartLayout
  /** 차트 데이터 */
  data?: ChartData
  /** 슬라이드 차트 레이아웃 */
  slideLayouts?: SlideLayoutSet
  /** 슬라이드 차트 데이터 */
  slideData?: SlideDataSet
  /** 드릴다운 데이터 */
  drilldown?: DrilldownData[]
  /** 이벤트 핸들러 */
  events?: ChartEventHandlers
  /** 멀티 차트 그리드 설정 */
  multi?: MultiChartGrid
  /** 멀티 차트 개별 항목 설정 */
  multiItems?: MultiChartItem[]
  /** 데이터 없음 표시 문구 */
  noDataText?: string
  /** 애니메이션 활성화 여부 */
  animation?: boolean
  /** 로딩 프리로더 표시 여부 */
  showPreloader?: boolean
}

/* ------------------------------------------------------------------ */
/*  차트 인스턴스                                                      */
/* ------------------------------------------------------------------ */

/** IBChart 인스턴스 — 생성된 차트 제어 API */
export interface IBChartInstance {
  /** 차트 ID */
  readonly id: string

  /* --- 데이터 --- */
  /** 데이터 설정 */
  setData(data: ChartData): void
  /** 현재 데이터 가져오기 */
  getData(): ChartData
  /** 데이터 없음 상태 표시 */
  setNoData(show: boolean): void

  /* --- 레이아웃 & 테마 --- */
  /** 레이아웃 설정 */
  setLayout(layout: ChartLayout): void
  /** 테마 설정 */
  setTheme(theme: ChartTheme): void

  /* --- 슬라이드 --- */
  /** 슬라이드 레이아웃 설정 */
  setSlideLayouts(layouts: SlideLayoutSet): void
  /** 슬라이드 데이터 설정 */
  setSlideData(data: SlideDataSet): void

  /* --- 드릴다운 --- */
  /** 드릴다운 데이터 설정 */
  setDrilldownData(data: DrilldownData[]): void
  /** 현재 드릴다운 깊이 반환 */
  getDrilldownDepth(): number

  /* --- 범례 --- */
  /** 범례 전체 선택/해제 */
  toggleAllLegend(visible: boolean): void

  /* --- 프리로더 --- */
  /** 로딩 프리로더 표시 */
  showPreloader(): void
  /** 로딩 프리로더 제거 */
  hidePreloader(): void

  /* --- 내보내기 --- */
  /** 차트를 Base64 이미지(PNG)로 반환 */
  getSnapshot(): string
  /** 차트를 이미지 파일로 저장 */
  saveAsImage(filename?: string): void
  /** 차트를 로컬 파일로 다운로드 */
  downloadToLocal(filename: string, type: string, url?: string): void

  /* --- 데이터 에디터 --- */
  /** 데이터 에디터 표시 */
  showDataEditor(): void
  /** 데이터 에디터 숨김 */
  hideDataEditor(): void

  /* --- 멀티 차트 --- */
  /** 멀티 차트에서 특정 차트 ID 반환 */
  getChartIdAt(index: number): string
  /** 멀티 차트의 특정 차트에 데이터 설정 */
  setDataById(chartId: string, data: ChartData): void
  /** 멀티 차트의 특정 차트에 레이아웃 설정 */
  setLayoutById(chartId: string, layout: ChartLayout): void
  /** 멀티 차트의 특정 차트에 테마 설정 */
  setThemeById(chartId: string, theme: ChartTheme): void

  /* --- 리사이즈 & 소멸 --- */
  /** 차트 크기 재계산 */
  resize(): void
  /** 차트 인스턴스 소멸 */
  dispose(): void
}

/* ------------------------------------------------------------------ */
/*  Window 전역 타입 확장                                              */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    IBChart?: IBChartStatic
  }

  /** IBChart 전역 팩토리 */
  interface IBChartStatic {
    /** 차트 생성 */
    create(options: IBChartOptions): IBChartInstance
    /** ID로 기존 차트 인스턴스 검색 */
    findById(id: string): IBChartInstance | null
    /** 라이선스 키 설정 */
    setLicense(key: string): void
  }
}
