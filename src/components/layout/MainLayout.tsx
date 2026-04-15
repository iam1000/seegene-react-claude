import { Search } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router'
import { useAppStore } from '#/store/useAppStore'
import { useAuthStore } from '#/store/useAuthStore'
import ConceptSwitcher from './ConceptSwitcher'
import Header from './Header'
import Sidebar from './Sidebar'
import TabBar from './TabBar'
import TopMenuBar from './TopMenuBar'

const MAIN_BG: Record<string, string> = {
  A: 'bg-[#e8e8e8]',
  B: 'bg-white',
  K: 'bg-[#f0f0f0]',
  C: 'bg-[#0f172a]',
  D: 'bg-[#f0f7ff]',
  E: 'bg-[#FAF7F2]',
  F: 'bg-[#030507]',
  G: 'bg-[#F4F4F5]',
  H: 'bg-[#0F172A]',
  I: 'bg-[#0F172A]',
  J: 'bg-[#e8e8e8]',
}

const COMPACT_MENUS = [
  { id: 'system', label: '시스템관리' },
  { id: 'work', label: '업무관리' },
  { id: 'clinical', label: '임상사업' },
  { id: 'customer', label: '고객지원' },
  { id: 'inspection', label: '검사관리' },
  { id: 'quality', label: '품질관리' },
  { id: 'accuracy', label: '정도관리' },
  { id: 'standard', label: '기준설정' },
  { id: 'result', label: '결과자관리' },
  { id: 'external', label: '학부검사' },
  { id: 'device', label: '장비인터페이스' },
  { id: 'analysis', label: '분석통계' },
  { id: 'field', label: '현장수발' },
  { id: 'outsource', label: '외주병리' },
  { id: 'devicemgr', label: '장비인터페이스관리' },
]

// ── 컴팩트2 메가메뉴 서브메뉴 데이터 ─────────────────────────────────────
const SUB_MENUS: Record<string, Array<{ id: string; label: string }>> = {
  system: [
    { id: 'sys-user', label: '사용자관리' },
    { id: 'sys-role', label: '권한관리' },
    { id: 'sys-code', label: '공통코드관리' },
    { id: 'sys-menu', label: '메뉴관리' },
    { id: 'sys-log', label: '접속로그' },
    { id: 'sys-backup', label: '백업관리' },
  ],
  work: [
    { id: 'work-status', label: '업무현황' },
    { id: 'work-assign', label: '업무배정' },
    { id: 'work-result', label: '처리현황' },
    { id: 'work-calendar', label: '업무달력' },
  ],
  clinical: [
    { id: 'clin-request', label: '임상의뢰' },
    { id: 'clin-result', label: '임상결과' },
    { id: 'clin-contract', label: '계약관리' },
    { id: 'clin-report', label: '임상보고서' },
  ],
  customer: [
    { id: 'cust-list', label: '고객현황' },
    { id: 'cust-inquiry', label: '문의관리' },
    { id: 'cust-complaint', label: '불만처리' },
    { id: 'cust-visit', label: '방문관리' },
  ],
  inspection: [
    { id: 'insp-rcpt', label: '검체접수' },
    { id: 'insp-process', label: '검사진행' },
    { id: 'insp-result', label: '검사결과' },
    { id: 'insp-device', label: '장비결과수신' },
    { id: 'insp-cancel', label: '검사취소' },
    { id: 'insp-retest', label: '재검관리' },
  ],
  quality: [
    { id: 'qual-index', label: '품질지표' },
    { id: 'qual-improve', label: '개선사항' },
    { id: 'qual-audit', label: '감사기록' },
    { id: 'qual-cert', label: '인증관리' },
  ],
  accuracy: [
    { id: 'acc-index', label: '정도지표' },
    { id: 'acc-calib', label: '교정관리' },
    { id: 'acc-test', label: '시험성적서' },
    { id: 'acc-ext', label: '외부정도관리' },
    { id: 'acc-report', label: '정도보고서' },
  ],
  standard: [
    { id: 'std-item', label: '검사항목' },
    { id: 'std-range', label: '정상범위' },
    { id: 'std-fee', label: '수가관리' },
    { id: 'std-method', label: '검사방법' },
    { id: 'std-tube', label: '검체용기' },
  ],
  result: [
    { id: 'res-query', label: '결과조회' },
    { id: 'res-report', label: '보고관리' },
    { id: 'res-send', label: '결과발송' },
    { id: 'res-verify', label: '결과검증' },
  ],
  external: [
    { id: 'ext-rcpt', label: '외부접수' },
    { id: 'ext-result', label: '외부결과' },
    { id: 'ext-billing', label: '정산관리' },
  ],
  device: [
    { id: 'dev-conn', label: '장비연동현황' },
    { id: 'dev-status', label: '인터페이스현황' },
    { id: 'dev-error', label: '오류관리' },
    { id: 'dev-log', label: '통신로그' },
  ],
  analysis: [
    { id: 'stat-query', label: '통계조회' },
    { id: 'stat-report', label: '리포트' },
    { id: 'stat-data', label: '데이터분석' },
    { id: 'stat-trend', label: '추세분석' },
  ],
  field: [
    { id: 'field-status', label: '수발현황' },
    { id: 'field-transport', label: '운반관리' },
  ],
  outsource: [
    { id: 'out-rcpt', label: '외주접수' },
    { id: 'out-result', label: '외주결과' },
    { id: 'out-billing', label: '외주정산' },
  ],
  devicemgr: [
    { id: 'dmgr-setting', label: '장비설정' },
    { id: 'dmgr-protocol', label: '프로토콜관리' },
    { id: 'dmgr-conn', label: '연결관리' },
    { id: 'dmgr-monitor', label: '모니터링' },
  ],
}

function CompactBar2() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const isOpen = hoveredMenu !== null
  const { activeMenuId, setActiveMenu } = useAppStore()
  const { user, logout } = useAuthStore()

  return (
    <div className="relative shrink-0" onMouseLeave={() => setHoveredMenu(null)}>
      {/* 네비게이션 바 */}
      <div
        className={`flex items-center h-9 text-[11px] select-none transition-colors duration-200 ${
          isOpen ? 'bg-white border-b border-gray-200' : 'bg-[#0F172A] border-b border-white/8'
        }`}
      >
        <img
          src="/icons/ohc_LOGIN_Logo.png"
          alt="Seegene"
          className={`h-5 mx-3 shrink-0 transition-all duration-200 ${
            isOpen ? 'opacity-90' : 'brightness-0 invert opacity-70'
          }`}
        />
        <div
          className={`w-px h-4 mr-2 shrink-0 transition-colors duration-200 ${
            isOpen ? 'bg-gray-200' : 'bg-white/10'
          }`}
        />
        <div className="flex items-center flex-1 overflow-hidden h-full">
          {COMPACT_MENUS.map((menu) => (
            <button
              key={menu.id}
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onClick={() => setActiveMenu(menu.id)}
              className={`px-2.5 h-full whitespace-nowrap transition-colors duration-200 text-[11px] ${
                isOpen
                  ? hoveredMenu === menu.id
                    ? 'text-gray-900 bg-gray-50 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  : activeMenuId === menu.id
                    ? 'text-white bg-white/12 font-semibold'
                    : 'text-slate-100 hover:text-white hover:bg-white/8'
              }`}
            >
              {menu.label}
            </button>
          ))}
        </div>
        <div
          className={`flex items-center gap-2.5 px-3 border-l shrink-0 transition-colors duration-200 ${
            isOpen ? 'border-gray-200' : 'border-white/8'
          }`}
        >
          <div
            className={`flex items-center gap-1 rounded px-2 h-6 transition-colors duration-200 ${
              isOpen ? 'bg-gray-100' : 'bg-white/6'
            }`}
          >
            <Search
              size={10}
              className={`shrink-0 transition-colors duration-200 ${isOpen ? 'text-gray-400' : 'text-slate-400'}`}
            />
            <input
              placeholder="메뉴 검색"
              className={`w-24 text-[11px] bg-transparent outline-none transition-colors duration-200 ${
                isOpen
                  ? 'text-gray-700 placeholder:text-gray-400'
                  : 'text-slate-200 placeholder:text-slate-500'
              }`}
            />
          </div>
          <span
            className={`transition-colors duration-200 ${isOpen ? 'text-gray-600' : 'text-slate-300'}`}
          >
            {user?.userName ?? 'DT관리자'}
          </span>
          <button onClick={logout} title="로그아웃">
            <img
              src="/icons/btn_TF_Logout.png"
              alt="logout"
              className={`w-3.5 h-3.5 object-contain transition-all duration-200 ${
                isOpen
                  ? 'opacity-40 hover:opacity-70'
                  : 'brightness-0 invert opacity-40 hover:opacity-70'
              }`}
            />
          </button>
        </div>
      </div>

      {/* 메가메뉴 드롭다운 — 전체 카테고리 한눈에 */}
      <div
        className={`absolute top-full left-0 right-0 bg-white z-50 transition-all duration-200 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border-b border-gray-200 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-8 gap-x-5 gap-y-5 px-8 py-5">
          {COMPACT_MENUS.map((menu) => (
            <div key={menu.id} onMouseEnter={() => setHoveredMenu(menu.id)} className="min-w-0">
              {/* 카테고리 헤더 */}
              <button
                onClick={() => {
                  setActiveMenu(menu.id)
                  setHoveredMenu(null)
                }}
                className={`w-full text-left text-[11px] font-semibold pb-1.5 mb-1.5 border-b transition-colors duration-150 ${
                  hoveredMenu === menu.id
                    ? 'text-gray-900 border-gray-500'
                    : 'text-gray-400 border-gray-100 hover:text-gray-700'
                }`}
              >
                {menu.label}
              </button>
              {/* 세부 메뉴 — 세로 정렬 */}
              <div className="space-y-1">
                {(SUB_MENUS[menu.id] ?? []).map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setActiveMenu(sub.id)
                      setHoveredMenu(null)
                    }}
                    className={`block w-full text-left text-xs py-0.5 truncate transition-colors duration-100 ${
                      hoveredMenu === menu.id
                        ? 'text-gray-600 hover:text-gray-900 hover:font-medium'
                        : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompactBar() {
  const { activeMenuId, setActiveMenu } = useAppStore()
  const { user, logout } = useAuthStore()
  return (
    <div className="flex items-center h-9 bg-[#0F172A] border-b border-white/8 text-[11px] shrink-0 select-none">
      <img
        src="/icons/ohc_LOGIN_Logo.png"
        alt="Seegene"
        className="h-5 mx-3 brightness-0 invert opacity-70 shrink-0"
      />
      <div className="w-px h-4 bg-white/10 mr-2 shrink-0" />
      <div className="flex items-center flex-1 overflow-hidden h-full">
        {COMPACT_MENUS.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActiveMenu(menu.id)}
            className={`px-2.5 h-full whitespace-nowrap transition-colors ${
              activeMenuId === menu.id
                ? 'text-white bg-white/12 font-semibold'
                : 'text-slate-100 hover:text-white hover:bg-white/8'
            }`}
          >
            {menu.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2.5 px-3 border-l border-white/8 shrink-0">
        <div className="flex items-center gap-1 bg-white/6 rounded px-2 h-6">
          <Search size={10} className="text-slate-400 shrink-0" />
          <input
            placeholder="메뉴 검색"
            className="w-24 text-[11px] bg-transparent outline-none text-slate-200 placeholder:text-slate-500"
          />
        </div>
        <span className="text-slate-300">{user?.userName ?? 'DT관리자'}</span>
        <button onClick={logout} title="로그아웃">
          <img
            src="/icons/btn_TF_Logout.png"
            alt="logout"
            className="w-3.5 h-3.5 object-contain brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
          />
        </button>
      </div>
    </div>
  )
}

export default function MainLayout() {
  const { activeMenuId, setActiveMenu, layoutConcept } = useAppStore()
  const mainBg = MAIN_BG[layoutConcept] ?? 'bg-gray-100'
  const isSidebar = layoutConcept === 'E' || layoutConcept === 'F'
  const isCompact = layoutConcept === 'H'
  const isCompact2 = layoutConcept === 'I'

  if (isCompact2) {
    return (
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <CompactBar2 />
        <TabBar />
        <main className={`flex-1 overflow-auto ${mainBg}`}>
          <Outlet />
        </main>
        <ConceptSwitcher />
      </div>
    )
  }

  if (isCompact) {
    return (
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <CompactBar />
        <TabBar />
        <main className={`flex-1 overflow-auto ${mainBg}`}>
          <Outlet />
        </main>
        <ConceptSwitcher />
      </div>
    )
  }

  if (isSidebar) {
    return (
      <div className="flex flex-col h-screen w-screen overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <TabBar />
            <main className={`flex-1 overflow-auto ${mainBg}`}>
              <Outlet />
            </main>
          </div>
        </div>
        <ConceptSwitcher />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <TopMenuBar activeMenuId={activeMenuId} onMenuClick={setActiveMenu} />
      <Header />
      <TabBar />
      <main className={`flex-1 overflow-auto ${mainBg}`}>
        <Outlet />
      </main>
      <ConceptSwitcher />
    </div>
  )
}
