import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'Share your games library',
    description:
      'Let people know the games you have available so that they know what they can play.',
    icon: DeviceNotificationIcon,
  },
  {
    name: 'Create your own events',
    description:
      'Spread the word to people in your area and get games planned early for a seamless event.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'Connect to social media platforms',
    description:
      'Cross-post your events, game library and leaderboards directly to other social channels.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Learn more about your community',
    description:
      'Who plays the most, which games are popular, who last played Catan and lost the dice!',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Encourage a friendly rivalry',
    description:
      'Join inter-community leaderboards to help foster a sense of competition and team spirit.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Control your profile',
    description:
      "Add information like your location, description, photos, and code of conduct policies.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Discover the games people want',
    description:
      "See the games your members want to play and wishlists so you can stock the right collection.",
    icon: DeviceTouchIcon,
  },
  {
    name: 'Keep your community up-to-date',
    description:
      "Post updates to keep people informed of any promotions, new games, or just to say hello!",
    icon: DeviceTouchIcon,
  },
  {
    name: '...and much more coming soon!',
  },
  // promote to your community
]

export function CommunitiesSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            We’re here for the <span className='text-gg-blue font-semibold'>tabletop game communities</span>
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            There is so much involved in running a great community and space for people to enjoy playing games. Aftergame is <span className='text-gg-red font-semibold'>built for tabletop gamers by tabletop gamers</span>.
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
