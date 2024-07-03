import { Container } from '@/components/Container';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { InstagramLogo, FacebookLogo, LinkedInLogo, DiscordLogo } from '@/components/SocialLogos';
import { CallToAction } from '@/sections/CallToAction';

export const metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/contact'
  },
};

export default function Contact() {

  return (
    <main className='pt-20'>
      <section
        id="contact-us"
        aria-label="Contact us"
        className="py-20 sm:py-32"
      >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-7">
            <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              Contact us
            </h1>
            <p className="mt-6 mb-4 lg:w-4/5 text-xl text-gray-600">
              Get in touch with general enquiries or support requests, we’ll get back to you as soon as we can
            </p>
            <div className="flex align-middle mb-24">
              <EnvelopeIcon className='h-9 w-9 mr-2'/>
              <Link 
                href="mailto:hello@aftergame.co"
                aria-label="Email us" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gg-blue hover:bg-gray-200 rounded-lg"
              >
              <p className='text-xl font-semibold m-0 p-0 self-center'>hello@aftergame.co</p>
            </Link>
            </div>
            <h2 className="text-2xl font-semibold tracking-tighter md:tracking-tight text-gray-900">
              Join us in our community
            </h2>

            <div className='mt-4 flex flex-wrap gap-2'>
              <Link 
                href="https://www.facebook.com/AftergameApp" 
                target='_blank' 
                aria-label="Facebook" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-facebook-blue hover:bg-gray-200 rounded-lg"
              >
                <FacebookLogo />
                <p className="text-lg ml-2 leading-tight">Facebook</p>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/aftergame-co" 
                target='_blank' 
                aria-label="LinkedIn" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-linkedin-blue hover:bg-gray-200 rounded-lg"
              >
                <LinkedInLogo />
                <p className="text-lg ml-2 leading-tight">LinkedIn</p>
              </Link>
              <Link 
                href="https://discord.gg/XMYxvJ3ge2" 
                target='_blank' 
                aria-label="Discord" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-discord-blurple hover:bg-gray-200 rounded-lg"
              >
                <DiscordLogo />
                <p className="text-lg ml-2 leading-tight">Discord</p>
              </Link>
              <Link 
                href="https://www.instagram.com/aftergameapp" 
                target='_blank' 
                aria-label="Twitter" 
                className="flex align-middle justify-center w-auto h-9 pl-0.5 pr-2 py-0.5 text-gray-500 hover:text-instagram-pink hover:bg-gray-200 rounded-lg"
              >
                <InstagramLogo />
                <p className="text-lg ml-0.5 mt-1.5 leading-tight">Instagram</p>
              </Link>
            </div>
            <div className='hidden lg:flex py-8'></div>
          </div>
        </div>
      </Container>
      </section>
      <CallToAction />
    </main>
  )
}
