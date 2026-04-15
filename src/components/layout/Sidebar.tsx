import {
  BarChart2,
  Briefcase,
  Building2,
  Cable,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  LifeBuoy,
  Server,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  TrendingUp,
  Truck,
} from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '#/store/useAppStore'

const MENU_ITEMS = [
  { id: 'system', label: '시스템관리', icon: Settings },
  { id: 'work', label: '업무관리', icon: Briefcase },
  { id: 'clinical', label: '임상사업', icon: Stethoscope },
  { id: 'customer', label: '고객지원', icon: LifeBuoy },
  { id: 'inspection', label: '검사관리', icon: FlaskConical },
  { id: 'quality', label: '품질관리', icon: ShieldCheck },
  { id: 'accuracy', label: '정도관리', icon: BarChart2 },
  { id: 'standard', label: '기준설정', icon: SlidersHorizontal },
  { id: 'result', label: '결과자관리', icon: ClipboardList },
  { id: 'external', label: '학부검사', icon: GraduationCap },
  { id: 'device', label: '장비인터페이스', icon: Cable },
  { id: 'analysis', label: '분석통계', icon: TrendingUp },
  { id: 'field', label: '현장수발', icon: Truck },
  { id: 'outsource', label: '외주병리', icon: Building2 },
  { id: 'devicemgr', label: '장비인터페이스관리', icon: Server },
]

// ── Concept E : Warm Editorial ─────────────────────────────────────────────
// Deep espresso sidebar — unexpected warmth in medical software
const THEME_E = {
  root: 'bg-[#1C1409] border-r border-[#2E2010]',
  header: 'border-b border-[#2E2010]',
  dot: 'bg-[#C4541A] shadow-[0_0_8px_2px_rgba(196,84,26,0.45)]',
  item: 'text-[#C9B99A] font-medium hover:bg-[#2E2010] hover:text-[#F5EDD9]',
  itemActive: 'bg-[#C4541A]/15 text-[#F5EDD9] border-r-2 border-[#C4541A] font-semibold',
  icon: 'text-[#6B5240] group-hover:text-[#C9B99A]',
  iconActive: 'text-[#C4541A]',
  collapseBtn: 'border-t border-[#2E2010] text-[#5C4430] hover:text-[#C9B99A] hover:bg-[#2E2010]',
}

// ── Concept F : Precision Instrument ──────────────────────────────────────
// Lab instrument HMI — true black, electric cyan, zero noise
const THEME_F = {
  root: 'bg-[#111827] border-r border-gray-700',
  header: 'border-b border-gray-700',
  dot: 'bg-[#00D4FF] shadow-[0_0_10px_3px_rgba(0,212,255,0.55)]',
  item: 'text-gray-200 font-medium hover:bg-gray-700 hover:text-white',
  itemActive: 'bg-cyan-950 text-cyan-300 border-r-2 border-cyan-400 font-semibold',
  icon: 'text-gray-400 group-hover:text-gray-200',
  iconActive: 'text-cyan-400',
  collapseBtn: 'border-t border-gray-700 text-gray-500 hover:text-gray-200 hover:bg-gray-700',
}

const THEMES = { E: THEME_E, F: THEME_F }

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { activeMenuId, setActiveMenu, layoutConcept } = useAppStore()
  const t = THEMES[layoutConcept as 'E' | 'F'] ?? THEME_E

  return (
    <div
      className={`flex flex-col shrink-0 transition-all duration-200 ${
        collapsed ? 'w-[46px]' : 'w-52'
      } ${t.root}`}
    >
      {/* 헤더 여백 */}
      <div className={`h-2 ${t.header}`} />

      {/* 메뉴 */}
      <div className="flex-1 overflow-y-auto py-1 scrollbar-none">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon
          const active = activeMenuId === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              title={collapsed ? item.label : undefined}
              className={`group w-full flex items-center gap-2.5 h-9 px-3 text-xs transition-colors ${
                active ? t.itemActive : t.item
              }`}
            >
              <Icon size={14} className={`shrink-0 ${active ? t.iconActive : t.icon}`} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          )
        })}
      </div>

      {/* 접기 */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center justify-center h-8 transition-colors ${t.collapseBtn}`}
      >
        {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
      </button>
    </div>
  )
}
