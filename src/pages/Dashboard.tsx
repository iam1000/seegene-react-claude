import dayjs from 'dayjs'
import {
  Activity,
  BarChart2,
  Briefcase,
  Building2,
  Cable,
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
import { useEffect, useState } from 'react'
import { useAppStore } from '#/store/useAppStore'
import { useAuthStore } from '#/store/useAuthStore'

function useClock() {
  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const t = setInterval(() => setNow(dayjs()), 1000)
    return () => clearInterval(t)
  }, [])
  return now
}

// ── Concept A : 기존 ──────────────────────────────────────────────────────
function ConceptA() {
  return (
    <div className="flex items-center justify-center h-full bg-[#e8e8e8]">
      <img
        src="/icons/img_WF_Logo.png"
        alt="Seegene"
        className="w-80 opacity-80 select-none pointer-events-none"
      />
    </div>
  )
}

// ── Concept B : 라이트 ───────────────────────────────────────────────────
function ConceptB() {
  const { user } = useAuthStore()
  return (
    <div className="flex items-center justify-center h-full bg-white">
      <div className="flex flex-col items-center gap-6 text-center select-none">
        <img src="/icons/ohc_LOGIN_Logo.png" alt="Seegene" className="h-20 pointer-events-none" />
        <div className="h-px w-40 bg-gray-200" />
        <p className="text-sm text-gray-500">
          안녕하세요,{' '}
          <span className="font-semibold text-gray-800">{user?.userName ?? 'DT관리자'}</span>님
        </p>
      </div>
    </div>
  )
}

// ── Concept C : 다크 ──────────────────────────────────────────────────────
function ConceptC() {
  const now = useClock()
  const { user } = useAuthStore()
  return (
    <div className="flex items-center justify-center h-full bg-[#0d1117]">
      <div className="flex flex-col items-center gap-6 select-none">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/icons/ci_ONLY_Logo.png"
            alt="Seegene"
            className="w-56 brightness-0 invert opacity-20 pointer-events-none"
          />
          <p className="text-2xl text-white/80 font-semibold tracking-wider">Open Healthcare</p>
        </div>
        <p className="text-5xl font-thin text-white/80 tracking-widest tabular-nums">
          {now.format('HH:mm')}
          <span className="text-2xl text-white/30 ml-1">{now.format(':ss')}</span>
        </p>
        <p className="text-xs text-white/20 tracking-[0.3em]">{now.format('YYYY . MM . DD')}</p>
        <div className="h-px w-32 bg-white/10 my-1" />
        <p className="text-xs text-white/30 tracking-wider">{user?.userName ?? 'DT관리자'}</p>
      </div>
    </div>
  )
}

// ── Concept D : 블루 ─────────────────────────────────────────────────────
const QUICK_MENUS_D = [
  { id: 'rcpt', label: '검체접수', icon: FlaskConical },
  { id: 'inspection', label: '검사관리', icon: Stethoscope },
  { id: 'result', label: '결과관리', icon: ClipboardList },
  { id: 'accuracy', label: '정도관리', icon: BarChart2 },
  { id: 'device', label: '장비인터페이스', icon: Cable },
  { id: 'work', label: '업무관리', icon: Briefcase },
  { id: 'standard', label: '기준설정', icon: SlidersHorizontal },
  { id: 'analysis', label: '분석통계', icon: TrendingUp },
]
function ConceptD() {
  const now = useClock()
  const { user } = useAuthStore()
  const { setActiveMenu } = useAppStore()
  return (
    <div className="h-full bg-[#f0f7ff] overflow-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-blue-400 mb-1">
              {now.format('YYYY년 MM월 DD일')} · {now.format('HH:mm:ss')}
            </p>
            <h1 className="text-xl font-semibold text-gray-800">
              안녕하세요, <span className="text-blue-600">{user?.userName ?? 'DT관리자'}</span>님
            </h1>
          </div>
          <img
            src="/icons/ohc_LOGIN_Logo.png"
            alt="Seegene"
            className="h-10 opacity-50 pointer-events-none select-none"
          />
        </div>
        <div className="grid grid-cols-4 gap-3 mb-6">
          {QUICK_MENUS_D.map((m) => {
            const Icon = m.icon
            return (
              <button
                key={m.id}
                onClick={() => setActiveMenu(m.id)}
                className="flex flex-col items-center gap-2.5 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400 hover:shadow-sm transition-all group"
              >
                <Icon
                  size={20}
                  className="text-blue-400 group-hover:text-blue-600 transition-colors"
                />
                <span className="text-xs text-gray-500 group-hover:text-blue-600 font-medium transition-colors">
                  {m.label}
                </span>
              </button>
            )
          })}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: '오늘 접수', value: '—' },
            { label: '검사 진행중', value: '—' },
            { label: '보고 완료', value: '—' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-blue-100 p-4">
              <p className="text-xs text-gray-400 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-blue-600">
                {s.value}
                <span className="text-sm font-normal text-gray-300 ml-1">건</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Concept E : Warm Editorial ────────────────────────────────────────────
const QUICK_MENUS_E = [
  { id: 'inspection', label: '검사관리', icon: FlaskConical },
  { id: 'accuracy', label: '정도관리', icon: BarChart2 },
  { id: 'result', label: '결과자관리', icon: ClipboardList },
  { id: 'quality', label: '품질관리', icon: ShieldCheck },
  { id: 'analysis', label: '분석통계', icon: TrendingUp },
  { id: 'device', label: '장비인터페이스', icon: Cable },
  { id: 'system', label: '시스템관리', icon: Settings },
  { id: 'work', label: '업무관리', icon: Briefcase },
]
function ConceptE() {
  const now = useClock()
  const { user } = useAuthStore()
  const { setActiveMenu } = useAppStore()
  return (
    <div className="h-full bg-[#FAF7F2] overflow-auto">
      <div className="max-w-3xl mx-auto px-10 py-10">
        {/* 헤딩 — editorial typography */}
        <div className="mb-8">
          <p className="text-xs text-[#A89070] tracking-widest uppercase mb-3 tabular-nums">
            {now.format('YYYY년 MM월 DD일')} &nbsp;—&nbsp; {now.format('HH:mm:ss')}
          </p>
          <h1 className="text-4xl font-bold text-[#1C1409] leading-none">
            {user?.userName ?? 'DT관리자'}
            <span className="text-[#C4541A]">.</span>
          </h1>
          <p className="text-sm text-[#7D6548] mt-2.5">
            오픈헬스케어 임상검사팀에 오신 것을 환영합니다
          </p>
        </div>

        {/* 앰버 룰 */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-0.5 bg-[#C4541A]" />
          <div className="h-px flex-1 bg-[#E8DFCF]" />
        </div>

        {/* 통계 — editorial horizontal divide */}
        <div className="grid grid-cols-3 divide-x divide-[#E8DFCF] mb-10">
          {[
            { label: '오늘 접수', value: '247' },
            { label: '검사 진행중', value: '89' },
            { label: '보고 완료', value: '158' },
          ].map((s, i) => (
            <div key={s.label} className={i === 0 ? 'pr-8' : i === 2 ? 'pl-8' : 'px-8'}>
              <p className="text-xs text-[#A89070] uppercase tracking-widest mb-3">{s.label}</p>
              <p className="text-5xl font-bold text-[#1C1409] leading-none tabular-nums">
                {s.value}
              </p>
              <p className="text-xs text-[#C4541A] mt-1.5 font-medium">건</p>
            </div>
          ))}
        </div>

        {/* 빠른 메뉴 */}
        <div>
          <p className="text-xs text-[#A89070] uppercase tracking-widest mb-4">빠른 메뉴</p>
          <div className="grid grid-cols-4 gap-2.5">
            {QUICK_MENUS_E.map((m) => {
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMenu(m.id)}
                  className="group flex items-center gap-3 px-4 py-3.5 bg-white border border-[#E8DFCF] rounded-lg hover:border-[#C4541A] hover:shadow-[0_2px_12px_rgba(196,84,26,0.1)] transition-all text-left"
                >
                  <Icon size={15} className="text-[#C4541A] shrink-0" />
                  <span className="text-sm text-[#3D2B1A] font-medium group-hover:text-[#C4541A] transition-colors">
                    {m.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Concept F : Precision Instrument ─────────────────────────────────────
const QUICK_MENUS_F = [
  { id: 'inspection', label: '검사관리', icon: FlaskConical },
  { id: 'accuracy', label: '정도관리', icon: BarChart2 },
  { id: 'result', label: '결과자관리', icon: ClipboardList },
  { id: 'quality', label: '품질관리', icon: ShieldCheck },
  { id: 'clinical', label: '임상사업', icon: Stethoscope },
  { id: 'customer', label: '고객지원', icon: LifeBuoy },
  { id: 'external', label: '학부검사', icon: GraduationCap },
  { id: 'outsource', label: '외주병리', icon: Building2 },
  { id: 'device', label: '장비인터페이스', icon: Cable },
  { id: 'field', label: '현장수발', icon: Truck },
  { id: 'standard', label: '기준설정', icon: SlidersHorizontal },
  { id: 'devicemgr', label: '장비인터페이스관리', icon: Server },
]
function ConceptF() {
  const now = useClock()
  const { user } = useAuthStore()
  const { setActiveMenu } = useAppStore()
  return (
    <div className="h-full bg-[#0D1117] overflow-auto">
      <div className="max-w-3xl mx-auto px-10 py-10">
        {/* 상태 표시줄 */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-[#00D4FF]"
              style={{ boxShadow: '0 0 8px rgba(0,212,255,0.9)' }}
            />
            <span className="text-xs text-[#00D4FF] tracking-[0.2em] uppercase font-medium">
              시스템 온라인
            </span>
          </div>
          <span className="text-xs text-slate-400 tracking-widest tabular-nums">
            {now.format('YYYY.MM.DD')} · {now.format('HH:mm:ss')}
          </span>
        </div>

        {/* 사용자 */}
        <div className="mb-10">
          <p className="text-xs text-slate-500 uppercase tracking-[0.3em] mb-3">OPERATOR</p>
          <h1 className="text-5xl font-light text-white leading-none tracking-tight">
            {user?.userName ?? 'DT관리자'}
          </h1>
          <div
            className="w-14 h-[2px] mt-5"
            style={{ background: '#00D4FF', boxShadow: '0 0 10px rgba(0,212,255,0.7)' }}
          />
        </div>

        {/* 통계 — 계기판 스타일 */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            {
              label: 'TODAY · RCPT',
              value: '247',
              color: '#00D4FF',
              border: 'rgba(0,212,255,0.3)',
              bg: 'rgba(0,212,255,0.05)',
            },
            {
              label: 'IN · PROGRESS',
              value: '89',
              color: '#00FF94',
              border: 'rgba(0,255,148,0.3)',
              bg: 'rgba(0,255,148,0.05)',
            },
            {
              label: 'REPORTED',
              value: '158',
              color: '#e2e8f0',
              border: 'rgba(226,232,240,0.2)',
              bg: 'rgba(226,232,240,0.04)',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg px-6 py-6"
              style={{ border: `1px solid ${s.border}`, background: s.bg }}
            >
              <p className="text-[10px] text-slate-400 tracking-[0.25em] mb-5 font-medium uppercase">
                {s.label}
              </p>
              <p className="text-5xl font-semibold tabular-nums" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-xs text-slate-500 mt-2 tracking-widest">CASES</p>
            </div>
          ))}
        </div>

        {/* 빠른 메뉴 */}
        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-4 font-medium">
            QUICK · ACCESS
          </p>
          <div className="grid grid-cols-6 gap-2">
            {QUICK_MENUS_F.map((m) => {
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMenu(m.id)}
                  className="group flex flex-col items-center gap-2.5 p-3.5 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-cyan-950 hover:border-cyan-700 transition-all"
                >
                  <Icon
                    size={16}
                    className="text-slate-400 group-hover:text-[#00D4FF] transition-colors"
                  />
                  <span className="text-xs text-slate-300 group-hover:text-cyan-300 text-center leading-tight transition-colors">
                    {m.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Concept G : Corporate Medical ────────────────────────────────────────
const QUICK_MENUS_G = [
  { id: 'inspection', label: '검사관리', icon: FlaskConical },
  { id: 'accuracy', label: '정도관리', icon: BarChart2 },
  { id: 'result', label: '결과자관리', icon: ClipboardList },
  { id: 'quality', label: '품질관리', icon: ShieldCheck },
  { id: 'analysis', label: '분석통계', icon: TrendingUp },
  { id: 'device', label: '장비인터페이스', icon: Cable },
  { id: 'clinical', label: '임상사업', icon: Stethoscope },
  { id: 'system', label: '시스템관리', icon: Settings },
]
function ConceptG() {
  const now = useClock()
  const { user } = useAuthStore()
  const { setActiveMenu } = useAppStore()
  return (
    <div className="h-full bg-[#F4F4F5] overflow-auto">
      {/* 히어로 배너 */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-10 py-7 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-1 h-14 bg-[#D33D44] rounded-full shrink-0" />
            <div>
              <p className="text-[11px] text-gray-400 tracking-widest tabular-nums mb-1">
                {now.format('YYYY년 MM월 DD일')} &nbsp;·&nbsp; {now.format('HH:mm:ss')}
              </p>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                오픈헬스케어 임상검사시스템
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">Laboratory Information System</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-gray-400 mb-0.5">접속 사용자</p>
            <p className="text-base font-semibold text-gray-800">{user?.userName ?? 'DT관리자'}</p>
            <p className="text-xs text-gray-400">{user?.userId ?? 'DT9999'}</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-10 py-6">
        {/* 통계 카드 */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[
            {
              label: '오늘 접수',
              value: '247',
              accent: '#D33D44',
              light: '#FEF2F2',
              grad: 'from-red-50 to-white',
            },
            {
              label: '검사 진행중',
              value: '89',
              accent: '#2563EB',
              light: '#EFF6FF',
              grad: 'from-blue-50 to-white',
            },
            {
              label: '보고 완료',
              value: '158',
              accent: '#16A34A',
              light: '#F0FDF4',
              grad: 'from-green-50 to-white',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
              style={{
                background: `linear-gradient(160deg, ${s.light} 0%, #ffffff 60%)`,
                boxShadow:
                  '0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: s.light,
                  boxShadow: `0 2px 8px ${s.accent}22, inset 0 1px 0 rgba(255,255,255,0.8)`,
                }}
              >
                <Activity size={18} style={{ color: s.accent }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">{s.label}</p>
                <p
                  className="text-2xl font-bold tabular-nums leading-none"
                  style={{ color: s.accent }}
                >
                  {s.value}
                  <span className="text-xs font-normal text-gray-400 ml-1">건</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 빠른 메뉴 */}
        <div
          className="rounded-xl p-6"
          style={{
            background: '#ffffff',
            boxShadow:
              '0 1px 2px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)',
          }}
        >
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
            빠른 메뉴
          </p>
          <div className="grid grid-cols-4 gap-2.5">
            {QUICK_MENUS_G.map((m) => {
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMenu(m.id)}
                  className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white transition-all duration-150 text-left hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 4px 8px rgba(211,61,68,0.12), 0 8px 20px rgba(211,61,68,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.9)'
                  }}
                >
                  <Icon
                    size={14}
                    className="text-gray-400 group-hover:text-[#D33D44] shrink-0 transition-colors"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-[#D33D44] font-medium transition-colors">
                    {m.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Concept H : Compact Pro ──────────────────────────────────────────────
const MODULES_H = [
  { id: 'inspection', label: '검사관리', icon: FlaskConical, desc: '검체 접수 · 검사 처리' },
  { id: 'accuracy', label: '정도관리', icon: BarChart2, desc: 'QC 관리 · 통계 분석' },
  { id: 'result', label: '결과자관리', icon: ClipboardList, desc: '검사 결과 보고' },
  { id: 'quality', label: '품질관리', icon: ShieldCheck, desc: '품질 지표 관리' },
  { id: 'analysis', label: '분석통계', icon: TrendingUp, desc: '데이터 분석 · 리포트' },
  { id: 'device', label: '장비인터페이스', icon: Cable, desc: '장비 연동 · 모니터링' },
  { id: 'clinical', label: '임상사업', icon: Stethoscope, desc: '임상 사업 관리' },
  { id: 'system', label: '시스템관리', icon: Settings, desc: '시스템 설정 · 권한' },
]
function ConceptH() {
  const now = useClock()
  const { user } = useAuthStore()
  const { setActiveMenu } = useAppStore()
  return (
    <div className="h-full bg-[#0F172A] overflow-auto">
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* 상태 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              SYSTEM ONLINE
            </span>
            <span className="text-[11px] text-slate-500 tabular-nums">
              {now.format('YYYY-MM-DD HH:mm:ss')}
            </span>
          </div>
          <span className="text-[11px] text-slate-500">
            {user?.userName ?? 'DT관리자'}&nbsp;·&nbsp;{user?.userId ?? 'DT9999'}
          </span>
        </div>

        {/* KPI */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            {
              label: '오늘 접수',
              value: '247',
              color: 'text-sky-400',
              border: 'border-sky-900/50',
            },
            {
              label: '검사 진행중',
              value: '89',
              color: 'text-amber-400',
              border: 'border-amber-900/50',
            },
            {
              label: '보고 완료',
              value: '158',
              color: 'text-emerald-400',
              border: 'border-emerald-900/50',
            },
          ].map((s) => (
            <div key={s.label} className={`px-5 py-4 rounded border ${s.border} bg-slate-800/20`}>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">{s.label}</p>
              <p className={`text-3xl font-bold tabular-nums leading-none ${s.color}`}>
                {s.value}
                <span className="text-sm font-normal text-slate-600 ml-1.5">건</span>
              </p>
            </div>
          ))}
        </div>

        {/* 모듈 */}
        <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-3">모듈</p>
        <div className="grid grid-cols-4 gap-3">
          {MODULES_H.map((m) => {
            const Icon = m.icon
            return (
              <button
                key={m.id}
                onClick={() => setActiveMenu(m.id)}
                className="group flex flex-col gap-3 p-4 rounded border border-slate-800 bg-slate-800/20 hover:bg-slate-700/40 hover:border-slate-600 transition-all text-left"
              >
                <Icon
                  size={16}
                  className="text-slate-500 group-hover:text-sky-400 transition-colors"
                />
                <div>
                  <p className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-slate-600 mt-0.5">{m.desc}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── 라우터 ────────────────────────────────────────────────────────────────
// ── Concept K : 라이트2 ───────────────────────────────────────────────
function ConceptK() {
  const { user } = useAuthStore()
  return (
    <div className="flex items-center justify-center h-full bg-[#f0f0f0]">
      <div className="flex flex-col items-center gap-6 text-center select-none">
        <img src="/icons/ohc_LOGIN_Logo.png" alt="Seegene" className="h-20 pointer-events-none" />
        <div className="h-px w-40 bg-gray-300" />
        <p className="text-sm text-gray-500">
          안녕하세요,{' '}
          <span className="font-semibold text-gray-800">{user?.userName ?? 'DT관리자'}</span>님
        </p>
      </div>
    </div>
  )
}

const CONCEPTS = {
  A: ConceptA,
  B: ConceptB,
  C: ConceptC,
  D: ConceptD,
  E: ConceptE,
  F: ConceptF,
  G: ConceptG,
  H: ConceptH,
  I: ConceptH,
  J: ConceptA,
  K: ConceptK,
}

export default function Dashboard() {
  const { layoutConcept } = useAppStore()
  const Component = CONCEPTS[layoutConcept] ?? ConceptA
  return <Component />
}
