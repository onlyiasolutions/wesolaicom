"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById("agenda")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative z-20 min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
      <div className="container mx-auto text-center relative z-20">
        <div className="relative flex justify-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.25em] text-gray-400 text-[10px] md:text-xs mb-10 font-montserrat font-medium -mt-20 relative inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm"
          >
            Escala tu negocio con SolAI
          </motion.span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-alias font-bold mb-6"
          style={{
            color: "#ffffff",
            background: "linear-gradient(to right, #ffffff, #3B82F6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)",
          }}
        >
          Automatiza procesos.
          <br />
          Potencia equipos. <span className="font-playfair font-normal italic tracking-[-0.02em] -ml-[4px]">Con IA.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-montserrat font-medium"
        >
          Libera tiempo para lo estratégico con la IA que no sustituye, sino que multiplica el talento humano.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="/consultoria">
            <Button
              size="lg"
              className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#1D4ED8]/50 hover:shadow-xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Agendar Consultoría
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button
            onClick={() => {
              const element = document.getElementById("solvers")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            variant="outline"
            size="lg"
            className="border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 font-montserrat font-medium"
          >
            Ver Solvers y Casos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 text-sm md:text-base"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle2 className="h-5 w-5 text-gray-300" />
            <span className="font-montserrat font-medium">+50 proyectos analizados</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle2 className="h-5 w-5 text-gray-300" />
            <span className="font-montserrat font-medium">98% satisfacción</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle2 className="h-5 w-5 text-gray-300" />
            <span className="font-montserrat font-medium">3x ROI medio en 6–12 meses</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
