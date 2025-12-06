"use client"

import React, { useState, ChangeEvent, FormEvent, useRef } from "react"

type FormData = {
  nombre: string
  apellidos: string
  email: string
  telefono: string
  empresa: string
  web: string
  cargo: string
  sector: string
}

const initialData: FormData = {
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  empresa: "",
  web: "",
  cargo: "",
  sector: "",
}

export default function ConsultoriaPage() {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return
    }
    setStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    await fetch("https://n8n.srv975799.hstgr.cloud/webhook/180529e0-483f-4b3b-bbd4-37dab164aba7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 relative z-20 page-fade">
        <div className="max-w-xl w-full rounded-2xl border border-[#1D4ED8]/30 bg-[#0F172A]/90 p-8 shadow-xl">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Solicitud enviada
          </h1>
          <p className="text-gray-300 mb-6">
            Gracias por solicitar una consultoría con SolAI. Hemos recibido tus
            datos y nos pondremos en contacto contigo en breve para coordinar
            el día y la hora.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3B82F6] transition"
          >
            Volver a la página principal
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4 py-12 relative z-20 page-fade">
      <div className="max-w-xl w-full rounded-2xl border border-[#1D4ED8]/30 bg-[#0F172A]/90 p-8 shadow-xl">
        <div className="w-full flex justify-center mb-6">
          <a href="/" className="inline-block">
            <img
              src="/logos/logo_white.png"
              alt="SolAI Logo"
              className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
            />
          </a>
        </div>
        {/* Stepper header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#3B82F6]">
              Agendar consultoría
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold mt-2 text-white">
              Cuéntanos sobre ti y tu empresa
            </h1>
          </div>
          <div className="ml-4 flex flex-col items-end text-sm text-gray-300">
            <span>Paso {step} de 3</span>
          </div>
        </div>

        {/* Stepper indicators */}
        <div className="flex items-center gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-[#3B82F6]" : "bg-[#1D4ED8]/30"}`} />
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-[#3B82F6]" : "bg-[#1D4ED8]/30"}`} />
          <div className={`h-1 flex-1 rounded-full ${step >= 3 ? "bg-[#3B82F6]" : "bg-[#1D4ED8]/30"}`} />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  name="apellidos"
                  type="text"
                  required
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="Tus apellidos"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="+34 ..."
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="empresa">
                  Nombre de la empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="SolAI, Dentalia, etc."
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="web">
                  Web Empresa
                </label>
                <input
                  id="web"
                  name="web"
                  type="url"
                  required
                  value={formData.web}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="https://tuempresa.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="cargo">
                  Cargo
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  required
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="CEO, Founder, Director de operaciones..."
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-300" htmlFor="sector">
                  Sector
                </label>
                <input
                  id="sector"
                  name="sector"
                  type="text"
                  required
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#1D4ED8]/30 bg-[#020617] px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#3B82F6]"
                  placeholder="Clínicas, gimnasios, formación, etc."
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-300">
                Revisa que tus datos sean correctos antes de enviar tu solicitud de
                consultoría.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-white">
                  <span className="font-medium text-gray-300">Nombre: </span>
                  {formData.nombre} {formData.apellidos}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Email: </span>
                  {formData.email}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Teléfono: </span>
                  {formData.telefono}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Empresa: </span>
                  {formData.empresa}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Web Empresa: </span>
                  {formData.web}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Cargo: </span>
                  {formData.cargo}
                </p>
                <p className="text-white">
                  <span className="font-medium text-gray-300">Sector: </span>
                  {formData.sector}
                </p>
              </div>
            </div>
          )}

          {/* Botones */}
          <div className="mt-8 flex items-center justify-between">
            {/* Botón izquierda dinámico */}
            {step === 1 ? (
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="link-anim text-sm text-gray-300 hover:text-white flex items-center gap-2 font-montserrat"
              >
                ← Inicio
              </button>
            ) : (
              <button
                type="button"
                onClick={handleBack}
                className="link-anim text-sm text-gray-300 hover:text-white flex items-center gap-2 font-montserrat"
              >
                ← Atrás
              </button>
            )}

            {/* Botones derechas: Siguiente / Enviar */}
            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="btn-anim font-montserrat inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-4 md:px-5 py-2 md:py-2.5 text-sm font-semibold text-white hover:bg-[#3B82F6]"
              >
                Siguiente
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                className="btn-anim font-montserrat inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-4 md:px-5 py-2 md:py-2.5 text-sm font-semibold text-white hover:bg-[#3B82F6]"
              >
                Enviar solicitud
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}
