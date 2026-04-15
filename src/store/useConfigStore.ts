import { create } from 'zustand'
import type { DomainMap } from '#/types/dataobject'

type Env = 'dev' | 'qa' | 'prod'

interface ConfigState {
  currentEnv: Env
  domainMap: DomainMap
  setEnv: (env: Env) => void
  setDomainMap: (map: DomainMap) => void
  resolveUrl: (group: string, path: string) => string
}

/**
 * 환경 설정 전역 상태 — Nexacro gds_domain + environment.xml 대응.
 *
 * @example
 * useConfigStore.getState().setDomainMap({
 *   bl: { dev: 'http://localhost:8086', prod: 'https://api.lis.seegene.com/bl' },
 *   dt: { dev: 'http://localhost:8090', prod: 'https://api.lis.seegene.com/dt' },
 * })
 * useConfigStore.getState().setEnv('prod')
 */
export const useConfigStore = create<ConfigState>((set, get) => ({
  currentEnv: 'dev',
  domainMap: {},

  setEnv: (env) => set({ currentEnv: env }),
  setDomainMap: (map) => set({ domainMap: map }),

  resolveUrl: (group, path) => {
    const { domainMap, currentEnv } = get()
    const baseUrl = domainMap[group]?.[currentEnv] ?? ''
    const sep = baseUrl.endsWith('/') || path.startsWith('/') ? '' : '/'
    return `${baseUrl}${sep}${path}`
  },
}))
