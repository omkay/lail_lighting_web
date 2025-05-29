"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface GlowingLineProps {
  color?: string
  height?: number
  className?: string
}

export function GlowingLine({ color = "#ffffff", height = 1, className = "" }: GlowingLineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const pixelRatio = window.devicePixelRatio || 1
    const width = canvas.offsetWidth * pixelRatio
    const lineHeight = height * pixelRatio

    canvas.width = width
    canvas.height = lineHeight * 10 // Make canvas taller for the glow effect

    const drawLine = () => {
      ctx.clearRect(0, 0, width, lineHeight * 10)

      // Create gradient for the glow
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)")
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)")
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.8)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)")

      // Draw the glowing line
      ctx.shadowColor = color
      ctx.shadowBlur = lineHeight * 5
      ctx.fillStyle = gradient
      ctx.fillRect(0, lineHeight * 2, width, lineHeight)
    }

    drawLine()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth * pixelRatio
      drawLine()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [color, height])

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: `${height * 10}px` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}
