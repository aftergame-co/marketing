import { GroupsHero } from '@/sections/groups/GroupsHero';
import { GroupsPrimary } from '@/sections/groups/GroupsPrimary';
import { GroupsEmbed } from '@/sections/groups/GroupsEmbed';
import { GroupsSecondary } from '@/sections/groups/GroupsSecondary';
import { GroupsContact } from '@/sections/groups/GroupsContact';

export const metadata = {
  title: 'Clubs & Gaming Groups',
  description: 'Whether you\'re running a weekly game night, managing a gaming club, or organizing a convention, Aftergame empowers you to connect players, schedule seamlessly, and create unforgettable tabletop experiences.',
  alternates: {
    canonical: '/groups'
  },
  openGraph: {
    title: 'Clubs & Gaming Groups',
    description: 'Whether you\'re running a weekly game night, managing a gaming club, or organizing a convention, Aftergame empowers you to connect players, schedule seamlessly, and create unforgettable tabletop experiences.',
    url: 'https://www.aftergame.co',
    siteName: 'Aftergame',
    images: [
      {
        url: 'https://www.aftergame.co/_next/image?url=/images/ag-thumbnail-new.png&w=1200&q=75',
        alt: 'Aftergame | The social tabletop gaming app',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function Groups() {
  return (
    <main className='pt-20'>
      <GroupsHero />
      <GroupsPrimary />
      <GroupsEmbed />
      <GroupsSecondary />
      <GroupsContact />
    </main>
  )
}
