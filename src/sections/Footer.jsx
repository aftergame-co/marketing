import Link from 'next/link';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { TwitterLogo, FacebookLogo, LinkedInLogo, DiscordLogo } from '@/components/SocialLogos';

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        <div className="grid grid-col-1 md:grid-cols-6 lg:grid-cols-10 gap-y-6 pt-6 pb-12">
          <div className='col-span-5 lg:col-span-4'>
            <div className='flex justify-start'>
              <Link href="/" aria-label="Home" className='-ml-2 mt-1 overflow-hidden'>
                <Logo className="h-16 w-auto -my-1" />
              </Link>
            </div>
            <div className='ml-12 pl-px mt-4 flex gap-1'>
              <Link 
                href="https://www.facebook.com/Aftergame.co" 
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
                href="https://twitter.com/aftergame_co" 
                target='_blank' 
                aria-label="Twitter" 
                className="flex align-middle self-center w-9 h-9 p-2 text-gray-500 hover:text-twitter-blue hover:bg-gray-200 rounded-lg"
              >
                <TwitterLogo />
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
              {/* <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/why" aria-label="Why Aftergame?">
                  Why Aftergame?
                </Link>
              </li> */}
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/publishers" aria-label="Publishers">
                  Publishers
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/releases" aria-label="What’s new">
                  What’s new
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/download" aria-label="Download">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3
              id="faqs-title"
              className="mt-5 mb-2 text-lg font-semibold leading-6 text-gray-900"
            >
              Resources
            </h3>
            <ul>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/contact" aria-label="Contact">
                  Contact
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/faq" aria-label="FAQ">
                  FAQ
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/premium" aria-label="Premium">
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
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/about" aria-label="About">
                  About
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/about#our-story" aria-label="About">
                  Our story
                </Link>
              </li>
              {/* <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/media" aria-label="Media kit">
                  Media kit
                </Link>
              </li> */}
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/privacy" aria-label="Privacy">
                  Privacy Policy
                </Link>
              </li>
              <li className='py-1 text-sm text-gray-700 hover:text-gray-900'>
                <Link href="/terms" aria-label="Terms">
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
