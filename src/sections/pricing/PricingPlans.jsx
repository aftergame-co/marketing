'use client';

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const plans = [
  {
    name: 'Aftergame Plus',
    description: 'For players',
    featured: false,
    price: { Monthly: '$2.49', Annually: '$21.99' },
    button: {
      label: 'Subscribe',
      href: 'https://aftergame.app/premium',
    },
    features: [
      'Deep filters for games, plays, and stats',
      'More granular game leaderboards',
      'Automatically sync from BGG',
      'Access beta features before anyone else',
      'Show your support with a fancy badge',
      'Help support our commitment to being ad-free',
    ],
  },
  {
    name: 'Aftergame Star',
    description: 'For organizers',
    featured: true,
    price: { Monthly: '$9.99', Annually: '$89.99' },
    button: {
      label: 'Subscribe',
      href: 'https://aftergame.app/premium',
    },
    features: [
      'Everything in Aftergame Plus',
      'Give premium access to all group admins¹',
      'Host events of up to 200 attendees²',
      'Create recurring events on a schedule',
      'Ticketing, waitlists, and event check-in',
      'Add your official game lending library',
      'Manage event volunteers',
      'Handle event and game submissions',
      'Embed Aftergame directly on your website',
    ],
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 border-2 border-gray-100',
        featured ? 'order-first bg-gg-blue md:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center font-semibold text-xl',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {name}
      </h3>
      <p
        className={clsx(
          'relative flex text-md italic tracking-tight',
          featured ? 'text-gray-200' : 'text-gray-800'
        )}
      >
        {description}
      </p>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <span
          aria-hidden={activePeriod === 'Annually'}
          className={clsx(
            'transition duration-300',
            activePeriod === 'Annually' &&
            'pointer-events-none translate-x-6 select-none opacity-0'
          )}
        >
          <span className={clsx(
            'pt-2 pr-1 text-lg', featured ? 'text-grey-100' : 'text-gray-800'
          )}>US</span>
          {price.Monthly}
          <span className={clsx(
            'pt-2 pl-2 text-lg', featured ? 'text-grey-100' : 'text-gray-800'
          )}>/ month</span>
        </span>
        <span
          aria-hidden={activePeriod === 'Monthly'}
          className={clsx(
            'absolute left-0 top-0 transition duration-300',
            activePeriod === 'Monthly' &&
            'pointer-events-none -translate-x-6 select-none opacity-0'
          )}
        >
          <span className={clsx(
            'pt-2 pr-1 text-lg', featured ? 'text-grey-100' : 'text-gray-800'
          )}>US</span>
          {price.Annually}
          <span className={clsx(
            'pt-2 pl-2 text-lg', featured ? 'text-grey-100' : 'text-gray-800'
          )}>/ year</span>
        </span>
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-200 text-white'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2 items-center">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-gg-blue'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        target='_blank'
        color={featured ? 'white' : 'gg'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function PricingPlans() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-title"
            className="text-4xl font-medium tracking-tight text-gray-900"
          >
            Unlock all of Aftergame
          </h2>
        <p className="mt-2 text-lg text-gray-700 text-left">
          <span className='font-semibold text-gray-900'>We offer Aftergame for free and with no ads. </span>
          This is something our team are <i>proud</i> of. Our premium plans offer extra features to support this commitment.
        </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <RadioGroup.Option
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border border-gray-300 py-3 px-6 text-md text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    period === 'Monthly'
                      ? 'rounded-l-lg'
                      : '-ml-px rounded-r-lg'
                  )}
                >
                  {period}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-gg-blue transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]'
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-3 text-center text-md font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 md:mt-10 grid max-w-3xl grid-cols-1 items-start gap-x-8 gap-y-8 lg:max-w-4xl md:grid-cols-2">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
        <p className="text-sm text-gray-600 italic text-center mt-6 px-2">
          ¹ One group per Aftergame Star subscription.
        </p>
        <p className="text-sm text-gray-600 italic text-center px-2">
          ² No limits when using Aftergame to sell your tickets.
        </p>
        <div id="tickets" />
      </Container>
    </section>
  )
}
