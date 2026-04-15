import { useCallback, useRef, useState } from 'react'
import apiClient from '#/api/client'

// =============================================================================
// useFile — File.xjs 전환 훅
//
// 원본: cmmlib/File.xjs (449줄, 14함수)
//
// 전환 매핑:
//   gfn_fileUpload            → uploadFile / uploadFiles
//   gfn_transferDext          → uploadFile (표준 multipart로 대체)
//   gfn_setFileInfo           → applyUploadResult (Dataset 반영 유틸)
//   gfn_addFileInfo           → (applyUploadResult 내부 로직으로 통합)
//   gfn_deleteFileInfo        → (Dataset 직접 조작으로 대체)
//   gfn_setFileList           → (Dataset → UI 바인딩은 React 상태로 대체)
//   gfn_cutFileSize           → formatFileSize
//   gfn_readTextFile          → readTextFile (FileReader API)
//   gfn_getFileUploadLatestPath / gfn_setFileUploadLatestPath → SKIP (웹 보안상 불가)
//   newJsonToString / delJsonToString → SKIP (디버깅 전용)
//   _gfn_virtualTextFile_*    → SKIP (내부 이벤트, FileReader로 대체)
// =============================================================================

// -----------------------------------------------------------------------------
// 타입 정의
// -----------------------------------------------------------------------------

/** 파일 업로드 옵션 */
export interface UploadOptions {
  /** 업로드 API 경로 (기본: '/file/upload') */
  url?: string
  /** 서비스 그룹 (la, sl, rc, lm, dt, rm 등) */
  svcGroup?: string
  /** FormData에 추가할 부가 파라미터 */
  params?: Record<string, string>
  /** 최대 파일 크기 (bytes) */
  maxSize?: number
  /** 업로드 진행률 콜백 (0~100) */
  onProgress?: (percent: number) => void
  /** 업로드 성공 콜백 */
  onSuccess?: (result: UploadResult) => void
  /** 업로드 실패 콜백 */
  onError?: (error: Error) => void
}

/** 서버 업로드 응답 — 원본 gfn_setFileInfo의 jsonNew 구조 대응 */
export interface UploadResult {
  /** 원본 파일명 */
  originalName: string
  /** 서버 저장 파일명 */
  uploadName: string
  /** 파일 GUID */
  guid: string
  /** 파일 크기 (bytes) */
  size: number
  /** 서버 저장 경로 */
  uploadPath: string
  /** 논리 경로 */
  logicalPath: string
}

/** 다중 파일 업로드 응답 */
export interface MultiUploadResult {
  results: UploadResult[]
  /** 실패한 파일 (있을 경우) */
  errors: Array<{ file: File; error: Error }>
}

/** 파일 다운로드 옵션 */
export interface DownloadOptions {
  /** 다운로드 API 경로 (기본: '/file/download') */
  url?: string
  /** 서비스 그룹 */
  svcGroup?: string
}

/** 파일 유효성 검사 규칙 */
export interface FileValidationRules {
  /** 최대 파일 크기 (bytes) */
  maxSize?: number
  /** 허용 확장자 (예: ['.xlsx', '.pdf', '.jpg']) */
  allowedExtensions?: string[]
  /** 허용 MIME 타입 (예: ['image/*', 'application/pdf']) */
  allowedMimeTypes?: string[]
}

/** 파일 유효성 검사 결과 */
export interface FileValidationResult {
  valid: boolean
  errors: string[]
}

/** 파일 정보 — 원본 Dataset 컬럼 구조 대응 */
export interface FileInfo {
  /** 첨부파일 순번 (ATFL_SQN) */
  atflSqn?: string
  /** 서버 파일명 (ATFL_NM) */
  atflNm?: string
  /** 서버 경로 (ATFL_PATH_NM) */
  atflPathNm?: string
  /** 실제 파일명 (RL_FILE_NM) */
  rlFileNm: string
  /** 파일 크기 (ATCH_FILE_SZ) */
  atchFileSz: number
  /** 확장자 (EXT_NM) */
  extNm: string
  /** 프로그램 ID (PGM_ID) */
  pgmId?: string
  /** 삭제 여부 (DEL_YN) */
  delYn: 'Y' | 'N'
}

// -----------------------------------------------------------------------------
// 유틸리티 함수 (훅 외부에서도 사용 가능)
// -----------------------------------------------------------------------------

/**
 * 파일 크기를 사람이 읽기 편한 문자열로 변환한다.
 *
 * 원본: gfn_cutFileSize — 재귀적으로 1024 단위 나누어 KB/MB/GB/TB/PB 반환.
 * 동일 로직을 반복문으로 재구현.
 *
 * @param bytes - 파일 크기 (bytes)
 * @param fractionDigits - 소수점 자릿수 (기본 2)
 * @returns 포맷된 문자열 (예: "1.50 MB")
 */
export function formatFileSize(bytes: number, fractionDigits = 2): string {
  if (bytes < 0) return '0 Byte'
  if (bytes === 0) return '0 Byte'

  const units = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB']
  const rate = 1024

  let unitIndex = 0
  let size = bytes

  while (size >= rate && unitIndex < units.length - 1) {
    size /= rate
    unitIndex++
  }

  if (unitIndex === 0) {
    return `${bytes} Byte`
  }

  return `${size.toFixed(fractionDigits)} ${units[unitIndex]}`
}

/**
 * 파일명에서 확장자를 추출한다.
 *
 * 원본: gfn_setFileInfo 내부의 확장자 추출 로직 대응
 * `String(name).split(".")` → 마지막 요소 반환
 */
export function getFileExtension(fileName: string): string {
  const parts = fileName.split('.')
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : ''
}

/**
 * 파일 유효성을 검사한다.
 *
 * @param file - 검사할 파일
 * @param rules - 검사 규칙
 * @returns 검사 결과 (valid + errors 배열)
 */
export function validateFile(file: File, rules: FileValidationRules): FileValidationResult {
  const errors: string[] = []

  // 크기 검사
  if (rules.maxSize != null && file.size > rules.maxSize) {
    errors.push(
      `파일 크기가 제한을 초과합니다. (${formatFileSize(file.size)} / 최대 ${formatFileSize(rules.maxSize)})`,
    )
  }

  // 확장자 검사
  if (rules.allowedExtensions && rules.allowedExtensions.length > 0) {
    const ext = `.${getFileExtension(file.name)}`
    const allowed = rules.allowedExtensions.map((e) => e.toLowerCase())
    if (!allowed.includes(ext)) {
      errors.push(`허용되지 않는 파일 형식입니다. (${ext}) 허용: ${allowed.join(', ')}`)
    }
  }

  // MIME 타입 검사
  if (rules.allowedMimeTypes && rules.allowedMimeTypes.length > 0) {
    const matched = rules.allowedMimeTypes.some((pattern) => {
      if (pattern.endsWith('/*')) {
        const prefix = pattern.slice(0, -1)
        return file.type.startsWith(prefix)
      }
      return file.type === pattern
    })
    if (!matched) {
      errors.push(`허용되지 않는 MIME 타입입니다. (${file.type || '알 수 없음'})`)
    }
  }

  return { valid: errors.length === 0, errors }
}

/**
 * FileReader API로 텍스트 파일을 읽는다.
 *
 * 원본: gfn_readTextFile — VirtualFile 동기 읽기 → FileReader 비동기 Promise로 전환
 *
 * @param file - 읽을 File 객체
 * @param charset - 문자셋 (기본 'UTF-8')
 * @returns 파일 텍스트 내용
 */
export function readTextFile(file: File, charset: string = 'UTF-8'): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result as string)
    }

    reader.onerror = () => {
      reject(
        new Error(`파일 읽기 실패: ${file.name} (${reader.error?.message ?? '알 수 없는 오류'})`),
      )
    }

    reader.readAsText(file, charset)
  })
}

/**
 * 서버 업로드 응답을 FileInfo 배열로 변환한다.
 *
 * 원본: gfn_setFileInfo — jsonNew(서버 응답)를 Dataset 행으로 변환하는 로직 대응.
 * Nexacro Dataset 대신 FileInfo[] 반환.
 *
 * @param result - 서버 업로드 응답
 * @param pgmId - 프로그램(메뉴) ID (원본 argMenuSqn 대응)
 * @returns FileInfo 배열
 */
export function toFileInfoList(result: UploadResult | UploadResult[], pgmId?: string): FileInfo[] {
  const results = Array.isArray(result) ? result : [result]

  return results.map((r) => ({
    atflNm: r.uploadName,
    atflPathNm: r.uploadPath,
    rlFileNm: r.originalName,
    atchFileSz: r.size,
    extNm: getFileExtension(r.originalName),
    pgmId,
    delYn: 'N' as const,
  }))
}

// -----------------------------------------------------------------------------
// useFile 훅
// -----------------------------------------------------------------------------

/**
 * 파일 업로드/다운로드 훅
 *
 * 원본 cmmlib/File.xjs의 핵심 기능을 React 훅으로 재구현.
 * - gfn_fileUpload / gfn_transferDext → uploadFile / uploadFiles
 * - gfn_cutFileSize → formatFileSize (외부 유틸로도 export)
 * - gfn_readTextFile → readTextFile (외부 유틸로도 export)
 * - gfn_setFileInfo → toFileInfoList (외부 유틸로도 export)
 *
 * @example
 * ```tsx
 * const { uploadFile, downloadFile, isUploading, progress } = useFile()
 *
 * const handleUpload = async (file: File) => {
 *   const result = await uploadFile(file, {
 *     svcGroup: 'dt',
 *     maxSize: 10 * 1024 * 1024, // 10MB
 *     onProgress: (p) => console.log(`${p}%`),
 *   })
 *   console.log('uploaded:', result)
 * }
 * ```
 */
export function useFile() {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const abortControllerRef = useRef<AbortController | null>(null)

  /**
   * 단일 파일을 업로드한다.
   *
   * 원본: gfn_fileUpload + gfn_transferDext 통합
   * - Nexacro FileUpTransfer / DEXT Upload → FormData + Axios multipart
   * - 진행률: Axios onUploadProgress → progress 상태 + onProgress 콜백
   */
  const uploadFile = useCallback(
    async (file: File, options: UploadOptions = {}): Promise<UploadResult> => {
      const {
        url = '/file/upload',
        svcGroup,
        params,
        maxSize,
        onProgress,
        onSuccess,
        onError,
      } = options

      // 크기 검증 (원본 nMaxSize 대응)
      if (maxSize != null && file.size > maxSize) {
        const err = new Error(
          `파일 크기 초과: ${formatFileSize(file.size)} (최대 ${formatFileSize(maxSize)})`,
        )
        onError?.(err)
        throw err
      }

      const formData = new FormData()
      formData.append('file', file)

      // 서비스 그룹 (원본 sSvcGroup 대응)
      if (svcGroup) {
        formData.append('svcGroup', svcGroup)
      }

      // 추가 파라미터 (원본 objParam 대응)
      if (params) {
        for (const [key, value] of Object.entries(params)) {
          formData.append(key, value)
        }
      }

      abortControllerRef.current = new AbortController()
      setIsUploading(true)
      setProgress(0)

      try {
        const response = await apiClient.post<UploadResult>(url, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          signal: abortControllerRef.current.signal,
          onUploadProgress: (event) => {
            if (event.total) {
              const percent = Math.round((event.loaded * 100) / event.total)
              setProgress(percent)
              onProgress?.(percent)
            }
          },
        })

        const result = response.data
        onSuccess?.(result)
        return result
      } catch (error) {
        const err = error instanceof Error ? error : new Error('파일 업로드 실패')
        onError?.(err)
        throw err
      } finally {
        setIsUploading(false)
        abortControllerRef.current = null
      }
    },
    [],
  )

  /**
   * 여러 파일을 업로드한다.
   *
   * 각 파일을 순차적으로 업로드하며, 개별 실패는 errors에 수집하고
   * 나머지 파일은 계속 업로드한다.
   */
  const uploadFiles = useCallback(
    async (files: File[], options: UploadOptions = {}): Promise<MultiUploadResult> => {
      const results: UploadResult[] = []
      const errors: Array<{ file: File; error: Error }> = []

      setIsUploading(true)
      setProgress(0)

      try {
        for (let i = 0; i < files.length; i++) {
          const file = files[i]

          try {
            const result = await uploadFile(file, {
              ...options,
              // 전체 진행률 계산: (완료된 파일 + 현재 파일 진행률) / 전체 파일 수
              onProgress: (filePercent) => {
                const totalPercent = Math.round((i * 100 + filePercent) / files.length)
                setProgress(totalPercent)
                options.onProgress?.(totalPercent)
              },
            })
            results.push(result)
          } catch (error) {
            errors.push({
              file,
              error: error instanceof Error ? error : new Error('파일 업로드 실패'),
            })
          }
        }

        setProgress(100)
        return { results, errors }
      } finally {
        setIsUploading(false)
      }
    },
    [uploadFile],
  )

  /**
   * 파일을 다운로드한다.
   *
   * 서버에서 Blob으로 받아 앵커 태그 클릭으로 다운로드를 트리거한다.
   *
   * @param fileId - 서버 파일 식별자 (ATFL_SQN 또는 GUID)
   * @param fileName - 저장할 파일명 (미지정 시 Content-Disposition 헤더에서 추출)
   */
  const downloadFile = useCallback(
    async (fileId: string, fileName?: string, options: DownloadOptions = {}): Promise<void> => {
      const { url = '/file/download', svcGroup } = options

      const params: Record<string, string> = { fileId }
      if (svcGroup) {
        params.svcGroup = svcGroup
      }

      const response = await apiClient.get(url, {
        params,
        responseType: 'blob',
      })

      // 파일명 결정: 인자 > Content-Disposition > fileId
      let resolvedName = fileName
      if (!resolvedName) {
        const disposition = response.headers['content-disposition']
        if (disposition) {
          // filename*=UTF-8''xxx 또는 filename="xxx" 파싱
          const utf8Match = disposition.match(/filename\*=UTF-8''(.+?)(?:;|$)/i)
          const plainMatch = disposition.match(/filename="?([^";\n]+)"?/i)
          const extracted = utf8Match?.[1] ?? plainMatch?.[1]
          if (extracted) {
            resolvedName = decodeURIComponent(extracted)
          }
        }
      }
      if (!resolvedName) {
        resolvedName = fileId
      }

      // Blob → Object URL → anchor click
      const blob = new Blob([response.data])
      const blobUrl = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = blobUrl
      anchor.download = resolvedName
      document.body.appendChild(anchor)
      anchor.click()
      document.body.removeChild(anchor)
      URL.revokeObjectURL(blobUrl)
    },
    [],
  )

  /**
   * 진행 중인 업로드를 취소한다.
   */
  const cancelUpload = useCallback(() => {
    abortControllerRef.current?.abort()
    setIsUploading(false)
    setProgress(0)
  }, [])

  return {
    // 업로드
    uploadFile,
    uploadFiles,
    cancelUpload,

    // 다운로드
    downloadFile,

    // 유틸 (훅 내 편의 래퍼 — 외부 유틸과 동일 참조)
    readTextFile,
    formatFileSize,
    validateFile,
    toFileInfoList,

    // 상태
    isUploading,
    progress,
  }
}
