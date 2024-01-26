'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';

export function EventsPrimary() {
  let containerRef = useRef();
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let isInView1 = useInView(ref1, { once: true, amount: 0.4 });
  let isInView2 = useInView(ref2, { once: true, amount: 0.4 });
  let isInView3 = useInView(ref3, { once: true, amount: 0.4 });
  let isInView4 = useInView(ref4, { once: true, amount: 0.4 });
  return (
    <section
      id="features"
      aria-label="Play tracking and statistics, reimagined"
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Let chaos organise itself
          </h2>
          <p className="mt-2 lg:mb-16 text-xl text-gray-100">
            You and the people attending your event can plan games which fills up the schedule for everyone to see and claim a seat.
          </p>
        </div>
        <div ref={ref1} className={`transition-all duration-1000 relative ${isInView1 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-32 lg:pb-24 lg:px-24`}>
          <Image
            src='/images/events/plan.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Plan the game
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Schedule game demos, learn to play sessions, and more as the event organiser, or let your attendees plan the games they want to play.
            </p>
          </div>
        </div>
        <div ref={ref2} className={`transition-all duration-1000 relative ${isInView2 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-32 lg:pb-24 lg:px-24`}>
          <Image
            src='/images/events/schedule.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              A unified schedule
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              An easy to filter schedule showing all the games and events on offer. Each attendee has their own day plan filled in by the events they are attending.
            </p>
          </div>
        </div>
        <div ref={ref3} className={`transition-all duration-1000 relative ${isInView3 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-32 lg:pb-24 lg:px-24`}>
          <Image
            src='/images/events/claim.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Claiming a seat
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Let the games go ahead with confidence. Securing a spot is easy with push notifications and calendar integrations to keep people on track.
            </p>
          </div>
        </div>
        <div ref={ref4} className={`transition-all duration-1000 relative ${isInView4 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-32 lg:pb-24 lg:px-24`}>
          <Image
            src='/images/events/communicate.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Coordinate on the go
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              With the ability to communicate with everyone who claimed a seat, last minute changes can be managed with ease.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
