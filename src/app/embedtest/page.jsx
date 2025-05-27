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
        className="pt-12 pb-20"
      >
      <Container>
        <div className="mx-auto">
          <h2 className="text-3xl font-medium text-center text-gray-900">
            Game list test
          </h2>
          <div className="w-full max-w-[900px] mt-4 mx-auto">
            <iframe
              src="https://aftergame.app/events/19a549af-20fd-4b98-9eea-fbbcca4adb2a/lists/12ae5074-b1f1-4f90-96c5-e03833189929?mode=embed"
              title="Aftergame game list"
              width="100%"
              height="540"
              frameborder="0"
              style={{ border: "1px solid #c6c5d0" }}
            >
            </iframe>
          </div>
          <h2 className="mt-12 text-3xl font-medium text-center text-gray-900">
            Group events list test
          </h2>
          <div className="w-full max-w-[900px] mt-4 mx-auto">
            <iframe
              src="https://aftergame.app/groups/village-meeple-board-game-c-4375/events?mode=embed"
              title="Aftergame event"
              width="100%"
              height="540"
              frameborder="0"
              style={{ border: "1px solid #c6c5d0" }}
            >
            </iframe>
          </div>
          <h2 className="mt-12 text-3xl font-medium text-center text-gray-900">
            Event schedule test
          </h2>
          <div className="w-full max-w-[900px] mt-4 mx-auto">
            <iframe
              src="https://aftergame.app/events/654c2bd1-7447-423e-bd50-64a50326438b/schedule?mode=embed"
              title="Aftergame event"
              width="100%"
              height="540"
              frameborder="0"
              style={{ border: "1px solid #c6c5d0" }}
            >
            </iframe>
          </div>
        </div>
      </Container>
      </section>
      <CallToAction />
    </main>
  )
}
