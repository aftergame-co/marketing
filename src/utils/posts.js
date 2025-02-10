// matter is a library that let's you parse the metadata in each markdown file.
// the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils

import fs from 'fs';
import path from 'path';

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from 'gray-matter';

// Import 'remark', library for rendering markdown
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import addClasses from 'rehype-add-classes';
import { table } from 'console';

// --------------------------------
// GET THE PATH OF THE POSTS FOLDER
const postsDirectory = path.join(process.cwd(), 'posts') // process.cwd() returns the absolute path of the current working directory

// -------------------------------------------------
// GET THE DATA OF ALL POSTS IN SORTED ORDER BY DATE
/*
  Returns an array that looks like this:
  [
    {
      id: 'ssg-ssr',
      title: 'When to Use Static Generation v.s. Server-side Rendering',
      date: '2020-01-01'
    },
    {
      id: 'pre-rendering',
      title: 'Two Forms of Pre-rendering',
      date: '2020-01-02'
    }
  ]
*/

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

  // Get the data from each file
  const allPostsData = fileNames.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '') // id = 'pre-rendering', 'ssg-ssr'

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename)
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, 'utf8') // .md string content

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data),
    }
  })

  // Sort posts by date and return
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// ------------------------------------------------
// GET THE IDs OF ALL POSTS FOR THE DYNAMIC ROUTING
/*
  Returns an array that looks like this:
  [
    {
      params: {
        id: 'ssg-ssr'
      }
    },
    {
      params: {
        id: 'pre-rendering'
      }
    }
  ]
  */

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

// The returned array must have the params key otherwise `getStaticPaths` will fail

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkExtendedTable)
    .use(remarkRehype, {allowDangerousHtml: true, handlers: {
      // any other handlers
      ...extendedTableHandlers,
    }})
    .use(rehypeStringify, {allowDangerousHtml: true})
    .use(addClasses, {
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
        img: 'mx-auto rounded',
    })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data),
  }
}