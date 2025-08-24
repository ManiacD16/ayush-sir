"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-dm-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next blockchain project? Let's connect and explore how I can help bring your ideas to
            life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Email</p>
                    <p className="font-dm-sans text-muted-foreground">ayushrai2772@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Phone</p>
                    <p className="font-dm-sans text-muted-foreground">+91 9984155991</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-card-foreground">Location</p>
                    <p className="font-dm-sans text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-dm-sans font-semibold text-card-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-dm-sans"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-dm-sans font-semibold text-card-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-dm-sans"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-dm-sans font-semibold text-card-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring font-dm-sans resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-dm-sans font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
