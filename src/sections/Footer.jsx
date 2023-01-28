import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

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
        </div>
        <div className="flex flex-col items-center border-t border-gray-300 pt-6 pb-8 md:pt-4 md:pb-16 md:flex-row-reverse md:justify-between"> */}
        <div className="flex flex-col items-center pt-6 pb-8 md:pt-6 md:pb-6 md:flex-row-reverse md:justify-between">
          <div className='flex align-middle'>
            {/* twitter */}
            <Link 
              href="https://discord.gg/XMYxvJ3ge2" 
              target='_blank' 
              aria-label="Discord" 
              className="flex align-middle w-9 h-9 p-1 text-gray-500 hover:text-discord-blurple"
            >
              <DiscordLogo />
            </Link>
            {/* facebook
            youtube / instagram
            linkedin */}
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
