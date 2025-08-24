import { Briefcase, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "Barcosys Software India Pvt. LTD",
      period: "06/2024 - Present",
      location: "India",
      responsibilities: [
        "Tech lead for MLM project and Telegram bot development.",
        "Designed architecture, developed smart contracts, and managed backend APIs.",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "Mobiloitte Technology India Pvt. Ltd",
      period: "04/2022 - 05/2024",
      location: "Delhi",
      responsibilities: [
        "Developed centralized and decentralized wallets, ICOs, and arbitrage bots.",
        "Backend development for social media and e-commerce applications.",
        "Managed crypto exchange applications as blockchain and backend developer.",
      ],
    },
    {
      title: "Java Development Intern",
      company: "Softskills Infotech Pvt. Ltd.",
      period: "05/2021 - 07/2021",
      location: "Meerut",
      responsibilities: ["Developed a Counseling System project following SDLC with Java technology."],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg flex-shrink-0">
                  <Briefcase size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-2">{exp.title}</h3>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 text-muted-foreground font-dm-sans">
                    <span className="font-semibold text-secondary">{exp.company}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 font-dm-sans text-card-foreground">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
