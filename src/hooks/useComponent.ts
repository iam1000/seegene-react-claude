import { useCallback, useEffect, useRef, useState } from 'react'
import type { RichEditorHandle } from '#/components/editor'

// =============================================================================
// useComponent — Comp.xjs 전환 훅
//
// 원본: cmmlib/Comp.xjs (1,441줄, 55함수)
//
// 분류:
//   [웹 구현]
//     - useTTS()        — Web Speech API 기반 TTS (gfn_iniTTS, gfn_tts 등 4함수)
//     - getCompId()     — 컴포넌트 경로 ID 추출 (gfn_getCompId)
//     - useRichEditor() — DEXT5Editor → TipTap RichEditor 매핑 인터페이스
//     - convertSpecialCharToHtml() — 특수문자 HTML 변환 유틸
//
//   [SKIP — Nexacro 전용]
//     - DLL 로딩/언로딩 5함수: gfn_getDLLPath, gfn_openDLL, gfn_closeDLL,
//       gfn_getExtCommon, gfn_closeExtCommon
//     - Edit ms-clear 4함수: gfn_setEditMsClear(2), gfn_setEditMsClearRemove,
//       gfn_setEditMsClearAll — 브라우저 <input>에 불필요
//     - Accordion 3함수: gfn_setAccordion, gfn_handleAccordionButtonClick,
//       gfn_redrawAccordion — shadcn Accordion 또는 직접 구현 권장 (아래 안내 참고)
//     - 월력 Calendar 1함수: gfn_calMMOndropdown — Nexacro PopupDiv 전용
//     - STT 5함수: gfn_iniSTT, gfn_stt, gfn_sttStop, gfn_setGrammar,
//       gfn_getCompSTT — 프로젝트 범위 제외
//     - DEXT5 내부 구현 23함수: 진단단어장, 이상결과문구, 에디터 플러그인
//       스크립트 실행, 프로퍼티/이벤트 복사 등 — TipTap에서 불필요한 내부 메커니즘.
//       진단단어장/이상결과문구 데이터는 각 화면에서 TanStack Query로 직접 조회.
//
// ※ Accordion 안내:
//   shadcn/ui Accordion 설치 권장: npx shadcn@latest add accordion
//   설치 후 src/components/ui/accordion.tsx 사용.
//   원본 gfn_setAccordion은 Nexacro Div/Button의 top/height를 수동 계산하는
//   방식이므로, React에서는 shadcn Accordion(Radix 기반)으로 완전 대체된다.
// =============================================================================

// =============================================================================
// 1. TTS — Web Speech API (gfn_iniTTS, gfn_setRateTTS, gfn_tts, gfn_getCompTTS)
// =============================================================================

export interface TTSOptions {
  /** 음성 속도 (0.1 ~ 10, 기본 1.5 — 원본 기본값과 동일) */
  rate?: number
  /** 음 높이 (0 ~ 2, 기본 1) */
  pitch?: number
  /** 음량 (0 ~ 1, 기본 1) */
  volume?: number
  /** BCP-47 언어 코드 (기본 'ko-KR') */
  lang?: string
}

interface TTSReturn {
  /** 텍스트를 읽는다 (gfn_tts 대응) */
  speak: (text: string, options?: TTSOptions) => void
  /** 재생 중지 (원본에 없으나 웹에서 필수) */
  stop: () => void
  /** 재생 중 여부 */
  isSpeaking: boolean
  /** 기본 속도 변경 (gfn_setRateTTS 대응) */
  setRate: (rate: number) => void
  /** Web Speech API 지원 여부 */
  isSupported: boolean
}

/**
 * Web Speech API(SpeechSynthesis) 기반 TTS 훅
 *
 * 원본 gfn_iniTTS / gfn_tts / gfn_setRateTTS를 대체한다.
 * 원본은 Nexacro Div로 cmmTTS.xfdl을 동적 로드했지만,
 * 웹에서는 브라우저 내장 SpeechSynthesis API를 직접 사용한다.
 *
 * @example
 * ```tsx
 * const { speak, stop, isSpeaking } = useTTS({ rate: 1.5 })
 * speak('환자 이름 홍길동')
 * ```
 */
export function useTTS(initialOptions?: TTSOptions): TTSReturn {
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  const rateRef = useRef(initialOptions?.rate ?? 1.5)
  const pitchRef = useRef(initialOptions?.pitch ?? 1)
  const volumeRef = useRef(initialOptions?.volume ?? 1)
  const langRef = useRef(initialOptions?.lang ?? 'ko-KR')

  const [isSpeaking, setIsSpeaking] = useState(false)

  // 컴포넌트 언마운트 시 재생 정리
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel()
      }
    }
  }, [isSupported])

  const speak = useCallback(
    (text: string, options?: TTSOptions) => {
      if (!isSupported) {
        console.warn('[useTTS] SpeechSynthesis API를 지원하지 않는 브라우저입니다.')
        return
      }
      if (!text) return

      // 기존 발화 중지 후 새로 시작
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = options?.rate ?? rateRef.current
      utterance.pitch = options?.pitch ?? pitchRef.current
      utterance.volume = options?.volume ?? volumeRef.current
      utterance.lang = options?.lang ?? langRef.current

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
    },
    [isSupported],
  )

  const stop = useCallback(() => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }, [isSupported])

  const setRate = useCallback((rate: number) => {
    // 원본 제한: 0.5 ~ 2.0
    rateRef.current = Math.max(0.1, Math.min(10, rate))
  }, [])

  return { speak, stop, isSpeaking, setRate, isSupported }
}

// =============================================================================
// 2. 컴포넌트 ID 추출 (gfn_getCompId)
// =============================================================================

/**
 * 컴포넌트 경로에서 ID를 추출한다.
 *
 * 원본은 Nexacro ChildFrame까지 parent를 탐색하며 "div1.div2.button1" 형태의
 * 경로를 만들었다. React에서는 컴포넌트 트리가 다르므로, 단순히 경로 문자열에서
 * 마지막 세그먼트를 추출하는 유틸로 전환한다.
 *
 * @param path - 점(.) 또는 슬래시(/)로 구분된 컴포넌트 경로
 * @returns 마지막 세그먼트 (ID)
 *
 * @example
 * ```ts
 * getCompId('div_search.edt_name')  // 'edt_name'
 * getCompId('pages/DT/DT_M00_010') // 'DT_M00_010'
 * getCompId('singleName')           // 'singleName'
 * ```
 */
export function getCompId(path: string): string {
  if (!path) return ''
  // 슬래시 또는 점으로 분리, 마지막 세그먼트 반환
  const segments = path.split(/[./\\]/)
  return segments[segments.length - 1] ?? ''
}

// =============================================================================
// 3. RichEditor 매핑 인터페이스 (DEXT5Editor → TipTap)
// =============================================================================

/**
 * DEXT5Editor 통합 함수를 TipTap RichEditor ref와 연결하는 훅
 *
 * 원본의 gfn_dext5Editor_setBodyValue, gfn_dext5Editor_reInit 등을
 * RichEditorHandle ref를 통해 동일한 인터페이스로 제공한다.
 *
 * @example
 * ```tsx
 * const editorRef = useRef<RichEditorHandle>(null)
 * const { setBodyValue, getBodyTextValue, setEditable } = useRichEditor(editorRef)
 *
 * // 원본: this.gfn_dext5Editor_setBodyValue(objEditor, sText)
 * setBodyValue('<p>결과 내용</p>')
 *
 * // 원본: objEditor.GetBodyTextValue()
 * const text = getBodyTextValue()
 * ```
 */
export function useRichEditor(editorRef: React.RefObject<RichEditorHandle | null>) {
  /**
   * 에디터에 HTML 콘텐츠를 설정한다.
   * 원본: gfn_dext5Editor_setBodyValue
   *
   * @param html - HTML 문자열. 일반 텍스트인 경우 convertSpecialCharToHtml로 변환 후 전달.
   * @param isConvert - true이면 특수문자를 HTML 태그로 변환 (기본 false — TipTap은 HTML 직접 처리 가능)
   */
  const setBodyValue = useCallback(
    (html: string, isConvert = false) => {
      if (!editorRef.current) return
      const content = isConvert ? convertSpecialCharToHtml(html) : html
      editorRef.current.setHtmlValue(content)
    },
    [editorRef],
  )

  /**
   * 에디터에 순수 텍스트를 설정한다.
   * 원본: gfn_dext5Editor_setBodyTextValue
   */
  const setBodyTextValue = useCallback(
    (text: string) => {
      if (!editorRef.current) return
      // TipTap에서는 텍스트를 <p> 태그로 감싸서 설정
      const html = convertSpecialCharToHtml(text)
      editorRef.current.setHtmlValue(html)
    },
    [editorRef],
  )

  /**
   * 에디터의 HTML 콘텐츠를 반환한다.
   * 원본: objEditor.GetHtmlValue()
   */
  const getHtmlValue = useCallback((): string => {
    return editorRef.current?.getHtmlValue() ?? ''
  }, [editorRef])

  /**
   * 에디터의 순수 텍스트를 반환한다.
   * 원본: objEditor.GetBodyTextValue()
   */
  const getBodyTextValue = useCallback((): string => {
    return editorRef.current?.getBodyTextValue() ?? ''
  }, [editorRef])

  /**
   * 에디터 편집 가능 여부를 설정한다.
   * 원본: objEditor.SetEditorBodyEditable()
   */
  const setEditable = useCallback(
    (editable: boolean) => {
      editorRef.current?.setEditorBodyEditable(editable)
    },
    [editorRef],
  )

  /**
   * 에디터를 재초기화한다.
   * 원본: gfn_dext5Editor_reInit — DEXT5에서는 InitXml 변경 시 에디터를
   * 파괴 후 재생성했지만, TipTap에서는 콘텐츠를 비우는 것으로 충분하다.
   */
  const reInit = useCallback(() => {
    editorRef.current?.setHtmlValue('')
  }, [editorRef])

  return {
    setBodyValue,
    setBodyTextValue,
    getHtmlValue,
    getBodyTextValue,
    setEditable,
    reInit,
  }
}

// =============================================================================
// 4. 유틸리티 함수
// =============================================================================

/**
 * 특수문자를 HTML 태그/엔티티로 변환한다.
 * 원본: gfn_dext5Editor_convertSpecialCharToTag
 *
 * @param text - 변환 대상 문자열
 * @returns HTML 엔티티가 적용된 문자열
 *
 * @example
 * ```ts
 * convertSpecialCharToHtml('a < b > c')  // 'a &lt; b &gt; c'
 * convertSpecialCharToHtml('line1\nline2') // 'line1<br>line2'
 * ```
 */
export function convertSpecialCharToHtml(text: string): string {
  if (!text) return ''

  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\r\n/g, '<br>')
    .replace(/\n/g, '<br>')
    .replace(/\r/g, '<br>')
    .replace(/ /g, '&nbsp;')
}

/**
 * 텍스트의 위치 정보를 기준으로 색상 처리 태그를 추가하여 반환한다.
 * 원본: gfn_dext5Eeditor_getTextConvertValidColor
 *
 * 병리 결과에서 특정 단어에 빨간 색상을 적용할 때 사용한다.
 *
 * @param text - 원본 텍스트
 * @param positions - [시작위치, 길이] 배열의 배열
 * @param color - 적용할 색상 (기본 '#C70003' — 원본과 동일)
 * @returns HTML 문자열
 *
 * @example
 * ```ts
 * // "정상" 부분(인덱스 3, 길이 2)에 빨간색 적용
 * getTextWithHighlight('결과 정상 입니다', [[3, 2]])
 * // → '결과 <span style="color:#C70003;">정상</span> 입니다'
 * ```
 */
export function getTextWithHighlight(
  text: string,
  positions: [number, number][],
  color = '#C70003',
): string {
  if (!text || !positions.length) return convertSpecialCharToHtml(text)

  let html = ''
  let cursor = 0

  const tagStart = `<span style="color:${color};">`
  const tagEnd = '</span>'

  for (const [start, length] of positions) {
    html +=
      convertSpecialCharToHtml(text.substring(cursor, start)) +
      tagStart +
      convertSpecialCharToHtml(text.substring(start, start + length)) +
      tagEnd
    cursor = start + length
  }

  html += convertSpecialCharToHtml(text.substring(cursor))

  return html
}
