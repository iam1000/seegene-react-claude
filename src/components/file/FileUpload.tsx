import { useRef, useState } from 'react'

export interface FileUploadProps {
  /** 허용 파일 확장자/MIME (예: '.xlsx,.xls', 'image/*') */
  accept?: string
  multiple?: boolean
  onChange?: (files: File[]) => void
  disabled?: boolean
  /** 버튼 레이블 */
  label?: string
  className?: string
}

export default function FileUpload({
  accept,
  multiple = false,
  onChange,
  disabled,
  label = '파일 선택',
  className = '',
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [fileNames, setFileNames] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    setFileNames(files.map((f) => f.name))
    onChange?.(files)
    // 동일 파일 재선택 가능하도록 초기화
    e.target.value = ''
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className="hidden"
      />
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        className="h-6 px-2 text-xs border border-gray-300 bg-white text-gray-700
          hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        {label}
      </button>
      <span className="text-xs text-gray-500 truncate max-w-[200px]">
        {fileNames.length === 0
          ? '선택된 파일 없음'
          : fileNames.length === 1
            ? fileNames[0]
            : `${fileNames.length}개 파일 선택됨`}
      </span>
    </div>
  )
}
