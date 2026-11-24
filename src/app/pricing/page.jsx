import { PricingHero } from '@/sections/pricing/PricingHero';
import { PricingPlans } from '@/sections/pricing/PricingPlans';
import { PricingTickets } from '@/sections/pricing/PricingTickets';
import { CallToAction } from '@/sections/CallToAction';

export const metadata = {
  title: 'Pricing',
  description: 'Our premium plans offer extra features to support this commitment.',
  alternates: {
    canonical: '/pricing'
  },
  openGraph: {
    title: 'Pricing',
    description: 'Our premium plans offer extra features to support this commitment.',
    url: 'https://www.aftergame.co',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/images/ag-thumbnail-new.png',
        alt: 'Aftergame | The social tabletop gaming app',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function Pricing() {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      <PricingTickets />
      <CallToAction />
    </main>
  )
}
