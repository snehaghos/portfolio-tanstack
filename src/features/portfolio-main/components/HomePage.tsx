'use client'
import { useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  Github,
  Twitter,
  Instagram,
  SproutIcon as Spotify,
  Globe,
} from 'lucide-react'

export default function HomePage() {
  const navigate = useNavigate()
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const subtitles = ['Blogger', 'Freelancer', 'Web Designer', 'Photographer']

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
   <div className="w-full lg:w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 h-[580px] sm:h-[600px] transition-all duration-500 hover:shadow-[0_0_100px_rgba(0,0,0,0.12)]">
      <div className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[480px] profile-clip overflow-hidden">
        <img
          src="/images/fornowpt.png"
          alt="Ryan Adlard"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-6 sm:pt-8 text-center flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold tracking-tight mb-2 sm:mb-3 text-[#323232] leading-tight">Ryan Adlard</h1>
          <div className="h-5 sm:h-6 flex items-center justify-center mb-6 sm:mb-8">
            <p key={subtitleIndex} className="text-[#78cc6d] font-semibold text-sm sm:text-base animate-fade-in-out">
              {subtitles[subtitleIndex]}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Spotify"
            >
              <Spotify className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      <div className="mt-auto border-t border-gray-100 flex h-16 sm:h-20">
        <button className="flex-1 font-semibold uppercase tracking-[0.15em] text-[9px] sm:text-[11px] text-foreground hover:text-primary transition-all border-r border-gray-100 group relative overflow-hidden">
          <span className="relative z-10">Download CV</span>
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        <button 
          onClick={() => navigate({ to: "/", search: { tab: "CONTACT" } })}
          className="flex-1 font-semibold uppercase tracking-[0.15em] text-[9px] sm:text-[11px] text-foreground hover:text-primary transition-all group relative overflow-hidden"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </div> 
    </div>
     )
}
