"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/framer-animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative py-16 md:py-24"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
          <div className="text-center">
            <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">
              Stay <span className="font-medium">Illuminated</span>
            </h2>
            <p className="mt-4 text-white/70">
              Subscribe to our newsletter for the latest lighting design trends, project showcases, and exclusive
              insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-white/20 bg-white/5 text-white placeholder:text-white/50 focus:border-white/30"
                disabled={isSubmitting || isSuccess}
              />
              <Button
                type="submit"
                className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            {isSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-green-400"
              >
                Thank you for subscribing! We'll keep you updated with our latest news.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  )
}
