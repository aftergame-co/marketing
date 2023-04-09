import { CallToAction } from '@/sections/CallToAction';
import { HomeHero } from '@/sections/HomeHero';
import { PrimaryFeatures } from '@/sections/PrimaryFeatures';
import { SecondaryFeatures } from '@/sections/SecondaryFeatures';

export default function Home() {
  return (
    <main className='pt-20'>
      <HomeHero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      {/* <Reviews /> */}
    </main>
  )
}
