import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'

export interface PopupMenuItem {
  /** 구분선은 type: 'separator' */
  type?: 'item' | 'separator'
  label?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

export interface PopupMenuProps {
  items: PopupMenuItem[]
  /** 트리거 영역 (기본: 우클릭 감지 div) */
  children: React.ReactNode
  className?: string
}

/**
 * Nexacro PopupMenu 대응 — 우클릭 컨텍스트 메뉴
 * shadcn DropdownMenu 기반
 */
export default function PopupMenu({ items, children, className = '' }: PopupMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <div className={`contents ${className}`} onContextMenu={(e) => e.preventDefault()} />
        }
      >
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, i) =>
          item.type === 'separator' ? (
            <DropdownMenuSeparator key={i} />
          ) : (
            <DropdownMenuItem
              key={i}
              onClick={item.onClick}
              disabled={item.disabled}
              className="text-xs gap-2"
            >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
