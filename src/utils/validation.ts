// 포맷 검증 순수 함수 + Zod 스키마
// 원본: cmmlib/Validation.xjs - gfn_isDigit ~ gfn_isPhone, gfn_getKoreanTarget

import { z } from 'zod'
import { isNull } from './common'
import { removeSpecialChar, trimAll } from './string'

// ---------------------------------------------------------------------------
// 포맷 검증 순수 함수
// ---------------------------------------------------------------------------

/**
 * 숫자 체크 (부호, 소수점 허용)
 * 원본: gfn_isDigit
 */
export const isDigit = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value)
  let pointCnt = 0

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i)
    if (i === 0 && (c === '+' || c === '-')) continue
    if (c >= '0' && c <= '9') continue
    if (c === '.') {
      pointCnt++
      if (pointCnt > 1) return false
    } else {
      return false
    }
  }
  return true
}

/**
 * 한글만으로 구성되어 있는지 확인
 * 원본: gfn_isKoreanChar
 */
export const isKoreanChar = (value: string): boolean => {
  if (isNull(value)) return false

  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i)
    if (!((code > 0x3130 && code < 0x318f) || (code >= 0xac00 && code <= 0xd7a3))) {
      return false
    }
  }
  return true
}

/**
 * 특수문자 포함 여부
 * 원본: gfn_isSpecialChar
 */
export const isSpecialChar = (value: string): boolean => {
  if (isNull(value)) return false
  return /\W|\s/g.test(value)
}

// ---------------------------------------------------------------------------
// 한글 초성/중성/종성 분해 (조사 처리용)
// 원본: String.prototype.toKorChars + gfn_getKoreanTarget
// ---------------------------------------------------------------------------

const CHO = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
]
const JUNG = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
]
const JONG = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
]

/**
 * 한글 문자를 초성/중성/종성으로 분해
 * 원본: String.prototype.toKorChars
 */
export const toKorChars = (str: string): string[] => {
  const chars: string[] = []

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code === 32) continue

    if (code < 0xac00 || code > 0xd7a3) {
      chars.push(str.charAt(i))
      continue
    }

    const offset = code - 0xac00
    const jong = offset % 28
    const jung = ((offset - jong) / 28) % 21
    const cho = ((offset - jong) / 28 - jung) / 21

    chars.push(CHO[cho], JUNG[jung])
    if (JONG[jong] !== '') chars.push(JONG[jong])
  }

  return chars
}

/**
 * 한글 조사 자동 선택 (은/는, 이/가, 을/를)
 * 원본: gfn_getKoreanTarget
 */
export const getKoreanPostposition = (
  name: string,
  option: '은(는)' | '이(가)' | '을(를)',
): string => {
  if (isNull(name) || name.length === 0) return name

  const lastChar = name[name.length - 1]
  const hasJongseong = toKorChars(lastChar).length >= 3

  switch (option) {
    case '은(는)':
      return name + (hasJongseong ? '은' : '는')
    case '이(가)':
      return name + (hasJongseong ? '이' : '가')
    case '을(를)':
      return name + (hasJongseong ? '을' : '를')
    default:
      return name
  }
}

// ---------------------------------------------------------------------------
// 주민등록번호 헬퍼
// ---------------------------------------------------------------------------

/**
 * 주민번호 7번째 자리로 출생 세기 판별
 */
const getBirthCentury = (ssnChar7: string): string => {
  switch (ssnChar7) {
    case '1':
    case '2':
    case '5':
    case '6':
      return '19'
    case '3':
    case '4':
    case '7':
    case '8':
      return '20'
    case '9':
    case '0':
      return '18'
    default:
      return '19'
  }
}

/**
 * 주민등록번호 유효성 검증 (체크섬 포함)
 * 원본: gfn_isSSN
 */
// NOTE: 원본 gfn_isSSN은 하이픈 없는 13자리만 허용하나, 편의를 위해 하이픈 자동 제거 추가.
export const isSSN = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value).replace(/-/g, '')
  if (s.length !== 13 || !/^\d{13}$/.test(s)) return false

  // 생년월일 유효성
  const century = getBirthCentury(s.charAt(6))
  const year = Number(century + s.substring(0, 2))
  const month = Number(s.substring(2, 4)) - 1
  const day = Number(s.substring(4, 6))
  const birth = new Date(year, month, day)

  if (birth.getFullYear() !== year || birth.getMonth() !== month || birth.getDate() !== day) {
    return false
  }

  // 체크섬 검증
  const buf: number[] = []
  for (let i = 0; i < 13; i++) buf[i] = Number.parseInt(s.charAt(i), 10)

  const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
  let sum = 0
  for (let k = 0; k < 12; k++) sum += buf[k] * multipliers[k]

  return (11 - (sum % 11)) % 10 === buf[12]
}

/**
 * 외국인 등록번호 유효성 검증
 * 원본: gfn_isFrnrIdNo
 */
export const isForeignerIdNo = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value).replace(/-/g, '')
  if (s.length !== 13 || !/^\d{13}$/.test(s)) return false

  const month = Number(s.substring(2, 4))
  const day = Number(s.substring(4, 6))
  if (month < 1 || month > 12) return false
  if (day < 1 || day > 31) return false

  const buf: number[] = []
  for (let i = 0; i < 13; i++) buf[i] = Number(s.charAt(i))

  // 외국인 등록번호 특수 조건
  if (buf[11] < 6) return false

  const odd = buf[7] * 10 + buf[8]
  if (odd % 2 !== 0) return false

  const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
  let sum = 0
  for (let j = 0; j < 12; j++) sum += buf[j] * multipliers[j]

  sum = 11 - (sum % 11)
  if (sum >= 10) sum -= 10
  sum += 2
  if (sum >= 10) sum -= 10

  return buf[12] === sum
}

/**
 * 사업자등록번호 유효성 검증 (체크섬 포함)
 * 원본: gfn_isBzIdNo
 */
export const isBizRegNo = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value).replace(/-/g, '')
  if (s.length !== 10 || !/^\d{10}$/.test(s)) return false

  const checkID = [1, 3, 7, 1, 3, 7, 1, 3, 5, 1]
  let chkSum = 0

  for (let i = 0; i <= 7; i++) {
    chkSum += checkID[i] * Number(s.charAt(i))
  }

  const c2 = `0${checkID[8] * Number(s.charAt(8))}`
  const c2Str = c2.substring(c2.length - 2)
  chkSum += Math.floor(Number(c2Str.charAt(0))) + Math.floor(Number(c2Str.charAt(1)))

  const remainder = (10 - (chkSum % 10)) % 10

  return Math.floor(Number(s.charAt(9))) === remainder
}

/**
 * 법인등록번호 유효성 검증 (체크섬 포함)
 * 원본: gfn_isFirmIdNo
 */
export const isCorpRegNo = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value).replace(/-/g, '')
  if (s.length !== 13 || !/^\d{13}$/.test(s)) return false

  const buf: number[] = []
  for (let i = 0; i < 13; i++) buf[i] = Number(s.charAt(i))

  const multipliers = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
  let sum = 0
  for (let j = 0; j < 12; j++) sum += buf[j] * multipliers[j]

  sum = (10 - (sum % 10)) % 10

  return buf[12] === sum
}

/**
 * 신용카드번호 유효성 검증 (Luhn 알고리즘)
 * 원본: gfn_isCardNo
 */
export const isCardNo = (value: string): boolean => {
  if (isNull(value)) return false

  const s = String(value).replace(/[\s-]/g, '')
  if (s.length < 13 || s.length > 19 || !/^\d+$/.test(s)) return false

  const buf: number[] = []
  for (let i = 0; i < s.length; i++) buf[i] = Number(s.charAt(i))

  let sum = 0
  for (let i = buf.length - 1, j = 0; i >= 0; i--, j++) {
    let temp = buf[i] * ((j % 2) + 1)
    if (temp >= 10) temp -= 9
    sum += temp
  }

  return sum % 10 === 0
}

/**
 * 이메일 형식 검증
 * 원본: gfn_isEmail
 */
// NOTE: 원본 gfn_isEmail의 RFC 5322 엄격 패턴을 간소화함. 실무상 더 합리적인 패턴 사용.
export const isEmail = (value: string): boolean => {
  if (isNull(value)) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim())
}

/**
 * 휴대폰번호 형식 검증
 * 원본: gfn_isCellPhone
 */
// NOTE: 원본 gfn_isCellPhone 정규식의 옵션 그룹(?) 버그를 수정하여 올바른 11자리 체크로 변경.
export const isCellPhone = (value: string): boolean => {
  if (isNull(value)) return false

  const s = removeSpecialChar(String(value).trim())
  return /^01[016789]\d{3,4}\d{4}$/.test(s)
}

/**
 * 전화번호 형식 검증
 * 원본: gfn_isPhone
 */
export const isPhone = (value: string): boolean => {
  if (isNull(value)) return false

  const s = removeSpecialChar(String(value).trim())
  return /^\d{2,3}\d{3,4}\d{4}$/.test(s)
}

// ---------------------------------------------------------------------------
// Zod 스키마
// ---------------------------------------------------------------------------

/** 숫자(부호/소수점 허용) 스키마 */
export const digitSchema = z.string().refine(isDigit, {
  message: '숫자만 입력 가능합니다.',
})

/** 한글 전용 스키마 */
export const koreanCharSchema = z.string().refine(isKoreanChar, {
  message: '한글만 입력 가능합니다.',
})

/** 주민등록번호 스키마 */
export const ssnSchema = z.string().refine(isSSN, {
  message: '올바른 주민등록번호가 아닙니다.',
})

/** 외국인등록번호 스키마 */
export const foreignerIdSchema = z.string().refine(isForeignerIdNo, {
  message: '올바른 외국인등록번호가 아닙니다.',
})

/** 사업자등록번호 스키마 */
export const bizRegNoSchema = z.string().refine(isBizRegNo, {
  message: '올바른 사업자등록번호가 아닙니다.',
})

/** 법인등록번호 스키마 */
export const corpRegNoSchema = z.string().refine(isCorpRegNo, {
  message: '올바른 법인등록번호가 아닙니다.',
})

/** 신용카드번호 스키마 (Luhn) */
export const cardNoSchema = z.string().refine(isCardNo, {
  message: '올바른 신용카드번호가 아닙니다.',
})

/** 이메일 스키마 */
export const emailSchema = z.string().refine(isEmail, {
  message: '올바른 이메일 형식이 아닙니다.',
})

/** 휴대폰번호 스키마 */
export const cellPhoneSchema = z.string().refine(isCellPhone, {
  message: '올바른 휴대폰번호가 아닙니다.',
})

/** 전화번호 스키마 */
export const phoneSchema = z.string().refine(isPhone, {
  message: '올바른 전화번호가 아닙니다.',
})

// ---------------------------------------------------------------------------
// 유틸: Zod 스키마 빌더 (검증 규칙 → Zod 체인)
// ---------------------------------------------------------------------------

export type ValidationRuleType =
  | 'required'
  | 'required:trim'
  | 'digits'
  | 'isssn'
  | 'isfrn'
  | 'isbzid'
  | 'isfirmid'
  | 'iscardno'
  | 'isemail'
  | 'iscellphone'
  | 'isphone'
  | 'date'
  | 'dateym'

/**
 * 원본 validationRuleSet 문자열("required,length:7,digits" 등) 기반으로
 * Zod 스키마를 동적으로 생성한다.
 */
export const buildZodSchema = (ruleString: string, fieldLabel = ''): z.ZodTypeAny => {
  const rules = ruleString.split(',')
  let schema: z.ZodTypeAny = z.string()

  for (const rule of rules) {
    const parts = rule.trim().split(':')
    const name = parts[0].toLowerCase()

    switch (name) {
      case 'required':
        schema = (schema as z.ZodString).min(1, {
          message: `${fieldLabel}은(는) 필수 입력 항목입니다.`,
        })
        break
      case 'required:trim':
        // trimAll 후 비어있으면 에러 — refine으로 처리
        schema = (schema as z.ZodString).refine((v) => trimAll(v).length > 0, {
          message: `${fieldLabel}은(는) 필수 입력 항목입니다.`,
        })
        break
      case 'length':
        if (parts[1]) {
          const len = Number.parseInt(parts[1], 10)
          schema = (schema as z.ZodString).length(len, {
            message: `${fieldLabel}은(는) ${len}자리입니다.`,
          })
        }
        break
      case 'rangelength':
        if (parts[1] && parts[2]) {
          const min = Number.parseInt(parts[1], 10)
          const max = Number.parseInt(parts[2], 10)
          schema = (schema as z.ZodString)
            .min(min, {
              message: `${fieldLabel}은(는) ${min}자리에서 ${max}자리 사이로 등록해야 합니다.`,
            })
            .max(max, {
              message: `${fieldLabel}은(는) ${min}자리에서 ${max}자리 사이로 등록해야 합니다.`,
            })
        }
        break
      case 'maxlength':
        if (parts[1]) {
          const max = Number.parseInt(parts[1], 10)
          schema = (schema as z.ZodString).max(max, {
            message: `${fieldLabel}은(는) 최대 ${max}자리입니다.`,
          })
        }
        break
      case 'minlength':
        if (parts[1]) {
          const min = Number.parseInt(parts[1], 10)
          schema = (schema as z.ZodString).min(min, {
            message: `${fieldLabel}은(는) 최소 ${min}자리 이상이어야 합니다.`,
          })
        }
        break
      case 'digits':
        schema = (schema as z.ZodString).refine(isDigit, {
          message: `${fieldLabel}은(는) 숫자만 입력 가능합니다.`,
        })
        break
      case 'isssn':
        schema = (schema as z.ZodString).refine(isSSN, {
          message: `${fieldLabel}은(는) 올바른 주민번호가 아닙니다.`,
        })
        break
      case 'isfrn':
        schema = (schema as z.ZodString).refine(isForeignerIdNo, {
          message: `${fieldLabel}은(는) 올바른 외국인등록번호가 아닙니다.`,
        })
        break
      case 'isbzid':
        schema = (schema as z.ZodString).refine(isBizRegNo, {
          message: `${fieldLabel}은(는) 올바른 사업자등록번호가 아닙니다.`,
        })
        break
      case 'isfirmid':
        schema = (schema as z.ZodString).refine(isCorpRegNo, {
          message: `${fieldLabel}은(는) 올바른 법인등록번호가 아닙니다.`,
        })
        break
      case 'iscardno':
        schema = (schema as z.ZodString).refine(isCardNo, {
          message: `${fieldLabel}은(는) 올바른 신용카드번호가 아닙니다.`,
        })
        break
      case 'isemail':
        schema = (schema as z.ZodString).refine(isEmail, {
          message: `${fieldLabel}은(는) 올바른 이메일이 아닙니다.`,
        })
        break
      case 'iscellphone':
        schema = (schema as z.ZodString).refine(isCellPhone, {
          message: `${fieldLabel}은(는) 올바른 휴대폰번호가 아닙니다.`,
        })
        break
      case 'isphone':
        schema = (schema as z.ZodString).refine(isPhone, {
          message: `${fieldLabel}은(는) 올바른 전화번호가 아닙니다.`,
        })
        break
      case 'min':
        if (parts[1]) {
          const minVal = Number.parseFloat(parts[1])
          schema = (schema as z.ZodString).refine((v) => Number.parseFloat(v) >= minVal, {
            message: `${fieldLabel}은(는) ${minVal} 이상의 숫자만 입력 가능합니다.`,
          })
        }
        break
      case 'max':
        if (parts[1]) {
          const maxVal = Number.parseFloat(parts[1])
          schema = (schema as z.ZodString).refine((v) => Number.parseFloat(v) <= maxVal, {
            message: `${fieldLabel}은(는) ${maxVal} 이하의 숫자만 입력 가능합니다.`,
          })
        }
        break
      case 'range':
        if (parts[1] && parts[2]) {
          const lo = Number.parseInt(parts[1], 10)
          const hi = Number.parseInt(parts[2], 10)
          schema = (schema as z.ZodString).refine(
            (v) => {
              const n = Number.parseInt(v, 10)
              return n >= lo && n <= hi
            },
            { message: `${fieldLabel}은(는) ${lo}과 ${hi} 사이의 값이어야 합니다.` },
          )
        }
        break
      // date, dateym, code, equalto, fromto, comparebig, comparesmall 등은
      // 필드 간 비교가 필요하여 useValidation Hook에서 처리
      default:
        break
    }
  }

  return schema
}
