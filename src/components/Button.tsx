import type { ComponentProps } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type Variant = 'solid' | 'outline'
// 'black' has no styles: the caller's className sets the colours
type Color = 'cyan' | 'gg' | 'white' | 'gray' | 'black'

const baseStyles: Record<Variant, string> = {
  solid: 'inline-flex justify-center rounded-lg py-2.5 px-4 text-sm font-semibold outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm outline-offset-2 transition-colors',
}

const variantStyles: Record<Variant, Partial<Record<Color, string>>> = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    gg: 'relative overflow-hidden bg-gg-blue text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white: 'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

type ButtonProps = { variant?: Variant; color?: Color; className?: string } & (
  | Omit<ComponentProps<typeof Link>, 'color'>
  | (Omit<ComponentProps<'button'>, 'color'> & { href?: undefined })
)

export function Button({ variant = 'solid', color = 'gg', className, ...props }: ButtonProps) {
  className = clsx(baseStyles[variant], variantStyles[variant][color], className)

  return props.href === undefined ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
