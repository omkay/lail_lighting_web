"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProductCardProps {
  name: string
  description: string
  image: string
  href: string
  features?: string[]
}

export function ProductCard({ name, description, image, href, features = [] }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-black/20 border border-white/10"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=400"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-white">{name}</h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>

          {features.length > 0 && (
            <motion.ul
              className="mt-4 space-y-1 text-xs text-white/60"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 h-1 w-1 rounded-full bg-white/60"></span>
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}

          <motion.div
            className="mt-4 inline-flex items-center text-sm font-medium text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            View details
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
