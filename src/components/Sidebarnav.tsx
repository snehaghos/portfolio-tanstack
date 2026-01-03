"use client"
import { User, FileText, Briefcase, MessageSquare, AtSign, Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SidebarNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onMenuToggle: () => void 
}

export function SidebarNav({ activeTab, onTabChange, onMenuToggle }: SidebarNavProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = [
    { label: "ABOUT", icon: User },
    { label: "RESUME", icon: FileText },
    { label: "WORKS", icon: Briefcase },
    { label: "BLOG", icon: MessageSquare },
    { label: "CONTACT", icon: AtSign },
  ]

  return (
    <>
      <nav className="hidden md:absolute md:left-[-100px] md:top-1/2 md:-translate-y-1/2 md:z-50 md:flex flex-col gap-0 bg-white rounded-lg shadow-2xl overflow-hidden w-20">
   
        <button
          onClick={onMenuToggle}
          className="p-6 border-b border-gray-100 hover:text-primary transition-colors flex items-center justify-center"
        >
          <Menu className="w-6 h-6" />
        </button>

        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onTabChange(item.label)}
            className="p-5 transition-all flex flex-col items-center gap-1 border-b border-gray-100 last:border-0"
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              activeTab === item.label ? "text-primary" : "text-black hover:text-primary"
            )} />
            <span className={cn(
              "text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider transition-colors",
              activeTab === item.label ? "text-primary" : "text-black hover:text-primary"
            )}>{item.label}</span>
          </button>
        ))}

       
      </nav>


    </>
  )
}
