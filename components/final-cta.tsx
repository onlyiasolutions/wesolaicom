"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  const handleCTAClick = () => {
    window.location.href = "/consultoria"
  }

  return (
    <section id="agenda" className="py-32 px-4 relative z-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute inset-0 border-t border-b border-[#1D4ED8]/20" />
      
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
            className="btn-anim font-montserrat bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-lg shadow-2xl shadow-[#1D4ED8]/50 hover:shadow-[#3B82F6]/50 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)] font-bold"
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
