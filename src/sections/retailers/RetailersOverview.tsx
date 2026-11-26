'use client'

import { useRef } from 'react'
import Image from '@/components/Image'
import { useInView } from 'motion/react'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function RetailersOverview() {
  let containerRef = useRef<HTMLElement>(null)
  let ref1 = useRef<HTMLDivElement>(null)
  let ref2 = useRef<HTMLDivElement>(null)
  let ref3 = useRef<HTMLDivElement>(null)
  let ref4 = useRef<HTMLDivElement>(null)
  let isInView1 = useInView(ref1, { once: true, amount: 0.4 })
  let isInView2 = useInView(ref2, { once: true, amount: 0.4 })
  let isInView3 = useInView(ref3, { once: true, amount: 0.4 })
  let isInView4 = useInView(ref4, { once: true, amount: 0.4 })
  return (
    <section
      id="features"
      aria-label="The social tabletop gaming app"
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter text-white lg:tracking-tight">
            A platform that understands tabletop businesses
          </h2>
          <p className="mt-2 text-xl text-gray-100 lg:mb-10">
            Events, ticketing, game libraries, player insights, and social engagement — designed around how gaming
            communities actually work, not bolted onto generic software.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-8 pb-8 lg:grid-cols-2 lg:gap-16 lg:pb-16">
          <div
            ref={ref1}
            className={`relative transition-all duration-1000 ${isInView1 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/retailers/overview-1.webp"
                alt="More games, less work"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">More games, less work</h3>
              <p className="p-4 text-sm text-gray-700">
                Creating events on Aftergame is a breeze. With recurring events, you can set up your Thursday Night
                Games once and then stop worrying about it.
              </p>
              <p className="p-4 text-sm text-gray-700">
                We’ll send notifications to your group as new Thursday Night Games are generated so you still reach your
                audience without even having to log in.
              </p>
            </div>
          </div>
          <div
            ref={ref2}
            className={`relative transition-all duration-1000 ${isInView2 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/retailers/overview-2.webp"
                alt="Tickets and check-in"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">Tickets and check-in</h3>
              <p className="p-4 text-sm text-gray-700">
                Sell tickets directly through Aftergame to provide a simple, fully integrated experience.
              </p>
              <p className="p-4 text-sm text-gray-700">
                Players get a unique QR code with their RSVP that you can scan to quickly check people in as they arrive
                to keep track of who’s ready to play!
              </p>
              <p className="p-4 text-sm text-gray-700">
                We offer a competitive rate on fees,{' '}
                <Link href="/pricing#tickets" className="font-semibold text-gg-blue">
                  view details
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            ref={ref3}
            className={`relative transition-all duration-1000 ${isInView3 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/retailers/overview-3.webp"
                alt="Impactful insights"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">Impactful insights</h3>
              <p className="p-4 text-sm text-gray-700">
                Having an understanding of the games your community plays the most and what&apos;s in their collections
                allows you to put your effort in the right place.
              </p>
              <p className="p-4 text-sm text-gray-700">
                The group collection allows you to see an aggregation of what your community Wants to Play, and
                what&apos;s in their Wishlists, helping you to better plan events and what to stock in your game
                library.
              </p>
            </div>
          </div>
          <div
            ref={ref4}
            className={`relative transition-all duration-1000 ${isInView4 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/retailers/overview-4.webp"
                alt="A focused social feed"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">A focused social feed</h3>
              <p className="p-4 text-sm text-gray-700">
                Baked into your group is a feed of all events, planned games, photos, posts, games played, and more. Pin
                important information and engage directly with members of your community.
              </p>
              <p className="p-4 text-sm text-gray-700">
                Threaded discussions, mentions, and push notifications ensure the right people always get the message.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
