"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ColorTemperature() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto my-16 max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-black/50 p-8"
    >
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/20 blur-[100px]"></div>
      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#FFF1E0]/20 blur-[100px]"></div>

      <h3 className="mb-6 text-center text-2xl font-light uppercase tracking-wider">
        The Perfect <span className="font-medium">Warmth</span>
      </h3>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="relative h-40 w-40 overflow-hidden rounded-full">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(255,241,224,1) 0%, rgba(255,214,165,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-light">2700K</span>
          </div>
        </div>

        <div className="max-w-md text-center md:text-left">
          <p className="text-lg text-white/80">
            We specialize in creating the perfect warm ambiance with 2700K lighting - the gold standard for residential
            and hospitality spaces. This color temperature creates an inviting, comfortable atmosphere that enhances
            architectural features while providing a sense of warmth and intimacy.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#FFF1E0]/10 px-3 py-1 text-xs text-[#FFF1E0]">Warm White</span>
            <span className="rounded-full bg-[#FFF1E0]/10 px-3 py-1 text-xs text-[#FFF1E0]">Residential</span>
            <span className="rounded-full bg-[#FFF1E0]/10 px-3 py-1 text-xs text-[#FFF1E0]">Hospitality</span>
            <span className="rounded-full bg-[#FFF1E0]/10 px-3 py-1 text-xs text-[#FFF1E0]">Comfort</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
