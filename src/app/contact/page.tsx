import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { InstagramLogo, FacebookLogo, LinkedInLogo, DiscordLogo, BlueksyLogo } from '@/components/SocialLogos'
import { CallToAction } from '@/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/contact',
  },
}

export default function Contact() {
  return (
    <main className="pt-20">
      <section id="contact-us" aria-label="Contact us" className="py-20 sm:py-32">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-7">
              <h1 className="text-5xl font-medium tracking-tighter text-gray-900 md:text-5xl md:tracking-tight xl:text-6xl">
                Contact us
              </h1>
              <p className="mt-6 mb-4 text-xl text-gray-600 lg:w-4/5">
                Get in touch with general enquiries or support requests, we’ll get back to you as soon as we can
              </p>
              <div className="mb-24 flex align-middle">
                <EnvelopeIcon className="mr-2 h-9 w-9" />
                <Link
                  href="mailto:hello@aftergame.co"
                  aria-label="Email us"
                  className="flex h-9 w-auto justify-center rounded-lg p-2 align-middle text-gg-blue hover:bg-gray-200"
                >
                  <p className="m-0 self-center p-0 text-xl font-semibold">hello@aftergame.co</p>
                </Link>
              </div>
              <h2 className="text-2xl font-semibold tracking-tighter text-gray-900 md:tracking-tight">
                Join us in our community
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="https://www.facebook.com/AftergameApp"
                  target="_blank"
                  aria-label="Facebook"
                  className="flex h-9 w-auto justify-center rounded-lg p-2 align-middle text-gray-500 hover:bg-gray-200 hover:text-facebook-blue"
                >
                  <FacebookLogo />
                  <p className="ml-2 text-lg leading-tight">Facebook</p>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/aftergame-co"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex h-9 w-auto justify-center rounded-lg p-2 align-middle text-gray-500 hover:bg-gray-200 hover:text-linkedin-blue"
                >
                  <LinkedInLogo />
                  <p className="ml-2 text-lg leading-tight">LinkedIn</p>
                </Link>
                <Link
                  href="https://discord.gg/XMYxvJ3ge2"
                  target="_blank"
                  aria-label="Discord"
                  className="flex h-9 w-auto justify-center rounded-lg p-2.25 align-middle text-gray-500 hover:bg-gray-200 hover:text-discord-blurple"
                >
                  <DiscordLogo />
                  <p className="ml-2 text-lg leading-tight">Discord</p>
                </Link>
                <Link
                  href="https://www.instagram.com/aftergameapp"
                  target="_blank"
                  aria-label="Instagram"
                  className="flex h-9 w-auto justify-center rounded-lg py-0.5 pr-2 pl-0.5 align-middle text-gray-500 hover:bg-gray-200 hover:text-instagram-pink"
                >
                  <InstagramLogo />
                  <p className="mt-1.5 ml-0.5 text-lg leading-tight">Instagram</p>
                </Link>
                <Link
                  href="https://bsky.app/profile/aftergame.app"
                  target="_blank"
                  aria-label="Bluesky"
                  className="flex h-9 w-auto justify-center rounded-lg p-2 align-middle text-gray-500 hover:bg-gray-200 hover:text-bluesky-blue"
                >
                  <BlueksyLogo />
                  <p className="ml-2 text-lg leading-tight">Bluesky</p>
                </Link>
              </div>
              <div className="hidden py-8 lg:flex"></div>
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </main>
  )
}
