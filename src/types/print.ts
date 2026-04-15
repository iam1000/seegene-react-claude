// =============================================================================
// 프린터 관련 타입 정의 — ExtPrintCommon.xjs 전환
// =============================================================================

// -----------------------------------------------------------------------------
// 프린터 프로토콜
// -----------------------------------------------------------------------------

/** 지원 프린터 프로토콜 — 원본 DLL별 분류 */
export type PrinterProtocol = 'T6000' | 'TSC' | 'Zebra' | 'SEDAS' | 'SlideMarking'

/** 프린터 연결 방식 */
export type PrinterConnectionType = 'USB' | 'Serial' | 'Network' | 'Bluetooth'

/** 프린터 상태 코드 (Zebra 기준, 원본 gfn_getPrintSatus) */
export const PrinterStatusCode = {
  NORMAL: 0,
  PRINT_ERROR: 1,
  PAPER_JAM: 2,
  PAPER_OUT: 3,
  PAPER_PROBLEM: 4,
  BINARY_DATA_FULL: 5,
  NOT_AVAILABLE: 6,
  NO_TONER: 7,
  OUT_OF_MEMORY: 8,
  OFFLINE: 9,
  DOOR_OPEN: 10,
  DRIVER_ERROR: -1,
} as const

export type PrinterStatusCode = (typeof PrinterStatusCode)[keyof typeof PrinterStatusCode]

/** 프린터 상태 정보 */
export interface PrinterStatus {
  code: PrinterStatusCode
  message: string
  isReady: boolean
}

// -----------------------------------------------------------------------------
// 프린터 설정 (PrinterConfig)
// -----------------------------------------------------------------------------

/** 공통 프린터 설정 */
export interface PrinterConfigBase {
  /** 프린터 이름 */
  printerName: string
  /** 연결 방식 */
  connectionType: PrinterConnectionType
  /** 포트 (USB, COM 포트 등) */
  port?: string
}

/** T6000 (Printronix) 프린터 설정 — 원본 gfn_jobSetup, gfn_scale */
export interface T6000Config extends PrinterConfigBase {
  protocol: 'T6000'
  /** 수평 DPI (기본 60) */
  horizontalDpi?: number
  /** 수직 DPI (기본 72) */
  verticalDpi?: number
  /** PGL JobSetup 모드/값 쌍 */
  jobSetup?: Array<{ mode: number; value: number }>
}

/** TSC 프린터 설정 — 원본 gfn_setupTSC */
export interface TSCConfig extends PrinterConfigBase {
  protocol: 'TSC'
  /** 라벨 너비 (mm) */
  labelWidth: string
  /** 라벨 높이 (mm) */
  labelHeight: string
  /** 인쇄 속도 */
  speed: string
  /** 인쇄 농도 (0~15) */
  density: string
  /** 센서 타입 */
  sensor: string
  /** 간격 수직 높이 (mm) */
  verticalGap: string
  /** 간격 오프셋 (mm) */
  offset: string
}

/** Zebra 프린터 설정 */
export interface ZebraConfig extends PrinterConfigBase {
  protocol: 'Zebra'
}

/** SEDAS 프린터 설정 */
export interface SEDASConfig extends PrinterConfigBase {
  protocol: 'SEDAS'
}

/** SlideMarking 프린터 설정 — 원본 gfn_netInitSlideMarking */
export interface SlideMarkingConfig extends PrinterConfigBase {
  protocol: 'SlideMarking'
  /** 접속 서버 IP (포트 3000 고정) */
  ipAddress: string
}

/** 프린터 설정 유니온 */
export type PrinterConfig = T6000Config | TSCConfig | ZebraConfig | SEDASConfig | SlideMarkingConfig

// -----------------------------------------------------------------------------
// 바코드 타입 (TSC 기준, 원본 gfn_barcodeTSC)
// -----------------------------------------------------------------------------

/** TSC 바코드 타입 */
export type TSCBarcodeType =
  | '128'
  | '128M'
  | 'EAN128'
  | '25'
  | '25C'
  | '39'
  | '39C'
  | '93'
  | 'EAN13'
  | 'EAN13+2'
  | 'EAN13+5'
  | 'EAN8'
  | 'EAN8+2'
  | 'EAN8+5'
  | 'CODA'
  | 'POST'
  | 'UPCA'
  | 'UPCA+2'
  | 'UPCA+5'
  | 'UPCE'
  | 'UPCE+2'
  | 'UPCE+5'

/** 회전 각도 */
export type RotationAngle = 0 | 90 | 180 | 270

/** 글꼴 스타일 (TSC windowsfont 기준) */
export type FontStyle = 0 | 1 | 2 | 3 // Normal, Italic, Bold, Bold+Italic

// -----------------------------------------------------------------------------
// 라벨 인쇄 옵션 (LabelPrintOptions)
// -----------------------------------------------------------------------------

/** T6000 PGL 폼 필드 */
export interface T6000FormField {
  type: 'text' | 'barcode' | 'box' | 'line' | 'image'
  /** 시작 행 (SR) */
  startRow: number
  /** 시작 열 (SC) */
  startCol: number
  /** 텍스트 데이터 또는 바코드 데이터 */
  data?: string
}

/** T6000 텍스트 필드 — 원본 gfn_printTextEng, gfn_printTextCH */
export interface T6000TextField extends T6000FormField {
  type: 'text'
  /** 수직 확장 배율 */
  verticalExpansion: number
  /** 수평 확장 배율 */
  horizontalExpansion: number
  /** 중국어 여부 */
  isChinese?: boolean
}

/** T6000 바코드 필드 — 원본 gfn_printBarcode */
export interface T6000BarcodeField extends T6000FormField {
  type: 'barcode'
  /** 바코드 타입 번호 */
  barcodeType: number
}

/** T6000 박스 필드 — 원본 gfn_drawBox */
export interface T6000BoxField extends T6000FormField {
  type: 'box'
  /** 선 두께 */
  lineThickness: number
  /** 끝 행 (ER) */
  endRow: number
  /** 끝 열 (EC) */
  endCol: number
}

/** T6000 라인 필드 — 원본 gfn_drawLine */
export interface T6000LineField extends T6000FormField {
  type: 'line'
  lineThickness: number
  endRow: number
  endCol: number
}

/** T6000 이미지 필드 — 원본 gfn_printImage */
export interface T6000ImageField extends T6000FormField {
  type: 'image'
  /** PGL 로고 이름 */
  logoName: string
}

/** T6000 폼 정의 */
export interface T6000FormDefinition {
  formName: string
  fields: Array<
    T6000TextField | T6000BarcodeField | T6000BoxField | T6000LineField | T6000ImageField
  >
  /** 폼 길이 (IGP 도트) */
  formLength?: number
  /** 폼 실행 횟수 (1~999) */
  formCount?: number
  /** 바코드 설정 — 원본 gfn_setBarcode */
  barcodeSetup?: Array<{
    barcodeType: number
    mode: number
    value: string
  }>
  /** 폰트 설정 — 원본 gfn_fontSetup */
  fontSetup?: Array<{
    mode: number
    value: string
  }>
}

/** TSC 라벨 인쇄 옵션 */
export interface TSCLabelOptions {
  protocol: 'TSC'
  /** 인쇄 세트 수 */
  sets: string
  /** 인쇄 매수 */
  copies: string
  /** 바코드 항목들 */
  barcodes?: Array<{
    x: string
    y: string
    type: TSCBarcodeType
    height: string
    readable: '0' | '1'
    rotation: string
    narrow: string
    wide: string
    code: string
  }>
  /** 프린터 내장 폰트 텍스트 — 원본 gfn_printerfontTSC */
  printerFontTexts?: Array<{
    x: string
    y: string
    fontType: string
    rotation: string
    xMultiplier: string
    yMultiplier: string
    text: string
  }>
  /** Windows 폰트 텍스트 — 원본 gfn_windowsfontTSC */
  windowsFontTexts?: Array<{
    x: number
    y: number
    fontHeight: number
    rotation: number
    fontStyle: FontStyle
    fontUnderline: 0 | 1
    faceName: string
    content: string
    /** Unicode 모드 여부 */
    unicode?: boolean
  }>
  /** PCX 그래픽 다운로드 — 원본 gfn_downloadpcxTSC */
  pcxImages?: Array<{
    filename: string
    imageName: string
  }>
  /** 원시 TSPL 명령 — 원본 gfn_sendcommandTSC */
  rawCommands?: string[]
  /** 바이너리 데이터 — 원본 gfn_sendBinaryDataTSC */
  binaryData?: string[]
}

/** Zebra 라벨 인쇄 옵션 */
export interface ZebraLabelOptions {
  protocol: 'Zebra'
  /** ZPL 명령어 문자열 */
  zplCommand: string
}

/** SEDAS 인쇄 옵션 — 원본 gfn_doSedasPrint */
export interface SEDASPrintOptions {
  protocol: 'SEDAS'
  /** String Array 데이터 */
  data: string[]
}

/** SlideMarking 인쇄 옵션 — 원본 gfn_setPrintSlideMarking */
export interface SlideMarkingPrintOptions {
  protocol: 'SlideMarking'
  /** 마킹 연도 */
  year: string
  /** 마킹 번호 1 */
  no1: string
  /** 마킹 내용 */
  content: string
  /** 마킹 이름 */
  name: string
  /** 마킹 번호 2 */
  no2: string
  /** 마킹 재단 */
  foundation: string
}

/** 라벨 인쇄 옵션 유니온 */
export type LabelPrintOptions =
  | ({ protocol: 'T6000' } & T6000FormDefinition)
  | TSCLabelOptions
  | ZebraLabelOptions
  | SEDASPrintOptions
  | SlideMarkingPrintOptions

// -----------------------------------------------------------------------------
// 바코드 인쇄 옵션 (BarcodePrintOptions)
// -----------------------------------------------------------------------------

/** 바코드 인쇄 옵션 */
export interface BarcodePrintOptions {
  /** 프린터 프로토콜 */
  protocol: PrinterProtocol
  /** 바코드 데이터 */
  data: string
  /** 바코드 타입 */
  barcodeType: TSCBarcodeType | number
  /** X 위치 */
  x: number
  /** Y 위치 */
  y: number
  /** 바코드 높이 */
  height?: number
  /** 사람 판독 가능 텍스트 표시 여부 */
  readable?: boolean
  /** 회전 각도 */
  rotation?: RotationAngle
}

// -----------------------------------------------------------------------------
// 웹 인쇄 옵션 (react-to-print)
// -----------------------------------------------------------------------------

/** react-to-print 기반 웹 인쇄 옵션 */
export interface WebPrintOptions {
  /** 인쇄 문서 제목 */
  documentTitle?: string
  /** 인쇄 전 콜백 */
  onBeforePrint?: () => void | Promise<void>
  /** 인쇄 후 콜백 */
  onAfterPrint?: () => void
  /** 인쇄 에러 콜백 */
  onPrintError?: (errorLocation: string, error: Error) => void
  /** 인쇄 페이지 스타일 (CSS) */
  pageStyle?: string
  /** 인쇄에서 제외할 클래스명 */
  suppressErrors?: boolean
}

// -----------------------------------------------------------------------------
// 프린터 정보
// -----------------------------------------------------------------------------

/** 프린터 정보 */
export interface PrinterInfo {
  /** 프린터 이름 */
  name: string
  /** 기본 프린터 여부 */
  isDefault: boolean
}

// -----------------------------------------------------------------------------
// TSC 스마트 배터리 상태 타입 — 원본 gfn_SMBStatusTSC
// -----------------------------------------------------------------------------

/** TSC 스마트 배터리 조회 타입 */
export type TSCBatteryStatusType =
  | 0 // serial number
  | 1 // voltage
  | 2 // capacity
  | 3 // temperature
  | 4 // discharged counts
  | 5 // manufacture date
  | 6 // replacement threshold
  | 7 // health
  | 8 // maximum capacity

// -----------------------------------------------------------------------------
// T6000 RFID 관련 타입 — 원본 gfn_setupRFID, gfn_writeRFID, gfn_verifyRFID
// -----------------------------------------------------------------------------

/** RFID 데이터 포맷 */
export type RFIDFormat = 'B' | 'D' | 'H'

/** RFID 메모리 뱅크 */
export type RFIDMemoryBank = 'EPC' | 'TID' | 'USR' | 'ACS' | 'KIL' | 'PC'

/** RFID 설정 옵션 */
export interface RFIDSetupOptions {
  /** 비트 길이 (0~1000) */
  length: number
  /** 증분 여부 */
  incremental: boolean
  /** 데이터 포맷 */
  format: RFIDFormat
  /** 증분 양 (0~1000) */
  incrementAmount: number
  /** RFID 데이터 */
  data: string
}

/** RFID 쓰기 옵션 */
export interface RFIDWriteOptions {
  /** 잠금 파라미터 */
  lock: string
  /** 메모리 뱅크 */
  memoryBank: RFIDMemoryBank
}

/** RFID 검증 옵션 */
export interface RFIDVerifyOptions {
  /** 잠금 해제 파라미터 */
  unlock: string
  /** 메모리 뱅크 */
  memoryBank: RFIDMemoryBank
  /** 비트 길이 */
  length: number
  /** 데이터 포맷 */
  format: RFIDFormat
}

// -----------------------------------------------------------------------------
// T6000 Snooper 설정 — 원본 gfn_setupStatus
// -----------------------------------------------------------------------------

/** Snooper 모드 */
export const SnooperMode = {
  OFF: 0,
  SERIAL: 1,
  PARALLEL: 2,
  ETHERNET: 3,
} as const

export type SnooperMode = (typeof SnooperMode)[keyof typeof SnooperMode]
