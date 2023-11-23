import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '@/utils/posts';

export const metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog'
  },
}

export default function Blog() {
  const allPostsData = getSortedPostsData()

  return (
    <main className='pt-20'>
      <section
        id="blog"
        aria-label="Blog posts"
        className="py-20 sm:py-32"
      >
        <Container>
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-medium tracking-tighter md:tracking-tight text-gray-900">
            The Aftergamer
          </h1>
          <p className="mt-6 mb-16 lg:w-4/5 text-xl text-gray-600">
            Thoughts on the future of social tabletop gaming, from the people helping to create it.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {allPostsData.map(({ id, date, title, intro, image }) => (
              <li className='group col-span-1 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-100' key={id}>
                <Link href={`/blog/${id}`}>
                  {image && (
                    <Image
                      src={image}
                      alt={title}
                      width={600}
                      height={300}
                      className='rounded-t-2xl group-hover:opacity-80'
                    />
                  )}

                  <h3 className="mt-8 mx-8 font-semibold text-lg">
                    {title}
                  </h3>
                  <p className='m-8 mt-2 text-gray-700'>{intro}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  )
}