'use client';

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PhoneFrame } from '@/components/PhoneFrame'
import { DeviceChartIconDark, DeviceChartIconLight, DeviceListIconDark, DeviceListIconLight, DeviceUserIconDark, DeviceUserIconLight } from '@/components/DeviceIcons'

const features = [
  {
    name: 'Link up with friends',
    description:
      // 'Sending files is a thing of the past. Share plays with live scoring updates all in real-time without leaving the app.',
      'Sending files is a thing of the past. Share plays with real-time scoring updates, all without leaving the app.',
    icon: DeviceUserIconLight,
    selectedicon: DeviceUserIconDark,
  },
  {
    name: 'Use tailored, pre-built scoresheets',
    description:
      'We research and define every game to save you time and allow any data-points relevant to the specific game you are playing to be recorded.',
    icon: DeviceListIconLight,
    selectedicon: DeviceListIconDark,
  },
  {
    name: 'Access unrivalled analytics and insights',
    description:
      'With our standardised data structure, we can go deeper on meaningful statistics and use all plays globally to surface unique insights.',
    icon: DeviceChartIconLight,
    selectedicon: DeviceChartIconDark,
  },
]

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-white/20"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-100"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              {featureIndex === selectedIndex && (
                <feature.selectedicon className="h-8 w-8" />
              )}
              {featureIndex !== selectedIndex && (
                <feature.icon className="h-8 w-8" />
              )}
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                <Tab className={clsx('text-left [&:not(:focus-visible)]:focus:outline-none transition-colors delay-100',
                    featureIndex === selectedIndex ? 'text-black' : 'text-white')}>
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className={clsx('mt-2 text-sm transition-colors delay-100',
                    featureIndex === selectedIndex ? 'text-gray-600' : 'text-gray-200')}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#fff" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden bg-white/20 rounded-2xl px-5 py-6">
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-white p-6 sm:p-10 border-t border-slate-200">
                <feature.selectedicon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-black sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-1 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-white' : 'bg-gray-400'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function DesignersPrimary() {
  return (
    <section
      id="features"
      aria-label="Play tracking and statistics, reimagined"
      className="bg-gg-blue py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Play tracking and statistics, reimagined
          </h2>
          <p className="mt-2 text-xl text-gray-200">
            We are building the play tracking app for today packed with features made possible by using the latest technologies.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
