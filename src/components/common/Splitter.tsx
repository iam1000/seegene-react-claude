import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '#/lib/utils'

export interface SplitterProps {
  /** 분할 방향: horizontal(좌우), vertical(상하) */
  direction?: 'horizontal' | 'vertical'
  /** 패널 초기 크기 비율 (백분율, 합계 100) — 기본 [50, 50] */
  initialSizes?: [number, number]
  /** 패널 최소 크기(px) */
  minSize?: number
  /** 패널 최대 크기(px) */
  maxSize?: number
  /** 구분선 두께(px) — 기본 4 */
  gutterSize?: number
  /** 크기 변경 콜백 (첫번째 패널의 비율 %) */
  onResize?: (sizes: [number, number]) => void
  /** 드래그 시작 콜백 */
  onDragStart?: () => void
  /** 드래그 종료 콜백 */
  onDragEnd?: (sizes: [number, number]) => void
  /** 두 패널 콘텐츠 */
  children: [React.ReactNode, React.ReactNode]
  /** 컨테이너 추가 클래스 */
  className?: string
  /** 컨테이너 인라인 스타일 */
  style?: React.CSSProperties
}

/** 키보드 이동 단위(px) */
const KEYBOARD_STEP = 8

/**
 * Nexacro lib_splitter.xjs 대응 — 드래그로 두 패널 크기 조절
 *
 * 원본 gfn_initSpliter 기능:
 * - horizontal / vertical 방향 지원
 * - 최소/최대 크기 제한
 * - 마우스 드래그로 위치 변경
 */
export default function Splitter({
  direction = 'horizontal',
  initialSizes = [50, 50],
  minSize,
  maxSize,
  gutterSize = 4,
  onResize,
  onDragStart,
  onDragEnd,
  children,
  className,
  style,
}: SplitterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const gutterRef = useRef<HTMLDivElement>(null)

  // 첫번째 패널 비율(%)
  const [ratio, setRatio] = useState(initialSizes[0])

  // 드래그 상태 추적
  const dragging = useRef(false)
  const startPos = useRef(0)
  const startRatio = useRef(0)

  const isHorizontal = direction === 'horizontal'

  /** px → 비율(%) 변환 + min/max 제한 적용 */
  const clampRatio = useCallback(
    (newRatio: number): number => {
      const container = containerRef.current
      if (!container) return newRatio

      const totalSize = isHorizontal ? container.offsetWidth : container.offsetHeight
      const availableSize = totalSize - gutterSize

      let clamped = newRatio

      if (minSize != null) {
        const minRatio = (minSize / availableSize) * 100
        clamped = Math.max(clamped, minRatio)
        // 두번째 패널의 최소 크기도 보장
        clamped = Math.min(clamped, 100 - minRatio)
      }

      if (maxSize != null) {
        const maxRatio = (maxSize / availableSize) * 100
        clamped = Math.min(clamped, maxRatio)
        // 두번째 패널의 최대 크기도 보장
        clamped = Math.max(clamped, 100 - maxRatio)
      }

      // 기본 한계: 0~100
      return Math.max(0, Math.min(100, clamped))
    },
    [isHorizontal, gutterSize, minSize, maxSize],
  )

  /** 마우스/터치 드래그 시작 */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault()
      dragging.current = true
      startPos.current = isHorizontal ? e.clientX : e.clientY
      startRatio.current = ratio

      // 포인터 캡처로 영역 밖 이동도 추적
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)

      onDragStart?.()
    },
    [isHorizontal, ratio, onDragStart],
  )

  /** 마우스/터치 이동 */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return

      const container = containerRef.current
      if (!container) return

      const totalSize = isHorizontal ? container.offsetWidth : container.offsetHeight
      const availableSize = totalSize - gutterSize
      const currentPos = isHorizontal ? e.clientX : e.clientY
      const delta = currentPos - startPos.current
      const deltaRatio = (delta / availableSize) * 100

      const newRatio = clampRatio(startRatio.current + deltaRatio)
      setRatio(newRatio)
      onResize?.([newRatio, 100 - newRatio])
    },
    [isHorizontal, gutterSize, clampRatio, onResize],
  )

  /** 마우스/터치 종료 */
  const handlePointerUp = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    onDragEnd?.([ratio, 100 - ratio])
  }, [ratio, onDragEnd])

  /** 키보드 접근성: 화살표 키로 크기 조절 */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const container = containerRef.current
      if (!container) return

      const totalSize = isHorizontal ? container.offsetWidth : container.offsetHeight
      const availableSize = totalSize - gutterSize
      const stepRatio = (KEYBOARD_STEP / availableSize) * 100

      let newRatio = ratio

      if (isHorizontal) {
        if (e.key === 'ArrowLeft') newRatio = ratio - stepRatio
        else if (e.key === 'ArrowRight') newRatio = ratio + stepRatio
        else return
      } else {
        if (e.key === 'ArrowUp') newRatio = ratio - stepRatio
        else if (e.key === 'ArrowDown') newRatio = ratio + stepRatio
        else return
      }

      e.preventDefault()
      const clamped = clampRatio(newRatio)
      setRatio(clamped)
      onResize?.([clamped, 100 - clamped])
    },
    [isHorizontal, gutterSize, ratio, clampRatio, onResize],
  )

  // 드래그 중 텍스트 선택 방지
  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      if (dragging.current) e.preventDefault()
    }
    document.addEventListener('selectstart', handleSelectStart)
    return () => document.removeEventListener('selectstart', handleSelectStart)
  }, [])

  const gutterStyle = isHorizontal
    ? `w-[${gutterSize}px] cursor-col-resize`
    : `h-[${gutterSize}px] cursor-row-resize`

  return (
    <div
      ref={containerRef}
      className={cn('flex overflow-hidden', isHorizontal ? 'flex-row' : 'flex-col', className)}
      style={style}
    >
      {/* 첫번째 패널 */}
      <div
        className="overflow-auto"
        style={{
          [isHorizontal ? 'width' : 'height']: `calc(${ratio}% - ${gutterSize / 2}px)`,
          flexShrink: 0,
        }}
      >
        {children[0]}
      </div>

      {/* 구분선 (드래그 핸들) — biome: hr은 interactive 속성 불가하므로 div 유지 */}
      {/* biome-ignore lint/a11y/useSemanticElements: hr 요소는 포인터/키보드 이벤트 핸들러를 지원하지 않으므로 div + role 사용 */}
      <div
        ref={gutterRef}
        role="separator"
        aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
        aria-valuenow={Math.round(ratio)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={isHorizontal ? '좌우 패널 크기 조절' : '상하 패널 크기 조절'}
        tabIndex={0}
        className={cn(
          'flex-shrink-0 select-none',
          'bg-border hover:bg-primary/30 active:bg-primary/50',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          gutterStyle,
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      />

      {/* 두번째 패널 */}
      <div
        className="flex-1 overflow-auto"
        style={{
          minWidth: 0,
          minHeight: 0,
        }}
      >
        {children[1]}
      </div>
    </div>
  )
}
