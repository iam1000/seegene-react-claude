import { useCallback, useRef } from 'react'
import type { NxDataset } from '#/lib/NxDataset'

// =============================================================================
// Types
// =============================================================================

/** 정렬 방향 */
type SortDirection = 'asc' | 'desc'

/** 텍스트 검색 옵션 */
interface FindOptions {
  /** 대소문자 구분 (기본: false) */
  caseSensitive?: boolean
  /** 전체 일치 (기본: false — 부분 일치) */
  exact?: boolean
  /** 특정 컬럼만 검색 (기본: 전체 컬럼) */
  columnId?: string
}

/** 컨텍스트 메뉴 항목 */
interface ContextMenuItem {
  id: string
  label: string
  icon?: string
  disabled?: boolean
  separator?: boolean
  onClick?: () => void
}

/** 무한스크롤 모드 옵션 */
interface AppendModeOptions {
  /** 스크롤이 하단에 도달했을 때 호출되는 콜백 */
  onScrollEnd?: () => void
  /** 하단 도달 판정 offset (px, 기본: 50) */
  threshold?: number
}

/** useIBSheet 초기화 옵션 */
interface UseIBSheetOptions {
  /** IBSheet 인스턴스 ID */
  id: string
}

/** useIBSheet 반환 타입 */
interface UseIBSheetReturn {
  /** IBSheet 인스턴스 참조 (외부에서 직접 접근 필요 시) */
  sheetRef: React.MutableRefObject<IBSheetInstance | null>
  /** 인스턴스 설정 (IBSheet 컴포넌트 onReady에서 호출) */
  setInstance: (instance: IBSheetInstance) => void

  // --- NxDataset 연동 ---
  loadData: (dataset: NxDataset) => void
  saveData: (dataset: NxDataset) => void
  appendData: (dataset: NxDataset) => void
  setAppendMode: (enabled: boolean, options?: AppendModeOptions) => void
  resetAppend: () => void

  // --- 정렬 / 필터 ---
  sort: (columnId: string, direction?: SortDirection) => void
  multiSort: (sorts: Array<{ columnId: string; direction: SortDirection }>) => void
  clearSort: () => void
  filter: (columnId: string, value: string, operator?: string) => void
  clearFilter: () => void

  // --- 행 추가 / 삭제 ---
  addRow: (
    data?: Record<string, unknown>,
    position?: 'first' | 'last' | 'above' | 'below',
  ) => IBSheetRow | null
  deleteRow: (rowIndex?: number) => void
  deleteSelectedRows: () => void
  deleteCheckedRows: (checkColumnId?: string) => number

  // --- 선택 ---
  getSelectedRow: () => number
  getSelectedRows: () => number[]
  setRowPosition: (rowIndex: number, columnId?: string) => void
  selectAllRows: () => void
  clearSelection: () => void

  // --- 셀 값 ---
  getCellValue: (row: number, col: string) => unknown
  setCellValue: (row: number, col: string, value: unknown) => void

  // --- 체크박스 ---
  setHeaderCheckbox: (columnId: string, checked: boolean) => void
  getCheckedRows: (columnId: string) => number[]

  // --- 클립보드 ---
  copyToClipboard: () => void
  pasteFromClipboard: () => Promise<void>

  // --- 검색 / 치환 ---
  findText: (text: string, options?: FindOptions) => { row: number; col: string } | null
  replaceText: (find: string, replace: string, options?: FindOptions & { all?: boolean }) => number

  // --- 컨텍스트 메뉴 ---
  showContextMenu: (items: ContextMenuItem[]) => void

  // --- 컬럼 ---
  setColumnVisible: (columnId: string, visible: boolean) => void
  freezeColumn: (columnId: string | number) => void
  unfreezeColumn: () => void

  // --- 유틸 ---
  getRowCount: () => number
  hasChangedData: () => boolean
  acceptChanges: () => void
  refresh: () => void

  // --- 엑셀 ---
  exportExcel: (fileName?: string, options?: Record<string, unknown>) => void
}

// =============================================================================
// useIBSheet — IBSheet8 인스턴스 제어 훅
// =============================================================================

/**
 * IBSheet8 인스턴스를 React 환경에서 제어하기 위한 훅.
 *
 * Nexacro Grid.xjs(87개 함수)의 주요 기능을 IBSheet8 API로 재매핑하여 제공한다.
 *
 * @example
 * ```tsx
 * function MyGrid() {
 *   const { sheetRef, setInstance, loadData, addRow, sort } = useIBSheet({ id: 'sheet1' })
 *   const { dataset } = useNxDataset({ id: 'ds_list', useclientlayout: true })
 *
 *   return (
 *     <IBSheet
 *       id="sheet1"
 *       columns={columns}
 *       onReady={(instance) => {
 *         setInstance(instance)
 *         loadData(dataset)
 *       }}
 *     />
 *   )
 * }
 * ```
 */
export function useIBSheet(options: UseIBSheetOptions): UseIBSheetReturn {
  const { id } = options
  const sheetRef = useRef<IBSheetInstance | null>(null)
  const appendModeRef = useRef<{ enabled: boolean; cleanup?: () => void }>({
    enabled: false,
  })

  // ---------------------------------------------------------------------------
  // 내부 유틸
  // ---------------------------------------------------------------------------

  /** 현재 시트 인스턴스를 안전하게 가져온다 */
  const getSheet = useCallback((): IBSheetInstance | null => {
    if (sheetRef.current) return sheetRef.current
    // window에 등록된 인스턴스 fallback
    if (typeof window !== 'undefined' && (window as Record<string, unknown>)[id]) {
      sheetRef.current = (window as Record<string, unknown>)[id] as IBSheetInstance
    }
    return sheetRef.current
  }, [id])

  /** 인스턴스가 없으면 경고 후 null 반환 */
  const requireSheet = useCallback(
    (caller: string): IBSheetInstance | null => {
      const sheet = getSheet()
      if (!sheet) {
        console.warn(
          `[useIBSheet] ${caller}: IBSheet 인스턴스(${id})가 아직 초기화되지 않았습니다.`,
        )
      }
      return sheet
    },
    [getSheet, id],
  )

  // ---------------------------------------------------------------------------
  // 인스턴스 설정
  // ---------------------------------------------------------------------------

  const setInstance = useCallback((instance: IBSheetInstance) => {
    sheetRef.current = instance
  }, [])

  // ---------------------------------------------------------------------------
  // NxDataset ↔ IBSheet8 데이터 연동
  // ---------------------------------------------------------------------------

  /**
   * NxDataset → IBSheet8 데이터 로드.
   * NxDataset.toSheetData()를 호출하여 JSON 배열을 IBSheet에 loadSearchData.
   *
   * Grid.xjs의 gfn_setGrid / gfn_appendGridData 대응.
   */
  const loadData = useCallback(
    (dataset: NxDataset) => {
      const sheet = requireSheet('loadData')
      if (!sheet) return

      const { data } = dataset.toSheetData()
      sheet.loadSearchData({ data, sync: 1 })
    },
    [requireSheet],
  )

  /**
   * IBSheet8 변경사항 → NxDataset 반영.
   * getSaveJson()으로 변경된 행을 추출하여 NxDataset.fromSheetData()로 동기화.
   *
   * Grid.xjs의 Dataset ↔ Grid 연동 대응.
   */
  const saveData = useCallback(
    (dataset: NxDataset) => {
      const sheet = requireSheet('saveData')
      if (!sheet) return

      const result = sheet.getSaveJson({ saveMode: 0 })
      if (!result?.data) return

      const STATUS_MAP: Record<string, string> = {
        Added: 'I',
        Changed: 'U',
        Deleted: 'D',
        '2': 'I',
        '4': 'U',
        '8': 'D',
      }
      const sheetRows = result.data.map((row, idx) => {
        const status = String(row.STATUS ?? '')
        const sAction = STATUS_MAP[status] ?? ''
        return { ...row, sAction, __rowNum: idx }
      })

      dataset.fromSheetData(sheetRows)
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 대용량 Append (무한스크롤)
  // ---------------------------------------------------------------------------

  /**
   * NxDataset 데이터를 기존 그리드 하단에 추가 로드.
   * IBSheet8의 loadSearchData({ data, append: 1 }) API 활용.
   *
   * Grid.xjs의 gfn_appendGridData 대응.
   */
  const appendData = useCallback(
    (dataset: NxDataset) => {
      const sheet = requireSheet('appendData')
      if (!sheet) return

      const { data } = dataset.toSheetData()
      sheet.loadSearchData({ data, append: 1, sync: 1 })
    },
    [requireSheet],
  )

  /**
   * 무한스크롤 모드 설정.
   * 스크롤이 하단에 도달하면 onScrollEnd 콜백을 호출한다.
   *
   * @param enabled - 활성화 여부
   * @param options - 무한스크롤 옵션 (onScrollEnd 콜백, threshold)
   */
  const setAppendMode = useCallback(
    (enabled: boolean, options?: AppendModeOptions) => {
      const sheet = requireSheet('setAppendMode')
      if (!sheet) return

      // 기존 바인딩 정리
      if (appendModeRef.current.cleanup) {
        appendModeRef.current.cleanup()
        appendModeRef.current.cleanup = undefined
      }

      appendModeRef.current.enabled = enabled

      if (enabled && options?.onScrollEnd) {
        const threshold = options.threshold ?? 50
        const onScrollEnd = options.onScrollEnd

        const handler = (_evt: { sheet: IBSheetInstance }) => {
          const sheetEl = document.getElementById(id)
          if (!sheetEl) return

          const bodyEl = sheetEl.querySelector(
            '.ibsheet-body, [class*="body"]',
          ) as HTMLElement | null
          if (!bodyEl) return

          const { scrollTop, scrollHeight, clientHeight } = bodyEl
          if (scrollHeight - scrollTop - clientHeight <= threshold) {
            onScrollEnd()
          }
        }

        sheet.bind('onScroll', handler)

        appendModeRef.current.cleanup = () => {
          // IBSheet8은 unbind를 제공하지 않으므로 no-op 핸들러로 대체
          sheet.bind('onScroll', () => undefined)
        }
      }
    },
    [requireSheet, id],
  )

  /**
   * Append 상태 초기화.
   * 무한스크롤 모드를 해제하고 이벤트 바인딩을 정리한다.
   */
  const resetAppend = useCallback(() => {
    if (appendModeRef.current.cleanup) {
      appendModeRef.current.cleanup()
      appendModeRef.current.cleanup = undefined
    }
    appendModeRef.current.enabled = false
  }, [])

  // ---------------------------------------------------------------------------
  // 정렬
  // ---------------------------------------------------------------------------

  /**
   * 단일 컬럼 정렬.
   * Grid.xjs의 gfn_gridExecuteSort / gfn_gridSortByOnheadclick 대응.
   */
  const sort = useCallback(
    (columnId: string, direction: SortDirection = 'asc') => {
      const sheet = requireSheet('sort')
      if (!sheet) return

      const prefix = direction === 'desc' ? '-' : ''
      sheet.doSort(`${prefix}${columnId}`)
    },
    [requireSheet],
  )

  /**
   * 다중 컬럼 정렬.
   * Grid.xjs의 gfn_gridSetSortStatus(multiple=true) 대응.
   */
  const multiSort = useCallback(
    (sorts: Array<{ columnId: string; direction: SortDirection }>) => {
      const sheet = requireSheet('multiSort')
      if (!sheet) return

      const sortStr = sorts
        .map((s) => `${s.direction === 'desc' ? '-' : ''}${s.columnId}`)
        .join(',')
      sheet.doSort(sortStr)
    },
    [requireSheet],
  )

  /**
   * 정렬 초기화.
   * Grid.xjs의 gfn_clearSortMark 대응.
   */
  const clearSort = useCallback(() => {
    const sheet = requireSheet('clearSort')
    if (!sheet) return
    sheet.clearSort()
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 필터
  // ---------------------------------------------------------------------------

  /**
   * 컬럼 필터 적용.
   * Grid.xjs의 gfn_gridFilter / gfn_gridFilterCallback 대응.
   */
  const filter = useCallback(
    (columnId: string, value: string, operator = '1') => {
      const sheet = requireSheet('filter')
      if (!sheet) return

      sheet.showFilterRow()
      // IBSheet8 doFilter 규격: 첫 문자가 구분자 역할 (단일 컬럼도 |접두어 필수)
      sheet.doFilter({
        cols: `|${columnId}`,
        vals: `|${value}`,
        operators: `|${operator}`,
      })
    },
    [requireSheet],
  )

  /**
   * 필터 해제.
   * Grid.xjs의 gfn_gridCellFilterFree 대응.
   */
  const clearFilter = useCallback(() => {
    const sheet = requireSheet('clearFilter')
    if (!sheet) return
    sheet.clearFilter()
    sheet.hideFilterRow()
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 행 추가 / 삭제
  // ---------------------------------------------------------------------------

  /**
   * 행 추가.
   * Grid.xjs의 gfn_gridCheckboxNoStatusAdd + addRow 로직 대응.
   */
  const addRow = useCallback(
    (
      data?: Record<string, unknown>,
      position: 'first' | 'last' | 'above' | 'below' = 'last',
    ): IBSheetRow | null => {
      const sheet = requireSheet('addRow')
      if (!sheet) return null

      let nextRow: IBSheetRow | undefined

      if (position === 'first') {
        nextRow = sheet.getFirstRow()
      } else if (position === 'above') {
        nextRow = sheet.getFocusedRow() ?? undefined
      } else if (position === 'below') {
        const focused = sheet.getFocusedRow()
        if (focused) {
          nextRow = sheet.getNextRow(focused) ?? undefined
        }
      }
      // 'last': nextRow = undefined → addRow() 맨 끝에 추가

      const opts: { next?: IBSheetRow; init?: Record<string, unknown> } = {}
      if (nextRow) opts.next = nextRow
      if (data) opts.init = data

      return sheet.addRow(Object.keys(opts).length > 0 ? opts : undefined)
    },
    [requireSheet],
  )

  /**
   * 단일 행 삭제 (Deleted 상태로 변경).
   * Grid.xjs의 gfn_deleteChkRow 로직 일부 대응.
   *
   * @param rowIndex - 삭제할 행 인덱스 (미지정 시 현재 포커스 행)
   */
  const deleteRow = useCallback(
    (rowIndex?: number) => {
      const sheet = requireSheet('deleteRow')
      if (!sheet) return

      let row: IBSheetRow
      if (rowIndex !== undefined) {
        row = sheet.getRowByIndex(rowIndex)
      } else {
        row = sheet.getFocusedRow()
      }

      if (!row) return
      sheet.deleteRow(row, 1)
    },
    [requireSheet],
  )

  /**
   * 선택된 행들을 삭제.
   */
  const deleteSelectedRows = useCallback(() => {
    const sheet = requireSheet('deleteSelectedRows')
    if (!sheet) return

    const selectedRows = sheet.getSelectedRows()
    if (!selectedRows || selectedRows.length === 0) return

    // 역순으로 삭제하여 인덱스 어긋남 방지
    for (let i = selectedRows.length - 1; i >= 0; i--) {
      sheet.deleteRow(selectedRows[i]!, 1)
    }
  }, [requireSheet])

  /**
   * 체크된 행들 삭제.
   * Grid.xjs의 gfn_deleteChkRow 대응.
   *
   * @returns 삭제된 행 수
   */
  const deleteCheckedRows = useCallback(
    (checkColumnId = 'CHK'): number => {
      const sheet = requireSheet('deleteCheckedRows')
      if (!sheet) return 0

      const checkedRows = sheet.getRowsByChecked(checkColumnId)
      if (!checkedRows || checkedRows.length === 0) return 0

      for (let i = checkedRows.length - 1; i >= 0; i--) {
        sheet.deleteRow(checkedRows[i]!, 1)
      }

      return checkedRows.length
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 선택
  // ---------------------------------------------------------------------------

  /**
   * 현재 포커스된 행의 인덱스 반환.
   */
  const getSelectedRow = useCallback((): number => {
    const sheet = requireSheet('getSelectedRow')
    if (!sheet) return -1

    const row = sheet.getFocusedRow()
    if (!row) return -1
    return sheet.getRowIndex(row)
  }, [requireSheet])

  /**
   * 선택된 행들의 인덱스 배열 반환.
   */
  const getSelectedRows = useCallback((): number[] => {
    const sheet = requireSheet('getSelectedRows')
    if (!sheet) return []

    const rows = sheet.getSelectedRows()
    if (!rows) return []
    return rows.map((r) => sheet.getRowIndex(r))
  }, [requireSheet])

  /**
   * 특정 행(및 컬럼)으로 포커스 이동.
   * Grid.xjs의 gfn_setGridCellFocus 대응.
   *
   * @param rowIndex - 포커스할 행 인덱스
   * @param columnId - 포커스할 컬럼 Name (미지정 시 첫 번째 컬럼)
   */
  const setRowPosition = useCallback(
    (rowIndex: number, columnId?: string) => {
      const sheet = requireSheet('setRowPosition')
      if (!sheet) return

      const row = sheet.getRowByIndex(rowIndex)
      if (!row) return

      const col = columnId ?? sheet.getFirstCol()
      sheet.focus(row, col)
    },
    [requireSheet],
  )

  /**
   * 전체 행 선택.
   */
  const selectAllRows = useCallback(() => {
    const sheet = requireSheet('selectAllRows')
    if (!sheet) return
    sheet.selectAllRows()
  }, [requireSheet])

  /**
   * 선택 해제.
   */
  const clearSelection = useCallback(() => {
    const sheet = requireSheet('clearSelection')
    if (!sheet) return
    sheet.clearSelection()
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 셀 값
  // ---------------------------------------------------------------------------

  /**
   * 셀 값 조회.
   */
  const getCellValue = useCallback(
    (row: number, col: string): unknown => {
      const sheet = requireSheet('getCellValue')
      if (!sheet) return undefined

      const rowObj = sheet.getRowByIndex(row)
      if (!rowObj) return undefined
      return sheet.getValue(rowObj, col)
    },
    [requireSheet],
  )

  /**
   * 셀 값 설정.
   */
  const setCellValue = useCallback(
    (row: number, col: string, value: unknown) => {
      const sheet = requireSheet('setCellValue')
      if (!sheet) return

      const rowObj = sheet.getRowByIndex(row)
      if (!rowObj) return
      sheet.setValue(rowObj, col, value)
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 체크박스
  // ---------------------------------------------------------------------------

  /**
   * 헤더 체크박스 전체 선택/해제.
   * Grid.xjs의 gfn_headCheckSelectAll / gfn_setGridCheck 대응.
   */
  const setHeaderCheckbox = useCallback(
    (columnId: string, checked: boolean) => {
      const sheet = requireSheet('setHeaderCheckbox')
      if (!sheet) return

      const rows = sheet.getDataRows()
      for (const row of rows) {
        sheet.setCheck(row, columnId, checked ? 1 : 0)
      }

      // 헤더 행의 체크 표시 갱신
      const headerRow = sheet.getRowById('Header')
      if (headerRow) {
        sheet.setValue(headerRow, columnId, checked ? 1 : 0)
      }
    },
    [requireSheet],
  )

  /**
   * 체크된 행들의 인덱스 배열 반환.
   */
  const getCheckedRows = useCallback(
    (columnId: string): number[] => {
      const sheet = requireSheet('getCheckedRows')
      if (!sheet) return []

      const checkedRows = sheet.getRowsByChecked(columnId)
      if (!checkedRows) return []
      return checkedRows.map((r) => sheet.getRowIndex(r))
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 클립보드
  // ---------------------------------------------------------------------------

  /**
   * 선택 영역을 클립보드에 복사.
   * Grid.xjs의 gfn_gridCopyEventForRuntime / gfn_gridCopyEventForChrome 대응.
   */
  const copyToClipboard = useCallback(() => {
    const sheet = requireSheet('copyToClipboard')
    if (!sheet) return

    const selectedRows = sheet.getSelectedRows()
    if (!selectedRows || selectedRows.length === 0) return

    const cols = sheet.getCols()
    const lines: string[] = []

    for (const row of selectedRows) {
      const values: string[] = []
      for (const col of cols) {
        const visible = sheet.getAttribute(null, col, 'Visible')
        if (visible === 0) continue
        const val = sheet.getString(row, col)
        values.push(val ?? '')
      }
      lines.push(values.join('\t'))
    }

    const text = lines.join('\n')
    navigator.clipboard.writeText(text).catch((err) => {
      console.warn('[useIBSheet] copyToClipboard 실패:', err)
    })
  }, [requireSheet])

  /**
   * 클립보드에서 붙여넣기.
   * Grid.xjs의 gfn_gridPasteEvent 대응.
   */
  const pasteFromClipboard = useCallback(async () => {
    const sheet = requireSheet('pasteFromClipboard')
    if (!sheet) return

    let text: string
    try {
      text = await navigator.clipboard.readText()
    } catch {
      console.warn('[useIBSheet] pasteFromClipboard: 클립보드 읽기 실패')
      return
    }

    if (!text) return

    const rows = text.split('\n').filter((line) => line.length > 0)
    const cols = sheet.getCols().filter((col) => {
      const visible = sheet.getAttribute(null, col, 'Visible')
      const canEdit = sheet.getAttribute(null, col, 'CanEdit')
      return visible !== 0 && canEdit !== 0
    })

    const focusedRow = sheet.getFocusedRow()
    let startIndex = focusedRow ? sheet.getRowIndex(focusedRow) : 0
    const totalRows = sheet.getDataRows().length

    for (const rowText of rows) {
      if (startIndex >= totalRows) {
        sheet.addRow()
      }

      const cellValues = rowText.split('\t')
      const targetRow = sheet.getRowByIndex(startIndex)
      if (!targetRow) continue

      for (let j = 0; j < Math.min(cellValues.length, cols.length); j++) {
        sheet.setValue({ row: targetRow, col: cols[j]!, val: cellValues[j]!, render: 0 })
      }

      startIndex++
    }

    sheet.renderBody()
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 검색 / 치환
  // ---------------------------------------------------------------------------

  /**
   * 텍스트 검색.
   * Grid.xjs의 gfn_findGridText 대응.
   */
  const findText = useCallback(
    (text: string, options?: FindOptions): { row: number; col: string } | null => {
      const sheet = requireSheet('findText')
      if (!sheet) return null

      const cols = options?.columnId ? [options.columnId] : sheet.getCols()
      const searchText = options?.caseSensitive ? text : text.toUpperCase()

      const dataRows = sheet.getDataRows()
      for (let i = 0; i < dataRows.length; i++) {
        for (const col of cols) {
          const cellVal = sheet.getString(dataRows[i]!, col)
          if (!cellVal) continue

          const compareVal = options?.caseSensitive ? cellVal : cellVal.toUpperCase()

          if (options?.exact) {
            if (compareVal === searchText) {
              const row = sheet.getRowByIndex(i)
              if (row) sheet.focus(row, col)
              return { row: i, col }
            }
          } else {
            if (compareVal.includes(searchText)) {
              const row = sheet.getRowByIndex(i)
              if (row) sheet.focus(row, col)
              return { row: i, col }
            }
          }
        }
      }

      return null
    },
    [requireSheet],
  )

  /**
   * 텍스트 치환.
   * Grid.xjs의 gfn_replaceGridText / _replaceGridCellText 대응.
   *
   * @returns 치환된 셀 수
   */
  const replaceText = useCallback(
    (find: string, replace: string, options?: FindOptions & { all?: boolean }): number => {
      const sheet = requireSheet('replaceText')
      if (!sheet) return 0

      const cols = options?.columnId ? [options.columnId] : sheet.getCols()
      const searchText = options?.caseSensitive ? find : find.toUpperCase()
      const all = options?.all ?? false
      let count = 0

      const dataRows = sheet.getDataRows()
      for (let i = 0; i < dataRows.length; i++) {
        for (const col of cols) {
          const canEdit = sheet.getAttribute(null, col, 'CanEdit')
          if (canEdit === 0) continue

          const cellVal = sheet.getString(dataRows[i]!, col)
          if (!cellVal) continue

          const compareVal = options?.caseSensitive ? cellVal : cellVal.toUpperCase()

          if (compareVal.includes(searchText)) {
            const regex = new RegExp(
              find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
              options?.caseSensitive ? 'g' : 'gi',
            )
            const newVal = cellVal.replace(
              all ? regex : new RegExp(regex.source, regex.flags.replace('g', '')),
              replace,
            )
            sheet.setValue({ row: dataRows[i]!, col, val: newVal, render: 0 })
            count++
            if (!all) {
              sheet.renderBody()
              return count
            }
          }
        }
      }

      if (count > 0) sheet.renderBody()
      return count
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 컨텍스트 메뉴
  // ---------------------------------------------------------------------------

  /**
   * 우클릭 컨텍스트 메뉴 표시.
   * Grid.xjs의 gfn_gridOnrbuttondown / gfn_makeGridPopupMenu /
   * gfn_popUpMenuOnmenuclick 대응.
   *
   * IBSheet8은 자체 컨텍스트 메뉴를 지원하지 않으므로 DOM으로 직접 구현.
   */
  const showContextMenu = useCallback(
    (items: ContextMenuItem[]) => {
      // 기존 메뉴가 있으면 제거
      const existingMenu = document.getElementById(`ibsheet-ctx-menu-${id}`)
      if (existingMenu) existingMenu.remove()

      const menu = document.createElement('div')
      menu.id = `ibsheet-ctx-menu-${id}`
      menu.style.cssText =
        'position:fixed;z-index:10000;background:#fff;border:1px solid #ccc;' +
        'box-shadow:2px 2px 6px rgba(0,0,0,.15);min-width:160px;padding:4px 0;font-size:13px;'

      for (const item of items) {
        if (item.separator) {
          const hr = document.createElement('div')
          hr.style.cssText = 'border-top:1px solid #e0e0e0;margin:4px 0;'
          menu.appendChild(hr)
          continue
        }

        const el = document.createElement('div')
        el.textContent = item.label
        el.style.cssText =
          'padding:6px 16px;cursor:pointer;white-space:nowrap;' +
          (item.disabled ? 'color:#aaa;pointer-events:none;' : 'color:#333;')

        el.addEventListener('mouseenter', () => {
          if (!item.disabled) el.style.background = '#e8f0fe'
        })
        el.addEventListener('mouseleave', () => {
          el.style.background = ''
        })
        el.addEventListener('click', () => {
          menu.remove()
          item.onClick?.()
        })

        menu.appendChild(el)
      }

      // 마우스 위치에 메뉴 표시
      const handleContext = (e: MouseEvent) => {
        e.preventDefault()
        menu.style.left = `${e.clientX}px`
        menu.style.top = `${e.clientY}px`
        document.body.appendChild(menu)

        const onClickOutside = (ev: MouseEvent) => {
          if (!menu.contains(ev.target as Node)) {
            menu.remove()
            document.removeEventListener('click', onClickOutside)
          }
        }
        setTimeout(() => document.addEventListener('click', onClickOutside), 0)
      }

      // 시트 컨테이너에 일회성 contextmenu 이벤트 바인딩
      const sheetEl = document.getElementById(id)
      if (sheetEl) {
        const oneTimeHandler = (e: MouseEvent) => {
          handleContext(e)
          sheetEl.removeEventListener('contextmenu', oneTimeHandler)
        }
        sheetEl.addEventListener('contextmenu', oneTimeHandler)
      } else {
        // sheetEl이 아직 없으면 document에 바인딩
        const oneTimeHandler = (e: MouseEvent) => {
          handleContext(e)
          document.removeEventListener('contextmenu', oneTimeHandler)
        }
        document.addEventListener('contextmenu', oneTimeHandler)
      }
    },
    [id],
  )

  // ---------------------------------------------------------------------------
  // 컬럼
  // ---------------------------------------------------------------------------

  /**
   * 컬럼 표시/숨김.
   * Grid.xjs의 gfn_gridColHideShow / gfn_columnHidCallback 대응.
   */
  const setColumnVisible = useCallback(
    (columnId: string, visible: boolean) => {
      const sheet = requireSheet('setColumnVisible')
      if (!sheet) return

      if (visible) {
        sheet.showCol(columnId)
      } else {
        sheet.hideCol(columnId)
      }
    },
    [requireSheet],
  )

  /**
   * 컬럼 고정 (좌측 틀고정).
   * Grid.xjs의 gfn_gridcellFix 대응.
   *
   * @param columnId - 고정할 컬럼 Name 또는 고정할 컬럼 수 (숫자)
   */
  const freezeColumn = useCallback(
    (columnId: string | number) => {
      const sheet = requireSheet('freezeColumn')
      if (!sheet) return

      if (typeof columnId === 'number') {
        // SEQ 포함하여 columnId + 1 개 고정
        sheet.setFixedLeft(columnId + 1, 1)
      } else {
        // 컬럼 이름으로 위치를 찾아서 그 컬럼까지 고정
        const allCols = sheet.getCols()
        const idx = allCols.indexOf(columnId)
        if (idx >= 0) {
          // SEQ(0번) + idx + 1 = idx + 2
          sheet.setFixedLeft(idx + 2, 1)
        }
      }
    },
    [requireSheet],
  )

  /**
   * 컬럼 고정 해제.
   * Grid.xjs의 gfn_gridCellFree 대응.
   */
  const unfreezeColumn = useCallback(() => {
    const sheet = requireSheet('unfreezeColumn')
    if (!sheet) return
    sheet.setFixedLeft(0)
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 유틸
  // ---------------------------------------------------------------------------

  /**
   * 행 수 반환.
   */
  const getRowCount = useCallback((): number => {
    const sheet = getSheet()
    if (!sheet) return 0
    return sheet.getDataRows().length
  }, [getSheet])

  /**
   * 변경된 데이터 존재 여부.
   * IBSheet8의 hasChangedData()는 number(0|1)를 반환하므로 boolean으로 변환.
   */
  const hasChangedData = useCallback((): boolean => {
    const sheet = getSheet()
    if (!sheet) return false
    return !!sheet.hasChangedData()
  }, [getSheet])

  /**
   * 변경사항 확정 (모든 행을 원래 상태로 커밋).
   */
  const acceptChanges = useCallback(() => {
    const sheet = requireSheet('acceptChanges')
    if (!sheet) return
    sheet.acceptChangedData()
  }, [requireSheet])

  /**
   * 그리드 리프레시 (전체 리렌더).
   */
  const refresh = useCallback(() => {
    const sheet = requireSheet('refresh')
    if (!sheet) return
    sheet.rerender()
  }, [requireSheet])

  // ---------------------------------------------------------------------------
  // 엑셀
  // ---------------------------------------------------------------------------

  /**
   * 엑셀 내보내기.
   * Grid.xjs의 gfn_gridExcelExport 대응.
   */
  const exportExcel = useCallback(
    (fileName?: string, extraOptions?: Record<string, unknown>) => {
      const sheet = requireSheet('exportExcel')
      if (!sheet) return

      const name = fileName ?? `${new Date().toISOString().slice(0, 10)}_ExcelExport.xlsx`
      sheet.exportData({
        fileName: name,
        sheetName: 'Sheet1',
        downRows: 'Visible',
        downCols: 'Visible',
        sheetDesign: 1,
        ...extraOptions,
      })
    },
    [requireSheet],
  )

  // ---------------------------------------------------------------------------
  // 반환
  // ---------------------------------------------------------------------------

  return {
    sheetRef,
    setInstance,
    loadData,
    saveData,
    appendData,
    setAppendMode,
    resetAppend,
    sort,
    multiSort,
    clearSort,
    filter,
    clearFilter,
    addRow,
    deleteRow,
    deleteSelectedRows,
    deleteCheckedRows,
    getSelectedRow,
    getSelectedRows,
    setRowPosition,
    selectAllRows,
    clearSelection,
    getCellValue,
    setCellValue,
    setHeaderCheckbox,
    getCheckedRows,
    copyToClipboard,
    pasteFromClipboard,
    findText,
    replaceText,
    showContextMenu,
    setColumnVisible,
    freezeColumn,
    unfreezeColumn,
    getRowCount,
    hasChangedData,
    acceptChanges,
    refresh,
    exportExcel,
  }
}

// =============================================================================
// 타입 export
// =============================================================================
export type {
  AppendModeOptions,
  ContextMenuItem,
  FindOptions,
  SortDirection,
  UseIBSheetOptions,
  UseIBSheetReturn,
}
