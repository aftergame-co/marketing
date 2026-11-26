import Image from '@/components/Image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { getPostData } from '@/utils/posts'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export async function HomeEventsFeature() {
  const caseStudyPost = await getPostData('how-aftergame-transformed-play-con-a-game-changer-for-event-organizers')

  return (
    <section id="features" aria-label="Over 8,000 events hosted" className="bg-gg-blue py-20">
      <Container>
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-medium tracking-tighter text-white lg:tracking-tight">
            Over 20,000 events and 100 conventions hosted
          </h2>
          <p className="mt-2 max-w-2xl text-xl text-gray-100 lg:max-w-3xl">
            No matter how large or small, set up your event in minutes and discover why a growing number of board game
            and tabletop events choose Aftergame.
          </p>
        </div>
      </Container>
      <Container className="mt-10 md:mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 pr-0 sm:pr-6 lg:col-span-2 lg:pr-20">
            <h3 className="mb-2 text-xl font-medium text-white">A unified schedule</h3>
            <p className="text-sm text-gray-100">
              Schedule game demos, learn to play sessions, playtests, and more as the event organiser, while also
              letting your attendees plan games they want to play.
            </p>
            <h3 className="mt-6 mb-2 text-xl font-medium text-white">Keep everyone in the loop</h3>
            <p className="text-sm text-gray-100">
              Post announcements, threaded discussions for every post, game, or event and push notifications for all
              updates ensures no one misses outs.
            </p>
            <h3 className="mt-6 mb-2 text-xl font-medium text-white">We understand what tabletop events need</h3>
            <p className="text-sm text-gray-100">
              Add your game library, manage Play to Win competitions, auto generated QR codes, floor plans, TV-mode,
              data reports, and more packed into a simple and modern interface.
            </p>
            <div className="pt-8 sm:pt-12 lg:w-4/5 lg:pt-14">
              <Link href="/conventions">
                <Button
                  type="submit"
                  color="gg"
                  className="bg-white px-6! py-3! text-lg! text-gg-blue! active:bg-gray-100 md:hover:bg-gg-blue-faint"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="mb-2 text-xl font-medium text-white">Check out the case study:</h3>
            <div className="group relative w-full rounded-2xl border-2 border-gray-100 bg-white text-gray-900 transition-colors hover:bg-gg-blue-faint">
              <Link href={`/blog/${caseStudyPost.id}`}>
                {caseStudyPost.image && (
                  <div className="relative h-48">
                    <Image
                      src={caseStudyPost.image}
                      alt={caseStudyPost.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="rounded-t-2xl object-cover transition-opacity group-hover:opacity-80"
                    />
                  </div>
                )}

                <h3 className="mx-4 mt-4 text-sm font-semibold">{caseStudyPost.title}</h3>
                <p className="p-4 pt-2 text-sm text-gray-700">{caseStudyPost.intro}</p>
              </Link>
              <ArrowRightIcon className="absolute right-4 bottom-4 h-5 w-5" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
