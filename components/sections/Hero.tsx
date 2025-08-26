"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 tech-border rounded-full hologram-effect"></div>
            <Image
              src="/profile.jpg"
              alt="Ayush Rai's Profile Photo"
              fill
              className="rounded-full object-cover pulse-glow relative z-20"
            />
            {/* Tech corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-secondary"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-secondary"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-accent"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-accent"></div>
          </div>

          <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl text-primary mb-4 animate-fade-in">
            Ayush Rai
          </h1>

          <p className="font-dm-sans text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Senior Blockchain Developer | Solidity Expert | Node.js Enthusiast
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground font-dm-sans">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>ayushrai2772@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 9984155991</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Delhi, India</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/ayushrai2001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-all duration-200 font-dm-sans font-medium tech-border pulse-glow"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ayushrai2001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-dm-sans font-medium tech-border"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
