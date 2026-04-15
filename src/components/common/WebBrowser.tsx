export interface WebBrowserProps {
  /** 표시할 URL */
  src?: string
  className?: string
  style?: React.CSSProperties
  title?: string
  sandbox?: string
}

/**
 * Nexacro WebBrowser / WebView 대응 — iframe 래퍼
 */
export default function WebBrowser({
  src,
  className = '',
  style,
  title = '',
  sandbox,
}: WebBrowserProps) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center border border-input bg-muted/30 text-xs text-muted-foreground ${className}`}
        style={style}
      >
        URL 없음
      </div>
    )
  }

  return (
    <iframe
      src={src}
      title={title}
      sandbox={sandbox}
      className={`w-full h-full border-0 ${className}`}
      style={style}
    />
  )
}
