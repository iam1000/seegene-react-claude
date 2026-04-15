// 배열 유틸리티
// 원본: cmmlib/Util.xjs

// 배열에 값 존재 여부 (원본과 동일하게 loose comparison)
export const isExistInArray = (arr: unknown[], value: unknown): boolean =>
  // biome-ignore lint/suspicious/noDoubleEquals: 원본 gfn_isExistInArray와 동일하게 loose comparison
  arr.some((item) => item == value)

// 배열에서 항목의 첫 인덱스
export const indexOf = (
  arr: unknown[],
  item: unknown,
  from?: number | null,
  strict = false,
): number => {
  const len = arr.length
  let start = from ?? 0
  if (start < 0) start = Math.max(0, len + start)

  if (strict) {
    for (let i = start; i < len; i++) {
      if (arr[i] === item) return i
    }
  } else {
    for (let i = start; i < len; i++) {
      // biome-ignore lint/suspicious/noDoubleEquals: strict=false시 loose comparison 의도
      if (arr[i] == item) return i
    }
  }

  return -1
}

// 배열에 항목 포함 여부
export const contains = (arr: unknown[], item: unknown, strict = false): boolean =>
  indexOf(arr, item, null, strict) !== -1

// 배열에서 속성 값으로 역방향 검색
export const lastIndexOfProp = <T extends Record<string, unknown>>(
  arr: T[],
  prop: string,
  item: unknown,
  from?: number,
  strict = false,
): number => {
  let start = from ?? arr.length - 1
  if (start < 0) start = Math.max(0, arr.length + start)

  if (strict) {
    for (let i = start; i >= 0; i--) {
      if (i in arr && arr[i]) {
        if (arr[i][prop] === item) return i
      }
    }
  } else {
    for (let i = start; i >= 0; i--) {
      if (i in arr && arr[i]) {
        // biome-ignore lint/suspicious/noDoubleEquals: strict=false시 loose comparison 의도
        if (arr[i][prop] == item) return i
      }
    }
  }

  return -1
}

// 배열에서 인덱스 위치 항목 삭제
export const removeAt = <T>(arr: T[], index: number): void => {
  arr.splice(index, 1)
}
