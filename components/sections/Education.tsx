import { GraduationCap, Calendar } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "IIMT Engineering College, Meerut",
      duration: "07/2018 - 07/2022",
    },
    {
      degree: "Intermediate",
      field: "",
      institution: "SASMIC, Lucknow",
      duration: "2018",
    },
    {
      degree: "High School",
      field: "",
      institution: "Aadars Anglo Intermediate College",
      duration: "2016",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Education</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg flex-shrink-0">
                  <GraduationCap size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-space-grotesk font-bold text-xl text-card-foreground mb-2">{edu.degree}</h3>

                  {edu.field && <p className="font-dm-sans text-secondary font-semibold mb-2">{edu.field}</p>}

                  <p className="font-dm-sans text-muted-foreground mb-2">{edu.institution}</p>

                  <div className="flex items-center gap-1 text-muted-foreground font-dm-sans">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
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

export default Education
