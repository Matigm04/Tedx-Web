"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, CreditCard, FileText, ExternalLink, CheckCircle, Loader2 } from "lucide-react"

export default function RegistrationOptions() {
  const [selectedOption, setSelectedOption] = useState<"free" | "paid" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    // Personal info
    nombre: "",
    apellidos: "",
    dni: "",
    edad: "",
    email: "",
    celular: "",

    // TED experience
    conoce_ted: "",
    participo_tedx: "",

    // UTN community
    pertenece_utn: "",
    comunidad_utn: "",
    soy: "",

    // Academic info
    especialidad: "",
    legajo: "",
    ano_cursando: [] as string[],
    graduado_carrera: "",

    // Activities
    materia_actual: "",
    actividades_facultad: "",
  })

  const handlePaidRegistration = () => {
    window.open("https://eventor.com.ar/share/e3DnLxFkIaD7", "_blank")
  }

  const handleFreeRegistration = () => {
    setSelectedOption("free")
    // Scroll automático al formulario después de un pequeño delay para que se renderice
    setTimeout(() => {
      formRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }, 100)
  }

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevenir recarga de la página
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Crear FormData usando el estado como única fuente de verdad
      const formDataToSend = new FormData()
      
      // Recorrer todas las claves del estado formData y añadirlas al FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          // Manejar arrays convirtiéndolos a string
          formDataToSend.append(key, value.join(', '))
        } else {
          // Añadir valores regulares (string)
          formDataToSend.append(key, value)
        }
      })
      
      // Agregar timestamp para registro
      formDataToSend.append('timestamp', new Date().toLocaleString('es-AR', {
        timeZone: 'America/Argentina/Cordoba'
      }))

      // Realizar petición fetch a Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbyVGMXj5EfpBDS3MnzVk8vtX3Q63705yfVRRRPCDutlngeyky9BiGD1zBFe2qMjtcGs/exec', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Necesario para Google Apps Script
      })

      // Como usamos mode: 'no-cors', no podemos leer la respuesta directamente
      // Pero si llegamos aquí sin error, asumimos éxito
      console.log("Éxito: Formulario enviado correctamente")
      setSubmitStatus("success")
      
      // Limpiar formulario restaurando estado inicial
      setFormData({
        nombre: "",
        apellidos: "",
        dni: "",
        edad: "",
        email: "",
        celular: "",
        conoce_ted: "",
        participo_tedx: "",
        pertenece_utn: "",
        comunidad_utn: "",
        soy: "",
        especialidad: "",
        legajo: "",
        ano_cursando: [],
        graduado_carrera: "",
        materia_actual: "",
        actividades_facultad: "",
      })

    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[45vh] md:min-h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat [--bg-position-mobile:center_-280%] [--bg-position-desktop:center_42%] bg-[position:var(--bg-position-mobile)] md:bg-[position:var(--bg-position-desktop)]"
          style={{
            backgroundImage: "url('/images/Logo negro Tedxutncordoba.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Event Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl border-t-4 border-red-600 hover:shadow-lg transition-shadow">
              <Calendar className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fecha</h3>
              <p className="text-gray-600">10 de Octubre</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border-t-4 border-red-600 hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Horario</h3>
              <p className="text-gray-600">17:00 hs</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border-t-4 border-red-600 hover:shadow-lg transition-shadow">
              <MapPin className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-600">Auditorio UTN FRC - Córdoba</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border-t-4 border-red-600 hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dirigido a</h3>
              <p className="text-gray-600">Comunidad UTN FRC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Elige tu forma de participar</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Dos opciones para asegurar tu lugar en este evento único</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Free Registration Option */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white text-center">
                <FileText className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Entrada Classic</h3>
                <p className="text-blue-100">Completa el formulario y participa del sorteo de ubicaciones</p>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Entrada por sorteo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Coffee break</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Kit sorpresa</span>
                  </div>
                  {/* Spacer invisible para alineación */}
                  <div className="invisible flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Spacer</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={handleFreeRegistration}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Completar Formulario
                  </button>
                </div>
              </div>
            </div>

            {/* Paid Registration Option */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white text-center">
                <CreditCard className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Entradas Premium y VIP</h3>
                <p className="text-red-100">Asegura tu lugar comprando tu entrada</p>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Entrada asegurada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Coffee break</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Kit sorpresa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Remera TEDx (Incluida con la entrada VIP)</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={handlePaidRegistration}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Image
                      src="/images/sponsors/eventor logo.png"
                      alt="Eventor"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    Comprar Entrada
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Registration Form */}
      {selectedOption === "free" && (
        <section ref={formRef} className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Formulario de Entrada Classic</h3>
                <p className="text-gray-600">Completa todos los campos para participar del proceso de selección</p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Personal</h4>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre/s *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Ingresa tu nombre"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido/s *</label>
                    <input
                      type="text"
                      name="apellidos"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Ingresa tus apellidos"
                      value={formData.apellidos}
                      onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">DNI (sin puntos) *</label>
                    <input
                      type="text"
                      name="dni"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="12345678"
                      value={formData.dni}
                      onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">Edad *</label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="edad"
                          value="18-25"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        />
                        <span className="ml-2">Entre 18 y 25</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="edad"
                          value="26-35"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        />
                        <span className="ml-2">Entre 26 y 35</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="edad"
                          value="36+"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        />
                        <span className="ml-2">Mayor a 36</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nro de celular *</label>
                    <input
                      type="tel"
                      name="celular"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="3511234567"
                      value={formData.celular}
                      onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                    />
                  </div>
                </div>

                {/* UTN Community */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Comunidad UTN</h4>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      ¿Pertenecés a la comunidad UTN? *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="perteneceUTN"
                          value="si"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, pertenece_utn: e.target.value })}
                        />
                        <span className="ml-2">Sí</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="perteneceUTN"
                          value="no"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, pertenece_utn: e.target.value })}
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Comunidad UTN</label>
                    <select
                      name="comunidadUTN"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                      value={formData.comunidad_utn}
                      onChange={(e) => setFormData({ ...formData, comunidad_utn: e.target.value })}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="utn-frc">UTN FRC</option>
                      <option value="otra-regional">Otra Regional UTN</option>
                      <option value="no-pertenece">No pertenece</option>
                    </select>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">Soy... *</label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soy"
                          value="estudiante"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, soy: e.target.value })}
                        />
                        <span className="ml-2">Estudiante</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soy"
                          value="docente"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, soy: e.target.value })}
                        />
                        <span className="ml-2">Docente</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soy"
                          value="graduado"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, soy: e.target.value })}
                        />
                        <span className="ml-2">Graduado</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soy"
                          value="no-docente"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, soy: e.target.value })}
                        />
                        <span className="ml-2">No docente</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Student Questions */}
                {formData.soy === "estudiante" && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Académica</h4>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Especialidad / Si estás cursando una tecnicatura, contanos cuál *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Civil",
                          "Eléctrica",
                          "Electrónica",
                          "Industrial",
                          "Química",
                          "Mecánica",
                          "Metalúrgica",
                          "Sistemas",
                        ].map((carrera) => (
                          <label key={carrera} className="flex items-center">
                            <input
                              type="radio"
                              name="especialidad"
                              value={carrera.toLowerCase()}
                              className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                              onChange={(e) => setFormData({ ...formData, especialidad: e.target.value })}
                            />
                            <span className="ml-2">{carrera}</span>
                          </label>
                        ))}
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="especialidad"
                            value="otra"
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                            onChange={(e) => setFormData({ ...formData, especialidad: e.target.value })}
                          />
                          <span className="ml-2">Otra</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Legajo *</label>
                      <input
                        type="text"
                        name="legajo"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                        placeholder="Ingresa tu legajo"
                        value={formData.legajo}
                        onChange={(e) => setFormData({ ...formData, legajo: e.target.value })}
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <label className="block text-sm font-semibold text-gray-700 mb-4">Año que estás cursando *</label>
                      <div className="grid grid-cols-5 gap-3">
                        {["1°", "2°", "3°", "4°", "5°"].map((ano) => (
                          <label key={ano} className="flex items-center">
                            <input
                              type="checkbox"
                              value={ano}
                              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                              onChange={(e) => handleCheckboxChange("ano_cursando", e.target.value)}
                            />
                            <span className="ml-2">{ano}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Teacher Questions */}
                {formData.soy === "docente" && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Información Docente</h4>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿Qué materia dicta actualmente? *
                      </label>
                      <textarea
                        name="materiaActual"
                        rows={3}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-vertical"
                        placeholder="Describe la materia que dictas..."
                        value={formData.materia_actual}
                        onChange={(e) => setFormData({ ...formData, materia_actual: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Graduate Questions */}
                {formData.soy === "graduado" && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Información de Graduado</h4>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        ¿Graduado de qué ingeniería / tecnicatura? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Civil",
                          "Eléctrica",
                          "Electrónica",
                          "Industrial",
                          "Química",
                          "Mecánica",
                          "Metalúrgica",
                          "Sistemas",
                        ].map((carrera) => (
                          <label key={carrera} className="flex items-center">
                            <input
                              type="radio"
                              name="graduadoCarrera"
                              value={carrera.toLowerCase()}
                              className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                              onChange={(e) => setFormData({ ...formData, graduado_carrera: e.target.value })}
                            />
                            <span className="ml-2">{carrera}</span>
                          </label>
                        ))}
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="graduadoCarrera"
                            value="otra"
                            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                            onChange={(e) => setFormData({ ...formData, graduado_carrera: e.target.value })}
                          />
                          <span className="ml-2">Otra</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Non-teaching staff Questions */}
                {formData.soy === "no-docente" && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Actividades</h4>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿Qué actividades desarrollás en la facultad? *
                      </label>
                      <textarea
                        name="actividadesFacultad"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-vertical"
                        placeholder="Describe las actividades que realizas en la facultad..."
                        value={formData.actividades_facultad}
                        onChange={(e) => setFormData({ ...formData, actividades_facultad: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* TED Experience Questions - Now at the end */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">Experiencia TED</h4>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      ¿Conocías previamente las charlas TED? *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="conoceTED"
                          value="si"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, conoce_ted: e.target.value })}
                        />
                        <span className="ml-2">Sí</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="conoceTED"
                          value="no"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, conoce_ted: e.target.value })}
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      ¿Participaste en alguna edición de TEDxUTNCórdoba? *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="participoTEDx"
                          value="si"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, participo_tedx: e.target.value })}
                        />
                        <span className="ml-2">Sí</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="participoTEDx"
                          value="no"
                          className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                          onChange={(e) => setFormData({ ...formData, participo_tedx: e.target.value })}
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">📋 Información importante</h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Las inscripciones gratuitas están sujetas a un proceso de sorteo</li>
                    <li>• Serás notificado vía mail si fuiste sorteado</li>
                    <li>• Los cupos son limitados</li>
                    <li>• La información proporcionada será utilizada únicamente para la gestión del evento</li>
                  </ul>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Acepto los{" "}
                    <a href="#" className="text-red-600 hover:underline">
                      términos y condiciones
                    </a>{" "}
                    y autorizo el uso de mis datos personales para la gestión de este evento *
                  </label>
                </div>

                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:hover:transform-none flex items-center justify-center gap-2 min-w-[200px] mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Inscripción'
                    )}
                  </button>

                  {/* Mensajes de estado */}
                  {submitStatus === "success" && (
                    <div className="mt-6 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-md w-full">
                      <div className="flex items-center gap-2 justify-center">
                        <CheckCircle className="w-6 h-6" />
                        <span className="font-semibold text-lg">¡Inscripción enviada exitosamente!</span>
                      </div>
                      <p className="text-sm mt-3 text-center">Tu inscripción ha sido guardada correctamente. Serás notificado vía mail si fuiste sorteado.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-6 p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md w-full">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="font-semibold text-lg">Error al enviar la inscripción</span>
                      </div>
                      <p className="text-sm mt-3 text-center">Por favor, inténtalo de nuevo o contacta con el organizador.</p>
                    </div>
                  )}

                  <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
                    Al enviar este formulario, tus datos serán procesados para la gestión del evento
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
