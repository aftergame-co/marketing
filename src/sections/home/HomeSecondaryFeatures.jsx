import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon, DeviceUserIcon, DeviceListIcon, DeviceChartIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'A chronological feed',
    description:
      'Your personal hub! View all your plays, new games, plus posts from friends and groups.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Import plays with ease',
    description:
      'Bring your past plays with you. Import from other tracking apps, spreadsheets and more!',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Share your gaming',
    description:
      'Post your latest game photos, take a poll, discuss with the group and plan game nights.',
    icon: DeviceNotificationIcon,
  },
  {
    name: 'Forget about losing your data',
    description:
      'Plays are securely stored in the cloud, meaning no more saving backups or manual syncing.',
    icon: DeviceUserIcon,
  },
  {
    name: 'Smart lists enhance your collection',
    description:
      'Add games to your Want to Play list to be notified if someone nearby plans to play them.',
    icon: DeviceListIcon,
  },
  {
    name: 'Plan ahead',
    description:
      'See what’s being played, browse event schedules, and get your games to the table.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Your month in review',
    description:
      'Dig into which games you’ve been playing and share your month’s accomplishments.',
    icon: DeviceChartIcon,
  },
  {
    name: 'Offline support',
    description:
      'No internet? No problem! Aftergame works seamlessly online and offline.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'Fast and intuitive user experience',
    description:
      'Employing the latest technology to offer a fast, accessible, and enjoyable experience. ',
    icon: DeviceTouchIcon,
  },
]

export function HomeSecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="py-20 sm:pt-32 sm:pb-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          <span className='text-gg-blue font-semibold'>Smart features</span> so you can <span className='text-gg-red font-semibold'>keep on playing</span>
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            You don’t want to have to be fumbling around with your phone while you’re playing games, so we made things easy.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl p-8 bg-white border-2 border-gray-100"
            >
              <feature.icon className="h-14 w-14" />
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
