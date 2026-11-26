'use client'

import type { ComponentProps } from 'react'
import { useId } from 'react'
import Image from '@/components/Image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'

function BackgroundIllustration(props: ComponentProps<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1028 1028"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="4"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
          strokeWidth="4"
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
        viewBox="0 0 1028 1028"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="4"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
          strokeWidth="4"
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

export function GroupsHero() {
  return (
    <div className="overflow-hidden pt-16 pb-8 sm:pt-32 lg:pb-8">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none">
            <p className="mb-4 text-xl text-gray-600 uppercase">For Organizers</p>
            <h1 className="text-5xl font-medium tracking-tighter text-gray-900 md:text-5xl md:tracking-tight xl:text-6xl">
              Turn <span className="font-semibold text-gg-blue">empty tables</span> into{' '}
              <span className="font-semibold text-gg-red">thriving communities</span>
            </h1>
            <p className="mt-6 mb-4 text-xl text-gray-600 lg:w-4/5">
              You bring the space and passion. We bring the tools to fill every seat, simplify every schedule, and
              transform casual players into a connected community.
            </p>
            <p className="mb-8 text-lg text-gray-700 lg:w-4/5">
              From weekly game nights at your local shop to multi-day conventions with hundreds of games, Aftergame
              makes organizing effortless and engagement inevitable.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row lg:w-4/5">
              <Link href="#organizers-contact">
                <Button color="gg" className="bg-gg-blue px-6! py-3! text-lg! active:bg-gg-red md:hover:bg-gg-red">
                  Get in touch
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  className="border-2 border-gg-blue px-6! py-3! text-lg! text-gg-blue hover:bg-gg-blue/5"
                >
                  See how it works
                </Button>
              </Link>
            </div>
            <div className="pt-10">
              <p className="mb-4 text-sm font-semibold text-gray-500">Trusted by organizers worldwide</p>
              <div className="flex max-w-140 flex-row flex-wrap items-center gap-x-8 gap-y-6">
                <Image
                  src="/images/communities/behold.png"
                  alt="Behold Games"
                  width={64}
                  height={47}
                  className="mt-2 shrink-0"
                />
                <Image
                  src="/images/communities/bgbbq.png"
                  alt="Board Game BBQ"
                  width={96}
                  height={59}
                  className="shrink-0"
                />
                <Image
                  src="/images/communities/mm.png"
                  alt="Melbourne Meeples"
                  width={60}
                  height={60}
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:col-span-5 lg:row-span-2 lg:mt-0 lg:-mr-6">
            <BackgroundIllustration className="top-4 left-1/2 h-120 w-120 sm:top-16 lg:absolute lg:-top-8 lg:-translate-x-1/2" />
            {/* Placeholder for new hero image showing organizer dashboard or event overview */}
            <div className="top-0 left-1/2 lg:absolute lg:top-12 lg:-translate-x-1/2">
              <div className="mx-auto flex h-125 w-75 items-center justify-center rounded-2xl border-2 border-gray-300 bg-gray-200">
                <p className="px-8 text-center text-sm text-gray-500">
                  PLACEHOLDER: Organizer dashboard showing event stats, upcoming games, and community activity
                </p>
              </div>
            </div>
          </div>
          <div className="hidden py-6 lg:flex"></div>
        </div>
      </Container>
    </div>
  )
}
