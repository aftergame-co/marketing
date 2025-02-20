import { Container } from '@/components/Container'

const features = [
  {
    name: 'Build Scaled Organized Play Programs',
    description:
      'Create a consistent, intuitive experience for players and retailers, no matter the location.',
  },
  {
    name: 'Make it Official',
    description:
      'Get a designated "Official" group on Aftergame so that players know to follow you for events and updates.',
  },
  {
    name: 'Turn Retailers into Community Hubs',
    description:
      'Empower game stores to host consistent events with loyalty and reward programs that bring players back for more.',
  },
  {
    name: 'Convert Fans into Organizers',
    description:
      'Enable your community to run their own events and grow your game’s presence organically.',
  },
  {
    name: 'Geographic Player Insights',
    description:
      'Identify player hotspots and optimize where you run demos, tournaments, and organized play events.',
  },
  {
    name: '...and much more coming soon!',
  },
]

export function PublishersCommunity() {
  return (
    <section
      id="secondary-features"
      aria-label="Grow Your Player Community, Everywhere"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          <span className='text-gg-blue font-semibold'>Grow</span> Your Player Community, Everywhere
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
          Effortlessly scale organized play, turn retailers into community hubs, and keep players coming back with <span className='text-gg-red font-semibold'>streamlined events and engagement tools</span>.
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
              <h3 className="font-semibold text-gray-900 text-lg">
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
