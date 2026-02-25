'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';

export function RetailersOverview() {
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
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            A platform that understands tabletop businesses
          </h2>
          <p className="mt-2 lg:mb-10 text-xl text-gray-100">
            Events, ticketing, game libraries, player insights, and social engagement — designed around how gaming communities actually work, not bolted onto generic software.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 pb-8 lg:pb-16'>
          <div ref={ref1} className={`transition-all duration-1000 relative ${isInView1 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/retailers/overview-1.webp'
                alt='More games, less work'
                fill
                className="object-scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                More games, less work
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Creating events on Aftergame is a breeze. With recurring events, you can set up your Thursday Night Games once and then stop worrying about it. 
              </p>
              <p className='p-4 text-sm text-gray-700'>
               We’ll send notifications to your group as new Thursday Night Games are generated so you still reach your audience without even having to log in.
              </p>
            </div>
          </div>
          <div ref={ref2} className={`transition-all duration-1000 relative ${isInView2 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/retailers/overview-2.webp'
                alt='Tickets and check-in'
                fill
                className="object-scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                Tickets and check-in
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                You can sell tickets directly through Aftergame or give them away if you want an exclusive yet accessible event.
              </p>
              <p className='p-4 text-sm text-gray-700'>
                With or without tickets, players will get a unique QR code with their RSVP that you can scan to quickly check people in as they arrive to keep track of who’s ready to play!
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
          <div ref={ref3} className={`transition-all duration-1000 relative ${isInView3 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/retailers/overview-3.webp'
                alt='Impactful insights'
                fill
                className="object-scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                Impactful insights
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Having an understanding of the games your community plays the most and what's in their collections allows you to put your effort in the right place.
              </p>
              <p className='p-4 text-sm text-gray-700'>
                The group collection allows you to see an aggregation of what your community Wants to Play, and what's in their Wishlists, helping you to better plan events and what to stock in your game library.
              </p>
            </div>
          </div>
          <div ref={ref4} className={`transition-all duration-1000 relative ${isInView4 ? "opacity-1 top-0" : "opacity-0 top-6"} col-span-1 rounded-2xl overflow-hidden bg-gray-300 border-2 border-gray-200 flex flex-row`}>
            <div className='relative flex-[1.6] h-[500px] border-[16px] border-gray-300 rounded-xl overflow-hidden'>
              <Image
                src='/images/retailers/overview-4.webp'
                alt='A focused social feed'
                fill
                className="object-scale-down"
              />
            </div>
            <div className='flex-[2] bg-white border-l-2 border-gray-200'>
              <h3 className="p-4 font-semibold text-2xl">
                A focused social feed
              </h3>
              <p className='p-4 text-sm text-gray-700'>
                Baked into your group is a feed of all events, planned games, photos, posts, games played, and more. Pin important information and engage directly with members of your community.
              </p>
              <p className='p-4 text-sm text-gray-700'>
               Threaded discussions, mentions, and push notifications ensure the right people always get the message.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
