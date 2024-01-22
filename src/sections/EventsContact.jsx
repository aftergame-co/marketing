import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function EventsContact() {
  return (
    <section
      id="communities-contact"
      className="relative overflow-hidden bg-gg-red py-16"
    >
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower bg-gray-900/25 rounded-full" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            A smoother event experience
          </h2>
          <p className="mt-4 text-lg text-white">
            Help your event attendees to find their third musketeer. Reach out today to set up your event.
          </p>
          <div className="mt-8 flex align-middle justify-center">
            <EnvelopeIcon className='text-white h-9 w-9 mr-2'/>
            <Link 
                href="mailto:hello@aftergame.co"
                aria-label="Email us" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-white hover:bg-gray-200/10 rounded-lg"
              >
              <p className='text-xl font-semibold m-0 p-0 self-center'>hello@aftergame.co</p>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
