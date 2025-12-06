"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#020617]/95 backdrop-blur-md border-b border-[#1D4ED8]/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              } else {
                router.push("/")
              }
            }}
          >
            <img
              src="/logos/logo_white.png"
              alt="SolAI Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {pathname === "/" ? (
              <>
                <a
                  href="#solvers"
                  className="link-anim text-gray-300 hover:text-[#3B82F6] font-montserrat"
                >
                  Solvers
                </a>
                <a
                  href="#faq"
                  className="link-anim text-gray-300 hover:text-[#3B82F6] font-montserrat"
                >
                  FAQ
                </a>
              </>
            ) : (
              <a
                href="/"
                className="link-anim text-gray-300 hover:text-[#3B82F6] font-montserrat"
              >
                Inicio
              </a>
            )}
            <Link href="/consultoria">
              <Button
                className="btn-anim font-montserrat bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                Agendar Consultoría
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-transform duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X 
                className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="space-y-4 pt-2 bg-[#020617]/98 backdrop-blur-md border-t border-[#1D4ED8]/20 -mx-4 px-4 mt-2 rounded-b-lg">
            {pathname === "/" ? (
              <>
                <a
                  href="#solvers"
                  className={`link-anim block text-gray-300 hover:text-[#3B82F6] font-montserrat transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "0.1s" : "0s"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solvers
                </a>
                <a
                  href="#faq"
                  className={`link-anim block text-gray-300 hover:text-[#3B82F6] font-montserrat transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? "0.15s" : "0s"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </>
            ) : (
              <a
                href="/"
                className={`link-anim block text-gray-300 hover:text-[#3B82F6] font-montserrat transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? "0.1s" : "0s"
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </a>
            )}
            <Link
              href="/consultoria"
              className={`w-full block transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? "0.2s" : "0s"
              }}
            >
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-anim font-montserrat w-full bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                Agendar Consultoría
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
