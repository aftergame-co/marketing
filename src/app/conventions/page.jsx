import { ConventionsHero } from '@/sections/conventions/ConventionsHero';
import { ConventionsOverview } from '@/sections/conventions/ConventionsOverview';
import { ConventionsPrimary } from '@/sections/conventions/ConventionsPrimary';
import { ConventionsEmbed } from '@/sections/conventions/ConventionsEmbed';
import { ConventionsSecondary } from '@/sections/conventions/ConventionsSecondary';
import { ConventionsPosts } from '@/sections/conventions/ConventionsPosts';
import { ConventionsContact } from '@/sections/conventions/ConventionsContact';

export const metadata = {
  title: 'Tabletop Events',
  description: 'Plan ahead or play it by ear, with Aftergame you enable your event attendees to find their third musketeer so they can play more and have more fun.',
  alternates: {
    canonical: '/conventions'
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

export default function Conventions() {
  return (
    <main className='pt-20'>
      <ConventionsHero />
      <ConventionsOverview />
      <ConventionsPrimary />
      <ConventionsEmbed />
      <ConventionsSecondary />
      <ConventionsPosts />
      <ConventionsContact />
    </main>
  )
}
