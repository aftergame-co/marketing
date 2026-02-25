'use client';

import { useId } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'

function BackgroundIllustration(props) {
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
            <p className='text-xl text-gray-600 mb-4 uppercase'>Retailers</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              <span className='text-gg-blue font-semibold'>Take your place</span> at the heart of a <span className='text-gg-red font-semibold'>thriving community</span>
            </h1>
            <p className="my-6 lg:w-5/6 text-xl text-gray-600">
              We know <em>a lot</em> goes into running a successful tabletop business. We're here with the tools to engage players, fill tables, and keep them coming back.
            </p>
            <p className="lg:w-4/5 text-sm font-semibold">Become the gathering point, add your group to Aftergame today.</p>
            <div className="pt-2 lg:w-4/5 flex flex-row gap-x-4">
              <Link href='https://aftergame.app/groups/create'>
                <Button
                  type="submit"
                  color='gg'
                  className='bg-gg-blue md:hover:bg-gg-red active:bg-gg-red !text-lg !px-6 !py-3'
                >
                  Sign up
                </Button>
              </Link>
              <Link href='/contact/demo'>
                <Button
                  type="submit"
                  color='white'
                  className='bg-gg-blue-faint border-4 border-gg-blue md:hover:bg-gg-blue active:bg-gg-blue text-gg-blue md:hover:text-white active:text-white !text-lg !px-4 !py-2'
                >
                  Book Demo
                </Button>
              </Link>
            </div>

            <p className="pt-16 lg:pt-6 pb-4 text-xl text-gray-400 text-center lg:text-left">
              Proudly supporting 100s of retailers worldwide
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-8">
              <Image
                src='/images/retailers/logos/behold.png'
                alt='Behold Games'
                width={48}
                height={48}
                className='flex-shrink-0 mt-1'
              />
              <Image
                src='/images/retailers/logos/matrix.png'
                alt='Matrix'
                width={48}
                height={48}
                className='flex-shrink-0 rounded-md'
              />
              <Image
                src='/images/retailers/logos/vm.webp'
                alt='Village Meeple'
                width={60}
                height={60}
                className='flex-shrink-0'
              />
              <Image
                src='/images/retailers/logos/arcane.avif'
                alt='Wizards Arcane Tabletop Tavern'
                width={68}
                height={48}
                className='flex-shrink-0'
              />
              <Image
                src='/images/retailers/logos/mana.png'
                alt='Mana & Meeples'
                width={40}
                height={40}
                className='flex-shrink-0'
              />
              <Image
                src='/images/retailers/logos/clubhouse.jpg'
                alt='Clubhouse'
                width={40}
                height={40}
                className='flex-shrink-0 rounded-md'
              />
            </div>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-x-8 lg:pl-[132px] pt-6">
            </div>
          </div>
          <div className="hidden lg:block relative mt-8 lg:col-span-5 lg:row-span-2 lg:mt-16 lg:-mr-6">
            <BackgroundIllustration className="lg:absolute left-1/2 top-4 h-[480px] w-[480px] sm:top-16 lg:-translate-x-1/2 lg:-top-8" />
            <div className='absolute left-1/2 -translate-x-1/2 top-44 lg:top-40'>
              <BuildingStorefrontIcon className='h-20 w-20 text-gg-blue m-auto' />
              <p className="text-center">Your space</p>
            </div>
            <div className="flex items-center absolute left-1/2 translate-x-6 top-4 lg:top-0 rounded-2xl p-3 gap-x-2 bg-white border-2 border-gray-100">
              <Image
                src='/images/communities/andy.jpeg'
                alt='Tim image'
                width={32}
                height={32}
                className='rounded-full flex-shrink-0'
              />
              <p className='text-xs'>Andy is planning a<br /> game of Wingspan</p>
            </div>
            <div className='flex items-center absolute left-1/2 translate-x-6 top-[360px] md:top-[380px] lg:top-[360px] rounded-2xl p-3 gap-x-2 bg-white border-2 border-gray-100'>
              <Image
                src='/images/communities/josh.jpeg'
                alt='Josh image'
                width={32}
                height={32}
                className='rounded-full flex-shrink-0'
              />
              <p className='text-xs'>Josh wants to find<br /> a group to join</p>
            </div>
            <div className='flex items-center absolute -left-6 sm:left-1/2 sm:-translate-x-72 top-52 rounded-2xl p-3 gap-x-2 bg-white border-2 border-gray-100'>
              <Image
                src='/images/communities/kelly.jpeg'
                alt='Anne image'
                width={32}
                height={32}
                className='rounded-full flex-shrink-0'
              />
              <p className='text-xs'>Kelly wants to<br />play Wingspan</p>
            </div>
          </div>
          <div className='hidden lg:flex py-6'></div>
        </div>
      </Container>
    </div>
  )
}
