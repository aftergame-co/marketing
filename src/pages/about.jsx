import Head from 'next/head'

import { Container } from '@/components/Container'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { CallToAction } from '@/sections/CallToAction'
import Image from 'next/image'

export default function About() {
  
  const team = [
    {
      image: '/images/team/eric.jpg',
      name: 'Eric Poulin',
      role: 'CEO',
    },
    {
      image: '/images/team/john.jpg',
      name: 'John Brent',
      role: 'Head of Operations',
    },
    {
      image: '/images/team/eli.jpg',
      name: 'Eli Labes',
      role: 'Head of Engineering',
    },
    {
      image: '/images/team/alex.jpg',
      name: 'Alex Poulin',
      role: 'Co-founder',
    },
  ]

  return (
    <>
      <Head>
        <title>About us | Goodgame Data</title>
        <meta
          name="description"
          content="Our mission is to organise the world’s game data and make it universally accessible and useful"
        />
      </Head>
      <Header />
      <main className='pt-20'>
        <Container className='py-32 lg:py-40 xl:pt-40 xl:pb-60'>
          <p className='text-center text-xl text-gray-500'>OUR MISSION</p>
          <h1 className='mt-4 text-center text-3xl lg:text-5xl xl:text-6xl tracking-tight xl:leading-snug lg:leading-snug leading-snug'>To organise the world’s <span className='text-gg-blue font-semibold'>game data</span> and make it <span className='text-gg-red font-semibold'>universally accessible</span> and useful</h1>
        </Container>
        <section
          id="our-story"
          aria-label="Our story"
          className="bg-gg-blue py-20 sm:py-32"
        >
          <Container>
            <p className='mb-10 text-center text-xl text-gray-100'>OUR STORY</p>
            <div className='bg-white rounded-2xl md:mx-20 xl:mx-40 p-6 md:p-20'>{/* lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20"> */}
                {/* <div className='lg:col-span-6 text-lg text-gray-900'> */}
                  <p><span className='text-gg-blue font-bold'>In mid-2022</span>, founders John Brent and Eric Poulin decided to start recording the games they played. Their first instinct was a spreadsheet, but it had to be easy to enter results with dropdowns… and formulas… <i>and pivot tables!</i> At first it was very simple, letting you choose a winner and keeping a tally. This quickly got more complex as they added more and more things to track.</p>

                  <p className='mt-6'>It was soon that the penny dropped… there’s definitely an app for this! A quick search found a handful of apps that seemed to do what they were building. Though as good as some of these apps were, there were some opportunities missed.</p>

                  <p className='mt-6'>Their spreadsheet allowed either of them to log a game from their phone in two taps and for it to be immediately shown to the other. None of the apps did this. The spreadsheet also had dropdowns pre-built with relevant information for the game they were playing. Again, none of the other apps had this for all the games they wanted.</p>

                  <p className='mt-6'>The scoring breakdown in 7 Wonders, the factions in Root, the scenarios in Betrayal at House on the Hill, and <i>“how do these two expansions work together!?”</i> could all be captured, made available as interesting data points to track and easy scoring. Having games played by friends all show up on their phones in real-time and personalised stats immediately available could be made possible.</p>

                  <p className='mt-6'>Partnering with co-founders Eli Labes and Alex Poulin, the team started talking to game players and building what would become <span className='text-gg-red font-bold'>Goodgame</span>.</p>
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
            <p className='text-center text-xl text-gray-500'>OUR TEAM</p>
            <ul
              role="list"
              className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm md:gap-y-10 lg:max-w-none"
            >
              {team.map((member) => (
                <li
                  key={member.name}
                  className="rounded-2xl border border-gray-200 p-8 text-center"
                >
                  <Image
                    src={member.image}
                    alt={'Team member: '+ member.name}
                    width={200}
                    height={200}
                    className='rounded-full m-auto'
                  />
                  <h3 className="mt-6 font-semibold text-gray-900">
                    {member.name}, {member.role}
                  </h3>
                </li>
              ))}
            </ul>
          </Container>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
