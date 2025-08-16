import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import SponsorsCarousel from "@/components/sponsors-carousel"
import NextEditionSection from "@/components/next-edition-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NextEditionSection />
      <SponsorsCarousel />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
