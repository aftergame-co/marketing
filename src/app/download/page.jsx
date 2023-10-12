
import { DownloadHero } from '@/sections/DownloadHero';

export const metadata = {
  title: 'Download the Aftergame app - Do it to see who wins',
  alternates: {
    canonical: '/download'
  },
};

export default function Download() {
  return (
    <main className='pt-20 pb-52'>
      <DownloadHero />
    </main>
  )
}
