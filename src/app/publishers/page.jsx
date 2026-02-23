import { PublisherEventsFeature } from '@/sections/publishers/PublisherEventsFeature';
import { PublishersCommunity } from '@/sections/publishers/PublishersCommunity';
import { PublishersHero } from '@/sections/publishers/PublishersHero';
import { PublishersPrimary } from '@/sections/publishers/PublishersPrimary';
import { PublishersSecondary } from '@/sections/publishers/PublishersSecondary';
import { PublishersContact } from '@/sections/publishers/PublishersContact';

export const metadata = {
  title: 'Publishers',
  description: 'Get deep insights into how your tabletop games are being played so that you can track KPIs and discover ways to further the development of your game.',
  alternates: {
    canonical: '/publishers'
  },
  openGraph: {
    title: 'Publishers',
    description: 'Get deep insights into how your tabletop games are being played so that you can track KPIs and discover ways to further the development of your game.',
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

export default function Publishers() {
  return (
    <main className='pt-20'>
      <PublishersHero />
      <PublisherEventsFeature />
      <PublishersCommunity />
      <PublishersPrimary />
      <PublishersSecondary />
      <PublishersContact />
    </main>
  )
}
