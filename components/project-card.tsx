"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  href: string
  isArabic?: boolean
}

export function ProjectCard({ title, category, image, href, isArabic = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Link href={href} className="block aspect-[16/9] w-full md:aspect-[4/3]">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=600&width=800"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
        <div className={cn("absolute bottom-0 left-0 w-full p-6", isArabic ? "text-right" : "text-left")}>
          <div className="overflow-hidden">
            <motion.span
              className="block text-sm font-medium uppercase tracking-wider text-white/70"
              animate={{ y: isHovered ? 0 : 0 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              className="mt-1 text-xl font-medium text-white md:text-2xl"
              animate={{ y: isHovered ? 0 : 0 }}
              initial={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </div>
          <motion.div
            className={cn("mt-4 flex items-center text-sm text-white/70", isArabic ? "flex-row-reverse" : "")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {isArabic ? (
              <>
                <ArrowRight className="mr-1 h-3.5 w-3.5 rotate-180" /> عرض المشروع
              </>
            ) : (
              <>
                View project <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
