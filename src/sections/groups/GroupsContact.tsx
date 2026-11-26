import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function GroupsContact() {
  return (
    <section id="organizers-contact" className="relative overflow-hidden bg-gg-red py-16">
      <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
        <CircleBackground color="#fff" className="animate-spin-slower rounded-full bg-gray-900/25" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">Let&apos;s fill those tables</h2>
          <p className="mt-4 text-lg text-white">
            Running your first game night or your 50th convention? We&apos;re here to help you create the kind of
            community where every seat is filled and every player feels at home.
          </p>
          <div className="mt-8 flex justify-center align-middle">
            <EnvelopeIcon className="mr-2 h-9 w-9 text-white" />
            <Link
              href="mailto:hello@aftergame.co"
              aria-label="Email us"
              className="flex h-9 w-auto justify-center rounded-lg p-2 align-middle text-white hover:bg-gray-200/10"
            >
              <p className="m-0 self-center p-0 text-xl font-semibold">hello@aftergame.co</p>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
