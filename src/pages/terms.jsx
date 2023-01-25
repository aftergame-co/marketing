import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Goodgame Data</title>
        <meta
          name="description"
          content="Track the board games, sports, and video games you love on Goodgame to gain meaningful insights and share your gaming journey with friends."
        />
      </Head>
      <Header />
      <main className='pt-20'>
        <section
          id="terms-of-service"
          aria-label="Terms of Service"
          className="py-10 sm:py-16"
        >
          <Container>
            <div className='md:mx-16 xl:mx-24'>
              <h1 className="mb-6 text-4xl font-medium">Terms of Service</h1>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
