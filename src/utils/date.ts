// 날짜/시간 유틸리티 (Day.js 사용)
// 원본: cmmlib/Util.xjs - Date 관련 Util

import dayjs from 'dayjs'
import { isNull, isString } from './common'
import { getDigit } from './string'

// 날짜 여부 확인 (YYYYMM or YYYYMMDD)
export const isDate = (strDate: string): boolean => {
  if (isNull(strDate)) return false

  switch (strDate.length) {
    case 6:
      return isYM(strDate)
    case 8:
      return isYMD(strDate)
    default:
      return false
  }
}

// 년월일 유효성 (YYYYMMDD)
export const isYMD = (strDate: string): boolean => {
  const digits = getDigit(strDate)
  if (digits.length !== 8) return false

  const ym = strDate.substring(0, 6)
  if (!isYM(ym)) return false

  const day = Number(strDate.substring(6, 8))
  const lastDay = getMonthLastDate(strDate)
  if (day < 1 || day > lastDay) return false

  return true
}

// 년월 유효성 (YYYYMM)
export const isYM = (strDate: string): boolean => {
  const digits = getDigit(strDate)
  if (digits.length !== 6) return false

  const year = Number(strDate.substring(0, 4))
  const month = Number(strDate.substring(4, 6))

  if (year < 1000) return false
  if (month < 1 || month > 12) return false

  return true
}

// 시간 유효성 (HHMMSS)
export const isTime = (strTime: string): boolean => {
  if (strTime.length !== 6) return false
  if (!/^\d{6}$/.test(strTime)) return false

  const h = Number(strTime.substring(0, 2))
  const m = Number(strTime.substring(2, 4))
  const s = Number(strTime.substring(4, 6))

  return h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59
}

// 현재 일자/시간 (로컬 기준)
// sGubn: 'date' | 'time' | 'milli'
export const getDate = (sGubn: 'date' | 'time' | 'milli' = 'date'): string => {
  const now = dayjs()

  switch (sGubn) {
    case 'time':
      return now.format('YYYYMMDDHHmmss')
    case 'milli':
      return now.format('YYYYMMDDHHmmssSSS')
    default:
      return now.format('YYYYMMDD')
  }
}

// 해당 월의 마지막 날짜(8자리) 반환
export const getLastDate = (strDate?: string | null): string => {
  if (strDate == null) {
    return dayjs().endOf('month').format('YYYYMMDD')
  }
  const y = parseInt(strDate.substring(0, 4), 10)
  const m = parseInt(strDate.substring(4, 6), 10)
  // dayjs month는 0-based
  return dayjs(new Date(y, m - 1, 1))
    .endOf('month')
    .format('YYYYMMDD')
}

// 현재월 1일
export const getFirstDate = (strDate?: string | null): string => {
  if (strDate == null) {
    return dayjs().startOf('month').format('YYYYMMDD')
  }
  const y = parseInt(strDate.substring(0, 4), 10)
  const m = parseInt(strDate.substring(4, 6), 10) - 1
  return dayjs(new Date(y, m, 1)).format('YYYYMMDD')
}

// 요일 반환 (0=일 ~ 6=토)
export const getDay = (strDate: string): number => {
  if (isNull(strDate)) return -1
  return strToDate(strDate).day()
}

// 요일 문자열 반환
const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토']
export const getDayStr = (strDate: string): string => {
  const d = getDay(strDate)
  return d >= 0 ? DAY_NAMES[d] : ''
}

// 두 일자 간 차이 일수
export const getDiffDate = (startDate: string, endDate: string): number => {
  const end = strToDate(endDate)
  const start = strToDate(startDate)
  return end.diff(start, 'day')
}

// 두 일자 간 차이 월수
export const getDiffMonth = (startDate: string, endDate: string): number => {
  const startMon =
    parseInt(startDate.substring(0, 4), 10) * 12 + parseInt(startDate.substring(4, 6), 10)
  const endMon = parseInt(endDate.substring(0, 4), 10) * 12 + parseInt(endDate.substring(4, 6), 10)
  return endMon - startMon
}

// 날짜에 일수 더하기
export const addDate = (strDate: string, offset: number): string => {
  return strToDate(strDate).add(offset, 'day').format('YYYYMMDD')
}

// 해당 월의 마지막 일(숫자)
export const getMonthLastDate = (strDate: string): number => {
  const y = parseInt(strDate.substring(0, 4), 10)
  const m = parseInt(strDate.substring(4, 6), 10)
  return dayjs(new Date(y, m - 1, 1))
    .endOf('month')
    .date()
}

// 월 더하기
export const addMonth = (strDate: string, offset: number): string => {
  const d = strToDate(strDate)
  const originalDay = d.date()
  const lastDayOfOriginal = getMonthLastDate(strDate)

  let result = d.add(offset, 'month')

  // 원래 날짜가 해당월 마지막일이면 결과도 마지막일
  if (originalDay === lastDayOfOriginal) {
    result = result.endOf('month').startOf('day')
  }

  return result.format('YYYYMMDD')
}

// 문자열(YYYYMMDD) → dayjs 객체
export const strToDate = (strDate: string): dayjs.Dayjs => {
  const y = parseInt(strDate.substring(0, 4), 10)
  const m = parseInt(strDate.substring(4, 6), 10) - 1
  const d = parseInt(strDate.substring(6, 8) || '1', 10)
  return dayjs(new Date(y, m, d))
}

// Date → 문자열(YYYYMMDD)
export const dateToStr = (date: Date): string => dayjs(date).format('YYYYMMDD')

// 주차 반환 (YYYYWW)
export const getWeek = (strDate: string): string => {
  if (strDate.length !== 8 || !/^\d{8}$/.test(strDate)) return ''

  const year = parseInt(strDate.substring(0, 4), 10)
  const month = parseInt(strDate.substring(4, 6), 10)
  const day = parseInt(strDate.substring(6, 8), 10)

  const a = Math.floor((14 - month) / 12)
  const y = year + 4800 - a
  const m = month + 12 * a - 3
  const b = Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
  const J = day + Math.floor((153 * m + 2) / 5) + 365 * y + b - 32045
  const d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461
  const L = Math.floor(d4 / 1460)
  const d1 = ((d4 - L) % 365) + L
  const week = Math.floor(d1 / 7) + 1

  return String(year) + String(week).padStart(2, '0')
}

// 주민등록번호 → 생년월일 (YYYYMMDD)
export const getBirthDateBySSN = (ssn: string): string | null => {
  const cleaned = ssn.replace(/-/g, '')
  if (!/^\d+$/.test(cleaned) || cleaned.length < 6) return null

  const yymmdd = cleaned.substring(0, 6)
  let century: string

  if (cleaned.length > 6) {
    const genderFlag = Number(cleaned.charAt(6))
    switch (genderFlag) {
      case 1:
      case 2:
      case 5:
      case 6:
        century = '19'
        break
      case 3:
      case 4:
      case 7:
      case 8:
        century = '20'
        break
      case 9:
      case 0:
        century = '18'
        break
      default:
        return null
    }
  } else {
    const today = getDate()
    century = today.substring(2, 8) <= yymmdd ? '19' : '20'
  }

  const result = century + yymmdd
  return isDate(result) ? result : null
}

// 주민번호 뒷 첫째자리로 세기 반환
export const getBirthYear = (ssn: string): string => {
  const s = String(ssn)
  if (s.length !== 13) return 'N'
  if (!/^\d{6}\d{7}$/.test(s)) return 'N'

  const flag = s.charAt(6)
  if ('1256'.includes(flag)) return '19'
  if ('3478'.includes(flag)) return '20'
  return 'N'
}

// 만나이 계산
export const getAge = (birthYmd: string, stdYmd?: string): number => {
  const std = stdYmd || getDate()

  if (!isDate(birthYmd) || !isDate(std)) return -1

  const yDiff = Number(std.substring(0, 4)) - Number(birthYmd.substring(0, 4))
  const mdDiff = Number(std.substring(4, 8)) - Number(birthYmd.substring(4, 8))

  return mdDiff < 0 ? yDiff - 1 : yDiff
}

// 날짜 포맷 변환 (YYYYMMDD → YYYY-MM-DD)
export const getDateFormat = (strDate: string | null | undefined, separator = '-'): string => {
  if (isNull(strDate)) return ''
  const s = String(strDate)
  if (s.length < 8) return s
  return s.substring(0, 4) + separator + s.substring(4, 6) + separator + s.substring(6, 8)
}

// 시간 포맷 변환 (HHMMSS → HH:MM:SS)
export const getTimeFormat = (strTime: string | null | undefined, separator = ':'): string => {
  if (isNull(strTime)) return ''
  const s = String(strTime)
  if (s.length < 6) return s
  return s.substring(0, 2) + separator + s.substring(2, 4) + separator + s.substring(4, 6)
}

// 날짜+시간 포맷 변환 (YYYYMMDDHHMM → YYYY-MM-DD HH:MM)
export const getDateTimeFormat = (strDate: string | null | undefined, separator = '-'): string => {
  if (isNull(strDate)) return ''
  const s = String(strDate)
  if (s.length < 12) return s
  return (
    s.substring(0, 4) +
    separator +
    s.substring(4, 6) +
    separator +
    s.substring(6, 8) +
    ' ' +
    s.substring(8, 10) +
    ':' +
    s.substring(10, 12)
  )
}

// 해당주 일요일
export const getWeekSunDay = (strDate: string): string => {
  const day = getDay(strDate)
  return addDate(strDate, -day)
}

// 해당주 토요일
export const getWeekSatDay = (strDate: string): string => {
  const day = getDay(strDate)
  return addDate(strDate, 6 - day)
}

// 일요일 여부
export const isSunday = (strDate: string): boolean => getDay(strDate) === 0

// 토요일 여부
export const isSaturday = (strDate: string): boolean => getDay(strDate) === 6

// 해당 연도 주차 반환 (숫자)
export const getWeekOfYear = (date: string | Date): number => {
  const d = isString(date) ? strToDate(date as string).toDate() : (date as Date)

  const onejan = new Date(d.getFullYear(), 0, 1)
  return Math.ceil(((d.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7)
}

// 법정공휴일 목록 (양력 날짜 배열)
export const getHolidays = (year: number): string[] => {
  const holidays: string[] = []

  // 음력 기반 공휴일
  const lunarNYPrev = lunarToSolar(`${year - 1}1230`, false)
  if (lunarNYPrev) {
    holidays.push(lunarNYPrev)
    holidays.push(addDate(lunarNYPrev, 1))
    holidays.push(addDate(lunarNYPrev, 2))
  }

  const buddhaBday = lunarToSolar(`${year}0408`, false)
  if (buddhaBday) holidays.push(buddhaBday)

  const chuseokPrev = lunarToSolar(`${year}0814`, false)
  if (chuseokPrev) {
    holidays.push(chuseokPrev)
    holidays.push(addDate(chuseokPrev, 1))
    holidays.push(addDate(chuseokPrev, 2))
  }

  // 양력 공휴일
  holidays.push(`${year}0101`) // 신정
  holidays.push(`${year}0301`) // 삼일절
  holidays.push(`${year}0505`) // 어린이날
  holidays.push(`${year}0606`) // 현충일
  holidays.push(`${year}0815`) // 광복절
  holidays.push(`${year}1003`) // 개천절
  holidays.push(`${year}1009`) // 한글날
  holidays.push(`${year}1225`) // 성탄절

  return holidays.sort()
}

// 양력 → 음력 변환 (1841~2043)
// 반환: Flag(0=평달, 1=윤달) + YYYYMMDD (9자리)
export const solarToLunar = (strDate: string): string | null => {
  const base = getSolarBase()
  const sMd = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const nY = parseInt(strDate.substring(0, 4), 10)
  const nM = parseInt(strDate.substring(4, 6), 10)
  const nD = parseInt(strDate.substring(6, 8), 10)

  if (nY < 1841 || nY > 2043) return null

  sMd[1] = 28
  if (nY % 4 === 0 && (nY % 100 !== 0 || nY % 400 === 0)) {
    sMd[1] = 29
  }

  const nTd1 = 672069
  let nTd2 =
    (nY - 1) * 365 +
    Math.floor((nY - 1) / 4) -
    Math.floor((nY - 1) / 100) +
    Math.floor((nY - 1) / 400)

  for (let i = 0; i <= nM - 2; i++) {
    nTd2 += sMd[i]
  }
  nTd2 += nD

  let nTd = nTd2 - nTd1 + 1

  const arrDt: number[] = []
  for (let i = 0; i <= nY - 1841; i++) {
    arrDt[i] = 0
    for (let j = 0; j <= 11; j++) {
      const v = base[i * 12 + j]
      switch (v) {
        case 1:
          arrDt[i] += 29
          break
        case 2:
          arrDt[i] += 30
          break
        case 3:
          arrDt[i] += 58
          break
        case 4:
          arrDt[i] += 59
          break
        case 5:
          arrDt[i] += 59
          break
        case 6:
          arrDt[i] += 60
          break
      }
    }
  }

  let nLy = 0
  while (nTd > arrDt[nLy]) {
    nTd -= arrDt[nLy]
    nLy++
  }

  let nLm = 0
  let sLyoon = '0'

  while (true) {
    const bv = base[nLy * 12 + nLm]
    if (bv <= 2) {
      const nTemp = bv + 28
      if (nTd > nTemp) {
        nTd -= nTemp
        nLm++
      } else {
        break
      }
    } else {
      let m1: number, m2: number
      switch (bv) {
        case 3:
          m1 = 29
          m2 = 29
          break
        case 4:
          m1 = 29
          m2 = 30
          break
        case 5:
          m1 = 30
          m2 = 29
          break
        case 6:
          m1 = 30
          m2 = 30
          break
        default:
          m1 = 29
          m2 = 29
      }

      if (nTd > m1) {
        nTd -= m1
        if (nTd > m2) {
          nTd -= m2
          nLm++
        } else {
          sLyoon = '1'
        }
      } else {
        break
      }
    }
  }

  const finalY = nLy + 1841
  const finalM = nLm + 1
  const finalD = nTd

  return sLyoon + String(finalY) + String(finalM).padStart(2, '0') + String(finalD).padStart(2, '0')
}

// 음력 → 양력 변환 (1841~2043)
export const lunarToSolar = (strDate: string, leapMonth: boolean): string | null => {
  const base = getSolarBase()
  const sMd = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const nLy = parseInt(strDate.substring(0, 4), 10)
  const nLm = parseInt(strDate.substring(4, 6), 10)
  const nLd = parseInt(strDate.substring(6, 8), 10)

  if (nLy < 1841 || nLy > 2043) return null

  sMd[1] = 28
  if (nLy % 4 === 0 && (nLy % 100 !== 0 || nLy % 400 === 0)) {
    sMd[1] = 29
  }

  const nY1 = nLy - 1841
  const nM1 = nLm - 1

  let nTd = 0

  for (let i = 0; i < nY1; i++) {
    for (let j = 0; j <= 11; j++) {
      const v = base[i * 12 + j]
      switch (v) {
        case 1:
          nTd += 29
          break
        case 2:
          nTd += 30
          break
        case 3:
          nTd += 58
          break
        case 4:
          nTd += 59
          break
        case 5:
          nTd += 59
          break
        case 6:
          nTd += 60
          break
      }
    }
  }

  for (let j = 0; j < nM1; j++) {
    const v = base[nY1 * 12 + j]
    switch (v) {
      case 1:
        nTd += 29
        break
      case 2:
        nTd += 30
        break
      case 3:
        nTd += 58
        break
      case 4:
        nTd += 59
        break
      case 5:
        nTd += 59
        break
      case 6:
        nTd += 60
        break
    }
  }

  nTd = nTd + nLd + 22

  if (leapMonth) {
    const bv = base[nY1 * 12 + nM1]
    switch (bv) {
      case 3:
        nTd += 29
        break
      case 4:
        nTd += 30
        break
      case 5:
        nTd += 29
        break
      case 6:
        nTd += 30
        break
    }
  }

  let sY = 1840
  let nY2: number

  while (true) {
    sY++
    let leap = 0
    if (sY % 4 === 0 && (sY % 100 !== 0 || sY % 400 === 0)) {
      leap = 1
    }
    nY2 = leap === 1 ? 366 : 365
    if (nTd <= nY2) break
    nTd -= nY2
  }

  const arrMd = [...sMd]
  arrMd[1] = nY2 - 337

  let sM = 0
  while (true) {
    sM++
    if (nTd <= arrMd[sM - 1]) break
    nTd -= arrMd[sM - 1]
  }

  return String(sY) + String(sM).padStart(2, '0') + String(nTd).padStart(2, '0')
}

// 음력 기준 정보 (1841~2043)
const getSolarBase = (): number[] => {
  const s =
    '1,2,4,1,1,2,1,2,1,2,2,1,' +
    '2,2,1,2,1,1,2,1,2,1,2,1,' +
    '2,2,2,1,2,1,4,1,2,1,2,1,' +
    '2,2,1,2,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,2,1,2,1,2,1,2,1,' +
    '2,1,2,1,5,2,1,2,2,1,2,1,' +
    '2,1,1,2,1,2,1,2,2,2,1,2,' +
    '1,2,1,1,2,1,2,1,2,2,2,1,' +
    '2,1,2,3,2,1,2,1,2,1,2,2,' +
    '2,1,2,1,1,2,1,1,2,2,1,2,' +
    '2,2,1,2,1,1,2,1,2,1,5,2,' +
    '2,1,2,2,1,1,2,1,2,1,1,2,' +
    '2,1,2,2,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,1,2,5,2,1,2,1,2,' +
    '1,1,2,1,2,2,1,2,2,1,2,1,' +
    '2,1,1,2,1,2,1,2,2,2,1,2,' +
    '1,2,1,1,5,2,1,2,1,2,2,2,' +
    '1,2,1,1,2,1,1,2,2,1,2,2,' +
    '2,1,2,1,1,2,1,1,2,1,2,2,' +
    '2,1,6,1,1,2,1,1,2,1,2,2,' +
    '1,2,2,1,2,1,2,1,2,1,1,2,' +
    '2,1,2,1,2,2,1,2,2,3,1,2,' +
    '1,2,2,1,2,1,2,2,1,2,1,2,' +
    '1,1,2,1,2,1,2,2,1,2,2,1,' +
    '2,1,1,2,4,1,2,2,1,2,2,1,' +
    '2,1,1,2,1,1,2,2,1,2,2,2,' +
    '1,2,1,1,2,1,1,2,1,2,2,2,' +
    '1,2,2,3,2,1,1,2,1,2,2,1,' +
    '2,2,2,1,1,2,1,1,2,1,2,1,' +
    '2,2,2,1,2,1,2,1,1,5,2,1,' +
    '2,2,1,2,2,1,2,1,2,1,1,2,' +
    '1,2,1,2,2,1,2,1,2,2,1,2,' +
    '1,1,2,1,2,4,2,1,2,2,1,2,' +
    '1,1,2,1,2,1,2,1,2,2,2,1,' +
    '2,1,1,2,1,1,2,1,2,2,2,1,' +
    '2,2,1,1,5,1,2,1,2,2,1,2,' +
    '2,2,1,1,2,1,1,2,1,2,1,2,' +
    '2,2,1,2,1,2,1,1,2,1,2,1,' +
    '2,2,4,2,1,2,1,1,2,1,2,1,' +
    '2,1,2,2,1,2,2,1,2,1,1,2,' +
    '1,2,1,2,1,2,5,2,2,1,2,1,' +
    '1,2,1,2,1,2,1,2,2,1,2,2,' +
    '1,1,2,1,1,2,1,2,2,2,1,2,' +
    '2,1,1,2,3,2,1,2,2,1,2,2,' +
    '2,1,1,2,1,1,2,1,2,1,2,2,' +
    '2,1,2,1,2,1,1,2,1,2,1,2,' +
    '2,2,1,5,2,1,1,2,1,2,1,2,' +
    '2,1,2,2,1,2,1,1,2,1,2,1,' +
    '2,1,2,2,1,2,1,2,1,2,1,2,' +
    '1,5,2,1,2,2,1,2,1,2,1,2,' +
    '1,2,1,2,1,2,1,2,2,1,2,2,' +
    '1,1,2,1,1,5,2,2,1,2,2,2,' +
    '1,1,2,1,1,2,1,2,1,2,2,2,' +
    '1,2,1,2,1,1,2,1,2,1,2,2,' +
    '2,1,2,1,5,1,2,1,2,1,2,1,' +
    '2,2,2,1,2,1,1,2,1,2,1,2,' +
    '1,2,2,1,2,1,2,1,2,1,2,1,' +
    '2,1,5,2,2,1,2,1,2,1,2,1,' +
    '2,1,2,1,2,1,2,2,1,2,1,2,' +
    '1,2,1,1,2,1,2,5,2,2,1,2,' +
    '1,2,1,1,2,1,2,1,2,2,2,1,' +
    '2,1,2,1,1,2,1,2,1,2,2,2,' +
    '1,2,1,2,3,2,1,1,2,2,1,2,' +
    '2,2,1,2,1,1,2,1,1,2,2,1,' +
    '2,2,1,2,2,1,1,2,1,2,1,2,' +
    '1,2,2,4,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,1,2,2,1,2,1,2,1,' +
    '2,1,1,2,2,1,2,1,2,2,1,2,' +
    '1,5,1,2,1,2,1,2,2,2,1,2,' +
    '1,2,1,1,2,1,2,1,2,2,2,1,' +
    '2,1,2,1,1,5,1,2,2,1,2,2,' +
    '2,1,2,1,1,2,1,1,2,2,1,2,' +
    '2,2,1,2,1,1,2,1,1,2,1,2,' +
    '2,2,1,2,5,1,2,1,2,1,1,2,' +
    '2,1,2,2,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,1,2,2,1,2,1,2,1,' +
    '2,3,2,1,2,2,1,2,2,1,2,1,' +
    '2,1,1,2,1,2,1,2,2,2,1,2,' +
    '1,2,1,1,2,1,5,2,2,1,2,2,' +
    '1,2,1,1,2,1,1,2,2,1,2,2,' +
    '2,1,2,1,1,2,1,1,2,1,2,2,' +
    '2,1,2,2,3,2,1,1,2,1,2,2,' +
    '1,2,2,1,2,1,2,1,2,1,1,2,' +
    '2,1,2,1,2,2,1,2,1,2,1,1,' +
    '2,1,2,5,2,1,2,2,1,2,1,2,' +
    '1,1,2,1,2,1,2,2,1,2,2,1,' +
    '2,1,1,2,1,2,1,2,2,1,2,2,' +
    '1,5,1,2,1,1,2,2,1,2,2,2,' +
    '1,2,1,1,2,1,1,2,1,2,2,2,' +
    '1,2,2,1,1,5,1,2,1,2,2,1,' +
    '2,2,2,1,1,2,1,1,2,1,2,1,' +
    '2,2,2,1,2,1,2,1,1,2,1,2,' +
    '1,2,2,1,6,1,2,1,2,1,1,2,' +
    '1,2,1,2,2,1,2,2,1,2,1,2,' +
    '1,1,2,1,2,1,2,2,1,2,2,1,' +
    '2,1,4,1,2,1,2,1,2,2,2,1,' +
    '2,1,1,2,1,1,2,1,2,2,2,1,' +
    '2,2,1,1,2,1,4,1,2,2,1,2,' +
    '2,2,1,1,2,1,1,2,1,2,1,2,' +
    '2,2,1,2,1,2,1,1,2,1,2,1,' +
    '2,2,1,2,2,4,1,1,2,1,2,1,' +
    '2,1,2,2,1,2,2,1,2,1,1,2,' +
    '1,2,1,2,1,2,2,1,2,2,1,2,' +
    '1,1,2,4,1,2,1,2,2,1,2,2,' +
    '1,1,2,1,1,2,1,2,2,2,1,2,' +
    '2,1,1,2,1,1,2,1,2,2,1,2,' +
    '2,5,1,2,1,1,2,1,2,1,2,2,' +
    '2,1,2,1,2,1,1,2,1,2,1,2,' +
    '2,2,1,2,1,2,3,2,1,2,1,2,' +
    '2,1,2,2,1,2,1,1,2,1,2,1,' +
    '2,1,2,2,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,4,2,1,2,1,2,1,2,' +
    '1,2,1,1,2,2,1,2,2,1,2,2,' +
    '1,1,2,1,1,2,1,2,2,1,2,2,' +
    '2,1,4,1,1,2,1,2,1,2,2,2,' +
    '1,2,1,2,1,1,2,1,2,1,2,2,' +
    '2,1,2,1,2,1,1,5,2,1,2,2,' +
    '1,2,2,1,2,1,1,2,1,2,1,2,' +
    '1,2,2,1,2,1,2,1,2,1,2,1,' +
    '2,1,2,1,2,5,2,1,2,1,2,1,' +
    '2,1,2,1,2,1,2,2,1,2,1,2,' +
    '1,2,1,1,2,1,2,2,1,2,2,1,' +
    '2,1,2,3,2,1,2,1,2,2,2,1,' +
    '2,1,2,1,1,2,1,2,1,2,2,2,' +
    '1,2,1,2,1,1,2,1,1,2,2,1,' +
    '2,2,5,2,1,1,2,1,1,2,2,1,' +
    '2,2,1,2,2,1,1,2,1,2,1,2,' +
    '1,2,2,1,2,1,5,2,1,2,1,2,' +
    '1,2,1,2,1,2,2,1,2,1,2,1,' +
    '2,1,1,2,2,1,2,1,2,2,1,2,' +
    '1,2,1,1,5,2,1,2,2,2,1,2,' +
    '1,2,1,1,2,1,2,1,2,2,2,1,' +
    '2,1,2,1,1,2,1,1,2,2,2,1,' +
    '2,2,1,5,1,2,1,1,2,2,1,2,' +
    '2,2,1,2,1,1,2,1,1,2,1,2,' +
    '2,2,1,2,1,2,1,5,2,1,1,2,' +
    '2,1,2,2,1,2,1,2,1,2,1,1,' +
    '2,2,1,2,1,2,2,1,2,1,2,1,' +
    '2,1,1,2,1,6,1,2,2,1,2,1,' +
    '2,1,1,2,1,2,1,2,2,1,2,2,' +
    '1,2,1,1,2,1,1,2,2,1,2,2,' +
    '2,1,2,3,2,1,1,2,2,1,2,2,' +
    '2,1,2,1,1,2,1,1,2,1,2,2,' +
    '2,1,2,2,1,1,2,1,1,5,2,2,' +
    '1,2,2,1,2,1,2,1,1,2,1,2,' +
    '1,2,2,1,2,2,1,2,1,2,1,1,' +
    '2,1,2,2,1,5,2,2,1,2,1,2,' +
    '1,1,2,1,2,1,2,2,1,2,2,1,' +
    '2,1,1,2,1,2,1,2,2,1,2,2,' +
    '1,2,1,1,5,1,2,1,2,2,2,2,' +
    '1,2,1,1,2,1,1,2,1,2,2,2,' +
    '1,2,2,1,1,2,1,1,2,1,2,2,' +
    '1,2,5,2,1,2,1,1,2,1,2,1,' +
    '2,2,2,1,2,1,2,1,1,2,1,2,' +
    '1,2,2,1,2,2,1,5,2,1,1,2,' +
    '1,2,1,2,2,1,2,1,2,2,1,2,' +
    '1,1,2,1,2,1,2,2,1,2,2,1,' +
    '2,1,1,2,3,2,2,1,2,2,2,1,' +
    '2,1,1,2,1,1,2,1,2,2,2,1,' +
    '2,2,1,1,2,1,1,2,1,2,2,1,' +
    '2,2,2,3,2,1,1,2,1,2,1,2,' +
    '2,2,1,2,1,2,1,1,2,1,2,1,' +
    '2,2,1,2,2,1,2,1,1,2,1,2,' +
    '1,5,2,2,1,2,1,2,2,1,1,2,' +
    '1,2,1,2,1,2,2,1,2,2,1,2,' +
    '1,1,2,1,2,1,5,2,2,1,2,2,' +
    '1,1,2,1,1,2,1,2,2,2,1,2,' +
    '2,1,1,2,1,1,2,1,2,2,1,2,' +
    '2,2,1,1,5,1,2,1,2,1,2,2,' +
    '2,1,2,1,2,1,1,2,1,2,1,2,' +
    '2,1,2,2,1,2,1,1,2,1,2,1,' +
    '2,1,6,2,1,2,1,1,2,1,2,1,' +
    '2,1,2,2,1,2,1,2,1,2,1,2,' +
    '1,2,1,2,1,2,1,2,5,2,1,2,' +
    '1,2,1,1,2,1,2,2,2,1,2,2,' +
    '1,1,2,1,1,2,1,2,2,1,2,2,' +
    '2,1,1,2,3,2,1,2,1,2,2,2,' +
    '1,2,1,2,1,1,2,1,2,1,2,2,' +
    '2,1,2,1,2,1,1,2,1,2,1,2,' +
    '2,1,2,5,2,1,1,2,1,2,1,2,' +
    '1,2,2,1,2,1,2,1,2,1,2,1,' +
    '2,1,2,1,2,2,1,2,1,2,1,2,' +
    '1,5,2,1,2,1,2,2,1,2,1,2,' +
    '1,2,1,1,2,1,2,2,1,2,2,1,' +
    '2,1,2,1,1,5,2,1,2,2,2,1,' +
    '2,1,2,1,1,2,1,2,1,2,2,2,' +
    '1,2,1,2,1,1,2,1,1,2,2,2,' +
    '1,2,2,1,5,1,2,1,1,2,2,1,' +
    '2,2,1,2,2,1,1,2,1,1,2,2,' +
    '1,2,1,2,2,1,2,1,2,1,2,1,' +
    '2,1,5,2,1,2,2,1,2,1,2,1,' +
    '2,1,1,2,1,2,2,1,2,2,1,2,' +
    '1,2,1,1,2,1,5,2,2,2,1,2,' +
    '1,2,1,1,2,1,2,1,2,2,2,1,' +
    '2,1,2,1,1,2,1,1,2,2,1,2,' +
    '2,2,1,2,1,4,1,1,2,1,2,2,' +
    '2,2,1,2,1,1,2,1,1,2,1,2,' +
    '2,2,1,2,1,2,1,2,1,1,2,1,' +
    '2,2,1,2,5,2,1,2,1,2,1,1,' +
    '2,1,2,2,1,2,2,1,2,1,2,1,' +
    '2,1,1,2,1,2,2,1,2,2,1,2,' +
    '1,5,1,2,1,2,1,2,2,2,1,2,' +
    '1,2,1,1,2,1,1,2,2,1,2,2'

  return s.split(',').map(Number)
}

// 날짜 마스크 포맷 (원본: gfn_getDateFormatString)
// 간소화된 버전 - dayjs format으로 대체 권장
const MONTH_NAMES = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]
const WEEK_NAMES = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
const WEEK_SHORT_NAMES = ['일', '월', '화', '수', '목', '금', '토']

export const getDateFormatString = (date: Date, mask: string): string => {
  const d = dayjs(date)

  // 주요 토큰만 dayjs format으로 매핑
  const result = mask
    .replace('yyyy', d.format('YYYY'))
    .replace('yy', d.format('YY'))
    .replace('MMMM', MONTH_NAMES[d.month()])
    .replace('MMM', MONTH_NAMES[d.month()])
    .replace('MM', d.format('MM'))
    .replace('dddd', WEEK_NAMES[d.day()])
    .replace('ddd', WEEK_SHORT_NAMES[d.day()])
    .replace('dd', d.format('DD'))
    .replace('HH', d.format('HH'))
    .replace('hh', d.format('hh'))
    .replace('mm', d.format('mm'))
    .replace('ss', d.format('ss'))
    .replace('sss', d.format('SSS'))
    .replace('tt', d.hour() < 12 ? '오전' : '오후')

  return result
}
