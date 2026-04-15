// 문자열 조작 유틸리티
// 원본: cmmlib/Util.xjs - String 관련

import { isNull } from './common'

// 문자열 양쪽 공백 제거
export const trim = (value: unknown): string => {
  if (isNull(value)) return ''
  return String(value).trim()
}

// 문자열 내 모든 공백 제거
export const trimAll = (value: unknown): string => {
  if (value == null) return ''
  return String(value).replace(/\s/g, '')
}

// 문자열 좌측부터 지정한 길이만큼 반환
export const left = (str: string, size: number): string => String(str).substring(0, size)

// 문자열 우측부터 지정한 길이만큼 반환
export const right = (str: string, size: number): string => {
  if (isNull(str) || isNull(size)) return ''
  const s = String(str)
  if (s.length < size) return s
  return s.substring(s.length - size)
}

// 문자열 길이 반환
export const length = (value: unknown): number => String(value).length

// 바이트 길이 계산 (한글/한자 = 2바이트, 영문/숫자/특수문자 = 1바이트)
export const lengthByte = (value: string): number => {
  if (isNull(value)) return -1
  let len = 0
  for (let i = 0; i < value.length; i++) {
    len += value.charCodeAt(i) > 127 ? 2 : 1
  }
  return len
}

// UTF-8 바이트 길이 계산
export const lengthByteUTF8 = (value: string): number => {
  if (isNull(value)) return -1
  let len = 0
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i)
    if (code <= 0x7f) {
      len += 1
    } else if (code <= 0x7ff) {
      len += 2
    } else if (code >= 0xd800 && code <= 0xdfff) {
      // surrogate pair
      len += 4
      i++
    } else {
      len += 3
    }
  }
  return len
}

// 역방향 문자열 검색
export const posReverse = (str: string, find: string, start?: number): number => {
  if (isNull(str) || isNull(find)) return -1

  const s = String(str)
  const startPos = start ?? s.length - 1

  for (let pos = startPos; pos >= 0; pos--) {
    if (s.substring(pos, pos + find.length) === find) {
      return pos
    }
  }
  return -1
}

// 숫자에 콤마 추가 (소수점 반올림 지원)
export const appendComma = (value: number | string | null, decimals = 0): string => {
  if (value == null) return ''

  let num = parseFloat(String(value))
  num = Number(num.toFixed(decimals))

  const strNum = String(num)
  const parts = strNum.split('.')
  const intPart = parts[0]

  let formatted = ''
  let count = 0

  for (let i = intPart.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0 && intPart[i] !== '-') {
      formatted = `${intPart[i]},${formatted}`
    } else {
      formatted = `${intPart[i]}${formatted}`
    }
    count++
  }

  if (parts.length > 1) {
    formatted += `.${parts[1]}`
  }

  return formatted
}

// 콤마 제거
export const removeComma = (value: string): string => value.replace(/,/g, '')

// 숫자만 추출
export const getDigit = (value: string): string => value.replace(/\D/g, '')

// 특수문자 제거
export const removeSpecialChar = (value: string): string =>
  value.replace(/[~!@#$%^&*\-+./=_`{|}()\\?<>]/g, '')

// HTML 태그 제거
export const removeHtmlTag = (html: string, tag?: string): string => {
  if (isNull(html)) return ''
  let s = html

  if (isNull(tag)) {
    s = s.replace(/<br\s*\/?>/gi, '\n')
    s = s.replace(/<\/?[0-9a-zA-Z]+(?:\s[0-9a-zA-Z]*=[^>]*)?\s*\/?>/g, '')
  } else if (tag!.toUpperCase() === '<BR>') {
    s = s.replace(/<br\s*\/?>/gi, '\n')
  } else {
    const re = new RegExp(tag!, 'gi')
    s = s.replace(re, '')
  }

  return s
}

// 좌측 패딩
export const lpad = (value: unknown, totalLength: number, padChar = ' '): string => {
  const s = String(value ?? '')
  if (isNull(s)) return ''
  return s.padStart(totalLength, padChar)
}

// 우측 패딩
export const rpad = (value: unknown, totalLength: number, padChar = ' '): string => {
  const s = String(value ?? '')
  if (isNull(s) && isNull(padChar)) return ''
  return s.padEnd(totalLength, padChar)
}

// 대문자 변환
export const toUpper = (value: unknown): string => {
  if (isNull(value)) return ''
  return String(value).toUpperCase()
}

// 소문자 변환
export const toLower = (value: unknown): string => {
  if (isNull(value)) return ''
  return String(value).toLowerCase()
}

// 배열을 구분자로 연결
export const arrayToString = (arr: unknown[], separator: string): string => {
  if (isNull(arr) || isNull(separator)) return ''
  return arr.join(separator)
}
