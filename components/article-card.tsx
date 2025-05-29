"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  href: string
  isArabic?: boolean
}

export function ArticleCard({ title, excerpt, date, image, href, isArabic = false }: ArticleCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-lg border border-white/10 bg-black/20"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className={`p-6 ${isArabic ? "text-right" : ""}`}>
          <div className="text-sm text-white/60">{date}</div>
          <h3 className="mt-2 text-xl font-medium text-white">{title}</h3>
          <p className="mt-3 text-sm text-white/70">{excerpt}</p>
          <div
            className={`mt-4 flex items-center text-sm font-medium text-white ${isArabic ? "flex-row-reverse" : ""}`}
          >
            {isArabic ? (
              <>
                <ArrowRight className="mr-1 h-3.5 w-3.5 rotate-180" /> اقرأ المزيد
              </>
            ) : (
              <>
                Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
