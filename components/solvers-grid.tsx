"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Users, FileText } from "lucide-react"

const solvers = [
  {
    name: "NEXO",
    role: "Gestor Inteligente de Reservas",
    problem: "Pérdida de citas por gestión manual y errores de coordinación",
    result: "+30% citas agendadas",
    icon: Clock
  },
  {
    name: "REMIND",
    role: "Recordatorios y reducción de no-shows",
    problem: "Ausencias sin aviso que generan pérdidas de tiempo y dinero",
    result: "-45% no-shows",
    icon: Users
  },
  {
    name: "RECAPTURE",
    role: "Recuperación de leads fríos",
    problem: "Leads que se enfrían y no se convierten en clientes",
    result: "+25% conversión de leads",
    icon: TrendingUp
  },
  {
    name: "QUOTE",
    role: "Presupuestos automatizados 24/7",
    problem: "Tiempo perdido creando presupuestos manualmente fuera de horario",
    result: "Respuesta en <2 minutos",
    icon: FileText
  }
]

export function SolversGrid() {
  return (
    <section id="solvers" className="py-24 px-4 relative z-20">
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
            Solvers de <span className="font-playfair italic font-normal">SolAI</span>
          </h2>
          <p className="text-xl text-gray-400 font-montserrat max-w-3xl mx-auto">
            Agentes inteligentes y automatizaciones diseñadas para resolver problemas específicos de tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solvers.map((solver, index) => {
            const Icon = solver.icon
            return (
              <motion.div
                key={solver.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 hover:border-[#1D4ED8]/50 transition-all duration-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.75)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] ring-1 ring-[#1D4ED8]/30 hover:ring-[#1D4ED8]/50 hover:scale-[1.02] h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-gray-300" />
                      <CardTitle
                        className="text-2xl font-alias text-white"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                      >
                        {solver.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 font-montserrat font-semibold">
                      {solver.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 font-montserrat mb-2">Problema que resuelve:</p>
                        <p className="text-gray-300 font-montserrat">{solver.problem}</p>
                      </div>
                      <div className="bg-[#020617]/90 rounded-lg p-4 border border-[#1D4ED8]/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <p className="text-sm text-gray-400 font-montserrat mb-1">Resultado esperado:</p>
                        <p
                          className="text-xl font-alias font-bold text-gray-100"
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                        >
                          {solver.result}
                        </p>
                      </div>
                    </div>
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
              variant="outline"
              size="lg"
              className="btn-anim font-montserrat border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-lg"
            >
              Ver todos los Solvers en una demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
