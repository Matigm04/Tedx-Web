import { Lightbulb, Users, Rocket, GraduationCap } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Ideas Innovadoras",
    description: "Descubre perspectivas únicas y soluciones creativas a los desafíos actuales.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Conecta con profesionales, emprendedores y líderes de pensamiento.",
  },
  {
    icon: Rocket,
    title: "Inspiración",
    description: "Encuentra la motivación para llevar tus proyectos al siguiente nivel.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje",
    description: "Adquiere conocimientos de expertos en diferentes áreas del saber.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Por qué asistir a TEDxUTNCórdoba?</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
