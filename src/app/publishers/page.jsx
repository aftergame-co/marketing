import { DesignersContact } from '@/sections/DesignersContact';
import { DesignersHero } from '@/sections/DesignersHero';
import { DesignersPrimary } from '@/sections/DesignersPrimary';
import { DesignersSecondary } from '@/sections/DesignersSecondary';

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
      <DesignersHero />
      <DesignersPrimary />
      <DesignersSecondary />
      <DesignersContact />
    </main>
  )
}
