import React from 'react'
import BlogListStatic from '../components/blog-list-static'
import RefreshBtn from '../components/refresh-btn'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <section className="flex">
        <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
          <BlogListStatic />
          <div className="flex justify-center">
            <RefreshBtn />
          </div>
        </aside>
        <main className="flex flex-1 justify-center">{children}</main>
      </section>
    </div>
  )
}

export default layout
