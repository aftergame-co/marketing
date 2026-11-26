import type { ComponentProps, ReactNode, Ref } from 'react'
import clsx from 'clsx'
import { ArrowLeftIcon, EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export function AppScreen({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

AppScreen.Header = function AppScreenHeader({ children }: { children?: ReactNode }) {
  return (
    <div>
      {!children && (
        <div className="flex items-center px-4 pt-4">
          <ArrowLeftIcon className="h-8 w-8 text-gray-900" />
          <div className="w-full"></div>
          <MagnifyingGlassIcon className="h-8 w-8 text-gray-900" />
          <EllipsisVerticalIcon className="ml-4 h-8 w-8 text-gray-900" />
        </div>
      )}
      {children && <div className="flex items-center px-4 pt-4">{children}</div>}
    </div>
  )
}

AppScreen.Body = function AppScreenBody({
  children,
  className,
  ref,
}: {
  children?: ReactNode
  className?: string
  ref?: Ref<HTMLDivElement>
}) {
  return (
    <div ref={ref} className={clsx('mt-4 flex-auto bg-white', className)}>
      {children}
    </div>
  )
}
