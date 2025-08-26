"use client"
import { useState } from "react"
import { Shield, Database, Globe, Wallet, Coins, Code, Server } from "lucide-react"

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  
  const skills = [
    { 
      name: "Solidity", 
      icon: Shield, 
      color: "from-blue-500 to-purple-600", 
      shadowColor: "shadow-blue-500/25",
      description: "Smart contract development with advanced security patterns",
      technologies: ["ERC-20", "ERC-721", "OpenZeppelin", "Hardhat"]
    },
    { 
      name: "Public Blockchain", 
      icon: Database, 
      color: "from-emerald-500 to-teal-600", 
      shadowColor: "shadow-emerald-500/25",
      description: "Decentralized systems and consensus mechanisms",
      technologies: ["Ethereum", "Polygon", "BSC", "Arbitrum"]
    },
    { 
      name: "Web3", 
      icon: Globe, 
      color: "from-orange-500 to-red-600", 
      shadowColor: "shadow-orange-500/25",
      description: "Building decentralized applications and protocols",
      technologies: ["ethers.js", "web3.js", "IPFS", "The Graph", "Reown Appkit"]
    },
    { 
      name: "Crypto Wallet", 
      icon: Wallet, 
      color: "from-purple-500 to-pink-600", 
      shadowColor: "shadow-purple-500/25",
      description: "Wallet integration and secure transaction handling",
      technologies: ["MetaMask", "WalletConnect", "Coinbase", "Trust Wallet"]
    },
    { 
      name: "Coins & Tokens", 
      icon: Coins, 
      color: "from-yellow-500 to-orange-600", 
      shadowColor: "shadow-yellow-500/25",
      description: "Token economics and cryptocurrency development for both testing purpose and on live project",
      technologies: ["DeFi", "Staking", "Liquidity", "Governance"]
    },
    { 
      name: "JavaScript", 
      icon: Code, 
      color: "from-cyan-500 to-blue-600", 
      shadowColor: "shadow-cyan-500/25",
      description: "Modern JavaScript and frontend frameworks for interactive and modern UI",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"]
    },
    { 
      name: "Node.js", 
      icon: Server, 
      color: "from-green-500 to-emerald-600", 
      shadowColor: "shadow-green-500/25",
      description: "Server-side development and API integration",
      technologies: ["Express", "MongoDB", "GraphQL", "REST APIs"]
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-x-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div> */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Specialized in blockchain technology and modern web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className={`group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 
                  hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer
                  border border-slate-200/50 dark:border-slate-700/50 hover:border-transparent
                  ${hoveredSkill === skill.name ? skill.shadowColor + ' shadow-2xl' : 'shadow-lg'}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 
                  rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Floating particles effect */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping delay-700"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center
                    mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-3 
                    group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-800 
                    group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 
                    group-hover:bg-clip-text transition-all duration-300">
                    {skill.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${skill.color} 
                          text-white rounded-full opacity-80 group-hover:opacity-100 
                          transition-all duration-300 transform group-hover:scale-105`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${skill.color} rounded-full 
                    group-hover:w-20 transition-all duration-500`}></div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </section>
  )
}

export default Skills