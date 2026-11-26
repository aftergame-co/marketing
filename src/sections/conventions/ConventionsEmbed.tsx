import { ArrowUturnDownIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

export function ConventionsEmbed() {
  return (
    <section id="embed" className="relative overflow-hidden py-20">
      <Container className="relative">
        <h2 className="text-3xl font-medium tracking-tight sm:text-center sm:text-4xl">
          Bring Aftergame into <span className="font-semibold text-gg-blue">your website</span> for an integrated
          experience
        </h2>
        <div className="m-auto lg:flex lg:flex-row lg:justify-center lg:gap-x-16">
          <div className="mx-auto w-full max-w-lg">
            <p className="mt-16 text-xl font-semibold text-gray-800">Embed your event schedule</p>
            <p className="mt-1 mb-6 text-lg text-gray-600">
              Add your Full Schedule directly into your website so everything is in one place. The embedded schedule is
              live and will reflect what’s shown in the app so no one has outdated information, regardless of where they
              find it.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gg-red opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gg-red"></span>
              </span>
              <p className="text-lg font-semibold text-gray-800">Live demo</p>
              <ArrowUturnDownIcon className="h-5 w-5 scale-x-[-1] text-gray-400" />
            </div>
            <div className="mx-auto mt-2 w-full max-w-lg overflow-hidden rounded-md border border-gray-200">
              <iframe
                src="https://aftergame.app/events/654c2bd1-7447-423e-bd50-64a50326438b/schedule?mode=embed"
                title="Aftergame event"
                width="100%"
                height="540"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <p className="mt-16 text-xl font-semibold text-gray-800">Embed your game library</p>
            <p className="mt-1 mb-6 text-lg text-gray-600">
              You can attach one or more game lists to your event showing all the games in your library, hot games, or
              what’s available in the Play to Win. Libraries can also be embedded directly into your website for easy
              access.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gg-red opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gg-red"></span>
              </span>
              <p className="text-lg font-semibold text-gray-800">Live demo</p>
              <ArrowUturnDownIcon className="h-5 w-5 scale-x-[-1] text-gray-400" />
            </div>
            <div className="mx-auto mt-2 w-full max-w-lg overflow-hidden rounded-md border border-gray-200">
              <iframe
                src="https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed"
                title="Aftergame game list"
                width="100%"
                height="540"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
