"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1D4ED8]/30 bg-[#020617] py-12 px-4 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/logos/logo_white.png"
                alt="SolAI Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 font-montserrat text-sm">
              Transformando empresas con Inteligencia Artificial real.
            </p>
          </div>
          
          <div>
            <h4
              className="font-alias font-semibold text-white mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#solvers" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  Solvers
                </Link>
              </li>
              <li>
                <Link href="#agenda" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  Agendar Consultoría
                </Link>
              </li>
              <li>
                <Link href="#faq" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-alias font-semibold text-white mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/aviso-legal" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  Aviso Legal y Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  data-cky-toggle="preferences"
                  className="link-anim text-gray-400 hover:text-[#3B82F6] font-montserrat text-sm"
                >
                  Configuración de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-alias font-semibold text-white mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
            >
              Contacto
            </h4>
            <ul className="space-y-3 text-gray-400 font-montserrat text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:hola@wesolai.com" className="link-anim hover:text-[#3B82F6]">hola@wesolai.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-gray-400"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/></svg>
                <a href="tel:+34919933075" className="link-anim hover:text-[#3B82F6]">+34 919 93 30 75</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4
              className="font-alias font-semibold text-white mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25)" }}
            >
              Síguenos
            </h4>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/wesolailabs/" className="link-anim text-gray-400 hover:text-[#3B82F6]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/wesolailabs" className="link-anim text-gray-400 hover:text-[#3B82F6]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/wesolai" className="link-anim text-gray-400 hover:text-[#3B82F6]">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="mailto:hola@wesolai.com" className="link-anim text-gray-400 hover:text-[#3B82F6]">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#1D4ED8]/30 pt-8 text-center">
          <p className="text-gray-400 font-montserrat text-sm">
            © {new Date().getFullYear()} SolAI Labs LLC. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
