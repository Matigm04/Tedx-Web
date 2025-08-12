import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const helvetica = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-helvetica",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "TEDxUTNCórdoba - Ideas que valen la pena difundir",
  description:
    "Evento independiente TEDx en la Universidad Tecnológica Nacional Córdoba. Descubre charlas inspiradoras, conecta con líderes de pensamiento y forma parte de una comunidad que impulsa el cambio.",
  keywords: "TEDx, UTN Córdoba, charlas inspiradoras, ideas, innovación, tecnología, universidad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${helvetica.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
