import { useCallback, useRef, useState } from 'react'
import apiClient from '#/api/client'
import type { NxDataset } from '#/lib/NxDataset'

// =============================================================================
// Types
// =============================================================================

/** 엑셀 내보내기 옵션 (IBSheet8 exportData 래핑) */
export interface ExportToExcelOptions {
  /** 파일명 (기본: 날짜_ExcelExport.xlsx) */
  fileName?: string
  /** 시트명 (기본: Sheet1) */
  sheetName?: string
  /** 헤더 포함 여부 (기본: 1) */
  downHeader?: 0 | 1
  /** 합계행 포함 여부 (기본: 1) */
  downSum?: 0 | 1
  /** 디자인 적용 (0: 미적용, 1: 전체적용, 2: 테두리제외, 3: 미적용, 4: 헤더만) */
  sheetDesign?: 0 | 1 | 2 | 3 | 4
  /** 머지 적용 (0: 없음, 1: 적용(값유지), 2: 적용(값제거)) */
  merge?: 0 | 1 | 2
  /** 텍스트 줄바꿈 (기본: 1) */
  wordWrap?: 0 | 1
  /** 다운로드 행 범위 ('Visible': 보이는 행만) */
  downRows?: string
  /** 다운로드 열 범위 ('Visible': 보이는 열만) */
  downCols?: string
  /** 숨김 컬럼 엑셀 '열 숨기기'로 포함 */
  hiddenColumn?: 0 | 1
  /** 엑셀 필터 활성화 */
  enableFilter?: 0 | 1
  /** 엑셀 글꼴 크기 */
  excelFontSize?: number
  /** 엑셀 행 높이 (-1: 자동조정) */
  excelRowHeight?: number
  /** 틀고정 (1: 헤더, 2: 헤드영역, 4: 좌측고정컬럼, 비트 조합 가능) */
  freezePane?: number
  /** Enum 다운로드 포맷 ('TEXT': 표시값, 'CODE': 코드값) */
  downCombo?: 'TEXT' | 'CODE'
  /** 엑셀 파일 비밀번호 (xlsx only) */
  workbookPassword?: string
  /** 페이지 설정 */
  excelPage?: {
    orientation?: 'landscape' | 'portrait'
    paperSize?: string
    marginLeft?: number
    marginRight?: number
    marginTop?: number
    marginBottom?: number
    fitToWidth?: number
    fitToHeight?: number
  }
  /** IBSheet8 추가 옵션 */
  [key: string]: unknown
}

/** 멀티시트 내보내기 항목 */
export interface MultiSheetItem {
  /** IBSheet8 인스턴스 참조 */
  sheetRef: React.MutableRefObject<IBSheetInstance | null>
  /** 시트명 */
  sheetName: string
  /** 시트별 추가 옵션 */
  options?: Omit<ExportToExcelOptions, 'fileName'>
}

/** 엑셀 Import 옵션 (SheetJS) */
export interface ImportFromExcelOptions {
  /** 읽을 시트 이름 (기본: 첫 번째 시트) */
  sheetName?: string
  /** 읽을 시트 인덱스 (기본: 0) */
  sheetIndex?: number
  /** 헤더 행 번호 (기본: 1 — 1행이 헤더) */
  headerRow?: number
  /** 데이터 시작 행 (기본: 헤더+1) */
  startRow?: number
  /** 컬럼 매핑: 엑셀 헤더 → 데이터 키 */
  columnMapping?: Record<string, string>
  /** 빈 행 건너뛰기 (기본: true) */
  skipEmptyRows?: boolean
  /** 숫자 원본값 유지 (기본: true) */
  rawNumbers?: boolean
}

/** IBSheet8 Grid로 직접 로드 옵션 */
export interface ImportToGridOptions {
  /** 로드 모드 (기본: 'HeaderMatch') */
  mode?: 'HeaderMatch' | 'NoHeader' | 'HeaderSkip'
  /** 데이터 시작 행 (기본: 1) */
  startRow?: number
  /** 시작 컬럼 (기본: 1) */
  startCol?: number
  /** 기존 데이터에 추가 (기본: 0) */
  append?: 0 | 1
  /** 시트명 */
  workSheetName?: string
  /** 컬럼 매핑 ('5|4|3|2|1') */
  columnMapping?: string
  /** 허용 확장자 (기본: 'xls|xlsx') */
  fileExt?: string
  /** 최대 파일 크기 (MB) */
  maxFileSize?: number
}

/** NxDataset으로 로드 옵션 */
export interface ImportToDatasetOptions extends ImportFromExcelOptions {
  /** 기존 데이터 삭제 후 로드 (기본: true) */
  clearBefore?: boolean
}

/** CSV 내보내기 옵션 */
export interface ExportToCsvOptions {
  /** 파일명 (기본: 날짜_CsvExport.csv) */
  fileName?: string
  /** 구분자 (기본: ',') */
  separator?: string
  /** 문자열 따옴표 감싸기 (기본: true) */
  wrapQuote?: boolean
  /** 인코딩 (기본: 'utf-8') */
  encoding?: string
  /** 헤더 포함 여부 (기본: true) */
  includeHeader?: boolean
  /** BOM 추가 (기본: true — 한글 깨짐 방지) */
  bom?: boolean
}

/** CSV 가져오기 옵션 */
export interface ImportFromCsvOptions {
  /** 구분자 (기본: ',') */
  separator?: string
  /** 인코딩 (기본: 'utf-8') */
  encoding?: string
  /** 헤더 행 존재 여부 (기본: true) */
  hasHeader?: boolean
  /** 컬럼 매핑: CSV 헤더 → 데이터 키 */
  columnMapping?: Record<string, string>
  /** 빈 행 건너뛰기 (기본: true) */
  skipEmptyRows?: boolean
}

/** useExcel 반환 타입 */
export interface UseExcelReturn {
  /** IBSheet8 그리드 → 엑셀 내보내기 */
  exportToExcel: (
    sheetRef: React.MutableRefObject<IBSheetInstance | null>,
    options?: ExportToExcelOptions,
  ) => void
  /** 멀티시트 내보내기 */
  exportMultiSheet: (fileName: string, sheets: MultiSheetItem[]) => void
  /** 엑셀 파일 → 데이터 배열 파싱 (SheetJS) */
  importFromExcel: (
    file: File,
    options?: ImportFromExcelOptions,
  ) => Promise<Record<string, unknown>[]>
  /** 엑셀 → IBSheet8 그리드 직접 로드 */
  importToGrid: (
    file: File,
    sheetRef: React.MutableRefObject<IBSheetInstance | null>,
    options?: ImportToGridOptions,
  ) => void
  /** 엑셀 → NxDataset 로드 */
  importToDataset: (
    file: File,
    dataset: NxDataset,
    options?: ImportToDatasetOptions,
  ) => Promise<void>
  /** CSV 내보내기 */
  exportToCsv: (data: Record<string, unknown>[], options?: ExportToCsvOptions) => void
  /** CSV 가져오기 */
  importFromCsv: (file: File, options?: ImportFromCsvOptions) => Promise<Record<string, unknown>[]>
  /** 서버 엑셀 다운로드 (Axios blob) */
  downloadServerExcel: (
    url: string,
    params?: Record<string, unknown>,
    fileName?: string,
  ) => Promise<void>
  /** 파일명 유효성 검사 (특수문자 제거) */
  validateFileName: (name: string) => string
  /** 시트명 유효성 검사 (특수문자 제거) */
  validateSheetName: (name: string) => string
  /** Export 진행 상태 */
  isExporting: boolean
  /** Import 진행 상태 */
  isImporting: boolean
}

// =============================================================================
// 내부 유틸리티
// =============================================================================

/** 최대 업로드 크기: 200MB (원본 MAX_UPLOAD_SIZE 대응) */
const MAX_UPLOAD_SIZE = 200 * 1024 * 1024

/**
 * 파일명 특수문자 제거 — Excel.xjs gfn_validateFileNameForExcel 대응.
 * {}/?;:|*~`!^+<>@#$%&\='" → '_', 공백 → '_'
 */
function sanitizeName(name: string): string {
  const cleaned = name.replace(/[{}/?;:|*~`!^+<>@#$%&\\='"]/g, '_')
  return cleaned.replace(/ /g, '_')
}

/**
 * 파일명에 확장자가 없으면 기본 확장자 추가 — gfn_validExcelFileExtention 대응.
 */
function ensureExtension(fileName: string, ext: string): string {
  const lastDot = fileName.lastIndexOf('.')
  if (lastDot > 0) {
    const currentExt = fileName.slice(lastDot + 1).toLowerCase()
    if (currentExt === ext.toLowerCase()) return fileName
  }
  return `${fileName}.${ext}`
}

/** 기본 파일명 생성 (날짜 기반) — gfn_getDate 대응 */
function defaultFileName(ext = 'xlsx'): string {
  const now = new Date()
  const date = now.toISOString().slice(0, 10).replace(/-/g, '')
  return `${date}_ExcelExport.${ext}`
}

/** Blob을 브라우저에서 다운로드 */
function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  document.body.appendChild(anchor)
  anchor.click()
  // cleanup
  setTimeout(() => {
    document.body.removeChild(anchor)
    URL.revokeObjectURL(url)
  }, 100)
}

/**
 * 파일 크기 검증 — gfn_validationFileMaxSize 대응.
 */
function validateFileSize(file: File): boolean {
  if (file.size > MAX_UPLOAD_SIZE) {
    console.error(
      `[useExcel] 파일 용량(${(file.size / 1024 / 1024).toFixed(1)}MB)이 ` +
        `허용치(${MAX_UPLOAD_SIZE / 1024 / 1024}MB)를 초과합니다.`,
    )
    return false
  }
  return true
}

// =============================================================================
// useExcel Hook
// =============================================================================

/**
 * 엑셀 Import/Export 통합 훅.
 *
 * Excel.xjs(77함수) + ExtExcelCommon.xjs(34함수)를 하나의 React Hook으로 통합.
 *
 * - **IBSheet8 Export**: IBSheet8 자체 `exportData` / `exportDataBuffer` API 활용
 * - **SheetJS Import**: 엑셀 파일 파싱 → 데이터 배열 / NxDataset / IBSheet8 Grid 로드
 * - **서버 Export**: Axios blob 다운로드
 * - **CSV**: 브라우저 기반 CSV 내보내기/가져오기
 * - **DLL 기반 함수**: 웹 환경 미지원 → SKIP
 *
 * @example
 * ```tsx
 * function MyPage() {
 *   const { sheetRef } = useIBSheet({ id: 'sheet1' })
 *   const { exportToExcel, importFromExcel, isExporting, isImporting } = useExcel()
 *
 *   const handleExport = () => {
 *     exportToExcel(sheetRef, { fileName: '검사목록', sheetName: '검사' })
 *   }
 *
 *   const handleImport = async (file: File) => {
 *     const rows = await importFromExcel(file, { headerRow: 1 })
 *     console.log(rows)
 *   }
 *
 *   return (
 *     <div>
 *       <button onClick={handleExport} disabled={isExporting}>엑셀 다운로드</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useExcel(): UseExcelReturn {
  const [isExporting, setIsExporting] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const exportBufferRef = useRef(false)

  // ---------------------------------------------------------------------------
  // 파일명/시트명 유효성 검사
  // ---------------------------------------------------------------------------

  /**
   * 파일명 유효성 검사 — Excel.xjs gfn_validateFileNameForExcel 대응.
   */
  const validateFileName = useCallback((name: string): string => {
    return sanitizeName(name)
  }, [])

  /**
   * 시트명 유효성 검사 — Excel.xjs gfn_validateSheetNameForExcel 대응.
   * 시트명이 30자 초과 시 기본값 반환.
   */
  const validateSheetName = useCallback((name: string): string => {
    const cleaned = sanitizeName(name)
    return cleaned.length > 30 ? 'Sheet1' : cleaned
  }, [])

  // ---------------------------------------------------------------------------
  // IBSheet8 그리드 → 엑셀 내보내기
  // ---------------------------------------------------------------------------

  /**
   * 단일 IBSheet8 그리드 → 엑셀 내보내기.
   *
   * Excel.xjs gfn_excelExport / gfn_excelExportN / gfn_excelExportAs 대응.
   * IBSheet8의 클라이언트 기반 `exportData()` API를 직접 사용한다.
   *
   * @param sheetRef - useIBSheet에서 반환된 sheetRef
   * @param options - 내보내기 옵션
   */
  const exportToExcel = useCallback(
    (
      sheetRef: React.MutableRefObject<IBSheetInstance | null>,
      options: ExportToExcelOptions = {},
    ) => {
      const sheet = sheetRef.current
      if (!sheet) {
        console.warn('[useExcel] exportToExcel: IBSheet 인스턴스가 없습니다.')
        return
      }

      setIsExporting(true)

      try {
        const { fileName: rawFileName, sheetName: rawSheetName, ...restOptions } = options

        const fileName = ensureExtension(validateFileName(rawFileName ?? defaultFileName()), 'xlsx')
        const sheetName = validateSheetName(rawSheetName ?? 'Sheet1')

        sheet.exportData({
          fileName,
          sheetName,
          downRows: 'Visible',
          downCols: 'Visible',
          sheetDesign: 1,
          ...restOptions,
        })
      } catch (err) {
        console.error('[useExcel] exportToExcel 오류:', err)
      } finally {
        setIsExporting(false)
      }
    },
    [validateFileName, validateSheetName],
  )

  // ---------------------------------------------------------------------------
  // 멀티시트 내보내기
  // ---------------------------------------------------------------------------

  /**
   * 여러 IBSheet8 그리드를 하나의 엑셀 파일(멀티시트)로 내보내기.
   *
   * Excel.xjs gfn_excelExportMulti / gfn_excelExportMultiN 대응.
   * IBSheet8의 `exportDataBuffer()` API를 사용한다.
   *
   * @param fileName - 최종 파일명
   * @param sheets - 시트 목록 배열
   */
  const exportMultiSheet = useCallback(
    (fileName: string, sheets: MultiSheetItem[]) => {
      if (!sheets.length) {
        console.warn('[useExcel] exportMultiSheet: 시트 목록이 비어 있습니다.')
        return
      }

      const firstSheet = sheets[0]!.sheetRef.current
      if (!firstSheet) {
        console.warn('[useExcel] exportMultiSheet: 첫 번째 IBSheet 인스턴스가 없습니다.')
        return
      }

      setIsExporting(true)

      try {
        const name = ensureExtension(validateFileName(fileName || defaultFileName()), 'xlsx')

        // 버퍼 모드 시작
        if (typeof firstSheet.exportDataBuffer === 'function') {
          firstSheet.exportDataBuffer(true)
          exportBufferRef.current = true
        }

        for (let i = 0; i < sheets.length; i++) {
          const item = sheets[i]!
          const sheet = item.sheetRef.current
          if (!sheet) continue

          const sheetName = validateSheetName(item.sheetName || `Sheet${i + 1}`)

          sheet.exportData({
            fileName: name,
            sheetName,
            downRows: 'Visible',
            downCols: 'Visible',
            sheetDesign: 1,
            ...item.options,
          })
        }

        // 버퍼 모드 종료 → 다운로드 실행
        if (exportBufferRef.current && typeof firstSheet.exportDataBuffer === 'function') {
          firstSheet.exportDataBuffer(false)
          exportBufferRef.current = false
        }
      } catch (err) {
        console.error('[useExcel] exportMultiSheet 오류:', err)
        exportBufferRef.current = false
      } finally {
        setIsExporting(false)
      }
    },
    [validateFileName, validateSheetName],
  )

  // ---------------------------------------------------------------------------
  // 엑셀 파일 → 데이터 배열 파싱 (SheetJS)
  // ---------------------------------------------------------------------------

  /**
   * 엑셀 파일을 파싱하여 JSON 데이터 배열로 반환.
   *
   * Excel.xjs gfn_excelImport / gfn_excelImportAll 대응.
   * 브라우저에서 SheetJS(xlsx)로 직접 파싱한다.
   *
   * @param file - 엑셀 File 객체
   * @param options - 파싱 옵션
   * @returns 파싱된 데이터 행 배열
   */
  const importFromExcel = useCallback(
    async (
      file: File,
      options: ImportFromExcelOptions = {},
    ): Promise<Record<string, unknown>[]> => {
      if (!validateFileSize(file)) return []

      setIsImporting(true)

      try {
        const XLSX = await import('xlsx')

        const buffer = await file.arrayBuffer()
        const workbook = XLSX.read(buffer, {
          type: 'array',
          raw: options.rawNumbers ?? true,
        })

        // 시트 선택
        let sheetName: string
        if (options.sheetName) {
          sheetName = options.sheetName
        } else {
          const idx = options.sheetIndex ?? 0
          sheetName = workbook.SheetNames[idx] ?? workbook.SheetNames[0]!
        }

        const worksheet = workbook.Sheets[sheetName]
        if (!worksheet) {
          console.warn(`[useExcel] importFromExcel: 시트 "${sheetName}"을 찾을 수 없습니다.`)
          return []
        }

        // 시트 → JSON 변환
        const headerRow = options.headerRow ?? 1
        const range = XLSX.utils.decode_range(worksheet['!ref'] ?? 'A1')
        range.s.r = headerRow - 1 // 헤더 행부터 읽기 시작

        const rawData: Record<string, unknown>[] = XLSX.utils.sheet_to_json(worksheet, {
          range,
          defval: '',
          raw: options.rawNumbers ?? true,
        })

        // 빈 행 필터링
        const skipEmpty = options.skipEmptyRows ?? true
        let data = rawData
        if (skipEmpty) {
          data = rawData.filter((row) =>
            Object.values(row).some((v) => v !== '' && v !== null && v !== undefined),
          )
        }

        // 데이터 시작 행 건너뛰기 (headerRow 이후 추가 스킵)
        if (options.startRow && options.startRow > headerRow + 1) {
          const skip = options.startRow - headerRow - 1
          data = data.slice(skip)
        }

        // 컬럼 매핑 적용
        if (options.columnMapping && Object.keys(options.columnMapping).length > 0) {
          const mapping = options.columnMapping
          data = data.map((row) => {
            const mapped: Record<string, unknown> = {}
            for (const [excelHeader, dataKey] of Object.entries(mapping)) {
              mapped[dataKey] = row[excelHeader] ?? ''
            }
            return mapped
          })
        }

        return data
      } catch (err) {
        console.error('[useExcel] importFromExcel 오류:', err)
        return []
      } finally {
        setIsImporting(false)
      }
    },
    [],
  )

  // ---------------------------------------------------------------------------
  // 엑셀 → IBSheet8 그리드 직접 로드
  // ---------------------------------------------------------------------------

  /**
   * 엑셀 파일을 IBSheet8 그리드에 직접 로드.
   *
   * Excel.xjs gfn_excelImportWithGrid 대응.
   * IBSheet8의 클라이언트 기반 `importData()` API를 사용한다.
   *
   * @param file - 엑셀 File 객체
   * @param sheetRef - useIBSheet에서 반환된 sheetRef
   * @param options - 로드 옵션
   */
  const importToGrid = useCallback(
    (
      file: File,
      sheetRef: React.MutableRefObject<IBSheetInstance | null>,
      options: ImportToGridOptions = {},
    ) => {
      const sheet = sheetRef.current
      if (!sheet) {
        console.warn('[useExcel] importToGrid: IBSheet 인스턴스가 없습니다.')
        return
      }

      if (!validateFileSize(file)) return

      setIsImporting(true)

      try {
        if (typeof sheet.importData === 'function') {
          sheet.importData({
            file,
            mode: options.mode ?? 'HeaderMatch',
            startRow: options.startRow,
            startCol: options.startCol,
            append: options.append ?? 0,
            workSheetName: options.workSheetName,
            columnMapping: options.columnMapping,
            fileExt: options.fileExt ?? 'xls|xlsx',
            maxFileSize: options.maxFileSize,
          })
        } else {
          console.warn('[useExcel] importToGrid: IBSheet8 importData 미지원')
        }
      } catch (err) {
        console.error('[useExcel] importToGrid 오류:', err)
      } finally {
        setIsImporting(false)
      }
    },
    [],
  )

  // ---------------------------------------------------------------------------
  // 엑셀 → NxDataset 로드
  // ---------------------------------------------------------------------------

  /**
   * 엑셀 파일을 NxDataset에 로드.
   *
   * Excel.xjs gfn_excelImport (Dataset 대상) 대응.
   * SheetJS로 파싱한 후 NxDataset의 loadData()로 데이터 주입.
   *
   * @param file - 엑셀 File 객체
   * @param dataset - 대상 NxDataset
   * @param options - 로드 옵션
   */
  const importToDataset = useCallback(
    async (file: File, dataset: NxDataset, options: ImportToDatasetOptions = {}): Promise<void> => {
      const data = await importFromExcel(file, options)
      if (data.length === 0) return

      const clearBefore = options.clearBefore ?? true
      if (clearBefore) {
        dataset.clearData()
      }

      // useclientlayout이면 컬럼 자동 생성은 NxDataset.loadData에서 처리
      dataset.loadData(data)
    },
    [importFromExcel],
  )

  // ---------------------------------------------------------------------------
  // CSV 내보내기
  // ---------------------------------------------------------------------------

  /**
   * 데이터 배열을 CSV 파일로 내보내기.
   *
   * Excel.xjs gfn_csvExport / gfn_csvExportAs / gfn_getCSVContents /
   * gfn_getDatasetCSVContents 대응.
   *
   * @param data - 내보낼 데이터 배열
   * @param options - CSV 옵션
   */
  const exportToCsv = useCallback(
    (data: Record<string, unknown>[], options: ExportToCsvOptions = {}) => {
      if (!data.length) {
        console.warn('[useExcel] exportToCsv: 내보낼 데이터가 없습니다.')
        return
      }

      setIsExporting(true)

      try {
        const separator = options.separator ?? ','
        const wrapQuote = options.wrapQuote ?? true
        const includeHeader = options.includeHeader ?? true
        const bom = options.bom ?? true

        const wrap = (val: unknown): string => {
          const str = String(val ?? '')
          if (!wrapQuote) return str
          // 구분자, 줄바꿈, 따옴표가 포함되면 따옴표로 감싸기
          if (str.includes(separator) || str.includes('\n') || str.includes('"')) {
            return `"${str.replace(/"/g, '""')}"`
          }
          return `"${str}"`
        }

        const lines: string[] = []

        // 헤더
        const keys = Object.keys(data[0]!)
        if (includeHeader) {
          lines.push(keys.map(wrap).join(separator))
        }

        // 데이터 행
        for (const row of data) {
          const values = keys.map((key) => wrap(row[key]))
          lines.push(values.join(separator))
        }

        const csvContent = lines.join('\r\n')
        const prefix = bom ? '\uFEFF' : ''
        const blob = new Blob([prefix + csvContent], {
          type: `text/csv;charset=${options.encoding ?? 'utf-8'}`,
        })

        const fileName = ensureExtension(
          validateFileName(options.fileName ?? defaultFileName('csv')),
          'csv',
        )

        downloadBlob(blob, fileName)
      } catch (err) {
        console.error('[useExcel] exportToCsv 오류:', err)
      } finally {
        setIsExporting(false)
      }
    },
    [validateFileName],
  )

  // ---------------------------------------------------------------------------
  // CSV 가져오기
  // ---------------------------------------------------------------------------

  /**
   * CSV 파일을 파싱하여 데이터 배열로 반환.
   *
   * @param file - CSV File 객체
   * @param options - CSV 파싱 옵션
   * @returns 파싱된 데이터 행 배열
   */
  const importFromCsv = useCallback(
    async (file: File, options: ImportFromCsvOptions = {}): Promise<Record<string, unknown>[]> => {
      if (!validateFileSize(file)) return []

      setIsImporting(true)

      try {
        const text = await file.text()

        // BOM 제거
        const content = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text

        const separator = options.separator ?? ','
        const hasHeader = options.hasHeader ?? true
        const skipEmpty = options.skipEmptyRows ?? true

        // 줄 분리 (CRLF, LF, CR 모두 지원)
        const rawLines = content.split(/\r\n|\n|\r/)

        // 따옴표 내 구분자/줄바꿈 처리를 위한 파싱
        const parseLine = (line: string): string[] => {
          const cells: string[] = []
          let current = ''
          let inQuotes = false

          for (let i = 0; i < line.length; i++) {
            const ch = line[i]!

            if (inQuotes) {
              if (ch === '"') {
                // 이스케이프된 따옴표 확인
                if (i + 1 < line.length && line[i + 1] === '"') {
                  current += '"'
                  i++
                } else {
                  inQuotes = false
                }
              } else {
                current += ch
              }
            } else {
              if (ch === '"') {
                inQuotes = true
              } else if (ch === separator) {
                cells.push(current)
                current = ''
              } else {
                current += ch
              }
            }
          }
          cells.push(current)
          return cells
        }

        const lines = rawLines.filter((line) => !skipEmpty || line.trim().length > 0)
        if (lines.length === 0) return []

        let headers: string[]
        let dataStartIndex: number

        if (hasHeader) {
          headers = parseLine(lines[0]!)
          dataStartIndex = 1
        } else {
          // 헤더가 없으면 Column0, Column1, ... 생성
          const firstLine = parseLine(lines[0]!)
          headers = firstLine.map((_, i) => `Column${i}`)
          dataStartIndex = 0
        }

        const results: Record<string, unknown>[] = []

        for (let i = dataStartIndex; i < lines.length; i++) {
          const cells = parseLine(lines[i]!)
          const row: Record<string, unknown> = {}

          for (let j = 0; j < headers.length; j++) {
            row[headers[j]!] = cells[j] ?? ''
          }

          results.push(row)
        }

        // 컬럼 매핑 적용
        if (options.columnMapping && Object.keys(options.columnMapping).length > 0) {
          const mapping = options.columnMapping
          return results.map((row) => {
            const mapped: Record<string, unknown> = {}
            for (const [csvHeader, dataKey] of Object.entries(mapping)) {
              mapped[dataKey] = row[csvHeader] ?? ''
            }
            return mapped
          })
        }

        return results
      } catch (err) {
        console.error('[useExcel] importFromCsv 오류:', err)
        return []
      } finally {
        setIsImporting(false)
      }
    },
    [],
  )

  // ---------------------------------------------------------------------------
  // 서버 엑셀 다운로드
  // ---------------------------------------------------------------------------

  /**
   * 서버에서 생성된 엑셀 파일을 다운로드.
   *
   * Excel.xjs gfn_excelExportTransfer 대응.
   * Axios를 사용하여 blob으로 수신 후 브라우저에서 다운로드 트리거.
   *
   * @param url - API URL (서비스 그룹::경로 형식 또는 전체 URL)
   * @param params - 요청 파라미터
   * @param fileName - 다운로드 파일명
   */
  const downloadServerExcel = useCallback(
    async (url: string, params?: Record<string, unknown>, fileName?: string): Promise<void> => {
      setIsExporting(true)

      try {
        const response = await apiClient.post(url, params, {
          responseType: 'blob',
        })

        const blob = response.data as Blob

        // 서버 Content-Disposition 헤더에서 파일명 추출 시도
        let resolvedFileName = fileName
        if (!resolvedFileName) {
          const disposition = response.headers['content-disposition']
          if (disposition) {
            const match = /filename\*?=(?:UTF-8'')?([^;\s]+)/i.exec(disposition)
            if (match?.[1]) {
              resolvedFileName = decodeURIComponent(match[1])
            }
          }
        }

        resolvedFileName = ensureExtension(
          validateFileName(resolvedFileName ?? defaultFileName()),
          'xlsx',
        )

        downloadBlob(blob, resolvedFileName)
      } catch (err) {
        console.error('[useExcel] downloadServerExcel 오류:', err)
        throw err
      } finally {
        setIsExporting(false)
      }
    },
    [validateFileName],
  )

  // ---------------------------------------------------------------------------
  // 반환
  // ---------------------------------------------------------------------------

  return {
    exportToExcel,
    exportMultiSheet,
    importFromExcel,
    importToGrid,
    importToDataset,
    exportToCsv,
    importFromCsv,
    downloadServerExcel,
    validateFileName,
    validateSheetName,
    isExporting,
    isImporting,
  }
}
