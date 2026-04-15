// 타입 체크, null 처리, 범용 유틸리티
// 원본: cmmlib/Util.xjs - String 및 Util 관련

import type NxDataset from '#/lib/NxDataset'
import { useAuthStore } from '#/store/useAuthStore'

// biome-ignore lint/complexity/noBannedTypes: 원본 gfn_isFunction과 동일한 범용 함수 체크
export const isFunction = (value: unknown): value is Function =>
  Object.prototype.toString.call(value) === '[object Function]'

export const isArray = (value: unknown): value is unknown[] => Array.isArray(value)

export const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null || value === undefined) return false
  return typeof value === 'object' && 'constructor' in value && value.constructor === Object
}

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true

  if (isString(value)) return value.trim().length === 0
  if (isArray(value)) return value.length === 0
  if (isObject(value)) {
    for (const p in value) {
      if (Object.hasOwn(value, p)) {
        return false
      }
    }
    return true
  }

  return false
}

export const isNotEmpty = (value: unknown): boolean => !isEmpty(value)

export const isNull = (value: unknown): boolean => {
  if (String(value) === 'undefined') return true
  if (value == null) return true
  if (String(value).length === 0) return true
  return false
}

export const isNotNull = (value: unknown): boolean => !isNull(value)

export const isBoolean = (value: unknown): boolean => {
  const s = String(value)
  return s === 'true' || s === 'false'
}

// null이면 대체값 반환
export const nvl = <T>(value: T | null | undefined, nullValue: T): T => {
  if (value == null || String(value) === 'undefined') {
    return nullValue
  }
  return value
}

// decode: expression, search, result 쌍, [default]
// 예: decode(val, 1, "A", 2, "B", "C")
export const decode = (expression: unknown, ...args: unknown[]): unknown => {
  let rtnValue: unknown = null
  const allArgs = [expression, ...args]
  const hasDefault = allArgs.length % 2 === 0
  const count = hasDefault ? allArgs.length - 1 : allArgs.length

  for (let i = 1; i < count; i += 2) {
    // biome-ignore lint/suspicious/noDoubleEquals: 원본 gfn_decode와 동일하게 loose comparison 사용
    if (expression == allArgs[i]) {
      rtnValue = allArgs[i + 1]
      break
    }
  }

  if (rtnValue == null && hasDefault) {
    rtnValue = allArgs[allArgs.length - 1]
  }

  return rtnValue
}

// typeof 래퍼 (원본: gfn_typeOf)
export const typeOf = (value: unknown): string => {
  if (value && typeof value === 'object') {
    const s = value.toString()
    if (s === '[object Object]') return 'object'
    return s.substring(8, s.length - 1)
  }
  return typeof value
}

// 객체 속성 복사 (shallow copy)
export const copyProperties = <T extends Record<string, unknown>>(
  target: T,
  source: Record<string, unknown>,
): T => {
  if (target && source) {
    for (const p in source) {
      if (Object.hasOwn(source, p)) {
        ;(target as Record<string, unknown>)[p] = source[p]
      }
    }
  }
  return target
}

// 객체 속성 순회 (return false로 중단 가능)
export const each = <T extends Record<string, unknown>>(
  obj: T,
  fn: (prop: string, val: unknown, object: T) => boolean | undefined,
): void => {
  for (const p in obj) {
    if (Object.hasOwn(obj, p)) {
      if (fn(p, obj[p], obj) === false) return
    }
  }
}

// UUID 스타일 고유 ID 생성 (원본: gfn_getUniqueId)
export const getUniqueId = (prefix = '', separator = '-'): string => {
  const hex = '0123456789abcdef'
  const sep = separator

  let result = ''

  // 8 hex chars
  for (let i = 0; i < 8; i++) {
    result += hex[Math.floor(Math.random() * 16)]
  }

  // 3 groups of 4 hex chars
  for (let s = 0; s < 3; s++) {
    result += sep
    for (let i = 0; i < 4; i++) {
      result += hex[Math.floor(Math.random() * 16)]
    }
  }

  result += sep

  // timestamp-based 8 chars
  const ts = `0000000${Date.now().toString(16)}`.slice(-8)
  result += ts

  // 4 hex chars
  for (let i = 0; i < 4; i++) {
    result += hex[Math.floor(Math.random() * 16)]
  }

  return prefix + result
}

// 문자열 "key1=val1 key2=val2"를 객체로 변환
export const convertArgumentStringToObject = (
  str: string | null | undefined,
  toLower = false,
): Record<string, string> => {
  if (isNull(str) || !isString(str)) return {}

  let s = str as string
  if (toLower) s = s.toLowerCase()

  return parseVarCreateParam(s)
}

// 내부: key=value 파싱
const parseVarCreateParam = (paramStr: string): Record<string, string> => {
  if (!paramStr || paramStr === '') return {}

  const s = paramStr.replace(/=\s/g, '=').replace(/\s=/g, '=').trim()

  if (s.length === 0) return {}

  const result: Record<string, string> = {}
  const expr =
    /([a-zA-Z_][a-zA-Z0-9_]*)\s*="([^"]*)"|([a-zA-Z_][a-zA-Z0-9_]*)\s*='([^']*)'|([a-zA-Z_][a-zA-Z0-9_]*)\s*=([^ ]*)/g

  let match: RegExpExecArray | null = expr.exec(s)
  while (match !== null) {
    const key = (match[1] || match[3] || match[5]).trim()
    let value = (match[2] ?? match[4] ?? match[6]).trim()
    // strip quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    result[key] = value
    match = expr.exec(s)
  }

  return result
}

// URL 경로 합치기 (슬래시 처리)
export const concatUrl = (url1: string, url2: string): string => {
  let u1 = url1
  let u2 = url2

  if (!u1.endsWith('/')) u1 += '/'
  if (u2.startsWith('/')) u2 = u2.substring(1)

  return u1 + u2
}

// ---------------------------------------------------------------------------
// [C7] gfn_getGdsUserInfo 대응 — Zustand useAuthStore에서 사용자 정보 조회
// ---------------------------------------------------------------------------

/**
 * 사용자 정보 필드값 조회 — 원본 gfn_getGdsUserInfo 대응.
 *
 * Nexacro 전역 Dataset `gds_userInfo`에서 컬럼값을 조회하던 것을
 * Zustand useAuthStore.getState()로 전환.
 * 훅 밖에서도 사용 가능한 유틸 함수.
 *
 * @param field - UserInfo 필드명 (예: 'userId', 'deptCd', 'cntrCd')
 * @param defaultValue - 값이 없을 때 반환할 기본값
 *
 * @example
 * const userId = getUserInfo('userId')
 * const deptCd = getUserInfo('deptCd', 'DEFAULT')
 */
// useAuthStore.getState() 직접 접근 — 훅이 아닌 순수 유틸 함수, 컴포넌트 밖에서도 호출 가능
export function getUserInfo(field: string, defaultValue = ''): string {
  const user = useAuthStore.getState().user
  if (!user) return defaultValue
  const value = user[field]
  if (value == null) return defaultValue
  if (Array.isArray(value)) return value.join(',')
  return String(value)
}

// ---------------------------------------------------------------------------
// [C8] gfn_getEncryptText 대응 — Web Crypto API SHA-256 해시
// ---------------------------------------------------------------------------

/**
 * SHA-256 해시 — 원본 gfn_getEncryptText 대응.
 *
 * Web Crypto API(`crypto.subtle.digest`)를 사용하여 텍스트를
 * SHA-256 해시 hex 문자열로 변환한다.
 *
 * @param text - 해시할 평문 문자열
 * @returns 64자 hex 문자열
 *
 * @example
 * const hashed = await encryptSHA256('password123')
 */
export async function encryptSHA256(text: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

// ---------------------------------------------------------------------------
// [H5] gfn_dsIsDelete 대응 — Dataset 삭제 행 존재 여부 확인
// ---------------------------------------------------------------------------

/**
 * Dataset에 삭제된 행이 있는지 확인 — 원본 gfn_dsIsDelete 대응.
 *
 * @param dataset - NxDataset 인스턴스
 * @returns 삭제된 행이 1건 이상이면 true
 *
 * @example
 * if (dsIsDelete(dsList)) {
 *   // 삭제 확인 메시지 표시
 * }
 */
export function dsIsDelete(dataset: NxDataset): boolean {
  return dataset.getDeletedRowCount() > 0
}
