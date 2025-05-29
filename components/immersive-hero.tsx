"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export function ImmersiveHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Architectural lighting design"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <h1 className="text-center text-6xl font-light uppercase tracking-widest text-white md:text-7xl lg:text-8xl">
            LAIL LIGHTING
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-black">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Architectural lighting design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-center text-6xl font-light uppercase tracking-widest text-white md:text-7xl lg:text-8xl">
            LAIL LIGHTING
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
