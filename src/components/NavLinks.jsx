import { Fragment, useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

export function NavLinks({scrolled, darkMode}) {
  const [isShowing, setIsShowing] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const navItems = [
    // {
    //   name: 'Organizers',
    //   href: undefined,
    //   menu: [
    //     {
    //       name: 'Clubs & Gaming Groups',
    //       description: 'Engage, gather and grow your community',
    //       href: '/groups',
    //       icon: GroupsIcon,
    //     },
    //     {
    //       name: 'Conventions',
    //       description: 'The complete solution for tabletop events',
    //       href: '/conventions',
    //       icon: ConventionIcon,
    //     },
    //   ]
    // },
    {
      name: 'Conventions',
      href: '/conventions',
    },
    {
      name: 'Publishers',
      href: '/publishers',
    },
    {
      name: 'Retailers',
      href: 'retailers',
    },
    {
      name: 'Aftergame+',
      href: '/plus',
    },
    {
      name: 'Resources',
      href: undefined,
      menuWidth: 'max-w-48',
      menu: [
        {
          name: 'What’s new',
          href: '/releases',
        },
        {
          name: 'Blog',
          href: '/blog',
        },
        {
          name: 'Help site',
          href: 'https://aftergame.notion.site/',
        },
        {
          name: 'Contact',
          href: '/contact',
        },
        {
          name: 'About',
          href: '/about',
        },
      ]
    },
  ]

  
  return navItems.map((item, index) => (
    <Link
      key={item.name}
      href={item.href ?? ''}
      onClick={(ev) => {
        if (item.href === undefined) {
          ev.preventDefault();
          setIsShowing(!isShowing);
          setHoveredIndex(null);
          return;
        }
       }}
      className={clsx(
        'relative -my-2 -mx-3 rounded-lg text-md',
        !scrolled && darkMode ? 'text-gray-100 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700',
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className={clsx(
              'absolute inset-0 rounded-lg',
              !scrolled && darkMode ? 'bg-gray-700' : 'bg-gray-200',
            )}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      {item.menu == undefined ? 
        <span className="relative z-10 inline-flex px-3 py-2">{item.name}</span>
      :
        <Popover className="relative z-10">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                  ${open ? '' : 'text-opacity-90'}
                  group inline-flex px-3 pt-2 pb-5 -mb-3 items-center text-base hover:text-opacity-100 focus:outline-none`}
                  onMouseEnter={() => setIsShowing(true)}
                  onMouseLeave={() => setIsShowing(false)}
              >
                <span>{item.name}</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                show={isShowing}
                onMouseEnter={() => setIsShowing(true)}
                onMouseLeave={() => setIsShowing(false)}
              >
                <Popover.Panel className={`absolute left-1/2 z-10 mt-3 w-screen ${item.menuWidth ?? "max-w-sm"} -translate-x-1/2 transform px-4 sm:px-0`}>
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white py-6 px-5">
                      {item.menu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100"
                        >
                          {!!item.icon && (
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                          )}
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            {!!item.description && (
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* <div className="bg-gray-50 p-4">
                      <Link
                        href="https://aftergame.notion.site/organizers"
                        className="flow-root rounded-md px-3 py-2 transition duration-150 ease-in-out hover:bg-gray-100"
                      >
                        <span className="flex flex-row items-center gap-6">
                          <QuestionMarkCircleIcon className="size-7 text-gray-400" />
                          <span>
                            <span className="text-sm font-medium text-gray-900">
                              Help
                            </span>
                            <span className="block text-sm text-gray-500">
                              Guides and support for organizers
                            </span>
                          </span>
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      }
    </Link>
  ))
}

function GroupsIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="rgb(222, 224, 255)" />
      {/* Round table */}
      <circle cx="24" cy="24" r="8" stroke="rgb(73, 102, 245)" strokeWidth="2" />
      {/* Players around the table — small circles at N, NE, SE, S, SW, NW */}
      <circle cx="24" cy="11" r="3" stroke="rgb(73, 102, 245)" strokeWidth="2" />
      <circle cx="35" cy="17" r="3" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="2" />
      <circle cx="35" cy="31" r="3" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="2" />
      <circle cx="24" cy="37" r="3" stroke="rgb(73, 102, 245)" strokeWidth="2" />
      <circle cx="13" cy="31" r="3" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="2" />
      <circle cx="13" cy="17" r="3" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="2" />
    </svg>
  )
}

function ConventionIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="rgb(222, 224, 255)" />
      {/* Left panel */}
      <rect x="10" y="13" width="8" height="23" rx="1" stroke="rgba(73, 102, 245, 0.5)" strokeWidth="2" />
      {/* Center panel (slightly taller) */}
      <rect x="20" y="10" width="8" height="28" rx="1" stroke="rgb(73, 102, 245)" strokeWidth="2" />
      {/* Right panel */}
      <rect x="30" y="13" width="8" height="23" rx="1" stroke="rgba(73, 102, 245, 0.5)" strokeWidth="2" />
      {/* Schedule lines on center panel */}
      <line x1="22" y1="17" x2="26" y2="17" stroke="rgb(73, 102, 245)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="21" x2="26" y2="21" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="25" x2="26" y2="25" stroke="rgba(73, 102, 245, 0.75)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}