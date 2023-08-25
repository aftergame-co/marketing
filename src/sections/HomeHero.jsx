'use client';

import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import { ClockIcon, FunnelIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
          strokeWidth="2"
          suppressHydrationWarning
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
            suppressHydrationWarning
          >
            <stop stopColor="#4966f5" />
            <stop offset="1" stopColor="#4966f5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="2"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
          strokeWidth="2"
          suppressHydrationWarning
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
            suppressHydrationWarning
          >
            <stop stopColor="#ff3a20" />
            <stop offset="1" stopColor="#ff3a20" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const scores_1 = [
  {score: 31, team: 'Woodland Alliance'},
  {score: 22, team: 'Marquise de Cat'},
  {score: 23, team: 'Vagabond'},
  {score: 30, team: 'The Lizard Cult'},
  {score: 16, team: 'Corvid Conspiracy'},
  {score: 30, team: 'The Eyrie'},
  {score: 32, team: 'Vagabond'},
  {score: 30, team: 'Corvid Conspiracy'},
  {score: 33, team: 'The Underground Duchy'},
]
const scores_2 = [
  {score: 20, team: 'Vagabond'},
  {score: 30, team: 'The Eyrie'},
  {score: 31, team: 'Marquise de Cat'},
  {score: 24, team: 'The Eyrie'},
  {score: 30, team: 'Woodland Alliance'},
  {score: 21, team: 'The Lizard Cult'},
  {score: 17, team: 'Corvid Conspiracy'},
  {score: 29, team: 'Vagabond'},
  {score: 24, team: 'The Riverfolk Company'},
]
const maxScore = Math.max(...scores_1.map(s => s.score))
const mnScore = Math.min(...scores_1.map(s => s.score))


let path = ''
let path2 = ''
let points = []
let points2 = []

let width = 282 - 1 * 2
let height = 180 - 32 * 2
for (let index = 0; index < scores_1.length; index++) {
  let x = 1 + (index / (scores_1.length - 1)) * width
  let y = 32 + (1 - (scores_1[index].score - mnScore) / (maxScore - mnScore)) * height
  points.push({ x, y })
  path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  
  let x2 = 1 + (index / (scores_2.length - 1)) * width
  let y2 = 32 + (1 - (scores_2[index].score - mnScore) / (maxScore - mnScore)) * height
  path2 += `${index === 0 ? 'M' : 'L'} ${x2.toFixed(4)} ${y2.toFixed(4)}`
  points2.push({ x: x2, y: y2 })
}


// function timedCount() {
//   timeout = setTimeout(timedCount, 1000);
// }

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            // onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`} suppressHydrationWarning>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <clipPath id={`${id}-clip2`} suppressHydrationWarning>
          <path d={`${path2} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient2)`}
        clipPath={`url(#${id}-clip2)`}
        opacity="0.0"
        suppressHydrationWarning
      />
      <motion.path
        ref={pathRef}
        d={path2}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#ff3a20', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.0"
        suppressHydrationWarning
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#4966f5', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {interactionEnabled && activePointIndex !== null && (
        <>
          <circle
            r="6"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="3"
            stroke="#4966f5"
          />
          <circle
            r="6"
            cx={points2[activePointIndex].x}
            cy={points2[activePointIndex].y}
            fill="#fff"
            strokeWidth="3"
            stroke="#ff3a20"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(0)
  let activeIndex = activePointIndex ?? scores_1.length - 1
  let activeScore1 = scores_1[activeIndex].score;
  let activeTeam1 = scores_1[activeIndex].team;
  let activeScore2 = scores_2[activeIndex].score;
  let activeTeam2 = scores_2[activeIndex].team;

  return (
    <AppScreen>
      <AppScreen.Header></AppScreen.Header>
      <AppScreen.Body>
        <div className="p-3 sm:p-4">
          <div className="flex gap-4">
            <Image src='/images/root.jpeg' width={64} height={50} className='rounded-md' alt='An image of the board game "Root"' />
            <div>
              <h3 className="text-lg font-medium leading-6 text-black">
                Root
              </h3>
              <div
                className='mt-2 flex align-middle text-gray-600 text-xs'>
                  <UserGroupIcon
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3'>2-4</span>
                  <ClockIcon 
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3'>60-90min</span>
                  <UsersIcon
                    className="h-4 w-4"
                  />
                  <span className='ml-1 mr-3'>10+</span>
              </div>
            </div>
          </div>
          <div>
              <p className='mt-4 mb-3 text-gray-600 text-xs'>Last played 3 days ago</p>
              <div className='grid grid-cols-12 rounded-md overflow-hidden'>
                <div className='bg-green-500 col-span-7 py-1'></div>
                <div className='bg-red-500 col-span-5 py-1'></div>
              </div>
              <div className='flex justify-between text-gray-900 text-sm'>
                <span>21 wins</span>
                <span>15 losses</span>
              </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className='flex items-center'>
              <p className='font-medium text-sm grow'>Results comparison</p>
              <FunnelIcon className='h-5 w-5 text-gray-900' />
            </div>
            <div className="mb-2 rounded-lg bg-gray-50 ring-1 ring-inset ring-black/5">
              <Chart
                width={286}
                height={180}
                paddingX={1}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="flex gap-2">
              <div className="grow text-md tabular-nums tracking-tight text-gray-900">
                <div className='flex items-center gap-2 mb-1'>
                  <div className='relative pt-1 pr-1 mr-2'>
                    {/* <div className='rounded-full w-8 h-8 bg-gg-blue-faint text-center p-1 text-sm font-semibold text-gg-blue'>EP</div> */}
                    <Image src='/images/jerry-photo.webp' width={32} height={32} className='rounded-full' alt='Profile photo for Jerry' />
                    <div className='absolute top-0 right-0 border-solid border-gg-blue rounded-full bg-white' style={{ width: 14, height: 14, borderWidth: 3}}></div>
                  </div>
                  <p>{activeScore1} VP</p>
                  <p>{activeTeam1}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='relative pt-1 pr-1 mr-2'>
                    {/* <div className='rounded-full w-8 h-8 bg-gg-blue-faint text-center p-1 text-sm font-semibold text-gg-blue'>JB</div> */}
                    <Image src='/images/elaine-photo.webp' width={32} height={32} className='rounded-full' alt='Profile photo for Elaine' />
                    <div className='absolute top-0 right-0 border-solid border-gg-red rounded-full bg-white' style={{ width: 14, height: 14, borderWidth: 3}}></div>
                  </div>
                  <p>{activeScore2} VP</p>
                  <p>{activeTeam2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}

export function HomeHero({ className }) {
  return (
    <div className={clsx("overflow-hidden py-16 sm:py-32 lg:pb-20", className)}>
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            {/* Record, share, and analyse your game playing. */}
            {/* Remember every epic moment and track your gaming journey */}
            Remember <span className='text-gg-blue font-semibold'>every</span><br /><span className='text-gg-red font-semibold'>epic</span> moment
            </h1>
            <p className="mt-6 mb-8 lg:w-4/5 text-xl text-gray-600">
            {/* Unlock the full potential of your gaming passion with our app, where you can easily record, share, and gain valuable insights into the games you love - taking your gameplay to the next level. */}
            Record the games you love on Aftergame to gain meaningful insights and share your gaming journey with friends.
            {/* ecord, share, and gain valuable insights into the games you love */}
            </p>
            {/* <div className="pt-6 pb-16 xl:pb-0 lg:w-4/5">
              <WaitlistForm label="Sign up for early access" />
            </div> */}

            <div className="pt-6 pb-16 xl:pb-0 flex flex-wrap gap-x-4 gap-y-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </div>
          <div className="relative mt-10 sm:mt-10 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="hidden lg:flex absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[600px] px-2 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className='hidden lg:flex py-6'></div>
          {/* <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Forbes', logoForbes],
                ['TechCrunch', logoTechcrunch],
                ['Wired', logoWired],
                ['CNN', logoCnn, 'hidden xl:block'],
                ['BBC', logoBbc],
                ['CBS', logoCbs],
                ['Fast Company', logoFastCompany],
                ['HuffPost', logoHuffpost, 'hidden xl:block'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-8" unoptimized />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </Container>
    </div>
  )
}
