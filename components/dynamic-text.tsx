"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DynamicTextProps {
  words: string[]
  baseText: string
  className?: string
}

export function DynamicText({ words, baseText, className }: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={className}>
      <span>{baseText} </span>
      <span className="relative inline-block">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 text-[#FFF1E0]"
        >
          {words[currentIndex]}
        </motion.span>
        <span className="invisible">{words[0]}</span>
      </span>
    </div>
  )
}
