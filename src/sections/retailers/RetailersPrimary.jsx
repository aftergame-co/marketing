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
import { DeviceNumberOneIconLight, DeviceNumberOneIconDark, DeviceNumberTwoIconLight, DeviceNumberTwoIconDark, DeviceNumberThreeIconLight, DeviceNumberThreeIconDark } from '@/components/DeviceIcons'
import Image from 'next/image'

const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'A ready audience',
    description:
      'Players can set which games they’d like to play, which helps them connect with others who want to play the same things.',
    icon: DeviceNumberOneIconLight,
    selectedicon: DeviceNumberOneIconDark,
    screen: Screen1,
  },
  {
    name: 'Be the safe and easy option',
    description:
      'Your space comes up as an option when a game is being planned. This gives players a safe place to host an event with people they may not know.',
    icon: DeviceNumberTwoIconLight,
    selectedicon: DeviceNumberTwoIconDark,
    screen: Screen2,
  },
  {
    name: 'We notify the right people',
    description:
      'Players in the area who want to play this game are given a push notification with all the details. Joining the game is one tap away!',
    icon: DeviceNumberThreeIconLight,
    selectedicon: DeviceNumberThreeIconDark,
    screen: Screen3,
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

function Screen1({ custom, animated = false }) {
  return (
    <AppScreen className="relative w-full">
      <MotionAppScreenBody className='!bg-transparent  z-10' {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/retailers/screen-1.png'
            alt='A screenshot of the scoresheet interface for Aftergame' 
            fill
            className="pointer-events-none"
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function Screen2({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/retailers/screen-2.png'
            alt='A screenshot of the scoresheet interface for Aftergame' 
            fill
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function Screen3({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/retailers/screen-3.png'
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

export function RetailersPrimary() {
  return (
    <section
      id="features"
      aria-label="Become the gathering point"
      className="bg-gg-blue py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Become the gathering point
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            You have the welcoming space. We connect local players wanting to play the same games. Together we grow a hub for people to gather and play the games they love.  
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
