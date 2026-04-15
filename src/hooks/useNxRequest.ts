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
  /** queryKey에 추가할 식별자 — 동일 svcId를 여러 곳에서 사용할 때 캐시 충돌 방지 */
  queryKeyExtra?: unknown[]
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
    queryKey: [
      'nx',
      svc.svcId,
      svc.url,
      svc.inDs ?? '',
      svc.outDs ?? '',
      ...(options.queryKeyExtra ?? []),
    ],
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

  // errorHandled 플래그로 onSuccess 내 비즈니스 에러 처리와
  // TanStack onError 경로의 중복 호출을 방지한다.
  // executeRequest는 HTTP 에러도 catch하여 CallbackResult로 반환하므로
  // 정상적인 경우 TanStack onError가 호출되지 않지만, 방어적으로 처리한다.
  let errorHandled = false

  return useMutation({
    mutationFn: ({ svc, datasetMap = {} }) => executeRequest(svc, datasetMap),

    onSuccess: (result) => {
      errorHandled = false

      if (result.errorCode === 0) {
        options.onSuccess?.(result)
      } else {
        errorHandled = true
        options.onError?.(result)
      }

      // errorCode !== 0(비즈니스 에러)여도 캐시 무효화는 실행한다
      if (options.invalidateKeys) {
        for (const key of options.invalidateKeys) {
          void queryClient.invalidateQueries({ queryKey: key })
        }
      }
    },

    // executeRequest가 내부에서 catch하므로 여기는 예기치 않은 에러만 도달한다.
    // errorHandled 플래그로 onSuccess에서 이미 처리된 경우 중복 호출을 방지한다.
    onError: (error, variables) => {
      if (errorHandled) return
      options.onError?.({
        svcId: variables.svc.svcId,
        errorCode: -1,
        errorMsg: error.message,
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

/**
 * 필수 입력 항목 미입력 시 에러 메시지 생성 — Nexacro gfn_showErrorMessageValidatorRequired 대응.
 * 반환값은 toast나 alert으로 직접 표시한다.
 *
 * @param fields - 미입력된 필드명 배열
 * @returns 포맷된 에러 메시지 문자열
 *
 * @example
 * if (!dsSearch.getColumn(0, 'startDt')) {
 *   alert(getValidationErrorMessage(['시작일']))
 *   return
 * }
 */
export function getValidationErrorMessage(fields: string[]): string {
  return `필수 입력 항목을 확인하세요: ${fields.join(', ')}`
}
