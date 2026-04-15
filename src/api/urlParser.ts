import type { ParsedUrl } from '#/types/dataobject'

/**
 * SVC URL 파서: "GET::bl::rcpt/selectRcptAmtList" → { method, group, path }
 */
export function parseSvcUrl(url: string): ParsedUrl {
  const parts = url.split('::')

  if (parts.length < 3) {
    throw new Error(`[NxDataObject] url 형식 오류: "${url}". 올바른 형식: "METHOD::GROUP::PATH"`)
  }

  return {
    method: (parts[0]!.toUpperCase() || 'GET') as ParsedUrl['method'],
    group: (parts[1] ?? '').toLowerCase(),
    path: parts[2] ?? '',
  }
}
