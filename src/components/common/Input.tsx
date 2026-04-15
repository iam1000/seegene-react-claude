import { forwardRef } from 'react'
import { Input as ShadInput } from '#/components/ui/input'

export interface InputProps extends Omit<React.ComponentProps<typeof ShadInput>, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { value, onChange, className = '', ...props },
  ref,
) {
  return (
    <ShadInput
      ref={ref}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`h-6 text-xs px-1.5 rounded-none ${className}`}
      {...props}
    />
  )
})

export default Input
