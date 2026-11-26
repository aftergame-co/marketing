import Link from 'next/link';
import { Container } from '@/components/Container';
import Image from '@/components/Image';
import { InstagramLogo, FacebookLogo, DiscordLogo, BlueksyLogo } from '@/components/SocialLogos';
import { ReleaseEntry } from '@/components/ReleaseEntry';
import { RssLink } from '@/components/RssLink';
import { CallToAction } from '@/sections/CallToAction';
import {
  formatReleaseDate,
  getChangeLabels,
  getReleases,
  releaseDescription,
  releaseHeading,
  releasesMetadata,
  renderRelease,
} from '@/utils/releases';

// Releases shown in full; older ones are listed with a link to their own page
const LATEST_COUNT = 10;

export const metadata = releasesMetadata({
  path: '/releases',
  title: 'Releases',
  description: 'What’s new in Aftergame: the release notes for every app update.',
});

export default async function Releases() {
  const releases = getReleases();
  const labels = getChangeLabels();
  const latest = releases.slice(0, LATEST_COUNT);
  const rendered = await Promise.all(latest.map((release) => renderRelease(release)));

  // Earlier releases grouped by year, newest first
  const years = [];
  for (const release of releases.slice(LATEST_COUNT)) {
    const year = release.date.slice(0, 4);
    if (years.at(-1)?.year !== year) years.push({ year, releases: [] });
    years.at(-1).releases.push(release);
  }

  return (
    <main className='pt-52'>
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0 pb-32">
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            What’s new
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Join our community to follow our updates.
          </p>
          <div className='mt-2 flex gap-2'>
              <Link 
                href="https://www.facebook.com/AftergameApp" 
                target='_blank' 
                aria-label="Facebook" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-facebook-blue hover:bg-gray-200 rounded-lg"
              >
                <FacebookLogo />
                <p className="text-lg ml-2 leading-tight">Facebook</p>
              </Link>
              <Link 
                href="https://discord.gg/XMYxvJ3ge2" 
                target='_blank' 
                aria-label="Discord" 
                className="flex align-middle justify-center w-auto h-9 p-2.25 text-gray-500 hover:text-discord-blurple hover:bg-gray-200 rounded-lg"
              >
                <DiscordLogo />
                <p className="text-lg ml-2 leading-tight">Discord</p>
              </Link>
              <Link 
                href="https://www.instagram.com/aftergameapp" 
                target='_blank' 
                aria-label="Instagram" 
                className="flex align-middle justify-center w-auto h-9 pl-0.5 pr-2 py-0.5 text-gray-500 hover:text-instagram-pink hover:bg-gray-200 rounded-lg"
              >
                <InstagramLogo />
                <p className="text-lg ml-0.5 mt-1.5 leading-tight">Instagram</p>
              </Link>
              <Link 
                href="https://bsky.app/profile/aftergame.app" 
                target='_blank' 
                aria-label="Bluesky" 
                className="flex align-middle justify-center w-auto h-9 p-2 text-gray-500 hover:text-bluesky-blue hover:bg-gray-200 rounded-lg"
              >
                <BlueksyLogo />
                <p className="text-lg ml-2 leading-tight">Bluesky</p>
              </Link>
              <RssLink
                href="/releases/feed.xml"
                className="h-9 p-2 text-lg leading-tight text-gray-500 hover:text-orange-500 hover:bg-gray-200 rounded-lg"
              />
            </div>
        </div>
      </Container>
      {latest.map((release, index) => (
        <section
          key={release.slug}
          id={release.slug}
          aria-label={releaseHeading(release)}
          className="scroll-mt-24 border-t border-gray-200 py-16 sm:pb-24"
        >
          {/* Old links like /releases#3.4 land on the newest build of that version */}
          {release.versionAnchor && <span id={release.version} className="block scroll-mt-24" />}
          <Container>
            <div className="max-w-2xl">
              <ReleaseEntry
                release={release}
                labels={labels}
                blurbHtml={rendered[index].blurbHtml}
                href={`/releases/${release.slug}`}
                eagerImage={index === 0}
              />
            </div>
          </Container>
        </section>
      ))}
      <section aria-labelledby="earlier-releases" className="border-t border-gray-200 py-16 sm:pb-24">
        <Container>
          <div className="max-w-2xl">
            <h2 id="earlier-releases" className="text-3xl font-medium tracking-tight text-gray-900">
              Earlier releases
            </h2>
            {years.map(({ year, releases }) => (
              <div key={year} className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900">{year}</h3>
                <ul role="list" className="mt-2 divide-y divide-gray-200">
                  {releases.map((release) => (
                    <li
                      key={release.slug}
                      id={release.versionAnchor ? release.version : undefined}
                      className="scroll-mt-24 py-4"
                    >
                      <Link href={`/releases/${release.slug}`} className="group flex items-start gap-x-4">
                        {release.images[0] && (
                          // Decorative: the link text already names the release
                          <Image
                            src={release.images[0].src}
                            alt=""
                            width={release.images[0].width}
                            height={release.images[0].height}
                            sizes="(min-width: 640px) 8rem, 6rem"
                            className="w-24 shrink-0 rounded-lg border border-gray-200 sm:w-32"
                          />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className='flex justify-between'>
                            <p className="font-medium text-gray-900 group-hover:text-gg-blue">{releaseHeading(release)}</p>
                            <p className="text-sm text-gray-500">
                              <time dateTime={release.date}>{formatReleaseDate(release.date)}</time>
                            </p>
                          </div>
                          <p className="mt-0px line-clamp-2 text-sm leading-5 text-gray-600">{releaseDescription(release, 200)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CallToAction />
    </main>
  )
}
