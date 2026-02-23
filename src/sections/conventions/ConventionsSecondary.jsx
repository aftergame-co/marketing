import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'Waitlists',
    description:
      'Enable waitlists to help manage popular games and events.',
    icon: DeviceNotificationIcon,
  },
  // {
  //   name: 'Share your games library',
  //   description:
  //     'Let people know the games you have available so that they know what they can play.',
  //   icon: DeviceNotificationIcon,
  // },
  {
    name: 'Schedule on the big screen',
    description:
      'With a TV mode that shows the schedule of games and claimed seats in realtime.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'Interested?',
    description:
      'Players can note their interest in a game or event without committing to it, even if the seats are full.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Clash protection',
    description:
      'We’ll alert players to scheduling conflicts so attendees won’t accidentally double-book themselves.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Floor plans as a guide',
    description:
      'Let attendees drop a pin for where to meet so no one gets lost in the busy hall.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Play to Win',
    description:
      'Get your attendees excited and promote your publishers with a Play to win competition fully managed in the app.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Easy onboarding',
    description:
      'We automatically generate QR codes for every event and game to make joining a snap away.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Customize hosting options',
    description:
      'Choose whether to allow attendees to bring guests or plan games.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Set it and forget it',
    description:
      'Set when your convention and schedule can be viewed and joined separately in advance so that you can relax as it goes live.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Attendee schedules',
    description:
      'Each attendee has a personalised schedule filled in by the events they’ve joined.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Upcoming game notice',
    description:
      'Push notifications are sent before each game or event so players never miss out.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Filter for friends',
    description:
      'Players can filter the full schedule to see what their friends are planning, playing, or when they’re free!',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Mobile and web app',
    description:
      'Attendees have all the same tools and functionality whether they download the app or use the web version.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Granular scheduling',
    description:
      'Add rooms and tables that can be booked/scheduled.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Enjoy a broader audience',
    description:
      'You get featured status on the events list, which shows your event to a larger area.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Add events to all schedules',
    description:
      'Add generic events to everyone’s personal schedule, like ’Prize Draw’ or ’Awards’.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Polls',
    description:
      'Post polls to gauge interest in certain events or games to help you decide what to schedule.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Data report of plays at the event',
    description:
      'Learn which games are played most, players per game, and more to better prepare for next time.',
    icon: DeviceClockIcon,
  },
]

export function ConventionsSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="pt-20 pb-8"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            A tabletop event platform like no other
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            Beyond the typical event functionality, Aftergame is packed with features that are specific to the needs of tabletop event organisers and attendees.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl p-8 flex flex-wrap items-center bg-white border-2 border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 text-lg">
                {feature.name}
              </h3>
              {feature.description && <p className="mt-2 text-gray-700">{feature.description}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
