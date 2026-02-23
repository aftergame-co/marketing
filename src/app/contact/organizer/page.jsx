import { Container } from '@/components/Container';

export const metadata = {
  title: 'Get in touch',
  alternates: {
    canonical: '/contact/organizer'
  },
};

export default function OrganizerContact() {
  return (
    <main className='pt-20'>
      <section
        id="contact-us"
        aria-label="Get in touch"
        className="py-12"
      >
      <Container>
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[60px] bg-white z-10" />
          <iframe src="https://aftergame.notion.site/ebd//886176cc981d83758743010936851d06" width="100%" height="1260" frameborder="0" className='hidden sm:block -mt-16' />
          <iframe src="https://aftergame.notion.site/ebd//886176cc981d83758743010936851d06" width="100%" height="1420" frameborder="0" className='block sm:hidden -mt-16' />
        </div>
      </Container>
      </section>
    </main>
  )
}

