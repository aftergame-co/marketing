'use client'

import type { ComponentProps } from 'react'
import { useId } from 'react'
import Image from '@/components/Image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'

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

export function RetailersHero() {
  return (
    <div className="overflow-hidden pt-16 pb-8 lg:pt-28 lg:pb-2">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none">
            <p className="mb-4 text-xl text-gray-600 uppercase">Retailers</p>
            <h1 className="text-4xl font-medium tracking-tighter text-gray-900 md:text-5xl md:tracking-tight xl:text-6xl">
              <span className="font-semibold text-gg-blue">Take your place</span> at the heart of a{' '}
              <span className="font-semibold text-gg-red">thriving community</span>
            </h1>
            <p className="my-6 text-xl text-gray-600 lg:w-5/6">
              We know <em>a lot</em> goes into running a successful tabletop business. We&apos;re here with the tools to
              engage players, fill tables, and keep them coming back.
            </p>
            <p className="text-sm font-semibold lg:w-4/5">
              Become the gathering point, add your group to Aftergame today.
            </p>
            <div className="flex flex-row gap-x-2 pt-2 md:gap-x-4 lg:w-4/5">
              <Link href="https://aftergame.app/groups/create">
                <Button
                  type="submit"
                  color="gg"
                  className="bg-gg-blue px-6! py-3! text-lg! active:bg-gg-red md:hover:bg-gg-red"
                >
                  Create your group
                </Button>
              </Link>
              <Link href="/contact/demo">
                <Button
                  type="submit"
                  color="white"
                  className="border-4 border-gg-blue bg-gg-blue-faint px-4! py-2! text-lg! text-gg-blue active:bg-gg-blue active:text-white md:hover:bg-gg-blue md:hover:text-white"
                >
                  Book Demo
                </Button>
              </Link>
            </div>

            <p className="pt-16 pb-4 text-center text-xl text-gray-400 lg:pt-6 lg:text-left">
              Proudly supporting 100s of retailers worldwide
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:justify-start">
              <Image
                src="/images/retailers/logos/behold.png"
                alt="Behold Games"
                width={48}
                height={36}
                className="mt-1 shrink-0"
              />
              <Image
                src="/images/retailers/logos/matrix.png"
                alt="Matrix"
                width={48}
                height={35}
                className="shrink-0 rounded-md"
              />
              <Image
                src="/images/retailers/logos/vm.webp"
                alt="Village Meeple"
                width={60}
                height={48}
                className="shrink-0"
              />
              <Image
                src="/images/retailers/logos/arcane.avif"
                unoptimized // AVIF isn't supported by next-image-export-optimizer; already small
                alt="Wizards Arcane Tabletop Tavern"
                width={68}
                height={40}
                className="shrink-0"
              />
              <Image
                src="/images/retailers/logos/mana.png"
                alt="Mana & Meeples"
                width={40}
                height={40}
                className="shrink-0"
              />
              <Image
                src="/images/retailers/logos/clubhouse.jpg"
                alt="Clubhouse"
                width={40}
                height={40}
                className="shrink-0 rounded-md"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-x-8 pt-6 lg:justify-start lg:pl-33"></div>
          </div>
          <div className="relative mt-8 hidden lg:col-span-5 lg:row-span-2 lg:mt-16 lg:-mr-6 lg:block">
            <BackgroundIllustration className="top-4 left-1/2 h-120 w-120 sm:top-16 lg:absolute lg:-top-8 lg:-translate-x-1/2" />
            <div className="absolute top-44 left-1/2 -translate-x-1/2 lg:top-40">
              <BuildingStorefrontIcon className="m-auto h-20 w-20 text-gg-blue" />
              <p className="text-center">Your space</p>
            </div>
            <div className="absolute top-4 left-1/2 flex translate-x-6 items-center gap-x-2 rounded-2xl border-2 border-gray-100 bg-white p-3 lg:top-0">
              <Image
                src="/images/communities/andy.jpeg"
                alt="Tim image"
                width={32}
                height={32}
                className="shrink-0 rounded-full"
              />
              <p className="text-xs">
                Andy is planning a<br /> game of Wingspan
              </p>
            </div>
            <div className="absolute top-90 left-1/2 flex translate-x-6 items-center gap-x-2 rounded-2xl border-2 border-gray-100 bg-white p-3 md:top-95 lg:top-90">
              <Image
                src="/images/communities/josh.jpeg"
                alt="Josh image"
                width={32}
                height={32}
                className="shrink-0 rounded-full"
              />
              <p className="text-xs">
                Josh wants to find
                <br /> a group to join
              </p>
            </div>
            <div className="absolute top-52 -left-6 flex items-center gap-x-2 rounded-2xl border-2 border-gray-100 bg-white p-3 sm:left-1/2 sm:-translate-x-72">
              <Image
                src="/images/communities/kelly.jpeg"
                alt="Anne image"
                width={32}
                height={32}
                className="shrink-0 rounded-full"
              />
              <p className="text-xs">
                Kelly wants to
                <br />
                play Wingspan
              </p>
            </div>
          </div>
          <div className="hidden py-6 lg:flex"></div>
        </div>
      </Container>
    </div>
  )
}
