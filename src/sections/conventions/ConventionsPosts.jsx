import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '@/utils/posts';


export function ConventionsPosts() {
  const allPostsData = getSortedPostsData();

  return (
    <section
      id="secondary-features"
      aria-label="Posts to help with your tabletop events"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Posts to help with your tabletop events
          </h2>
        </div>
        <ul className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {allPostsData.filter(p => p.category.includes("conventions")).map(({ id, date, title, intro, image }) => (
            <li className='group col-span-1 rounded-2xl bg-white text-gray-900 hover:bg-gg-blue-faint border-2 border-gray-100 transition-colors' key={id}>
              <Link href={`/blog/${id}`}>
                {image && (
                  <div className="relative h-80">
                    <Image
                      src={image}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                      className='rounded-t-2xl group-hover:opacity-80 transition-opacity'
                    />
                  </div>
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
  )
}
