'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Container } from '@/components/Container';

export function GroupsPrimary() {
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
      aria-label="Aftergame for organizers"
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Stop chasing players. Start building momentum.
          </h2>
          <p className="mt-2 lg:mb-16 text-xl text-gray-100">
            The hardest part of organizing isn&apos;t planning—it&apos;s getting people to show up, connect, and come back. Aftergame solves that.
          </p>
        </div>

        {/* Feature 1: Matchmaking */}
        <div ref={ref1} className={`transition-all duration-1000 relative ${isInView1 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-24 lg:pb-16 lg:px-24`}>
          <div className='w-full h-[360px] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center col-span-1'>
            <p className='text-white text-center px-8'>PLACEHOLDER: Animation showing player with &quot;want to play Wingspan&quot; being matched with another player planning Wingspan at organizer&apos;s venue</p>
          </div>
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Automatic player matchmaking
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Players mark games they want to play. When someone plans that game at your venue, we notify everyone interested. No more empty seats, no more &quot;who wants to play?&quot;
            </p>
          </div>
        </div>

        {/* Feature 2: Self-organizing */}
        <div ref={ref2} className={`transition-all duration-1000 relative ${isInView2 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-24 lg:pb-16 lg:px-24`}>
          <div className='w-full h-[360px] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center col-span-1'>
            <p className='text-white text-center px-8'>PLACEHOLDER: Split screen showing player creating game on phone, then schedule auto-updating with new game appearing</p>
          </div>
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Let your community organize itself
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Members schedule their own games, demos, and sessions. Your calendar fills itself while you focus on the big picture. Chaos becomes coordination without the overhead.
            </p>
          </div>
        </div>

        {/* Feature 3: Reduce no-shows */}
        <div ref={ref3} className={`transition-all duration-1000 relative ${isInView3 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-24 lg:pb-16 lg:px-24`}>
          <div className='w-full h-[360px] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center col-span-1'>
            <p className='text-white text-center px-8'>PLACEHOLDER: Phone notifications showing &quot;Your game starts in 1 hour&quot; and calendar sync confirmation</p>
          </div>
          <div className='col-span-1'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Eliminate the no-show problem
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Automatic reminders, calendar integration, and push notifications mean players actually show up. Games start on time with the right number of people. Every time.
            </p>
          </div>
        </div>

        {/* Feature 4: Grow beyond your walls */}
        <div ref={ref4} className={`transition-all duration-1000 relative ${isInView4 ? "opacity-1 top-0" : "opacity-0 top-6"} grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-24 py-16 px-12 lg:pt-24 lg:pb-16 lg:px-24`}>
          <div className='w-full h-[360px] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center col-span-1'>
            <p className='text-white text-center px-8'>PLACEHOLDER: Map view showing venue location with radius highlighting nearby players being notified of events</p>
          </div>
          <div className='col-span-1 md:order-first'>
            <h3 className='text-xl lg:text-3xl font-medium text-white'>
              Reach players you didn&apos;t know existed
            </h3>
            <p className='mt-2 text-md lg:text-lg transition-colors delay-100 text-gray-100'>
              Your events are discoverable to thousands of players nearby. We bring new faces through your door—people actively looking for places to play and communities to join.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
