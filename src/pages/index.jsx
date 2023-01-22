import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Splash } from '@/components/Splash'

export default function Home() {
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
