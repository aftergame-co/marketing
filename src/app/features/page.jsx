import { CallToAction } from '@/sections/CallToAction';

export const metadata = {
  title: 'Features',
  alternates: {
    canonical: '/features'
  },
};

export default function Features() {
  return (
    <main className='pt-20'>
      <CallToAction />
    </main>
  )
}
