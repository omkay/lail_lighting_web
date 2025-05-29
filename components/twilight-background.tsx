"use client"

import { useEffect, useRef } from "react"

export function TwilightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

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

    // Create twilight gradient
    const drawTwilightGradient = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      // More vibrant twilight colors
      gradient.addColorStop(0, "rgba(15, 20, 40, 1)") // Deeper blue at top
      gradient.addColorStop(0.3, "rgba(25, 25, 50, 1)") // Richer blue-purple
      gradient.addColorStop(0.6, "rgba(40, 25, 65, 1)") // More vibrant purple
      gradient.addColorStop(0.8, "rgba(50, 25, 75, 1)") // Brighter purple
      gradient.addColorStop(1, "rgba(30, 15, 40, 1)") // Richer dark at bottom

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add more pronounced warm horizon glow
      const horizonY = canvas.height * 0.4
      const horizonGradient = ctx.createRadialGradient(
        canvas.width / 2,
        horizonY,
        0,
        canvas.width / 2,
        horizonY,
        canvas.width * 0.8,
      )

      horizonGradient.addColorStop(0, "rgba(90, 50, 80, 0.3)") // More visible warm purple
      horizonGradient.addColorStop(0.5, "rgba(80, 40, 80, 0.2)")
      horizonGradient.addColorStop(1, "rgba(40, 25, 60, 0)")

      ctx.fillStyle = horizonGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Add subtle noise texture
    const addNoiseTexture = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Very subtle noise
        const noise = Math.random() * 5 - 2.5
        data[i] = Math.min(255, Math.max(0, data[i] + noise)) // R
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)) // G
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)) // B
      }

      ctx.putImageData(imageData, 0, 0)
    }

    // Aurora wave parameters
    const auroraWaves = Array.from({ length: 3 }, (_, i) => ({
      y: canvas.height * (0.2 + i * 0.15), // Position waves at different heights
      amplitude: 60 + Math.random() * 40, // Increased wave height
      frequency: 0.002 + Math.random() * 0.001, // Wave frequency
      speed: 0.2 + Math.random() * 0.1, // Wave movement speed
      phase: 0, // Current phase (will be animated)
      color:
        i === 0
          ? "rgba(120, 220, 180, 0.25)" // Increased opacity for green-blue wave
          : i === 1
            ? "rgba(100, 170, 220, 0.22)" // Increased opacity for blue wave
            : "rgba(140, 120, 220, 0.2)", // Increased opacity for purple wave
      width: canvas.width,
      height: 180 + Math.random() * 120, // Increased thickness of the wave
    }))

    // Draw aurora waves
    const drawAuroraWaves = (time: number) => {
      auroraWaves.forEach((wave) => {
        // Update phase based on time and speed
        wave.phase += wave.speed * 0.01

        // Create gradient for the wave
        const gradient = ctx.createLinearGradient(0, wave.y - wave.height / 2, 0, wave.y + wave.height / 2)
        gradient.addColorStop(0, "rgba(0, 0, 0, 0)")
        gradient.addColorStop(0.5, wave.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()

        // Draw wave path
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < canvas.width; x += 5) {
          // Create smooth wave pattern with multiple sine waves
          const y =
            wave.y +
            Math.sin(x * wave.frequency + wave.phase) * wave.amplitude * 0.5 +
            Math.sin(x * wave.frequency * 0.5 + wave.phase * 1.3) * wave.amplitude * 0.3

          ctx.lineTo(x, y)
        }

        // Complete the wave shape
        ctx.lineTo(canvas.width, wave.y)
        ctx.lineTo(canvas.width, wave.y + wave.height)
        ctx.lineTo(0, wave.y + wave.height)
        ctx.closePath()
        ctx.fill()
      })
    }

    // Animation loop
    const animate = (time: number) => {
      // Clear canvas and redraw background
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawTwilightGradient()

      // Draw aurora waves
      drawAuroraWaves(time)

      // Add noise texture for a more natural look
      if (time % 30 === 0) {
        // Only add noise occasionally to improve performance
        addNoiseTexture()
      }

      // Continue animation
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "normal", opacity: 1 }}
    />
  )
}
