import type { VariantProps } from 'class-variance-authority'
import { type buttonVariants, Button as ShadButton } from '#/components/ui/button'

export type ButtonVariant = 'default' | 'primary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md'

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof ShadButton>, 'variant' | 'size' | 'asChild'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

// 프로젝트 variant → shadcn variant 매핑
const variantMap: Record<ButtonVariant, VariantProps<typeof buttonVariants>['variant']> = {
  default: 'outline',
  primary: 'default',
  danger: 'destructive',
  ghost: 'ghost',
}

// 프로젝트 size → shadcn size 매핑 (LIS 컴팩트 기준)
const sizeMap: Record<ButtonSize, VariantProps<typeof buttonVariants>['size']> = {
  sm: 'xs', // h-6
  md: 'sm', // h-7
}

export default function Button({ variant = 'default', size = 'sm', ...props }: ButtonProps) {
  return <ShadButton variant={variantMap[variant]} size={sizeMap[size]} {...props} />
}
