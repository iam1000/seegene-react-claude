import { create } from 'zustand'

export type LayoutConcept = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'

interface AppState {
  sidebarOpen: boolean
  activeMenuId: string | null
  openTabs: Array<{ id: string; title: string; path: string }>
  layoutConcept: LayoutConcept
  toggleSidebar: () => void
  setActiveMenu: (menuId: string) => void
  addTab: (tab: { id: string; title: string; path: string }) => void
  removeTab: (tabId: string) => void
  setLayoutConcept: (concept: LayoutConcept) => void
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  activeMenuId: null,
  openTabs: [],
  layoutConcept: 'A',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setActiveMenu: (menuId) => set({ activeMenuId: menuId }),
  addTab: (tab) =>
    set((state) => {
      if (state.openTabs.some((t) => t.id === tab.id)) return state
      return { openTabs: [...state.openTabs, tab] }
    }),
  removeTab: (tabId) =>
    set((state) => ({
      openTabs: state.openTabs.filter((t) => t.id !== tabId),
    })),
  setLayoutConcept: (concept) => set({ layoutConcept: concept }),
}))
