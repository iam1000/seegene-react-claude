import { useMemo, useSyncExternalStore } from 'react'
import { NxDataset } from '#/lib/NxDataset'
import { type DatasetOptions, RowType } from '#/types/dataset'

/**
 * useNxDataset — NxDataset 인스턴스를 React 렌더링 사이클과 연동하는 훅.
 *
 * @example
 * const { dataset: dsSearch, rows } = useNxDataset({
 *   id: 'ds_search',
 *   columns: [
 *     { id: 'startDt', type: 'string' },
 *     { id: 'endDt', type: 'string' },
 *   ],
 *   initialRows: [{ startDt: '20260301', endDt: '20260331' }],
 * })
 *
 * dsSearch.setColumn(0, 'startDt', '20260401')  // → React 리렌더 발생
 */
export function useNxDataset(options: DatasetOptions): {
  dataset: NxDataset
  rows: ReadonlyArray<Readonly<Record<string, unknown>>>
  rowCount: number
  rowPosition: number
  isUpdated: boolean
} {
  // Dataset 인스턴스: id가 변경될 때만 재생성 (의도적)
  const { id } = options
  // biome-ignore lint/correctness/useExhaustiveDependencies: Dataset은 id 기준으로만 재생성
  const dataset = useMemo(() => new NxDataset(options), [id])

  const rows = useSyncExternalStore(
    (cb) => dataset.subscribe(cb),
    () => dataset.getSnapshot(),
  )

  const rowCount = rows.length
  const rowPosition = dataset.rowposition

  const isUpdated =
    dataset.getDeletedRowCount() > 0 ||
    dataset.findRowExpr((_row, i) => {
      const rt = dataset.getRowType(i)
      return rt === RowType.INSERT || rt === RowType.UPDATE
    }) >= 0

  return { dataset, rows, rowCount, rowPosition, isUpdated }
}
