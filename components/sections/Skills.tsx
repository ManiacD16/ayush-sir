"use client"

import { useState } from "react"
import { Shield, Database, Globe, Wallet, Coins, Code, Server } from "lucide-react"

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "Solidity", icon: Shield, level: 95, color: "bg-chart-1" },
    { name: "Public Blockchain", icon: Database, level: 90, color: "bg-chart-2" },
    { name: "Web3", icon: Globe, level: 92, color: "bg-chart-3" },
    { name: "Crypto Wallet", icon: Wallet, level: 88, color: "bg-chart-4" },
    { name: "Coins & Tokens", icon: Coins, level: 85, color: "bg-chart-5" },
    { name: "JavaScript", icon: Code, level: 93, color: "bg-secondary" },
    { name: "Node.js", icon: Server, level: 90, color: "bg-accent" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${skill.color} text-white mr-4`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-xl text-card-foreground">{skill.name}</h3>
                </div>

                <div className="relative">
                  <div className="bg-border rounded-full h-3 mb-2">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                  <span className="font-dm-sans text-sm text-muted-foreground">{skill.level}% Proficiency</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
