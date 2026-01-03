"use client"

import { useState } from "react"
import { BlogPostDetail } from "./blog-post"
import blogData from "@/data/blog-data.json"

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const posts = blogData.posts

  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
  }

  
  return (
    <div className="space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <h2 className="section-heading border-b border-border pb-4 sm:pb-6 text-3xl sm:text-4xl">
        <span className="text-[#78cc6d]">Latest</span> <span className="text-black">Posts</span>
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {posts.map((post, i) => (
          <div
            key={i}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer pb-6 sm:pb-8 border-b border-border last:border-b-0 transition-all duration-300 hover:opacity-80"
          >
            <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6 h-48 sm:h-64 md:h-80">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded text-center font-bold shadow-lg">
                <div className="text-xs sm:text-sm text-foreground">{post.date.split(" ")[0]}</div>
                <div className="text-[10px] sm:text-xs text-foreground/60">{post.date.split(" ")[1]}</div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="label-text">{post.category}</p>
              <p className="description-text">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
