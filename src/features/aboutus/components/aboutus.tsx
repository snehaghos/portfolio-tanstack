"use client"
import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import aboutUsData from "@/data/aboutus-data.json"
import { AboutContent } from "./about-content"

export default function AboutSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = aboutUsData.testimonials

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="space-y-12 sm:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
   
      <section>
        <h2 className="section-heading mb-6 sm:mb-8 text-3xl sm:text-4xl border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-[#78cc6d]">About</span> <span className="text-black">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 leading-relaxed md:leading-[1.8]">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-base sm:text-lg font-bold text-black">
              Hello! I'm Ryan Adlard.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Web designer from USA, California. I have rich experience in web site design and building, also I am good
              at wordpress. I love to talk with you about our unique.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="border-b-2 border-gray-300 pb-2 sm:pb-3">
              <span className="uppercase font-semibold text-[10px] sm:text-xs text-[#78cc6d] block tracking-wider mb-1 sm:mb-2">Age:</span>
              <span className="text-black font-semibold text-sm sm:text-base">24</span>
            </div>
            <div className="border-b-2 border-gray-300 pb-2 sm:pb-3">
              <span className="uppercase font-semibold text-[10px] sm:text-xs text-[#78cc6d] block tracking-wider mb-1 sm:mb-2">Residence:</span>
              <span className="text-black font-semibold text-sm sm:text-base">USA</span>
            </div>
            <div className="border-b-2 border-gray-300 pb-2 sm:pb-3">
              <span className="uppercase font-semibold text-[10px] sm:text-xs text-[#78cc6d] block tracking-wider mb-1 sm:mb-2">Freelance:</span>
              <span className="text-black font-semibold text-sm sm:text-base">Available</span>
            </div>
            <div className="border-b-2 border-gray-300 pb-2 sm:pb-3">
              <span className="uppercase font-semibold text-[10px] sm:text-xs text-[#78cc6d] block tracking-wider mb-1 sm:mb-2">Address:</span>
              <span className="text-black font-semibold text-sm sm:text-base">California, USA</span>
            </div>
          </div>
        </div>
      </section>

      <AboutContent />

      <section>
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-black">Testimonials</span>
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="relative bg-white p-4 sm:p-8 md:p-12 rounded-xl border border-border shadow-sm max-w-3xl mx-auto">
                    <Quote className="w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-primary/10 absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8" />
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                      <p className="text-xs sm:text-base md:text-lg text-foreground/70 leading-relaxed italic relative z-10 pl-2 sm:pl-4 md:pl-8 text-justify">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 pl-2 sm:pl-4 md:pl-8">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 rounded-full object-cover border-4 border-[#f5f5f5] flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-xs sm:text-base md:text-lg text-foreground truncate">{testimonial.author}</p>
                          <p className="text-[8px] sm:text-xs md:text-xs text-foreground/50 uppercase tracking-wider">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full border-2 border-[#78cc6d] text-[#78cc6d] hover:bg-[#78cc6d] hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? "bg-[#78cc6d] w-6 md:w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full border-2 border-[#78cc6d] text-[#78cc6d] hover:bg-[#78cc6d] hover:text-white transition-all duration-300 flex items-center justify-center flex-shrink-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
