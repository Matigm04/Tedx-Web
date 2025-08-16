import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Qué es TEDxUTNCórdoba?</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                TEDxUTNCórdoba es un evento organizado de forma independiente bajo licencia de TED. Nuestro objetivo es
                reunir a pensadores brillantes de nuestra comunidad para dar charlas cortas y poderosas que inspiren y
                generen conversaciones profundas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En el espíritu de las ideas que valen la pena difundir, TEDxUTNCórdoba presenta speakers locales e
                internacionales cuyas ideas y experiencias pueden cambiar actitudes, vidas y, en última instancia, el
                mundo.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-red-600 mb-2">500+</h3>
                  <p className="text-gray-600">Asistentes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-red-600 mb-2">20+</h3>
                  <p className="text-gray-600">Speakers</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-red-600 mb-2">5</h3>
                  <p className="text-gray-600">Ediciones</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/Edicion2024/Publico3.jpg" alt="TEDx Stage" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
