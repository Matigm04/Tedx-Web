"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Users, Mic, Clock, Handshake } from "lucide-react"

interface Speaker {
  name: string
  role: string
  image: string
}

interface Sponsor {
  name: string
  image: string
}

interface Edition {
  year: string
  title: string
  date: string
  description: string[]
  stats: {
    attendees: string
    speakers: string
    duration: string
  }
  gallery: string[]
  speakers: Speaker[]
  sponsors: Sponsor[]
}

const editions: Edition[] = [
  {
    year: "2024",
    title: 'TEDxUTNCórdoba 2024: "Hazlo Posible"',
    date: "4 de Octubre, 2024",
    description: [
      "La edición 2024 fue un evento que redefinió lo que consideramos inalcanzable. Lleno de charlas inspiradoras y emocionantes, nuestros oradores guiaron a los asistentes a través de experiencias transformadoras que los hicieron replantear su presente.",
      "Un espacio donde las barreras se desvanecieron y las posibilidades se multiplicaron. Con creatividad, pasión y acción, exploramos el potencial ilimitado que todos llevamos dentro, moldeando nuestro presente y definiendo el futuro.",
    ],
    stats: {
      attendees: "500+ Asistentes",
      speakers: "8 Speakers",
      duration: "5 horas",
    },
    gallery: [
      "/images/Edicion2024/Presentadores.jpg",
      "/images/Edicion2024/Publico1.jpg",
      "/images/Edicion2024/Publico2.jpg",
      "/images/Edicion2024/Publico4.jpg",
    ],
    speakers: [
      {
        name: "Lucas Salim",
        role: "CEO & Fundador de Grupo Proaco",
        image: "/images/Edicion2024/Oradores/LucasSalim.JPG",
      },
      {
        name: "Norma Quevedo",
        role: "Comunicadora Profesional, locutora y actriz",
        image: "/images/Edicion2024/Oradores/NORMA_QUEVEDO.jpg",
      },
      {
        name: "Sergio Cusmai",
        role: "Chief Executive Officer at Alpha-G",
        image: "/images/Edicion2024/Oradores/Sergio_Cusmai.png",
      },
      {
        name: "Julia Mensa",
        role: "Cofundadora y CEO de Nunatak Biotech",
        image: "/images/Edicion2024/Oradores/JULIA_MENSA.jpeg",
      },
      {
        name: "Gianna Mastrolinardo",
        role: "Estudiante de Ciencia Política en la UNC y activista por los derechos de las personas con discapacidades",
        image: "/images/Edicion2024/Oradores/GIANNA_MASTROLINARDO.jpg",
      },
      {
        name: "Guillermo Gutierrez",
        role: "Ingeniero Electrónico y Mag. en ingeniería de control automático",
        image: "/images/Edicion2024/Oradores/GUILLERMO_GUTIERREZ.jpg",
      },
      {
        name: "Nardo Escanilla",
        role: "Comediante y actor",
        image: "/images/Edicion2024/Oradores/NARDO_ESCANILLA.JPG",
      },
    ],
    sponsors: [
      { name: "UTN Córdoba", image: "/images/Edicion2024/Sponsors/Utn_Cordoba2.jpg" },
      { name: "SEU", image: "/images/Edicion2024/Sponsors/SEU.jpg" },
      { name: "Aguiar & Asoc", image: "/images/Edicion2024/Sponsors/Aguiar_y_Asoc.jpg" },
      { name: "ITLG", image: "/images/Edicion2024/Sponsors/itlg2.jpg" },
      { name: "Cofactory", image: "/images/Edicion2024/Sponsors/Cofactory.jpg" },
      { name: "RVN", image: "/images/Edicion2024/Sponsors/RVN_logo.jpg" },
      { name: "Indoors", image: "/images/Edicion2024/Sponsors/Indoors.jpg" },
      { name: "Grupo Kumar", image: "/images/Edicion2024/Sponsors/Grupo_Kumar.jpg" },
      { name: "Dloss", image: "/images/Edicion2024/Sponsors/Dloss.jpg" },
      { name: "Pepsi", image: "/images/Edicion2024/Sponsors/Pepsi.jpg" },
      { name: "Warner Bros", image: "/images/Edicion2024/Sponsors/Warner_Bros.jpg" },
      { name: "McDonald's", image: "/images/Edicion2024/Sponsors/McDonalds.jpg" },
      { name: "Sportcom", image: "/images/Edicion2024/Sponsors/Sportcom.jpg" },
      { name: "Alumac", image: "/images/Edicion2024/Sponsors/Alumac.jpg" },
      { name: "Movisuelos", image: "/images/Edicion2024/Sponsors/Movisuelos.jpg" },
      { name: "Chammas", image: "/images/Edicion2024/Sponsors/Chammas.jpeg" },
      { name: "Global", image: "/images/Edicion2024/Sponsors/Global.jpg" },
    ],
  },
  {
    year: "2023",
    title: 'TEDxUTNCórdoba 2023: "Inteligencia 3.0"',
    date: "6 de Octubre, 2023",
    description: [
      "La cuarta edición se centró en la importancia de las conexiones humanas en un mundo cada vez más digital. Exploramos cómo la tecnología puede unir en lugar de separar.",
    ],
    stats: {
      attendees: "350+ Asistentes",
      speakers: "10 Speakers",
      duration: "5 horas",
    },
    gallery: [
      "/images/Edicion2023/Presentadores.jpg",
      "/images/Edicion2023/Publico1.jpg",
      "/images/Edicion2023/Cerebro1.jpg",
      "/images/Edicion2023/Coro1.jpg",
    ],
    speakers: [
      {
        name: "Mauricio Ambrosi",
        role: 'Percusionista de "Los Caligaris"',
        image: "/images/Edicion2023/Oradores/MAURICIO AMBROSI.jpg",
      },
      {
        name: "Sergio Nirich",
        role: "Profesor e Ingeniero Civil",
        image: "/images/Edicion2023/Oradores/SERGIO NIRICH CON FONDO.jpeg",
      },
      { name: "Maria Cozzi", role: "Relacionista Pública", image: "/images/Edicion2023/Oradores/MARIA COZZI.jpg" },
      {
        name: "Cecilia Boretto",
        role: "Analista en Sistemas",
        image: "/images/Edicion2023/Oradores/CECILIA BORETTO.jpg",
      },
      {
        name: "Sergio Logares",
        role: "Ingeniero en Sistemas de Información",
        image: "/images/Edicion2023/Oradores/Sergio Logares.jpg",
      },
      { name: "Gastón Massa", role: "Comediante y Arquitecto", image: "/images/Edicion2023/Oradores/Gaston.jpg" },
      { name: "Maru Ibañez", role: "Licenciada en Publicidad", image: "/images/Edicion2023/Oradores/MARU IBAÑEZ.jpeg" },
      {
        name: "Tomás Arinci",
        role: "Director del Coro Municipal de Córdoba",
        image: "/images/Edicion2023/Oradores/Tomás Arinci.jpg",
      },
      {
        name: "Guadalupe Vargas Foix",
        role: "Licenciada en Psicología",
        image: "/images/Edicion2023/Oradores/Guadalupe Vargas.jpeg",
      },
      { name: "Sol Constable", role: "Corredora de montaña", image: "/images/Edicion2023/Oradores/Sol Constable.jpg" },
    ],
    sponsors: [
      { name: "UTN Córdoba", image: "/images/Edicion2023/Sporsors/UTN_Cordoba.jpg" },
      { name: "SEU UTN", image: "/images/Edicion2023/Sporsors/SEU_UTN.jpg" },
      { name: "Flexxus", image: "/images/Edicion2023/Sporsors/flexxus.jpg" },
      { name: "Pepsi", image: "/images/Edicion2023/Sporsors/Pepsi.jpg" },
      { name: "Nuovamec S.A", image: "/images/Edicion2023/Sporsors/Nuevomec SA.jpg" },
      { name: "Glaciar", image: "/images/Edicion2023/Sporsors/Glaciar.jpg" },
      { name: "Chammas alfajores", image: "/images/Edicion2023/Sporsors/Chammas.jpeg" },
      { name: "Rosenberg Tarletta", image: "/images/Edicion2023/Sporsors/Rosemberg tarletta.jpg" },
      { name: "Ingeniería Humana", image: "/images/Edicion2023/Sporsors/Ingenieria Humana.jpg" },
      { name: "Tasto", image: "/images/Edicion2023/Sporsors/Tasto.jpg" },
      { name: "Dinamic", image: "/images/Edicion2023/Sporsors/Dinamic_Software-Logo.wine.jpg" },
      { name: "Vaker", image: "/images/Edicion2023/Sporsors/22.WINWIN-VAKER.jpg" },
      { name: "Grupo Conectar", image: "/images/Edicion2023/Sporsors/Grupo Conectar.jpg" },
      { name: "Aguiar & Asoc.", image: "/images/Edicion2023/Sporsors/Aguiar_y_Asoc.jpg" },
      { name: "Mancor", image: "/images/Edicion2023/Sporsors/Mancor.jpg" },
      { name: "Che Cliche", image: "/images/Edicion2023/Sporsors/Che cliche.jpg" },
      { name: "Dloss", image: "/images/Edicion2023/Sporsors/Dloss.jpg" },
      { name: "Indoors", image: "/images/Edicion2023/Sporsors/Indoors.jpg" },
      { name: "Ozonizer", image: "/images/Edicion2023/Sporsors/Ozoiner.jpg" },
      { name: "Alumac", image: "/images/Edicion2023/Sporsors/Alumac.jpg" },
      { name: "Alfaser S.A", image: "/images/Edicion2023/Sporsors/Alfaser.jpg" },
      { name: "Aurico", image: "/images/Edicion2023/Sporsors/Aurico.jpg" },
      { name: "Aliaga", image: "/images/Edicion2023/Sporsors/Aliaga.jpg" },
    ],
  },
  {
    year: "2022",
    title: 'TEDxUTN 2022: "¿Conversamos?"',
    date: "12 de Noviembre, 2022",
    description: [
      "Después de los desafíos globales, esta edición celebró la capacidad humana de adaptarse e innovar. Historias de superación y creatividad ante la adversidad.",
      "Un evento que nos recordó la importancia del diálogo y la conexión humana, explorando cómo las conversaciones pueden transformar realidades y construir puentes hacia el futuro.",
    ],
    stats: {
      attendees: "300+ Asistentes",
      speakers: "9 Speakers", // updated from 7 to 9 speakers
      duration: "5.5 horas",
    },
    gallery: [
      "/images/Edicion2022/Equipo.JPG",
      "/images/Edicion2022/Presentadores.JPG",
      "/images/Edicion2022/Publico1.JPG",
      "/images/Edicion2022/Publico2.JPG",
    ],
    speakers: [
      {
        name: "Federico Bongiorno",
        role: 'Co-fundador de "Everest media, Universo Ecodiem, Everest Real Estate y Everest NFT"',
        image: "/images/Edicion2022/Oradores/FedericoBongiorno.jpg",
      },
      {
        name: "Ana Inés Lescano",
        role: "Coach ontológico profesional",
        image: "/images/Edicion2022/Oradores/AnaLescano.JPG",
      },
      {
        name: "Bruno Rova Bagilet",
        role: 'Chief humanity officer de "Winclap"',
        image: "/images/Edicion2022/Oradores/BrunoBagilet.jpg",
      },
      {
        name: "Francisco García",
        role: 'Fundador de "Panza llena, corazón contento" y "Casa Aurora"',
        image: "/images/Edicion2022/Oradores/FrancisoGarcia.jpg",
      },
      {
        name: "Bernardo Carignano",
        role: 'Fundador de "Yo me animo"',
        image: "/images/Edicion2022/Oradores/BernardoCarignano.jpg",
      },
      {
        name: "Iris Gastañaga",
        role: 'CEO y fundadora de "Kinetic Corp"',
        image: "/images/Edicion2022/Oradores/IrisGastañaga.png",
      },
      {
        name: "Leandro Dionisio",
        role: "Médico psiquiatra",
        image: "/images/Edicion2022/Oradores/LeandroDionisio.jpg",
      },
      {
        name: "Lucas Di Cesare y Matías Vivanco",
        role: 'Creadores de "Hoy no duermo en casa"',
        image: "/images/Edicion2022/Oradores/LucasYMatias.jpg",
      },
      {
        name: "Mercedes Gonzáles del Pino",
        role: 'Cofounder de "Somos del pino"',
  image: "/images/Edicion2022/Oradores/MercedesGonzález.jpg",
      },
    ],
    sponsors: [
      { name: "UTN Córdoba", image: "/images/Edicion2022/Sponsors/UTN_Cordoba_2023.jpg" },
      { name: "SEU", image: "/images/Edicion2022/Sponsors/11 - HOST - SEU - SEU_HostAcadémico.jpg" },
      { name: "AVEIT", image: "/images/Edicion2022/Sponsors/AVEIT_2021.jpg" },
      { name: "Aguiar & Asoc.", image: "/images/Edicion2022/Sponsors/AguiarYAsoc.jpg" },
      { name: "Dinamic", image: "/images/Edicion2022/Sponsors/Dinamic.jpg" },
      { name: "DLOSS", image: "/images/Edicion2022/Sponsors/DLOSS.jpg" },
      { name: "Iveco Group", image: "/images/Edicion2022/Sponsors/IvecoGroup.jpg" },
    ],
  },
  {
    year: "2021",
    title: 'TEDxUTN 2021: "Reiniciar"',
    date: "Octubre, 2021",
    description: [
      "La edición 2021 marcó un nuevo comienzo, explorando cómo reinventarnos y adaptarnos a los cambios. Un evento lleno de inspiración y nuevas ideas.",
      "En un momento de transformación global, nuestros speakers compartieron historias de resiliencia, innovación y esperanza, demostrando que siempre es posible comenzar de nuevo.",
    ],
    stats: {
      attendees: "250+ Asistentes",
      speakers: "6 Speakers",
      duration: "5 horas",
    },
    gallery: [
      "/images/Edicion2021/Equipo.jpg",
      "/images/Edicion2021/Indoors.jpg",
      "/images/Carrusel1.jpg",
      "/images/Carrusel2.jpg",
    ],
    speakers: [
      {
        name: "Cristina Schwander",
        role: "Especialista en Liderazgo e Inteligencia Emocional",
        image: "/images/Edicion2021/Oradores/CristinaSchwander.JPG",
      },
      {
        name: "Francisco Tranchet",
        role: 'Co-founder y CEO en "Dinamic"',
        image: "/images/Edicion2021/Oradores/FranciscoTranchet.JPG",
      },
      {
        name: "Marina Castellino",
        role: "Directora Ejecutiva de Fundación Líderes de Enseñanza",
        image: "/images/Edicion2021/Oradores/MarinaCastellino.JPG",
      },
      {
        name: "Iñaki Gorostidi",
        role: 'Diseñador industrial y Cofundador de "Ecolif"',
        image: "/images/Edicion2021/Oradores/IñakiGorostidi.jpg",
      },
      {
        name: "María Zinn",
        role: 'Founder de "Calma comunicación"',
        image: "/images/Edicion2021/Oradores/MariaZinn.jpeg",
      },
      {
        name: "Matías Ochoa",
        role: "Marketing and Business Development",
        image: "/images/Edicion2021/Oradores/MatiasOchoa.jpg",
      },
    ],
    sponsors: [
      { name: "UTN", image: "/images/Edicion2021/Sponsors/utn.jpeg" },
      { name: "SEU", image: "/images/Edicion2021/Sponsors/11 - HOST - SEU - SEU_HostAcadémico.jpg" },
      { name: "AVEIT", image: "/images/Edicion2021/Sponsors/AVEIT.jpg" },
      { name: "Bartolom Cerutti", image: "/images/Edicion2021/Sponsors/bartolom_cerutti.jpeg" },
      { name: "Mancor", image: "/images/Edicion2021/Sponsors/mancor.jpg" },
      { name: "Atrezzo", image: "/images/Edicion2021/Sponsors/ATREZZO.jpg" },
      { name: "Tanus Jalil", image: "/images/Edicion2021/Sponsors/TanusJalil.jpg" },
    ],
  },
]

export default function EditionsSection() {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({})

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {editions.map((edition) => (
            <div key={edition.year} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Edition Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{edition.title}</h2>
                <p className="text-red-100 text-lg">{edition.date}</p>
              </div>

              {/* Edition Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    {edition.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    <div className="flex flex-wrap gap-6 pt-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-5 h-5 text-red-600" />
                        <span>{edition.stats.attendees}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mic className="w-5 h-5 text-red-600" />
                        <span>{edition.stats.speakers}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-5 h-5 text-red-600" />
                        <span>{edition.stats.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {edition.gallery.map((image, index) => (
                      <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${edition.title} - ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accordion Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <button
                    onClick={() => toggleAccordion(`speakers-${edition.year}`)}
                    className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">Ver Oradores</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openAccordions[`speakers-${edition.year}`] ? "rotate-180" : ""}`}
                    />
                  </button>

                  <button
                    onClick={() => toggleAccordion(`sponsors-${edition.year}`)}
                    className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Handshake className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">Ver Sponsors</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openAccordions[`sponsors-${edition.year}`] ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Speakers Accordion */}
                {openAccordions[`speakers-${edition.year}`] && (
                  <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Oradores Destacados</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {edition.speakers.map((speaker, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={speaker.image || "/placeholder.svg"}
                              alt={speaker.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{speaker.name}</h4>
                          <p className="text-sm text-gray-600">{speaker.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sponsors Accordion */}
                {openAccordions[`sponsors-${edition.year}`] && (
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Sponsors y Colaboradores</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {edition.sponsors.map((sponsor, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm text-center">
                          <div className="relative h-16 mb-3">
                            <Image
                              src={sponsor.image || "/placeholder.svg"}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm text-gray-600 font-medium">{sponsor.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
