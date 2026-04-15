import {
  type QueryClient,
  type UseMutationResult,
  type UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { executeRequest } from '#/api/request'
import type { NxDataset } from '#/lib/NxDataset'
import type { CallbackResult, SvcDefinition } from '#/types/dataobject'

export type DatasetMap = Record<string, NxDataset>

// =============================================================================
// useNxQuery — gfn_dsRequestAsync 조회용 대응
// =============================================================================

interface UseNxQueryOptions {
  enabled?: boolean
  onSuccess?: (result: CallbackResult) => void
  onError?: (result: CallbackResult) => void
}

/**
 * useNxQuery — Nexacro gfn_dsRequestAsync (조회용) 대응.
 *
 * @example
 * const SVC_SEARCH = {
 *   svcId: 'searchRcpt',
 *   url: 'GET::bl::rcpt/selectRcptAmtList',
 *   inDs: 'ds_search',
 *   outDs: 'ds_list=result ds_page=pagination',
 * }
 *
 * const { refetch, isFetching } = useNxQuery(SVC_SEARCH, {
 *   ds_search: dsSearch,
 *   ds_list: dsList,
 *   ds_page: dsPage,
 * })
 *
 * const handleSearch = () => void refetch()
 */
export function useNxQuery(
  svc: SvcDefinition,
  datasetMap: DatasetMap = {},
  options: UseNxQueryOptions = {},
): UseQueryResult<CallbackResult, Error> & { execute: () => void } {
  const queryResult = useQuery({
    queryKey: ['nx', svc.svcId],
    queryFn: async () => {
      const result = await executeRequest(svc, datasetMap)
      if (result.errorCode === 0) {
        options.onSuccess?.(result)
      } else {
        options.onError?.(result)
      }
      return result
    },
    enabled: options.enabled ?? false,
    gcTime: 0,
    staleTime: 0,
  })

  return {
    ...queryResult,
    execute: () => void queryResult.refetch(),
  }
}

// =============================================================================
// useNxMutation — gfn_dsRequestAsync 저장·삭제용 대응
// =============================================================================

interface UseNxMutationOptions {
  onSuccess?: (result: CallbackResult) => void
  onError?: (result: CallbackResult) => void
  invalidateKeys?: string[][]
}

/**
 * useNxMutation — Nexacro gfn_dsRequestAsync/Sync 저장·삭제용 대응.
 *
 * @example
 * const { mutate: save, isPending } = useNxMutation({
 *   onSuccess: (result) => {
 *     if (result.errorCode === 0) alert('저장 완료')
 *   },
 * })
 *
 * const handleSave = () => save({
 *   svc: SVC_SAVE,
 *   datasetMap: { ds_rcptList: dsRcptList, ds_result: dsResult },
 * })
 */
export function useNxMutation(
  options: UseNxMutationOptions = {},
): UseMutationResult<CallbackResult, Error, { svc: SvcDefinition; datasetMap?: DatasetMap }> {
  const queryClient: QueryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ svc, datasetMap = {} }) => executeRequest(svc, datasetMap),

    onSuccess: (result) => {
      if (result.errorCode === 0) {
        options.onSuccess?.(result)
      } else {
        options.onError?.(result)
      }

      if (options.invalidateKeys) {
        for (const key of options.invalidateKeys) {
          void queryClient.invalidateQueries({ queryKey: key })
        }
      }
    },

    onError: (error, variables) => {
      options.onError?.({
        svcId: variables.svc.svcId,
        errorCode: -1,
        data: { messageContent: error.message },
      })
    },
  })
}

// =============================================================================
// dsRequest — 훅 밖에서 직접 호출하는 유틸
// =============================================================================

export async function dsRequest(
  svc: SvcDefinition,
  datasetMap: DatasetMap = {},
): Promise<CallbackResult> {
  return executeRequest(svc, datasetMap)
}

// =============================================================================
// 헬퍼
// =============================================================================

export function isApiSuccess(result: CallbackResult): boolean {
  if (result.errorCode !== 0) return false
  const status = result.data.httpStatus
  if (!status) return true
  return status.startsWith('2')
}

export function getApiErrorMessage(result: CallbackResult): string {
  return (
    (result.data.messageContent as string | undefined) ??
    (result.data.message as string | undefined) ??
    '알 수 없는 오류가 발생했습니다.'
  )
}
