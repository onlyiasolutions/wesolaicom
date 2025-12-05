"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/logos/logo_white.png"
              alt="SolAI Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#solvers"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors font-montserrat"
            >
              Solvers
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-[#3B82F6] transition-colors font-montserrat"
            >
              FAQ
            </a>
            <Link href="/consultoria">
              <Button
                className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1D4ED8] text-white"
              >
                Agendar Consultoría
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a
              href="#solvers"
              className="block text-gray-300 hover:text-[#3B82F6] transition-colors font-montserrat"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solvers
            </a>
            <a
              href="#faq"
              className="block text-gray-300 hover:text-[#3B82F6] transition-colors font-montserrat"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Link href="/consultoria" className="w-full">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1D4ED8] text-white"
              >
                Agendar Consultoría
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
