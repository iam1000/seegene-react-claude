import type { NxDataset } from '#/lib/NxDataset'
import type { OutDsEntry } from '#/types/dataobject'

// =============================================================================
// outDs 파서 — Nexacro _gfn_dsRequestOnSuccess의 outDs 매핑 로직 대응
// =============================================================================

export function parseOutDs(outDs: string): OutDsEntry[] {
  if (!outDs?.trim()) return []

  return outDs
    .trim()
    .split(/\s+/)
    .map((token) => {
      const eqIdx = token.indexOf('=')
      if (eqIdx === -1) {
        return { datasetId: token, responseKey: token }
      }
      return {
        datasetId: token.slice(0, eqIdx),
        responseKey: token.slice(eqIdx + 1),
      }
    })
}

export function mapResponseToDatasets(
  responseData: Record<string, unknown>,
  entries: OutDsEntry[],
  datasetMap: Record<string, NxDataset>,
): void {
  for (const entry of entries) {
    const ds = datasetMap[entry.datasetId]
    if (!ds) continue

    let data: unknown = responseData
    for (const key of entry.responseKey.split('.')) {
      if (data !== null && typeof data === 'object') {
        data = (data as Record<string, unknown>)[key]
      } else {
        data = undefined
        break
      }
    }

    if (data == null) continue

    const rows = Array.isArray(data)
      ? (data as Record<string, unknown>[])
      : [data as Record<string, unknown>]
    ds.loadData(rows)
  }
}
