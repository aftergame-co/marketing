import { buildRssFeed, escapeHtml, rssResponse } from '@/utils/feed'
import { getChangeLabels, getReleases, releaseDescription, releasePageTitle, renderRelease } from '@/utils/releases'
import { SITE_URL } from '@/utils/site'

// Pre-rendered to out/releases/feed.xml for `output: 'export'`
export const dynamic = 'force-static'

const FEED_SIZE = 25

export async function GET() {
  const labels = getChangeLabels()

  const items = await Promise.all(
    getReleases()
      .slice(0, FEED_SIZE)
      .map(async (release) => {
        const { blurbHtml, storyHtml } = await renderRelease(release, { feed: true })
        const html = [
          blurbHtml,
          ...release.images.map(
            (image) =>
              `<p><img src="${SITE_URL}${image.src}" alt="${escapeHtml(image.alt)}" width="${image.width}" height="${image.height}"></p>`,
          ),
          storyHtml,
          ...release.sections.map((section) =>
            [
              `<h3>${escapeHtml(section.title)}</h3>`,
              '<ul>',
              ...section.changes.map(
                (change) => `<li><strong>${escapeHtml(labels[change.type])}:</strong> ${escapeHtml(change.text)}</li>`,
              ),
              '</ul>',
            ].join('\n'),
          ),
          release.blogPost &&
            `<p><a href="${SITE_URL}/blog/${release.blogPost.id}">Read the story on our blog: ${escapeHtml(release.blogPost.title)}</a></p>`,
        ]
          .filter(Boolean)
          .join('\n')

        return {
          title: releasePageTitle(release),
          path: `/releases/${release.slug}`,
          date: release.date,
          description: releaseDescription(release),
          html,
        }
      }),
  )

  return rssResponse(
    buildRssFeed({
      title: 'Aftergame releases',
      description: 'Release notes for every Aftergame app update.',
      path: '/releases',
      selfPath: '/releases/feed.xml',
      items,
    }),
  )
}
