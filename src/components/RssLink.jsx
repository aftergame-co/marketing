import clsx from 'clsx'
import { RssIcon } from '@heroicons/react/20/solid'

// Plain <a>: feeds are XML files, not pages to navigate to client-side
export function RssLink({ href, className, children = 'RSS' }) {
  return (
    <a href={href} className={clsx('inline-flex items-center gap-x-1.5', className)}>
      <RssIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </a>
  )
}
