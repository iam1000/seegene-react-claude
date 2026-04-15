import { useEffect, useRef } from 'react'

interface IBSheetProps {
  id: string
  columns: IBSheetCol[]
  data?: unknown[]
  height?: string | number
  onReady?: (sheet: IBSheetInstance) => void
}

export default function IBSheet({
  id,
  columns,
  data = [],
  height = '100%',
  onReady,
}: IBSheetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<IBSheetInstance | null>(null)

  useEffect(() => {
    if (!containerRef.current || !window.IBSheet) return

    // 동일 ID가 이미 존재하면 먼저 제거 (React StrictMode 이중 실행 대응)
    const existing = (window as any)[id]
    if (existing?.dispose) {
      existing.dispose()
    }

    sheetRef.current = window.IBSheet.create({
      id,
      el: containerRef.current,
      options: {
        Cfg: {
          DeferredInit: false,
          MergeSheet: 5,
          SearchMode: 2,
          NoDataStr: 'No data',
        },
        Cols: columns,
      },
    })

    onReady?.(sheetRef.current)

    return () => {
      sheetRef.current?.dispose()
      sheetRef.current = null
    }
  }, [id])

  useEffect(() => {
    if (!sheetRef.current) return
    if (data.length > 0) {
      sheetRef.current.loadSearchData(data)
    } else {
      sheetRef.current.removeAll()
    }
  }, [data])

  if (!window.IBSheet) {
    return (
      <div
        style={{ height }}
        className="flex flex-col border border-gray-300 overflow-auto text-xs"
      >
        <div className="flex bg-[#4a4a4a] text-white sticky top-0">
          {columns.map((col) => (
            <div
              key={col.Name}
              className="shrink-0 px-1 py-1.5 border-r border-gray-500 text-center"
              style={{ width: col.Width ?? 80, minWidth: col.Width ?? 80 }}
            >
              {col.Header}
            </div>
          ))}
        </div>
        {data.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-2 text-gray-400">
            <span className="text-2xl">!</span>
            <span>No data</span>
          </div>
        ) : (
          data.map((row: any, i) => (
            <div key={i} className="flex border-b border-gray-200 hover:bg-blue-50">
              {columns.map((col) => (
                <div
                  key={col.Name}
                  className="shrink-0 px-1 py-1 border-r border-gray-200 overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ width: col.Width ?? 80, minWidth: col.Width ?? 80 }}
                >
                  {row[col.Name] ?? ''}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    )
  }

  return <div ref={containerRef} id={id} style={{ width: '100%', height }} />
}
