"use client"

import { motion } from "framer-motion"
import { Search, Palette, Settings, TrendingUp } from "lucide-react"

const processes = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos en profundidad tus procesos, identificamos cuellos de botella y oportunidades de automatización."
  },
  {
    icon: Palette,
    title: "Diseño del Solver / Sistema",
    description: "Creamos una solución personalizada adaptada a tus necesidades específicas y objetivos de negocio."
  },
  {
    icon: Settings,
    title: "Implementación y pruebas",
    description: "Desarrollamos, integramos y probamos exhaustivamente para garantizar un funcionamiento perfecto."
  },
  {
    icon: TrendingUp,
    title: "Acompañamiento y optimización",
    description: "Te acompañamos en la adopción y optimizamos continuamente para maximizar resultados."
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 px-4 relative z-20 bg-gradient-to-b from-transparent via-[#0F172A]/30 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-alias font-bold mb-4 text-white"
            style={{
              background: "linear-gradient(to right, #ffffff, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)",
            }}
          >
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-gray-400 font-montserrat max-w-3xl mx-auto">
            Un proceso estructurado y probado para garantizar el éxito de tu transformación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon
            return (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#1D4ED8]/50">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-alias font-bold text-white mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  {process.title}
                </h3>
                <p className="text-gray-300 font-montserrat">
                  {process.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
