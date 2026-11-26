import { ArrowUturnDownIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from '@/components/Image'

export function RetailersEmbed() {
  return (
    <section id="communities-contact" className="relative overflow-hidden py-20 sm:pt-32">
      <Container className="relative">
        <div className="mx-auto mb-16 max-w-3xl lg:mx-0 lg:max-w-4xl">
          <h2 className="mg-6 text-3xl font-medium tracking-tight sm:text-4xl">
            Meet <span className="font-semibold text-gg-blue">your community</span> where they are
          </h2>
          <p className="mt-2 text-xl text-gray-600">
            With streamlined game libraries and low-admin events synced across multiple platforms, running a busy
            tabletop community <span className="font-semibold text-gg-red">has never been this simple</span>.
          </p>
        </div>
        <div className="m-auto items-start lg:flex lg:flex-row lg:justify-center lg:gap-x-16">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-xl font-semibold text-gray-800">Aftergame works within your website</p>
            <p className="mt-2 mb-6 text-sm text-gray-600">
              We know you already have a lot to manage; we’ve made it easy and stress-free to embed your Aftergame{' '}
              <strong>events calendar</strong> and <strong>game library</strong> directly into your website, so you can
              spend your energy directing people to the most important place.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gg-red opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gg-red"></span>
              </span>
              <p className="text-lg font-semibold text-gray-800">
                Live demo <span className="font-normal">of a game library</span>
              </p>
              <ArrowUturnDownIcon className="h-5 w-5 scale-x-[-1] text-gray-400" />
            </div>
            <div className="mx-auto mt-2 w-full max-w-lg overflow-hidden rounded-md border border-gray-200">
              <iframe
                // src="https://aftergame.app/groups/village-meeple-board-game-c-4375/events?mode=embed"
                src="https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed"
                title="Aftergame event"
                width="100%"
                height="540"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-lg lg:mt-0">
            <p className="text-xl font-semibold text-gray-800">Events and LFG in your Discord server</p>
            <div className="relative mt-3 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/retailers/discord.png"
                alt="Discord bot"
                width={800}
                height={600}
                className="h-auto w-full rounded-xl"
              />
            </div>
            <p className="mt-3 mb-6 text-sm text-gray-600">
              With a full integration into Discord, you and your community can create events, plan games, and claim
              seats directly from within your Discord server.
            </p>
            <p className="mt-2 mb-1 text-sm text-gray-600">
              All of this is automatically synced to Aftergame. This means that you can set up games and events from one
              place and they show up on your Aftergame profile and directly in your website; no more hidden active
              communities!
            </p>
            <Link
              className="mb-6 font-semibold text-gg-blue"
              href="https://aftergame.notion.site/discord-bot"
              aria-label="App help"
              target="_blank"
            >
              More info
            </Link>
            <p className="mt-16 text-xl font-semibold text-gray-800">...and more planned</p>
            <p className="mt-2 mb-6 text-sm text-gray-600">
              Your community members can already easily add events to their calendar through Aftergame, but we are
              planning to bring the ability to have calendars to subscribe to and exploring ways to push our events to
              more platforms. Please{' '}
              <Link href="/contact" className="font-semibold text-gg-blue">
                let us know
              </Link>{' '}
              where you want to see your events appearing.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
