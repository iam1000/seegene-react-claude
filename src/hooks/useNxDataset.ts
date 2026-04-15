import { useCallback, useMemo, useSyncExternalStore } from 'react'
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

  const subscribe = useCallback((cb: () => void) => dataset.subscribe(cb), [dataset])
  const getSnapshot = useCallback(() => dataset.getSnapshot(), [dataset])
  const rows = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const rowCount = rows.length
  const rowPosition = dataset.rowposition

  // gfn_dsIsUpdated 대응: 삭제/수정/추가 행 존재 여부 (rows 변경 시에만 재계산)
  // biome-ignore lint/correctness/useExhaustiveDependencies: rows가 변경될 때 dataset 상태도 함께 변경됨
  const isUpdated = useMemo(() => {
    return (
      dataset.getDeletedRowCount() > 0 ||
      dataset.findRowExpr((_row, i) => {
        const rt = dataset.getRowType(i)
        return rt === RowType.INSERT || rt === RowType.UPDATE
      }) >= 0
    )
  }, [dataset, rows])

  return { dataset, rows, rowCount, rowPosition, isUpdated }
}
