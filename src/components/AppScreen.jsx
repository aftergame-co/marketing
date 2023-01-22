import { forwardRef } from 'react'
import clsx from 'clsx'
import { ArrowLeftIcon, EllipsisVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex px-4 pt-4">
        <ArrowLeftIcon 
          className="h-8 w-8 text-gray-900"
        />
        <div 
          className="w-full"
        />
        <MagnifyingGlassIcon 
          className="h-8 w-8 text-gray-900"
        />
        <EllipsisVerticalIcon
          className="ml-4 h-8 w-8 text-gray-900"
        />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-4 flex-auto bg-white', className)}
    >
      {children}
    </div>
  )
})
