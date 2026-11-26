'use client'

import { useRef } from 'react'
import Image from '@/components/Image'
import { useInView } from 'motion/react'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function ConventionsOverview() {
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
      className="bg-gg-blue pt-20 pb-8 sm:pt-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter text-white lg:tracking-tight">
            Smoother events, way less effort
          </h2>
          <p className="mt-2 text-xl text-gray-100 lg:mb-10">
            On web or mobile, set up your event the way you want it and let our purpose-built tools keep everything on
            track, because your biggest issue on game day should be “what will I play next?”
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-8 pb-8 lg:grid-cols-2 lg:gap-16 lg:pb-16">
          <div
            ref={ref1}
            className={`relative transition-all duration-1000 ${isInView1 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/conventions/overview-1.webp"
                alt="Ticketing"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">Ticketing</h3>
              <p className="p-4 text-sm text-gray-700">
                Sell event tickets and add-ons, like panel talks, special game sessions, or competitions through
                Aftergame. Tickets are simple to use, fully integrated, and transferable between attendees.
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
          <div
            ref={ref2}
            className={`relative transition-all duration-1000 ${isInView2 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/conventions/overview-2.webp"
                alt="A Unified Schedule"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">A Unified Schedule</h3>
              <p className="p-4 text-sm text-gray-700">
                Schedule official demos, learn to play sessions, tournaments, competitions, and more as the event
                organizer, while also letting your attendees plan games they want to play.
              </p>
              <p className="p-4 text-sm text-gray-700">
                This combination creates an easy-to-filter schedule of games and events so everyone can find something
                just for them.
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
                src="/images/conventions/overview-3.webp"
                alt="Check-in your attendees"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">Check-in your attendees</h3>
              <p className="p-4 text-sm text-gray-700">
                Easily check-in attendees, including their guests, into your event on game day with QR codes or by
                searching their name, allowing people to quickly cruise through the line.
              </p>
            </div>
          </div>
          <div
            ref={ref4}
            className={`relative transition-all duration-1000 ${isInView4 ? 'top-0 opacity-100' : 'top-6 opacity-0'} col-span-1 flex flex-row overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-300`}
          >
            <div className="relative h-125 flex-[1.6] overflow-hidden rounded-xl border-16 border-gray-300">
              <Image
                src="/images/conventions/overview-4.webp"
                alt="Central communication hub"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-scale-down"
              />
            </div>
            <div className="flex-2 border-l-2 border-gray-200 bg-white">
              <h3 className="p-4 text-2xl font-semibold">Keep everyone in the loop</h3>
              <p className="p-4 text-sm text-gray-700">
                With a social feed built into every event, you can post updates, pin important information, and chat
                with attendees before, during, or after your event.
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
