"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServicePreviewProps {
  number: string
  title: string
  subtitle: string
  image: string
  href: string
  isArabic?: boolean
}

export function ServicePreview({ number, title, subtitle, image, href, isArabic = false }: ServicePreviewProps) {
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
      transition={{ duration: 0.6 }}
    >
      <Link href={href} className="block w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
        </div>
        <div className={cn("p-6", isArabic ? "text-right" : "text-left")}>
          <div className="mb-2 text-sm font-bold uppercase tracking-wider text-white/60">{number}.</div>
          <h3 className="mb-1 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">{title}</h3>
          <p className="mb-4 text-sm text-white/70 md:text-base">{subtitle}</p>
          <motion.div
            className={cn(
              "flex items-center text-sm uppercase tracking-wider text-white/70",
              isArabic ? "flex-row-reverse" : "",
            )}
            initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : isArabic ? 10 : -10 }}
            transition={{ duration: 0.3 }}
          >
            {isArabic ? (
              <>
                <ArrowRight className="mr-1 h-3.5 w-3.5 rotate-180" /> معرفة المزيد
              </>
            ) : (
              <>
                Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
