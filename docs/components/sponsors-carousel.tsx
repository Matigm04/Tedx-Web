"use client"

import Image from "next/image"
import { Crown, Heart, Users, GraduationCap } from "lucide-react"

// Jerarquía de sponsors basada en niveles de contribución
const sponsorTiers = {
  main: {
    title: "Main Sponsors",
    description: "Nuestros patrocinadores principales",
    icon: Crown,
    sponsors: [
      { name: "Vippin", image: "/images/sponsors/vippin_logo.png" }
    ]
  },
  philanthropist: {
    title: "Philanthropist", 
    description: "Comprometidos con nuestra causa",
    icon: Heart,
    sponsors: [
      { name: "DLOSS", image: "/images/sponsors/dloss_logo.jpg" },
      { name: "AiphaG", image: "/images/sponsors/aiphag_logo.png" },
      { name: "Verdeflor", image: "/images/sponsors/verdeflor_logo.png" },
      { name: "Pepsi", image: "/images/sponsors/pepsi_logo.jpg" },
      { name: "Chammas", image: "/images/sponsors/chammas_logo.jpeg" }
    ]
  },
  mentors: {
    title: "Mentors",
    description: "Guiando nuestro crecimiento", 
    icon: Users,
    sponsors: [
      { name: "Eventor", image: "/images/sponsors/eventor logo.png" },
      { name: "Aguiar y asoc", image: "/images/sponsors/aguiar_logo.jpg" },
      { name: "Máximo 1ro - Shell", image: "/images/sponsors/shell logo (sin nombre).png" },
      { name: "Mancor", image: "/images/sponsors/mancor_logo.jpg" },
      { name: "Indoors", image: "/images/sponsors/indoors_logo.jpg" },
      { name: "Alumac", image: "/images/sponsors/alumac_logo.jpg" },
      { name: "McDonald's", image: "/images/sponsors/mcdonalds_logo.jpg" }
    ]
  },
  academic: {
    title: "Host Académico",
    description: "Nuestra casa de estudios",
    icon: GraduationCap,
    sponsors: [
      { name: "SEU - UTN", image: "/images/sponsors/seu_utn_logo.jpg" }
    ]
  }
}

export default function SponsorsCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Nuestros Sponsors 2025</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gracias a estos increíbles patrocinadores que hacen posible TEDxUTNCórdoba.
            Cada uno aporta valor único a nuestra comunidad.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Main Sponsors - Nivel más alto */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 mb-6 shadow-lg">
              <sponsorTiers.main.icon className="w-6 h-6" />
              <h3 className="text-xl font-bold">{sponsorTiers.main.title}</h3>
            </div>
            <p className="text-orange-600 font-medium mb-8 text-lg">{sponsorTiers.main.description}</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {sponsorTiers.main.sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-400">
                  <div className="w-48 h-32 relative">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-4">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philanthropist - Nivel medio */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 mb-6 shadow-lg">
              <sponsorTiers.philanthropist.icon className="w-6 h-6" />
              <h3 className="text-xl font-bold">{sponsorTiers.philanthropist.title}</h3>
            </div>
            <p className="text-pink-600 font-medium mb-8 text-lg">{sponsorTiers.philanthropist.description}</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsorTiers.philanthropist.sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-200 hover:border-pink-400">
                  <div className="w-40 h-28 relative">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-4">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors - Nivel básico */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 mb-6 shadow-lg">
              <sponsorTiers.mentors.icon className="w-6 h-6" />
              <h3 className="text-xl font-bold">{sponsorTiers.mentors.title}</h3>
            </div>
            <p className="text-blue-600 font-medium mb-8 text-lg">{sponsorTiers.mentors.description}</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsorTiers.mentors.sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400">
                  <div className="w-36 h-24 relative">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-4">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Host Académico - Nueva categoría */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-3 mb-6 shadow-lg">
              <sponsorTiers.academic.icon className="w-6 h-6" />
              <h3 className="text-xl font-bold">{sponsorTiers.academic.title}</h3>
            </div>
            <p className="text-green-600 font-medium mb-8 text-lg">{sponsorTiers.academic.description}</p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsorTiers.academic.sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
                  <div className="w-40 h-28 relative">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mt-4">{sponsor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
