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
      image: '/images/about/team/stephane.jpg',
      name: 'Stéphane Busso',
      role: 'Technical Advisor',
      linkedIn: 'https://www.linkedin.com/in/stephanebusso',
    },
    {
      image: '/images/about/team/eli.jpg',
      name: 'Eli Labes',
      role: 'Technical Advisor',
      linkedIn: 'https://www.linkedin.com/in/eli-labes-39a705164',
    },
  ]

  return (
    <main className='pt-20'>
      <Container className='py-32 lg:py-40 xl:pt-40 xl:pb-60'>
        <p className='text-center text-xl text-gray-600'>OUR MISSION</p>
        <h1 className='mt-4 text-center text-3xl lg:text-5xl xl:text-6xl tracking-tight xl:leading-snug lg:leading-snug leading-snug'>To organise the world’s <span className='text-gg-blue font-semibold'>game data</span> <br className='hidden sm:flex' />and <span className='text-gg-red font-semibold'>make it useful</span></h1>
      </Container>
      <section
        id="our-story"
        aria-label="The Aftergame story"
        className="bg-gg-blue py-20 sm:py-32"
      >
        <Container>
          <p className='mb-10 text-center text-xl text-gray-100'>THE AFTERGAME STORY</p>
          <div className='bg-white rounded-2xl md:mx-20 xl:mx-40 p-6 md:p-20'>{/* lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20"> */}
            {/* <div className='lg:col-span-6 text-lg text-gray-900'> */}
            <p><span className='text-gg-blue font-bold'>In mid-2022</span>, founders John Brent and Eric Poulin decided to start recording the games they played. Their first instinct was a spreadsheet, but it had to be easy to enter results with dropdowns… and formulas… <i>and pivot tables!</i> At first it was very simple, letting you choose a winner and keeping a tally. This quickly got more complex as they added more and more things to track.</p>

            <p className='mt-6'>It was soon that the penny dropped… there’s definitely an app for this! A quick search found a handful of apps that seemed to do what they were building. Though as good as some of these apps were, there were some opportunities missed.</p>

            <p className='mt-6'>Their spreadsheet allowed either of them to log a game from their phone in two taps and for it to be immediately shown to the other. None of the apps did this. The spreadsheet also had dropdowns pre-built with relevant information for the game they were playing. Again, none of the other apps had this for all the games they wanted.</p>

            <p className='mt-6'>The scoring breakdown in 7 Wonders, the factions in Root, the scenarios in Betrayal at House on the Hill, and <i>“how do these two expansions work together!?”</i> could all be captured, made available as interesting data points to track and easy scoring. Having games played by friends all show up on their phones in real-time and personalised stats immediately available could be made possible.</p>

            <p className='mt-6'>Partnering with co-founder Eli Labes and then Chalene Scott, the team started talking to game players and building what would become <span className='text-gg-red font-bold'>Aftergame</span>.</p>
            {/* </div> */}
            {/* <div className='lg:col-span-6'>
                  <img src='../images/gg-0.1.png' className='border-2 border-gg-blue rounded-2xl' />
                </div> */}
          </div>

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
