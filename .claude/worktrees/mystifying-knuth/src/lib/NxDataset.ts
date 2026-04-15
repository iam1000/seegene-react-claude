import {
  type ColumnChangedEventInfo,
  type ColumnInfo,
  type ColumnType,
  type ConstColumnInfo,
  type DatasetEvents,
  type DatasetOptions,
  type RowData,
  type RowSetChangedEventInfo,
  RowType,
} from '#/types/dataset'

// =============================================================================
// NxDataset — Nexacro NormalDataset 완전 호환 React 데이터셋
// =============================================================================

export class NxDataset {
  readonly id: string

  private _rows: RowData[] = []
  private _deletedRows: Record<string, unknown>[] = []
  private _columns: ColumnInfo[] = []
  private _constColumns: ConstColumnInfo[] = []
  private _rowPosition: number = -1
  private _updateControl: boolean = true
  private _enableEvent: boolean = true
  private _useclientlayout: boolean
  private _events: DatasetEvents
  private _keystring: string = ''
  private _filterstr: string = ''
  private _viewIndices: number[] | null = null
  private _subscribers = new Set<() => void>()
  private _snapshot: ReadonlyArray<Readonly<Record<string, unknown>>> = []
  private _snapshotVersion = 0
  private _lastNotifiedVersion = -1

  constructor(options: DatasetOptions) {
    this.id = options.id
    this._useclientlayout = options.useclientlayout ?? false
    this._events = options.events ? { ...options.events } : {}

    if (options.columns) {
      for (const col of options.columns) {
        this._columns.push({ ...col })
      }
    }

    if (options.constColumns) {
      for (const cc of options.constColumns) {
        this._constColumns.push({ ...cc })
      }
    }

    if (options.initialRows && options.initialRows.length > 0) {
      this.loadData(options.initialRows)
    }
  }

  // =========================================================================
  // 속성 (Nexacro 호환)
  // =========================================================================

  get rowcount(): number {
    return this._viewLength()
  }

  get rowposition(): number {
    return this._rowPosition
  }

  set rowposition(value: number) {
    this._setRowPosition(value)
  }

  set_rowposition(value: number): void {
    this._setRowPosition(value)
  }

  get updatecontrol(): boolean {
    return this._updateControl
  }

  set updatecontrol(value: boolean) {
    this._updateControl = value
  }

  set_updatecontrol(value: boolean): void {
    this._updateControl = value
  }

  get enableevent(): boolean {
    return this._enableEvent
  }

  set enableevent(value: boolean) {
    this._enableEvent = value
  }

  set_enableevent(value: boolean): void {
    this._enableEvent = value
  }

  get useclientlayout(): boolean {
    return this._useclientlayout
  }

  set useclientlayout(value: boolean) {
    this._useclientlayout = value
  }

  get keystring(): string {
    return this._keystring
  }

  set keystring(value: string) {
    this._keystring = value
    this._rebuildView()
    this._notifySubscribers()
  }

  set_keystring(value: string): void {
    this.keystring = value
  }

  get filterstr(): string {
    return this._filterstr
  }

  set filterstr(value: string) {
    this._filterstr = value
    this._rebuildView()
    this._adjustRowPositionToView()
    this._notifySubscribers()
  }

  set_filterstr(value: string): void {
    this.filterstr = value
  }

  // =========================================================================
  // 컬럼 스키마
  // =========================================================================

  addColumn(id: string, type: ColumnType = 'string', size?: number, description?: string): void {
    if (this._columns.some((c) => c.id === id)) return
    this._columns.push({ id, type, size, description })
  }

  addConstColumn(id: string, type: ColumnType, value: unknown): void {
    if (this._constColumns.some((c) => c.id === id)) return
    this._constColumns.push({ id, type, value })
  }

  getColCount(): number {
    return this._columns.length
  }

  getConstCount(): number {
    return this._constColumns.length
  }

  getColID(index: number): string {
    return this._columns[index]?.id ?? ''
  }

  getColumnInfo(colIdOrIdx: string | number): (ColumnInfo & { name: string }) | null {
    if (typeof colIdOrIdx === 'number') {
      const col = this._columns[colIdOrIdx]
      return col ? { ...col, name: col.id } : null
    }
    const col = this._columns.find((c) => c.id === colIdOrIdx)
    if (col) return { ...col, name: col.id }
    const cc = this._constColumns.find((c) => c.id === colIdOrIdx)
    if (cc) return { id: cc.id, type: cc.type, name: cc.id }
    return null
  }

  // =========================================================================
  // 행(Row) 관리
  // =========================================================================

  getRowCount(): number {
    return this._viewLength()
  }

  addRow(data?: Record<string, unknown>): number {
    const row = this._createRow(data ?? {}, RowType.INSERT)
    this._rows.push(row)
    this._rebuildView()
    this._bumpVersion()
    return this._viewLength() - 1
  }

  insertRow(index?: number, data?: Record<string, unknown>): number {
    const row = this._createRow(data ?? {}, RowType.INSERT)

    const viewLen = this._viewLength()
    const viewIdx =
      index !== undefined
        ? Math.max(0, Math.min(index, viewLen))
        : this._rowPosition >= 0
          ? this._rowPosition + 1
          : 0

    let rawInsertAt: number
    if (this._viewIndices) {
      if (viewIdx < this._viewIndices.length) {
        rawInsertAt = this._viewIndices[viewIdx]!
      } else {
        rawInsertAt = this._rows.length
      }
    } else {
      rawInsertAt = Math.min(viewIdx, this._rows.length)
    }

    this._rows.splice(rawInsertAt, 0, row)
    this._rebuildView()

    if (this._rowPosition >= viewIdx) {
      this._rowPosition += 1
    }

    this._bumpVersion()
    return viewIdx
  }

  deleteRow(index: number): void {
    const rawIdx = this._viewToRaw(index)
    if (rawIdx === -1) return

    const rowData = this._rows[rawIdx]!

    if (rowData.rowType !== RowType.INSERT) {
      this._deletedRows.push({ ...(rowData.original ?? rowData.current) })
    }

    this._rows.splice(rawIdx, 1)
    this._rebuildView()
    this._adjustRowPositionAfterDelete(index)
    this._bumpVersion()
  }

  deleteMultiRows(indices: number[]): void {
    const rawIndices = indices
      .map((vi) => this._viewToRaw(vi))
      .filter((ri) => ri !== -1)
      .sort((a, b) => b - a)

    for (const rawIdx of rawIndices) {
      const rowData = this._rows[rawIdx]!
      if (rowData.rowType !== RowType.INSERT) {
        this._deletedRows.push({ ...(rowData.original ?? rowData.current) })
      }
      this._rows.splice(rawIdx, 1)
    }

    this._rebuildView()
    const viewLen = this._viewLength()
    if (viewLen === 0) {
      this._rowPosition = -1
    } else if (this._rowPosition >= viewLen) {
      this._rowPosition = viewLen - 1
    }
    this._bumpVersion()
  }

  clearData(): void {
    this._rows = []
    this._deletedRows = []
    this._rowPosition = -1
    this._viewIndices = null
    if (!this._useclientlayout) {
      this._columns = []
      this._constColumns = []
    }
    this._bumpVersion()
  }

  clear(): void {
    this._rows = []
    this._deletedRows = []
    this._columns = []
    this._constColumns = []
    this._rowPosition = -1
    this._keystring = ''
    this._filterstr = ''
    this._viewIndices = null
    this._bumpVersion()
  }

  // =========================================================================
  // 셀(Cell) 접근
  // =========================================================================

  getColumn(row: number, colId: string | number): unknown {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return null

    const id = typeof colId === 'number' ? this.getColID(colId) : colId

    const cc = this._constColumns.find((c) => c.id === id)
    if (cc) return cc.value ?? null

    const val = this._rows[rawIdx]!.current[id]
    return val !== undefined ? val : null
  }

  setColumn(row: number, colId: string | number, value: unknown): void {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return

    const id = typeof colId === 'number' ? this.getColID(colId) : colId

    if (this._constColumns.some((c) => c.id === id)) return

    const rowData = this._rows[rawIdx]!
    const oldValue = rowData.current[id]
    if (oldValue === value) return

    if (this._updateControl && rowData.rowType === RowType.NORMAL) {
      rowData.original = { ...rowData.current }
      rowData.rowType = RowType.UPDATE
    }

    rowData.current = { ...rowData.current, [id]: value }

    if (this._updateControl && rowData.rowType === RowType.UPDATE && rowData.original !== null) {
      const allSame = Object.keys(rowData.original).every(
        (k) => rowData.current[k] === rowData.original![k],
      )
      if (allSame) {
        rowData.rowType = RowType.NORMAL
        rowData.original = null
      }
    }

    if (this._enableEvent && this._events.oncolumnchanged) {
      const e: ColumnChangedEventInfo = {
        row,
        columnid: id,
        oldvalue: oldValue,
        newvalue: value,
      }
      this._events.oncolumnchanged(this, e)
    }

    this._bumpVersion()
  }

  getOrgColumn(row: number, colId: string | number): unknown {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return null

    const id = typeof colId === 'number' ? this.getColID(colId) : colId
    const rowData = this._rows[rawIdx]!

    if (rowData.original !== null) {
      return rowData.original[id] ?? null
    }
    return rowData.current[id] ?? null
  }

  // =========================================================================
  // 변경 추적
  // =========================================================================

  getRowType(row: number): RowType {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return RowType.NORMAL
    return this._rows[rawIdx]!.rowType
  }

  getDeletedRowCount(): number {
    return this._deletedRows.length
  }

  getDeletedColumn(delIndex: number, colId: string): unknown {
    const row = this._deletedRows[delIndex]
    if (!row) return null
    return row[colId] ?? null
  }

  updateToDataset(): void {
    // no-op in React environment
  }

  // =========================================================================
  // 검색 / 집계
  // =========================================================================

  findRow(colId: string, value: unknown): number {
    const len = this._viewLength()
    for (let vi = 0; vi < len; vi++) {
      const rawIdx = this._viewToRaw(vi)
      if (rawIdx !== -1 && this._rows[rawIdx]!.current[colId] === value) {
        return vi
      }
    }
    return -1
  }

  findRowExpr(
    predicate: (row: Record<string, unknown>, viewIndex: number, dataset: NxDataset) => boolean,
  ): number {
    const len = this._viewLength()
    for (let vi = 0; vi < len; vi++) {
      const rawIdx = this._viewToRaw(vi)
      if (rawIdx !== -1 && predicate(this._rows[rawIdx]!.current, vi, this)) {
        return vi
      }
    }
    return -1
  }

  getSum(colId: string): number {
    let sum = 0
    const len = this._viewLength()
    for (let vi = 0; vi < len; vi++) {
      const rawIdx = this._viewToRaw(vi)
      if (rawIdx === -1) continue
      const v = Number(this._rows[rawIdx]!.current[colId])
      if (!isNaN(v)) sum += v
    }
    return sum
  }

  getAvg(colId: string): number {
    const len = this._viewLength()
    if (len === 0) return 0
    return this.getSum(colId) / len
  }

  // =========================================================================
  // 일괄 변환 (DataObject 연동)
  // =========================================================================

  toRowObject(row: number, colList?: string[]): Record<string, unknown> {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return {}

    const keys = colList ?? this._columns.map((c) => c.id)
    const result: Record<string, unknown> = {}
    for (const k of keys) {
      result[k] = this._rows[rawIdx]!.current[k] ?? ''
    }
    return result
  }

  toObjectList(
    type: 'U' | 'A' | 'N' = 'U',
    colList?: string[],
  ): Array<Record<string, unknown> & { _rowtype: string }> {
    const keys = colList ?? this._columns.map((c) => c.id)
    const result: Array<Record<string, unknown> & { _rowtype: string }> = []

    if (type !== 'N') {
      for (const deleted of this._deletedRows) {
        result.push({ ...this._pick(deleted, keys), _rowtype: 'D' })
      }
    }

    for (const rowData of this._rows) {
      switch (rowData.rowType) {
        case RowType.INSERT:
          result.push({ ...this._pick(rowData.current, keys), _rowtype: 'I' })
          break
        case RowType.UPDATE:
          result.push({ ...this._pick(rowData.current, keys), _rowtype: 'U' })
          break
        case RowType.NORMAL:
          if (type === 'A' || type === 'N') {
            result.push({ ...this._pick(rowData.current, keys), _rowtype: 'N' })
          }
          break
      }
    }

    return result
  }

  toChangedObjectList(colList?: string[]): {
    I: Record<string, unknown>[]
    U: Record<string, unknown>[]
    D: Record<string, unknown>[]
  } {
    const keys = colList ?? this._columns.map((c) => c.id)
    const I: Record<string, unknown>[] = []
    const U: Record<string, unknown>[] = []
    const D: Record<string, unknown>[] = this._deletedRows.map((r) => this._pick(r, keys))

    for (const rowData of this._rows) {
      if (rowData.rowType === RowType.INSERT) {
        I.push(this._pick(rowData.current, keys))
      } else if (rowData.rowType === RowType.UPDATE) {
        U.push(this._pick(rowData.current, keys))
      }
    }

    return { I, U, D }
  }

  toQueryString(row: number = 0): string {
    const rawIdx = this._viewToRaw(row)
    if (rawIdx === -1) return ''

    const data = this._rows[rawIdx]!.current
    return Object.entries(data)
      .map(([k, v]) => `${k}=${v ?? ''}`)
      .join('&')
  }

  // =========================================================================
  // JSON → Dataset 로딩
  // =========================================================================

  loadData(data: Record<string, unknown>[]): void {
    const prevEnableEvent = this._enableEvent
    const prevUpdateControl = this._updateControl

    this._enableEvent = false
    this._updateControl = false

    if (this._useclientlayout) {
      this._rows = []
      this._deletedRows = []
    } else {
      this._rows = []
      this._deletedRows = []
      this._columns = []
      this._constColumns = this._constColumns
    }

    for (const obj of data) {
      this._addRowInternal(obj, RowType.NORMAL)
    }

    this._updateControl = prevUpdateControl
    this._enableEvent = prevEnableEvent

    this._rebuildView()
    this._rowPosition = this._rows.length > 0 ? 0 : -1

    this._bumpVersion()
  }

  appendData(data: Record<string, unknown>[]): void {
    const prevUpdateControl = this._updateControl
    const prevEnableEvent = this._enableEvent
    this._updateControl = false
    this._enableEvent = false

    for (const obj of data) {
      this._addRowInternal(obj, RowType.NORMAL)
    }

    this._updateControl = prevUpdateControl
    this._enableEvent = prevEnableEvent

    this._rebuildView()
    if (this._rowPosition === -1 && this._rows.length > 0) {
      this._rowPosition = 0
    }

    this._bumpVersion()
  }

  // =========================================================================
  // React 연동 (useSyncExternalStore)
  // =========================================================================

  subscribe(callback: () => void): () => void {
    this._subscribers.add(callback)
    return () => {
      this._subscribers.delete(callback)
    }
  }

  getSnapshot(): ReadonlyArray<Readonly<Record<string, unknown>>> {
    if (this._lastNotifiedVersion !== this._snapshotVersion) {
      this._snapshot = this._buildSnapshot()
      this._lastNotifiedVersion = this._snapshotVersion
    }
    return this._snapshot
  }

  // =========================================================================
  // IBSheet8 연동
  // =========================================================================

  toSheetData(): { data: Record<string, unknown>[] } {
    const data: Record<string, unknown>[] = []
    const len = this._viewLength()
    for (let vi = 0; vi < len; vi++) {
      const rawIdx = this._viewToRaw(vi)
      if (rawIdx !== -1) data.push({ ...this._rows[rawIdx]!.current })
    }
    return { data }
  }

  fromSheetData(
    sheetRows: Array<Record<string, unknown> & { sAction?: string; _type?: string }>,
  ): void {
    const prevEnableEvent = this._enableEvent
    this._enableEvent = false

    for (const sheetRow of sheetRows) {
      const action = (sheetRow.sAction ?? sheetRow._type ?? '').toString().toUpperCase()
      const { sAction: _a, _type: _t, ...data } = sheetRow

      if (action === 'I') {
        this.addRow(data)
      } else if (action === 'U') {
        const rowNum = Number(sheetRow['__rowNum'] ?? sheetRow['_rowNum'] ?? -1)
        if (rowNum >= 0) {
          for (const [k, v] of Object.entries(data)) {
            if (k === '__rowNum' || k === '_rowNum') continue
            this.setColumn(rowNum, k, v)
          }
        }
      } else if (action === 'D') {
        const rowNum = Number(sheetRow['__rowNum'] ?? sheetRow['_rowNum'] ?? -1)
        if (rowNum >= 0) {
          this.deleteRow(rowNum)
        }
      }
    }

    this._enableEvent = prevEnableEvent
    this._bumpVersion()
  }

  // =========================================================================
  // toString
  // =========================================================================

  toString(): string {
    return '[object NxDataset]'
  }

  // =========================================================================
  // Private
  // =========================================================================

  private _addRowInternal(data: Record<string, unknown>, rowType: RowType): void {
    if (!this._useclientlayout) {
      for (const key of Object.keys(data)) {
        if (key === '_rowtype') continue
        if (!this._columns.some((c) => c.id === key)) {
          const type: ColumnType = typeof data[key] === 'number' ? 'float' : 'string'
          this._columns.push({ id: key, type, size: 256 })
        }
      }
    }

    const row = this._createRow(data, rowType)
    this._rows.push(row)
  }

  private _createRow(data: Record<string, unknown>, rowType: RowType): RowData {
    const current: Record<string, unknown> = {}

    for (const col of this._columns) {
      current[col.id] = data[col.id] ?? ''
    }

    for (const [k, v] of Object.entries(data)) {
      if (k === '_rowtype') continue
      if (!(k in current)) {
        current[k] = v
      }
    }

    return { current, original: null, rowType }
  }

  private _setRowPosition(value: number): void {
    const viewLen = this._viewLength()
    const clamped = viewLen === 0 ? -1 : Math.max(-1, Math.min(value, viewLen - 1))
    if (clamped === this._rowPosition) return

    const oldRow = this._rowPosition
    this._rowPosition = clamped

    if (this._enableEvent && this._events.onrowsetchanged) {
      const e: RowSetChangedEventInfo = { oldrow: oldRow, newrow: clamped }
      this._events.onrowsetchanged(this, e)
    }

    this._bumpVersion()
  }

  private _adjustRowPositionAfterDelete(deletedViewIdx: number): void {
    const viewLen = this._viewLength()
    if (viewLen === 0) {
      this._rowPosition = -1
    } else if (this._rowPosition > deletedViewIdx) {
      this._rowPosition -= 1
    } else if (this._rowPosition >= viewLen) {
      this._rowPosition = viewLen - 1
    }
  }

  private _viewToRaw(viewIdx: number): number {
    if (viewIdx < 0) return -1
    if (this._viewIndices) {
      return viewIdx < this._viewIndices.length ? this._viewIndices[viewIdx]! : -1
    }
    return viewIdx < this._rows.length ? viewIdx : -1
  }

  private _viewLength(): number {
    return this._viewIndices ? this._viewIndices.length : this._rows.length
  }

  private _rebuildView(): void {
    const hasFilter = this._filterstr.trim().length > 0
    const hasSort = this._keystring.trim().length > 0

    if (!hasFilter && !hasSort) {
      this._viewIndices = null
      return
    }

    let indices: number[] = []
    if (hasFilter) {
      const filterFn = this._compileFilter(this._filterstr)
      for (let i = 0; i < this._rows.length; i++) {
        if (filterFn(this._rows[i]!.current)) {
          indices.push(i)
        }
      }
    } else {
      indices = this._rows.map((_, i) => i)
    }

    if (hasSort) {
      const sortSpecs = this._parseSortKey(this._keystring)
      indices.sort((a, b) => {
        for (const spec of sortSpecs) {
          const va = this._rows[a]!.current[spec.colId]
          const vb = this._rows[b]!.current[spec.colId]
          const cmp = this._compare(va, vb)
          if (cmp !== 0) return spec.desc ? -cmp : cmp
        }
        return 0
      })
    }

    this._viewIndices = indices
  }

  private _adjustRowPositionToView(): void {
    const viewLen = this._viewLength()
    if (viewLen === 0) {
      this._rowPosition = -1
    } else if (this._rowPosition >= viewLen) {
      this._rowPosition = viewLen - 1
    } else if (this._rowPosition === -1 && viewLen > 0) {
      this._rowPosition = 0
    }
  }

  private _compileFilter(expr: string): (row: Record<string, unknown>) => boolean {
    return new Function(
      'row',
      `with(row) { try { return !!(${expr}); } catch { return false; } }`,
    ) as (row: Record<string, unknown>) => boolean
  }

  private _parseSortKey(keystring: string): Array<{ colId: string; desc: boolean }> {
    return keystring.split('+').map((part) => {
      const [colId, dir] = part.trim().split(':')
      return { colId: colId!.trim(), desc: (dir ?? 'A').toUpperCase() === 'D' }
    })
  }

  private _compare(a: unknown, b: unknown): number {
    if (a === b) return 0
    if (a == null) return -1
    if (b == null) return 1

    const na = Number(a)
    const nb = Number(b)
    if (!isNaN(na) && !isNaN(nb)) return na - nb

    return String(a).localeCompare(String(b))
  }

  private _pick(data: Record<string, unknown>, keys: string[]): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const k of keys) {
      result[k] = data[k] ?? ''
    }
    return result
  }

  private _bumpVersion(): void {
    this._snapshotVersion++
    this._notifySubscribers()
  }

  private _notifySubscribers(): void {
    for (const cb of this._subscribers) {
      cb()
    }
  }

  private _buildSnapshot(): ReadonlyArray<Readonly<Record<string, unknown>>> {
    const len = this._viewLength()
    const snap: Record<string, unknown>[] = []
    for (let vi = 0; vi < len; vi++) {
      const rawIdx = this._viewToRaw(vi)
      if (rawIdx !== -1) snap.push(this._rows[rawIdx]!.current)
    }
    return snap
  }
}
