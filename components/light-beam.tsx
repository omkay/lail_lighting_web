"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface LightBeamProps {
  color?: string
  delay?: number
  duration?: number
  width?: number
  height?: number
  angle?: number
  className?: string
}

export function LightBeam({
  color = "#ffffff",
  delay = 0,
  duration = 1.5,
  width = 1,
  height = 100,
  angle = 0,
  className,
}: LightBeamProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        transform: `rotate(${angle}deg)`,
        opacity: 0,
      }}
      animate={{
        opacity: isInView ? [0, 0.9, 0] : 0, // Increased max opacity
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 3 + 1,
      }}
    />
  )
}

export function LightBeamGroup() {
  // Add warm light color (2700K)
  const colors = ["#FFF1E0", "#FFE8CC", "#FFD6A5", "#ffffff", "#f5f5f5"]
  const beams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    width: Math.random() * 3 + 1, // Increased width
    height: Math.random() * 300 + 200, // Increased height
    angle: Math.random() * 180,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {beams.map((beam) => (
        <LightBeam
          key={beam.id}
          color={beam.color}
          delay={beam.delay}
          duration={beam.duration}
          width={beam.width}
          height={beam.height}
          angle={beam.angle}
          className="absolute opacity-0"
          style={{
            left: beam.left,
            top: beam.top,
            transformOrigin: "center bottom",
            filter: "blur(1px)", // Add slight blur for glow effect
          }}
        />
      ))}
    </div>
  )
}
