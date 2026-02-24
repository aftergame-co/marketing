import { ArrowUturnDownIcon } from '@heroicons/react/24/outline';
import { Container } from '@/components/Container';

export function RetailersEmbed() {
  return (
    <section
      id="communities-contact"
      className="bg-gg-blue py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl mb-16">
            <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
              Meet your community where they are
            </h2>
            <p className="mt-2 text-xl text-gray-100">
              With streamlined, low-admin events synced across multiple platforms, running a busy tabletop community has never been this simple. 
            </p>
          </div>
          <div className='m-auto lg:flex lg:flex-row lg:gap-x-16 lg:justify-center lg:items-start'>
            <div className='w-full max-w-xl m-auto bg-white rounded-xl p-6'>
              <p className="mt-2 mx-2 text-2xl font-semibold text-gray-800">
                Aftergame works within your website
              </p>
              <p className="mt-2 mx-2 mb-6 text-sm text-gray-600">
                We know you already have a lot to manage; we’ve made it easy and stress-free to embed your Aftergame events calendar and game library directly into your website, so you can spend your energy directing people to the most important place.
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
                  src="https://aftergame.app/groups/village-meeple-board-game-c-4375/events?mode=embed"
                  title="Aftergame event"
                  width="100%"
                  height="540"
                  frameborder="0"
                >
                </iframe>
              </div>
            </div>

            <div className='w-full max-w-xl m-auto bg-white rounded-xl p-6'>
              <p className="mt-2 mx-2 text-2xl font-semibold text-gray-800">
                Events and LFG in your Discord server
              </p>
              <p className="mt-2 mx-2 mb-6 text-sm text-gray-600">
                You and your community can create events, plan games, and claim seats in those games directly in Discord, which will all be synced to Aftergame, which means it also shows up on your website if you’ve embedded your group calendar! 
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
