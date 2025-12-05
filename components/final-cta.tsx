"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  const handleCTAClick = () => {
    // TODO: Reemplazar con tu URL de formulario/calendario (ej: Calendly, Google Forms, etc.)
    // Ejemplo: window.open('https://calendly.com/tu-usuario/consultoria', '_blank')
    // O abrir un modal de formulario: setShowFormModal(true)
    
    // Por ahora, redirige a un formulario de contacto o calendario
    // Puedes cambiar esta URL por la de tu sistema de reservas
    window.open('https://calendly.com', '_blank')
  }

  return (
    <section id="agenda" className="py-32 px-4 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#1D4ED8] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.3),transparent_70%)]" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-6xl font-alias font-bold mb-6 text-white"
            style={{
              textShadow: "0 3px 6px rgba(0,0,0,0.45), 0 8px 16px rgba(0,0,0,0.35), 0 12px 28px rgba(0,0,0,0.25)"
            }}
          >
            Da el primer paso hacia tu empresa <span className="font-playfair italic font-normal">con IA</span>
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-montserrat font-medium"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
          >
            Agenda tu consultoría y descubre cómo la Inteligencia Artificial puede transformar tu negocio
          </p>
          
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-white text-[#1D4ED8] hover:bg-gray-100 text-xl px-12 py-8 rounded-lg shadow-2xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105 font-alias font-bold"
          >
            <span>
              Agendar Consultoría
            </span>
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
