"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/framer-animations"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Property Developer",
    company: "Al Mansouri Properties",
    content:
      "LAIL LIGHTING transformed our residential development with their innovative lighting solutions. Their attention to detail and understanding of how light interacts with architecture created a truly unique atmosphere that has become a key selling point for our properties.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Interior Designer",
    company: "Elegant Interiors",
    content:
      "Working with LAIL LIGHTING has been a revelation. Their team's expertise in creating the perfect ambiance through lighting has elevated my interior design projects to new heights. They understand that lighting is not just functional but an essential design element.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Mohammed Al Farsi",
    role: "Hotel Manager",
    company: "Luxury Palace Hotel",
    content:
      "The lighting design provided by LAIL for our hotel lobby and restaurants has received countless compliments from our guests. Their understanding of how to create different moods throughout the day using dynamic lighting has transformed our spaces.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative py-16 md:py-24"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div variants={fadeIn("up", 0.3)} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl">
            Client <span className="font-medium">Testimonials</span>
          </h2>
          <p className="mt-4 text-white/70">Hear what our clients have to say about our lighting design services</p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
            <div className="absolute -left-6 -top-6 text-white/10">
              <Quote size={120} />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-lg italic text-white/80">{testimonials[currentIndex].content}</p>

              <div className="mt-6 flex items-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-white/60">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={prevTestimonial}
                className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full border border-white/20 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
