import { Container } from '@/components/Container';
import { LinkedInLogo } from '@/components/SocialLogos';
import { CallToAction } from '@/sections/CallToAction';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About us',
  description: 'Our mission is to organise the world’s game data and make it useful',
  alternates: {
    canonical: '/about'
  },
};

export default function About() {

  const team = [
    {
      image: '/images/about/team/eric.jpg',
      name: 'Eric Poulin',
      role: 'CEO',
      linkedIn: 'https://www.linkedin.com/in/eric-poulin-nz',
    },
    {
      image: '/images/about/team/john.jpg',
      name: 'John Brent',
      role: 'Head of Operations',
      linkedIn: 'https://www.linkedin.com/in/john-brent',
    },
    {
      image: '/images/about/team/chalene.jpg',
      name: 'Chalene Scott',
      role: 'Head of Community',
      linkedIn: 'https://www.linkedin.com/in/chalene-scott-5571a879',
    },
    {
      image: '/images/about/team/andrew.jpg',
      name: 'Andrew Marks',
      role: 'Advisor',
      linkedIn: 'https://www.linkedin.com/in/andrewjohnmarks/',
    },
  ];

  const values = [
    {
      name: 'Together at the Table',
      description: 'Just like in cooperative games, we know success comes from combining strengths. We encourage open communication and collaboration to achieve our shared goals.',
    },
    {
      name: 'Every Turn Matters',
      description: 'The best games are won through steady progress, not waiting for the perfect hand. We focus on moving forward with each action.',
    },
    {
      name: 'Players First, Always',
      description: 'Like all the best games, we know that delivering an exceptional experience is key. Everything we do starts with understanding and serving our players.',
    },
    {
      name: 'Aim for a New Personal Best',
      description: 'Settling for good isn’t how you win the game. We consistently improve our strategy, knowing there\'s always room for a stronger play.',
    },
    {
      name: 'Focus on a Strategy',
      description: 'Like many games we know and love, sometimes it’s best to double down on one strategy and nail it rather than spreading yourself too thin.',
    },
    {
      name: 'Play with Purpose',
      description: 'Fun is at the heart of everything we do. Whether it\'s building great products or playing great games, we believe that enjoyment is key to success.',
    },
  ];

  return (
    <main className='pt-20'>
      <Container className='py-32 lg:py-40 xl:pt-40 xl:pb-60'>
        <p className='text-center text-xl text-gray-600'>OUR MISSION</p>
        <h1 className='mt-4 text-center text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight xl:leading-snug lg:leading-snug leading-snug'>To <span className='text-gg-blue font-semibold'>organise</span> the world’s <span className='text-gg-red font-semibold'>games</span></h1>
      </Container>
      <section
        id="our-story"
        aria-label="The Aftergame story"
        className="bg-gg-blue pt-20 pb-14 sm:pt-32"
      >
        <Container>
          <p className='mb-10 text-center text-xl text-gray-100'>THE AFTERGAME STORY</p>
          <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20'>
            <div className='bg-white rounded-2xl p-6 md:p-12 col-span-6'>
              {/* <div className='lg:col-span-6 text-lg text-gray-900'> */}
              <p><span className='text-gg-blue font-bold'>In late-2022</span>, founders John Brent and Eric Poulin decided to start recording the games they played. Their first instinct was a spreadsheet, but it had to be easy to enter and view results with dropdowns... and formulas... <i>and pivot tables!</i> At first it was simple, letting you choose a winner and keeping a tally. This quickly got more complex as they started tracking more things. Soon, the penny dropped… there’s definitely an app for this! A quick search found a handful of apps that seemed to do some of what they were building, though none had everything they wanted.</p>

              <p className='mt-6'>Their spreadsheet allowed either of them to log a game from their phone and for it to be immediately shown to the other. None of the apps did this. The spreadsheet also had dropdowns pre-built with relevant information for the game they were playing. Again, none of the other apps had this for all the games they wanted. The scoring breakdown in 7 Wonders, the factions in Root, the scenarios in Betrayal at House on the Hill, and <i>“how do these two expansions work together!?”</i> could all be done automatically to simplify tracking their games. They got to work building a solution.</p>

              <p className='mt-6'>With a basic app, they made the trip to Wellycon to see how it would work in the wild and what else about tabletop gaming their app may be able to enhance (this is where they met Chalene Scott, who soon joined the team). They encountered some difficulty in finding a game to join and discovered, in talking to other players and event organisers, that they were not alone in facing this challenge. Helping people who want to play the same games find each other at events and meetups soon became a core part of the platform. With all these puzzle pieces in place—shared game logs, collection tracking, events, and groups—<span className='text-gg-red font-bold'>Aftergame was born</span>.</p>
              {/* </div> */}
              {/* <div className='lg:col-span-6'>
                    <img src='../images/gg-0.1.png' className='border-2 border-gg-blue rounded-2xl' />
                  </div> */}
            </div>
            <div className='col-span-6'>
              <div className='relative h-96 mt-8 mb-8 lg:mt-0'>
                <Image
                    src="/images/about/eric-john-media.jpg"
                    alt="Eric and John in the local paper"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-2xl'
                  />
              </div>
              <div className='relative h-[480px]'>
                <Image
                    src="/images/about/eli-chalene-convention.jpg"
                    alt="Eric and John in the local paper"
                    layout="fill"
                    objectFit="cover"
                    className='rounded-2xl object-top'
                  />
              </div>
            </div>
          </div>

        </Container>
      </section>
      <section
        id="our-values"
        aria-label="Our team"
        className="bg-gg-blue pt-14 pb-20 sm:pb-32"
      >
        <Container>
          <p className='text-center text-xl text-gray-100'>OUR VALUES</p>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-sm md:gap-y-10 lg:max-w-4xl xl:max-w-none"
          >
            {values.map((value) => (
              <li
                key={value.name}
                className="rounded-2xl p-8 bg-white border-2 border-gray-100"
              >
                {/* <feature.icon className="h-16 w-16" /> */}
                <h3 className="mt-6 font-semibold text-gray-900 text-lg">
                  {value.name}
                </h3>
                <p className="mt-2 text-gray-700">{value.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section
        id="our-team"
        aria-label="Our team"
        className="py-20 sm:py-32"
      >
        <Container>
          <p className='text-center text-xl text-gray-600'>OUR TEAM</p>
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-sm md:gap-y-10 lg:max-w-4xl xl:max-w-none"
          >
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col rounded-2xl p-4 text-center bg-white border-2 border-gray-100"
              >
                <Image
                  src={member.image}
                  alt={'Team member: ' + member.name}
                  width={200}
                  height={200}
                  className='rounded-full m-auto p-4'
                />
                <h3 className="mt-2 font-semibold text-gray-900">
                  {member.name}, {member.role}
                </h3>
                {!member.linkedIn && (<span className="h-9 xl:h-3"></span>)}
                {member.linkedIn && (<Link
                  href={member.linkedIn} 
                  target='_blank' 
                  aria-label={member.name + "'s LinkedIn"}
                  className="flex align-middle self-center w-7 h-7 p-1 mt-2 text-gray-500 hover:text-linkedin-blue"
                >
                  <LinkedInLogo />
                </Link>)}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CallToAction />
    </main>
  )
}
