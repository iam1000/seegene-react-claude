import axios, { type AxiosInstance } from 'axios'
import { useAuthStore } from '#/store/useAuthStore'

/**
 * Axios 인스턴스 — Nexacro DataObject의 HTTP 통신 레이어 대응.
 *
 * - 요청 인터셉터: JWT + LIS 사용자 정보 헤더 자동 주입 (gfn_setHeader 대응)
 * - 응답 인터셉터: 401 세션 만료 시 자동 logout 호출
 */
function createApiClient(): AxiosInstance {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 30_000,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })

  // ── 요청 인터셉터: JWT + 사용자 정보 헤더 ──
  client.interceptors.request.use((config) => {
    const { accessToken, refreshToken, user } = useAuthStore.getState()

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
      config.headers['Token'] = accessToken
      config.headers['LIS-JWT'] = accessToken
    }
    if (refreshToken) {
      config.headers['LIS-Refresh-TOKEN'] = refreshToken
    }

    // Nexacro gfn_setHeader의 사용자 정보 헤더 전체 재현
    if (user) {
      const h = config.headers
      h['LIS-User-ID'] = user.userId ?? 'no data'
      h['LIS-User-NAME'] = encodeURIComponent(user.userNm ?? user.userName ?? 'no data')
      h['LIS-User-Eng-NAME'] = encodeURIComponent(user.userEngNm ?? 'no data')
      h['LIS-Dept-CD'] = user.deptCd ?? user.deptCode ?? 'no data'
      h['LIS-Dept-div-CD'] = user.deptDivCd ?? 'no data'
      h['LIS-Cntr-CD'] = user.cntrCd ?? 'no data'
      h['LIS-CTS-DEPT-CD'] = user.ctsDeptCd ?? 'no data'
      h['LIS-LHQR-CD'] = user.lhqrCd ?? 'no data'
      h['LIS-WORK-DEPT-CD'] = user.workDeptCd ?? 'no data'
      h['LIS-Natn-CD'] = user.natnCd ?? 'KOR'
      h['LIS-Role-ID'] = user.roleId ?? '0'
      h['LIS-OFCPS-CD'] = user.ofcpsCd ?? 'no data'
      h['LIS-RSPOFC-CD'] = user.rspofcCd ?? 'no data'
      h['LIS-EMAL-ADDR'] = user.emalAddr ?? 'no data'
      h['LIS-EMPL-DIV-CD'] = user.emplDivCd ?? 'no data'
      h['LIS-SPEC-DOCTR-DIV-CD'] = user.specDoctrDivCd ?? 'no data'
      h['LIS-DOCTR-LCNS-NO'] = user.doctrLcnsNo ?? 'no data'
      h['LIS-PTHST-LCNS-NO'] = user.pthstLcnsNo ?? 'no data'
      h['LIS-USER-STAT'] = user.userStat ?? 'no data'
      h['LIS-JBPO-CD'] = user.jbpoCd ?? 'no data'
      h['LIS-BZ-MOBL-PHNO'] = user.bzMoblPhno ?? 'no data'
      h['LIS-EXTN-EMAL-ADDR'] = user.extnEmalAddr ?? 'no data'
      h['LIS-MDSP-DIV-CD'] = user.mdspDivCd ?? 'no data'
      h['LIS-MOBL-PHNO'] = user.moblPhno ?? 'no data'
      h['LIS-OFFM-EXT-TELNO'] = user.offmExtTelno ?? 'no data'
      h['LIS-OFFM-TELNO'] = user.offmTelno ?? 'no data'
      h['LIS-TGRS-CERT-YN'] = user.tgrsCertYn ?? 'no data'
      h['LIS-Access-EXPIRED'] = user.accessExpired ?? 'no data'
      h['LIS-Refresh-EXPIRED'] = user.refreshExpired ?? 'no data'
      h['EasyTrace-User-Info'] = user.userId ?? 'no data'
    }

    return config
  })

  // ── 응답 인터셉터: 401 처리 ──
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        // TODO: Token refresh logic
        useAuthStore.getState().logout()
        window.location.href = '/login'
      }
      return Promise.reject(error as Error)
    },
  )

  return client
}

const apiClient = createApiClient()

export { apiClient }
export default apiClient
