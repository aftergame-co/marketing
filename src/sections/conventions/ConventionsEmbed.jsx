import { ArrowUturnDownIcon } from '@heroicons/react/24/outline';
import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';

export function ConventionsEmbed() {
  return (
    <section
      id="communities-contact"
      className="relative overflow-hidden py-20"
    >
      <Container className="relative">
        <div className="">
          <h2 className="text-3xl font-medium tracking-tight sm:text-center sm:text-4xl">
            Bring Aftergame into <span className='text-gg-blue font-semibold'>your website</span> for an integrated experience  
          </h2>
          <div className='m-auto lg:flex lg:flex-row lg:gap-x-16 lg:justify-center'>
            <div className='w-full max-w-lg m-auto'>
              <p className="mt-16 text-xl font-semibold text-gray-800">
                Embed your event schedule
              </p>
              <p className="text-lg text-gray-600 mt-1 mb-6">
                Add your Full Schedule directly into your website so everything is in one place. The embedded schedule is live and will reflect what’s shown in the app so no one has outdated information, regardless of where they find it.
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gg-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gg-red"></span>
                </span>
                <p className="text-lg font-semibold text-gray-800">
                  Live demo
                </p>
                <ArrowUturnDownIcon className="h-5 w-5 text-gray-400 scale-x-[-1]" />
              </div>
              <div className="w-full max-w-lg mt-2 mx-auto border border-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://aftergame.app/events/654c2bd1-7447-423e-bd50-64a50326438b/schedule?mode=embed"
                  title="Aftergame event"
                  width="100%"
                  height="540"
                  frameborder="0"
                >
                </iframe>
              </div>
            </div>

            <div className='w-full max-w-lg m-auto'>
              <p className="mt-16 text-xl font-semibold text-gray-800">
                Embed your game library
              </p>
              <p className="text-lg text-gray-600 mt-1 mb-6">
                You can attach one or more game libraries to your event showing all the games you’ll provide or what’s available in the Play to Win, for example. Libraries can also be embedded directly into your website for easy access.
              </p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gg-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gg-red"></span>
                </span>
                <p className="text-lg font-semibold text-gray-800">
                  Live demo
                </p>
                <ArrowUturnDownIcon className="h-5 w-5 text-gray-400 scale-x-[-1]" />
              </div>
              <div className="w-full max-w-lg mt-2 mx-auto border border-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed"
                  title="Aftergame game list"
                  width="100%"
                  height="540"
                  frameborder="0"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
