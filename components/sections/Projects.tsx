"use client"
import React, { useState } from "react"
import { ExternalLink, Globe, Code, Coins, Shield, Layers, Zap, Users, AlertCircle } from "lucide-react"

interface Project {
  title: string
  description: string
  link: string
  technologies: string[]
  icon: React.ReactNode
  category: string
  allowsIframe?: boolean
}

const Projects = () => {
  const [iframeErrors, setIframeErrors] = useState<Set<number>>(new Set())
  const projects: Project[] = [
    {
      title: "SMT BOT",
      description:
        "Asset mining using PoA technology with SMT token. Designed architecture, developed smart contracts, and managed backend API integration.",
      link: "https://web.telegram.org/k/#@esmtbot",
      technologies: ["Solidity", "Node.js", "Telegram API", "PoA"],
      icon: <Code className="w-6 h-6" />,
      category: "DeFi",
      allowsIframe: false,
    },
    {
      title: "Tarality",
      description:
        "Platform for trading, staking, and managing digital assets with Ethereum, Polygon, and Tron nodes. Developed blockchain elements, APIs, and smart contracts.",
      link: "https://tarality.com/",
      technologies: ["Ethereum", "Polygon", "Tron", "Web3", "Smart Contracts"],
      icon: <Layers className="w-6 h-6" />,
      category: "Trading Platform",
    },
    {
      title: "FIERES ICO",
      description:
        "ICO-based web application built on Ethereum, including blockchain explorer and contract deployment. Created vesting contracts.",
      link: "https://vesting.fieres.io/",
      technologies: ["Ethereum", "ICO", "Vesting", "Blockchain Explorer"],
      icon: <Coins className="w-6 h-6" />,
      category: "ICO Platform",
      allowsIframe: false,
    },
    {
      title: "Gyan Batua",
      description:
        "Skills-Tech platform powered by Blockchain, Web 3.0, and AI, bridging traditional education with real-world skills. Developed smart contracts, GYAN token, and Node.js APIs.",
      link: "https://gyanbatua.com/",
      technologies: ["Blockchain", "Web3", "AI", "Token Development", "Node.js"],
      icon: <Users className="w-6 h-6" />,
      category: "EdTech",
      allowsIframe: false,
    },
    {
      title: "TAN DevNet Explorer",
      description:
        "Comprehensive blockchain explorer for TAN DevNet. Search transactions, verify smart contracts, analyze addresses, and track network activity with complete blockchain data and APIs.",
      link: "https://devnet.tanscan.com",
      technologies: ["Blockchain Explorer", "TAN Network", "DevNet", "API"],
      icon: <Globe className="w-6 h-6" />,
      category: "Infrastructure",
      allowsIframe: false,
    },
    {
      title: "TAN TestNet Explorer",
      description:
        "TestNet blockchain explorer for TAN network enabling developers to test and verify transactions, smart contracts, and network functionality in a secure testing environment.",
      link: "https://testnet.tanscan.com",
      technologies: ["TestNet", "Blockchain Explorer", "Developer Tools", "TAN"],
      icon: <Shield className="w-6 h-6" />,
      category: "Infrastructure",
      allowsIframe: false,
    },
    {
      title: "TAN Live ICO",
      description:
        "Live ICO platform built on BNB Smart Chain featuring secure token sales, real-time tracking, and EVM-compatible smart contracts for the TAN ecosystem.",
      link: "https://tan.live",
      technologies: ["BNB Smart Chain", "ICO", "Smart Contracts", "EVM"],
      icon: <Zap className="w-6 h-6" />,
      category: "ICO Platform",
    },
    {
      title: "Block Builders TAN",
      description:
        "Anti-inflation mechanism platform where users can burn 100 TAN tokens to receive 120 TAN through 1-year vesting contracts, protecting token economics and rewarding long-term holders.",
      link: "https://blockbuilders.tan.live/",
      technologies: ["Token Burn", "Vesting Contracts", "DeFi", "Tokenomics"],
      icon: <Shield className="w-6 h-6" />,
      category: "DeFi",
    },
    {
      title: "TAN DApps Suite",
      description:
        "Comprehensive DApps ecosystem including token creator, multi-sender, staking platform, cross-chain bridge, and various DeFi tools for the TAN network.",
      link: "https://dapps.tan.live/",
      technologies: ["DApps", "Token Creator", "Bridge", "Staking", "Multi-sender"],
      icon: <Layers className="w-6 h-6" />,
      category: "DeFi Suite",
    },
    {
      title: "HOVR NFT Marketplace",
      description:
        "Advanced NFT marketplace supporting trading, minting, and collection management. Features modern UI/UX with comprehensive NFT ecosystem tools and marketplace functionality.",
      link: "https://hovr.site",
      technologies: ["NFT", "Marketplace", "Web3", "Smart Contracts"],
      icon: <Globe className="w-6 h-6" />,
      category: "NFT",
    },
    {
      title: "Pawsome Host",
      description:
        "NFT gaming platform combining collectible dog NFTs with interactive gaming mechanics. Features smart contract integration for game logic and NFT management.",
      link: "https://www.pawsome.host/",
      technologies: ["NFT Gaming", "Smart Contracts", "Gaming", "Collectibles"],
      icon: <Users className="w-6 h-6" />,
      category: "Gaming",
    },
    {
      title: "FIERES DApps",
      description:
        "Complete DeFi ecosystem featuring ICO launch platform, IDO services, staking mechanisms, DEX functionality, and comprehensive decentralized finance tools.",
      link: "https://dexapps.fieres.io/#/app/landingpage",
      technologies: ["ICO", "IDO", "Staking", "DEX", "DeFi"],
      icon: <Coins className="w-6 h-6" />,
      category: "DeFi Suite",
    },
    {
      title: "QiDEX",
      description:
        "Decentralized exchange platform with swap functionality, liquidity pools, and advanced trading features. Built with modern DeFi protocols for seamless token trading.",
      link: "https://qidex.site/#/swap",
      technologies: ["DEX", "Swap", "Liquidity Pools", "DeFi"],
      icon: <Zap className="w-6 h-6" />,
      category: "DEX",
    },
  ]

  const handleIframeError = (index: number) => {
    setIframeErrors(prev => new Set(prev).add(index))
  }

  const categories = [...new Set(projects.map(p => p.category))]

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 ">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <span
              key={category}
              className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-dm-sans font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Projects with Previews */}
        <div className="space-y-16">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg border overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-secondary text-secondary-foreground">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-1">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-secondary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-dm-sans text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-space-grotesk font-semibold text-card-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-dm-sans font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors font-dm-sans font-medium"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-card transition-colors font-dm-sans font-medium text-card-foreground"
                    >
                      <Globe size={16} />
                      Visit Site
                    </a>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="relative bg-muted border-l border-border">
                  <div className="sticky top-4 p-4">
                    <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                      {/* Preview Header */}
                      <div className="px-4 py-3 bg-secondary/5 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <span className="text-sm text-muted-foreground ml-3 font-mono">
                            {project.link}
                          </span>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-card-foreground transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      {/* iframe Preview */}
                      <div className="relative">
                        {project.allowsIframe === false || iframeErrors.has(index) ? (
                          <div className="h-80 flex flex-col items-center justify-center bg-muted/50 border-2 border-dashed border-border">
                            <div className="text-center p-8">
                              <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                              <h4 className="font-semibold text-card-foreground mb-2">Preview Not Available</h4>
                              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                                This site cannot be embedded due to security policies. Click the link above to visit directly.
                              </p>
                              <div className="space-y-2">
                                <div className="text-xs text-muted-foreground">
                                  Domain: <span className="font-mono">{new URL(project.link).hostname}</span>
                                </div>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-2 rounded text-sm hover:bg-secondary/90 transition-colors"
                                >
                                  <ExternalLink size={14} />
                                  Open in New Tab
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <iframe
                            src={project.link}
                            className="w-full h-80 border-0"
                            title={`Preview of ${project.title}`}
                            sandbox="allow-same-origin allow-scripts allow-forms"
                            loading="lazy"
                            onError={() => handleIframeError(index)}
                            onLoad={(e) => {
                              // Check if iframe actually loaded content
                              try {
                                const iframe = e.currentTarget as HTMLIFrameElement
                                if (!iframe.contentDocument && !iframe.contentWindow) {
                                  handleIframeError(index)
                                }
                              } catch (error) {
                                handleIframeError(index)
                              }
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects