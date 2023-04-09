import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function TwitterLogo(props) {
  return (
    <svg  viewBox="0 0 248 204">
      <path fill="currentColor" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
    </svg>
  )
}

function LinkedInLogo(props) {
  return (
    <svg viewBox="0 0 72 72">
      <path fill="currentColor" d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"/>
      <path fill="#FFF" d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/>
    </svg>
  )
}

function DiscordLogo(props) {
  return (
    <svg viewBox="0 0 127.14 96.36">
      <path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container>
        {/* <div className="flex flex-col items-center justify-between gap-y-12 pt-6 pb-12 lg:flex-row">
          <div>
            <Link href="/" aria-label="Home">
              <Logo className="h-16 w-auto -mx-2" />
            </Link>
          </div>
        </div>*/}
        <div className="flex flex-col items-center pt-6 pb-8 md:pt-6 md:pb-6 md:flex-row-reverse md:justify-between">
          <div className='flex gap-1'>
            <Link 
              href="https://twitter.com/GoodgameData" 
              target='_blank' 
              aria-label="Twitter" 
              className="flex align-middle self-center w-7 h-7 p-1 text-gray-500 hover:text-twitter-blue"
            >
              <TwitterLogo />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/goodgame-data" 
              target='_blank' 
              aria-label="LinkedIn" 
              className="flex align-middle self-center w-7 h-7 p-1 text-gray-500 hover:text-linkedin-blue"
            >
              <LinkedInLogo />
            </Link>
            <Link 
              href="https://discord.gg/XMYxvJ3ge2" 
              target='_blank' 
              aria-label="Discord" 
              className="flex align-middle self-center w-8 h-8 p-1 text-gray-500 hover:text-discord-blurple"
            >
              <DiscordLogo />
            </Link>
            {/* facebook / youtube / instagram */}
          </div>
          <div className='md:grow'></div>
          
          <div className='mt-6 text-sm space-x-6 md:mt-0 md:ml-6'>
            <Link href="/privacy" aria-label="Privacy">
              Privacy
            </Link>
            {/* <Link href="/terms" aria-label="Terms">
              Terms
            </Link> */}
          </div>
          <p className="mt-6 text-sm text-gray-600 md:mt-0">
            &copy; {new Date().getFullYear()} Goodgame Data Ltd.
          </p>
        </div>
      </Container>
    </footer>
  )
}
