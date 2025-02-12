import { CommunitiesContact } from '@/sections/CommunitiesContact';
import { CommunitiesHero } from '@/sections/CommunitiesHero';
import { CommunitiesPrimary } from '@/sections/CommunitiesPrimary';
import { CommunitiesSecondary } from '@/sections/CommunitiesSecondary';
import { CommunitiesPosts } from '@/sections/CommunitiesPosts';

export const metadata = {
  title: 'Communities',
  description: 'You have the welcoming space. We connect local players wanting to play the same games.Together we grow a hub for people to gather and play the games they love.',
  alternates: {
    canonical: '/communities'
  },
  openGraph: {
    title: 'Communities',
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

export default function Communities() {
  return (
    <main className='pt-20'>
      <CommunitiesHero />
      <CommunitiesPrimary />
      <CommunitiesSecondary />
      <CommunitiesPosts />
      <CommunitiesContact />
    </main>
  )
}
