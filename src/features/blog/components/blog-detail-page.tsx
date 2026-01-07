"use client"

import { useNavigate } from "@tanstack/react-router"
import { ChevronLeft } from "lucide-react"
import blogData from "@/data/blog-data.json"

interface BlogDetailPageProps {
  postId: number
}

export function BlogPostDetailPage({ postId }: BlogDetailPageProps) {
  const navigate = useNavigate()
  
  const post = blogData.posts.find(p => p.id === postId)
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate({ to: "/", search: { tab: "BLOG" } })}
            className="flex items-center gap-2 bg-[#78cc6d] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16">
        <button
          onClick={() => navigate({ to: "/", search: { tab: "BLOG" } })}
          className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 sm:mb-12 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          BACK
        </button>

        <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div>
            <h2 className="section-heading border-b border-border pb-4 sm:pb-6 text-3xl sm:text-4xl">
              <span className="text-[#78cc6d]">Blog</span> <span className="text-black">Post</span>
            </h2>
          </div>

          {/* ppost title */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-foreground/60">
              <span>{post.date}</span>
              <span>•</span>
              <span className="text-[#78cc6d] font-semibold uppercase">{post.category}</span>
              <span>•</span>
              <span>BY {post.author.toUpperCase()}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 prose prose-sm max-w-none description-text">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="bg-gray-900 text-gray-100 p-4 sm:p-6 rounded-lg overflow-x-auto">
              <pre className="font-mono text-xs sm:text-sm whitespace-pre-wrap">
                <code>{post.codeSnippet}</code>
              </pre>
            </div>

            {post.footer && <div dangerouslySetInnerHTML={{ __html: post.footer }} />}

            {post.tags && (
              <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-border">
                <span className="text-xs sm:text-sm font-semibold text-foreground">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 border border-[#78cc6d] text-[#78cc6d] rounded text-[10px] sm:text-xs font-semibold hover:bg-primary/10 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-border">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-xs sm:text-sm font-semibold text-foreground">Share:</span>
                <div className="flex gap-3 sm:gap-4">
                  {["f", "twitter", "linkedin", "reddit", "pinterest"].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-foreground/40 hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
            <h3 className="text-lg sm:text-xl font-bold text-[#78cc6d]">Comments</h3>

            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200">
                <span className="font-bold text-gray-800 text-sm sm:text-lg">0 Comments</span>
                <button className="flex items-center gap-2 text-red-500 font-bold hover:text-red-600 transition-colors text-sm sm:text-base">
                  <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">i</span>
                  Login
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg shrink-0">
                    G
                  </div>
                  <input
                    type="text"
                    placeholder="Start the discussion..."
                    className="flex-1 px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <span className="text-gray-700 font-bold text-xs md:text-sm whitespace-nowrap">LOG IN WITH</span>
                    <div className="flex gap-2 md:gap-3 flex-wrap">
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-blue-700 transition-colors">D</button>
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">f</button>
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">𝕏</button>
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-red-700 transition-colors">G</button>
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-gray-400 rounded-lg flex items-center justify-center text-white text-xs hover:bg-gray-500 transition-colors">⊞</button>
                      <button className="w-9 h-9 md:w-10 md:h-10 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm hover:bg-gray-500 transition-colors">🇰</button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-bold text-xs md:text-sm">OR SIGN UP WITH DISQUS</span>
                      <span className="text-gray-400 cursor-help text-lg md:text-base">?</span>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full md:w-56 px-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm md:text-base placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <button className="text-red-500 hover:text-red-600 text-xl transition-colors">♥</button>
                    <button className="text-gray-600 hover:text-gray-800 text-xs md:text-sm font-bold transition-colors">• Share</button>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 text-gray-700 text-xs md:text-sm font-bold">
                    <button className="hover:text-gray-900 transition-colors">Best</button>
                    <button className="hover:text-gray-900 transition-colors">Newest</button>
                    <button className="hover:text-gray-900 transition-colors">Oldest</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
