import Link from 'next/link';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { FacebookLogo, LinkedInLogo, DiscordLogo, InstagramLogo } from '@/components/SocialLogos';

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-y-6 pt-8 pb-12">
          <div className='col-span-4 md:col-span-8 lg:col-span-4'>
            <div className='flex justify-start'>
              <Link href="/" aria-label="Home" className='-ml-2 mt-1 overflow-hidden'>
                <Logo className="h-16 w-auto -my-1" />
              </Link>
            </div>
            <div className='ml-12 pl-px mt-4 flex gap-1'>
              <Link 
                href="https://www.facebook.com/AftergameApp" 
                target='_blank' 
                aria-label="Facebook" 
                className="flex align-middle self-center w-9 h-9 p-2 text-gray-500 hover:text-facebook-blue hover:bg-gray-200 rounded-lg"
              >
                <FacebookLogo />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/aftergame-co" 
                target='_blank' 
                aria-label="LinkedIn" 
                className="flex align-middle self-center w-9 h-9 p-2 text-gray-500 hover:text-linkedin-blue hover:bg-gray-200 rounded-lg"
              >
                <LinkedInLogo />
              </Link>
              <Link 
                href="https://discord.gg/XMYxvJ3ge2" 
                target='_blank' 
                aria-label="Discord" 
                className="flex align-middle self-center w-9 h-9 p-2 text-gray-500 hover:text-discord-blurple hover:bg-gray-200 rounded-lg"
              >
                <DiscordLogo />
              </Link>
              <Link 
                href="https://www.instagram.com/aftergameapp" 
                target='_blank' 
                aria-label="Instagram" 
                className="flex align-middle self-center w-9 h-9 p-0.5 text-gray-500 hover:text-instagram-pink hover:bg-gray-200 rounded-lg"
              >
                <InstagramLogo />
              </Link>
            </div>
          </div>
          <div className='col-span-2'>
            <h3
              id="faqs-title"
              className="mt-5 mb-2 text-lg font-semibold leading-6 text-gray-900"
            >
              Product
            </h3>
            <ul>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/releases" aria-label="What’s new">
                  What’s new
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="https://apps.apple.com/us/app/aftergame/id6446225790" aria-label="Download for iOS" target='_blank'>
                  Download on iOS
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="https://play.google.com/store/apps/details?id=com.goodgamedata.goodgame#" aria-label="Download for Android" target='_blank'>
                  Download on Android
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3
              id="faqs-title"
              className="mt-5 mb-2 text-lg font-semibold leading-6 text-gray-900"
            >
              Solution
            </h3>
            <ul>
              {/* <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/players" aria-label="Players">
                  Players
                </Link>
              </li> */}
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/communities" aria-label="Communities">
                  Communities
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/events" aria-label="Conventions and Events">
                  Tabletop Events
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/publishers" aria-label="Publishers">
                  Publishers
                </Link>
              </li>
              {/* <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/distributors" aria-label="Distributors">
                  Distributors
                </Link>
              </li> */}
            </ul>
          </div>
          <div className='hidden col-span-4 lg:block xl:hidden'></div>
          <div className='col-span-2'>
            <h3
              id="faqs-title"
              className="mt-5 mb-2 text-lg font-semibold leading-6 text-gray-900"
            >
              Resources
            </h3>
            <ul>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/blog" aria-label="Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/faq" aria-label="FAQ">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/premium" aria-label="Premium">
                  Premium
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3
              id="faqs-title"
              className="mt-5 mb-2 text-lg font-semibold leading-6 text-gray-900"
            >
              Company
            </h3>
            <ul>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/about" aria-label="About">
                  About
                </Link>
              </li>
              {/* <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/about#our-story" aria-label="About">
                  Our story
                </Link>
              </li> */}
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/media" aria-label="Media kit">
                  Media kit
                </Link>
              </li> */}
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/privacy" aria-label="Privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className='py-1 pr-1 inline-block text-sm text-gray-600 hover:text-gray-900 hover:underline' href="/terms" aria-label="Terms">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-6 pb-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Aftergame Ltd. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
