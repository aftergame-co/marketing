import Head from 'next/head'

import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'

export default function Blog() {
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
      </main>
      <Footer />
    </>
  )
}
