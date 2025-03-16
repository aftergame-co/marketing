import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { getPostData } from '@/utils/posts';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export async function HomeEventsFeature() {
  const caseStudyPost = await getPostData("how-aftergame-transformed-play-con-a-game-changer-for-event-organizers");

  return (
    <section
      id="features"
      aria-label="Over 8,000 events hosted"
      className="bg-gg-blue py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Over 8,000 events hosted
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            No matter how large or small, set up your event in minutes and discover why a growing number of board game and tabletop events choose Aftergame.
          </p>
        </div>
      </Container>
      <Container className="mt-10 md:mt-16">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className="col-span-1 lg:col-span-2 pr-0 sm:pr-6 lg:pr-20">
            <h3 className="text-xl font-medium text-white mb-2">
              A unified schedule
            </h3>
            <p className="text-sm text-gray-100">
              Schedule game demos, learn to play sessions, playtests, and more as the event organiser, while also letting your attendees plan games they want to play.
            </p>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">
              Keep everyone in the loop
            </h3>
            <p className="text-sm text-gray-100">
              Post announcements, threaded discussions for every post, game, or event and push notifications for all updates ensures no one misses outs.
            </p>
            <h3 className="text-xl font-medium text-white mt-6 mb-2">
              We understand what tabletop events need
            </h3>
            <p className="text-sm text-gray-100">
              Add your game library, manage Play to Win competitions, auto generated QR codes, floor plans, TV-mode, data reports, and more packed into a simple and modern interface.
            </p>
            <div className="pt-8 sm:pt-12 lg:pt-14 lg:w-4/5">
              <Link href='/events'>
                <Button
                  type="submit"
                  color='gg'
                  className='bg-white !text-gg-blue md:hover:bg-gg-blue-faint active:bg-gray-100 !text-lg !px-6 !py-3'
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-medium text-white mb-2">
              Check out the case study:
            </h3>
            <div className='relative group w-full rounded-2xl bg-white text-gray-900 hover:bg-gg-blue-faint border-2 border-gray-100 transition-colors'>
              <Link href={`/blog/${caseStudyPost.id}`}>
                {caseStudyPost.image && (
                  <div className="relative h-48">
                    <Image
                      src={caseStudyPost.image}
                      alt={caseStudyPost.title}
                      layout="fill"
                      objectFit="cover"
                        className='rounded-t-2xl group-hover:opacity-80 transition-opacity'
                    />
                  </div>
                )}

                <h3 className="mt-4 mx-4 font-semibold text-sm">
                  {caseStudyPost.title}
                </h3>
                <p className='p-4 pt-2 text-sm text-gray-700'>{caseStudyPost.intro}</p>
              </Link>
              <ArrowRightIcon className="absolute bottom-4 right-4 h-5 w-5" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
