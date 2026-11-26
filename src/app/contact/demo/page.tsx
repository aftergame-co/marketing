import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Aftergame demo',
  alternates: {
    canonical: '/contact/demo',
  },
}

export default function Demo() {
  return (
    <main className="pt-20">
      <section id="contact-us" aria-label="Aftergame demo" className="py-12">
        <Container>
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute top-0 right-0 left-0 z-10 h-15 bg-white" />
            <iframe
              title="Demo request form"
              src="https://aftergame.notion.site/ebd//19e176cc981d80a7bca2c21e55198402"
              width="100%"
              height="1160"
              frameBorder="0"
              className="-mt-16 hidden sm:block"
            />
            <iframe
              title="Demo request form"
              src="https://aftergame.notion.site/ebd//19e176cc981d80a7bca2c21e55198402"
              width="100%"
              height="1320"
              frameBorder="0"
              className="-mt-16 block sm:hidden"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
