"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AvisoLegal() {
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
            Aviso Legal y Términos de Servicio
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 font-montserrat leading-relaxed space-y-6">
              {/* Sección 1: Información general */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  1. Información general
                </h2>
                <p className="text-gray-300">
                  En cumplimiento de lo dispuesto por la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
                </p>
                <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6 mt-4">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Titular:</strong> SolAI Labs LLC
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">NIF:</strong> 51207437F
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Dirección:</strong> Barrio Alceda 149B, Cantabria, España
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Email de contacto:</strong>{" "}
                    <a href="mailto:soporte@wesolai.com" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                      soporte@wesolai.com
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Sitio web:</strong>{" "}
                    <a href="https://wesolai.com" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                      https://wesolai.com
                    </a>
                    {" "}(y dominios asociados de SolAI)
                  </p>
                </div>
                <p className="text-gray-300 mt-4">
                  El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena de este Aviso Legal y de los presentes Términos de Servicio.
                </p>
              </section>

              {/* Sección 2: Objeto del sitio web */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  2. Objeto del sitio web
                </h2>
                <p className="text-gray-300">
                  El sitio web de SolAI tiene por objeto:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Informar sobre los servicios de consultoría, automatización e implementación de soluciones de IA ofrecidos por SolAI.</li>
                  <li>Permitir el contacto, solicitud de consultorías y envío de formularios de interés.</li>
                  <li>Facilitar contenido informativo, educativo o comercial relacionado con nuestros servicios.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  El uso del sitio web no implica, por sí solo, el inicio de una relación contractual, salvo en aquellos casos en los que se contraten servicios de forma expresa.
                </p>
              </section>

              {/* Sección 3: Condiciones de uso */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  3. Condiciones de uso
                </h2>
                <p className="text-gray-300">
                  Como usuario te comprometes a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Hacer un uso responsable, adecuado y lícito del sitio web y de sus contenidos.</li>
                  <li>No utilizar el sitio web para actividades ilícitas, fraudulentas o que vulneren derechos de terceros.</li>
                  <li>No intentar vulnerar medidas de seguridad, realizar ingeniería inversa, ni introducir malware, virus o código malicioso.</li>
                  <li>No utilizar identidades falsas ni suplantar a otras personas o entidades.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  SolAI se reserva el derecho de suspender o denegar el acceso al sitio web a aquellos usuarios que incumplan estas condiciones.
                </p>
              </section>

              {/* Sección 4: Contratación de servicios */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  4. Contratación de servicios
                </h2>
                <p className="text-gray-300">
                  En caso de contratar servicios de SolAI (consultorías, proyectos de IA, automatizaciones, etc.):
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Las condiciones específicas (precio, alcance, plazos, entregables) se detallarán en propuestas, contratos o acuerdos particulares, que prevalecerán sobre este Aviso Legal en lo que pueda entrar en conflicto.
                  </li>
                  <li>
                    El pago se gestionará a través de los medios y pasarelas indicados (por ejemplo, Stripe u otros proveedores de pago).
                  </li>
                  <li>
                    SolAI podrá rechazar solicitudes de servicio cuando no cumplan con los criterios internos de viabilidad técnica, seguridad o riesgo.
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Salvo que se indique lo contrario por escrito, nuestros servicios están dirigidos fundamentalmente a empresas y profesionales (B2B), no a consumidores finales.
                </p>
              </section>

              {/* Sección 5: Propiedad intelectual */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  5. Propiedad intelectual e industrial
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Todo el contenido del sitio web (diseño, logotipos, textos, gráficos, imágenes, vídeos, código, estructuras de navegación, etc.) es titularidad de SolAI o de terceros que han autorizado su uso.
                  </li>
                  <li>
                    Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier uso no autorizado de dichos contenidos, salvo en los casos legalmente permitidos o con autorización expresa y por escrito de SolAI.
                  </li>
                  <li>
                    El uso del sitio web no implica cesión alguno de derechos de propiedad intelectual o industrial sobre sus contenidos.
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Cualquier uso no autorizado puede dar lugar a responsabilidades legales.
                </p>
              </section>

              {/* Sección 6: Enlaces externos */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  6. Enlaces externos (links)
                </h2>
                <p className="text-gray-300">
                  El sitio web puede incluir enlaces a sitios de terceros (por ejemplo: proveedores, herramientas de terceros, redes sociales, documentación externa).
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>SolAI no se hace responsable del contenido, políticas o prácticas de privacidad de dichos sitios de terceros.</li>
                  <li>La presencia de enlaces no implica relación, recomendación o apoyo de SolAI hacia los titulares de dichos sitios.</li>
                  <li>El acceso a sitios externos será responsabilidad exclusiva del usuario.</li>
                </ul>
              </section>

              {/* Sección 7: Responsabilidad */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  7. Responsabilidad
                </h2>
                <p className="text-gray-300">
                  SolAI no garantiza:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>La ausencia de errores en los contenidos del sitio web, aunque se esforzará en evitarlos y corregirlos cuando sea posible.</li>
                  <li>La continuidad del funcionamiento del sitio web, que puede verse afectado por tareas de mantenimiento, incidencias técnicas o causas ajenas al control de SolAI.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  En ningún caso SolAI será responsable de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Daños indirectos, lucro cesante o pérdida de oportunidades derivados del uso o imposibilidad de uso del sitio web.</li>
                  <li>Daños causados por decisiones tomadas en base a la información proporcionada en el sitio, sin un asesoramiento profesional individualizado.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Lo anterior se entiende sin perjuicio de las responsabilidades que no puedan excluirse conforme a la legislación aplicable.
                </p>
              </section>

              {/* Sección 8: Protección de datos */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  8. Protección de datos personales
                </h2>
                <p className="text-gray-300">
                  El tratamiento de los datos personales de los usuarios se rige por nuestra Política de Privacidad, donde se detalla:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>El responsable del tratamiento.</li>
                  <li>Las finalidades de uso de los datos.</li>
                  <li>Las bases legales (ejecución de contrato, consentimiento, interés legítimo, etc.).</li>
                  <li>Los plazos de conservación.</li>
                  <li>Los proveedores que intervienen en la prestación de servicios y las transferencias internacionales de datos.</li>
                  <li>Los derechos de los usuarios (acceso, rectificación, supresión, oposición, limitación, portabilidad).</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Puedes consultar la Política de Privacidad en el siguiente enlace de la web:{" "}
                  <Link href="/politica-privacidad" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                    Política de Privacidad
                  </Link>
                  .
                </p>
              </section>

              {/* Sección 9: Cookies */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  9. Cookies
                </h2>
                <p className="text-gray-300">
                  El uso de cookies y tecnologías similares en este sitio web se regula por nuestra Política de Cookies, donde se informa:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Qué tipos de cookies utilizamos.</li>
                  <li>Con qué finalidades.</li>
                  <li>Qué proveedores intervienen.</li>
                  <li>Cómo puedes configurar o revocar tu consentimiento.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Puedes consultar la Política de Cookies en el enlace correspondiente del sitio web:{" "}
                  <Link href="/politica-cookies" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                    Política de Cookies
                  </Link>
                  .
                </p>
              </section>

              {/* Sección 10: Menores de edad */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  10. Menores de edad
                </h2>
                <p className="text-gray-300">
                  Nuestros servicios no están dirigidos a menores de 18 años.
                </p>
                <p className="text-gray-300">
                  Si detectamos que se ha recopilado información de un menor sin autorización, tomaremos las medidas razonables para eliminar dichos datos.
                </p>
              </section>

              {/* Sección 11: Legislación aplicable */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  11. Legislación aplicable y jurisdicción
                </h2>
                <p className="text-gray-300">
                  Este Aviso Legal y los Términos de Servicio se rigen por la legislación española.
                </p>
                <p className="text-gray-300">
                  En caso de conflicto o discrepancia en la interpretación o aplicación de estas condiciones, y siempre que no exista una norma imperativa que disponga lo contrario, las partes se someterán a los Juzgados y Tribunales de Cantabria, España, renunciando a cualquier otro fuero que pudiera corresponderles.
                </p>
              </section>

              {/* Sección 12: Contacto */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  12. Contacto
                </h2>
                <p className="text-gray-300">
                  Para cualquier duda, consulta o incidencia relacionada con este Aviso Legal y los Términos de Servicio, puedes contactarnos en:
                </p>
                <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6 mt-4">
                  <p className="text-gray-300 font-montserrat mb-2">
                    <strong className="text-white">SolAI Labs LLC</strong>
                  </p>
                  <p className="text-gray-300 font-montserrat mb-2">
                    📧 Email:{" "}
                    <a href="mailto:soporte@wesolai.com" className="text-[#3B82F6] hover:text-[#1D4ED8] transition-colors">
                      soporte@wesolai.com
                    </a>
                  </p>
                  <p className="text-gray-300 font-montserrat mb-2">
                    📞 Teléfono:{" "}
                    <a href="tel:+34919933075" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                      +34 919 93 30 75
                    </a>
                  </p>
                  <p className="text-gray-300 font-montserrat">
                    Dirección: Barrio Alceda 149B, Cantabria, España
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

