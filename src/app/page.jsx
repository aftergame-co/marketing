import { HomeHero } from '@/sections/home/HomeHero';
import { HomePrimaryFeatures } from '@/sections/home/HomePrimaryFeatures';
import { HomeSecondaryFeatures } from '@/sections/home/HomeSecondaryFeatures';
import { HomeEventsFeature } from '@/sections/home/HomeEventsFeature';
import { Reviews } from '@/sections/Reviews';
import { CallToAction } from '@/sections/CallToAction';

export default function Home() {
  return (
    <main className='pt-20'>
      <HomeHero />
      <HomePrimaryFeatures />
      <HomeSecondaryFeatures />
      <HomeEventsFeature />
      <Reviews />
      <CallToAction />
    </main>
  )
}
