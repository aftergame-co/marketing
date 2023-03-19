import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function DesignersContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gg-red py-20 sm:py-28 lg:py-40"
    >
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower bg-gray-900/25 rounded-full" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Have your say
          </h2>
          <p className="mt-4 text-lg text-white">
            We want board game designers to tell us what we should build. If Goodgame Data sounds interesting to you, drop us a line!
          </p>
          <div className="mt-8 flex align-middle justify-center">
            <EnvelopeIcon className='text-white h-10 w-10 mr-2'/>
            <p className='text-white text-xl font-semibold m-0 p-0 self-center select-all'>designers@goodgamedata.com</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
