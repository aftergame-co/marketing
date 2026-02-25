import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { getPostData } from '@/utils/posts';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export async function PublisherEventsFeature() {
  const caseStudyPost = await getPostData("how-aftergame-transformed-play-con-a-game-changer-for-event-organizers");

  return (
    <section
      id="features"
      aria-label="Effortless & All-in-one Tabletop Event Management"
      className="bg-gg-blue py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tighter lg:tracking-tight text-white">
            Effortless & All-in-one Tabletop Event Management
          </h2>
          <p className="mt-2 text-xl text-gray-100">
            We’ve worked with some of the largest gaming conventions to schedule thousands of games, and have built a toolkit that enables on-site event management of all sizes. 
          </p>
        </div>
      </Container>
      <Container className="mt-10 md:mt-16">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className="col-span-1 lg:col-span-2 pr-0 sm:pr-6 lg:pr-20">
            <h3 className="text-xl font-medium text-white mb-1.5">
              Seamless Demo Scheduling
            </h3>
            <p className="text-sm text-gray-100">
              Plan and manage game demos with ease, ensuring players always have a seat at the table.
            </p>
            <h3 className="text-xl font-medium text-white mt-5 mb-1.5">
              Play-to-Win, Simplified
            </h3>
            <p className="text-sm text-gray-100">
              Run exciting Play-to-Win activations, track participation, and reward players with no hassle. 
            </p>
            <h3 className="text-xl font-medium text-white mt-5 mb-1.5">
              Track ROI with Confidence
            </h3>
            <p className="text-sm text-gray-100">
              Measure event success with real player data – see what works, optimize your approach, and boost your return on investment.
            </p>
            <h3 className="text-xl font-medium text-white mt-5 mb-1.5">
              Turn Attendees into Fans
            </h3>
            <p className="text-sm text-gray-100">
              Capture attendee details, follow up effortlessly, and track the impact long after the event ends.
            </p>
            <div className="pt-6 sm:pt-8 lg:pt-10 lg:w-4/5">
              <Link href='/contact/demo'>
                <Button
                  type="submit"
                  color='gg'
                  className='bg-white !text-gg-blue md:hover:bg-gg-blue-faint active:bg-gray-100 !text-lg !px-6 !py-3'
                >
                  Book Demo
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
                      fill
                      className='rounded-t-2xl group-hover:opacity-80 transition-opacity object-cover'
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
