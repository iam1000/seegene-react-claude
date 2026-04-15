import { type RefObject, useCallback, useRef } from 'react'
import type {
  BarcodePrintOptions,
  LabelPrintOptions,
  PrinterInfo,
  PrinterProtocol,
  PrinterStatusCode,
  RFIDSetupOptions,
  RFIDVerifyOptions,
  RFIDWriteOptions,
  SnooperMode,
  TSCBatteryStatusType,
  WebPrintOptions,
} from '#/types/print'

// =============================================================================
// usePrint — ExtPrintCommon.xjs 전환 훅
//
// 원본: cmmlib/ExtPrintCommon.xjs (1,602줄, 72함수)
//
// 분류:
//   [웹 인쇄]       — react-to-print / window.print 기반, 완전 구현
//   [프린터 프로토콜] — T6000, TSC, Zebra, SEDAS, SlideMarking
//                     인터페이스만 정의, 로컬 에이전트 연동 시 구현 예정
//   [SKIP]          — Nexacro DLL 로딩/언로딩 (_getExtPrintCommon* 등)
// =============================================================================

// -----------------------------------------------------------------------------
// 로컬 에이전트 연동 에러 (공통)
// -----------------------------------------------------------------------------

const AGENT_NOT_READY_MSG = '프린터 에이전트 연동 필요'

function throwAgentRequired(protocol: PrinterProtocol, functionName: string): never {
  // TODO: 로컬 에이전트 API로 전환 (2026년 7~8월)
  throw new Error(`[${protocol}] ${functionName}: ${AGENT_NOT_READY_MSG}`)
}

// -----------------------------------------------------------------------------
// 웹 인쇄 유틸
// -----------------------------------------------------------------------------

/**
 * react-to-print 기반으로 HTML 엘리먼트를 인쇄한다.
 *
 * react-to-print v3+ 는 `useReactToPrint` 훅을 제공하지만,
 * 이 프로젝트에서는 react-to-print 설치 전에도 fallback으로
 * window.print()를 사용할 수 있도록 설계한다.
 */
async function printElementFn(
  element: HTMLElement | null,
  options: WebPrintOptions = {},
): Promise<void> {
  if (!element) {
    console.warn('[usePrint.printElement] 인쇄 대상 엘리먼트가 없습니다.')
    return
  }

  const { documentTitle, onBeforePrint, onAfterPrint, onPrintError, pageStyle } = options

  try {
    // react-to-print 동적 로딩 시도
    try {
      const reactToPrint = await import('react-to-print')

      // react-to-print v3 — generatePrintContent 콜백 방식
      if (typeof reactToPrint.useReactToPrint === 'function') {
        // useReactToPrint는 훅이므로 직접 호출 불가 → fallback 사용
        // generatePrint 유틸이 있다면 사용, 없으면 아래 fallback
      }
    } catch {
      // react-to-print 미설치 → fallback
    }

    // Fallback: window.print 기반 인쇄
    if (onBeforePrint) {
      await onBeforePrint()
    }

    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      throw new Error('팝업 차단으로 인쇄 창을 열 수 없습니다.')
    }

    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((el) => el.outerHTML)
      .join('\n')

    const customPageStyle = pageStyle ? `<style>${pageStyle}</style>` : ''

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${documentTitle ?? document.title}</title>
          ${styles}
          ${customPageStyle}
          <style>
            @media print {
              body { margin: 0; padding: 0; }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `)
    printWindow.document.close()

    // 이미지 등 리소스 로딩 대기
    await new Promise<void>((resolve) => {
      printWindow.onload = () => resolve()
      // onload가 실행되지 않는 경우를 위한 타임아웃
      setTimeout(resolve, 1000)
    })

    printWindow.focus()
    printWindow.print()
    printWindow.close()

    if (onAfterPrint) {
      onAfterPrint()
    }
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    if (onPrintError) {
      onPrintError('printElement', err)
    } else {
      console.error('[usePrint.printElement] 인쇄 오류:', err)
    }
  }
}

/**
 * 현재 페이지 전체를 인쇄한다. (window.print 래퍼)
 */
function printCurrentPage(options: WebPrintOptions = {}): void {
  const { onBeforePrint, onAfterPrint, onPrintError } = options

  try {
    if (onBeforePrint) {
      // 동기적으로 처리 (window.print은 동기)
      const result = onBeforePrint()
      if (result instanceof Promise) {
        result.then(() => {
          window.print()
          onAfterPrint?.()
        })
        return
      }
    }

    window.print()
    onAfterPrint?.()
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    if (onPrintError) {
      onPrintError('printCurrentPage', err)
    } else {
      console.error('[usePrint.printCurrentPage] 인쇄 오류:', err)
    }
  }
}

// =============================================================================
// T6000 (Printronix) 프로토콜 인터페이스
// 원본: gfn_printOpen ~ gfn_sendcommand (27함수)
// =============================================================================

/** T6000 프린터 인터페이스 */
export interface T6000PrinterInterface {
  /** 프린터 열기 — 원본 gfn_printOpen */
  open(): number
  /** 프린터 닫기 — 원본 gfn_printClose */
  close(): number
  /** 스케일 설정 — 원본 gfn_scale */
  scale(horizontalDpi: number, verticalDpi: number): number
  /** 잡 설정 — 원본 gfn_jobSetup */
  jobSetup(mode: number, value: number): number
  /** 폼 생성 — 원본 gfn_createForm */
  createForm(formName: string): number
  /** ASCII 텍스트 배치 — 원본 gfn_printTextEng */
  printTextEng(
    formIndex: number,
    sr: number,
    sc: number,
    ve: number,
    he: number,
    data: string,
  ): number
  /** 중국어 텍스트 배치 — 원본 gfn_printTextCH */
  printTextCH(
    formIndex: number,
    sr: number,
    sc: number,
    ve: number,
    he: number,
    data: string,
  ): number
  /** 바코드 설정 — 원본 gfn_setBarcode */
  setBarcode(barcodeType: number, mode: number, value: string): number
  /** 바코드 배치 — 원본 gfn_printBarcode */
  printBarcode(formIndex: number, barcodeType: number, sr: number, sc: number, data: string): number
  /** 폼 출력 — 원본 gfn_printForm */
  printForm(formIndex: number): string
  /** 폼 데이터 조회 — 원본 gfn_getFormData */
  getFormData(formIndex: number): string
  /** 양식 파라미터 설정 — 원본 gfn_formSetup */
  formSetup(mode: number, value: number): number
  /** Snooper 활성화/비활성화 — 원본 gfn_setupStatus */
  setupStatus(mode: SnooperMode): number
  /** PGL 상태 조회 — 원본 gfn_getStatus */
  getStatus(): string
  /** 상자 그리기 — 원본 gfn_drawBox */
  drawBox(
    formIndex: number,
    thickness: number,
    sr: number,
    sc: number,
    er: number,
    ec: number,
  ): number
  /** 선 그리기 — 원본 gfn_drawLine */
  drawLine(
    formIndex: number,
    thickness: number,
    sr: number,
    sc: number,
    er: number,
    ec: number,
  ): number
  /** DLL 버전 — 원본 gfn_getDllVersion */
  getDllVersion(): string
  /** 로고 이미지 배치 — 원본 gfn_printImage */
  printImage(formIndex: number, sr: number, sc: number, logoName: string): number
  /** RFID 설정 — 원본 gfn_setupRFID */
  setupRFID(options: RFIDSetupOptions): number
  /** RFID 쓰기 — 원본 gfn_writeRFID */
  writeRFID(formIndex: number, options: RFIDWriteOptions): number
  /** RFID 검증 — 원본 gfn_verifyRFID */
  verifyRFID(formIndex: number, options: RFIDVerifyOptions): number
  /** 폰트 설정 — 원본 gfn_fontSetup */
  fontSetup(mode: number, value: string): number
  /** 데이터 읽기 — 원본 gfn_read */
  read(endSymbol: string): string
  /** PGL 명령 전송 — 원본 gfn_sendcommand */
  sendCommand(printerCommand: string): number
}

function createT6000Interface(): T6000PrinterInterface {
  return {
    open: () => throwAgentRequired('T6000', 'open'),
    close: () => throwAgentRequired('T6000', 'close'),
    scale: () => throwAgentRequired('T6000', 'scale'),
    jobSetup: () => throwAgentRequired('T6000', 'jobSetup'),
    createForm: () => throwAgentRequired('T6000', 'createForm'),
    printTextEng: () => throwAgentRequired('T6000', 'printTextEng'),
    printTextCH: () => throwAgentRequired('T6000', 'printTextCH'),
    setBarcode: () => throwAgentRequired('T6000', 'setBarcode'),
    printBarcode: () => throwAgentRequired('T6000', 'printBarcode'),
    printForm: () => throwAgentRequired('T6000', 'printForm'),
    getFormData: () => throwAgentRequired('T6000', 'getFormData'),
    formSetup: () => throwAgentRequired('T6000', 'formSetup'),
    setupStatus: () => throwAgentRequired('T6000', 'setupStatus'),
    getStatus: () => throwAgentRequired('T6000', 'getStatus'),
    drawBox: () => throwAgentRequired('T6000', 'drawBox'),
    drawLine: () => throwAgentRequired('T6000', 'drawLine'),
    getDllVersion: () => throwAgentRequired('T6000', 'getDllVersion'),
    printImage: () => throwAgentRequired('T6000', 'printImage'),
    setupRFID: () => throwAgentRequired('T6000', 'setupRFID'),
    writeRFID: () => throwAgentRequired('T6000', 'writeRFID'),
    verifyRFID: () => throwAgentRequired('T6000', 'verifyRFID'),
    fontSetup: () => throwAgentRequired('T6000', 'fontSetup'),
    read: () => throwAgentRequired('T6000', 'read'),
    sendCommand: () => throwAgentRequired('T6000', 'sendCommand'),
  }
}

// =============================================================================
// TSC 프로토콜 인터페이스
// 원본: gfn_printOpenTSC ~ gfn_SMBStatusTSC (18함수)
// =============================================================================

/** TSC 프린터 인터페이스 */
export interface TSCPrinterInterface {
  /** 프린터 열기 — 원본 gfn_printOpenTSC */
  open(): number
  /** 프린터 닫기 — 원본 gfn_printCloseTSC */
  close(): number
  /** 버퍼 클리어 — 원본 gfn_clearbufferTSC */
  clearBuffer(): number
  /** 프린터 설정 — 원본 gfn_setupTSC */
  setup(
    width: string,
    height: string,
    speed: string,
    density: string,
    sensor: string,
    vertical: string,
    offset: string,
  ): number
  /** 다음 페이지 이동 — 원본 gfn_formfeedTSC */
  formFeed(): number
  /** 백피드 비활성화 — 원본 gfn_nobackfeedTSC */
  noBackFeed(): number
  /** 바코드 인쇄 — 원본 gfn_barcodeTSC */
  barcode(
    x: string,
    y: string,
    type: string,
    height: string,
    readable: string,
    rotation: string,
    narrow: string,
    wide: string,
    code: string,
  ): number
  /** PCX 다운로드 — 원본 gfn_downloadpcxTSC */
  downloadPcx(filename: string, imageName: string): number
  /** 내장 폰트 인쇄 — 원본 gfn_printerfontTSC */
  printerFont(
    x: string,
    y: string,
    fontType: string,
    rotation: string,
    xMul: string,
    yMul: string,
    text: string,
  ): number
  /** 라벨 인쇄 — 원본 gfn_printlabelTSC */
  printLabel(sets: string, copies: string): number
  /** TSPL 명령 전송 — 원본 gfn_sendcommandTSC */
  sendCommand(printerCommand: string): number
  /** 바이너리 전송 — 원본 gfn_sendBinaryDataTSC */
  sendBinaryData(binary: string): number
  /** Windows 폰트 인쇄 — 원본 gfn_windowsfontTSC */
  windowsFont(
    x: number,
    y: number,
    fontHeight: number,
    rotation: number,
    fontStyle: number,
    fontUnderline: number,
    faceName: string,
    content: string,
  ): number
  /** Windows 폰트 Unicode 인쇄 — 원본 gfn_windowsfontUnicodeTSC */
  windowsFontUnicode(
    x: number,
    y: number,
    fontHeight: number,
    rotation: number,
    fontStyle: number,
    fontUnderline: number,
    faceName: string,
    content: string,
  ): number
  /** USB 프린터 상태 — 원본 gfn_usbportqueryprinterTSC */
  usbPortQueryPrinter(): string
  /** USB 프린터 시리얼 — 원본 gfn_usbprinterserialTSC */
  usbPrinterSerial(): string
  /** USB 프린터 이름 — 원본 gfn_usbprinternameTSC */
  usbPrinterName(): string
  /** 스마트 배터리 상태 — 원본 gfn_SMBStatusTSC */
  smbStatus(type: TSCBatteryStatusType): number
}

function createTSCInterface(): TSCPrinterInterface {
  return {
    open: () => throwAgentRequired('TSC', 'open'),
    close: () => throwAgentRequired('TSC', 'close'),
    clearBuffer: () => throwAgentRequired('TSC', 'clearBuffer'),
    setup: () => throwAgentRequired('TSC', 'setup'),
    formFeed: () => throwAgentRequired('TSC', 'formFeed'),
    noBackFeed: () => throwAgentRequired('TSC', 'noBackFeed'),
    barcode: () => throwAgentRequired('TSC', 'barcode'),
    downloadPcx: () => throwAgentRequired('TSC', 'downloadPcx'),
    printerFont: () => throwAgentRequired('TSC', 'printerFont'),
    printLabel: () => throwAgentRequired('TSC', 'printLabel'),
    sendCommand: () => throwAgentRequired('TSC', 'sendCommand'),
    sendBinaryData: () => throwAgentRequired('TSC', 'sendBinaryData'),
    windowsFont: () => throwAgentRequired('TSC', 'windowsFont'),
    windowsFontUnicode: () => throwAgentRequired('TSC', 'windowsFontUnicode'),
    usbPortQueryPrinter: () => throwAgentRequired('TSC', 'usbPortQueryPrinter'),
    usbPrinterSerial: () => throwAgentRequired('TSC', 'usbPrinterSerial'),
    usbPrinterName: () => throwAgentRequired('TSC', 'usbPrinterName'),
    smbStatus: () => throwAgentRequired('TSC', 'smbStatus'),
  }
}

// =============================================================================
// Zebra 프로토콜 인터페이스
// 원본: gfn_printOpenZebra ~ gfn_setPrintData (10함수)
// =============================================================================

/** Zebra 프린터 인터페이스 */
export interface ZebraPrinterInterface {
  /** 프린터 열기 — 원본 gfn_printOpenZebra */
  open(): void
  /** 프린터 닫기 — 원본 gfn_printCloseZebra */
  close(): void
  /** 라이브러리 생성 — 원본 gfn_createLibZebra */
  createLib(): number
  /** 설치된 프린터 목록 (ZD 필터) — 원본 gfn_getPrintList */
  getPrintList(): string[]
  /** 프린터 설정 — 원본 gfn_setPrinter */
  setPrinter(printerName: string): void
  /** 프린터 이름 조회 — 원본 gfn_getPrinterName */
  getPrinterName(): string
  /** 피드 — 원본 gfn_setFeed */
  setFeed(): void
  /** 프린터 상태 — 원본 gfn_getPrintSatus */
  getPrintStatus(): PrinterStatusCode
  /** ZPL 명령 전송 — 원본 gfn_setPrintData */
  setPrintData(command: string): number
}

function createZebraInterface(): ZebraPrinterInterface {
  return {
    open: () => throwAgentRequired('Zebra', 'open'),
    close: () => throwAgentRequired('Zebra', 'close'),
    createLib: () => throwAgentRequired('Zebra', 'createLib'),
    getPrintList: () => throwAgentRequired('Zebra', 'getPrintList'),
    setPrinter: () => throwAgentRequired('Zebra', 'setPrinter'),
    getPrinterName: () => throwAgentRequired('Zebra', 'getPrinterName'),
    setFeed: () => throwAgentRequired('Zebra', 'setFeed'),
    getPrintStatus: () => throwAgentRequired('Zebra', 'getPrintStatus'),
    setPrintData: () => throwAgentRequired('Zebra', 'setPrintData'),
  }
}

// =============================================================================
// SEDAS 프로토콜 인터페이스
// 원본: gfn_printOpenSedas ~ gfn_doSedasPrint (3함수, 내부 3함수 제외)
// =============================================================================

/** SEDAS 프린터 인터페이스 */
export interface SEDASPrinterInterface {
  /** 프린터 열기 — 원본 gfn_printOpenSedas */
  open(): unknown
  /** 프린터 닫기 — 원본 gfn_printCloseSedas */
  close(): void
  /** 데이터 출력 — 원본 gfn_doSedasPrint */
  doPrint(data: string[]): number
}

function createSEDASInterface(): SEDASPrinterInterface {
  return {
    open: () => throwAgentRequired('SEDAS', 'open'),
    close: () => throwAgentRequired('SEDAS', 'close'),
    doPrint: () => throwAgentRequired('SEDAS', 'doPrint'),
  }
}

// =============================================================================
// SlideMarking 프로토콜 인터페이스
// 원본: gfn_printOpenSlideMarking ~ gfn_setPrintSlideMarking (5함수, 내부 3함수 제외)
// =============================================================================

/** SlideMarking 프린터 인터페이스 */
export interface SlideMarkingPrinterInterface {
  /** 프린터 열기 — 원본 gfn_printOpenSlideMarking */
  open(): unknown
  /** 프린터 닫기 — 원본 gfn_printCloseSlideMarking */
  close(): void
  /** DLL 버전 조회 — 원본 gfn_getVerSlideMarking */
  getVersion(): number
  /** 네트워크 초기화 (IP 설정, 포트 3000 고정) — 원본 gfn_netInitSlideMarking */
  netInit(ipAddress: string): boolean
  /** 마킹 데이터 전송 — 원본 gfn_setPrintSlideMarking */
  setPrint(
    year: string,
    no1: string,
    content: string,
    name: string,
    no2: string,
    foundation: string,
  ): boolean
}

function createSlideMarkingInterface(): SlideMarkingPrinterInterface {
  return {
    open: () => throwAgentRequired('SlideMarking', 'open'),
    close: () => throwAgentRequired('SlideMarking', 'close'),
    getVersion: () => throwAgentRequired('SlideMarking', 'getVersion'),
    netInit: () => throwAgentRequired('SlideMarking', 'netInit'),
    setPrint: () => throwAgentRequired('SlideMarking', 'setPrint'),
  }
}

// =============================================================================
// usePrint 훅
// =============================================================================

export interface UsePrintReturn {
  // --- 웹 인쇄 (완전 구현) ---

  /** HTML 엘리먼트를 인쇄한다 (react-to-print / window.print fallback) */
  printElement: (
    ref: RefObject<HTMLElement | null> | HTMLElement | null,
    options?: WebPrintOptions,
  ) => Promise<void>

  /** 현재 페이지를 인쇄한다 (window.print) */
  printPage: (options?: WebPrintOptions) => void

  // --- 라벨/바코드 인쇄 인터페이스 ---

  /** 라벨 인쇄 (프로토콜별 인터페이스) */
  printLabel: (options: LabelPrintOptions) => void

  /** 바코드 인쇄 (프로토콜별 인터페이스) */
  printBarcode: (options: BarcodePrintOptions) => void

  // --- 프린터 관리 ---

  /** PC에 설치된 프린터 목록 조회 — 원본 gfn_getPrinterList */
  getPrinterList: () => Promise<PrinterInfo[]>

  /** 레포트 프린터 조회 — 원본 gfn_getSelectedReportPrinter */
  getSelectedReportPrinter: () => string

  /** 프린터 선택 팝업 — 원본 gfn_showSelectPrinter */
  showSelectPrinter: () => Promise<string | null>

  // --- 프로토콜별 저수준 인터페이스 ---

  /** T6000 (Printronix) 프린터 인터페이스 */
  t6000: T6000PrinterInterface

  /** TSC 프린터 인터페이스 */
  tsc: TSCPrinterInterface

  /** Zebra 프린터 인터페이스 */
  zebra: ZebraPrinterInterface

  /** SEDAS 프린터 인터페이스 */
  sedas: SEDASPrinterInterface

  /** SlideMarking 프린터 인터페이스 */
  slideMarking: SlideMarkingPrinterInterface
}

/**
 * usePrint — 인쇄 기능 통합 훅
 *
 * ExtPrintCommon.xjs (72함수)를 React 훅으로 전환.
 *
 * - 웹 인쇄: react-to-print / window.print 기반 — 완전 구현
 * - 프린터 프로토콜 (T6000, TSC, Zebra, SEDAS, SlideMarking):
 *   타입과 인터페이스만 정의, 로컬 에이전트 연동 시 구현 예정 (2026년 7~8월)
 *
 * @example
 * // 웹 인쇄 (HTML 엘리먼트)
 * const printRef = useRef<HTMLDivElement>(null)
 * const { printElement, printPage } = usePrint()
 *
 * await printElement(printRef, { documentTitle: '검사 결과' })
 *
 * @example
 * // 프로토콜별 저수준 인터페이스 (향후 에이전트 연동)
 * const { t6000, tsc, zebra } = usePrint()
 *
 * // 현재 호출 시 '프린터 에이전트 연동 필요' 에러 발생
 * try { t6000.open() } catch (e) { console.log(e.message) }
 */
export function usePrint(): UsePrintReturn {
  // 레포트 프린터 이름 (전역 상태에서 가져올 수 있도록 ref로 관리)
  const reportPrinterRef = useRef<string>('')

  // --- 웹 인쇄 ---

  const printElement = useCallback(
    async (
      ref: RefObject<HTMLElement | null> | HTMLElement | null,
      options: WebPrintOptions = {},
    ) => {
      const element = ref && 'current' in ref ? ref.current : ref
      await printElementFn(element, options)
    },
    [],
  )

  const printPage = useCallback((options: WebPrintOptions = {}) => {
    printCurrentPage(options)
  }, [])

  // --- 라벨 인쇄 ---

  const printLabel = useCallback((options: LabelPrintOptions) => {
    switch (options.protocol) {
      case 'T6000':
        throwAgentRequired('T6000', 'printLabel')
        break
      case 'TSC':
        throwAgentRequired('TSC', 'printLabel')
        break
      case 'Zebra':
        throwAgentRequired('Zebra', 'printLabel')
        break
      case 'SEDAS':
        throwAgentRequired('SEDAS', 'printLabel')
        break
      case 'SlideMarking':
        throwAgentRequired('SlideMarking', 'printLabel')
        break
    }
  }, [])

  // --- 바코드 인쇄 ---

  const printBarcode = useCallback((options: BarcodePrintOptions) => {
    throwAgentRequired(options.protocol, 'printBarcode')
  }, [])

  // --- 프린터 관리 ---

  /**
   * 프린터 목록 조회 — 원본 gfn_getPrinterList
   *
   * 원본은 Zebra DLL의 GetWinPrintList()를 사용하고 "ZD" 필터를 적용했음.
   * 웹에서는 브라우저 API 제한으로 직접 프린터 목록을 가져올 수 없으므로,
   * 로컬 에이전트 연동 시 구현 예정.
   */
  const getPrinterList = useCallback(async (): Promise<PrinterInfo[]> => {
    // TODO: 로컬 에이전트 API로 전환 (2026년 7~8월)
    // 에이전트 연동 전까지는 빈 배열 반환
    console.warn(
      '[usePrint.getPrinterList] 프린터 목록 조회는 로컬 에이전트 연동 후 사용 가능합니다.',
    )
    return []
  }, [])

  /**
   * 레포트 프린터 조회 — 원본 gfn_getSelectedReportPrinter
   *
   * 원본: nexacro.getApplication().gv_reportPrinter 또는 기본 프린터 반환
   */
  const getSelectedReportPrinter = useCallback((): string => {
    // TODO: Zustand 전역 상태에서 reportPrinter 가져오기
    return reportPrinterRef.current || ''
  }, [])

  /**
   * 프린터 선택 팝업 — 원본 gfn_showSelectPrinter
   *
   * 원본: cmmPrinter.xfdl 팝업 오픈
   */
  const showSelectPrinter = useCallback(async (): Promise<string | null> => {
    // TODO: 프린터 선택 다이얼로그 컴포넌트 연동 (2026년 7~8월)
    console.warn(
      '[usePrint.showSelectPrinter] 프린터 선택은 로컬 에이전트 연동 후 사용 가능합니다.',
    )
    return null
  }, [])

  // --- 프로토콜별 인터페이스 (싱글톤) ---

  const t6000 = useRef(createT6000Interface()).current
  const tsc = useRef(createTSCInterface()).current
  const zebra = useRef(createZebraInterface()).current
  const sedas = useRef(createSEDASInterface()).current
  const slideMarking = useRef(createSlideMarkingInterface()).current

  return {
    // 웹 인쇄
    printElement,
    printPage,

    // 라벨/바코드
    printLabel,
    printBarcode,

    // 프린터 관리
    getPrinterList,
    getSelectedReportPrinter,
    showSelectPrinter,

    // 프로토콜별 저수준 인터페이스
    t6000,
    tsc,
    zebra,
    sedas,
    slideMarking,
  }
}
