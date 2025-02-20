import { Container } from '@/components/Container';

export const metadata = {
  title: 'Aftergame demo',
  alternates: {
    canonical: '/contact/demo'
  },
};

export default function Contact(params) {
  const isGama = params?.searchParams?.r === "gama25";
  return (
    <main className='pt-20'>
      <section
        id="contact-us"
        aria-label="Aftergame demo"
        className="py-20"
      >
      <Container>
        {isGama && (
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tighter md:tracking-tight text-gray-900">Are you at the GAMA Expo?</h2>
            <p className="mt-2 mb-8 text-xl text-gray-600"><a className="text-gg-blue font-medium hover:underline" href="https://calendar.app.google/JqKWJF9v5YbRWGi38" target="_blank">Book a time</a> to meet Eric at the expo.</p>
          </div>
        )}
        <div className="">
            <iframe src="https://aftergame.notion.site/ebd/19e176cc981d80a7bca2c21e55198402" width="100%" height="1200" frameborder="0" allowfullscreen />
          </div>
      </Container>
      </section>
    </main>
  )
}

