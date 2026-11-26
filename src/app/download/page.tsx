import type { Metadata } from 'next'
import { DownloadHero } from '@/sections/DownloadHero'

export const metadata: Metadata = {
  title: 'Download the Aftergame app - Never miss a game',
  alternates: {
    canonical: '/download',
  },
}

export default function Download() {
  return (
    <main className="pt-20 pb-52">
      <DownloadHero />
    </main>
  )
}
