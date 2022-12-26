import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="flex flex-col items-center justify-between gap-y-12 pt-6 pb-12 lg:flex-row">
          <div>
            <Link href="/" aria-label="Home">
              <Logo className="h-16 w-auto -mx-2" />
            </Link>
            {/* <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav> */}
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-300 pt-6 pb-8 md:pt-4 md:pb-16 md:flex-row-reverse md:justify-between">
          <div>
            social links
          </div>
          <div className='md:grow'></div>
          
          <div className='mt-6 text-sm space-x-6 md:mt-0 md:ml-6'>
            <Link href="/privacy" aria-label="Home">
              Privacy
            </Link>
            <Link href="/terms" aria-label="Home">
              Terms
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Goodgame Data.
          </p>
        </div>
      </Container>
    </footer>
  )
}
