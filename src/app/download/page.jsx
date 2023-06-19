import { DownloadHero } from '@/sections/DownloadHero';

export const metadata = {
  title: 'Download Aftergame',
};

export default function Download() {
  return (
    <main className='pt-20'>
      <DownloadHero className="!pb-40" />
    </main>
  )
}
