import Link from 'next/link';
import { Container } from '@/components/Container';
import { ReleaseEntry } from '@/components/ReleaseEntry';
import { CallToAction } from '@/sections/CallToAction';
import {
  getChangeLabels,
  getReleaseBySlug,
  getReleaseSlugs,
  releaseDescription,
  releaseHeading,
  releasePageTitle,
  releasesMetadata,
  renderRelease,
} from '@/utils/releases';

// Pre-render every release at build time; unknown slugs 404
export const dynamicParams = false

export function generateStaticParams() {
  return getReleaseSlugs()
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { release } = getReleaseBySlug(slug)

  return releasesMetadata({
    path: `/releases/${slug}`,
    title: releasePageTitle(release),
    description: releaseDescription(release),
    image: release.ogImage ?? release.images[0],
    publishedTime: release.date,
  })
}

function ReleaseNavLink({ release, label, className }) {
  return (
    <Link href={`/releases/${release.slug}`} className={`group block ${className ?? ''}`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900 group-hover:text-gg-blue">{releaseHeading(release)}</p>
    </Link>
  )
}

export default async function ReleasePage({ params }) {
  const { slug } = await params
  const { release, newer, older } = getReleaseBySlug(slug)
  const labels = getChangeLabels()
  const { blurbHtml, storyHtml } = await renderRelease(release)

  return (
    <main className='pt-36 lg:pt-44'>
      <Container>
        <div className="max-w-2xl pb-20">
          <Link href="/releases" className="text-sm font-medium text-gg-blue hover:underline">
            ← All releases
          </Link>
          <div className="mt-6">
            <ReleaseEntry release={release} labels={labels} blurbHtml={blurbHtml} as="h1" eagerImage>
              {storyHtml && <div className="mt-8 text-gray-700" dangerouslySetInnerHTML={{ __html: storyHtml }} />}
              {release.blogPost && (
                <p className="mt-6">
                  <Link href={`/blog/${release.blogPost.id}`} className="font-medium text-gg-blue hover:underline">
                    Read the story on our blog: {release.blogPost.title} →
                  </Link>
                </p>
              )}
            </ReleaseEntry>
          </div>
          {(newer || older) && (
            <nav aria-label="Other releases" className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              {older ? <ReleaseNavLink release={older} label="← Previous release" /> : <span />}
              {newer && <ReleaseNavLink release={newer} label="Next release →" className="text-right" />}
            </nav>
          )}
        </div>
      </Container>
      <CallToAction />
    </main>
  )
}
