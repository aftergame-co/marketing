import Link from 'next/link'
import clsx from 'clsx'
import Image from '@/components/Image'
import { formatReleaseDate } from '@/utils/releases'

// Pill colours per change type (tokens in src/styles/tailwind.css, matching the app)
const PILL_CLASSES = {
  feature: 'bg-changelog-feature text-on-changelog-feature',
  improvement: 'bg-changelog-improvement text-on-changelog-improvement',
  fix: 'bg-changelog-fix text-on-changelog-fix',
}

/**
 * One release: images, heading, date/build, blurb, then each section's changes with New/Improved/Fixed pills.
 * `children` (story) render between the blurb and the sections. `eagerImage` loads the first image
 * eagerly (pass it when the entry is the first thing on the page).
 */
export function ReleaseEntry({ release, labels, blurbHtml, as: Heading = 'h2', href, eagerImage, children }) {
  const SectionHeading = Heading === 'h1' ? 'h2' : 'h3'
  const title = `Version ${release.version}`

  return (
    <div>
      <Heading className="text-3xl font-medium tracking-tight text-gray-900">
        {href ? (
          <Link href={href} className="hover:text-gg-blue">
            {title}
          </Link>
        ) : (
          title
        )}
      </Heading>
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-gray-500">
        <time dateTime={release.date}>{formatReleaseDate(release.date)}</time>
        {release.build && <span>· Build {release.build}</span>}
      </p>
      {release.images.map((image, index) => (
        <figure key={image.src} className="mt-2 mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 768px) 42rem, 100vw"
            loading={eagerImage && index === 0 ? 'eager' : undefined}
            className="mx-auto max-h-[80vh] w-auto rounded-2xl border border-gray-200"
          />
          {image.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">{image.caption}</figcaption>
          )}
        </figure>
      ))}
      {blurbHtml && (
        <div className="mt-4 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: blurbHtml }} />
      )}
      {children}
      {release.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mt-8">
          <SectionHeading className="text-lg font-semibold text-gray-900">{section.title}</SectionHeading>
          <ul role="list" className="mt-3 space-y-3">
            {section.changes.map((change, changeIndex) => (
              <li key={changeIndex} className="flex gap-x-3 text-sm text-gray-700">
                <span
                  className={clsx(
                    'mt-0.5 h-fit w-18 shrink-0 rounded-full py-0.5 text-center text-xs font-medium',
                    PILL_CLASSES[change.type],
                  )}
                >
                  {labels[change.type]}
                </span>
                <span>{change.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
