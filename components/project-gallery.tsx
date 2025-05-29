"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/framer-animations"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    id: "residential-villa",
    title: "Residential Villa",
    category: "Interior Lighting",
    image: "/projects/residential-villa.jpg",
    description:
      "Elegant interior lighting design for a luxury residential villa, creating a warm and inviting atmosphere.",
    href: "/projects/residential-villa",
  },
  {
    id: "boutique-hotel",
    title: "Boutique Hotel",
    category: "Hospitality Lighting",
    image: "/projects/boutique-hotel.jpg",
    description:
      "Sophisticated lighting solutions for a boutique hotel, enhancing the guest experience through thoughtful illumination.",
    href: "/projects/boutique-hotel",
  },
  {
    id: "office-tower",
    title: "Office Tower",
    category: "Exterior Lighting",
    image: "/projects/office-tower.jpg",
    description:
      "Dramatic exterior lighting for a corporate office tower, highlighting architectural features and creating a striking nighttime presence.",
    href: "/projects/office-tower",
  },
  {
    id: "al-bayt-residence",
    title: "Al Bayt Residence",
    category: "Residential | Exterior Lighting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77613753-2e3c-4c3e-8fca-85fdcd49a7b3.JPG-ynfKzvJTNSRDZlWEtIo1rOnYBONPqV.jpeg",
    description:
      "This majestic residence exemplifies how architectural lighting can transform a building into a nocturnal masterpiece.",
    href: "/projects/al-bayt-residence",
  },
  {
    id: "al-diwan-palace",
    title: "Al Diwan Palace",
    category: "Cultural | Exterior Illumination",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b92ff400-05d7-415c-a03b-c9f4aca74fa5.JPG-FZL4QzyraBXNT8GchgFyZHDAZeY381.jpeg",
    description: "The Al Diwan Palace project showcases a masterful approach to cultural landmark illumination.",
    href: "/projects/al-diwan-palace",
  },
  {
    id: "serenity-corridor",
    title: "Serenity Corridor",
    category: "Residential | Interior Lighting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d23b78d-4a2a-4151-955e-014c8f9bbc44%281%29.JPG-Oi64Ws0tUhP77Rlmvd4Tw77PFpo8IL.jpeg",
    description:
      "This minimalist corridor exemplifies how thoughtful lighting can transform a transitional space into a sanctuary of elegance.",
    href: "/projects/serenity-corridor",
  },
]

const categories = ["All", "Interior Lighting", "Exterior Lighting", "Hospitality Lighting", "Cultural", "Residential"]

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category.includes(selectedCategory))

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
            Our <span className="font-medium">Projects</span>
          </h2>
          <p className="mt-4 text-white/70">Explore our portfolio of innovative lighting designs</p>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.4)} className="mx-auto mt-8 max-w-3xl overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category ? "rounded-full bg-white text-black" : "text-white/70 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.5)} className="mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)} className="mx-auto mt-12 text-center">
          <Button asChild className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white">
            <Link href="/projects">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative max-h-[90vh] max-w-4xl overflow-auto rounded-lg bg-black/90 p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-medium">{selectedProject.title}</h3>
                <p className="mt-1 text-sm text-white/60">{selectedProject.category}</p>
                <p className="mt-4 text-white/80">{selectedProject.description}</p>

                <div className="mt-6">
                  <Button
                    asChild
                    className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    <Link href={selectedProject.href}>
                      View project details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
