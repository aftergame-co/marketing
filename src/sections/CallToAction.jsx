import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink';
import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative overflow-hidden bg-gg-red py-16"
    >
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower bg-gray-900/25 rounded-full" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Never miss a game
          </h2>
          <p className="mt-4 text-lg text-white">
            Download the free Aftergame app to start sharing your gaming journey with friends. 
          </p>
          <div className="mt-8 flex flex-wrap sm:justify-center gap-x-4 gap-y-4">
            <AppStoreLink />
            <GooglePlayLink />
          </div>
        </div>
      </Container>
    </section>
  )
}
