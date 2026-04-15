declare global {
  interface Window {
    IBSheet: IBSheetStatic
  }

  // =========================================================================
  // IBSheet8 Static
  // =========================================================================
  interface IBSheetStatic {
    create(options: IBSheetCreateOptions): IBSheetInstance
    dispose(id: string): void
    findById(id: string): IBSheetInstance | null
  }

  interface IBSheetCreateOptions {
    id: string
    el: HTMLElement | string
    options: {
      Cfg?: Record<string, unknown>
      Cols?: IBSheetCol[]
      LeftCols?: IBSheetCol[]
      RightCols?: IBSheetCol[]
      Events?: Partial<IBSheetEvents>
      [key: string]: unknown
    }
    data?: unknown[]
    sync?: 0 | 1
  }

  // =========================================================================
  // Column
  // =========================================================================
  interface IBSheetCol {
    Header: string | string[] | Record<string, unknown> | Array<string | Record<string, unknown>>
    Name: string
    Type?: string
    Width?: number
    MinWidth?: number
    RelWidth?: number
    Align?: string
    CanEdit?: 0 | 1
    Visible?: 0 | 1
    Format?: string | Record<string, unknown>
    Formula?: string | ((...args: unknown[]) => unknown)
    Required?: 0 | 1
    DefaultValue?: unknown
    EditType?: string
    [key: string]: unknown
  }

  // =========================================================================
  // Row object (IBSheet8 내부 행 객체)
  // =========================================================================
  declare const __ibsheetRow: unique symbol
  type IBSheetRow = Record<string, unknown> & { readonly [__ibsheetRow]: never }

  // =========================================================================
  // Event parameters
  // =========================================================================
  interface IBSheetEventParam {
    sheet: IBSheetInstance
    row: IBSheetRow
    col: string
    [key: string]: unknown
  }

  interface IBSheetEvents {
    onRenderFirstFinish: (evt: IBSheetEventParam) => void
    onSearchFinish: (evt: IBSheetEventParam) => void
    onClick: (evt: IBSheetEventParam) => undefined | number
    onAfterClick: (evt: IBSheetEventParam) => void
    onDblClick: (evt: IBSheetEventParam) => void
    onStartEdit: (evt: IBSheetEventParam) => undefined | true
    onEndEdit: (evt: IBSheetEventParam) => undefined | true
    onBeforeChange: (evt: IBSheetEventParam & { val: unknown; oldval: unknown }) => unknown
    onAfterChange: (evt: IBSheetEventParam & { val: unknown; oldval: unknown }) => void
    onBeforePaste: (evt: { cols: string[]; pastedtext: string[] }) => undefined | true
    onAfterPaste: (evt: IBSheetEventParam) => void
    onAddRow: (evt: IBSheetEventParam) => void
    onBeforeRowDelete: (
      evt: IBSheetEventParam & { type: 0 | 1; rows?: IBSheetRow[] },
    ) => undefined | true
    onAfterRowDelete: (evt: IBSheetEventParam) => void
    onBeforeSort: (evt: IBSheetEventParam & { sort: string }) => undefined | -1 | 1
    onAfterSort: (evt: IBSheetEventParam) => void
    onBeforeFilter: (evt: IBSheetEventParam) => undefined | true
    onAfterFilter: (evt: IBSheetEventParam) => void
    onBeforeCheckAll: (evt: IBSheetEventParam) => undefined | false
    onCheckAllFinish: (evt: IBSheetEventParam) => void
    onKeyDown: (
      evt: IBSheetEventParam & {
        keyCode: number
        ctrlKey: boolean
        shiftKey: boolean
        altKey: boolean
        event: KeyboardEvent
      },
    ) => undefined | true
    onBeforeFocus: (evt: IBSheetEventParam) => undefined | true
    onFocus: (evt: IBSheetEventParam) => void
    onScroll: (evt: IBSheetEventParam) => void
    onBeforeDataLoad: (evt: { sheet: IBSheetInstance; data: unknown[] }) => void
    onBeforeSave: (evt: {
      sheet: IBSheetInstance
      source: { params?: string; data?: unknown }
    }) => undefined | true
    onAfterSave: (evt: {
      sheet: IBSheetInstance
      result: number
      message: string
      response: unknown
    }) => void
    onIconClick: (evt: IBSheetEventParam) => void
    onButtonClick: (evt: IBSheetEventParam) => void
    [key: string]: ((...args: unknown[]) => unknown) | undefined
  }

  // =========================================================================
  // getSaveJson 옵션 / 결과
  // =========================================================================
  interface IBSheetSaveJsonOptions {
    col?: string
    saveMode?: 0 | 1 | 2
    [key: string]: unknown
  }

  interface IBSheetSaveJsonResult {
    data: Array<
      Record<string, unknown> & {
        STATUS?: 'Added' | 'Changed' | 'Deleted' | 'Moved' | ''
      }
    >
    Message?: string
    Code?: string
    row?: IBSheetRow
    col?: string
  }

  // =========================================================================
  // IBSheet Instance
  // =========================================================================
  interface IBSheetInstance {
    // --- Data Load ---
    loadSearchData(options: { data: unknown[]; sync?: 0 | 1; append?: 0 | 1 } | unknown[]): void
    removeAll(): void
    dispose(): void

    // --- Data Extraction ---
    getSaveJson(options?: IBSheetSaveJsonOptions): IBSheetSaveJsonResult
    getSaveString(options?: IBSheetSaveJsonOptions): string
    getRowValue(row: IBSheetRow): Record<string, unknown>

    // --- Row Access ---
    getDataRows(): IBSheetRow[]
    getRowById(id: string): IBSheetRow
    getRowByIndex(index: number): IBSheetRow
    getNextRow(row: IBSheetRow): IBSheetRow | null
    getPrevRow(row: IBSheetRow): IBSheetRow | null
    getFirstRow(): IBSheetRow
    getLastRow(): IBSheetRow
    getFocusedRow(): IBSheetRow
    getRowsByStatus(status: string): IBSheetRow[]
    getRowsByChecked(col: string): IBSheetRow[]
    getRowIndex(row: IBSheetRow): number

    // --- Row Operations ---
    addRow(options?: { next?: IBSheetRow; init?: Record<string, unknown> }): IBSheetRow
    removeRow(row: IBSheetRow): void
    deleteRow(row: IBSheetRow, flag?: 0 | 1): void
    moveRow(row: IBSheetRow, target: IBSheetRow): void
    copyRow(row: IBSheetRow, target: IBSheetRow): IBSheetRow

    // --- Cell Value ---
    getValue(row: IBSheetRow | number, col: string): unknown
    setValue(
      rowOrOpts:
        | IBSheetRow
        | number
        | { row: IBSheetRow; col: string; val: unknown; render?: 0 | 1 },
      col?: string,
      val?: unknown,
    ): void
    getString(row: IBSheetRow, col: string): string

    // --- Focus / Selection ---
    focus(row: IBSheetRow, col: string): void
    blur(): void
    getSelectedRanges(): unknown[]
    getSelectedRows(): IBSheetRow[]
    getFocusedCol(): string
    selectAllRows(): void
    clearSelection(): void
    selectRange(
      startRow: IBSheetRow,
      startCol: string,
      endRow: IBSheetRow,
      endCol: string,
      flag?: 0 | 1,
    ): void

    // --- Checkbox ---
    setCheck(row: IBSheetRow, col: string, value: 0 | 1 | null): void
    setAllCheck(col: string): void

    // --- Column Operations ---
    getCols(): string[]
    getFirstCol(): string
    getLastCol(): string
    showCol(col: string): void
    hideCol(col: string): void
    setAttribute(row: IBSheetRow | null, col: string | null, attr: string, value: unknown): void
    getAttribute(row: IBSheetRow | null, col: string | null, attr: string): unknown

    // --- Sort / Filter ---
    doSort(sortStr: string): void
    clearSort(): void
    showFilterRow(): void
    doFilter(options: { cols: string; vals: string; operators: string }): void
    clearFilter(): void
    hideFilterRow(): void

    // --- Search ---
    findText(col: string, text: string): IBSheetRow | null

    // --- Render ---
    refreshCell(row: IBSheetRow, col: string): void
    refreshRow(row: IBSheetRow): void
    renderBody(): void
    rerender(): void

    // --- Export / Import ---
    exportData(options: {
      fileName: string
      sheetName?: string
      downRows?: string
      downCols?: string
      sheetDesign?: 0 | 1
      [key: string]: unknown
    }): void

    // --- Merge ---
    setAutoMerge(start: number, end: number): void
    setAutoMergeCancel(): void
    setMergeRange(startRow: IBSheetRow, startCol: string, endRow: IBSheetRow, endCol: string): void

    // --- Frozen ---
    setFixedLeft(count: number, reMerge?: 0 | 1, sync?: 0 | 1): void
    setFixedRight(count: number, reMerge?: 0 | 1, sync?: 0 | 1): void
    setFixedCols(left: number, right?: number, reMerge?: 0 | 1, sync?: 0 | 1): void

    // --- Tree ---
    showTreeLevel(level: number, col?: number, expand?: 0 | 1): void
    setExpandRow(row: IBSheetRow, col?: null, flag?: 0 | 1): void

    // --- Event Binding ---
    bind(event: string, handler: (...args: unknown[]) => unknown): void

    // --- Save ---
    doSave(options: {
      url: string
      param?: string | Record<string, unknown>
      saveMode?: number
      queryMode?: number
      quest?: 0 | 1
      [key: string]: unknown
    }): void
    applySaveResult(result: unknown, message: string, response: unknown): void
    acceptChangedData(row?: IBSheetRow): void
    hasChangedData(dataonly?: 0 | 1): number

    // --- Catch-all ---
    [key: string]: unknown
  }
}

export {}
