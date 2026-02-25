import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'Share your games library',
    description:
      'Let people know what games are available for easy browsing and planning games in advance.',
    icon: DeviceNotificationIcon,
  },
  {
    name: 'Connect to social media platforms',
    description:
      'Cross-post your events, game library, and leaderboards directly to other social channels.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'Photo Galleries',
    description:
      'Record memories and share the joy with galleries that gather photos from each event.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Polls',
    description:
      'Post polls to gauge interest in certain events or games to help you decide what events to offer.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Control your profile',
    description:
      'Add information like your location, description, website, photos, and code of conduct policies.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Leaderboards',
    description:
      "Encourage a friendly rivalry with group leaderboards for all games played at your store.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Keep your community up-to-date',
    description:
      "Post about in-store promotions, new stock, event updates, or just to say hello!",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Interested?',
    description:
      "Players can note their interest in a game or event and get updates without committing to it.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Waitlists',
    description:
      "Enable waitlists to help manage popular games and events. Vacated seats are automatically reserved for the next player in line.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Easy onboarding',
    description:
      "We automatically generate QR codes and unique URLs for every event and game so you can share the fun any way you like.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Mobile and web app',
    description:
      "You and your players have all the same tools and functionality whether you download the app or use the web version.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Notify your group',
    description:
      "Whenever you plan a new event, your group members get a notification and it shows up in their personal feed.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Discoverability',
    description:
      "The more games and events planned at your location, the more people are likely to see something that brings them in.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Host “Official” events',
    description:
      "Events that you host will be marked as Official, setting them apart from any player-planned events or games in your space.",
    icon: DeviceTouchIcon,
  },
  {
    name: '...and much more coming soon!',
  },
]

export function RetailersSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="pt-20 pb-8 lg:pt-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            <span className='text-gg-blue font-semibold'>Purpose-built</span> tools for tabletop businesses
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            All the social features you'd expect, plus a myriad of tabletop-specific tools to help you reduce admin and focus on what matters: <span className='text-gg-red font-semibold'>running a great gaming community</span>.
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
