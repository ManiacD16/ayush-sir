import { MessageCircle } from "lucide-react"

const Languages = () => {
  const languages = [
    { name: "Hindi", proficiency: "Native" },
    { name: "English", proficiency: "Professional" },
  ]

  return (
    <section id="languages" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-primary mb-6">Languages</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} />
              </div>

              <h3 className="font-space-grotesk font-bold text-xl text-card-foreground mb-2">{language.name}</h3>

              <p className="font-dm-sans text-muted-foreground">{language.proficiency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
