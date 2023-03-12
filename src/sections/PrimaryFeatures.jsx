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
import { XMarkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { ClockIcon, GlobeEuropeAfricaIcon, LightBulbIcon, UserGroupIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Link up with friends',
    description:
      // 'Sending files is a thing of the past. Share plays with live scoring updates all in real-time without leaving the app.',
      'Sending files is a thing of the past. Share plays with real-time scoring updates, all without leaving the app.',
    icon: DeviceUserIconLight,
    selectedicon: DeviceUserIconDark,
    screen: InviteScreen,
  },
  {
    name: 'Use tailored, pre-built scoresheets',
    description:
      'We research and define every game to save you time and allow any data-points relevant to the specific game you are playing to be recorded.',
    icon: DeviceListIconLight,
    selectedicon: DeviceListIconDark,
    screen: StocksScreen,
  },
  {
    name: 'Access unrivalled analytics and insights',
    description:
      'With our standardised data structure, we can go deeper on meaningful statistics and use all plays globally to surface unique insights.',
    icon: DeviceChartIconLight,
    selectedicon: DeviceChartIconDark,
    screen: InvestScreen,
  },
]

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
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
      y: '0%',
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

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="relative w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <XMarkIcon
          className="h-8 w-8 text-gray-900"
        />
        <div className='ml-2 grow'>Log play</div>
        <Button className='bg-gg-blue active:text-white active:bg-gg-blue hover:bg-gg-blue !rounded-4xl !text-sm !px-6' disabled>Save</Button>
      </MotionAppScreenHeader>
        <div className='absolute top-14 left-0 right-0 bg-white mt-4 bottom-0'></div>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-25'></div>
      <MotionAppScreenBody className='bg-transparent z-10' {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="mt-6 px-4 pt-3 pb-6 bg-white rounded-t-3xl h-full">
          <div className='m-auto bg-gray-300 w-8 h-1 rounded-xl mb-3'></div>
          <div className='h-full'>
            <div className='flex w-full border-solid border border-gray-700 rounded-md p-2 mb-4'>
              <div className='bg-gg-blue-faint rounded-lg p-2 mr-1 text-xs'>Jerry Seinfeld</div>
              <div className='bg-gg-blue-faint rounded-lg p-2 mr-2 text-xs'>Elaine Benes</div>
              <div className='w-0.5 h-5 bg-gray-500 self-center'></div>
            </div>
            <div className='w-full rounded-md p-1 sm:p-2 mb-6 bg-gg-blue-faint'>
              <p className='font-semibold text-xs mb-1'>Player added!</p>
              <p className='text-xs mb-1'>Send them an invite link so they can see this play on their device:</p>
              <div className='flex items-center bg-white p-1 rounded-md'>
                <p className='grow text-gg-blue underline text-xs sm:hidden'>invited.gg/dg876gr87gyer</p>
                <p className='grow text-gg-blue underline text-xs hidden sm:block'>https://invited.gg/dg876gr87gyer</p>
                <Button className='shrink-0 bg-gg-blue active:text-white active:bg-gg-blue hover:bg-gg-blue !rounded-4xl !text-xs !py-1 !px-2 !font-light' disabled>Copy</Button>
              </div>
            </div>
            <div className='flex mb-4'>
              <Image src='/images/jerry-photo.webp' width={40} height={40} className='rounded-full mr-3 border border-gray-300' alt='Profile photo for Jerry' />
              <div className='text-sm self-center grow'>Jerry Seinfeld</div>
              <input checked type="checkbox" value="" className="w-5 h-5 text-gg-blue bg-gray-100 border-gray-300 rounded self-center" readOnly />
            </div>
            <div className='flex mb-4'>
              <Image src='/images/george-photo.webp' width={40} height={40} className='rounded-full mr-3 border border-gray-300' alt='Profile photo for George' />
              <div className='text-sm self-center grow'>George Costanza</div>
              <input checked={false} type="checkbox" value="" className="w-5 h-5 text-gg-blue bg-gray-100 border-gray-300 rounded self-center" readOnly />
            </div>
            <div className='flex mb-4'>
              <Image src='/images/elaine-photo.webp' width={40} height={40} className='rounded-full mr-3 border border-gray-300' alt='Profile photo for Elaine' />
              <div className='text-sm self-center grow'>Elaine Benes</div>
              <input checked type="checkbox" value="" className="w-5 h-5 text-gg-blue bg-gray-100 border-gray-300 rounded self-center" readOnly />
            </div>
            <div className='flex mb-4'>
              <Image src='/images/kramer-photo.webp' width={40} height={40} className='rounded-full mr-3 border border-gray-300' alt='Profile photo for Cosmo' />
              <div className='text-sm self-center grow'>Cosmo Kramer</div>
              <input checked={false} type="checkbox" value="" className="w-5 h-5 text-gg-blue bg-gray-100 border-gray-300 rounded self-center" readOnly />
            </div>
            <Button className='w-full bg-gg-blue active:text-white active:bg-gg-blue hover:bg-gg-blue !rounded-4xl' disabled>Select</Button>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function StocksScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <XMarkIcon
          className="h-8 w-8 text-gray-900"
        />
        <div className='ml-2 grow'>Log play</div>
        <Button className='bg-gg-blue active:text-white active:bg-gg-blue hover:bg-gg-blue !rounded-4xl !text-sm !px-6' disabled>Save</Button>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className='relative h-full'>
          <Image
            src='/images/scoresheet.png'
            alt='A screenshot of the scoresheet interface for Goodgame' 
            fill
          />
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="p-3 sm:p-4">
          <div className="flex gap-4">
            <Image src='/images/catan.webp' width={64} height={50} className='rounded-md' alt='An image of the board game "Root"' />
            <div>
              <h3 className="text-lg font-medium leading-6 text-black">
                Catan
              </h3>
              <div
                className='mt-2 flex align-middle text-gray-600 text-xs'>
                  <UserGroupIcon
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3'>3-4</span>
                  <ClockIcon 
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3 hidden sm:block'>60-120min</span>
                  <span className='ml-1 mr-3 block sm:hidden'>60-120m</span>
                  <UsersIcon
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3'>10+</span>
              </div>
            </div>
          </div>
          <div>
            <p className='mt-4 mb-3 text-gray-600 text-xs'>Last played yesterday</p>
            <div className='grid grid-cols-10 rounded-md overflow-hidden'>
              <div className='bg-green-500 col-span-6 py-1'></div>
              <div className='bg-red-500 col-span-4 py-1'></div>
            </div>
            <div className='flex justify-between text-gray-900 text-sm'>
              <span>33 wins</span>
              <span>22 losses</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className='flex items-center mb-1'>
              <p className='font-medium text-sm grow'>Insights</p>
            </div>
            <div className='my-1 flex items-center align-middle gap-2 border border-gg-blue bg-gg-blue-faint rounded-md p-2'>
              <LightBulbIcon 
                className="shrink-0 h-6 w-6"
              />
              <p className='grow text-xs'>80% of the time when you get ’The Longest Road’ you will win the game.</p>
            </div>
            <div className='my-1 flex items-center align-middle gap-2 border border-gg-blue bg-gg-blue-faint rounded-md p-2'>
              <UserIcon
                className="shrink-0 h-6 w-6"
              />
              <p className='grow text-xs'>You have never won a game when Cosmo Kramer is playing.</p>
            </div>
            <div className='my-1 flex items-center align-middle gap-2 border border-gg-blue bg-gg-blue-faint rounded-md p-2'>
              <GlobeEuropeAfricaIcon
                className="shrink-0 h-6 w-6"
              />
              <p className='grow text-xs'>Players are more likely to win with ’The Longest Road’ than ’The Largest Army’, though when players have both they win 95% of the time.</p>
            </div>
            <p className='text-center text-sm text-gg-blue'>more...</p>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className='flex items-center mb-1'>
              <p className='font-medium text-sm grow'>Score breakdown</p>
            </div>
          </div>
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
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
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
