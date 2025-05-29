"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimate } from "framer-motion"

interface ShootingStar {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  duration: number
  size: number
  delay: number
}

export function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [scope, animate] = useAnimate()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight * 3, // Make it taller for scrolling effect
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    // Create a shooting star every 15 seconds (moderate frequency)
    const createShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * dimensions.width,
        startY: Math.random() * (dimensions.height / 3),
        endX: Math.random() * dimensions.width,
        endY: Math.random() * (dimensions.height / 2) + dimensions.height / 2,
        duration: Math.random() * 1.5 + 2, // 2-3.5 seconds (moderate speed)
        size: Math.random() * 1.5 + 1.5, // 1.5-3px (moderate size)
        delay: 0,
      }

      setStars((prevStars) => [...prevStars, newStar])

      // Remove the star after animation completes
      setTimeout(
        () => {
          setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id))
        },
        newStar.duration * 1000 + 500,
      )
    }

    // Create initial stars (1-2 stars)
    const initialStarCount = Math.floor(Math.random() * 2) + 1
    for (let i = 0; i < initialStarCount; i++) {
      setTimeout(createShootingStar, i * 3000) // Spaced out initial stars
    }

    // Set up interval for new stars every 15 seconds (moderate frequency)
    intervalRef.current = setInterval(() => {
      createShootingStar()
    }, 15000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [dimensions])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ height: dimensions.height }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          ref={scope}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.startX,
            top: star.startY,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.7)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: [0, star.endX - star.startX],
            y: [0, star.endY - star.startY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            ease: "easeOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
