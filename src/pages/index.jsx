import Head from 'next/head'

import { CallToAction } from '@/sections/CallToAction'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { PrimaryFeatures } from '@/sections/PrimaryFeatures'
import { SecondaryFeatures } from '@/sections/SecondaryFeatures'
import { Splash } from '@/sections/Splash'

export default function Home() {
  return (
    <>
      <Head>
        <title>Goodgame Data - Play tracking and statistics, reimagined</title>
        <meta
          name="description"
          content="Track the board games, sports, and video games you love on Goodgame to gain meaningful insights and share your gaming journey with friends."
        />
      </Head>
      <Header />
      <main className='pt-20'>
        {/* <Splash /> */}
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        {/* <Reviews /> */}
      </main>
      <Footer />
    </>
  )
}
