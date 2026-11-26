import { buildRssFeed, escapeHtml, rssResponse } from '@/utils/feed'
import { getPostData, getSortedPostsData } from '@/utils/posts'
import { SITE_URL, isoDate } from '@/utils/site'

// Pre-rendered to out/blog/feed.xml for `output: 'export'`
export const dynamic = 'force-static'

export async function GET() {
  const items = await Promise.all(
    getSortedPostsData().map(async (post) => {
      const { contentHtml } = await getPostData(post.id, { feed: true })
      const html = [
        post.image && `<p><img src="${SITE_URL}${post.image}" alt="${escapeHtml(post.title)}"></p>`,
        post.intro && `<p>${escapeHtml(post.intro)}</p>`,
        contentHtml,
      ]
        .filter(Boolean)
        .join('\n')

      return {
        title: post.title,
        path: `/blog/${post.id}`,
        date: isoDate(post.date),
        description: post.intro ?? '',
        html,
        author: post.author_name,
        categories: post.category ?? [],
      }
    }),
  )

  return rssResponse(
    buildRssFeed({
      title: 'Aftergame blog',
      description: 'Thoughts on the future of social tabletop gaming, from the people helping to create it.',
      path: '/blog',
      selfPath: '/blog/feed.xml',
      items,
    }),
  )
}
