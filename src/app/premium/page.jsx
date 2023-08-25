import { Container } from '@/components/Container';
import Link from 'next/link';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Premium',
  alternates: {
    canonical: '/premium'
  },
};

export default function Premium() {
  return (
    <main className='py-40'>
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
          Premium
        </h1>
        <p className="mt-6 text-xl text-gray-600 text-justify">
          <span className='font-semibold'>We offer Aftergame for free and with no ads. </span>
          This is something that our team are proud of and committed to continue. To enable the continued development of this product, we are exploring a premium offering with features that expand on our core offering.
        </p>
        <h2 className="mt-20 text-3xl font-medium tracking-tight text-gray-900">
          We want to hear from you!
        </h2>
        <p className="mt-6 text-xl text-gray-600 text-justify">
          To help ensure we build features that you want and charge a fair price, we have put together a short survey which will help guide our decision-making.
        </p>
        <Link href='https://forms.gle/DvfM6Aw7yV8bMUqv6' target='_blank'>
          <Button
            type="submit"
            color='gg'
            className='mt-12 bg-gg-blue md:hover:bg-gg-red active:bg-gg-red !text-lg !px-6 !py-3'
          >
            Give your feedback
          </Button>
        </Link>
      </div>
    </Container>
    </main>
  )
}
