// matter is a library that let's you parse the metadata in each markdown file.
// the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils

import fs from 'fs'
import path from 'path'

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from 'gray-matter'

import { markdownToHtml } from '@/utils/markdown'
import { SITE_URL, isoDate } from '@/utils/site'

// Front matter of a post in /posts (see CLAUDE.md)
export type PostMeta = {
  id: string
  title: string
  /** 'yyyy-MM-dd' */
  date: string
  image: string
  intro: string
  category: string[]
  author_name: string
  author_image: string
  author_title: string
}

export type Post = PostMeta & { contentHtml: string }

// gray-matter turns an unquoted date into a Date, so normalise it to 'yyyy-MM-dd'
function postMeta(id: string, data: Record<string, unknown>): PostMeta {
  return { id, ...(data as Omit<PostMeta, 'id'>), date: isoDate(data.date) }
}

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

export function getSortedPostsData(): PostMeta[] {
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
    return postMeta(id, matterResult.data)
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
// Returns [{ id: 'ssg-ssr' }, { id: 'pre-rendering' }], the shape `generateStaticParams` expects

export function getAllPostIds() {
  return fs.readdirSync(postsDirectory).map((fileName) => ({ id: fileName.replace(/\.md$/, '') }))
}

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
// `feed`: plain HTML with absolute URLs, for the RSS feed
export async function getPostData(id: string, { feed = false } = {}): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Convert the markdown body into HTML
  const contentHtml = await markdownToHtml(
    matterResult.content,
    feed ? { classes: false, baseUrl: SITE_URL } : undefined,
  )

  // Combine the data with the id
  return { ...postMeta(id, matterResult.data), contentHtml }
}
