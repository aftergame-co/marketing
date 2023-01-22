import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'

export default function About() {
  return (
    <>
      <Head>
        <title>Goodgame Data</title>
        <meta
          name="description"
          content="Goodgame Data. Coming soon."
        />
      </Head>
      <Header />
      <main className='pt-20'>
        <Container className='py-32 lg:pt-40'>
          <p className='text-center text-xl text-gray-400'>OUR MISSION</p>
          <p className='mt-4 text-center text-3xl xl:text-6xl tracking-tight xl:leading-snug leading-snug'>To organise the world’s <span className='text-gg-blue font-semibold'>game data</span> and make it <span className='text-gg-red font-semibold'>universally accessible</span> and useful.</p>
          
          <p className='mt-40 lg:mt-56 text-center text-xl text-gray-400'>OUR STORY</p>
          <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className='lg:col-span-6 text-lg text-gray-900'>
              <p>In the middle of 2022, founders John Brent and Eric Poulin decided to start recording the games we played against each other. It started out in large part because we are a <i>bit</i> competitive but also we were genuinely interested in keeping a record to preserve our memories and for later analysis (yes, we are geeks!)</p>
              
              <p className='mt-6'>And because we’re geeks, our first instinct was a spreadsheet… with dropdowns… and formulas… <i>and pivot tables!</i> My partner created the initial spreadsheet for our first game, chess. This was a simple sheet which let you choose a winner and it kept a tally. We then wanted to track another game we get competitive in: Magic the Gathering. For this game we also wanted to know which deck each of us were playing and how they did against each other (we each have a favourite).</p>

              <p className='mt-6'>It was when we came to the third game that the penny dropped… there’s definitely an app for this! A quick search found a handful of really good apps that did exactly as we were building. Though as good as some of these apps were, and they still will be perfect for some people, there were a couple of big opportunities that we felt were missed.</p>

              <p className='mt-6'>Our spreadsheet allowed either of us to log a game from our phone in two taps and for it to be immediately shown to the other. None of the apps did this well. Our spreadsheet also had dropdowns pre-built with relevant information for the game we were playing. None of the other apps had this for all the games we wanted.</p>

              <p className='mt-6'>The scoring breakdown in 7 Wonders, the factions in Root, the scenarios in Betrayal at House on the Hill, and “how do these two expansions work together!?” could all be captured, made available as interesting data points to track and easy scoring. Having games played by friends all show up on their phones in real-time and personalised stats immediately available.</p>

              <p className='mt-6'>This is how Goodgame was formed.</p>
            </div>
            <div className='lg:col-span-6'>
              <img src='../images/gg-0.1.png' className='border-2 border-gg-blue rounded-2xl' />
            </div>
          </div>
          {/* <p className='mt-40 text-center text-xl text-gray-400'>OUR TEAM</p> */}
        </Container>
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
