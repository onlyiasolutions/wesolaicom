"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué incluye la primera consultoría gratuita?",
    answer: "La primera consultoría gratuita incluye una auditoría completa de tus procesos actuales, identificación de oportunidades de automatización, un mapa inicial de Solvers recomendados y un roadmap de 90 días con objetivos claros y medibles. Todo sin compromiso."
  },
  {
    question: "¿Trabajáis solo con empresas grandes?",
    answer: "En SolAI, trabajamos con empresas de todos los tamaños. Desde startups hasta grandes corporaciones. Nuestros Solvers se adaptan a las necesidades específicas de cada negocio, independientemente de su tamaño."
  },
  {
    question: "¿Cuánto tiempo tardamos en ver resultados?",
    answer: "Los primeros resultados suelen verse en las primeras 4-6 semanas tras la implementación. Sin embargo, el ROI completo se alcanza típicamente entre los 6-12 meses, con un promedio de 3x retorno de inversión."
  },
  {
    question: "¿Necesito conocimientos técnicos para usar los Solvers?",
    answer: "No es necesario. Nuestros Solvers están diseñados para ser intuitivos y fáciles de usar. Además, proporcionamos formación completa y acompañamiento continuo para asegurar una adopción exitosa."
  },
  {
    question: "¿Qué tipo de procesos pueden automatizarse?",
    answer: "Prácticamente cualquier proceso repetitivo puede automatizarse: gestión de reservas, atención al cliente, generación de presupuestos, seguimiento de leads, reportes, recordatorios, y mucho más. En la consultoría identificamos las mejores oportunidades para tu negocio. Si no sabes qué automatizar, no te preocupes, en SolAI te ayudamos a identificar las mejores oportunidades para tu negocio."
  },
  {
    question: "¿Cómo funciona el proceso de implementación?",
    answer: "Tras la consultoría, incorporamos el Solver específico para tus necesidades. Luego lo implementamos en tu entorno, realizamos pruebas exhaustivas y te formamos en su uso. Finalmente, te acompañamos en la optimización continua para maximizar resultados."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 relative z-20 bg-slate-950">
      <div className="container mx-auto max-w-4xl">
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
            Preguntas <span className="font-playfair italic font-normal">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400 font-montserrat">
            Resolvemos tus dudas más comunes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 hover:border-[#1D4ED8]/40 rounded-lg px-6 ring-1 ring-[#1D4ED8]/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-alias text-white hover:text-gray-300 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 font-montserrat">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
