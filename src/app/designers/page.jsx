import { CallToAction } from '@/sections/CallToAction';
import { DesignersHero } from '@/sections/DesignersHero';
import { DesignersPrimary } from '@/sections/DesignersPrimary';

export const metadata = {
  title: 'Game Designers',
};

export default function Designers() {
  return (
    <main className='pt-20'>
      <DesignersHero />
      <DesignersPrimary />
      <CallToAction />
    </main>
  )
}
