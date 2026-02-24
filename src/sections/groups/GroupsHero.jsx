'use client';

import { useId } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import Link from 'next/link';

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

export function GroupsHero() {
  return (
    <div className="overflow-hidden pb-8 pt-16 sm:pt-32 lg:pb-8">
      <Container>
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none">
            <p className='text-xl text-gray-600 mb-4 uppercase'>For Organizers</p>
            <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              Turn <span className='text-gg-blue font-semibold'>empty tables</span> into <span className='text-gg-red font-semibold'>thriving communities</span>
            </h1>
            <p className="mt-6 mb-4 lg:w-4/5 text-xl text-gray-600">
              You bring the space and passion. We bring the tools to fill every seat, simplify every schedule, and transform casual players into a connected community.
            </p>
            <p className="mb-8 lg:w-4/5 text-lg text-gray-700">
              From weekly game nights at your local shop to multi-day conventions with hundreds of games, Aftergame makes organizing effortless and engagement inevitable.
            </p>
            <div className="pt-2 lg:w-4/5 flex flex-col sm:flex-row gap-4">
              <Link href='#organizers-contact'>
                <Button
                  color='gg'
                  className='bg-gg-blue md:hover:bg-gg-red active:bg-gg-red !text-lg !px-6 !py-3'
                >
                  Get in touch
                </Button>
              </Link>
              <Link href='#features'>
                <Button
                  variant="outline"
                  className='border-2 border-gg-blue text-gg-blue hover:bg-gg-blue/5 !text-lg !px-6 !py-3'
                >
                  See how it works
                </Button>
              </Link>
            </div>
            <div className="pt-10">
              <p className='text-sm font-semibold text-gray-500 mb-4'>Trusted by organizers worldwide</p>
              <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-6 max-w-[560px]">
              <Image
                src='/images/events/playcon.png'
                alt='Play Con'
                width={80}
                height={80}
                className='flex-shrink-0'
              />
              <Image
                src='/images/communities/behold.png'
                alt='Behold Games'
                width={64}
                height={64}
                className='flex-shrink-0 mt-2'
              />
              <Image
                src='/images/events/tantrumcon.png'
                alt='Tantrum Con'
                width={80}
                height={80}
                className='flex-shrink-0'
              />
              <Image
                src='/images/communities/bgbbq.png'
                alt='Board Game BBQ'
                width={96}
                height={96}
                className='flex-shrink-0'
              />
              <Image
                src='/images/events/wellycon.webp'
                alt='Wellycon'
                width={96}
                height={96}
                className='flex-shrink-0'
              />
              <Image
                src='/images/communities/mm.png'
                alt='Melbourne Meeples'
                width={60}
                height={60}
                className='flex-shrink-0'
              />
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:col-span-5 lg:row-span-2 lg:mt-0 lg:-mr-6">
            <BackgroundIllustration className="lg:absolute left-1/2 top-4 h-[480px] w-[480px] sm:top-16 lg:-translate-x-1/2 lg:-top-8" />
            {/* Placeholder for new hero image showing organizer dashboard or event overview */}
            <div className='lg:absolute left-1/2 lg:-translate-x-1/2 top-0 lg:top-12'>
              <div className='w-[300px] h-[500px] bg-gray-200 rounded-2xl border-2 border-gray-300 flex items-center justify-center mx-auto'>
                <p className='text-gray-500 text-center px-8 text-sm'>PLACEHOLDER: Organizer dashboard showing event stats, upcoming games, and community activity</p>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex py-6'></div>
        </div>
      </Container>
    </div>
  )
}
