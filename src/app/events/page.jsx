import { EventsContact } from '@/sections/EventsContact';
import { EventsHero } from '@/sections/EventsHero';
import { EventsPrimary } from '@/sections/EventsPrimary';
import { EventsSecondary } from '@/sections/EventsSecondary';
import { EventsPosts } from '@/sections/EventsPosts';

export const metadata = {
  title: 'Tabletop Events',
  description: 'Plan ahead or play it by ear, with Aftergame you enable your event attendees to find their third musketeer so they can play more and have more fun.',
  alternates: {
    canonical: '/events'
  },
  openGraph: {
    title: 'Tabletop Events',
    description: 'Plan ahead or play it by ear, with Aftergame you enable your event attendees to find their third musketeer so they can play more and have more fun.',
    url: 'https://www.aftergame.co',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/_next/image?url=/images/ag-thumbnail-new.png&w=1200&q=75',
        alt: 'Aftergame | The social tabletop gaming app',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function Events() {
  return (
    <main className='pt-20'>
      <EventsHero />
      <EventsPrimary />
      <EventsSecondary />
      <EventsPosts />
      <EventsContact />
    </main>
  )
}
