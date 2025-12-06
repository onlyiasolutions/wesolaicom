"use client"

import { useState, useRef, useEffect } from "react"

export default function Footer() {
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (submitted) {
      setShowSuccess(false)
      const timer = setTimeout(() => {
        setShowSuccess(true)
      }, 10)
      return () => clearTimeout(timer)
    } else {
      setShowSuccess(false)
    }
  }, [submitted])

  // ... handlers like handleChange, handleNext, handleSubmit, etc.

  return (
    <div>
      {submitted ? (
        <div
          className={`text-center space-y-4 transition-all duration-300 ease-out transform ${
            showSuccess ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h2
            className="text-2xl md:text-3xl font-alias text-white"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
          >
            Solicitud enviada con éxito
          </h2>
          <p className="text-gray-300 font-montserrat text-sm md:text-base">
            Gracias por solicitar una consultoría con SolAI. Hemos recibido tus datos y en breve nos pondremos en contacto contigo para coordinar el día y la hora de la sesión.
          </p>
          <p className="text-gray-400 font-montserrat text-xs md:text-sm max-w-xl mx-auto">
            Revisa tu bandeja de entrada y también la carpeta de spam, y añade
            <span className="font-semibold"> hola@wesolai.com </span>
            a tus contactos para asegurarte de que recibes todos nuestros correos sin problemas.
          </p>
        </div>
      ) : (
        // formulario
        <form>
          {/* form fields and buttons here */}
        </form>
      )}
    </div>
  )
}
