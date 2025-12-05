"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Map, Calendar } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Auditoría rápida",
    description: "Analizamos tu situación actual y procesos para identificar oportunidades de mejora inmediatas."
  },
  {
    number: 2,
    icon: Map,
    title: "Mapa de oportunidades",
    description: "Diseñamos un mapa completo de automatización y Solvers personalizados para tu negocio."
  },
  {
    number: 3,
    icon: Calendar,
    title: "Roadmap de 90 días",
    description: "Te entregamos un plan claro y ejecutable para los próximos 3 meses con objetivos medibles."
  }
]

export function ConsultingSection() {

  return (
    <section className="py-24 px-4 relative z-20 bg-slate-950">
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
            Consultoría Estratégica en IA <span className="font-playfair italic font-normal">para Empresas</span>
          </h2>
          <p className="text-xl text-gray-400 font-montserrat max-w-3xl mx-auto mb-6">
            Transformamos tu empresa en 3 pasos claros y medibles
          </p>
          <div className="inline-block bg-[#020617]/90 border border-[#1D4ED8]/40 text-white px-6 py-3 rounded-full font-montserrat font-semibold shadow-lg shadow-black/30 shadow-[0_0_30px_rgba(59,130,246,0.25)]">
            Primera consultoría 100% gratuita
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 hover:border-[#1D4ED8]/40 transition-all duration-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.65)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] ring-1 ring-[#1D4ED8]/30 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#1D4ED8] hover:bg-[#3B82F6] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                        {step.number}
                      </div>
                      <Icon className="h-8 w-8 text-gray-300" />
                    </div>
                    <CardTitle className="text-2xl font-alias text-white">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 font-montserrat text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/consultoria">
            <Button
              size="lg"
              className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#1D4ED8]/50 hover:shadow-xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Agendar Consultoría Gratuita
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
