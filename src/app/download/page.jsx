import { Container } from '@/components/Container';
import { AppStoreLink, GooglePlayLink } from '@/components/AppStoreLink';

export const metadata = {
  title: 'Download Aftergame',
  alternates: {
    canonical: '/download'
  },
};

export default function Download() {
  return (
    <main className='py-52'>
      <Container>
      <div className="mx-auto max-w-3xl sm:text-center">
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            Ready to <span className='text-gg-red font-semibold'>see who wins</span>?
          </h1>
          <p className="mx-auto mt-8 mb-6 md:mt-12 md:mb-8 xl:mt-16 xl:mb-10 lg:w-xl text-xl text-gray-600 px-0 md:px-12">
            Download the free Aftergame app to start sharing your gaming journey with friends. 
          </p>
          <div className="mt-8 flex flex-wrap sm:justify-center gap-x-4 gap-y-4">
            <AppStoreLink />
            <GooglePlayLink />
          </div>
        </div>
      </Container>
    </main>
  )
}
