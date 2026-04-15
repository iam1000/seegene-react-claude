import { forwardRef } from 'react'
import { Textarea as ShadTextarea } from '#/components/ui/textarea'

export interface TextAreaProps extends Omit<React.ComponentProps<typeof ShadTextarea>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { value, onChange, className = '', ...props },
  ref,
) {
  return (
    <ShadTextarea
      ref={ref}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`text-xs resize-none ${className}`}
      {...props}
    />
  )
})

export default TextArea
