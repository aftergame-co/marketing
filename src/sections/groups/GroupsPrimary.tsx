'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'
import { Container } from '@/components/Container'

export function GroupsPrimary() {
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
      aria-label="Aftergame for organizers"
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter text-white lg:tracking-tight">
            Stop chasing players. Start building momentum.
          </h2>
          <p className="mt-2 text-xl text-gray-100 lg:mb-16">
            The hardest part of organizing isn&apos;t planning—it&apos;s getting people to show up, connect, and come
            back. Aftergame solves that.
          </p>
        </div>

        {/* Feature 1: Matchmaking */}
        <div
          ref={ref1}
          className={`relative transition-all duration-1000 ${isInView1 ? 'top-0 opacity-100' : 'top-6 opacity-0'} grid grid-cols-1 items-center gap-x-24 gap-y-12 px-12 py-16 md:grid-cols-2 lg:px-24 lg:pt-24 lg:pb-16`}
        >
          <div className="col-span-1 flex h-90 w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10">
            <p className="px-8 text-center text-white">
              PLACEHOLDER: Animation showing player with &quot;want to play Wingspan&quot; being matched with another
              player planning Wingspan at organizer&apos;s venue
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-medium text-white lg:text-3xl">Automatic player matchmaking</h3>
            <p className="text-md mt-2 text-gray-100 transition-colors delay-100 lg:text-lg">
              Players mark games they want to play. When someone plans that game at your venue, we notify everyone
              interested. No more empty seats, no more &quot;who wants to play?&quot;
            </p>
          </div>
        </div>

        {/* Feature 2: Self-organizing */}
        <div
          ref={ref2}
          className={`relative transition-all duration-1000 ${isInView2 ? 'top-0 opacity-100' : 'top-6 opacity-0'} grid grid-cols-1 items-center gap-x-24 gap-y-12 px-12 py-16 md:grid-cols-2 lg:px-24 lg:pt-24 lg:pb-16`}
        >
          <div className="col-span-1 flex h-90 w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10">
            <p className="px-8 text-center text-white">
              PLACEHOLDER: Split screen showing player creating game on phone, then schedule auto-updating with new game
              appearing
            </p>
          </div>
          <div className="col-span-1 md:order-first">
            <h3 className="text-xl font-medium text-white lg:text-3xl">Let your community organize itself</h3>
            <p className="text-md mt-2 text-gray-100 transition-colors delay-100 lg:text-lg">
              Members schedule their own games, demos, and sessions. Your calendar fills itself while you focus on the
              big picture. Chaos becomes coordination without the overhead.
            </p>
          </div>
        </div>

        {/* Feature 3: Reduce no-shows */}
        <div
          ref={ref3}
          className={`relative transition-all duration-1000 ${isInView3 ? 'top-0 opacity-100' : 'top-6 opacity-0'} grid grid-cols-1 items-center gap-x-24 gap-y-12 px-12 py-16 md:grid-cols-2 lg:px-24 lg:pt-24 lg:pb-16`}
        >
          <div className="col-span-1 flex h-90 w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10">
            <p className="px-8 text-center text-white">
              PLACEHOLDER: Phone notifications showing &quot;Your game starts in 1 hour&quot; and calendar sync
              confirmation
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-medium text-white lg:text-3xl">Eliminate the no-show problem</h3>
            <p className="text-md mt-2 text-gray-100 transition-colors delay-100 lg:text-lg">
              Automatic reminders, calendar integration, and push notifications mean players actually show up. Games
              start on time with the right number of people. Every time.
            </p>
          </div>
        </div>

        {/* Feature 4: Grow beyond your walls */}
        <div
          ref={ref4}
          className={`relative transition-all duration-1000 ${isInView4 ? 'top-0 opacity-100' : 'top-6 opacity-0'} grid grid-cols-1 items-center gap-x-24 gap-y-12 px-12 py-16 md:grid-cols-2 lg:px-24 lg:pt-24 lg:pb-16`}
        >
          <div className="col-span-1 flex h-90 w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10">
            <p className="px-8 text-center text-white">
              PLACEHOLDER: Map view showing venue location with radius highlighting nearby players being notified of
              events
            </p>
          </div>
          <div className="col-span-1 md:order-first">
            <h3 className="text-xl font-medium text-white lg:text-3xl">Reach players you didn&apos;t know existed</h3>
            <p className="text-md mt-2 text-gray-100 transition-colors delay-100 lg:text-lg">
              Your events are discoverable to thousands of players nearby. We bring new faces through your door—people
              actively looking for places to play and communities to join.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
