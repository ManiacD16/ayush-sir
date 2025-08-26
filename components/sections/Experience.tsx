import { Briefcase, Calendar, MapPin, Star, TrendingUp, Globe } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Blockchain Developer",
      company: "Independent Contractor",
      period: "01/2024 - Present",
      location: "Remote",
      status: "freelance",
      responsibilities: [
        "Delivered custom blockchain solutions for international clients across various industries.",
        "Developed DeFi protocols, NFT marketplaces, and smart contract auditing services.",
        "Consulted on blockchain architecture and tokenomics for startup projects.",
      ],
    },
    {
      title: "Senior Blockchain Developer",
      company: "Barcosys Software India Pvt. LTD",
      period: "06/2024 - Present",
      location: "India",
      status: "current",
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
      status: "completed",
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
      status: "completed",
      responsibilities: ["Developed a Counseling System project following SDLC with Java technology."],
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary font-semibold mb-4">
            <TrendingUp size={18} />
            <span>Career Journey</span>
          </div>
          <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-primary mb-6 leading-tight">
            Work Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey through the world of blockchain development and software engineering
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-secondary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === experiences.length - 1;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-1/2 z-20">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      exp.status === 'current' 
                        ? 'bg-secondary border-secondary shadow-lg shadow-secondary/50' 
                        : exp.status === 'freelance'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 shadow-lg shadow-purple-500/30'
                        : 'bg-primary border-primary shadow-lg shadow-primary/30'
                    }`}>
                      {exp.status === 'current' && (
                        <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75"></div>
                      )}
                      {exp.status === 'freelance' && (
                        <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse opacity-75"></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      exp.status === 'current' 
                        ? 'ring-2 ring-secondary/30 bg-gradient-to-br from-card to-secondary/5' 
                        : exp.status === 'freelance'
                        ? 'ring-2 ring-purple-500/30 bg-gradient-to-br from-card to-purple-500/5'
                        : 'hover:ring-2 hover:ring-primary/20'
                    }`}>
                      
                      {/* Status Badge */}
                      {exp.status === 'current' && (
                        <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star size={12} />
                          Current Role
                        </div>
                      )}
                      {exp.status === 'freelance' && (
                        <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Globe size={12} />
                          Freelance
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 rounded-xl flex-shrink-0 ${
                          exp.status === 'current' 
                            ? 'bg-secondary text-secondary-foreground' 
                            : exp.status === 'freelance'
                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                            : 'bg-primary text-primary-foreground'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          {exp.status === 'freelance' ? <Globe size={28} /> : <Briefcase size={28} />}
                        </div>

                        <div className="flex-1">
                          <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>

                          <div className="space-y-2">
                            <div className="font-semibold text-secondary text-lg">
                              {exp.company}
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-muted-foreground font-dm-sans">
                              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg">
                                <Calendar size={16} />
                                <span className="font-medium">{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg">
                                <MapPin size={16} />
                                <span className="font-medium">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-space-grotesk font-semibold text-card-foreground mb-4 text-lg">Key Achievements</h4>
                        <ul className="space-y-3 font-dm-sans">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <div className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-125 transition-transform ${
                                exp.status === 'current' 
                                  ? 'bg-secondary' 
                                  : exp.status === 'freelance'
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                                  : 'bg-primary'
                              }`}></div>
                              <span className="text-card-foreground leading-relaxed group-hover/item:text-primary/80 transition-colors">
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full opacity-20 ${
                        exp.status === 'current' 
                          ? 'bg-secondary' 
                          : exp.status === 'freelance'
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                          : 'bg-primary'
                      } group-hover:opacity-30 transition-opacity`}></div>
                    </div>
                  </div>

                  {/* Timeline Date (Hidden on mobile, shown on desktop) */}
                  <div className={`hidden md:block w-2/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-muted/30 backdrop-blur-sm px-4 py-3 rounded-xl inline-block border border-primary/10">
                      <div className="font-space-grotesk font-bold text-primary text-lg">
                        {exp.period.split(' - ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {exp.period.split(' - ')[1]}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline End Marker */}
          <div className="absolute left-8 md:left-1/2 bottom-0 w-4 h-4 transform -translate-x-1/2 translate-y-8">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-muted-foreground font-dm-sans">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <span>Building the future, one block at a time</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience