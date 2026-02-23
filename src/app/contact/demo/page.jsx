import { Container } from '@/components/Container';

export const metadata = {
  title: 'Aftergame demo',
  alternates: {
    canonical: '/contact/demo'
  },
};

export default function Demo() {
  return (
    <main className='pt-20'>
      <section
        id="contact-us"
        aria-label="Aftergame demo"
        className="py-12"
      >
      <Container>
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[60px] bg-white z-10" />
          <iframe src="https://aftergame.notion.site/ebd//19e176cc981d80a7bca2c21e55198402" width="100%" height="1160" frameborder="0" className='hidden sm:block -mt-16' />
          <iframe src="https://aftergame.notion.site/ebd//19e176cc981d80a7bca2c21e55198402" width="100%" height="1320" frameborder="0" className='block sm:hidden -mt-16' />
        </div>
      </Container>
      </section>
    </main>
  )
}

