import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useAppStore } from '#/store/useAppStore'

const MENUS = [
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

const THEME = {
  A: {
    wrap: 'bg-[#1c3a6e] text-white',
    title: 'border-r border-[#2d4f8a]',
    hover: 'hover:bg-[#2d4f8a]',
    active: 'bg-[#2d4f8a]',
    right: 'border-l border-[#2d4f8a] text-gray-300',
    winHover: 'hover:bg-[#2d4f8a]',
    winClose: 'hover:bg-red-600',
  },
  B: {
    wrap: 'bg-white border-b border-gray-200 text-gray-700',
    title: 'border-r border-gray-200 text-gray-400',
    hover: 'hover:bg-blue-50 hover:text-blue-700',
    active: 'bg-blue-50 text-blue-700',
    right: 'border-l border-gray-200 text-gray-400',
    winHover: 'hover:bg-gray-100',
    winClose: 'hover:bg-red-500 hover:text-white',
  },
  C: {
    wrap: 'bg-gradient-to-r from-[#0a0f1e] to-[#0f172a] text-slate-100 border-t-2 border-cyan-500',
    title: 'border-r border-slate-700/60 text-cyan-400 font-semibold',
    hover: 'hover:bg-cyan-500/10 hover:text-cyan-300',
    active: 'bg-cyan-500/15 text-cyan-300 border-b-2 border-cyan-400',
    right: 'border-l border-slate-700/60 text-slate-400',
    winHover: 'hover:bg-slate-700',
    winClose: 'hover:bg-red-600',
  },
  D: {
    wrap: 'bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white',
    title: 'border-r border-blue-400/40',
    hover: 'hover:bg-white/15',
    active: 'bg-white/20',
    right: 'border-l border-blue-400/40 text-blue-200',
    winHover: 'hover:bg-white/15',
    winClose: 'hover:bg-red-500',
  },
  // ── Concept G : Corporate Medical ──────────────────────────────────────
  G: {
    wrap: 'bg-white border-b border-gray-100 text-gray-800',
    title: 'border-r border-gray-200 text-[#D33D44] font-semibold',
    hover: 'hover:bg-red-50 hover:text-[#D33D44]',
    active: 'bg-red-50 text-[#D33D44]',
    right: 'border-l border-gray-200 text-gray-400',
    winHover: 'hover:bg-gray-100',
    winClose: 'hover:bg-[#D33D44] hover:text-white',
  },
} as const

interface TopMenuBarProps {
  activeMenuId?: string | null
  onMenuClick?: (menuId: string) => void
}

export default function TopMenuBar({ activeMenuId, onMenuClick }: TopMenuBarProps) {
  const [now, setNow] = useState(dayjs())
  const { layoutConcept } = useAppStore()
  const t = THEME[layoutConcept as keyof typeof THEME] ?? THEME.A

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`flex items-center h-8 text-xs select-none shrink-0 ${t.wrap}`}>
      <span className={`px-3 whitespace-nowrap font-medium ${t.title}`}>
        재단법인 씨젠의료재단 LIS-QA
      </span>
      <div className="flex items-center flex-1 overflow-hidden">
        {MENUS.map((menu) => (
          <button
            key={menu.id}
            onClick={() => onMenuClick?.(menu.id)}
            className={`px-2.5 h-8 whitespace-nowrap transition-colors ${t.hover} ${
              activeMenuId === menu.id ? t.active : ''
            }`}
          >
            {menu.label}
          </button>
        ))}
      </div>
      <div className={`flex items-center gap-2 px-3 text-[11px] ${t.right}`}>
        <span>{now.format('MM-DD HH:mm')}</span>
        <div className="flex items-center gap-1 ml-1">
          <button
            className={`w-4 h-4 flex items-center justify-center rounded text-[10px] ${t.winHover}`}
          >
            _
          </button>
          <button
            className={`w-4 h-4 flex items-center justify-center rounded text-[10px] ${t.winHover}`}
          >
            □
          </button>
          <button
            className={`w-4 h-4 flex items-center justify-center rounded text-[10px] ${t.winClose}`}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
