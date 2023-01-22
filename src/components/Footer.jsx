import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        {/* <div className="flex flex-col items-center justify-between gap-y-12 pt-6 pb-12 lg:flex-row">
          <div>
            <Link href="/" aria-label="Home">
              <Logo className="h-16 w-auto -mx-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-300 pt-6 pb-8 md:pt-4 md:pb-16 md:flex-row-reverse md:justify-between"> */}
        <div className="flex flex-col items-center pt-6 pb-8 md:pt-6 md:pb-6 md:flex-row-reverse md:justify-between">
          <div>
            {/* twitter */}
            discord
            {/* facebook
            youtube / instagram
            linkedin */}
          </div>
          <div className='md:grow'></div>
          
          <div className='mt-6 text-sm space-x-6 md:mt-0 md:ml-6'>
            <Link href="/privacy" aria-label="Home">
              Privacy
            </Link>
            {/* <Link href="/terms" aria-label="Home">
              Terms
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Goodgame Data Ltd.
          </p>
        </div>
      </Container>
    </footer>
  )
}
