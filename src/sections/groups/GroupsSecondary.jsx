import { Container } from '@/components/Container'

const features = [
  {
    name: 'TV mode for venues',
    description:
      'Display the live schedule on big screens. Players see what\'s happening now and what\'s coming up next.',
  },
  {
    name: 'Shared game libraries',
    description:
      'Show everyone what games are available. Players discover new titles and organizers track what\'s popular.',
  },
  {
    name: 'Floor plans with pins',
    description:
      'Upload venue maps and let players drop meeting point pins. No more lost attendees.',
  },
  {
    name: 'Official session scheduling',
    description:
      'Run demos, tournaments, and learn-to-plays with dedicated tools for teachers and game masters.',
  },
  {
    name: 'Automated QR codes',
    description:
      'Every event and game gets a unique QR code. Print them anywhere for instant mobile onboarding.',
  },
  {
    name: 'Play data analytics',
    description:
      'See which games get the most plays, peak hours, average session lengths, and player preferences.',
  },
  {
    name: 'Threaded conversations',
    description:
      'Keep discussions organized. Players ask questions, share photos, and coordinate without chaos.',
  },
  {
    name: 'Multi-platform notifications',
    description:
      'Push notifications, email updates, and in-app alerts ensure no one misses important changes.',
  },
  {
    name: 'Social media integration',
    description:
      'One-click sharing to Instagram, Facebook, Twitter, and Discord. Promote without the tedious copy-paste.',
  },
  {
    name: 'Calendar sync',
    description:
      'Games automatically appear in Apple Calendar, Google Calendar, and Outlook. Players never forget.',
  },
  {
    name: 'Time zone magic',
    description:
      'Conventions with interstate travelers? Everything displays in each attendee\'s local time.',
  },
  {
    name: 'Community policies',
    description:
      'Display your code of conduct and house rules. Set expectations and maintain a welcoming space.',
  },
  {
    name: 'Leaderboards & achievements',
    description:
      'Track most plays, biggest wins, and community milestones. Gamification for the gaming community.',
  },
  {
    name: 'Waitlist management',
    description:
      'Games fill up? Players join the waitlist and get notified immediately when a seat opens.',
  },
  {
    name: 'Play to Win campaigns',
    description:
      'Partner with publishers for promotional plays. Players log games to earn prizes—all tracked automatically.',
  },
]

export function GroupsSecondary() {
  return (
    <section
      id="secondary-features"
      aria-label="Comprehensive features for organizers"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Built by <span className='text-gg-blue font-semibold'>organizers</span> who <span className='text-gg-red font-semibold'>get it</span>
          </h2>
          <p className="mt-4 mx-6 text-lg text-gray-600">
            We&apos;ve run conventions, managed game shops, and built communities from scratch. Every feature solves a real problem we&apos;ve personally faced.
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
