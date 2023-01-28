import Head from 'next/head'

import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Page not found | Goodgame Data</title>
        <meta
          name="description"
          content="Track the board games, sports, and video games you love on Goodgame to gain meaningful insights and share your gaming journey with friends."
        />
      </Head>
      <Header />
      <main className='py-40 lg:py-60'>
        <Container className='text-center'>
          <h1 className='text-5xl lg:text-6xl xl:text-8xl tracking-tight xl:leading-snug lg:leading-snug leading-snug font-semibold'>
            <span className='text-gg-blue'>4</span>0<span className='text-gg-red'>4</span>
          </h1>
          <p className="mt-10 text-xl lg:text-2xl xl:text-3xl text-gray-900">
            Now, where did that page go?
          </p>
          <Button href="/" className="mt-10 bg-gg-blue hover:bg-gg-red active:bg-gg-red">
            Maybe it went here...
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  )
}
