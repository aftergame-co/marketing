'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';

export function CommunitiesPrimary() {
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
            Become the gathering point
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            Host your own events, or let people self-organise their own games at your friendly space. Aftergame ensures like-minded people find their way to you.
          </p>
        </div>
        <div ref={ref1} className={`transition-all duration-1000 relative ${isInView1 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:py-32 lg:px-24`}>
          <Image
            src='/images/communities/notify.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-2xl font-medium text-white'>
              A ready audience
            </h3>
            <p className='mt-2 text-md transition-colors delay-100 text-gray-100'>
              Players can easily set which games they want to play within the Aftergame app. This is shown to friends as well as people in their communities.
            </p>
          </div>
        </div>
        <div ref={ref2} className={`transition-all duration-1000 relative ${isInView2 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:py-32 lg:px-24`}>
          <Image
            src='/images/communities/location.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-2xl font-medium text-white'>
              Be the safe and easy option
            </h3>
            <p className='mt-2 text-md transition-colors delay-100 text-gray-100'>
              Your space comes up as an option when a game is being planned. This gives players a safe place to host an event with people they may not know.
            </p>
          </div>
        </div>
        <div ref={ref3} className={`transition-all duration-1000 relative ${isInView3 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 flex-col-reverse items-center gap-y-12 gap-x-24 py-16 px-12 lg:py-32 lg:px-24`}>
          <Image
            src='/images/communities/notification.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-2xl font-medium text-white'>
              We let the right people know
            </h3>
            <p className='mt-2 text-md transition-colors delay-100 text-gray-100'>
              Players in the area who want to play this game are given a push notification with all the details. Joining the game is one tap away!
            </p>
          </div>
        </div>
        <div ref={ref4} className={`transition-all duration-1000 relative ${isInView4 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:py-32 lg:px-24`}>
          <Image
            src='/images/communities/events.png'
            alt='Want to play list'
            width={384}
            height={330}
            className='rounded-2xl col-span-1 m-auto'
          />
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-2xl font-medium text-white'>
              Never miss a beat
            </h3>
            <p className='mt-2 text-md transition-colors delay-100 text-gray-100'>
              Those in your community (and beyond!) can see all your upcoming events and games planned at your location.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
