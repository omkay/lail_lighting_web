"use client"

import React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface RTLFadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RTLReveal({ children, className = "", delay = 0 }: RTLFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RTLStagger({ children, className = "", delay = 0 }: RTLFadeInProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" animate="visible">
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

export function RTLSlideIn({ children, className = "", delay = 0 }: RTLFadeInProps) {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RTLTextReveal({ children, className = "", delay = 0 }: RTLFadeInProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = textRef.current
    const textContent = text.textContent || ""
    text.textContent = ""

    const characters = textContent.split("")
    characters.forEach((char, index) => {
      const span = document.createElement("span")
      span.textContent = char
      span.style.opacity = "0"
      span.style.transform = "translateX(-20px)"
      span.style.display = "inline-block"
      span.style.transition = `opacity 0.3s ease, transform 0.3s ease`
      span.style.transitionDelay = `${delay + index * 0.03}s`
      text.appendChild(span)

      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateX(0)"
      }, 100)
    })

    return () => {
      if (textRef.current) {
        textRef.current.textContent = textContent
      }
    }
  }, [delay])

  return (
    <div ref={textRef} className={`text-right ${className}`}>
      {children}
    </div>
  )
}
