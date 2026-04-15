import { useAppStore } from '#/store/useAppStore'

const MDI_ACTIONS = [
  { icon: '/icons/img_MDI_save.png', title: '저장' },
  { icon: '/icons/img_MDI_full.png', title: '전체화면' },
  { icon: '/icons/img_MDI_float.png', title: '플로팅' },
  { icon: '/icons/img_MDI_horizontal.png', title: '가로 배치' },
  { icon: '/icons/img_MDI_vertical.png', title: '세로 배치' },
  { icon: '/icons/img_MDI_closeAll.png', title: '모두 닫기' },
]

const THEME = {
  A: {
    wrap: 'bg-[#c8c8c8] border-b border-[#b0b0b0]',
    scrollBtn: 'hover:bg-[#b8b8b8] border-r border-[#b0b0b0]',
    tabActive: 'bg-white text-gray-800',
    tabInactive: 'bg-[#d8d8d8] text-gray-600 hover:bg-[#cecece] border-r border-[#b0b0b0]',
    actionBtn: 'hover:bg-[#b8b8b8]',
    imgFilter: '',
  },
  B: {
    wrap: 'bg-white border-b border-gray-200',
    scrollBtn: 'hover:bg-gray-100 border-r border-gray-200',
    tabActive: 'bg-white text-[#D33D44] border-b-2 border-[#D33D44] font-medium',
    tabInactive: 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-r border-gray-200',
    actionBtn: 'hover:bg-gray-100',
    imgFilter: 'brightness-0 opacity-45',
  },
  C: {
    wrap: 'bg-[#1e293b] border-b border-slate-700',
    scrollBtn: 'hover:bg-slate-700 border-r border-slate-700',
    tabActive: 'bg-slate-500 text-white',
    tabInactive:
      'bg-[#1e293b] text-slate-400 hover:bg-slate-700 hover:text-white border-r border-slate-700',
    actionBtn: 'hover:bg-slate-700',
    imgFilter: 'brightness-0 invert opacity-70',
  },
  D: {
    wrap: 'bg-[#eff6ff] border-b border-blue-200',
    scrollBtn: 'hover:bg-blue-100 border-r border-blue-200',
    tabActive: 'bg-white text-blue-700 shadow-sm',
    tabInactive: 'bg-[#eff6ff] text-gray-500 hover:bg-blue-100 border-r border-blue-200',
    actionBtn: 'hover:bg-blue-100',
    imgFilter: 'brightness-0 opacity-40',
  },
  // ── Concept E : Warm Editorial ─────────────────────────────────────────
  E: {
    wrap: 'bg-[#F0E8D8] border-b border-[#D8CDB8]',
    scrollBtn: 'hover:bg-[#E8DFCF] border-r border-[#D8CDB8]',
    tabActive: 'bg-[#FAF7F2] text-[#1C1409] border-b-2 border-[#C4541A] font-medium',
    tabInactive:
      'bg-[#F0E8D8] text-[#7D6548] hover:text-[#3D2B1A] hover:bg-[#E8DFCF] border-r border-[#D8CDB8]',
    actionBtn: 'hover:bg-[#E8DFCF]',
    imgFilter: 'brightness-0 opacity-40',
  },
  // ── Concept F : Precision Instrument ───────────────────────────────────
  F: {
    wrap: 'bg-[#050A0F] border-b border-[#00D4FF]/10',
    scrollBtn: 'hover:bg-[#00D4FF]/8 border-r border-[#00D4FF]/10',
    tabActive: 'bg-[#00D4FF]/10 text-[#00D4FF] border-b-2 border-[#00D4FF] font-medium',
    tabInactive:
      'bg-[#050A0F] text-[#3A6A7A] hover:text-[#7BAFC0] hover:bg-[#00D4FF]/8 border-r border-[#00D4FF]/10',
    actionBtn: 'hover:bg-[#00D4FF]/8',
    imgFilter: 'brightness-0 invert opacity-55',
  },
  // ── Concept I : Compact2 (메가메뉴) ───────────────────────────────────
  I: {
    wrap: 'bg-[#0F172A] border-b border-white/8',
    scrollBtn: 'hover:bg-white/8 border-r border-white/8',
    tabActive: 'bg-sky-400/15 text-sky-300 border-b-2 border-sky-400 font-medium',
    tabInactive:
      'bg-[#0F172A] text-slate-400 hover:text-slate-100 hover:bg-white/8 border-r border-white/8',
    actionBtn: 'hover:bg-white/8',
    imgFilter: 'brightness-0 invert opacity-45',
  },
  // ── Concept H : Compact Pro ───────────────────────────────────────────
  H: {
    wrap: 'bg-[#0F172A] border-b border-white/8',
    scrollBtn: 'hover:bg-white/8 border-r border-white/8',
    tabActive: 'bg-sky-400/15 text-sky-300 border-b-2 border-sky-400 font-medium',
    tabInactive:
      'bg-[#0F172A] text-slate-400 hover:text-slate-100 hover:bg-white/8 border-r border-white/8',
    actionBtn: 'hover:bg-white/8',
    imgFilter: 'brightness-0 invert opacity-45',
  },
  // ── Concept K : 라이트2 ───────────────────────────────────────────────
  K: {
    wrap: 'bg-white border-b border-gray-200',
    scrollBtn: 'hover:bg-gray-100 border-r border-gray-200',
    tabActive: 'bg-white text-[#D33D44] border-b-2 border-[#D33D44] font-medium',
    tabInactive: 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-r border-gray-200',
    actionBtn: 'hover:bg-gray-100',
    imgFilter: 'brightness-0 opacity-45',
  },
  // ── Concept J : 기존2 (기존과 동일) ──────────────────────────────────
  J: {
    wrap: 'bg-[#c8c8c8] border-b border-[#b0b0b0]',
    scrollBtn: 'hover:bg-[#b8b8b8] border-r border-[#b0b0b0]',
    tabActive: 'bg-white text-gray-800',
    tabInactive: 'bg-[#d8d8d8] text-gray-600 hover:bg-[#cecece] border-r border-[#b0b0b0]',
    actionBtn: 'hover:bg-[#b8b8b8]',
    imgFilter: '',
  },
  // ── Concept G : Corporate Medical ─────────────────────────────────────
  G: {
    wrap: 'bg-white border-b border-gray-200',
    scrollBtn: 'hover:bg-gray-100 border-r border-gray-200',
    tabActive: 'bg-white text-[#D33D44] border-b-2 border-[#D33D44] font-semibold',
    tabInactive:
      'bg-[#F9FAFB] text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-r border-gray-200',
    actionBtn: 'hover:bg-gray-100',
    imgFilter: 'brightness-0 opacity-45',
  },
} as const

export default function TabBar() {
  const { openTabs, activeMenuId, removeTab, setActiveMenu, layoutConcept } = useAppStore()
  const t = THEME[layoutConcept] ?? THEME.A

  return (
    <div className={`flex items-center h-7 shrink-0 ${t.wrap}`}>
      <button className={`w-6 h-7 flex items-center justify-center shrink-0 ${t.scrollBtn}`}>
        <img
          src="/icons/img_MDI_prev.png"
          alt="prev"
          className={`w-4 h-4 object-contain ${t.imgFilter}`}
        />
      </button>
      <button className={`w-6 h-7 flex items-center justify-center shrink-0 ${t.scrollBtn}`}>
        <img
          src="/icons/img_MDI_next.png"
          alt="next"
          className={`w-4 h-4 object-contain ${t.imgFilter}`}
        />
      </button>

      <div className="flex items-end flex-1 overflow-hidden h-full">
        {openTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveMenu(tab.id)}
            className={`flex items-center gap-1 px-3 h-full text-xs cursor-pointer whitespace-nowrap transition-colors ${
              activeMenuId === tab.id ? t.tabActive : t.tabInactive
            }`}
          >
            <span>{tab.title}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeTab(tab.id)
              }}
              className="ml-1 opacity-50 hover:opacity-100"
            >
              <img
                src="/icons/btn_MDI_TabClose.png"
                alt="close"
                className={`w-3 h-3 object-contain ${t.imgFilter}`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center px-1 shrink-0">
        {MDI_ACTIONS.map((action) => (
          <button
            key={action.title}
            title={action.title}
            className={`w-6 h-6 flex items-center justify-center rounded ${t.actionBtn}`}
          >
            <img
              src={action.icon}
              alt={action.title}
              className={`w-4 h-4 object-contain ${t.imgFilter}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
