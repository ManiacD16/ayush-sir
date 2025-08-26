"use client"
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Smart Contracts",
    "Crypto Wallets", 
    "Consensus Algorithms",
    "Blockchain Integration",
    "DeFi Solutions",
    "Security Audits"
  ];

  return (
    <section id="about" className="py-20 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-80"></div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-primary mb-6 relative">
            About Me
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
          </h2>
          <div className="relative flex items-center justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            <div className="absolute w-3 h-3 bg-secondary rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting the future of blockchain technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content Card */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-2xl text-foreground">Blockchain Architect</h3>
                </div>

                <p className="font-dm-sans text-lg md:text-xl leading-relaxed text-card-foreground mb-8">
                  I am a seasoned blockchain developer with a proven track record in architecting and implementing 
                  <span className="text-primary font-medium"> robust, secure, and scalable </span>
                  blockchain solutions. My expertise spans crypto wallets development, smart contract development, 
                  consensus algorithms, and blockchain integration.
                </p>

                <p className="font-dm-sans text-lg md:text-xl leading-relaxed text-card-foreground">
                  I am dedicated to staying at the forefront of this rapidly evolving field, ensuring that my work 
                  consistently meets the highest industry standards. Let's connect to explore how I can contribute 
                  to your <span className="text-secondary font-medium">blockchain initiatives</span>.
                </p>

                {/* Call to Action */}
                {/* <div className="mt-8 pt-6 border-t border-border">
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    Let's Collaborate
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          {/* Skills & Stats Sidebar */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Skills Card */}
            <div className="bg-card rounded-2xl p-5 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-300">
              <h4 className="font-space-grotesk font-semibold text-xl text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
                Core Expertise
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                    <span className="font-dm-sans text-card-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            {/* <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm font-dm-sans text-muted-foreground">Years Experience</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-secondary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-accent">100%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div> */}

            {/* Quote Card */}
            {/* <div className="bg-card rounded-2xl p-6 shadow-xl border-l-4 border-secondary">
              <blockquote className="font-dm-sans italic text-card-foreground">
                "Innovation distinguishes between a leader and a follower"
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">- Steve Jobs</cite>
            </div> */}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-6 h-6 border-2 border-primary rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 border-2 border-secondary rounded-full animate-pulse opacity-40"></div>
    </section>
  )
}

export default About;