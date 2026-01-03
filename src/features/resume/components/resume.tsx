import { GraduationCap, Briefcase, Code, Palette, Globe, Check } from "lucide-react"
import resumeData from "@/data/resume-data.json"

export function ResumeSection() {
  const experience = resumeData.experience
  const education = resumeData.education
  const designSkills = resumeData.designSkills
  const codingSkills = resumeData.codingSkills
  const languages = resumeData.languages
  const knowledge = resumeData.knowledge

  const CircularProgress = ({ percentage, label }: { percentage: number; label: string }) => {
    const radius = 58
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percentage / 100) * circumference
    const size = 140

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative" style={{ width: size, height: size }}>
          <svg className="transform -rotate-90" width={size} height={size}>
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f0f0f0" strokeWidth="6" />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#78cc6d"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold text-foreground">{percentage}%</span>
          </div>
        </div>
        <p className="text-xs text-center text-foreground/60 font-medium max-w-[120px]">{label}</p>
      </div>
    )
  }

  const DottedProgress = ({ level, label }: { level: number; label: string }) => {
    return (
      <div className="space-y-3">
        <p className="text-sm font-bold text-foreground/80">{label}</p>
        <div className="flex gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i < level ? "bg-[#78cc6d]" : "bg-[#e0e0e0]"
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <h2 className="section-heading">
        <span className="text-[#78cc6d]">Resume</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-b border-border">
        <section className="space-y-0 p-8 border-r border-border">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border">
            <Briefcase className="w-5 h-5" style={{ color: "#78cc6d" }} />
            <h3 className="font-bold uppercase text-sm tracking-wider">Experience</h3>
          </div>
          <div className="space-y-0">
            {experience.map((item, i) => (
              <div key={i} className="space-y-2 py-6 border-b border-border last:border-b-0">
                <span className="label-text block">
                  {item.period}
                </span>
                <h4 className="value-text">{item.title}</h4>
                <p className="value-text">{item.company}</p>
                <p className="description-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-0 p-8">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border">
            <GraduationCap className="w-5 h-5" style={{ color: "#78cc6d" }} />
            <h3 className="font-bold uppercase text-sm tracking-wider">Education</h3>
          </div>
          <div className="space-y-0">
            {education.map((item, i) => (
              <div key={i} className="space-y-2 py-6 border-b border-border last:border-b-0">
                <span className="label-text block">
                  {item.period}
                </span>
                <h4 className="value-text">{item.title}</h4>
                <p className="value-text">{item.company}</p>
                <p className="description-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-12 pt-8">
        <h2 className="section-heading border-b border-gray-300 pb-4 sm:pb-6">
          <span className="text-[#78cc6d]">My</span> <span className="text-black">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Palette className="w-6 h-6 text-primary" />
              <h3 className="font-bold uppercase text-base tracking-wider">Design</h3>
            </div>
            {designSkills.map((skill, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-foreground/80">{skill.name}</span>
                </div>
                <div className="h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#78cc6d] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="font-bold uppercase text-base tracking-wider">Languages</h3>
            </div>
            <div className="space-y-8">
              {languages.map((lang, i) => (
                <DottedProgress key={i} level={lang.level} label={lang.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h3 className="font-bold uppercase text-base tracking-wider mb-4 pb-4 border-b border-gray-300">Coding</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {codingSkills.map((skill, i) => (
              <CircularProgress key={i} percentage={skill.value} label={skill.name} />
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300">
          <h3 className="font-bold uppercase text-base tracking-wider mb-4 pb-4 border-b border-gray-300">Knowledge</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {knowledge.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
