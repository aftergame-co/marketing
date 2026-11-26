import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import Image from '@/components/Image'
import Date from '@/components/Date'
import { getAllPostIds, getPostData } from '@/utils/posts'
import { FEEDS, pageAlternates } from '@/utils/site'

// Pre-render every post at build time; unknown ids 404 instead of erroring
export const dynamicParams = false

export function generateStaticParams() {
  return getAllPostIds()
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)

  return {
    title: postData.title,
    description: postData.intro,
    alternates: pageAlternates(`/blog/${postData.id}`, [FEEDS.blog]),
    openGraph: {
      title: postData.title,
      description: postData.intro,
      images: [
        {
          url: `https://www.aftergame.co${postData.image}`,
          alt: postData.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

// -< Post >-
export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const postData = await getPostData(id)

  return (
    <main className="pt-20">
      <section id="blog" aria-label="Blog posts" className="pt-12 pb-20">
        <Container>
          <div className="sm:px-8 md:px-36 xl:px-48">
            {postData.image && (
              <Image
                src={postData.image}
                alt={postData.title}
                loading="eager"
                width={2000}
                height={1000}
                className="rounded-2xl"
              />
            )}
            <p className="text-md mt-8 font-medium text-gray-500">
              <Date dateString={postData.date} />
            </p>
            <h1 className="mt-2 mb-4 text-3xl font-medium tracking-tighter text-gray-900 md:tracking-tight lg:text-4xl">
              {postData.title}
            </h1>
            {postData.author_name && (
              <div className="mb-12 flex items-center gap-x-3">
                <Image
                  src={postData.author_image}
                  alt={postData.author_name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">By {postData.author_name}</p>
                  <p className="-mt-0.5 text-sm">{postData.author_title}</p>
                </div>
              </div>
            )}
            <p className="text-lg text-gray-700">{postData.intro}</p>
            <div className="mt-8 text-gray-700" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </Container>
      </section>
    </main>
  )
}
