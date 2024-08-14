'use client';

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Top tool',
    body: 'We have a growing game group and this has been a marvelous help in organizing our games and adding to the reach of people that see us. The developer is helpful and responsive. Worth every bit of the five stars.',
    author: 'Amanal',
    rating: 5,
  },
  {
    title: 'Great app',
    body: 'Used it at Wellycon to join and create several boardgames. Made the whole experience a lot less stressful and enjoyable.',
    author: 'Jagg8n',
    rating: 5,
  },
  {
    title: 'Amazing!',
    body: 'We are using this for our meets and it has just grown and grown into a fabulous tool. We will certainly be using it going forward for all our events. Developers are amazing, responsive to feedback and always friendly and helpful. If you are a board game club or event, look into this for sure!',
    author: 'Tinsoup',
    rating: 5,
  },
  {
    title: 'Great potential',
    body: 'Atfergame is easily my preferred app for recording plays, scheduling games, and planning events. The developers are very responsive and eager to include improvements an developments when they can. I believe this app has the potential to keep growing and improving and will become even better over time.',
    author: 'Mitch',
    rating: 5,
  },
  {
    title: 'I love it!',
    body: 'Great app, wonderful platform to manage my games and play experience. Well done to the team!',
    author: 'Robert',
    rating: 5,
  },
  {
    title: 'Easy to use',
    body: 'UI is simple and super easy to use. Excited for the future of Aftergame!',
    author: 'Rhys',
    rating: 5,
  },
  {
    title: 'Highly recommended!',
    body: 'Great app, it helps us keep track of our collection of games as well as our game scores.',
    author: 'Sophie',
    rating: 5,
  },
  {
    title: 'Great for Game Days',
    body: 'We have used this app for our last few game days and it’s worked so well! Lets people plan to meet up for games prior and on the day. If you can organise for the map to be added if you’re planning a big event it lets people find the table very easily.',
    author: 'CnrDvn',
    rating: 5,
  },
  {
    title: 'What da, no ads',
    body: 'And yet a decent app. This is amazing and look forward to seeing what else you bring to the app in future updates. Keep it up.',
    author: 'Maverick Jeske',
    rating: 5,
  },
  {
    title: 'Great for cons',
    body: 'Very easy to use at supported cons to create and join planned games. Able to find a great 3P game of Ark Nova with experienced players (not always assured at a con) that finished in 75 minutes.',
    author: 'Graeme',
    rating: 5,
  },
  {
    title: 'Local board game club loving it',
    body: 'This app is fabulous for organising games with friends, recording your plays, tracking the games in your collection and connecting with gaming friends! The developer is very responsive to feedback and each update makes this app even better. Our local Board Game club is now using the app and they create an event and we can schedule our games for people to join. Keep up the great work!',
    author: 'Christine',
    rating: 5,
  },
  {
    title: 'Fantastic',
    body: 'Fantastic app for tracking gameplay and my game collection. Amazing team and really impressive community support!',
    author: 'Andrew',
    rating: 5,
  },
  {
    title: 'Very happy',
    body: 'Brilliant app and responsive development team!',
    author: 'Jessica',
    rating: 5,
  },
  {
    title: 'Only getting better',
    body: 'Still early days for this app, but I like what I see! The ability to see venue’s game libraries, members’ game collections and being able to preplan individual games makes it so much easier to connect with other members and play the games you want to play. There’s still a few improvements to be made but that’s to be expected with an app this new. The development team have proven very approachable when suggesting improvements and reporting bugs. It will only get better as more people use it!',
    author: 'Matthew',
    rating: 5,
  },
  {
    title: 'Love it!',
    body: 'So happy with this app! Great for events and planning games too!',
    author: 'Dana',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-gg-blue' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Join the party and elevate your gaming.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          We constantly improve and always take on feedback to deliver the platform our hobby deserves.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
