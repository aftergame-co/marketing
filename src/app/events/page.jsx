import { EventsContact } from '@/sections/EventsContact';
import { EventsHero } from '@/sections/EventsHero';
import { EventsPrimary } from '@/sections/EventsPrimary';
import { EventsSecondary } from '@/sections/EventsSecondary';
import { EventsPosts } from '@/sections/EventsPosts';

export const metadata = {
  title: 'Tabletop Events',
  alternates: {
    canonical: '/events'
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
