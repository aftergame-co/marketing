'use client';

import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import { WaitlistForm } from '@/components/WaitlistForm'
import { ClockIcon, FunnelIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'

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
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
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
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff3a20" />
            <stop offset="1" stopColor="#ff3a20" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function DesignersHero() {
  return (
    <div className="overflow-hidden pb-8 pt-16 sm:pt-32">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-7">
            <p className='text-xl text-gray-600 mb-4'>GAME DESIGNERS</p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              <span className='text-gg-blue font-semibold'>Understand</span> how people<br />play <span className='text-gg-red font-semibold'>your games</span>
            </h1>
            <p className="mt-6 mb-8 lg:w-4/5 text-xl text-gray-600">
              Goodgame Data gives you deep insights into how your games are being played so that you can track KPIs and discover ways to change your game for the better.
              {/* Cut out the guesswork,  */}
              {/* You spend so much time developing and play-testing great games, so why s */}
            </p>
            <div className="pt-2 pb-16 xl:pb-0 lg:w-4/5">
              <Button
                type="submit"
                onClick={() => {}}
                color='gg'
                className='bg-gg-blue md:hover:bg-gg-red active:bg-gg-red'
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-5">
            <div className="px-2 absolute left-0 top-4 h-[619px] w-[760px] -translate-x-1/3">
              <Image src='/images/designer-data.png' width={760} height={619} alt='Profile photo for Elaine' />
            </div>
            <p className="p-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-gray-800 bg-white/75 rounded-lg">PLACEHOLDER</p>
          </div>
          <div className='hidden lg:flex py-6'></div>
        </div>
      </Container>
    </div>
  )
}
