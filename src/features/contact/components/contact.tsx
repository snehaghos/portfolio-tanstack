"use client"
import type React from "react"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <h2 className="section-heading border-b border-border pb-4 sm:pb-6">
        <span className="text-[#78cc6d]">Get</span> <span className="text-black">in Touch</span>
      </h2>

      <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689252326584!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-12 py-6 sm:py-8">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#78cc6d] text-white text-xs font-bold rounded">Address:</span>
          <p className="value-text">California, USA</p>
        </div>
        
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#78cc6d] text-white text-xs font-bold rounded">Email:</span>
          <p className="value-text">adlard@example.com</p>
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#78cc6d] text-white text-xs font-bold rounded">Phone:</span>
          <p className="value-text">+123 654 78900</p>
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#78cc6d] text-white text-xs font-bold rounded">Freelance:</span>
          <p className="value-text">Available</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-8">
        <h3 className="text-lg sm:text-xl font-bold">
          <span className="text-[#78cc6d]">Contact</span> <span className="text-black">Form</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#78cc6d] transition-colors"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#78cc6d] transition-colors"
            />
          </div>

          <textarea
            required
            rows={6}
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-[#78cc6d] transition-colors resize-none"
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 bg-gray-200 text-gray-800 px-8 py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-gray-300 transition-colors disabled:opacity-60"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>

            {isSubmitted && (
              <p className="text-[#78cc6d] font-bold text-sm animate-in fade-in slide-in-from-left-4">
                Message sent successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
