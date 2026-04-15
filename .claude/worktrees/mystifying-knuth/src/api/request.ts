import { apiClient } from '#/api/client'
import { buildPostBody, buildQueryString, parseInDs } from '#/api/inDsParser'
import { mapResponseToDatasets, parseOutDs } from '#/api/outDsParser'
import { parseSvcUrl } from '#/api/urlParser'
import type { NxDataset } from '#/lib/NxDataset'
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

    return { svcId: svc.svcId, errorCode: 0, data: responseData }
  } catch (error: unknown) {
    const axiosError = error as {
      response?: { status?: number; data?: NxApiResponse }
      message?: string
    }

    const errorData: NxApiResponse = axiosError.response?.data ?? {
      httpStatus: String(axiosError.response?.status ?? 'unknown'),
      messageContent: axiosError.message ?? '알 수 없는 오류가 발생했습니다.',
    }

    return { svcId: svc.svcId, errorCode: -1, data: errorData }
  }
}
