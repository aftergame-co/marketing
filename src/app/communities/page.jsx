import { CommunitiesContact } from '@/sections/CommunitiesContact';
import { CommunitiesHero } from '@/sections/CommunitiesHero';
import { CommunitiesPrimary } from '@/sections/CommunitiesPrimary';
import { CommunitiesSecondary } from '@/sections/CommunitiesSecondary';

export const metadata = {
  title: 'Communities connect over tabletop games with Aftergame',
  alternates: {
    canonical: '/communities'
  },
};

export default function Communities() {
  return (
    <main className='pt-20'>
      <CommunitiesHero />
      <CommunitiesPrimary />
      <CommunitiesSecondary />
      <CommunitiesContact />
    </main>
  )
}
