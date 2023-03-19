import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'What do people think of my game?',
    description:
      'Players can record how much they enjoyed a game, and leave feedback at the time of playing.',
    icon: DeviceNotificationIcon,
  },
  {
    name: 'Is my game balanced?',
    description:
      'Scoring breakdowns and relevant data points. Get quantitative data to improve your game.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'How often are expansions played?',
    description:
      'Find out which of your expansions are played together and which ones are most popular.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'How long do games last?',
    description:
      'View the average play time, how many people were playing and more.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Which role is played most?',
    description:
      'We track which roles were played so you can view trends and identify what your users like.',
    icon: DeviceClockIcon,
  },
  {
    name: 'How often do people play?',
    description:
      "See if your game collects dust on the shelf or if it's a games night favourite.",
    icon: DeviceTouchIcon,
  },
]

export function DesignersSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          <span className='text-gg-blue font-semibold'>Powerful reports</span> to answer any question
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            Great games are built by teams who know their users. Go beneath the surface to learn which features are popular, who your users are, and what <span className='text-gg-red font-semibold'>keeps people playing your games</span>.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              {/* <feature.icon className="h-16 w-16" /> */}
              <h3 className="mt-6 font-semibold text-gray-900 text-lg">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
