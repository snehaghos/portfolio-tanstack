"use client"
import { Code, Music, Gamepad2, Megaphone, Trophy, Coffee, Flag, Gauge } from "lucide-react"
import aboutUsData from "@/data/aboutus-data.json"

const iconMap: { [key: string]: any } = {
  Code, Music, Gamepad2, Megaphone, Trophy, Coffee, Flag, Gauge
}

export function AboutContent() {
  const services = aboutUsData.services.map(s => ({
    ...s,
    icon: iconMap[s.icon]
  }))
  const pricing = aboutUsData.pricing.map(p => ({
    ...p,
    icon: iconMap[p.icon]
  }))
  const funFacts = aboutUsData.funFacts.map(f => ({
    ...f,
    icon: iconMap[f.icon]
  }))
  const clients = aboutUsData.clients

  return (
    <>
      <section>
        <h2 className="section-heading text-3xl sm:text-4xl mb-6 sm:mb-8 border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-[#78cc6d]">My</span> <span className="text-black">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-start p-4 sm:p-6 border border-border hover:border-primary/30 rounded-lg transition-all duration-300"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#78cc6d] flex items-center justify-center text-white mb-4 sm:mb-6">
                <service.icon className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <h3 className="uppercase text-xs sm:text-sm tracking-wider mb-3 sm:mb-4 text-foreground">{service.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading border-b border-gray-300 pb-4 sm:pb-6 mb-6 sm:mb-8">
          <span className="text-[#78cc6d]">Pricing</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pricing.map((plan, i) => (
            <div key={i} className="border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <plan.icon className="w-10 sm:w-12 h-10 sm:h-12 text-[#78cc6d]" />
              </div>
              <h3 className="text-lg sm:text-xl text-black text-center mb-3 sm:mb-4">{plan.title}</h3>
              <div className="text-center mb-6 sm:mb-8">
                <span className="text-2xl sm:text-4xl font-black text-black">$</span>
                <span className="text-2xl sm:text-4xl font-black text-black">{plan.price}</span>
                <span className="text-xs sm:text-base text-gray-600 ml-2">hour</span>
              </div>
              <ul className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-gray-400">•</span>
                    <span className={`text-xs sm:text-sm ${feature.included ? "text-gray-700" : "text-gray-400 line-through"}`}>
                      {feature.name}
                    </span>
                    {feature.isNew && <span className="bg-[#78cc6d] text-white text-[10px] sm:text-xs px-2 py-1 rounded">new</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-[#78cc6d]">Fun</span> <span className="text-black">Fact</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 divide-x divide-gray-300 md:divide-x">
          {funFacts.map((fact, i) => (
            <div key={i} className="text-center py-4 sm:py-6 md:py-12 px-2 sm:px-4">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-6">
                <fact.icon className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 text-[#78cc6d]" />
              </div>
              <div className="text-xs sm:text-sm md:text-lg font-extrabold text-[#78cc6d] mb-1 sm:mb-2">{fact.value}</div>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading text-3xl sm:text-4xl mb-6 sm:mb-8 border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-black">Clients</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 sm:p-6 border border-border rounded-lg hover:border-primary transition-colors grayscale hover:grayscale-0"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full h-8 sm:h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
