// LA 모듈 전용 유틸리티
// 원본: LA/CMMN/Common.xjs — lafn_* 함수 중 LA 비즈니스 로직만 추출
//
// Skip된 함수:
//   - lafn_getAdapterInfo     → Nexacro 전용 (넥사 브라우저 네이티브 API)
//   - lafn_doubleClickPrevent → 빈 함수 (구현체 없음)
//   - lafn_setBindItem        → Nexacro 전용 (BindItem 클래스)
//   - lafn_getScrollPage      → Nexacro 전용 (ScrollPage + Form 등록)
//   - lafn_searchPageAsync    → Nexacro 전용 (gfn_dsRequestAsync)
//   - lafn_resetPaging        → Nexacro 전용 (ScrollPage.gfn_resetPaging)
//   - lafn_dsClearData        → NxDataset.clearData()로 직접 호출하면 됨

import type { NxDataset } from '#/lib/NxDataset'
import { isNull } from '#/utils/common'

// ---------------------------------------------------------------------------
// 패스워드 검증
// ---------------------------------------------------------------------------

/**
 * 연속된 문자(숫자) 4개 이상 사용 여부 검사
 *
 * 원본: lafn_continuousPwd
 *
 * @returns 연속 문자가 없으면 true, 있으면 false
 */
export const hasNoConsecutiveChars = (password: string, limit = 4): boolean => {
  let prevCode = 0
  let diff = 0
  let streak = 0

  for (let i = 0; i < password.length; i++) {
    const code = password.charCodeAt(i)
    if (i > 0) {
      const curDiff = prevCode - code
      if (curDiff > -2 && curDiff === diff) {
        streak++
        if (streak > limit - 3) return false
      } else {
        streak = 0
      }
      diff = curDiff
    }
    prevCode = code
  }

  return true
}

/** validatePassword가 반환하는 결과 */
export interface PasswordValidationResult {
  valid: boolean
  message: string
}

/**
 * LA 모듈 패스워드 규칙 검증
 *
 * 원본: lafn_isPasswordPatter
 *
 * 규칙:
 *   1. 9자 이상 20자 이하
 *   2. 같은 문자 3번 이상 연속 금지
 *   3. 연속된 4개 이상의 문자/숫자 금지 (예: 1234, abcd)
 *   4. 영문 + 숫자 + 특수문자(!@#$%^&*()-_+=) 각 1개 이상 포함
 */
export const validatePassword = (password: string): PasswordValidationResult => {
  if (isNull(password) || password.length < 9) {
    return {
      valid: false,
      message: '비밀번호는 9자 이상 입력해야 합니다.',
    }
  }

  // 같은 문자 3번 이상 연속
  if (/(\W)\1\1/.test(password) || /(\w)\1\1/.test(password)) {
    return {
      valid: false,
      message: '같은 문자를 3번 이상 사용하실 수 없습니다.',
    }
  }

  // 연속된 4개 이상의 문자/숫자
  if (!hasNoConsecutiveChars(password)) {
    return {
      valid: false,
      message: '연속된 4개 이상의 문자 또는 숫자를 사용할 수 없습니다.',
    }
  }

  // 영문 + 숫자 + 특수문자 조합
  const pattern = /^.*(?=^.{9,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=]).*$/
  if (!pattern.test(password)) {
    return {
      valid: false,
      message: '비밀번호 규칙에 맞지 않습니다. 규칙에 맞게 다시 작성하여 주십시오.',
    }
  }

  return { valid: true, message: '' }
}

// ---------------------------------------------------------------------------
// 데이터셋 옵션 행 추가
// ---------------------------------------------------------------------------

/**
 * 데이터셋 첫 행에 "전체" 옵션을 추가한다.
 *
 * 원본: lafn_Ds_Add_All
 *
 * @param dataset - NxDataset 인스턴스
 * @param labelColumn - "전체" 텍스트를 설정할 컬럼 ID
 * @param valueColumn - 빈 값("")을 설정할 컬럼 ID
 */
export const addAllOptionRow = (
  dataset: NxDataset,
  labelColumn: string,
  valueColumn: string,
): void => {
  dataset.insertRow(0)
  dataset.setColumn(0, valueColumn, '')
  dataset.setColumn(0, labelColumn, '전체')
}

/**
 * 데이터셋 첫 행에 "선택" 옵션을 추가한다.
 *
 * 원본: lafn_Ds_Add_Select
 *
 * @param dataset - NxDataset 인스턴스
 * @param labelColumn - "선택" 텍스트를 설정할 컬럼 ID
 * @param valueColumn - 빈 값("")을 설정할 컬럼 ID
 */
export const addSelectOptionRow = (
  dataset: NxDataset,
  labelColumn: string,
  valueColumn: string,
): void => {
  dataset.insertRow(0)
  dataset.setColumn(0, valueColumn, '')
  dataset.setColumn(0, labelColumn, '선택')
}

// ---------------------------------------------------------------------------
// 접속 파라미터 파싱
// ---------------------------------------------------------------------------

/**
 * 메뉴의 accsParm 문자열을 key-value 객체로 파싱한다.
 *
 * 원본: lafn_getAccsParm
 *
 * accsParm 형식: "key1:val1,key2:val2,key3:val3"
 *
 * @example
 * ```ts
 * const { getMenuInfo } = useFrame()
 * const accsParm = getMenuInfo(menuId)?.accsParm ?? ''
 * const params = parseAccsParm(accsParm)
 * // { deptCd: 'LAB01', labCd: 'A' }
 * ```
 */
export const parseAccsParm = (accsParm: string): Record<string, string> => {
  if (isNull(accsParm)) return {}

  const result: Record<string, string> = {}
  const pairs = accsParm.split(',')

  for (const pair of pairs) {
    const [key, value] = pair.split(':')
    if (key) {
      result[key.trim()] = value?.trim() ?? ''
    }
  }

  return result
}
