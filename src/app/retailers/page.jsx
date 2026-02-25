import { RetailersContact } from '@/sections/retailers/RetailersContact';
import { RetailersHero } from '@/sections/retailers/RetailersHero';
import { RetailersOverview } from '@/sections/retailers/RetailersOverview';
import { RetailersEmbed } from '@/sections/retailers/RetailersEmbed';
import { RetailersPrimary } from '@/sections/retailers/RetailersPrimary';
import { RetailersSecondary } from '@/sections/retailers/RetailersSecondary';
import { RetailersPosts } from '@/sections/retailers/RetailersPosts';

export const metadata = {
  title: 'Retailers',
  description: 'We know a lot goes into running a successful tabletop business. We are here with the tools to engage players, fill tables, and keep them coming back.',
  alternates: {
    canonical: '/retailers'
  },
  openGraph: {
    title: 'Retailers',
    description: 'We know a lot goes into running a successful tabletop business. We are here with the tools to engage players, fill tables, and keep them coming back.',
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
      <RetailersOverview />
      <RetailersEmbed />
      <RetailersPrimary />
      <RetailersSecondary />
      <RetailersPosts />
      <RetailersContact />
    </main>
  )
}
