import Head from 'next/head'

import { Footer } from '@/sections/Footer'
import { Header } from '@/sections/Header'
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
              {/*
              ------------ ADD IN THE BELOW LINE TO THE PRIVACY POLICY WHEN CREATING THE TERMS
              
              
              in our Goodgame Data Terms of Service (available at <a className="text-gg-blue font-medium hover:underline" href="https://goodgamedata.com/terms">https://goodgamedata.com/terms</a>)
              
              
              ---------------
              
              */}





            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
