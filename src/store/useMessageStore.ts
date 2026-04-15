import { create } from 'zustand'

/**
 * 메시지 타입 코드
 * A: Alert, C: Confirm, W: Warning, E: Error, I: Info, S: System
 */
export type MessageType = 'A' | 'C' | 'W' | 'E' | 'I' | 'S'

/**
 * 메시지 아이콘 타입
 */
export type IconType = 'information' | 'question' | 'warning' | 'error'

/**
 * 서버에서 로드한 메시지 데이터 (gds_message 행 1건에 대응)
 */
export interface MessageData {
  mesgId: string
  langTypeCd: string
  taskDivCd: string
  mesgTitl: string
  mesgCont: string
  mesgTypeCd: MessageType
}

/**
 * 메시지 치환 + 타이틀/아이콘 포함 완성된 결과 (gfn_getMessageInfo 반환값 대응)
 */
export interface MessageInfo {
  mesgId: string
  langTypeCd: string
  taskDivCd: string
  mesgTitl: string
  mesgCont: string
  mesgType: MessageType
  iconType: IconType
}

interface MessageState {
  /** 메시지 코드 → MessageData 맵 (gds_message 대응) */
  messages: Map<string, MessageData>

  /** 현재 로드된 언어 코드 (gv_messageLoadLangCode 대응) */
  loadedLangCode: string | null

  /** 메시지 로드 중 여부 */
  loading: boolean

  /** 메시지 데이터 일괄 로드 */
  loadMessages: (lang: string, data: MessageData[]) => void

  /** 코드로 원본 MessageData 조회 */
  getMessageData: (code: string) => MessageData | undefined

  /** 코드 → 텍스트 (치환 없이 원본 mesgCont만) */
  getMessageText: (code: string) => string

  /** 로드 상태 설정 */
  setLoading: (v: boolean) => void

  /** 메시지 캐시 초기화 (로그아웃/언어 변경 등) */
  clear: () => void
}

/**
 * 메시지 데이터 Zustand 저장소
 *
 * Nexacro `gds_message` (GlobalDataset) 대응.
 * 서버에서 메시지 데이터를 로드하면 Map에 캐싱하고,
 * useMessage 훅에서 코드 → 텍스트 변환 시 참조한다.
 *
 * @example
 * // 앱 초기화 시 메시지 로드
 * const { loadMessages } = useMessageStore.getState()
 * const data = await fetchMessages('ko')
 * loadMessages('ko', data)
 */
export const useMessageStore = create<MessageState>((set, get) => ({
  messages: new Map(),
  loadedLangCode: null,
  loading: false,

  loadMessages: (lang, data) => {
    const map = new Map<string, MessageData>()
    for (const item of data) {
      map.set(item.mesgId, item)
    }
    set({ messages: map, loadedLangCode: lang, loading: false })
  },

  getMessageData: (code) => get().messages.get(code),

  getMessageText: (code) => {
    const msg = get().messages.get(code)
    return msg?.mesgCont ?? ''
  },

  setLoading: (v) => set({ loading: v }),

  clear: () => set({ messages: new Map(), loadedLangCode: null }),
}))
