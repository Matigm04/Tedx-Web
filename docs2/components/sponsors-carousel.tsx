"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const sponsors = [
  { name: "UTN Córdoba", image: "/images/Edicion2024/Sponsors/Utn_Cordoba2.jpg" },
  { name: "SEU", image: "/images/Edicion2024/Sponsors/SEU.jpg" },
  { name: "Aguiar & Asoc.", image: "/images/Edicion2024/Sponsors/Aguiar_y_Asoc.jpg" },
  { name: "ITLG", image: "/images/Edicion2024/Sponsors/itlg2.jpg" },
  { name: "Cofactory", image: "/images/Edicion2024/Sponsors/Cofactory.jpg" },
  { name: "RVN", image: "/images/Edicion2024/Sponsors/RVN_logo.jpg" },
  { name: "Pepsi", image: "/images/Edicion2024/Sponsors/Pepsi.jpg" },
  { name: "McDonald's", image: "/images/Edicion2024/Sponsors/McDonalds.jpg" },
]

export default function SponsorsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sponsors.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Nuestros Colaboradores</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="w-full max-w-xs h-32 relative">
              <Image
                src={sponsors[currentSlide].image || "/placeholder.svg"}
                alt={sponsors[currentSlide].name}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
