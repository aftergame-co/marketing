import { HomeHero } from '@/sections/HomeHero';

export const metadata = {
  title: 'Join the waitlist',
  alternates: {
    canonical: '/waitlist'
  },
};

export default function Waitlist() {
  return (
    <main className='pt-20'>
      <HomeHero className="!pb-40" />
    </main>
  )
}
