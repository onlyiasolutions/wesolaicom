"use client"

export default function Footer() {
  return (
    <footer className="bg-[#0b1224] border-t border-[#1D4ED8]/30 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logos/logo_white.png"
                alt="SolAI"
                className="h-10 w-auto object-contain"
              />
              <div>
                <p className="text-sm text-gray-300 font-montserrat">
                  SolAI Labs LLC
                </p>
                <p className="text-sm text-gray-400 font-montserrat">
                  IA estratégica para multiplicar tu negocio.
                </p>
              </div>
            </div>
            <p className="text-gray-300 font-montserrat leading-relaxed max-w-md">
              Diseñamos solvers y automatizaciones a medida para que tu equipo gane velocidad, precisión y foco estratégico.
            </p>
            <a
              href="/consultoria"
              className="inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3B82F6] transition btn-anim"
            >
              Agendar consultoría
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Navegación</h3>
            <ul className="space-y-2 text-gray-300 font-montserrat text-sm">
              <li>
                <a href="/#solvers" className="hover:text-white transition link-anim">
                  Solvers
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition link-anim">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/consultoria" className="hover:text-white transition link-anim">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Legal</h3>
            <ul className="space-y-2 text-gray-300 font-montserrat text-sm">
              <li>
                <a href="/aviso-legal" className="hover:text-white transition link-anim">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="/politica-privacidad" className="hover:text-white transition link-anim">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="hover:text-white transition link-anim">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Contacto</h3>
            <ul className="space-y-2 text-gray-300 font-montserrat text-sm">
              <li>
                <a href="mailto:hola@wesolai.com" className="hover:text-white transition link-anim">
                  hola@wesolai.com
                </a>
              </li>
              <li className="text-gray-400">+34 919 93 30 75</li>
              <li className="text-gray-400">Barrio Alceda 149B, Cantabria, España</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Síguenos</h3>
            <ul className="space-y-2 text-gray-300 font-montserrat text-sm">
              <li>
                <a
                  href="https://www.instagram.com/wesolai"
                  className="hover:text-white transition link-anim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/solai-labs"
                  className="hover:text-white transition link-anim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/@wesolai"
                  className="hover:text-white transition link-anim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-gray-400 text-xs font-montserrat flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p>© {new Date().getFullYear()} SolAI Labs LLC. Todos los derechos reservados.</p>
          <p className="text-gray-500">
            Construido con precisión y visión estratégica.
          </p>
        </div>
      </div>
    </footer>
  )
}
