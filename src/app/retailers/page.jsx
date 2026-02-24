import { RetailersContact } from '@/sections/retailers/RetailersContact';
import { RetailersHero } from '@/sections/retailers/RetailersHero';
import { RetailersEmbed } from '@/sections/retailers/RetailersEmbed';
import { RetailersPrimary } from '@/sections/retailers/RetailersPrimary';
import { RetailersSecondary } from '@/sections/retailers/RetailersSecondary';
import { RetailersPosts } from '@/sections/retailers/RetailersPosts';

export const metadata = {
  title: 'Retailers',
  description: 'You have the welcoming space. We connect local players wanting to play the same games.Together we grow a hub for people to gather and play the games they love.',
  alternates: {
    canonical: '/retailers'
  },
  openGraph: {
    title: 'Retailers',
    description: 'You have the welcoming space. We connect local players wanting to play the same games.Together we grow a hub for people to gather and play the games they love.',
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

export default function Retailers() {
  return (
    <main className='pt-20'>
      <RetailersHero />
      <RetailersEmbed />
      <RetailersPrimary />
      <RetailersSecondary />
      <RetailersPosts />
      <RetailersContact />
    </main>
  )
}
