'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';

export function ConventionsOverview() {
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
      aria-label="The social tabletop gaming app"
      className="bg-gg-blue pt-20 pb-8 sm:pt-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Smoother events, way less effort
          </h2>
          <p className="mt-2 lg:mb-10 text-xl text-gray-100">
            On web or mobile, set up your event the way you want it and let our custom built tools keep everything on track, because your biggest issue on game day should be “what will I play next?”
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 pb-16'>
          <div ref={ref1} className={`transition-all duration-1000 relative ${isInView1 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/conventions/overview-1.png'
                alt='Ticketing'
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                Ticketing
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Sell event tickets and add-ons, like panel talks, special game sessions, or competitions through Aftergame.  Tickets are simple to use, fully integrated, and transferable between attendees.
              </p>
              <p className='p-4 text-sm text-gray-700'>
               We offer competitive rates and pricing options, view details.
              </p>
            </div>
          </div>
          <div ref={ref2} className={`transition-all duration-1000 relative ${isInView2 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/conventions/overview-2.webp'
                alt='A Unified Schedule'
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                A Unified Schedule
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Schedule official demos, learn to play sessions, tournaments, competitions, and more as the event organizer, while also letting your attendees plan games they want to play.
              </p>
              <p className='p-4 text-sm text-gray-700'>
                This combination creates an easy to filter schedule of games and events so everyone can find something just for them.
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
          <div ref={ref3} className={`transition-all duration-1000 relative ${isInView3 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/conventions/overview-3.webp'
                alt='Check-in your attendees'
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                Check-in your attendees
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Easily check-in attendees, including their guests, into your event on game day with QR codes or by searching their name, allowing people to quickly cruise through the line.
              </p>
            </div>
          </div>
          <div ref={ref4} className={`transition-all duration-1000 relative ${isInView4 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/conventions/overview-4.webp'
                alt='Central communication hub'
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                Central communication hub
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                With a social feed built into to every event, you can post updates, pin important information, and chat with attendees before, during, or after your event.
              </p>
              <p className='p-4 text-sm text-gray-700'>
               Threaded discussions, mentions and push notifications ensure the right people always get the message.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
