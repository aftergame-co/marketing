'use client';

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Aftergame',
    featured: false,
    price: { Monthly: 'Free forever', Annually: 'Free forever' },
    button: {
      label: 'Get Aftergame',
      href: '/download?ref=free',
    },
    features: [
      'No ads, ever.',
      'Full history of every game you have ever played, stored across devices',
      'Analytics for the last 90 days of game plays',
      'Join groups and play with friends',
      'Easy import of your games collection and play logs',
    ],
  },
  {
    name: 'Aftergame+ Monthly',
    featured: true,
    price: { Monthly: '$2.49', Annually: '$17.99' },
    button: {
      label: 'Subscribe in app',
      href: '/download?ref=plus',
    },
    features: [
      'Analytics for all your game plays',
      'Deeper insights, custom graphs, and reports',
      'Track your own datapoints on your game plays',
      'Ability to host events, create tournaments, and start leagues.',
      'Access new features early',
    ],
  },
  {
    name: 'Aftergame+ Yearly',
    featured: true,
    price: { Monthly: '$2.49', Annually: '$17.99' },
    button: {
      label: 'Subscribe in app',
      href: '/download?ref=plus',
    },
    features: [
      'Analytics for all your game plays',
      'Deeper insights, custom graphs, and reports',
      'Track your own datapoints on your game plays',
      'Ability to host events, create tournaments, and start leagues.',
      'Access new features early',
    ],
  },
  // {
  //   name: 'Premium Community',
  //   featured: false,
  //   price: { Monthly: '$14.99', Annually: '$129.99' },
  //   button: {
  //     label: 'Subscribe',
  //     href: '#',
  //   },
  //   features: [
  //     'Analytics for all your game plays',
  //     'Deeper insights, custom graphs, and reports',
  //     'Track your own datapoints on your game plays',
  //     'Ability to host events, create tournaments, and start leagues.',
  //     'Access new features early',
  //   ],
  // },
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
        featured ? 'order-first bg-gg-blue lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center font-semibold',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        <span>{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
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
          </>
        )}
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
        color={featured ? 'white' : 'gg'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Plans() {
  let [activePeriod, setActivePeriod] = useState('Annually')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Pricing intro
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We are proud to offer Aftergame for free and with no ads. 
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
                    'cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-0px)] px-[calc(theme(spacing.3)-0px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
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
                    'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                    period === 'Annually' && '-ml-px'
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}
