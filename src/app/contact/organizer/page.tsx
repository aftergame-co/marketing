import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Get in touch',
  alternates: {
    canonical: '/contact/organizer',
  },
}

export default function OrganizerContact() {
  return (
    <main className="pt-20">
      <section id="contact-us" aria-label="Get in touch" className="py-12">
        <Container>
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute top-0 right-0 left-0 z-10 h-15 bg-white" />
            <iframe
              title="Organizer contact form"
              src="https://aftergame.notion.site/ebd//886176cc981d83758743010936851d06"
              width="100%"
              height="1260"
              frameBorder="0"
              className="-mt-16 hidden sm:block"
            />
            <iframe
              title="Organizer contact form"
              src="https://aftergame.notion.site/ebd//886176cc981d83758743010936851d06"
              width="100%"
              height="1420"
              frameBorder="0"
              className="-mt-16 block sm:hidden"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
