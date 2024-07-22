import React from 'react'
import type { Database } from '../../database.types'
import { format } from 'date-fns'
import { resolve } from 'path'
import Link from 'next/link'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

const BlogListStatic = async () => {
  const blogs = await fetchBlogs()
  return (
    <div className="p-4">
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul className="m-3">
        {blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogListStatic
