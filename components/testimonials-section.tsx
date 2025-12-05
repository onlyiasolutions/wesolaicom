"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechSolutions",
    company: "TechSolutions",
    content: "SolAI transformó completamente nuestros procesos. En 6 meses redujimos el tiempo de gestión en un 60% y aumentamos nuestra productividad un 3x.",
    metric: "3x productividad",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Director de Operaciones",
    company: "InnovateCorp",
    content: "La consultoría gratuita fue el mejor punto de partida. Identificaron oportunidades que ni siquiera sabíamos que teníamos. Los Solvers de SolAI son increíbles.",
    metric: "+45% eficiencia",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Fundadora",
    company: "StartupHub",
    content: "Desde que implementamos NEXO y REMIND, nuestras reservas aumentaron un 30% y los no-shows bajaron casi a cero. ROI espectacular.",
    metric: "ROI 4x en 8 meses",
    rating: 5
  }
]

export function TestimonialsSection() {
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
            Casos de <span className="font-playfair italic font-normal">Éxito</span>
          </h2>
          <p className="text-xl text-gray-400 font-montserrat max-w-3xl mx-auto">
            Empresas que ya están transformando su futuro con SolAI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 hover:border-[#1D4ED8]/40 transition-all duration-300 hover:shadow-[0_18px_60px_rgba(0,0,0,0.65)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] ring-1 ring-[#1D4ED8]/30 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-alias font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400 font-montserrat">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>

                  <p className="text-gray-300 font-montserrat mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <Badge variant="secondary" className="bg-[#020617]/90 text-gray-100 border border-[#1D4ED8]/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {testimonial.metric}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
