import { Mail, MapPin, University, Instagram, Facebook, Youtube } from "lucide-react"
import { TikTokIcon } from "./tiktok-icon"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TEDxUTNCórdoba</h3>
            <p className="text-gray-300 mb-6">Ideas que valen la pena difundir</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100071202842262"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@tedxutncordoba?_t=ZM-8z4FXRXA8rY&_r=1"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tedxutncordoba/"
                target="_blank"
                className="text-gray-400 hover:text-red-500 transition-colors"
                rel="noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@TEDx"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/ediciones" className="text-gray-300 hover:text-white transition-colors">
                  Ediciones
                </a>
              </li>
              <li>
                <a href="/inscripciones" className="text-gray-300 hover:text-white transition-colors">
                  Inscripciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">tedxutncordoba@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <University className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">UTN Facultad Regional Córdoba</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Córdoba, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-2">&copy; 2025 TEDxUTNCórdoba. Todos los derechos reservados.</p>
          <p className="text-gray-500 text-sm">Este evento independiente TEDx opera bajo licencia de TED.</p>
        </div>
      </div>
    </footer>
  )
}
