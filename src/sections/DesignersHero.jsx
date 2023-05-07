'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { SpeechBubble } from '@/components/SpeechBubble';
import { UserGroupIcon, ScaleIcon, IdentificationIcon, GlobeAmericasIcon, GlobeEuropeAfricaIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

function BackgroundIllustration(props) {
  let id = useId()
  return (
    <div {...props}>
      <svg id="evYwQHs7ENb1" viewBox="0 0 863 596">
        <defs>
          <linearGradient id="evYwQHs7ENb3-stroke" x1="0.000928" y1="0.473777" x2="1.220828" y2="0.473777" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="evYwQHs7ENb3-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb3-stroke-1" offset="100%" stopColor="rgba(73,102,245,0)" />
          </linearGradient>
          <linearGradient id="evYwQHs7ENb5-stroke" x1="0" y1="0.5" x2="1.558074" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="evYwQHs7ENb5-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb5-stroke-1" offset="100%" stopColor="rgba(73,102,245,0)" />
          </linearGradient>
          <linearGradient id="evYwQHs7ENb7-stroke" x1="0.098175" y1="0.926575" x2="1.449693" y2="0.595145" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)">
            <stop id="evYwQHs7ENb7-stroke-0" offset="20%" stopColor="#4966f5" />
            <stop id="evYwQHs7ENb7-stroke-1" offset="100%" stopColor="rgba(73,102,245, 0)" />
          </linearGradient>
        </defs>
        <path d="M688.92,98.67L17.9777,561.678" transform="matrix(1.053589 0 0 1.053589-18.940969-17.693694)" fill="none" stroke="rgba(212,212,212,0.7)" strokeWidth="2" />
        <path id="evYwQHs7ENb3" d="M688.92,98.67L17.9777,561.678" transform="matrix(1.053589 0 0 1.053589-18.940969-17.693694)" fill="none" stroke="url(#evYwQHs7ENb3-stroke)" strokeWidth="2" strokeDashoffset="200" strokeDasharray="200" />
        <path d="M520.569,1.31232L445.146,53.6711c-2.29,1.5899-2.616,3.9317-.787,5.6525L551.773,160.375c1.828,1.719,1.504,4.06-.783,5.65L0.937854,548.381" transform="matrix(1.003398 0 0 1.003398-.94106-.933929)" fill="none" stroke="rgba(212,212,212,0.7)" strokeWidth="2" strokeLinecap="round" />
        <path id="evYwQHs7ENb5" d="M520.569,1.31232L445.146,53.6711c-2.29,1.5899-2.616,3.9317-.787,5.6525L551.773,160.375c1.828,1.719,1.504,4.06-.783,5.65L0.937854,548.381" transform="matrix(1.003398 0 0 1.003398-.94106-.933929)" filter="url(#evYwQHs7ENb5-filter)" fill="none" stroke="url(#evYwQHs7ENb5-stroke)" strokeWidth="2" strokeDashoffset="200" strokeDasharray="200" />
        <path d="M841.519,197.923l-95.418,62.355c-2.3,1.597-5.97,2.012-8.844,1.001L605.151,190.721c-2.863-1.007-6.518-.599-8.82.984L9.78607,595.122" transform="matrix(1.004336 0 0 1.004336-1.888989-1.702518)" fill="none" stroke="rgba(212,212,212,0.7)" strokeWidth="2" />
        <path id="evYwQHs7ENb7" d="M841.519,197.923l-95.418,62.355c-2.3,1.597-5.97,2.012-8.844,1.001L605.151,190.721c-2.863-1.007-6.518-.599-8.82.984L9.78607,595.122" transform="matrix(1.004336 0 0 1.004336-1.888989-1.702518)" fill="none" stroke="url(#evYwQHs7ENb7-stroke)" strokeWidth="2" strokeDashoffset="200" strokeDasharray="200" />
      </svg>
    </div>
  )
}

export function DesignersHero() {
  return (
    <div className="overflow-hidden pb-8 pt-16 sm:pt-32 lg:pb-20">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-7">
            <p className='text-xl text-gray-600 mb-4 uppercase'>Publishers</p>
            <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              <span className='text-gg-blue font-semibold'>Understand</span> how people <br className='hidden md:inline-block' />play <span className='text-gg-red font-semibold'>your games</span>
            </h1>
            <p className="mt-6 mb-8 lg:w-4/5 text-xl text-gray-600">
              Get deep insights into how your board games are being played so that you can track KPIs and discover ways to further the development of your game.
            </p>
            <p className="pt-6 lg:w-4/5 text-sm font-semibold">Want to be part of the feedback process?</p>
            <div className="pt-2 pb-16 xl:pb-0 lg:w-4/5">
              <a href='#contact'><Button
                type="submit"
                onClick={() => { }}
                color='gg'
                className='bg-gg-blue md:hover:bg-gg-red active:bg-gg-red !text-lg !px-6 !py-3'
              >
                Get in touch
              </Button></a>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-5">
            <div className='absolute bg-gg-blue-faint skew-x-3 skew-y-3 rounded-full' style={{top: 186, left: 48}}>
              <GlobeAmericasIcon className='w-20 h-20 text-gg-blue/75' />
            </div>
            <div className='absolute bg-gg-blue-faint skew-x-3 skew-y-3 rounded-full' style={{top: 278, left: 238}}>
              <GlobeEuropeAfricaIcon className='w-20 h-20 text-gg-blue/75' />
            </div>
            <div className='absolute bg-gg-blue-faint skew-x-3 skew-y-3 rounded-full' style={{top: 380, left: 376}}>
              <GlobeAsiaAustraliaIcon className='w-20 h-20 text-gg-blue/75' />
            </div>
            <BackgroundIllustration className="hidden absolute top-52 -translate-x-1/2 lg:flex h-[596px] w-[863px]" />
            <SpeechBubble className="absolute w-[160px]" style={{top: 130, left: 10}}>
              <UserGroupIcon className='w-5 h-5 text-gg-blue flex-none self-center mr-2' />
              <p className='flex-auto text-xs text-gray-700'>5 people played in this game</p>
            </SpeechBubble>
            <SpeechBubble className="absolute w-[160px]" style={{top: 216, left: 196}}>
              <ScaleIcon className='w-5 h-5 text-gg-blue flex-none self-center mr-2' />
              <p className='flex-auto text-xs text-gray-700'>Tiebreak was used to win the game</p>
            </SpeechBubble>
            <SpeechBubble className="absolute w-[160px]" style={{top: 328, left: 332}}>
              <IdentificationIcon className='w-5 h-5 text-gg-blue flex-none self-center mr-2' />
              <p className='flex-auto text-xs text-gray-700'>Won playing as the <i>Warrior</i> faction</p>
            </SpeechBubble>
            {/* <div className="px-2 absolute left-0 top-4 h-[619px] w-[760px] -translate-x-1/3">
              <Image src='/images/designer-data.png' width={760} height={619} alt='Profile photo for Elaine' />
            </div> */}
          </div>
          <div className='hidden lg:flex py-6'></div>
        </div>
      </Container>
    </div>
  )
}
