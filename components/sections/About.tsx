const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="font-dm-sans text-lg md:text-xl leading-relaxed text-card-foreground">
            "I am a seasoned blockchain developer with a proven track record in architecting and implementing robust,
            secure, and scalable blockchain solutions. My expertise spans crypto wallets development, smart contract
            development, consensus algorithms, and blockchain integration. I am dedicated to staying at the forefront of
            this rapidly evolving field, ensuring that my work consistently meets the highest industry standards. Let's
            connect to explore how I can contribute to your blockchain initiatives."
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
