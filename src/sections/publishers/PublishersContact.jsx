import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import Link from 'next/link';

export function PublishersContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gg-red py-16"
    >
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower bg-gray-900/25 rounded-full" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Be part of the future
          </h2>
          <p className="mt-4 text-lg text-white">
            Book a demo today and see how our toolkit can transform your events and community strategy!
          </p>
          <div className="mt-8 flex align-middle justify-center">
            <Link href='/contact/demo'>
              <Button
                type="submit"
                color='black'
                className='bg-white hover:bg-gray-100 active:bg-gray-100 hover:text-gg-blue active:text-gg-blue !text-lg !px-6 !py-3'
              >
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
