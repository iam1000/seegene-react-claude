/** Backend standard response */
export interface ApiResponse<T = unknown> {
  httpStatus: string
  messageTitle: string
  messageContent: string
  result: T
  pagination?: Pagination
  code: number
  message: string
  detail: string
}

export interface Pagination {
  page: number
  size: number
  totalCount: number
  totalPages: number
}
