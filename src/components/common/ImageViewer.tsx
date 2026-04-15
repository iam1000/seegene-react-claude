import { useState } from 'react'

export interface ImageViewerProps {
  src?: string
  alt?: string
  /** 클릭 시 원본 크기 팝업 표시 여부 */
  lightbox?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * Nexacro ImageViewer 대응 — 이미지 표시
 * lightbox=true 시 클릭하면 원본 크기로 오버레이 표시
 */
export default function ImageViewer({
  src,
  alt = '',
  lightbox = false,
  className = '',
  style,
}: ImageViewerProps) {
  const [open, setOpen] = useState(false)

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center border border-input bg-muted/30 text-xs text-muted-foreground ${className}`}
        style={style}
      >
        이미지 없음
      </div>
    )
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => lightbox && setOpen(true)}
        className={`object-contain ${lightbox ? 'cursor-zoom-in' : ''} ${className}`}
        style={style}
      />

      {lightbox && open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl leading-none hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}
