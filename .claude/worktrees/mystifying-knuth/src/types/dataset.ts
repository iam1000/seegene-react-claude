// =============================================================================
// Nexacro NormalDataset 대응 타입 정의
// =============================================================================

/** 행 상태 — Nexacro RowType 상수와 동일값 */
export const RowType = {
  NORMAL: 1,
  INSERT: 2,
  UPDATE: 4,
} as const

export type RowType = (typeof RowType)[keyof typeof RowType]

/** 컬럼 데이터 타입 */
export type ColumnType = 'string' | 'int' | 'float' | 'date'

/** 컬럼 정의 — Nexacro ColumnInfo 대응 */
export interface ColumnInfo {
  id: string
  type: ColumnType
  size?: number
  description?: string
}

/** 상수 컬럼 정의 — Nexacro ConstColumn 대응 */
export interface ConstColumnInfo {
  id: string
  type: ColumnType
  value: unknown
}

/** 내부 행 데이터 구조 */
export interface RowData {
  /** 현재 값 (불변 갱신: setColumn마다 새 객체) */
  current: Record<string, unknown>
  /** 원본 스냅샷 — NORMAL→UPDATE 전환 시점에 보존. null이면 변경 없음 */
  original: Record<string, unknown> | null
  rowType: RowType
}

/** oncolumnchanged 이벤트 파라미터 — Nexacro ColumnChangedEventInfo 대응 */
export interface ColumnChangedEventInfo {
  row: number
  columnid: string
  oldvalue: unknown
  newvalue: unknown
}

/** onrowsetchanged 이벤트 파라미터 — Nexacro RowSetChangedEventInfo 대응 */
export interface RowSetChangedEventInfo {
  oldrow: number
  newrow: number
}

/** Dataset 이벤트 핸들러 모음 */
export interface DatasetEvents {
  oncolumnchanged?: (obj: unknown, e: ColumnChangedEventInfo) => void
  onrowsetchanged?: (obj: unknown, e: RowSetChangedEventInfo) => void
}

/** NxDataset 생성 옵션 */
export interface DatasetOptions {
  id: string
  columns?: ColumnInfo[]
  constColumns?: ConstColumnInfo[]
  useclientlayout?: boolean
  initialRows?: Record<string, unknown>[]
  events?: DatasetEvents
}
