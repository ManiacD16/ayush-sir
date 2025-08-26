"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin} from "lucide-react" //, Twitter 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission here
    console.log("Form submitted:", formData)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:ayushrai2772@gmail.com"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+919984155991"
  }

  return (
    <section id="contact" className="py-20 relative ">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div> */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-dm-sans text-sm text-secondary font-medium">Let's Connect</span>
          </div>
          
          <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-primary mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-secondary rounded-full"></div>
            <div className="w-8 h-1 bg-secondary rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-secondary rounded-full"></div>
          </div>
          
          <p className="font-dm-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your next blockchain project? Let's connect and explore how I can help bring your 
            <span className="text-secondary font-semibold"> innovative ideas</span> to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div 
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-all duration-300 cursor-pointer group/item"
                >
                  <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground p-4 rounded-xl group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-dm-sans font-semibold text-card-foreground mb-1">Email</p>
                    <p className="font-dm-sans text-muted-foreground group-hover/item:text-secondary transition-colors duration-300">
                      ayushrai2772@gmail.com
                    </p>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <Send size={16} className="text-secondary" />
                  </div>
                </div>

                <div 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-all duration-300 cursor-pointer group/item"
                >
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-xl group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-dm-sans font-semibold text-card-foreground mb-1">Phone</p>
                    <p className="font-dm-sans text-muted-foreground group-hover/item:text-primary transition-colors duration-300">
                      +91 9984155991
                    </p>
                  </div>
                  <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <Phone size={16} className="text-primary" />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-all duration-300 group/item">
                  <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground p-4 rounded-xl group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-dm-sans font-semibold text-card-foreground mb-1">Location</p>
                    <p className="font-dm-sans text-muted-foreground group-hover/item:text-accent transition-colors duration-300">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="font-dm-sans font-semibold text-card-foreground mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a href="https://github.com/ayushrai2001" className="p-3 bg-secondary/10 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group/social">
                    <Github size={20} className="group-hover/social:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/ayushrai2001" className="p-3 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/social">
                    <Linkedin size={20} className="group-hover/social:scale-110 transition-transform duration-300" />
                  </a>
                  {/* <a href="#" className="p-3 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 group/social">
                    <Twitter size={20} className="group-hover/social:scale-110 transition-transform duration-300" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500">
            <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-lg"></div>
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block font-dm-sans font-semibold text-card-foreground mb-2 group-focus-within:text-secondary transition-colors duration-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-input/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-dm-sans transition-all duration-300 hover:shadow-md"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block font-dm-sans font-semibold text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-input/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-dm-sans transition-all duration-300 hover:shadow-md"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block font-dm-sans font-semibold text-card-foreground mb-2 group-focus-within:text-accent transition-colors duration-300">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-input/80 backdrop-blur-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-dm-sans resize-none transition-all duration-300 hover:shadow-md"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary to-primary text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-dm-sans font-semibold flex items-center justify-center gap-3 group hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-dm-sans text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact