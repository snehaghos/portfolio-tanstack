'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import HomePage from './HomePage'
import AboutSection from '@/features/aboutus/components/aboutus'
import { SidebarNav } from '@/components/Sidebarnav'
import { SidebarDrawer } from '@/components/sidebar-drawer'
import { ResumeSection } from '@/features/resume/components/resume'
import { WorksSection } from '@/features/works/components/works'
import { BlogSection } from '@/features/blog/components/blog'
import { ContactSection } from '@/features/contact/components/contact'
export function PortfolioLayout() {
  const [activeTab, setActiveTab] = useState('ABOUT') 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) 

  return (
    <div className="min-h-screen bg-[#78cc6d] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 lg:pl-24 lg:pr-8 transition-all duration-500 relative overflow-hidden">
      <div
        className="floating-shape"
        style={{
          width: '500px',
          height: '500px',
          top: '-15%',
          left: '-10%',
        }}
      />
      <div
        className="floating-shape"
        style={{
          width: '300px',
          height: '300px',
          bottom: '-5%',
          right: '-5%',
        }}
      />
      <div
        className="floating-shape"
        style={{
          width: '200px',
          height: '200px',
          top: '40%',
          left: '50%',
        }}
      />
      <div
        className="floating-shape"
        style={{
          width: '500px',
          height: '500px',
          top: '5%',
          right: '15%',
        }}
      />
      <div
        className="floating-shape"
        style={{
          width: '10px',
          height: '0px',
          bottom: '30%',
          left: '20%',
        }}
      />
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex flex-col items-center lg:flex-row gap-0 max-w-6xl w-full lg:h-[600px] animate-in fade-in duration-1000 relative z-10">
        {/* Mobile Menu Button */}
        <div className="md:hidden fixed top-4 left-4 z-[100]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-3 bg-white rounded-lg shadow-lg hover:text-primary transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <SidebarNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        
        />

        <div className="lg:-mr-6 relative z-20 w-full lg:w-auto">
          <HomePage />
        </div>

        <main className="flex-1 bg-white rounded-2xl lg:rounded-l-none overflow-hidden md:h-[560px] h-auto relative shadow-2xl mt-6 lg:mt-0">
          <div className="h-full overflow-y-auto custom-scrollbar p-4 sm:p-6 md:p-8 lg:p-12 lg:pl-20 ">
            {activeTab === 'ABOUT' && <AboutSection />}
             {activeTab === "RESUME" && <ResumeSection />}
           {activeTab === "WORKS" && <WorksSection />}
             {activeTab === "BLOG" && <BlogSection />}
           {activeTab === "CONTACT" && <ContactSection />}
          </div>
        </main>
      </div>
    </div>
  )
}
