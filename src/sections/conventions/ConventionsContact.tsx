import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Link from 'next/link'

export function ConventionsContact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gg-red py-16">
      <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
        <CircleBackground color="#fff" className="animate-spin-slower rounded-full bg-gray-900/25" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">A smoother event experience</h2>
          <p className="mt-4 text-lg text-white">
            Join hundreds of organizers and reach out today to set up your event.
          </p>
          <div className="mt-8 flex justify-center align-middle">
            <Link href="/contact/organizer">
              <Button
                type="submit"
                color="black"
                className="bg-white px-6! py-3! text-lg! hover:bg-gray-100 hover:text-gg-blue active:bg-gray-100 active:text-gg-blue"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
