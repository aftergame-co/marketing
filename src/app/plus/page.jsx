import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Plans } from '@/sections/Plans';
import { CallToAction } from '@/sections/CallToAction';
import { ArrowsPointingOutIcon, HeartIcon, AdjustmentsVerticalIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Aftergame+',
  alternates: {
    canonical: '/plus'
  },
  openGraph: {
    title: 'Do more with Aftergame+',
    description: 'Aftergame+ is a new service where we will be adding extra features to take your hobby to the next level.',
    url: 'https://www.aftergame.co/plus',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/_next/image?url=/images/plus-thumbnail.png&w=1200&q=75',
        alt: 'Do more with Aftergame+',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function Plus() {
  return (
    <main>
      <div className='bg-gg-blue pt-16'>
        <Image
          src='/images/plus.png'
          alt='Tim image'
          width={600}
          height={600}
          className='m-auto'
        />
      </div>
    <Container>
      <div className="mx-auto max-w-2xl text-center pt-8 pb-32">
        <h1 className="hidden">
          Aftergame+
        </h1>
        <Image
          src='/images/ag-plus-text-light.png'
          alt='Tim image'
          width={294}
          height={56}
          className='m-auto'
        />
        <p className="mt-6 text-xl text-gray-700 text-left pb-12">
          <span className='font-semibold text-gray-900'>We offer Aftergame for free and with no ads. </span>
          This is something that our team are <i>proud</i> of and committed to continue.<br />Aftergame+ is a new service where we will be adding extra features to take your hobby to the next level.
        </p>

        <div className='flex flex-row items-center gap-x-8 p-8 pr-6 rounded-2xl bg-white border-2 border-gray-100 mb-4'>
          <ArrowsPointingOutIcon className='w-10 h-10 flex-shrink-0' />
          <div className='flex-1 text-left'>
            <p variant="titleMedium" className="text-lg font-bold">
              Go larger
            </p>
            <p className='text-lg leading-6 text-gray-700'>
              Host events up to 100 attendees, enable waitlists, event check-ins, and embed rich event or game lists directly on your website.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-center gap-x-8 p-8 pr-6 rounded-2xl bg-white border-2 border-gray-100 mb-4'>
          <CalendarDaysIcon className='w-10 h-10 flex-shrink-0' />
          <div className='flex-1 text-left'>
            <p variant="titleMedium" className="text-lg font-bold">
              Add to your events
            </p>
            <p className='text-lg leading-6 text-gray-700'>
              Let people know which games will be at your event with the games library and unlock the ability to creating recurring events.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-center gap-x-8 p-8 pr-6 rounded-2xl bg-white border-2 border-gray-100 mb-4'>
          <AdjustmentsVerticalIcon className='w-10 h-10 flex-shrink-0' />
          <div className='flex-1 text-left'>
            <p variant="titleMedium" className="text-lg font-bold">
              Filter everything
            </p>
            <p className='text-lg leading-6 text-gray-700'>
              See which games are no longer getting to the table, filter leaderboards to specific players or expansions, plays with specific players + results, and much more constantly being added.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-center gap-x-8 p-8 pr-6 rounded-2xl bg-white border-2 border-gray-100 mb-4'>
          <UserGroupIcon className='w-10 h-10 flex-shrink-0' />
          <div className='flex-1 text-left'>
            <p variant="titleMedium" className="text-lg font-bold">
              Groups that pop
            </p>
            <p className='text-lg leading-6 text-gray-700'>
              Create a custom group URL, add official group lists, and embed a rich event calendar directly on your website.
            </p>
          </div>
        </div>

        <div className='flex flex-row items-center gap-x-8 p-8 pr-6 rounded-2xl bg-white border-2 border-gray-100 mb-4'>
          <HeartIcon className='w-10 h-10 flex-shrink-0' />
          <div className='flex-1 text-left'>
            <p variant="titleMedium" className="text-lg font-bold">
              Support future development
            </p>
            <p className='text-lg leading-6 text-gray-700'>
              We are just getting started! Help us unlock the true potential of a world-class platform built for tabletop gamers, by tabletop gamers.
            </p>
          </div>
        </div>

        <Button
          href="/download"
          className="mt-16 !text-xl !px-16 !py-5 bg-gg-blue hover:bg-gg-red active:bg-gg-red"
          aria-label="Subscribe to Aftergame+"
        >
          Subscribe in app
        </Button>
      </div>
    </Container>
    <CallToAction />
    </main>
  )
}
