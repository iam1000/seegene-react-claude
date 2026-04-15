import { apiClient } from '#/api/client'
import { buildPostBody, buildQueryString, parseInDs } from '#/api/inDsParser'
import { mapResponseToDatasets, parseOutDs } from '#/api/outDsParser'
import { parseSvcUrl } from '#/api/urlParser'
import type { NxDataset } from '#/lib/NxDataset'
import { useAuthStore } from '#/store/useAuthStore'
import { useConfigStore } from '#/store/useConfigStore'
import type { CallbackResult, NxApiResponse, SvcDefinition } from '#/types/dataobject'

// =============================================================================
// executeRequest — Nexacro gfn_dsRequest 핵심 실행 로직 대응
// =============================================================================

export async function executeRequest(
  svc: SvcDefinition,
  datasetMap: Record<string, NxDataset> = {},
): Promise<CallbackResult> {
  const { method, group, path } = parseSvcUrl(svc.url)
  const resolveUrl = useConfigStore.getState().resolveUrl
  const url = resolveUrl(group, path)

  const inDsEntries = parseInDs(svc.inDs ?? '')
  const outDsEntries = parseOutDs(svc.outDs ?? '')

  try {
    let responseData: NxApiResponse

    if (method === 'GET' || method === 'HEAD') {
      const queryString = buildQueryString(inDsEntries, datasetMap)
      const fullUrl = queryString ? `${url}${url.includes('?') ? '&' : '?'}${queryString}` : url
      const response = await apiClient.get<NxApiResponse>(fullUrl)
      responseData = response.data
    } else {
      const body = buildPostBody(inDsEntries, datasetMap, svc.args)
      const response = await apiClient.request<NxApiResponse>({
        method: method.toLowerCase(),
        url,
        data: body,
      })
      responseData = response.data
    }

    if (outDsEntries.length > 0) {
      mapResponseToDatasets(responseData as Record<string, unknown>, outDsEntries, datasetMap)
    }

    // 서버 응답의 code 필드로 비즈니스 에러를 구분
    // -10: 비즈니스 에러, -13: 업무마감, -30: 세션만료 등
    const appCode = responseData?.code ?? 0

    if (appCode === -30) {
      // 세션 만료 — 즉시 logout + redirect 후 return (이후 로직 실행 방지)
      useAuthStore.getState().logout()
      window.location.href = '/login'
      return {
        svcId: svc.svcId,
        errorCode: -30,
        errorMsg: '세션이 만료되었습니다.',
        data: responseData,
      }
    }

    return {
      svcId: svc.svcId,
      errorCode: appCode < 0 ? appCode : 0,
      errorMsg: appCode < 0 ? responseData.message || responseData.messageContent || '' : '',
      data: responseData,
    }
  } catch (error: unknown) {
    const axiosError = error as {
      response?: { status?: number; data?: NxApiResponse | string }
      message?: string
    }

    const rawData = axiosError.response?.data
    const errorData: NxApiResponse = parseResponseData(rawData, axiosError)

    return { svcId: svc.svcId, errorCode: -1, errorMsg: '', data: errorData }
  }
}

// =============================================================================
// 응답 데이터 파싱 — Nexacro _gfn_parseResponseData / _gfn_getResponseData 대응
// =============================================================================

/**
 * 에러 응답 데이터를 NxApiResponse로 정규화.
 * HTML 응답(Spring 에러 페이지 등)도 파싱하여 messageTitle/messageContent 추출.
 */
function parseResponseData(
  rawData: NxApiResponse | string | undefined,
  axiosError: { response?: { status?: number }; message?: string },
): NxApiResponse {
  if (!rawData) {
    return {
      httpStatus: String(axiosError.response?.status ?? 'unknown'),
      messageContent: axiosError.message ?? '알 수 없는 오류가 발생했습니다.',
    }
  }

  // 서버가 HTML 에러 페이지를 반환한 경우 (Nexacro _gfn_getResponseData 대응)
  if (typeof rawData === 'string' && rawData.includes('<html')) {
    const textParts = getTextFromHtml(rawData)
    return {
      httpStatus: String(axiosError.response?.status ?? 'unknown'),
      messageTitle: textParts.length >= 2 ? textParts[0] : 'Server Error',
      messageContent: textParts.length >= 2 ? textParts[1] : (textParts[0] ?? 'Server Error'),
    }
  }

  // 이미 JSON 객체인 경우
  if (typeof rawData === 'object') {
    const data = rawData as NxApiResponse
    if (!data.httpStatus && axiosError.response?.status) {
      data.httpStatus = String(axiosError.response.status)
    }
    return data
  }

  return {
    httpStatus: String(axiosError.response?.status ?? 'unknown'),
    messageContent: String(rawData),
  }
}

// =============================================================================
// HTML → Text 유틸 — Nexacro gfn_getTextFromHtml / gfn_stripHtmlTag 대응
// =============================================================================

/** HTML 문자열에서 태그를 제거하고 텍스트 배열로 반환. */
export function getTextFromHtml(html: string): string[] {
  const textParts: string[] = []
  const htmlLower = html.toLowerCase()

  if (!htmlLower.includes('<html')) return [stripHtmlTag(html)].filter(Boolean)

  const bodyIdx = htmlLower.indexOf('<body')
  const workHtml = bodyIdx >= 0 ? html.substring(bodyIdx) : html

  for (const line of workHtml.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const text = stripHtmlTag(trimmed)
    if (text) textParts.push(text)
  }

  return textParts
}

/** HTML 태그 (<..>)를 제거하고 순수 텍스트만 반환. */
export function stripHtmlTag(text: string): string {
  if (!text) return ''
  return text.replace(/<[^>]*>/g, '').trim()
}

// =============================================================================
// HTTP 에러 메시지 포맷 — Nexacro _gfn_getErrorMsgHttpStatus 대응
// =============================================================================

export interface ErrorMessageInfo {
  title: string
  message: string
  detail?: string
}

/**
 * HTTP 에러 응답에서 사용자에게 표시할 메시지 정보를 추출.
 * Nexacro _gfn_getErrorMsgHttpStatus / _gfn_getErrorMsgHttpStatus404/500 대응.
 */
export function formatHttpErrorMessage(
  status: number | string | undefined,
  data: NxApiResponse,
): ErrorMessageInfo {
  const httpStatus = String(status ?? data.httpStatus ?? 'unknown')

  if (httpStatus === '404' || httpStatus === '500') {
    let msg = httpStatus
    if (data.messageContent) {
      msg += ` ${data.messageContent}`
    }
    return {
      title: 'Error',
      message: msg,
      detail: data.detail,
    }
  }

  const message = (data.messageContent ?? '').replace(/\. /g, '.\n')

  return {
    title: data.messageTitle ?? 'Error',
    message,
    detail: data.detail,
  }
}
