import { Container } from '@/components/Container';

export const metadata = {
  title: 'Aftergame demo',
  alternates: {
    canonical: '/contact/demo'
  },
};

export default function Contact() {

  return (
    <main className='pt-20'>
      <section
        id="contact-us"
        aria-label="Aftergame demo"
        className="py-20"
      >
      <Container>
        <div className="">
            <iframe src="https://aftergame.notion.site/ebd/19e176cc981d80a7bca2c21e55198402" width="100%" height="1200" frameborder="0" allowfullscreen />
          </div>
      </Container>
      </section>
    </main>
  )
}

