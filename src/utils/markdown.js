import { remark } from 'remark'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import addClasses from 'rehype-add-classes'

// Tailwind classes for rendered articles (blog posts, release stories)
export const ARTICLE_CLASSES = {
  h1: 'mt-10 mb-2 text-3xl font-medium text-gray-900',
  h2: 'mt-10 mb-2 text-2xl font-medium text-gray-900',
  h3: 'mt-10 mb-2 text-xl font-medium text-gray-800',
  h4: 'mt-10 mb-2 text-lg font-medium text-gray-700',
  p: 'text-md mb-4',
  ul: 'list-disc list-inside mb-4',
  ol: 'list-decimal list-inside mb-4',
  li: 'ml-6 mb-3',
  strong: 'font-semibold',
  a: 'text-gg-blue font-medium hover:underline',
  hr: 'my-8',
  blockquote: 'pt-4 px-4 pb-px bg-gray-200 rounded-lg text-lg font-medium',
  table: 'table-auto block sm:table',
  td: 'inline-block min-w-full sm:table-cell sm:min-w-32 lg:min-w-64 p-2 pb-6',
  img: 'mx-auto rounded-sm',
}

// Prefix root-relative href/src with baseUrl (feeds need absolute URLs)
function rehypeAbsoluteUrls(baseUrl) {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element') {
        for (const prop of ['href', 'src']) {
          const value = node.properties?.[prop]
          if (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//')) {
            node.properties[prop] = baseUrl + value
          }
        }
      }
      node.children?.forEach(walk)
    }
    walk(tree)
  }
}

/**
 * Render markdown to HTML.
 * - `breaks`: single line breaks become <br> (matches how the app renders release blurbs)
 * - `classes`: Tailwind class map, or `false` for plain HTML (feeds)
 * - `baseUrl`: make root-relative links and images absolute (feeds)
 */
export async function markdownToHtml(markdown, { breaks = false, classes = ARTICLE_CLASSES, baseUrl } = {}) {
  let processor = remark().use(remarkParse).use(remarkGfm)
  if (breaks) processor = processor.use(remarkBreaks)
  processor = processor
    .use(remarkExtendedTable)
    .use(remarkRehype, { allowDangerousHtml: true, handlers: { ...extendedTableHandlers } })
  if (baseUrl) processor = processor.use(rehypeAbsoluteUrls, baseUrl)
  processor = processor.use(rehypeStringify, { allowDangerousHtml: true })
  if (classes) processor = processor.use(addClasses, classes)

  return String(await processor.process(markdown))
}

const BLOCK_TYPES = new Set(['paragraph', 'heading', 'listItem', 'blockquote', 'tableCell', 'code', 'thematicBreak'])

// Plain text from markdown (meta descriptions, feed summaries): no `**`, spaces between blocks
export function markdownToText(markdown) {
  const parts = []
  const walk = (node) => {
    if (node.type === 'text' || node.type === 'inlineCode' || node.type === 'code') parts.push(node.value)
    else if (node.type === 'break') parts.push(' ')
    node.children?.forEach(walk)
    if (BLOCK_TYPES.has(node.type)) parts.push(' ')
  }
  walk(remark().use(remarkGfm).parse(markdown ?? ''))
  return parts.join('').replace(/\s+/g, ' ').trim()
}
