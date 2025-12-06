/* eslint-disable @next/next/no-sync-scripts */
import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/footer"
import { ParallaxBackground } from "@/components/parallax-background"
import { MouseLightEffect } from "@/components/mouse-light-effect"
import { Navbar } from "@/components/navbar"

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
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Start cookieyes banner */}
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/d7babbe896b50556c063d4e845e7f39a/script.js"
        ></script>
        {/* End cookieyes banner */}
      </head>
      <body
        className={`${montserrat.variable} ${alias.variable} ${playfair.variable} font-montserrat antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-slate-50 min-h-screen flex flex-col`}
      >
        <div className="relative flex-1 overflow-hidden">
          <ParallaxBackground />
          <MouseLightEffect />
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
