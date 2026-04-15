import { useState } from 'react'

export interface FileDownloadProps {
  /** 직접 다운로드할 URL */
  url?: string
  /** URL 대신 커스텀 다운로드 로직 (서버사이드 처리 등) */
  onDownload?: () => void | Promise<void>
  filename?: string
  label?: string
  disabled?: boolean
  className?: string
}

export default function FileDownload({
  url,
  onDownload,
  filename,
  label = '다운로드',
  disabled,
  className = '',
}: FileDownloadProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (url) {
      const a = document.createElement('a')
      a.href = url
      if (filename) a.download = filename
      a.click()
      return
    }

    if (onDownload) {
      setLoading(true)
      try {
        await onDownload()
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={handleClick}
      className={`h-6 px-2 text-xs border border-gray-300 bg-white text-gray-700
        hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? '처리중...' : label}
    </button>
  )
}
