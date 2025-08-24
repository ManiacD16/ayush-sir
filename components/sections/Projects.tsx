import { ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "SMT BOT",
      description:
        "Asset mining using PoA technology with SMT token. Designed architecture, developed smart contracts, and managed backend API integration.",
      link: "https://web.telegram.org/k/#@esmtbot",
      technologies: ["Solidity", "Node.js", "Telegram API", "PoA"],
    },
    {
      title: "Tarality",
      description:
        "Platform for trading, staking, and managing digital assets with Ethereum, Polygon, and Tron nodes. Developed blockchain elements, APIs, and smart contracts.",
      link: "https://tarality.com/",
      technologies: ["Ethereum", "Polygon", "Tron", "Web3", "Smart Contracts"],
    },
    {
      title: "FIERES ICO",
      description:
        "ICO-based web application built on Ethereum, including blockchain explorer and contract deployment. Created vesting contracts.",
      link: "https://vesting.fieres.io/",
      technologies: ["Ethereum", "ICO", "Vesting", "Blockchain Explorer"],
    },
    {
      title: "Gyan Batua",
      description:
        "Skills-Tech platform powered by Blockchain, Web 3.0, and AI, bridging traditional education with real-world skills. Developed smart contracts, GYAN token, and Node.js APIs.",
      link: "https://gyanbatua.com/",
      technologies: ["Blockchain", "Web3", "AI", "Token Development", "Node.js"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-4 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>

              <p className="font-dm-sans text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-dm-sans font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
