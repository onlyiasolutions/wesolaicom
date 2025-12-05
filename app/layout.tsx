import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ParallaxBackground } from "@/components/parallax-background"
import { MouseLightEffect } from "@/components/mouse-light-effect"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

const alias = localFont({
  src: [
    {
      path: "/fonts/alias-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/alias-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-alias",
  display: "swap",
})

const playfair = localFont({
  src: [
    {
      path: "/fonts/PlayfairDisplayItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SolAI - Transforma tu Negocio con Inteligencia Artificial Real",
  description: "Consultoría estratégica en IA y Solvers personalizados. Automatizamos procesos, aumentamos productividad y creamos soluciones a medida para tu empresa.",
  keywords: "inteligencia artificial, IA, automatización, consultoría IA, Solvers, transformación digital",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${alias.variable} ${playfair.variable} font-montserrat antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-slate-50`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <ParallaxBackground />
          <MouseLightEffect />
          {children}
        </div>
      </body>
    </html>
  )
}
