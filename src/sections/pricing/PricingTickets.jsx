import { Container } from '@/components/Container';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/Button';
import Link from 'next/link';


export function PricingTickets() {
  return (
    <section
      id="ticket-pricing"
      aria-label="Handle your entire event in Aftergame"
      className="pt-16 pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Handle your entire event on Aftergame
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-700">
            We offer a <span className='font-semibold text-gray-900'>simple and competitive</span> percentage on transactions. There are no per-badge fees or extra costs when using Aftergame as your event ticketing platform.
          </p>
        </div>
        <div
          className="mx-auto mt-8 grid gap-6 text-sm grid-cols-9 lg:grid-cols-11"
        >
            <div className='hidden md:block col-span-1 lg:col-span-2' />
            <div
              className="col-span-4 md:col-span-3 rounded-2xl py-4 px-4 sm:px-8 bg-white border-2 border-gray-100"
            >
              <h3 className="text-3xl text-gray-900">
                3.5%
              </h3>
              <p className="text-gray-700">Aftergame service fee</p>
            </div>
            <span className='col-span-1 flex items-center justify-center'><span className='text-5xl'>+</span></span>
            <div
              className="col-span-4 md:col-span-3 rounded-2xl py-4 px-4 sm:px-8 bg-white border-2 border-gray-100"
            >
              <h3 className="text-xl leading-10 text-gray-900">
                 Stripe fee
              </h3>
              <p className="text-gray-700">
                <a className="text-gg-blue hover:underline" href="https://stripe.com/pricing" target="_blank" rel="noreferrer">
                  Varies per country
                  <ArrowTopRightOnSquareIcon className='ml-1 inline h-3.5 w-3.5'/>
                </a>
              </p>
            </div>
            <div className='hidden md:block col-span-1 lg:col-span-2' />
        </div>
        <div className="mt-10 mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold">Ditch the extra costs. Use Aftergame for your next event.</p>
          <div className="pt-4 flex flex-row justify-center gap-x-2 md:gap-x-4">
            <Link href='https://aftergame.app/groups/create'>
              <Button
                type="submit"
                color='gg'
                className='bg-gg-blue md:hover:bg-gg-red active:bg-gg-red !text-lg !px-6 !py-3'
              >
                Create your event
              </Button>
            </Link>
            <Link href='/contact/organizer'>
              <Button
                type="submit"
                color='white'
                className='bg-gg-blue-faint border-4 border-gg-blue md:hover:bg-gg-blue active:bg-gg-blue text-gg-blue md:hover:text-white active:text-white !text-lg !px-4 !py-2'
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
