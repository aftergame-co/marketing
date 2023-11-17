import { Container } from '@/components/Container'
import { DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceNotificationIcon, DeviceOfflineIcon, DeviceTouchIcon } from '@/components/DeviceIcons'

const features = [
  {
    name: 'Import plays with ease',
    description:
      'Bring your past plays with you. Import from other tracking apps, spreadsheets and more!',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Record what matters to you',
    description:
      'Log a play in just 3 taps! All details are optional for the ultimate personalisation of your plays.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Forget about losing your data',
    description:
      'Plays are securely stored in the cloud, meaning no more saving backups or manual syncing.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Organise the group',
    description:
      'Choose which games to play, set up leagues and host events with your friends, family, and foes.',
    icon: DeviceNotificationIcon,
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

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="py-20 sm:py-32"
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
              className="rounded-2xl p-8 bg-white"
            >
              <feature.icon className="h-16 w-16" />
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
