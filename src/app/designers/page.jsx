import { CallToAction } from '@/sections/CallToAction';
import { DesignersHero } from '@/sections/DesignersHero';
import { DesignersPrimary } from '@/sections/DesignersPrimary';
import { DesignersSecondary } from '@/sections/DesignersSecondary';

export const metadata = {
  title: 'Game Designers',
};

export default function Designers() {
  return (
    <main className='pt-20'>
      <DesignersHero />
      <DesignersPrimary />
      <DesignersSecondary />
      <CallToAction />
    </main>
  )
}
