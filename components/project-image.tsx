"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectImageProps {
  src: string
  alt: string
  showLogo?: boolean
  className?: string
}

export function ProjectImage({ src, alt, showLogo = false, className }: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn("object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          onLoadingComplete={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          </div>
        )}
      </div>
      {showLogo && (
        <div className="absolute bottom-4 right-4 z-10">
          <Image src="/lail-logo.png" alt="LAIL LIGHTING DESIGN" width={60} height={30} className="opacity-70" />
        </div>
      )}
    </motion.div>
  )
}
