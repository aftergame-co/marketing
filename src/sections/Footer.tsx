import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { FacebookLogo, LinkedInLogo, DiscordLogo, InstagramLogo, BlueksyLogo } from '@/components/SocialLogos'

// Evaluated once per build (the site is a static export)
const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="grid grid-cols-4 gap-y-6 pt-8 pb-12 md:grid-cols-8 xl:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="flex justify-start">
              <Link href="/" aria-label="Home" className="mt-1 -ml-2 overflow-hidden">
                <Logo className="-my-1 h-[72px] w-auto" />
              </Link>
            </div>
            <div className="mt-4 ml-[59px] flex gap-0.5 pl-px">
              <Link
                href="https://www.facebook.com/AftergameApp"
                target="_blank"
                aria-label="Facebook"
                className="flex h-8 w-8 self-center rounded-lg p-1.5 align-middle text-gray-500 hover:bg-gray-200 hover:text-facebook-blue"
              >
                <FacebookLogo />
              </Link>
              <Link
                href="https://www.linkedin.com/company/aftergame-co"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-8 w-8 self-center rounded-lg p-[7px] align-middle text-gray-500 hover:bg-gray-200 hover:text-linkedin-blue"
              >
                <LinkedInLogo />
              </Link>
              <Link
                href="https://discord.gg/XMYxvJ3ge2"
                target="_blank"
                aria-label="Discord"
                className="flex h-8 w-8 self-center rounded-lg p-[5px] align-middle text-gray-500 hover:bg-gray-200 hover:text-discord-blurple"
              >
                <DiscordLogo />
              </Link>
              <Link
                href="https://www.instagram.com/aftergameapp"
                target="_blank"
                aria-label="Instagram"
                className="flex h-8 w-8 self-center rounded-lg align-middle text-gray-500 hover:bg-gray-200 hover:text-instagram-pink"
              >
                <InstagramLogo />
              </Link>
              <Link
                href="https://bsky.app/profile/aftergame.app"
                target="_blank"
                aria-label="Bluesky"
                className="flex h-8 w-8 self-center rounded-lg p-1.5 align-middle text-gray-500 hover:bg-gray-200 hover:text-bluesky-blue"
              >
                <BlueksyLogo />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 id="faqs-title" className="mt-5 mb-2 text-lg leading-6 font-semibold text-gray-900">
              Product
            </h3>
            <ul>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/releases"
                  aria-label="What’s new"
                >
                  What’s new
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/pricing"
                  aria-label="Pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://apps.apple.com/us/app/aftergame/id6446225790"
                  aria-label="Download for iOS"
                  target="_blank"
                >
                  Download on iOS
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://play.google.com/store/apps/details?id=com.goodgamedata.goodgame#"
                  aria-label="Download for Android"
                  target="_blank"
                >
                  Download on Android
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 id="faqs-title" className="mt-5 mb-2 text-lg leading-6 font-semibold text-gray-900">
              Solutions
            </h3>
            <ul>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/conventions"
                  aria-label="Conventions and Events"
                >
                  Conventions
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/publishers"
                  aria-label="Publishers"
                >
                  Publishers
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/retailers"
                  aria-label="Retailers"
                >
                  Retailers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-4 hidden lg:block xl:hidden"></div>
          <div className="col-span-2">
            <h3 id="faqs-title" className="mt-5 mb-2 text-lg leading-6 font-semibold text-gray-900">
              Resources
            </h3>
            <ul>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/blog"
                  aria-label="Blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://aftergame.notion.site/"
                  aria-label="App help"
                  target="_blank"
                >
                  Help site
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://aftergame.notion.site/organizers"
                  aria-label="Organizer help"
                  target="_blank"
                >
                  Organizer help
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://aftergame.notion.site/media-kit"
                  aria-label="Media kit"
                  target="_blank"
                >
                  Media kit
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="https://aftergame.notion.site/faq"
                  aria-label="FAQ"
                  target="_blank"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 id="faqs-title" className="mt-5 mb-2 text-lg leading-6 font-semibold text-gray-900">
              Company
            </h3>
            <ul>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/about"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/contact"
                  aria-label="Contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/privacy"
                  aria-label="Privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-1 pr-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  href="/terms"
                  aria-label="Terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-6 pb-6">
          <p className="text-sm text-gray-600">&copy; {YEAR} Aftergame Ltd. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
