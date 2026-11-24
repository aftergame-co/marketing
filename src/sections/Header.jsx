'use client';

import Link from 'next/link';
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavLinks } from '@/components/NavLinks';
import clsx from 'clsx';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/Button';
import { usePathname } from 'next/navigation';

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function subscribeToScroll(onChange) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

function MobileNavLink({ children, ...props }) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700 rounded-lg active:bg-gray-200 focus:bg-gray-200 hover:bg-gray-200 p-2"
      {...props}
    >
      {children}
    </PopoverButton>
  )
}

export function Header({darkMode}) {
  const pathname = usePathname()
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 30,
    () => false,
  );

  return (
      <header className={clsx('fixed top-0 left-0 right-0 z-50 transition-all duration-100', (scrolled || pathname.indexOf('/pricing') !== -1) ? 'shadow-lg  bg-white py-4 lg:py-3' : 'py-4 lg:py-5')}>
        <nav>
          <Container className="relative z-50 flex justify-between">
            <div className="relative z-10 flex items-center gap-16 -mt-2.5 -ml-2.5 -mb-1.5">
              <Link href="/" aria-label="Home">
                <Logo darkMode={!scrolled && darkMode} className="h-16 w-auto" />
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden lg:flex lg:gap-10">
                <NavLinks scrolled={scrolled} darkMode={darkMode} />
              </div>
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <PopoverButton
                      className="relative z-10 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 not-focus-visible:focus:outline-hidden"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </PopoverButton>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <PopoverBackdrop
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur-sm"
                          />
                          <PopoverPanel
                            static
                            as={motion.div}
                            initial={{ y: -32 }}
                            animate={{ y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-24 -mt-4 shadow-2xl shadow-gray-900/20"
                          >
                            <div>
                              <MobileNavLink href="/conventions">
                                Conventions
                              </MobileNavLink>
                              {/* <MobileNavLink href="/groups">
                                Clubs & Gaming Groups
                              </MobileNavLink> */}
                              <MobileNavLink href="/publishers">
                                Publishers
                              </MobileNavLink>
                              <MobileNavLink href="/retailers">
                                Retailers
                              </MobileNavLink>
                              <MobileNavLink href="/pricing">
                                Pricing
                              </MobileNavLink>
                              <MobileNavLink href="/blog">
                                Blog
                              </MobileNavLink>
                              <MobileNavLink href="/about">
                                About
                              </MobileNavLink>
                            </div>
                            <div className="mt-8 flex flex-col gap-4">
                              <Button href="https://aftergame.app" className="bg-gg-blue hover:bg-gg-red active:bg-gg-red">
                                Launch app
                              </Button>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
              <Button href="https://aftergame.app" className="max-lg:hidden lg:block bg-gg-blue hover:bg-gg-red active:bg-gg-red">
                Launch app
              </Button>
            </div>
          </Container>
        </nav>
      </header>
  )
}
