import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-[70vh] md:h-screen">
      <div className="absolute inset-0">
        <Image 
          src="/images/Carrusel2.jpg" 
          alt="TEDxUTNCórdoba" 
          fill 
          className="object-cover object-[center_30%] md:object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  )
}
