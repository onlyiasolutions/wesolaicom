"use client"

import { motion } from "framer-motion"

export default function PoliticaPrivacidad() {
  return (
    <main className="relative z-10 min-h-screen pt-24 page-fade">
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
            Política de Privacidad
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 font-montserrat leading-relaxed space-y-6">
              {/* Fecha de actualización */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-4">
                  <strong className="text-white">Actualizado el:</strong> 24 de agosto de 2025
                </p>
                <p className="text-gray-300">
                  En SolAI Labs LLC (&quot;SolAI&quot;, &quot;nosotros&quot;, &quot;nuestra empresa&quot;) nos comprometemos a proteger y respetar tu privacidad.
                </p>
                <p className="text-gray-300 mt-2">
                  Esta Política de Privacidad describe cómo recopilamos, usamos y compartimos tu información personal cuando utilizas nuestro sitio web y nuestros servicios relacionados.
                </p>
              </div>

              {/* Sección 1: Responsable del tratamiento */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  1. Responsable del tratamiento
                </h2>
                <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Responsable:</strong> SolAI Labs LLC
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">NIF:</strong> 51207437F
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Dirección:</strong> Barrio Alceda 149B, Cantabria, España
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Email de contacto:</strong>{" "}
                    <a href="mailto:soporte@wesolai.com" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                      soporte@wesolai.com
                    </a>
                  </p>
                </div>
                <p className="text-gray-300 mt-4">
                  A efectos de esta Política, SolAI es responsable del tratamiento de tus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la normativa española vigente en materia de protección de datos.
                </p>
              </section>

              {/* Sección 2: Datos personales que recopilamos */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  2. Datos personales que recopilamos
                </h2>
                <p className="text-gray-300">
                  Podemos recopilar las siguientes categorías de datos:
                </p>
                
                <h3 className="font-alias text-xl text-white mt-6 mb-3">
                  2.1. Información personal de identificación
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Empresa, cargo, sector</li>
                  <li>URL de la web de tu empresa</li>
                  <li>Cualquier otro dato que nos facilites al rellenar formularios, solicitar una consultoría, contratar un servicio o ponerte en contacto con nosotros.</li>
                </ul>

                <h3 className="font-alias text-xl text-white mt-6 mb-3">
                  2.2. Datos de uso y navegación
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas, tiempo de permanencia y rutas de navegación</li>
                  <li>Origen de la visita (por ejemplo, campañas, redes sociales, Google Ads, etc.)</li>
                </ul>

                <h3 className="font-alias text-xl text-white mt-6 mb-3">
                  2.3. Datos de facturación y pagos
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Datos identificativos para facturación</li>
                  <li>Información parcial relacionada con el medio de pago (la información completa de la tarjeta se trata únicamente a través de proveedores externos como Stripe; SolAI no almacena los datos completos de la tarjeta).</li>
                </ul>
              </section>

              {/* Sección 3: Finalidades del tratamiento */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  3. Finalidades del tratamiento
                </h2>
                <p className="text-gray-300">
                  Tratamos tus datos personales para las siguientes finalidades:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Atención de solicitudes y soporte</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Responder a tus consultas, solicitudes de información o presupuestos.</li>
                      <li>Gestionar reservas de consultorías y reuniones.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Prestación de servicios y ejecución de contratos</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Configurar e implementar las soluciones de SolAI (solvers, agentes, automatizaciones, etc.).</li>
                      <li>Mantener la relación contractual y de soporte con clientes.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Gestión administrativa, contable y fiscal</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Emisión de presupuestos, facturas y justificantes de pago.</li>
                      <li>Cumplimiento de obligaciones legales en materia contable y tributaria.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Marketing y comunicaciones comerciales (solo con consentimiento)</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Envío de newsletters, contenidos educativos, invitaciones a webinars o lanzamientos.</li>
                      <li>Envío de ofertas y comunicaciones comerciales relacionadas con nuestros servicios, siempre que lo hayas autorizado.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Analítica web y mejora de la experiencia de usuario</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Analizar el rendimiento del sitio web y de las campañas.</li>
                      <li>Mejorar servicios, contenidos y funcionalidades.</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Seguridad y prevención del fraude</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>Detección de actividades sospechosas o fraudulentas.</li>
                      <li>Protección de la seguridad de nuestra infraestructura y de la información.</li>
                    </ul>
                  </li>
                </ol>
              </section>

              {/* Sección 4: Bases legales del tratamiento */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  4. Bases legales del tratamiento
                </h2>
                <p className="text-gray-300">
                  Las bases jurídicas que legitiman el tratamiento de tus datos son:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Ejecución de un contrato</strong>
                    <br />
                    Cuando tratamos tus datos para prestarte servicios, gestionar consultorías o realizar acciones precontractuales a tu petición.
                  </li>
                  <li>
                    <strong className="text-white">Cumplimiento de obligaciones legales</strong>
                    <br />
                    Cuando tratamos tus datos por motivos contables, fiscales o de prevención del fraude exigidos por la normativa aplicable.
                  </li>
                  <li>
                    <strong className="text-white">Consentimiento</strong>
                    <br />
                    Para el envío de comunicaciones comerciales y marketing, así como para el uso de cookies no esenciales (analíticas, marketing). Puedes retirar tu consentimiento en cualquier momento.
                  </li>
                  <li>
                    <strong className="text-white">Interés legítimo</strong>
                    <br />
                    Para garantizar la seguridad de la web, prevención de fraudes, mejora continua de servicios y mantenimiento de la infraestructura técnica, siempre respetando tus derechos y libertades.
                  </li>
                </ul>
              </section>

              {/* Sección 5: Plazos de conservación */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  5. Plazos de conservación de los datos
                </h2>
                <p className="text-gray-300">
                  Conservamos tus datos personales durante los siguientes periodos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Leads y contactos comerciales:</strong> hasta 12 meses desde el último contacto significativo (por ejemplo, respuesta a un email, solicitud de información), salvo que retires antes tu consentimiento.
                  </li>
                  <li>
                    <strong className="text-white">Clientes y facturación:</strong> mínimo 6 años, por obligación legal en materia fiscal y contable.
                  </li>
                  <li>
                    <strong className="text-white">Datos de analítica web en forma agregada:</strong> hasta 26 meses (según configuración estándar de herramientas como Google Analytics).
                  </li>
                  <li>
                    Transcurridos esos plazos, los datos se eliminarán de forma segura o se anonimizarán para su uso con fines estadísticos o analíticos.
                  </li>
                </ul>
              </section>

              {/* Sección 6: Destinatarios y proveedores */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  6. Destinatarios y proveedores (encargados de tratamiento)
                </h2>
                <p className="text-gray-300">
                  No vendemos ni alquilamos tus datos personales.
                </p>
                <p className="text-gray-300">
                  Podemos compartirlos únicamente con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Proveedores de servicios tecnológicos y de infraestructura necesarios para el funcionamiento de la web y de nuestros servicios.</li>
                  <li>Proveedores de pago y facturación.</li>
                  <li>Proveedor(es) de mensajería / telefonía para envíos de SMS, WhatsApp, llamadas o notificaciones automáticas.</li>
                  <li>Autoridades administrativas o judiciales, cuando exista obligación legal.</li>
                </ul>

                <h3 className="font-alias text-xl text-white mt-6 mb-3">
                  Principales proveedores y marcos de transferencia:
                </h3>

                <div className="space-y-6 mt-4">
                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.1. Google LLC – Analítica, etiquetas, publicidad</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> Google Analytics 4, Google Tag Manager, Google Ads.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> DPF (EU-US Data Privacy Framework).</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.dataprivacyframework.gov/participant/5780
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://policies.google.com/privacy/frameworks?hl=es" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://policies.google.com/privacy/frameworks?hl=es
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.2. Stripe, Inc. – Pasarela de pago</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> procesado de pagos, facturación.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> DPF.</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://www.dataprivacyframework.gov/participant/6436" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.dataprivacyframework.gov/participant/6436
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://stripe.com/es/legal/data-privacy-framework" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://stripe.com/es/legal/data-privacy-framework
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.3. Twilio Inc. – Mensajería y telefonía</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> SMS, WhatsApp, voz, comunicaciones automatizadas.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> DPF y DPA (Data Protection Addendum).</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://www.twilio.com/en-us/legal/privacy" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.twilio.com/en-us/legal/privacy
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.twilio.com/en-us/legal/data-protection-addendum" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.twilio.com/en-us/legal/data-protection-addendum
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.4. Framer B.V. / Framer Inc. (si corresponde)</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> construcción/hosting de sitios web.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> DPA con SCCs (Standard Contractual Clauses) cuando hay transferencias fuera del EEE.</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://www.framer.com/legal/data-processing-addendum/" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.framer.com/legal/data-processing-addendum/
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.5. Vercel Inc. – Hosting, despliegue y CDN</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> alojamiento, despliegue y distribución de nuestra web.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> DPF.</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://vercel.com/changelog/vercel-is-now-certified-under-the-eu-us-data-privacy-framework-dpf
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://vercel.com/legal/privacy-policy
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6">
                    <h4 className="font-alias text-lg text-white mb-3">6.6. Namecheap, Inc. – Dominios y DNS (si aplica)</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 text-sm">
                      <li><strong className="text-white">Servicios:</strong> registro y gestión de dominios, DNS.</li>
                      <li><strong className="text-white">Marco de transferencias:</strong> SCCs (cláusulas contractuales tipo) según su DPA.</li>
                      <li><strong className="text-white">Documentación:</strong></li>
                      <li className="ml-4">
                        <a href="https://www.namecheap.com/legal/universal/data-processing-addendum/" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.namecheap.com/legal/universal/data-processing-addendum/
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.namecheap.com/legal/general/privacy-policy/" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8] break-all">
                          https://www.namecheap.com/legal/general/privacy-policy/
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sección 7: Transferencias internacionales */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  7. Transferencias internacionales de datos
                </h2>
                <p className="text-gray-300">
                  Cuando utilizamos proveedores situados fuera del Espacio Económico Europeo, se aplican las siguientes garantías:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Proveedores certificados en el EU–US Data Privacy Framework (DPF).</li>
                  <li>Firma de Cláusulas Contractuales Tipo (SCCs) aprobadas por la Comisión Europea, junto con medidas adicionales de seguridad (cifrado, minimización, limitación de acceso).</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  En todo caso, sólo se realizarán transferencias internacionales cuando exista una base legal adecuada y con las debidas garantías de protección.
                </p>
              </section>

              {/* Sección 8: Cookies */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  8. Cookies y tecnologías similares
                </h2>
                <p className="text-gray-300">
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Recordar tus preferencias y configuración.</li>
                  <li>Analizar el uso y rendimiento de la web.</li>
                  <li>Mejorar funcionalidades y servicios.</li>
                  <li>En su caso, medir campañas de marketing.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Las cookies no esenciales (analíticas o de marketing) se utilizan únicamente si otorgas tu consentimiento a través del banner de cookies.
                </p>
                <p className="text-gray-300">
                  Puedes obtener información más detallada en nuestra{" "}
                  <a href="/politica-cookies" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                    Política de Cookies
                  </a>
                  {" "}y configurar tus preferencias en cualquier momento.
                </p>
              </section>

              {/* Sección 9: Derechos de los usuarios */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  9. Derechos de los usuarios
                </h2>
                <p className="text-gray-300">
                  Como usuario, puedes ejercer los siguientes derechos sobre tus datos personales:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Acceso:</strong> saber qué datos tratamos y obtener una copia.
                  </li>
                  <li>
                    <strong className="text-white">Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.
                  </li>
                  <li>
                    <strong className="text-white">Supresión:</strong> pedir la eliminación de tus datos cuando ya no sean necesarios o retires tu consentimiento.
                  </li>
                  <li>
                    <strong className="text-white">Oposición:</strong> oponerte a ciertos tratamientos (por ejemplo, marketing directo).
                  </li>
                  <li>
                    <strong className="text-white">Limitación del tratamiento:</strong> solicitar que limitemos temporalmente el uso de tus datos en determinados supuestos.
                  </li>
                  <li>
                    <strong className="text-white">Portabilidad:</strong> recibir tus datos en un formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.
                  </li>
                  <li>
                    <strong className="text-white">Retirada del consentimiento:</strong> en cualquier momento, cuando el tratamiento se base en el consentimiento (por ejemplo, marketing o determinadas cookies).
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Para ejercer tus derechos, puedes escribirnos a:
                </p>
                <p className="text-gray-300">
                  📧{" "}
                  <a href="mailto:soporte@wesolai.com" className="text-[#3B82F6] hover:text-[#1D4ED8] transition-colors">
                    soporte@wesolai.com
                  </a>
                </p>
                <p className="text-gray-300 mt-4">
                  Incluye tu nombre, apellidos, la petición concreta y, si es necesario, algún documento que acredite tu identidad.
                </p>
                <p className="text-gray-300 mt-4">
                  También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que el tratamiento de tus datos infringe la normativa:
                </p>
                <p className="text-gray-300">
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
                    https://www.aepd.es
                  </a>
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
                  No recopilamos de forma intencionada información personal de menores.
                </p>
                <p className="text-gray-300">
                  Si eres padre, madre o tutor y consideras que un menor nos ha proporcionado datos personales, ponte en contacto con nosotros para que podamos revisarlos y, en su caso, eliminarlos.
                </p>
              </section>

              {/* Sección 11: Seguridad */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  11. Seguridad de la información
                </h2>
                <p className="text-gray-300">
                  Aplicamos medidas técnicas y organizativas razonables para proteger tus datos personales, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Control de accesos.</li>
                  <li>Uso de conexiones seguras (HTTPS).</li>
                  <li>Medidas de minimización de datos.</li>
                  <li>Evaluaciones periódicas de seguridad.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Sin embargo, debes tener en cuenta que ningún sistema es 100% seguro y siempre existe cierto riesgo en cualquier transmisión de datos por Internet.
                </p>
              </section>

              {/* Sección 12: Cambios en la política */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  12. Cambios en esta Política de Privacidad
                </h2>
                <p className="text-gray-300">
                  Podemos actualizar esta Política de Privacidad en cualquier momento para reflejar cambios legales, técnicos o en la prestación de servicios.
                </p>
                <p className="text-gray-300">
                  La versión vigente será siempre la que aparezca publicada en esta página, indicando la fecha de última actualización.
                </p>
                <p className="text-gray-300">
                  Te recomendamos revisar esta política periódicamente.
                </p>
              </section>

              {/* Sección 13: Contacto */}
              <section className="space-y-4">
                <h2
                  className="font-alias text-2xl md:text-3xl text-white mt-8 mb-4"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
                >
                  13. Contacto
                </h2>
                <p className="text-gray-300">
                  Si tienes preguntas, dudas o quieres ejercer cualquiera de tus derechos, puedes contactarnos en:
                </p>
                <div className="bg-[#020617]/90 border border-white/5 border-[#1D4ED8]/20 rounded-lg p-6 mt-4">
                  <p className="text-gray-300 font-montserrat mb-2">
                    <strong className="text-white">SolAI Labs LLC</strong>
                  </p>
                  <p className="text-gray-300 font-montserrat mb-2">
                    📧 Email:{" "}
                    <a href="mailto:soporte@wesolai.com" className="link-anim text-[#3B82F6] hover:text-[#1D4ED8]">
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
    </main>
  )
}
