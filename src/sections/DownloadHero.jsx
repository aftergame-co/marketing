'use client';

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { GlobeAltIcon } from '@heroicons/react/24/outline'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
          strokeWidth="2"
          suppressHydrationWarning
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
            suppressHydrationWarning
          >
            <stop stopColor="#4966f5" />
            <stop offset="1" stopColor="#4966f5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
          strokeWidth="2"
          suppressHydrationWarning
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
            suppressHydrationWarning
          >
            <stop stopColor="#ff3a20" />
            <stop offset="1" stopColor="#ff3a20" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function DownloadHero({ className }) {
  return (
    <div className={clsx("overflow-hidden py-16 sm:py-32 lg:pb-32", className)}>
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              <span className='text-gg-blue font-semibold'>Smart features</span> so you can <span className='text-gg-red font-semibold'>keep on playing</span>
            </h1>
            <p className="mt-6 mb-8 lg:w-4/5 text-xl text-gray-600">
              Download the free Aftergame app to get more games to the table and to start sharing your gaming journey with friends. 
            </p>
            <Button href="https://aftergame.app" className="xl:mt-4 mb-0 w-full max-w-[376px] text-xl py-3 bg-gg-blue hover:bg-gg-red active:bg-gg-red">
              Launch the web app →
            </Button>
            <div className="pt-4 pb-4 xl:pb-0 flex flex-wrap gap-x-4 gap-y-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0">
            <BackgroundIllustration className="hidden lg:flex absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[600px] px-2 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image
                src='/images/conventions/hero.png'
                alt='Events Schedule'
                width={550}
                height={550}
                className='flex-shrink-0 m-auto'
              />
            </div>
          </div>
          <div className='hidden lg:flex py-6'></div>
        </div>
      </Container>
    </div>
  )
}
