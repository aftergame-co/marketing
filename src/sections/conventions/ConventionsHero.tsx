'use client'

import type { ComponentProps } from 'react'
import { useId } from 'react'
import Image from '@/components/Image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ParallaxImage } from '@/components/ParallaxImage'
import Link from 'next/link'

function BackgroundIllustration(props: ComponentProps<'div'>) {
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

export function ConventionsHero() {
  return (
    <div className="overflow-hidden pt-16 lg:pt-28">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-y-12">
          <div className="relative z-10 mx-auto max-w-2xl md:max-w-3xl lg:col-span-7 lg:max-w-none">
            <p className="mb-4 text-xl text-gray-600 uppercase">Tabletop Events</p>
            <h1 className="text-4xl font-medium tracking-tighter text-gray-900 md:text-4xl md:tracking-tight xl:text-5xl">
              <span className="font-semibold text-gg-blue">Elevate player experience</span> with modern and{' '}
              <span className="font-semibold text-gg-red">effortless events</span>
            </h1>
            <p className="my-6 text-xl text-gray-600 lg:w-4/5">
              Run your convention from start to finish through Aftergame. We’ve got all the tools you’ll need to let the
              chaos organise itself!
            </p>
            <p className="text-sm font-semibold lg:w-4/5">Bring people back next year, add your event to Aftergame.</p>
            <div className="flex flex-row gap-x-2 pt-2 md:gap-x-4 lg:w-4/5">
              <Link href="https://aftergame.app/groups/create">
                <Button
                  type="submit"
                  color="gg"
                  className="bg-gg-blue px-6! py-3! text-lg! active:bg-gg-red md:hover:bg-gg-red"
                >
                  Create your event
                </Button>
              </Link>
              <Link href="/contact/organizer">
                <Button
                  type="submit"
                  color="white"
                  className="border-4 border-gg-blue bg-gg-blue-faint px-4! py-2! text-lg! text-gg-blue active:bg-gg-blue active:text-white md:hover:bg-gg-blue md:hover:text-white"
                >
                  Book Demo
                </Button>
              </Link>
            </div>

            <p className="pt-12 pb-4 text-center text-xl text-gray-400 lg:pt-6 lg:text-left">
              Proudly supporting 100s of conventions worldwide
            </p>
            <div className="flex flex-row items-center justify-center gap-x-8 lg:justify-start lg:pl-8">
              <Image
                src="/images/conventions/logos/playcon.png"
                alt="Play Con"
                width={96}
                height={26}
                className="shrink-0"
              />
              <Image
                src="/images/conventions/logos/tantrumcon.png"
                alt="Tantrum Con"
                width={96}
                height={64}
                className="shrink-0"
              />
              <Image
                src="/images/conventions/logos/wellycon.webp"
                alt="Wellycon"
                width={128}
                height={20}
                className="shrink-0"
              />
            </div>
            <div className="mt-4 flex flex-row items-center justify-center gap-x-8 lg:justify-start lg:pl-28">
              <Image
                src="/images/conventions/logos/gridcon.png"
                alt="GridCon"
                width={96}
                height={56}
                className="shrink-0"
              />
              <Image
                src="/images/conventions/logos/ttcon.png"
                alt="TabletopCon"
                width={90}
                height={65}
                className="mr-2 shrink-0"
              />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0">
            <BackgroundIllustration className="absolute top-4 left-1/2 hidden h-256.5 w-256.5 -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 lg:flex xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-150 mask-[linear-gradient(to_bottom,white_60%,transparent)] px-2 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-20 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <ParallaxImage
                src="/images/conventions/hero.png"
                loading="eager"
                alt="Events Schedule"
                width={549}
                height={900}
                strength={120}
                className="m-auto shrink-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
