"use client"
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react"
import { useState } from "react"

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Dr. APJ Abdul Kalam University, Meerut",
      location: "Meerut, UP",
      duration: "07/2018 - 07/2022",
      level: "undergraduate",
      highlight: "Major in Software Development & Data Structures"
    },
    {
      degree: "Intermediate",
      field: "Science Stream",
      institution: "SASMIC, Lucknow", 
      location: "Lucknow, UP",
      duration: "2018",
      level: "secondary",
      highlight: "Physics, Chemistry, Mathematics"
    },
    {
      degree: "High School",
      field: "General Studies",
      institution: "Aadars Anglo Intermediate College",
      location: "UP, India",
      duration: "2016",
      level: "primary",
      highlight: "Academic Excellence Award"
    },
  ]

  const getLevelColor = (level: any) => {
    switch(level) {
      case 'undergraduate': return 'from-blue-500 to-purple-600'
      case 'secondary': return 'from-green-500 to-teal-600'
      case 'primary': return 'from-orange-500 to-red-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getLevelBadge = (level: any) => {
    switch(level) {
      case 'undergraduate': return 'University'
      case 'secondary': return 'Higher Secondary'
      case 'primary': return 'Secondary'
      default: return 'Education'
    }
  }

  return (
    <section id="education" className="py-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl bg-clip-text ">
              Education Journey
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="font-dm-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative transform transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg z-20 border-4 border-white"></div>
                
                {/* Education card */}
                <div className={`md:ml-16 bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 relative z-10 ${
                  hoveredIndex === index ? 'shadow-blue-500/20 border-blue-500/30' : ''
                }`}>
                  
                  {/* Level badge */}
                  <div className="flex justify-between items-start mb-6 relative z-20">
                    <span className={`px-4 py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${getLevelColor(edu.level)} shadow-lg`}>
                      {getLevelBadge(edu.level)}
                    </span>
                    <div className={`transition-transform duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                      <Award className="text-yellow-500" size={24} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 relative z-20">
                    {/* Main info */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-2 leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className="font-dm-sans text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {edu.field}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="font-dm-sans text-muted-foreground font-medium text-lg">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={14} />
                          <span className="font-dm-sans text-sm">{edu.location}</span>
                        </div>
                      </div>

                      {edu.highlight && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-4 rounded-xl border-l-4 border-blue-500">
                          <p className="font-dm-sans text-sm text-muted-foreground italic">
                            {edu.highlight}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Duration info */}
                    <div className="flex flex-col justify-center items-end">
                      <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl p-6 text-center border border-secondary/20">
                        <Calendar className="mx-auto mb-3 text-secondary" size={28} />
                        <span className="font-dm-sans font-semibold text-card-foreground block text-lg">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Animated border on hover - positioned behind content */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] transition-opacity duration-300 -z-10 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="h-full w-full rounded-2xl bg-card/90 backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-secondary rounded-full"></div>
            <span className="font-dm-sans text-sm">Building Tomorrow's Technology</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education