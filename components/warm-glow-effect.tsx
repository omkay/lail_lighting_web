"use client"

import { useEffect, useRef } from "react"

export function WarmGlowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it taller for scrolling effect
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create warm light sources (2700K)
    const lightSources = Array.from({ length: 12 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 400 + 300, // Larger radius
      intensity: Math.random() * 0.5 + 0.3, // Higher intensity
      speed: Math.random() * 0.0003 + 0.0001,
    }))

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each light source
      lightSources.forEach((light) => {
        const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius)

        // 2700K warm light color with varying opacity
        gradient.addColorStop(0, `rgba(255, 241, 224, ${light.intensity})`)
        gradient.addColorStop(0.5, `rgba(255, 214, 165, ${light.intensity * 0.5})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2)
        ctx.fill()

        // Slowly move the light source
        light.x += Math.sin(Date.now() * light.speed) * 0.8
        light.y += Math.cos(Date.now() * light.speed) * 0.8

        // Pulse the intensity
        light.intensity = 0.3 + Math.sin(Date.now() * 0.001) * 0.2
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
