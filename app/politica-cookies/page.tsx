"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PoliticaCookies() {
  return (
    <main className="relative z-10 min-h-screen pt-24 page-fade">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-20 px-6"
      >
        <section className="max-w-4xl mx-auto">
          {/* Título principal */}
          <h1
            className="font-alias text-4xl md:text-5xl mb-8 text-white"
            style={{
              background: "linear-gradient(to right, #ffffff, #3B82F6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)",
            }}
          >
            Política de Cookies
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 font-montserrat leading-relaxed space-y-6">
              {/* Fecha de actualización */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-4">
                  <strong className="text-white">Actualizado el:</strong> 24 de agosto de 2025
                </p>
                <p className="text-gray-300">
                  En SolAI utilizamos cookies y tecnologías similares para mejorar la experiencia de usuario, garantizar la seguridad de la plataforma y analizar el rendimiento de nuestros servicios.
                </p>
                <p className="text-gray-300 mt-2">
                  Esta Política de Cookies explica qué son, qué tipos usamos, con qué finalidad y cómo puedes gestionarlas.
                </p>
              </div>

              {/* Sección 1: ¿Qué son las cookies? */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  1. ¿Qué son las cookies?
                </h2>
                <p className="text-gray-300">
                  Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Permiten reconocer tu dispositivo, recordar tus preferencias y recopilar información sobre tu navegación.
                </p>
              </section>

              {/* Sección 2: Tipos de cookies */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  2. Tipos de cookies que utilizamos
                </h2>

                <div className="space-y-6">
                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h3 className="font-alias text-xl text-white mb-3">
                      Cookies esenciales
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Necesarias para el funcionamiento básico del sitio.
                    </p>
                    <p className="text-gray-300 mb-3">
                      Ejemplos: inicio de sesión, seguridad, distribución de carga.
                    </p>
                    <p className="text-white font-semibold mb-2">Proveedores:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                      <li>Vercel (infraestructura y despliegue de la web).</li>
                      <li>Cloudflare (seguridad, CDN, protección contra ataques DDoS).</li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h3 className="font-alias text-xl text-white mb-3">
                      Cookies de análisis y rendimiento
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Nos permiten entender cómo los usuarios interactúan con nuestro sitio para mejorar el servicio.
                    </p>
                    <p className="text-white font-semibold mb-2">Proveedores:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                      <li>Google Analytics (análisis de tráfico y comportamiento).</li>
                      <li>Cloudflare Web Analytics (rendimiento y métricas de seguridad).</li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h3 className="font-alias text-xl text-white mb-3">
                      Cookies de funcionalidad
                    </h3>
                    <p className="text-gray-300">
                      Guardan tus preferencias (idioma, región, configuración).
                    </p>
                    <p className="text-gray-300 mt-2">
                      Mejoran la experiencia de usuario sin ser estrictamente necesarias.
                    </p>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h3 className="font-alias text-xl text-white mb-3">
                      Cookies publicitarias o de marketing
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Pueden ser utilizadas en campañas para medir resultados y optimizar anuncios.
                    </p>
                    <p className="text-white font-semibold mb-2">Proveedores:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                      <li>Google Ads / Google Tag Manager.</li>
                      <li>Redes sociales en caso de integraciones futuras (ej. Meta, LinkedIn).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sección 3: ¿Cómo usamos esta información? */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  3. ¿Cómo usamos esta información?
                </h2>
                <p className="text-gray-300">
                  Utilizamos las cookies para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Mantener la seguridad de la web.</li>
                  <li>Permitir el inicio de sesión y recordar preferencias.</li>
                  <li>Analizar el uso del sitio (qué páginas se visitan más, desde qué dispositivos, etc.).</li>
                  <li>Optimizar el rendimiento de la infraestructura (a través de Vercel y Cloudflare).</li>
                  <li>Mejorar campañas de marketing digital.</li>
                </ul>
              </section>

              {/* Sección 4: Consentimiento y gestión */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  4. Consentimiento y gestión de cookies
                </h2>
                <p className="text-gray-300">
                  Cuando accedes por primera vez a nuestro sitio, se muestra un banner de cookies que te permite:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Aceptar todas las cookies.</li>
                  <li>Rechazar todas excepto las esenciales.</li>
                  <li>Configurar preferencias para personalizar el uso de cookies.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Puedes cambiar tu configuración en cualquier momento desde el pie de página (&quot;Configuración de cookies&quot;) o ajustando las preferencias de tu navegador.
                </p>
              </section>

              {/* Sección 5: Terceros Proveedores */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  5. Terceros Proveedores
                </h2>
                <p className="text-gray-300">
                  En la prestación de nuestros servicios podemos integrar cookies o tecnologías similares de terceros, incluidos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Vercel Inc.</strong> – Hosting, despliegue y optimización de rendimiento.
                  </li>
                  <li>
                    <strong className="text-white">Cloudflare Inc.</strong> – CDN, seguridad, protección de tráfico y analítica básica.
                  </li>
                  <li>
                    <strong className="text-white">Google LLC</strong> – Analítica (Google Analytics), marketing (Ads), etiquetas (Tag Manager).
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Estos proveedores pueden recopilar y procesar datos de acuerdo con sus propias políticas de privacidad y cookies.
                </p>
              </section>

              {/* Sección 6: Actualizaciones */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  6. Actualizaciones de esta política
                </h2>
                <p className="text-gray-300">
                  Podemos actualizar esta Política de Cookies en cualquier momento para reflejar cambios legales, técnicos o de proveedores. La fecha de última actualización aparecerá al inicio del documento.
                </p>
              </section>

              {/* Sección 7: Contacto */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  7. Contáctanos
                </h2>
                <p className="text-gray-300">
                  Si tienes preguntas sobre nuestra Política de Cookies o sobre cómo gestionamos tus datos:
                </p>
                <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6 mt-4">
                  <p className="text-gray-300 font-montserrat">
                    📧 Email:{" "}
                    <a href="mailto:soporte@wesolai.com" className="text-[#3B82F6] hover:text-[#1D4ED8] transition-colors">
                      soporte@wesolai.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </main>
  )
}

