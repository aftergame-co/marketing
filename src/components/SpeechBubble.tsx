import type { ComponentProps } from 'react'

export function SpeechBubble({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={className} {...props}>
      <div className="relative flex rounded-xl bg-gg-blue-faint p-2 after:absolute after:-bottom-10 after:left-1/2 after:-ml-2 after:animate-bounce after:rounded-full after:border-8 after:border-t-16 after:border-transparent after:border-t-gg-red/75 after:content-['']">
        {children}
      </div>
    </div>
  )
}
