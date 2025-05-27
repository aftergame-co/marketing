import { Container } from '@/components/Container';
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
        className="pt-20 sm:pt-32 pb-8 sm:pb-12"
      >
      <Container>
        <div className="lg:gap-y-20">
          <div className="relative z-10 mx-auto gap-y-4">
            <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              Testing an embedded game list
            </h1>
            <div className="w-full max-w-[900px] mt-12 mx-auto">
              <iframe
                src="https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed"
                title="Aftergame game list"
                width="100%"
                height="600"
                className="m-auto mt-12 border self-center"
                frameborder="0"
              >
              </iframe>
            </div>
            <h1 className="mt-20 text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
              And now an embedded event schedule
            </h1>
            <div className="w-full max-w-[900px] mt-12 mx-auto">
              <iframe
                src="https://aftergame.app/events/654c2bd1-7447-423e-bd50-64a50326438b/schedule?mode=embed"
                title="Aftergame event"
                width="100%"
                height="600"
                className="m-auto mt-12 border self-center"
                frameborder="0"
              >
              </iframe>
            </div>
          </div>
        </div>
      </Container>
      </section>
      <CallToAction />
    </main>
  )
}
