import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Plans'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
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
      {/* <Header /> */}
      <main className='pt-20'>
        <Splash />
        {/* <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
