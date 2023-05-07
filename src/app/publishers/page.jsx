import { DesignersContact } from '@/sections/DesignersContact';
import { DesignersHero } from '@/sections/DesignersHero';
import { DesignersPrimary } from '@/sections/DesignersPrimary';
import { DesignersSecondary } from '@/sections/DesignersSecondary';

export const metadata = {
  title: 'Publishers',
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
