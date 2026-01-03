"use client"

import { useState } from "react"
import { ImageIcon, Video, Music } from "lucide-react"
import { MediaLightbox } from "@/components/media-lightbox"
import worksData from "@/data/works-data.json"

export function WorksSection() {
  const [filter, setFilter] = useState("All")
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const categories = worksData.categories

  const iconMap: Record<string, any> = {
    ImageIcon,
    Video,
    Music,
  }

  const items = worksData.items.map(item => ({
    ...item,
    icon: iconMap[item.icon] || ImageIcon
  }))

  const filteredItems = filter === "All" ? items : items.filter((item) => item.category === filter)

  return (
    <div className="space-y-4 sm:space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <MediaLightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem} 
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 pb-4 sm:pb-6">
        <h2 className="section-heading tracking-tight text-3xl sm:text-4xl">
          <span className="text-[#78cc6d]">Recent</span> <span className="text-black">Works</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors ${
                filter === cat ? "text-foreground" : "body-text"
              } hover:text-foreground`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Works Grid - 2 Column Gallery Layout on md+, 1 Column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-border">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className={`${i % 2 === 0 ? "md:border-r" : ""} p-0`}
          >
            {/* Work Item */}
            <div className="p-6 flex flex-col gap-4 h-full">
              {/* Image with Icon Overlay - Keep Natural Aspect Ratio */}
              <div
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden bg-gray-100 cursor-pointer w-full"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-center">
                <h3 className="value-text mb-1">{item.title}</h3>
                <p className="label-text text-center">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
