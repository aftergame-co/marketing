import { DesignersContact } from '@/sections/DesignersContact';
import { DesignersHero } from '@/sections/DesignersHero';
import { DesignersPrimary } from '@/sections/DesignersPrimary';
import { DesignersSecondary } from '@/sections/DesignersSecondary';

export const metadata = {
  title: 'Publishers use Aftergame to understand and reach players globally',
  alternates: {
    canonical: '/publishers'
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
