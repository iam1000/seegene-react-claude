import Color from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { Table } from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { forwardRef, useImperativeHandle } from 'react'

export interface RichEditorHandle {
  /** Nexacro GetHtmlValue() 대응 */
  getHtmlValue: () => string
  /** Nexacro SetHtmlValue() 대응 */
  setHtmlValue: (html: string) => void
  /** Nexacro GetBodyTextValue() 대응 */
  getBodyTextValue: () => string
  /** Nexacro SetEditorBodyEditable() 대응 */
  setEditorBodyEditable: (editable: boolean) => void
}

export interface RichEditorProps {
  /** HTML 문자열 */
  value?: string
  onChange?: (html: string) => void
  /** 에디터 로드 완료 콜백 (Nexacro dext_editor_loaded_event 대응) */
  onInit?: () => void
  /** 편집 가능 여부 (기본: true) */
  editable?: boolean
  /** 툴바 표시 여부 (기본: false — 원본 대부분 ShowToolBar="0") */
  showToolbar?: boolean
  /** 기본 폰트 패밀리 (기본: 맑은 고딕) */
  defaultFontFamily?: string
  /** 기본 폰트 크기 (기본: 10pt) */
  defaultFontSize?: string
  className?: string
  minHeight?: number
}

/**
 * Nexacro DEXT5Editor 대응 — TipTap 기반 리치 텍스트 에디터
 *
 * 대부분의 화면에서 ShowToolBar="0" 사용 → showToolbar 기본값 false
 *
 * ref로 imperative API 사용 가능:
 *   editorRef.current.getHtmlValue()
 *   editorRef.current.setHtmlValue(html)
 *   editorRef.current.setEditorBodyEditable(false)
 */
const RichEditor = forwardRef<RichEditorHandle, RichEditorProps>(function RichEditor(
  {
    value = '',
    onChange,
    onInit,
    editable = true,
    showToolbar = false,
    defaultFontFamily = '맑은 고딕',
    defaultFontSize = '10pt',
    className = '',
    minHeight = 100,
  },
  ref,
) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    editable,
    onCreate: () => onInit?.(),
    onUpdate: ({ editor: e }) => onChange?.(e.getHTML()),
  })

  useImperativeHandle(ref, () => ({
    getHtmlValue: () => editor?.getHTML() ?? '',
    setHtmlValue: (html) => editor?.commands.setContent(html),
    getBodyTextValue: () => editor?.getText() ?? '',
    setEditorBodyEditable: (val) => editor?.setEditable(val),
  }))

  return (
    <div
      className={`border border-input rounded overflow-hidden ${className}`}
      style={{ fontFamily: defaultFontFamily, fontSize: defaultFontSize }}
    >
      {showToolbar && editor && (
        <div className="flex flex-wrap gap-0.5 px-2 py-1 border-b border-input bg-muted/30">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
            title="굵게"
          >
            B
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
            title="기울임"
          >
            <em>I</em>
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive('underline')}
            title="밑줄"
          >
            <u>U</u>
          </ToolbarButton>
          <div className="w-px bg-border mx-0.5" />
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            active={editor.isActive({ textAlign: 'left' })}
            title="왼쪽"
          >
            ≡
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            active={editor.isActive({ textAlign: 'center' })}
            title="가운데"
          >
            ≡
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            active={editor.isActive({ textAlign: 'right' })}
            title="오른쪽"
          >
            ≡
          </ToolbarButton>
          <div className="w-px bg-border mx-0.5" />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            title="목록"
          >
            •
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            title="번호 목록"
          >
            1.
          </ToolbarButton>
          <div className="w-px bg-border mx-0.5" />
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
            active={false}
            title="표 삽입"
          >
            ⊞
          </ToolbarButton>
        </div>
      )}
      <EditorContent
        editor={editor}
        className="prose prose-sm max-w-none px-2 py-1 focus-within:outline-none text-sm [&_.ProseMirror]:outline-none [&_table]:border-collapse [&_td]:border [&_td]:border-gray-300 [&_td]:p-1 [&_th]:border [&_th]:border-gray-300 [&_th]:p-1 [&_th]:bg-gray-50"
        style={{ minHeight }}
      />
    </div>
  )
})

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void
  active: boolean
  title: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`h-6 min-w-6 px-1.5 text-xs rounded transition-colors
        ${active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-foreground'}`}
    >
      {children}
    </button>
  )
}

export default RichEditor
