import { useId } from 'react'
import { RadioGroupItem, RadioGroup as ShadRadioGroup } from '#/components/ui/radio-group'

export interface RadioOption {
  value: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  options: RadioOption[]
  disabled?: boolean
  direction?: 'row' | 'column'
  className?: string
}

export default function RadioGroup({
  value,
  defaultValue,
  onChange,
  options,
  disabled = false,
  direction = 'row',
  className = '',
}: RadioGroupProps) {
  const groupId = useId()

  return (
    <ShadRadioGroup
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      disabled={disabled}
      className={`flex ${direction === 'row' ? 'flex-row flex-wrap gap-x-4 gap-y-1' : 'flex-col gap-1'} ${className}`}
    >
      {options.map((opt) => {
        const itemId = `${groupId}-${opt.value}`
        return (
          <div key={opt.value} className="flex items-center gap-1.5">
            <RadioGroupItem value={opt.value} id={itemId} disabled={opt.disabled} />
            <label
              htmlFor={itemId}
              className={`text-xs text-gray-700 select-none ${opt.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {opt.label}
            </label>
          </div>
        )
      })}
    </ShadRadioGroup>
  )
}
