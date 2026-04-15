import type { NxDataset } from '#/lib/NxDataset'
import type { InDsEntry } from '#/types/dataobject'

// =============================================================================
// inDs 파서 — Nexacro _gfn_makeQueryString / _gfn_makePostData 대응
// =============================================================================

export function parseInDs(inDs: string): InDsEntry[] {
  if (!inDs?.trim()) return []

  return inDs
    .trim()
    .split(/\s+/)
    .map((token) => {
      const eqIdx = token.indexOf('=')
      let key: string | undefined
      let target: string

      if (eqIdx > -1) {
        key = token.slice(0, eqIdx)
        target = token.slice(eqIdx + 1)
      } else {
        target = token
      }

      const colonIdx = target.indexOf(':')
      let datasetId: string
      let option: string | undefined

      if (colonIdx > -1) {
        datasetId = target.slice(0, colonIdx)
        option = target.slice(colonIdx + 1) || undefined
      } else {
        datasetId = target
      }

      return { key, datasetId, option }
    })
}

/**
 * GET 요청용 queryString 생성.
 * option 없음 → Row 0, 숫자 → 해당 행, 문자(U/A/N) → GET에서는 무시 (Nexacro 동일)
 */
export function buildQueryString(
  entries: InDsEntry[],
  datasetMap: Record<string, NxDataset>,
): string {
  const parts: string[] = []

  for (const entry of entries) {
    const ds = datasetMap[entry.datasetId]
    if (!ds || ds.getRowCount() === 0) continue

    const rowIndex =
      entry.option !== undefined && !isNaN(Number(entry.option)) ? Number(entry.option) : 0

    const qs = ds.toQueryString(rowIndex)
    if (qs) parts.push(qs)
  }

  return parts.join('&')
}

/**
 * POST 요청용 request body 생성.
 * option 없음 → "N" (DELETE 제외), "U" → I+U+D, "A" → 전체, "N" → DELETE 제외
 */
export function buildPostBody(
  entries: InDsEntry[],
  datasetMap: Record<string, NxDataset>,
  args?: string,
): unknown {
  const body: Record<string, unknown> = {}

  if (args?.trim()) {
    for (const pair of args.trim().split(/\s+/)) {
      const eqIdx = pair.indexOf('=')
      if (eqIdx > -1) {
        const k = pair.slice(0, eqIdx)
        const v = pair.slice(eqIdx + 1)
        setNestedValue(body, k, v)
      }
    }
  }

  for (const entry of entries) {
    const ds = datasetMap[entry.datasetId]
    if (!ds) continue

    let data: unknown

    if (entry.option !== undefined && !isNaN(Number(entry.option))) {
      data = ds.toRowObject(Number(entry.option))
    } else {
      const opt = (entry.option?.toUpperCase() ?? 'N') as 'U' | 'A' | 'N'
      data = ds.toObjectList(opt)
    }

    if (entry.key) {
      setNestedValue(body, entry.key, data)
    } else {
      return data
    }
  }

  return body
}

function setNestedValue(obj: Record<string, unknown>, path: string, value: unknown): void {
  if (!path.includes('.')) {
    obj[path] = value
    return
  }

  const keys = path.split('.')
  let current = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]!
    if (typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  }
  current[keys[keys.length - 1]!] = value
}
