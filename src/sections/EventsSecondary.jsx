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
    name: 'Schedule on the big screen',
    description:
      'With a TV mode that shows the schedule of games and claimed seats in realtime.',
    icon: DeviceOfflineIcon,
  },
  {
    name: 'Floor plans as a guide',
    description:
      'Let attendees drop the pin for where to meet so no one gets lost in the busy hall.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Host official sessions',
    description:
      'Post a schedule of learn to plays, play testing and more for a seamless way to claim seats.',
    icon: DeviceArrowIcon,
  },
  {
    name: 'Data report of plays at the event',
    description:
      'Learn which games are played most, players per game, and more to better prepare for next time.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Notify gamers nearby',
    description:
      "Spread the word to people in your area and get games planned early for a seamless event.",
    icon: DeviceTouchIcon,
  },
]

export function EventsSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Smart features so you can keep on playing"
      className="bg-gg-blue py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            A tabletop event scheduling system like no other
          </h2>
          <p className="mt-4 mx-6 text-lg text-white">
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
