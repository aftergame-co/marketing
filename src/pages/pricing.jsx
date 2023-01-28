import Head from 'next/head'

import { Faqs } from '@/sections/Faqs'
import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Plans } from '@/sections/Plans'

export default function Pricing() {
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
        {/* <Plans />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
