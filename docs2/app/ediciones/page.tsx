import Navbar from "@/components/navbar"
import EditionsSection from "@/components/editions-section"
import Footer from "@/components/footer"

export default function EdicionesPage() {
  return (
    <main>
      <Navbar />
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Carrusel2.jpg')",
          }}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido superpuesto */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Nuestras Ediciones</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Revive los momentos más inspiradores de cada edición de TEDxUTN
          </p>
        </div>
      </section>
      <EditionsSection />
      <Footer />
    </main>
  )
}
