import { create } from 'zustand'

/**
 * 사용자 정보 — Nexacro gds_userInfo Dataset의 컬럼에 대응.
 * gfn_setHeader에서 HTTP 헤더로 주입하는 항목들.
 */
export interface UserInfo {
  userId?: string
  userName?: string
  userNm?: string
  userEngNm?: string
  deptCode?: string
  deptName?: string
  deptCd?: string
  deptDivCd?: string
  cntrCd?: string
  ctsDeptCd?: string
  lhqrCd?: string
  workDeptCd?: string
  natnCd?: string
  roleId?: string
  roles?: string[]
  ofcpsCd?: string
  rspofcCd?: string
  emalAddr?: string
  emplDivCd?: string
  specDoctrDivCd?: string
  doctrLcnsNo?: string
  pthstLcnsNo?: string
  userStat?: string
  jbpoCd?: string
  bzMoblPhno?: string
  extnEmalAddr?: string
  mdspDivCd?: string
  moblPhno?: string
  offmExtTelno?: string
  offmTelno?: string
  tgrsCertYn?: string
  accessExpired?: string
  refreshExpired?: string
  [key: string]: string | string[] | undefined
}

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  user: UserInfo | null
  isAuthenticated: boolean
  setAuth: (accessToken: string, refreshToken: string, user: UserInfo) => void
  setAccessToken: (token: string) => void
  setUser: (user: UserInfo) => void
  logout: () => void
}

/**
 * 인증 전역 상태 — Nexacro gds_userInfo + gv_accessToken 대응.
 * Axios 인터셉터에서 getState()로 직접 참조한다.
 */
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,

  setAuth: (accessToken, refreshToken, user) =>
    set({ accessToken, refreshToken, user, isAuthenticated: true }),

  setAccessToken: (token) => set({ accessToken: token }),

  setUser: (user) => set({ user, isAuthenticated: true }),

  logout: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    set({ accessToken: null, refreshToken: null, user: null, isAuthenticated: false })
  },
}))
