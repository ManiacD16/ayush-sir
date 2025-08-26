import { MessageCircle, Globe, Award } from "lucide-react"

const Languages = () => {
  const languages = [
    { 
      name: "English", 
      proficiency: "Professional",
      level: "C1",
      icon: Globe,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      name: "Hindi", 
      proficiency: "Native",
      level: "Native",
      icon: MessageCircle,
      color: "from-orange-500 to-red-600"
    },
  ]

  return (
    <section id="languages" className="py-20 relative overflow-x-hidden">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div> */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary">
              Languages
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fluent in multiple languages, enabling effective communication across diverse cultures and contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {languages.map((language, index) => {
            const IconComponent = language.icon
            return (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${language.color} text-white p-5 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent size={28} />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {language.level}
                  </div>
                </div>

                <h3 className="font-space-grotesk font-bold text-2xl text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {language.name}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award size={16} className="text-secondary" />
                  <p className="font-dm-sans text-muted-foreground font-medium">
                    {language.proficiency}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: language.proficiency === "Native" ? "100%" : "85%" }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            Ready to communicate effectively in your preferred language
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Cross-cultural Communication
            </div>
            <div className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
              Global Collaboration
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages