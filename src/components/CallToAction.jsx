import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { WaitlistForm } from './WaitlistForm'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gg-red py-20 sm:py-28"
    >
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Record your first play today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            1-2 <br /> lines
          </p>
          {/* <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-4 lg:gap-x-6">
            <AppStoreLink />
            <GooglePlayLink />
          </div> */}
          <div className="mt-8">
            {/* <AppStoreLink />
            <GooglePlayLink /> */}
            <WaitlistForm lightMode={true} />
          </div>
        </div>
      </Container>
    </section>
  )
}
