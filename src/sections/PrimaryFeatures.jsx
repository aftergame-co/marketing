'use client';

import { Fragment, useEffect, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { DeviceChartIconDark, DeviceChartIconLight, DeviceListIconDark, DeviceListIconLight, DeviceUserIconDark, DeviceUserIconLight } from '@/components/DeviceIcons'
import Image from 'next/image'

const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Gather your people',
    description:
      'Attend events, plan games, browse your combined collections, and share your gaming moments.',
    icon: DeviceListIconLight,
    selectedicon: DeviceListIconDark,
    screen: GroupScreen,
  },
  {
    name: 'Bring your collection',
    description:
      'Import your games or easily add them, create custom lists and sort them the way you want.',
    icon: DeviceUserIconLight,
    selectedicon: DeviceUserIconDark,
    screen: ProfileScreen,
  },
  {
    name: 'Play tracking and statistics, reimagined',
    description:
      'Record what matters to you, add photos, notes, game details, and more — all automatically synced with everyone at the table.',
    icon: DeviceChartIconLight,
    selectedicon: DeviceChartIconDark,
    screen: PlayScreen,
  },
]

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  opacity: 0,
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function GroupScreen({ custom, animated = false }) {
  return (
    <AppScreen className="relative w-full">
      <MotionAppScreenBody className='!bg-transparent  z-10' {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/home/group.png'
            alt='A screenshot of the scoresheet interface for Aftergame' 
            fill
            className="pointer-events-none"
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ProfileScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/home/profile.png'
            alt='A screenshot of the scoresheet interface for Aftergame' 
            fill
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function PlayScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/home/play.png'
            alt='A screenshot of the scoresheet interface for Aftergame' 
            fill
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

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
                    featureIndex === selectedIndex ? 'text-gray-600' : 'text-gray-100')}>
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
        <PhoneFrame showHeader={false} className="z-10 mx-auto w-full max-w-[366px]">
          <div className="bg-white mt-2 h-full rounded-2xl overflow-hidden">
            <Tab.Panels className="h-full" as={Fragment} >
              <AnimatePresence
                initial={false}
                custom={{ isForwards, changeCount }}
              >
                {features.map((feature, featureIndex) =>
                  selectedIndex === featureIndex ? (
                    <Tab.Panel
                      static
                      key={feature.name + changeCount}
                      className="h-full col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                    >
                      <feature.screen
                        animated
                        custom={{ isForwards, changeCount }}
                      />
                    </Tab.Panel>
                  ) : null
                )}
              </AnimatePresence>
            </Tab.Panels>
          </div>
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
              <PhoneFrame showHeader={false} className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
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

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="The social tabletop gaming app"
      className="bg-gg-blue py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            The social tabletop gaming app
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            We’re excited to be your companion at the table — helping you plan, enjoy, and share your gaming moments.
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
