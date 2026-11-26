'use client'

import type { ComponentProps } from 'react'
import Image from '@/components/Image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { SpeechBubble } from '@/components/SpeechBubble'
import {
  UserGroupIcon,
  ScaleIcon,
  IdentificationIcon,
  GlobeAmericasIcon,
  GlobeEuropeAfricaIcon,
  GlobeAsiaAustraliaIcon,
} from '@heroicons/react/24/outline'

function BackgroundIllustration(props: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <svg id="evYwQHs7ENb1" viewBox="0 0 863 596">
        <defs>
          <linearGradient
            id="evYwQHs7ENb3-stroke"
            x1="0.000928"
            y1="0.473777"
            x2="1.220828"
            y2="0.473777"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="evYwQHs7ENb3-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb3-stroke-1" offset="100%" stopColor="rgba(73,102,245,0)" />
          </linearGradient>
          <linearGradient
            id="evYwQHs7ENb5-stroke"
            x1="0"
            y1="0.5"
            x2="1.558074"
            y2="0.5"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="evYwQHs7ENb5-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb5-stroke-1" offset="100%" stopColor="rgba(73,102,245,0)" />
          </linearGradient>
          <linearGradient
            id="evYwQHs7ENb7-stroke"
            x1="0.098175"
            y1="0.926575"
            x2="1.449693"
            y2="0.595145"
            spreadMethod="pad"
            gradientUnits="objectBoundingBox"
            gradientTransform="translate(0 0)"
          >
            <stop id="evYwQHs7ENb7-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb7-stroke-1" offset="100%" stopColor="rgba(73,102,245, 0)" />
          </linearGradient>
        </defs>
        <path d="M688.92,98.67L17.9777,561.678" fill="none" stroke="rgba(212,212,212,0.7)" strokeWidth="2" />
        <path
          id="evYwQHs7ENb3"
          d="M688.92,98.67L17.9777,561.678"
          fill="none"
          stroke="url(#evYwQHs7ENb3-stroke)"
          strokeWidth="2"
          strokeDashoffset="200"
          strokeDasharray="200"
        />
        <path
          d="M520.569,1.31232L445.146,53.6711c-2.29,1.5899-2.616,3.9317-.787,5.6525L551.773,160.375c1.828,1.719,1.504,4.06-.783,5.65L0.937854,548.381"
          fill="none"
          stroke="rgba(212,212,212,0.7)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          id="evYwQHs7ENb5"
          d="M520.569,1.31232L445.146,53.6711c-2.29,1.5899-2.616,3.9317-.787,5.6525L551.773,160.375c1.828,1.719,1.504,4.06-.783,5.65L0.937854,548.381"
          fill="none"
          stroke="url(#evYwQHs7ENb5-stroke)"
          strokeWidth="2"
          strokeDashoffset="200"
          strokeDasharray="200"
        />
        <path
          d="M841.519,197.923l-95.418,62.355c-2.3,1.597-5.97,2.012-8.844,1.001L605.151,190.721c-2.863-1.007-6.518-.599-8.82.984L9.78607,595.122"
          fill="none"
          stroke="rgba(212,212,212,0.7)"
          strokeWidth="2"
        />
        <path
          id="evYwQHs7ENb7"
          d="M841.519,197.923l-95.418,62.355c-2.3,1.597-5.97,2.012-8.844,1.001L605.151,190.721c-2.863-1.007-6.518-.599-8.82.984L9.78607,595.122"
          fill="none"
          stroke="url(#evYwQHs7ENb7-stroke)"
          strokeWidth="2"
          strokeDashoffset="200"
          strokeDasharray="200"
        />
      </svg>
    </div>
  )
}

export function PublishersHero() {
  return (
    <div className="overflow-hidden pt-16 lg:pt-28">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-7">
            <p className="mb-4 text-xl text-gray-600 uppercase">Publishers</p>
            <h1 className="text-4xl font-medium tracking-tighter text-gray-900 md:text-4xl md:tracking-tight xl:text-5xl">
              <span className="font-semibold text-gg-blue">Powerful tools</span> to grow & engage{' '}
              <span className="font-semibold text-gg-red">your community</span>
            </h1>
            <p className="my-6 text-xl text-gray-600 lg:w-4/5">
              Manage your events, connect deeply with players, and get the insights you need—all in one easy-to-use
              platform. Aftergame keeps your community connected long after the game leaves the shelf.
            </p>
            <p className="text-sm font-semibold lg:w-4/5">
              See how our toolkit can transform your events and community strategy.
            </p>
            <div className="pt-2 pb-6 lg:w-4/5">
              <Link href="/contact/demo">
                <Button
                  type="submit"
                  color="gg"
                  className="bg-gg-blue px-6! py-3! text-lg! active:bg-gg-red md:hover:bg-gg-red"
                >
                  Book Demo
                </Button>
              </Link>
            </div>
            <div className="flex max-w-105 flex-row flex-wrap items-center justify-center gap-x-8 gap-y-6">
              <Image src="/images/publishers/asmodee.png" alt="asmodee" width={112} height={49} className="shrink-0" />
              <Image
                src="/images/publishers/ledergames.webp"
                alt="Leder Games"
                width={112}
                height={53}
                className="mr-2 shrink-0 rounded-lg"
              />
              <Image
                src="/images/publishers/restoration.jpg"
                alt="Restoration Games"
                width={64}
                height={64}
                className="mr-2 shrink-0 rounded-lg"
              />
              <Image
                src="/images/publishers/vr.png"
                alt="VR Distribution"
                width={110}
                height={24}
                className="shrink-0"
              />
              <Image
                src="/images/publishers/lpg.png"
                alt="Lets Play Games"
                width={64}
                height={64}
                className="mr-2 shrink-0"
              />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:-mt-16 xl:col-span-5">
            <div className="absolute skew-x-3 skew-y-3 rounded-full bg-gg-blue-faint" style={{ top: 186, left: 48 }}>
              <GlobeAmericasIcon className="h-20 w-20 text-gg-blue/75" />
            </div>
            <div className="absolute skew-x-3 skew-y-3 rounded-full bg-gg-blue-faint" style={{ top: 278, left: 238 }}>
              <GlobeEuropeAfricaIcon className="h-20 w-20 text-gg-blue/75" />
            </div>
            <div className="absolute skew-x-3 skew-y-3 rounded-full bg-gg-blue-faint" style={{ top: 380, left: 376 }}>
              <GlobeAsiaAustraliaIcon className="h-20 w-20 text-gg-blue/75" />
            </div>
            <BackgroundIllustration className="absolute top-52 hidden h-149 w-215.75 -translate-x-1/2 lg:flex" />
            <SpeechBubble className="absolute w-40" style={{ top: 130, left: 10 }}>
              <UserGroupIcon className="mr-2 h-5 w-5 flex-none self-center text-gg-blue" />
              <p className="flex-auto text-xs text-gray-700">5 people played in this game</p>
            </SpeechBubble>
            <SpeechBubble className="absolute w-40" style={{ top: 216, left: 196 }}>
              <ScaleIcon className="mr-2 h-5 w-5 flex-none self-center text-gg-blue" />
              <p className="flex-auto text-xs text-gray-700">Tiebreak was used to win the game</p>
            </SpeechBubble>
            <SpeechBubble className="absolute w-40" style={{ top: 328, left: 332 }}>
              <IdentificationIcon className="mr-2 h-5 w-5 flex-none self-center text-gg-blue" />
              <p className="flex-auto text-xs text-gray-700">
                Won playing as the <i>Warrior</i> faction
              </p>
            </SpeechBubble>
          </div>
        </div>
      </Container>
    </div>
  )
}
