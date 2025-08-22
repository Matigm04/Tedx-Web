"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 1024
      if (isMobile) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(window.scrollY > 120);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/ediciones", label: "Ediciones" },
    { href: "/inscripciones", label: "Inscripciones 2025", isHighlighted: true },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-white backdrop-blur-md shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="TEDxUTNCórdoba"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium relative group transition-colors ${
                  link.isHighlighted
                    ? "text-white bg-red-600 px-4 py-1.5 rounded-full hover:bg-red-700"
                    : isActive(link.href) 
                    ? "text-red-600" 
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
                {!link.isHighlighted && (
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current mt-1 transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.href} className="flex items-start">
                <Link
                  href={link.href}
                  className={`font-medium transition-colors ${
                    link.isHighlighted
                      ? "text-white bg-red-600 px-4 py-1.5 rounded-full hover:bg-red-700"
                      : isActive(link.href) 
                      ? "text-red-600" 
                      : "text-gray-700 hover:text-red-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
