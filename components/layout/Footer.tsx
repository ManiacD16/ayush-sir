import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-space-grotesk font-bold text-2xl mb-2">Ayush Rai</h3>
            <p className="font-dm-sans text-gray-300">Senior Blockchain Developer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/ayushrai2001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushrai2001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ayushrai2772@gmail.com"
              className="hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-dm-sans text-gray-400">&copy; 2024 Ayush Rai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
