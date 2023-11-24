import { Container } from '@/components/Container';
import Image from 'next/image';
import Date from '@/components/Date';
import { getPostData } from '@/utils/posts';
import { Metadata } from 'next'

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id)

  return {
    title: postData.title,
    description: postData.intro,
    alternates: {
      canonical: `/blog/${postData.id}`
    },
    openGraph: {
      title: postData.title,
      description: postData.intro,
      images: [
        {
          url: `https://www.aftergame.co/_next/image?url=${postData.image}`,
          alt: postData.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

// -< Post >-
export default async function Post({ params }) {
  const postData = await getPostData(params.id)

  return (
    <main className='pt-20'>
      <section
        id="blog"
        aria-label="Blog posts"
        className="pt-12 pb-20"
      >
        <Container>
          <div className='md:px-24 xl:px-32'>
            {postData.image && (
              <Image
                src={postData.image}
                alt={postData.title}
                width={2000}
                height={1000}
                className='rounded-2xl'
              />
            )}
            <p className='text-md text-gray-500 font-medium mt-8'>
              <Date dateString={postData.date} />
            </p>
            <h1 className="text-3xl lg:text-4xl font-medium tracking-tighter md:tracking-tight text-gray-900 mt-2 mb-4">
              {postData.title}
            </h1>
            {postData.author_name && (
              <div className='flex gap-x-3 items-center mb-12'>
                <Image 
                  src={postData.author_image}
                  alt={postData.author_name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <p className='text-sm font-semibold'>By {postData.author_name}</p>
                  <p className='text-sm -mt-0.5'>{postData.author_title}</p>
                </div>
              </div>
            )}
            <p className='text-lg text-gray-700'>{postData.intro}</p>
            <div
              className='text-gray-700 mt-8'
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
        </Container>
      </section>
    </main>
  )
}