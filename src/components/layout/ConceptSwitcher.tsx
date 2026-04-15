import { useState } from 'react'
import { type LayoutConcept, useAppStore } from '#/store/useAppStore'

const LABELS: Record<LayoutConcept, string> = {
  A: '기존',
  B: '라이트',
  C: '다크',
  D: '블루',
  E: '사이드바',
  F: '다크 사이드바',
  G: '기업형',
  H: '컴팩트',
  I: '컴팩트2',
  J: '기존2',
  K: '라이트2',
}

const CONCEPTS = ['A', 'J', 'B', 'K', 'C', 'D', 'E', 'F', 'G', 'H', 'I'] as LayoutConcept[]

export default function ConceptSwitcher() {
  const { layoutConcept, setLayoutConcept } = useAppStore()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col items-start gap-1">
      {open && (
        <div className="flex flex-col gap-0.5 bg-white border border-gray-200 rounded-lg shadow-lg p-1.5 mb-1">
          {CONCEPTS.map((c) => (
            <button
              key={c}
              onClick={() => {
                setLayoutConcept(c)
                setOpen(false)
              }}
              className={`px-3 py-1 rounded text-[11px] text-left whitespace-nowrap transition-colors ${
                layoutConcept === c
                  ? 'bg-gray-800 text-white font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {LABELS[c]}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-7 h-7 rounded-full bg-white border border-gray-200 shadow text-[10px] text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all flex items-center justify-center"
        title="레이아웃 컨셉"
      >
        ⚙
      </button>
    </div>
  )
}
