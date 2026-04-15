import { Search } from 'lucide-react'
import { type LayoutConcept, useAppStore } from '#/store/useAppStore'
import { useAuthStore } from '#/store/useAuthStore'

interface HeaderProps {
  onMenuSearch?: (keyword: string) => void
}

// ── 컨셉별 스타일 ──────────────────────────────────────────────────────────
const THEME = {
  A: {
    wrap: 'bg-white border-b border-gray-200',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: '#F4E7E6' },
    search: 'border border-gray-300 rounded h-7 px-2 gap-1 w-44',
    searchText: 'text-gray-700 placeholder:text-gray-400',
    searchIcon: 'text-gray-400',
    userArea: 'border-l border-gray-200 text-gray-700',
    logoutBtn: 'hover:bg-gray-100 rounded',
    imgFilter: '',
    conceptPill: 'bg-gray-100',
    conceptActive: 'bg-white text-gray-800 shadow-sm',
    conceptInactive: 'text-gray-400 hover:text-gray-600',
  },
  B: {
    wrap: 'bg-gray-50 border-b border-gray-100',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded-full',
    iconBtnStyle: { background: '#e8f0fe' },
    search: 'border border-gray-200 rounded-full h-7 px-3 gap-1 w-44 bg-white',
    searchText: 'text-gray-700 placeholder:text-gray-400',
    searchIcon: 'text-blue-400',
    userArea: 'border-l border-gray-200 text-gray-600',
    logoutBtn: 'hover:bg-gray-200 rounded-full',
    imgFilter: '',
    conceptPill: 'bg-gray-200',
    conceptActive: 'bg-white text-gray-800 shadow-sm',
    conceptInactive: 'text-gray-400 hover:text-gray-700',
  },
  C: {
    wrap: 'bg-[#0d1424] border-b border-slate-800',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: 'rgba(6,182,212,0.12)' },
    search: 'border border-cyan-900/60 rounded h-7 px-2 gap-1 w-44 bg-[#060d1a]',
    searchText: 'text-slate-100 placeholder:text-slate-600',
    searchIcon: 'text-cyan-500',
    userArea: 'border-l border-slate-800 text-slate-200',
    logoutBtn: 'hover:bg-slate-800 rounded',
    imgFilter: 'brightness-0 invert opacity-80',
    conceptPill: 'bg-[#060d1a]',
    conceptActive: 'bg-cyan-500/20 text-cyan-300 font-medium',
    conceptInactive: 'text-slate-600 hover:text-slate-300',
  },
  D: {
    wrap: 'bg-white border-b border-blue-100',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: '#dbeafe' },
    search: 'border border-blue-200 rounded h-7 px-2 gap-1 w-44',
    searchText: 'text-gray-700 placeholder:text-gray-400',
    searchIcon: 'text-blue-400',
    userArea: 'border-l border-blue-100 text-gray-700',
    logoutBtn: 'hover:bg-blue-50 rounded',
    imgFilter: '',
    conceptPill: 'bg-blue-50',
    conceptActive: 'bg-white text-blue-700 shadow-sm',
    conceptInactive: 'text-blue-300 hover:text-blue-600',
  },
  // ── Concept E : Warm Editorial ────────────────────────────────────────
  E: {
    wrap: 'bg-[#FAF7F2] border-b border-[#E8DFCF]',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: '#F0E4CF' },
    search: 'border border-[#D8CDB8] rounded h-7 px-2.5 gap-1.5 w-48 bg-white',
    searchText: 'text-[#3D2B1A] placeholder:text-[#A89070]',
    searchIcon: 'text-[#C4541A]',
    userArea: 'border-l border-[#E8DFCF] text-[#3D2B1A]',
    logoutBtn: 'hover:bg-[#F0E4CF] rounded',
    imgFilter: 'sepia-[0.3]',
    conceptPill: 'bg-[#F0E4CF]',
    conceptActive: 'bg-[#C4541A] text-white font-medium',
    conceptInactive: 'text-[#A89070] hover:text-[#3D2B1A]',
  },
  // ── Concept F : Precision Instrument ─────────────────────────────────
  F: {
    wrap: 'bg-[#050A0F] border-b border-[#00D4FF]/10',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: 'rgba(0,212,255,0.08)' },
    search: 'border border-[#00D4FF]/15 rounded h-7 px-2.5 gap-1.5 w-48 bg-[#00D4FF]/5',
    searchText: 'text-[#E8F4F8] placeholder:text-[#3A6A7A]',
    searchIcon: 'text-[#00D4FF]',
    userArea: 'border-l border-[#00D4FF]/10 text-[#E8F4F8]',
    logoutBtn: 'hover:bg-[#00D4FF]/8 rounded',
    imgFilter: 'brightness-0 invert opacity-55',
    conceptPill: 'bg-[#00D4FF]/8',
    conceptActive: 'bg-[#00D4FF]/20 text-[#00D4FF] font-medium',
    conceptInactive: 'text-[#3A6A7A] hover:text-[#7BAFC0]',
  },
  // ── Concept I : Compact2 (헤더 미사용 — CompactBar2가 대체) ──────────
  I: {
    wrap: 'bg-white border-b border-gray-200',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: '#F3F4F6' },
    search: 'border border-gray-200 rounded h-7 px-2.5 gap-1.5 w-48',
    searchText: 'text-gray-700 placeholder:text-gray-400',
    searchIcon: 'text-gray-400',
    userArea: 'border-l border-gray-200 text-gray-600',
    logoutBtn: 'hover:bg-gray-100 rounded',
    imgFilter: '',
    conceptPill: 'bg-gray-100',
    conceptActive: 'bg-gray-800 text-white font-medium',
    conceptInactive: 'text-gray-400 hover:text-gray-600',
  },
  // ── Concept H : Compact Pro (헤더 미사용 — CompactBar가 대체) ─────────
  H: {
    wrap: 'bg-[#1E293B] border-b border-slate-700',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: 'rgba(255,255,255,0.05)' },
    search: 'border border-slate-700 rounded h-7 px-2.5 gap-1.5 w-48 bg-slate-900',
    searchText: 'text-slate-300 placeholder:text-slate-600',
    searchIcon: 'text-slate-500',
    userArea: 'border-l border-slate-700 text-slate-400',
    logoutBtn: 'hover:bg-slate-700 rounded',
    imgFilter: 'brightness-0 invert opacity-40',
    conceptPill: 'bg-slate-900',
    conceptActive: 'bg-sky-400/20 text-sky-400 font-medium',
    conceptInactive: 'text-slate-600 hover:text-slate-400',
  },
  // ── Concept G : Corporate Medical ────────────────────────────────────
  G: {
    wrap: 'bg-white border-b border-gray-100',
    iconBtnClass: 'w-7 h-7 flex items-center justify-center rounded',
    iconBtnStyle: { background: '#FEE2E2' },
    search: 'border border-gray-200 rounded h-7 px-2.5 gap-1.5 w-48',
    searchText: 'text-gray-700 placeholder:text-gray-400',
    searchIcon: 'text-[#D33D44]',
    userArea: 'border-l border-gray-100 text-gray-700',
    logoutBtn: 'hover:bg-red-50 rounded',
    imgFilter: '',
    conceptPill: 'bg-gray-100',
    conceptActive: 'bg-[#D33D44] text-white font-medium',
    conceptInactive: 'text-gray-400 hover:text-gray-700',
  },
} as const

const CONCEPT_LABELS: Record<LayoutConcept, string> = {
  A: '기존',
  B: '라이트',
  C: '다크',
  D: '블루',
  E: '사이드바',
  F: '다크 사이드바',
  G: '기업형',
  H: '컴팩트',
  I: '컴팩트2',
}

const ICON_BTNS = [
  { src: '/icons/btn_WF_Upload.png', title: '로그 업로드' },
  { src: '/icons/ezhelp_favicon.ico', title: '원격지원', noFilter: true },
  { src: '/icons/btn_TF_Bug.png', title: 'Bug Report' },
  { src: '/icons/btn_TF_App.png', title: '앱 메뉴' },
]

export default function Header({ onMenuSearch }: HeaderProps) {
  const { user, logout } = useAuthStore()
  const { layoutConcept, setLayoutConcept } = useAppStore()
  const t = THEME[layoutConcept]

  return (
    <div className={`flex items-center h-11 px-3 gap-2 shrink-0 ${t.wrap}`}>
      {/* 로고 */}
      <img
        src="/icons/sta_LOGIN_Logo.png"
        alt="Seegene Medical Foundation"
        className={`h-8 mr-2 ${t.imgFilter}`}
      />

      <div className="flex-1" />

      {/* 아이콘 버튼들 */}
      <div className="flex items-center gap-1.5">
        {ICON_BTNS.map((btn) => (
          <button
            key={btn.title}
            className={t.iconBtnClass}
            style={t.iconBtnStyle}
            title={btn.title}
          >
            <img
              src={btn.src}
              alt={btn.title}
              className={`w-5 h-5 object-contain ${'noFilter' in btn && btn.noFilter ? '' : t.imgFilter}`}
            />
          </button>
        ))}
      </div>

      {/* 메뉴 검색 */}
      <div className={`flex items-center ${t.search}`}>
        <input
          type="text"
          placeholder="메뉴 검색"
          className={`flex-1 text-xs outline-none bg-transparent ${t.searchText}`}
          onChange={(e) => onMenuSearch?.(e.target.value)}
        />
        <Search size={12} className={t.searchIcon} />
      </div>

      {/* 설정 */}
      <button className={t.iconBtnClass} style={t.iconBtnStyle} title="설정">
        <img
          src="/icons/btn_TF_Setting.png"
          alt="setting"
          className={`w-5 h-5 object-contain ${t.imgFilter}`}
        />
      </button>

      {/* 컨셉 선택기 */}
      <div className={`flex items-center gap-0.5 rounded-full px-1 py-0.5 ${t.conceptPill}`}>
        {(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'] as LayoutConcept[]).map((c) => (
          <button
            key={c}
            onClick={() => setLayoutConcept(c)}
            title={CONCEPT_LABELS[c]}
            className={`px-2 py-0.5 rounded-full text-[10px] transition-all ${
              layoutConcept === c ? t.conceptActive : t.conceptInactive
            }`}
          >
            {CONCEPT_LABELS[c]}
          </button>
        ))}
      </div>

      {/* 사용자 정보 */}
      <div className={`flex items-center gap-1.5 text-xs pl-2 ${t.userArea}`}>
        <img
          src="/icons/btn_TF_User.png"
          alt="user"
          className={`w-4 h-4 object-contain ${t.imgFilter}`}
        />
        <span>{user?.userName ?? 'DT관리자'}</span>
        <span className="opacity-30">|</span>
        <span className="opacity-50">{user?.userId ?? 'DT9999'}</span>
      </div>

      <button
        onClick={logout}
        className={`w-7 h-7 flex items-center justify-center ml-1 ${t.logoutBtn}`}
        title="로그아웃"
      >
        <img
          src="/icons/btn_TF_Logout.png"
          alt="logout"
          className={`w-5 h-5 object-contain ${t.imgFilter}`}
        />
      </button>
    </div>
  )
}
