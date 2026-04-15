// =============================================================================
// Nexacro DataObject / gfn_dsRequest 대응 타입 정의
// =============================================================================

export interface SvcDefinition {
  svcId: string
  url: string
  inDs?: string
  outDs?: string
  args?: string
  callback?: string
  showerrormsg?: boolean
}

export interface ParsedUrl {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD'
  group: string
  path: string
}

export interface InDsEntry {
  key?: string
  datasetId: string
  option?: string
}

export interface OutDsEntry {
  datasetId: string
  responseKey: string
}

export interface NxApiResponse {
  httpStatus?: string
  messageTitle?: string
  messageContent?: string
  code?: number
  message?: string
  detail?: string
  result?: unknown
  pagination?: {
    totalDataCount: number
    pageIndex: number
    pageSize: number
  }
  [key: string]: unknown
}

export interface CallbackResult {
  svcId: string
  errorCode: number
  data: NxApiResponse
}

export type DomainMap = Record<string, Record<string, string>>
