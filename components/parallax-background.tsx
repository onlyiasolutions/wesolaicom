"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const y2 = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617]" />
      
      {/* Animated shapes */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#1D4ED8]/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#1D4ED8]/10 rounded-full blur-3xl"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D4ED8_1px,transparent_1px),linear-gradient(to_bottom,#1D4ED8_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
    </div>
  )
}

