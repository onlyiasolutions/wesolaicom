"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const levels = [
  {
    level: 1,
    title: "Despegue",
    subtitle: "Todo manual y en hojas de cálculo",
    bullets: [
      "Procesos repetitivos consumen horas diarias",
      "Errores humanos frecuentes",
      "Información dispersa en múltiples archivos",
      "Sin visibilidad de métricas en tiempo real"
    ]
  },
  {
    level: 2,
    title: "Ascenso",
    subtitle: "Algunas herramientas, cero automatización real",
    bullets: [
      "Herramientas sueltas sin integración",
      "Datos duplicados entre sistemas",
      "Procesos parcialmente digitalizados",
      "Falta de flujos automatizados"
    ]
  },
  {
    level: 3,
    title: "Expansión",
    subtitle: "Automatizaciones sueltas, sin estrategia ni métricas",
    bullets: [
      "Algunas automatizaciones funcionando",
      "Sin visión global del ecosistema",
      "Métricas limitadas o inexistentes",
      "Falta de roadmap claro"
    ]
  },
  {
    level: 4,
    title: "Órbita",
    subtitle: "Empresa casi autónoma, quieren escalar con IA avanzada",
    bullets: [
      "Sistemas automatizados funcionando",
      "Buscando optimización avanzada",
      "Necesidad de IA predictiva",
      "Escalabilidad y crecimiento"
    ]
  }
]

export function LevelsSection() {

  return (
    <section className="py-24 px-4 relative z-20">
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
            ¿En qué nivel está tu empresa?
          </h2>
          <p className="text-xl text-gray-400 font-montserrat max-w-2xl mx-auto">
            Identifica tu situación actual y descubre cómo podemos ayudarte a avanzar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-[#0F172A]/50 border-[#1D4ED8]/30 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1D4ED8]/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="default" className="bg-[#1D4ED8] text-white">
                      Nivel {level.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-alias text-white">
                    {level.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {level.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 font-montserrat">
                        <Check className="h-5 w-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-400 font-montserrat italic border-t border-[#1D4ED8]/30 pt-4">
                    Te ayudamos a pasar de tu Nivel {level.level} actual al siguiente escalón de madurez en IA.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1D4ED8] text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#1D4ED8]/50 hover:shadow-xl hover:shadow-[#3B82F6]/50 transition-all duration-300 hover:scale-105"
            >
              Quiero subir de nivel
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
