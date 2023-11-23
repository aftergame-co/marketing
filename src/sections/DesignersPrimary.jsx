'use client';

import { useEffect, useRef, useState } from 'react'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { useInView } from 'framer-motion'
import useAnimation from '@/utils/animations'
import { Container } from '@/components/Container';

function Slider() {
  let [sliderPosition, setSliderPosition] = useState(0);
  const animated = useAnimation('cubic', 2000, 1000);

  useEffect(() => {
    setSliderPosition(100 - (64 * animated));
  }, [animated]);

  return (
    <ReactBeforeSliderComponent
      className='rounded-2xl overflow-hidden'
      firstImage={{ imageUrl: '/images/publishers/with-ag.png', alt: 'With Aftergame' }}
      secondImage={{ imageUrl: '/images/publishers/without-ag.png', alt: 'Without Aftergame' }}
      currentPercentPosition={sliderPosition}
      delimiterColor='rgb(237, 237, 252)'
      delimiterIconStyles={{
        backgroundImage: 'url(/images/publishers/expand.png)',
        backgroundSize: 25,
        cursor: 'col-resize'
      }}
    />
  )
}

export function DesignersPrimary() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  return (
    <section
      id="graph"
      aria-label="Go beyond sales data"
      className="bg-gg-blue py-20 sm:py-32"
      ref={containerRef}
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Go beyond sales data
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            Remove the guesswork when releasing new content for your games. Aftergame gives you access to usage of your games like never before.
          </p>
        </div>
      </Container>
      <div className="mt-16 mx-4 md:hidden">
        {isInView && <Slider />}
      </div>
      <Container className="hidden md:mt-16 md:block">
        {isInView && <Slider />}
      </Container>
    </section>
  )
}
