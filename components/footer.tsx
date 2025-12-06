"use client"

export default function Footer() {
  return (
    <footer className="bg-[#0b1224] border-t border-[#1D4ED8]/30 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-3">
              <img
                src="/logos/logo_white.png"
                alt="SolAI"
                className="h-10 w-auto object-contain"
              />
              <p className="text-sm text-gray-300 font-montserrat">
                SolAI Labs LLC
              </p>
              <p className="text-sm text-gray-400 font-montserrat">
                IA estratégica para multiplicar tu negocio.
              </p>
            </div>
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
              <li>
                <a
                  href="#"
                  className="cky-banner-element hover:text-white transition link-anim cursor-pointer"
                  onClick={(e) => e.preventDefault()}
                >
                  Configuración de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Contacto</h3>
            <ul className="space-y-3 text-gray-300 font-montserrat text-sm">
              <li className="flex items-center gap-2">
                <a
                  href="mailto:hola@wesolai.com"
                  className="hover:text-white transition link-anim flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-300 hover:text-white transition"
                    fill="currentColor"
                  >
                    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zm2.75-.25a.25.25 0 0 0-.25.25v.29l7.5 4.51 7.5-4.51v-.29a.25.25 0 0 0-.25-.25zm14.5 12a.25.25 0 0 0 .25-.25v-8.71l-7.15 4.3a1 1 0 0 1-1 0L3 9.79v8.71a.25.25 0 0 0 .25.25z" />
                  </svg>
                  hola@wesolai.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href="tel:+34919933075"
                  className="hover:text-white transition link-anim flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-300 hover:text-white transition"
                    fill="currentColor"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1z" />
                  </svg>
                  +34 919 93 30 75
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-alias text-lg">Síguenos</h3>
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="https://www.instagram.com/wesolailabs"
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-300 hover:text-white transition"
                    fill="currentColor"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm8.75 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/wesolailabs/"
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-300 hover:text-white transition"
                    fill="currentColor"
                  >
                    <path d="M6.94 5.5A1.94 1.94 0 1 1 5 3.56 1.94 1.94 0 0 1 6.94 5.5zM4.5 8h2.9v11H4.5zm5 0h2.78v1.5h.04A3.06 3.06 0 0 1 15.94 8c3.05 0 3.61 2 3.61 4.61V19H16.7v-5.2c0-1.24 0-2.83-1.73-2.83s-2 1.35-2 2.74V19H9.5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/@wesolai"
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-gray-300 hover:text-white transition"
                    fill="currentColor"
                  >
                    <path d="M13.5 10.5H16l-.4 2.5h-2.1V21h-2.6v-8h-2v-2.5h2V8.25C10.9 6.18 12.1 5 14.36 5c.76 0 1.5.06 2.14.16l-.18 2.34h-1.3c-1.02 0-1.52.5-1.52 1.36z" />
                  </svg>
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
