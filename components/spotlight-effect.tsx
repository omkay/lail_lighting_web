"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface SpotlightEffectProps {
  intensity?: number
  size?: number
  color?: string
  className?: string
  children?: React.ReactNode
}

export function SpotlightEffect({
  intensity = 0.6,
  size = 0.5,
  color = "255, 255, 255",
  className = "",
  children,
}: SpotlightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const spotlightOpacity = useTransform(scrollYProgress, [0, 0.5], [intensity, intensity * 0.3])
  const spotlightSize = useTransform(scrollYProgress, [0, 0.5], [size, size * 1.2])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      // Calculate position relative to the container
      const x = ((clientX - left) / width) * 100
      const y = ((clientY - top) / height) * 100

      // Update the CSS variable for the spotlight position
      containerRef.current.style.setProperty("--x", `${x}%`)
      containerRef.current.style.setProperty("--y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), rgba(${color}, ${spotlightOpacity}) 0%, rgba(0, 0, 0, 0) ${spotlightSize.get() * 100}%)`,
          mixBlendMode: "soft-light",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export function StaticSpotlightEffect({
  intensity = 0.6,
  size = 0.5,
  color = "255, 255, 255",
  className = "",
  children,
}: SpotlightEffectProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 30%, rgba(${color}, ${intensity}) 0%, rgba(0, 0, 0, 0) ${size * 100}%)`,
          mixBlendMode: "soft-light",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function DualSpotlightEffect({
  intensity = 0.6,
  size = 0.5,
  color = "255, 255, 255",
  className = "",
  children,
}: SpotlightEffectProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(${color}, ${intensity}) 0%, rgba(0, 0, 0, 0) ${size * 70}%),
            radial-gradient(circle at 70% 70%, rgba(${color}, ${intensity * 0.8}) 0%, rgba(0, 0, 0, 0) ${size * 70}%)
          `,
          mixBlendMode: "soft-light",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
