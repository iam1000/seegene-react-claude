// 폼 검증 훅 (React Hook Form + Zod 연동)
// 원본: cmmlib/Validation.xjs - gfn_setValidation, gfn_clearValidation,
//       gfn_validation, gfn_validationCheckRule, gfn_validationCallback,
//       gfn_setValidationFocus, gfn_resetValidationCss, gfn_setCompValidation

import { useCallback, useRef, useState } from 'react'
import type { UseFormClearErrors, UseFormSetError } from 'react-hook-form'
import { isNull } from '#/utils/common'
import { trimAll } from '#/utils/string'
import {
  isBizRegNo,
  isCardNo,
  isCellPhone,
  isCorpRegNo,
  isDigit,
  isEmail,
  isForeignerIdNo,
  isPhone,
  isSSN,
  type ValidationRuleType,
} from '#/utils/validation'

// ---------------------------------------------------------------------------
// 타입 정의
// ---------------------------------------------------------------------------

/** 검증 규칙 정의 (원본 gfn_setValidation의 파라미터 구조를 반영) */
export interface ValidationRule {
  /** 필드 ID (Dataset 컬럼명 대응) */
  fieldId: string
  /** 필드 표시명 (에러 메시지에 사용) */
  label: string
  /** 필수 여부 */
  required?: boolean
  /** 필수 체크 시 공백 제거 여부 (원본: required:trim) */
  requiredTrim?: boolean
  /** 포맷 검증 타입 (원본 validationRuleSet 규칙명 대응) */
  type?: ValidationRuleType
  /** 최소 길이 */
  minLength?: number
  /** 최대 길이 */
  maxLength?: number
  /** 정확한 길이 */
  length?: number
  /** 최소값 (숫자) */
  min?: number
  /** 최대값 (숫자) */
  max?: number
  /** 범위 [lo, hi] */
  range?: [number, number]
  /** 범위 길이 [min, max] */
  rangeLength?: [number, number]
  /** 정규식 패턴 */
  pattern?: RegExp
  /** 허용 코드 목록 (원본: code:1:2:3) */
  codes?: (string | number)[]
  /** 커스텀 검증 함수 */
  customValidator?: (value: unknown) => string | null
  /** CSS 에러 표시 여부 (원본: cssVal) */
  showErrorStyle?: boolean
  /** 비교 대상 필드 ID (원본: equalto, fromto, comparebig, comparesmall 용) */
  compareFieldId?: string
  /** 비교 규칙 */
  compareRule?: 'equalto' | 'fromto' | 'comparebig' | 'comparesmall'
  /** 비교 대상 필드 표시명 */
  compareLabel?: string
}

/** 검증 에러 항목 */
export interface ValidationError {
  /** 필드 ID */
  fieldId: string
  /** 에러 메시지 */
  message: string
}

/** useValidation 반환 타입 */
export interface UseValidationReturn {
  /** 전체 데이터 검증 실행, 첫 번째 에러 필드에 포커스 */
  validate: (data: Record<string, unknown>) => boolean
  /** 단일 필드 검증 */
  validateField: (fieldId: string, value: unknown, data?: Record<string, unknown>) => string | null
  /** 검증 상태 초기화 */
  clearValidation: () => void
  /** 검증 규칙 추가 (원본: gfn_setValidation) */
  setRule: (rule: ValidationRule) => void
  /** 특정 필드 검증 규칙 제거 (원본: gfn_removeValidation) */
  removeRule: (fieldId: string) => void
  /** 현재 에러 목록 */
  errors: ValidationError[]
  /** 에러가 있는 필드 ID Set (CSS 클래스 토글용) */
  errorFields: Set<string>
  /** 특정 필드에 에러 CSS 클래스가 필요한지 확인 */
  hasError: (fieldId: string) => boolean
  /** React Hook Form setError 연동 */
  syncToRHF: (setError: UseFormSetError<Record<string, unknown>>) => void
  /** React Hook Form clearErrors 연동 */
  clearRHFErrors: (clearErrors: UseFormClearErrors<Record<string, unknown>>) => void
}

// ---------------------------------------------------------------------------
// CSS 클래스 관리 (원본 gfn_setValidationFocus / gfn_resetValidationCss 대응)
// ---------------------------------------------------------------------------

const VALIDATION_ERROR_CLASS = 'validation-error'

/**
 * 필드 엘리먼트에 에러 클래스 추가 (원본 border 색상 변경 대응 → CSS 클래스 토글)
 */
function addErrorClass(fieldId: string): void {
  const el =
    document.querySelector<HTMLElement>(`[data-field-id="${fieldId}"]`) ??
    document.querySelector<HTMLElement>(`[name="${fieldId}"]`) ??
    document.getElementById(fieldId)

  if (el) {
    el.classList.add(VALIDATION_ERROR_CLASS)
  }
}

/**
 * 필드 엘리먼트에서 에러 클래스 제거
 */
function removeErrorClass(fieldId: string): void {
  const el =
    document.querySelector<HTMLElement>(`[data-field-id="${fieldId}"]`) ??
    document.querySelector<HTMLElement>(`[name="${fieldId}"]`) ??
    document.getElementById(fieldId)

  if (el) {
    el.classList.remove(VALIDATION_ERROR_CLASS)
  }
}

/**
 * 필드에 포커스 이동 (원본 gfn_setValidationFocus의 setFocus 대응)
 */
function focusField(fieldId: string): void {
  const el =
    document.querySelector<HTMLElement>(`[data-field-id="${fieldId}"]`) ??
    document.querySelector<HTMLElement>(`[name="${fieldId}"]`) ??
    document.getElementById(fieldId)

  if (el) {
    // 스크롤 + 포커스
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    if ('focus' in el && typeof el.focus === 'function') {
      el.focus()
    }
  }
}

/**
 * 모든 에러 클래스 일괄 제거 (원본 gfn_resetValidationCss 대응)
 */
function resetAllErrorClasses(): void {
  const els = document.querySelectorAll(`.${VALIDATION_ERROR_CLASS}`)
  for (const el of els) {
    el.classList.remove(VALIDATION_ERROR_CLASS)
  }
}

// ---------------------------------------------------------------------------
// 단일 규칙 검증 (원본 gfn_validationCheckRule 대응)
// ---------------------------------------------------------------------------

/**
 * 포맷 검증 타입에 따른 유효성 검사
 */
function checkFormatType(value: string, type: ValidationRuleType, label: string): string | null {
  switch (type) {
    case 'digits':
      return isDigit(value) ? null : `${label}은(는) 숫자만 입력 가능합니다.`
    case 'isssn':
      return isSSN(value) ? null : `${label}은(는) 올바른 주민번호가 아닙니다.`
    case 'isfrn':
      return isForeignerIdNo(value) ? null : `${label}은(는) 올바른 외국인등록번호가 아닙니다.`
    case 'isbzid':
      return isBizRegNo(value) ? null : `${label}은(는) 올바른 사업자등록번호가 아닙니다.`
    case 'isfirmid':
      return isCorpRegNo(value) ? null : `${label}은(는) 올바른 법인등록번호가 아닙니다.`
    case 'iscardno':
      return isCardNo(value) ? null : `${label}은(는) 올바른 신용카드번호가 아닙니다.`
    case 'isemail':
      return isEmail(value) ? null : `${label}은(는) 올바른 이메일이 아닙니다.`
    case 'iscellphone':
      return isCellPhone(value) ? null : `${label}은(는) 올바른 휴대폰번호가 아닙니다.`
    case 'isphone':
      return isPhone(value) ? null : `${label}은(는) 올바른 전화번호가 아닙니다.`
    default:
      return null
  }
}

/**
 * 단일 필드 규칙 전체 검증
 * 원본: gfn_validationCheckRule (length, rangelength, maxlength, minlength,
 *       digits, min, max, range, code, equalto, fromto, comparebig, comparesmall 등)
 */
function checkRule(
  rule: ValidationRule,
  value: unknown,
  data?: Record<string, unknown>,
): string | null {
  const label = rule.label
  const strVal = String(value ?? '')

  // 1. 필수 체크 (원본: nullcheck)
  if (rule.required || rule.requiredTrim) {
    let checkVal = strVal
    if (rule.requiredTrim) checkVal = trimAll(checkVal)

    if (isNull(checkVal) || checkVal === '') {
      return `${label}은(는) 필수 입력 항목입니다.`
    }
  }

  // 값이 비어있으면 나머지 규칙 스킵 (필수가 아닌 경우)
  if (isNull(strVal) || strVal === '') return null

  // 2. 정확한 길이 체크 (원본: length:N)
  if (rule.length != null) {
    if (trimAll(strVal).length !== rule.length) {
      return `${label}은(는) ${rule.length}자리입니다.`
    }
  }

  // 3. 범위 길이 체크 (원본: rangelength:min:max)
  if (rule.rangeLength) {
    const [min, max] = rule.rangeLength
    if (strVal.length < min || strVal.length > max) {
      return `${label}은(는) ${min}자리에서 ${max}자리 사이로 등록해야 합니다.`
    }
  }

  // 4. 최대 길이 체크 (원본: maxlength:N)
  if (rule.maxLength != null && strVal.length > rule.maxLength) {
    return `${label}은(는) 최대 ${rule.maxLength}자리입니다.`
  }

  // 5. 최소 길이 체크 (원본: minlength:N)
  if (rule.minLength != null && strVal.length < rule.minLength) {
    return `${label}은(는) 최소 ${rule.minLength}자리 이상이어야 합니다.`
  }

  // 6. 포맷 타입 검증 (digits, isssn, isemail 등)
  if (rule.type) {
    const typeErr = checkFormatType(strVal, rule.type, label)
    if (typeErr) return typeErr
  }

  // 7. 숫자 최소값 (원본: min:N)
  if (rule.min != null) {
    if (Number.parseFloat(strVal) < rule.min) {
      return `${label}은(는) ${rule.min} 이상의 숫자만 입력 가능합니다.`
    }
  }

  // 8. 숫자 최대값 (원본: max:N)
  if (rule.max != null) {
    if (Number.parseFloat(strVal) > rule.max) {
      return `${label}은(는) ${rule.max} 이하의 숫자만 입력 가능합니다.`
    }
  }

  // 9. 숫자 범위 (원본: range:lo:hi)
  if (rule.range) {
    const [lo, hi] = rule.range
    const num = Number.parseInt(strVal, 10)
    if (num < lo || num > hi) {
      return `${label}은(는) ${lo}과 ${hi} 사이의 값이어야 합니다.`
    }
  }

  // 10. 코드 목록 (원본: code:1:2:3)
  if (rule.codes && rule.codes.length > 0) {
    const match = rule.codes.some((c) => String(c) === strVal)
    if (!match) {
      return `${label}은(는) ${rule.codes.join(', ')} 중 하나의 값이어야 합니다.`
    }
  }

  // 11. 정규식 패턴
  if (rule.pattern && !rule.pattern.test(strVal)) {
    return `${label}은(는) 올바른 형식이 아닙니다.`
  }

  // 12. 필드 간 비교 (원본: equalto, fromto, comparebig, comparesmall)
  if (rule.compareRule && rule.compareFieldId && data) {
    const compareVal = String(data[rule.compareFieldId] ?? '')
    const cmpLabel = rule.compareLabel ?? rule.compareFieldId

    switch (rule.compareRule) {
      case 'equalto':
        if (strVal !== compareVal) {
          return `${label}와(과) ${cmpLabel}이(가) 일치하지 않습니다.`
        }
        break
      case 'fromto':
        if (strVal < compareVal) {
          return `${label}이(가) ${cmpLabel}보다 작습니다.`
        }
        break
      case 'comparebig':
        if (Number.parseFloat(strVal) < Number.parseFloat(compareVal)) {
          return `${label}의 값은 ${cmpLabel}의 값보다 커야 합니다.`
        }
        break
      case 'comparesmall':
        if (Number.parseFloat(strVal) > Number.parseFloat(compareVal)) {
          return `${label}의 값은 ${cmpLabel}보다 작아야 합니다.`
        }
        break
    }
  }

  // 13. 커스텀 검증
  if (rule.customValidator) {
    return rule.customValidator(value)
  }

  return null
}

// ---------------------------------------------------------------------------
// useValidation 훅
// ---------------------------------------------------------------------------

/**
 * 폼 검증 훅 (React Hook Form + Zod 연동 가능)
 *
 * 원본 Validation.xjs의 gfn_setValidation / gfn_validation / gfn_clearValidation 등을
 * React Hook 패턴으로 재구현한다.
 *
 * @example
 * ```tsx
 * function MyForm() {
 *   const { validate, errors, hasError, clearValidation, setRule } = useValidation([
 *     { fieldId: 'name', label: '이름', required: true, maxLength: 50 },
 *     { fieldId: 'email', label: '이메일', type: 'isemail' },
 *     { fieldId: 'bizNo', label: '사업자번호', required: true, type: 'isbzid' },
 *     {
 *       fieldId: 'startDt',
 *       label: '시작일,종료일',
 *       compareRule: 'fromto',
 *       compareFieldId: 'endDt',
 *       compareLabel: '종료일',
 *     },
 *   ])
 *
 *   const handleSave = () => {
 *     const data = { name, email, bizNo, startDt, endDt }
 *     if (!validate(data)) return
 *     // ... 저장 로직
 *   }
 *
 *   return (
 *     <form>
 *       <input
 *         name="name"
 *         data-field-id="name"
 *         className={hasError('name') ? 'validation-error' : ''}
 *       />
 *       {errors.find(e => e.fieldId === 'name')?.message}
 *     </form>
 *   )
 * }
 * ```
 */
export function useValidation(initialRules: ValidationRule[] = []): UseValidationReturn {
  // 규칙 목록 ref (리렌더 없이 관리)
  const rulesRef = useRef<ValidationRule[]>([...initialRules])

  // 에러 상태 (리렌더 트리거)
  const [errors, setErrors] = useState<ValidationError[]>([])
  const [errorFields, setErrorFields] = useState<Set<string>>(new Set())

  // --- 규칙 관리 (원본: gfn_setValidation / gfn_removeValidation / gfn_clearValidation) ---

  const setRule = useCallback((rule: ValidationRule) => {
    const rules = rulesRef.current
    const idx = rules.findIndex((r) => r.fieldId === rule.fieldId)
    if (idx >= 0) {
      rules[idx] = rule
    } else {
      rules.push(rule)
    }
  }, [])

  const removeRule = useCallback((fieldId: string) => {
    rulesRef.current = rulesRef.current.filter((r) => r.fieldId !== fieldId)
  }, [])

  // --- 검증 실행 ---

  /**
   * 단일 필드 검증 (원본 gfn_validationCheckRule 단일 호출 대응)
   * @returns 에러 메시지 또는 null (정상)
   */
  const validateField = useCallback(
    (fieldId: string, value: unknown, data?: Record<string, unknown>): string | null => {
      const rule = rulesRef.current.find((r) => r.fieldId === fieldId)
      if (!rule) return null

      const msg = checkRule(rule, value, data)

      // 에러 상태에 따라 CSS 클래스 토글
      if (msg) {
        if (rule.showErrorStyle !== false) addErrorClass(fieldId)
      } else {
        removeErrorClass(fieldId)
      }

      return msg
    },
    [],
  )

  /**
   * 전체 데이터 검증 (원본 gfn_validation 대응)
   *
   * - 등록된 모든 규칙에 대해 순차 검증
   * - 첫 번째 에러 필드에 포커스 이동 (원본 gfn_setValidationFocus 대응)
   * - showErrorStyle이 true인 필드는 CSS 클래스 토글
   * @returns true=정상, false=에러
   */
  const validate = useCallback((data: Record<string, unknown>): boolean => {
    // 이전 에러 클래스 초기화 (원본 gfn_resetValidationCss 대응)
    resetAllErrorClasses()

    const newErrors: ValidationError[] = []
    const newErrorFields = new Set<string>()

    for (const rule of rulesRef.current) {
      const value = data[rule.fieldId]
      const msg = checkRule(rule, value, data)

      if (msg) {
        newErrors.push({ fieldId: rule.fieldId, message: msg })
        newErrorFields.add(rule.fieldId)

        // 에러 스타일 적용 (원본 cssVal == "Y" 대응)
        if (rule.showErrorStyle !== false) {
          addErrorClass(rule.fieldId)
        }
      }
    }

    setErrors(newErrors)
    setErrorFields(newErrorFields)

    // 첫 번째 에러 필드에 포커스 (원본 gfn_setValidationFocus 대응)
    if (newErrors.length > 0) {
      focusField(newErrors[0].fieldId)
      return false
    }

    return true
  }, [])

  /**
   * 검증 상태 초기화 (원본: gfn_clearValidation)
   */
  const clearValidation = useCallback(() => {
    resetAllErrorClasses()
    setErrors([])
    setErrorFields(new Set())
  }, [])

  /**
   * 특정 필드에 에러가 있는지 확인
   */
  const hasError = useCallback(
    (fieldId: string): boolean => errorFields.has(fieldId),
    [errorFields],
  )

  // --- React Hook Form 연동 ---

  /**
   * 검증 에러를 React Hook Form의 setError로 동기화
   */
  const syncToRHF = useCallback(
    (setError: UseFormSetError<Record<string, unknown>>) => {
      for (const err of errors) {
        setError(err.fieldId, {
          type: 'validation',
          message: err.message,
        })
      }
    },
    [errors],
  )

  /**
   * React Hook Form의 에러 초기화
   */
  const clearRHFErrors = useCallback((clearErrors: UseFormClearErrors<Record<string, unknown>>) => {
    const fieldIds = rulesRef.current.map((r) => r.fieldId)
    clearErrors(fieldIds)
  }, [])

  return {
    validate,
    validateField,
    clearValidation,
    setRule,
    removeRule,
    errors,
    errorFields,
    hasError,
    syncToRHF,
    clearRHFErrors,
  }
}
