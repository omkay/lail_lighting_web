"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
              Illuminating <span className="font-medium">Architecture</span> with Artistic Vision
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              We transform spaces through innovative lighting design that merges technical precision with artistic
              expression.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
              >
                <Link href="/projects">
                  Explore our work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
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
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
            Illuminating <span className="font-medium">Architecture</span> with Artistic Vision
          </h1>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            We transform spaces through innovative lighting design that merges technical precision with artistic
            expression.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
            >
              <Link href="/projects">
                Explore our work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
