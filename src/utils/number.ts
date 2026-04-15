// 숫자 유틸리티
// 원본: cmmlib/Util.xjs

// 10진수 → 16진수
export const decToHex = (value: number): string => value.toString(16)

// 16진수 → 10진수
export const hexToDec = (value: string): number => parseInt(value, 16)
