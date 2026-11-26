import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { CallToAction } from '@/sections/CallToAction'
import Image from '@/components/Image'
import Link from 'next/link'
import { getSortedPostsData } from '@/utils/posts'
import { RssLink } from '@/components/RssLink'
import { FEEDS, pageAlternates } from '@/utils/site'

export const metadata: Metadata = {
  title: 'Blog',
  alternates: pageAlternates('/blog', [FEEDS.blog]),
}

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <main className="pt-20">
      <section id="blog" aria-label="Blog posts" className="py-20 sm:py-32">
        <Container>
          <h1 className="text-5xl font-medium tracking-tighter text-gray-900 md:text-5xl md:tracking-tight xl:text-6xl">
            The Aftergamer
          </h1>
          <p className="mt-6 text-xl text-gray-600 lg:w-4/5">
            Thoughts on the future of social tabletop gaming, from the people helping to create it.
          </p>
          <RssLink href="/blog/feed.xml" className="mt-3 mb-16 text-sm font-medium text-gray-500 hover:text-orange-500">
            Subscribe via RSS
          </RssLink>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {allPostsData.map(({ id, title, intro, image }, index) => (
              <li
                className="group col-span-1 rounded-2xl border-2 border-gray-100 bg-white text-gray-900 transition-colors hover:bg-gg-blue-faint"
                key={id}
              >
                <Link href={`/blog/${id}`}>
                  {image && (
                    <div className="relative h-80">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        loading={index < 2 ? 'eager' : undefined}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="rounded-t-2xl object-cover transition-opacity group-hover:opacity-80"
                      />
                    </div>
                  )}

                  <h3 className="mx-8 mt-8 text-lg font-semibold">{title}</h3>
                  <p className="m-8 mt-2 text-gray-700">{intro}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CallToAction />
    </main>
  )
}
