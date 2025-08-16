import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

export default function NextEditionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Próxima Edición</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-96">
              <Image
                src="/images/Edicion2024/Presentadores.jpg"
                alt="TEDxUTNCórdoba 2025"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-4">TEDxUTNCórdoba 2025</h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg">10 de Octubre, 2025 - 17:00 hs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">UTN Córdoba</span>
                  </div>
                </div>
                <Link
                  href="/inscripciones"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  INSCRÍBETE AQUÍ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
