export interface GroupBoxProps {
  title?: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

/**
 * Nexacro GroupBox 대응 — 테두리 + 레이블 그룹 컨테이너
 * fieldset/legend 기반
 */
export default function GroupBox({ title, children, className = '', style }: GroupBoxProps) {
  return (
    <fieldset className={`border border-border rounded px-3 pt-1 pb-2 ${className}`} style={style}>
      {title && <legend className="px-1 text-xs text-muted-foreground font-medium">{title}</legend>}
      {children}
    </fieldset>
  )
}
