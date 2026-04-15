import { useCallback, useRef, useState } from 'react'
import hotToast from 'react-hot-toast'
import {
  type IconType,
  type MessageInfo,
  type MessageType,
  useMessageStore,
} from '#/store/useMessageStore'
import { isNull, nvl } from '#/utils/common'

// ---------------------------------------------------------------------------
// 타입 정의
// ---------------------------------------------------------------------------

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading'

export interface AlertOptions {
  /** 다이얼로그 제목 (생략 시 메시지 타입에 따라 자동 결정) */
  title?: string
  /** 아이콘 타입 */
  iconType?: IconType
  /** 상세 메시지 (오류 상세 등) */
  detail?: string
  /** "toast" 면 react-hot-toast, "dialog" 면 AlertDialog (기본값: "dialog") */
  mode?: 'toast' | 'dialog'
  /** 자동 닫기 타이머(ms). dialog 모드 전용, 0이면 비활성 */
  autoCloseMs?: number
}

export interface ConfirmOptions {
  /** 다이얼로그 제목 (기본값: "확인") */
  title?: string
  /** 아이콘 타입 (기본값: "question") */
  iconType?: IconType
  /** 상세 메시지 */
  detail?: string
  /** 확인 버튼 텍스트 */
  confirmText?: string
  /** 취소 버튼 텍스트 */
  cancelText?: string
}

/** AlertDialog 렌더링에 필요한 상태 */
export interface AlertState {
  open: boolean
  title: string
  message: string
  detail?: string
  iconType: IconType
  autoCloseMs: number
}

/** ConfirmDialog 렌더링에 필요한 상태 */
export interface ConfirmState {
  open: boolean
  title: string
  message: string
  detail?: string
  iconType: IconType
  confirmText: string
  cancelText: string
}

// ---------------------------------------------------------------------------
// 내부 유틸 (원본 gfn_convertSpecialCharacters, gfn_convertMessage 대응)
// ---------------------------------------------------------------------------

/**
 * XML 특수 문자 → 원문 치환 (gfn_convertSpecialCharacters 대응)
 */
function convertSpecialCharacters(msg: string): string {
  if (isNull(msg)) return ''
  return msg
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&#60;', '<')
    .replaceAll('&#62;', '>')
    .replaceAll('&#38;', '&')
    .replaceAll('&#34;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&#13;', '\r')
    .replaceAll('&#10;', '\n')
}

/**
 * 플레이스홀더 치환 (gfn_convertMessage 대응)
 *
 * 원본은 `#`을 순서대로 치환하지만, `{0}`, `{1}` 형식도 지원한다.
 */
export function convertMessage(msg: string, args?: (string | number)[], lineBreak = false): string {
  let result = convertSpecialCharacters(msg)

  // \\n → 실제 줄바꿈
  if (lineBreak) {
    result = result.replace(/\\n/g, '\n')
  }

  const safeArgs = args ?? []
  if (safeArgs.length === 0) return result

  // {0} 패턴이 있으면 {0},{1}... 치환, 없으면 # 순차 치환 (상호 배타)
  const hasBracketPlaceholder = result.includes('{0}')
  if (hasBracketPlaceholder) {
    for (let i = 0; i < safeArgs.length; i++) {
      result = result.replaceAll(`{${i}}`, String(safeArgs[i]))
    }
  } else {
    for (const arg of safeArgs) {
      result = result.replace('#', String(arg))
    }
  }

  return result
}

/**
 * 메시지 타입 → 기본 제목 (gfn_getDefaultMessageTitle 대응)
 */
export function getDefaultTitle(
  title: string | undefined | null,
  type?: MessageType | string,
): string {
  if (title != null && title !== '') return title

  switch (type) {
    case 'error':
    case 'E':
      return '오류'
    case 'question':
    case 'C':
      return '확인'
    case 'warning':
    case 'W':
      return '경고'
    default:
      return '알림'
  }
}

/**
 * 메시지 타입 → 아이콘 타입 (gfn_getMessageIconType 대응)
 */
export function getIconType(type?: MessageType | string): IconType {
  switch (type) {
    case 'error':
    case 'E':
      return 'error'
    case 'question':
    case 'C':
      return 'question'
    case 'warning':
    case 'W':
      return 'warning'
    default:
      return 'information'
  }
}

/**
 * 상세 메시지 치환 (gfn_convertMessageByDetailMessage 대응)
 */
function convertDetailMessage(msg: string | undefined | null): string {
  if (isNull(msg) || msg == null) return ''
  let result = convertSpecialCharacters(msg)
  if (!result.includes('\r') && !result.includes('\n') && result.includes('. ')) {
    result = result.replaceAll('. ', '.\n')
  }
  return result
}

// ---------------------------------------------------------------------------
// 훅
// ---------------------------------------------------------------------------

/**
 * 메시지/알림 통합 훅 — Nexacro Message.xjs 23개 함수 대응
 *
 * - `alert(msg, options?)` — AlertDialog 또는 toast로 알림 표시
 * - `confirm(msg, options?)` — ConfirmDialog, Promise<boolean> 반환
 * - `message(msgCode, ...args)` — 메시지 코드로 알림
 * - `getMessage(msgCode, ...args)` — 코드 → 텍스트 변환만 (표시 없음)
 * - `getMessageInfo(msgCode, args?, fallback?)` — MessageInfo 반환
 * - `toast(msg, type?)` — react-hot-toast 래퍼
 *
 * AlertDialog / ConfirmDialog는 훅이 반환하는 `alertState`, `confirmState`를
 * 컴포넌트에 전달하여 렌더링한다.
 *
 * @note AlertDialog와 ConfirmDialog 컴포넌트를 사용하는 화면 컴포넌트의 JSX에
 * 반드시 `<AlertDialog .../>` 와 `<ConfirmDialog .../>` 를 포함해야 합니다.
 * 또는 ModalContainer처럼 App.tsx 최상위에 전역 AlertProvider를 배치하는 방식으로
 * 향후 리팩토링을 권장합니다.
 *
 * @example
 * ```tsx
 * function MyPage() {
 *   const {
 *     alert, confirm, message, getMessage, toast,
 *     alertState, confirmState, onAlertClose, onConfirmConfirm, onConfirmCancel,
 *   } = useMessage()
 *
 *   const handleSave = async () => {
 *     const ok = await confirm('저장하시겠습니까?')
 *     if (!ok) return
 *     // ... save logic
 *     toast('저장되었습니다.', 'success')
 *   }
 *
 *   return (
 *     <>
 *       <button onClick={handleSave}>저장</button>
 *       <AlertDialog {...alertState} onClose={onAlertClose} />
 *       <ConfirmDialog
 *         {...confirmState}
 *         onConfirm={onConfirmConfirm}
 *         onCancel={onConfirmCancel}
 *       />
 *     </>
 *   )
 * }
 * ```
 */
export function useMessage() {
  // Alert 상태
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    title: '알림',
    message: '',
    iconType: 'information',
    autoCloseMs: 0,
  })

  // Confirm 상태 + Promise resolver 보관
  const [confirmState, setConfirmState] = useState<ConfirmState>({
    open: false,
    title: '확인',
    message: '',
    iconType: 'question',
    confirmText: '확인',
    cancelText: '취소',
  })
  const confirmResolveRef = useRef<((value: boolean) => void) | null>(null)

  // ---------- getMessageInfo (gfn_getMessageInfo) ----------

  const getMessageInfo = useCallback(
    (msgCode: string, args?: (string | number)[], fallbackMsg?: string): MessageInfo => {
      const store = useMessageStore.getState()
      let data = store.getMessageData(msgCode)

      if (!data) {
        // 코드에 해당하는 메시지가 없을 때 처리
        if (fallbackMsg != null && fallbackMsg !== '') {
          // msg.base.alert 패턴: fallbackMsg를 본문으로 사용
          const baseData = store.getMessageData('msg.base.alert')
          if (baseData) {
            data = { ...baseData }
            args = [fallbackMsg]
          }
        }

        if (!data) {
          // "해당 msgId[X]로 등록된 메세지가 없습니다." 패턴
          const fallbackData = store.getMessageData('00001')
          if (fallbackData) {
            data = { ...fallbackData }
            args = [msgCode]
          } else {
            // 메시지 데이터 자체가 없을 때 (로드 전 등)
            const mesgType: MessageType = 'W'
            return {
              mesgId: msgCode,
              langTypeCd: '',
              taskDivCd: '',
              mesgTitl: '알림',
              mesgCont: `해당 msgId[${msgCode}]로 등록된 메세지가 없습니다.`,
              mesgType,
              iconType: getIconType(mesgType),
            }
          }
        }
      }

      const mesgCont = convertMessage(data.mesgCont, args, true)
      const mesgTitl = getDefaultTitle(data.mesgTitl, data.mesgTypeCd)
      const iconType = getIconType(data.mesgTypeCd)

      return {
        mesgId: msgCode,
        langTypeCd: data.langTypeCd,
        taskDivCd: data.taskDivCd,
        mesgTitl,
        mesgCont,
        mesgType: data.mesgTypeCd,
        iconType,
      }
    },
    [],
  )

  // ---------- getMessage (gfn_getMessage) ----------

  const getMessage = useCallback(
    (msgCode: string, ...args: (string | number)[]): string => {
      const info = getMessageInfo(msgCode, args)
      return info.mesgCont
    },
    [getMessageInfo],
  )

  // ---------- toast (react-hot-toast 래퍼) ----------

  const toast = useCallback((msg: string, type: ToastType = 'info') => {
    switch (type) {
      case 'success':
        hotToast.success(msg)
        break
      case 'error':
        hotToast.error(msg)
        break
      case 'loading':
        hotToast.loading(msg)
        break
      case 'warning':
        hotToast(msg, { icon: '⚠️' })
        break
      default:
        hotToast(msg)
        break
    }
  }, [])

  // ---------- alert (gfn_alert / gfn_alertMsg) ----------

  const alert = useCallback(
    (msg: string, options?: AlertOptions): void => {
      const mode = options?.mode ?? 'dialog'
      const title = getDefaultTitle(options?.title, undefined)
      const iconType = options?.iconType ?? 'information'

      if (mode === 'toast') {
        // toast 모드: react-hot-toast로 표시
        const toastType: ToastType =
          iconType === 'error' ? 'error' : iconType === 'warning' ? 'warning' : 'success'
        toast(msg, toastType)
        return
      }

      // dialog 모드
      setAlertState({
        open: true,
        title,
        message: msg,
        detail: options?.detail ? convertDetailMessage(options.detail) : undefined,
        iconType,
        autoCloseMs: options?.autoCloseMs ?? 0,
      })
    },
    [toast],
  )

  // ---------- confirm (gfn_confirmMsg) ----------

  const confirm = useCallback((msg: string, options?: ConfirmOptions): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      confirmResolveRef.current = resolve

      setConfirmState({
        open: true,
        title: nvl(options?.title, '확인'),
        message: msg,
        detail: options?.detail ? convertDetailMessage(options.detail) : undefined,
        iconType: options?.iconType ?? 'question',
        confirmText: nvl(options?.confirmText, '확인'),
        cancelText: nvl(options?.cancelText, '취소'),
      })
    })
  }, [])

  // ---------- message (gfn_alert by msgCode) ----------

  /**
   * 메시지 코드로 알림 표시 (gfn_alert(sMsgId, arrArg, ...) 대응).
   * 메시지 타입이 "C" 이면 confirm, 그 외는 alert로 표시한다.
   */
  const message = useCallback(
    (msgCode: string, ...args: (string | number)[]): Promise<boolean> | undefined => {
      const info = getMessageInfo(msgCode, args)

      if (info.mesgType === 'C') {
        return confirm(info.mesgCont, {
          title: info.mesgTitl,
          iconType: info.iconType,
        })
      }

      alert(info.mesgCont, {
        title: info.mesgTitl,
        iconType: info.iconType,
      })
    },
    [getMessageInfo, alert, confirm],
  )

  // ---------- 다이얼로그 콜백 ----------

  const onAlertClose = useCallback(() => {
    setAlertState((prev) => ({ ...prev, open: false }))
  }, [])

  const onConfirmConfirm = useCallback(() => {
    setConfirmState((prev) => ({ ...prev, open: false }))
    confirmResolveRef.current?.(true)
    confirmResolveRef.current = null
  }, [])

  const onConfirmCancel = useCallback(() => {
    setConfirmState((prev) => ({ ...prev, open: false }))
    confirmResolveRef.current?.(false)
    confirmResolveRef.current = null
  }, [])

  return {
    // 핵심 API
    alert,
    confirm,
    message,
    getMessage,
    getMessageInfo,
    toast,

    // 유틸 (직접 사용 시)
    convertMessage,
    getDefaultTitle,
    getIconType,

    // AlertDialog 렌더링용 상태
    alertState,
    onAlertClose,

    // ConfirmDialog 렌더링용 상태
    confirmState,
    onConfirmConfirm,
    onConfirmCancel,
  }
}
