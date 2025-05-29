"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

import { MinimalHeader } from "@/components/minimal-header"
import { ArticleCard } from "@/components/article-card"
import { Footer } from "@/components/footer"
import { DynamicText } from "@/components/dynamic-text"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect, DualSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import { LargeLogo } from "@/components/logo"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { ProjectGallery } from "@/components/project-gallery"
import { fadeIn, staggerContainer } from "@/lib/framer-animations"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <MinimalHeader />
      <main className="flex-1">
        {/* Banner Section */}
        <motion.section
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.1)}
        >
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/lighting_banner.jpeg"
              alt="Lighting Banner"
              fill
              priority
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>
          {/* Banner Content */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center py-24 md:py-40">
            <LargeLogo className="mb-8" />
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 drop-shadow-lg"
              variants={fadeIn("up", 0.3)}
            >
              Illuminating spaces with <span className="font-semibold">artistic precision</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              variants={fadeIn("up", 0.4)}
            >
              We craft lighting solutions that transform architecture into immersive experiences, blending technical expertise with artistic vision to create spaces that inspire and captivate.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.5)}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E0] text-black px-8 py-4 text-base font-semibold uppercase tracking-wider shadow-lg hover:bg-white/90 transition"
              >
                Explore our work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Unified content section with vertical layout */}
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
          <ShootingStars />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            {/* Introduction */}
            <motion.div
              className="py-24 md:py-32"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer(0.1, 0.1)}
            >
              <motion.div className="mx-auto max-w-3xl text-center" variants={fadeIn("up", 0.3)}>
                <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl lg:text-5xl">
                  <DynamicText
                    baseText="Illuminating spaces with"
                    words={["artistic precision", "technical excellence", "innovative design", "warm ambiance"]}
                    className="inline-block"
                  />
                </h2>
                <p className="mt-10 text-lg text-white/70">
                  We craft lighting solutions that transform architecture into immersive experiences, blending technical
                  expertise with artistic vision to create spaces that inspire and captivate.
                </p>
              </motion.div>
            </motion.div>

            {/* Interactive Project Gallery */}
            <ProjectGallery />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Newsletter Section */}
            <Newsletter />

            {/* Vertical content layout */}
            <div className="flex flex-col space-y-32 md:space-y-40 lg:space-y-48">
              {/* Articles - Vertical (Including former Services content) */}
              <motion.div
                className="flex flex-col md:flex-row"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={staggerContainer(0.1, 0.1)}
              >
                <motion.div className="mb-12 md:mb-0 md:w-1/3 md:pr-12" variants={fadeIn("right", 0.3)}>
                  <div className="sticky top-32">
                    <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">
                      Latest <span className="font-medium">Articles</span>
                    </h2>
                    <p className="mt-4 text-white/70">
                      Insights and perspectives on lighting design, technology, and industry trends.
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/articles"
                        className="inline-flex items-center border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                      >
                        Read all articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="md:w-2/3" variants={fadeIn("left", 0.3)}>
                  <div className="space-y-24">
                    <motion.div variants={fadeIn("up", 0.4)}>
                      <ArticleCard
                        title="Concept Design: A Visual Story"
                        excerpt="The concept design is the initial stage of the process where we apply creative ideas to the material provided by architects and designers."
                        date="May 1, 2025"
                        image="/placeholder.svg?height=400&width=600"
                        href="/articles/concept-design"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.5)}>
                      <ArticleCard
                        title="Schematic Design: A Visual Translation"
                        excerpt="The schematic design aims to show the application of concepts in drawings, providing a graphical representation of concept application."
                        date="April 15, 2025"
                        image="/placeholder.svg?height=400&width=600"
                        href="/articles/schematic-design"
                      />
                    </motion.div>
                    <motion.div variants={fadeIn("up", 0.6)}>
                      <ArticleCard
                        title="Detailed Design: Technical Implementation"
                        excerpt="The final stage of the design process takes into account all details to develop lighting layouts, control diagrams, and documentation."
                        date="March 28, 2025"
                        image="/placeholder.svg?height=400&width=600"
                        href="/articles/detailed-design"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
              className="py-24 md:py-32"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeIn("up", 0.3)}
            >
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl">
                  Ready to <span className="font-medium text-[#FFF1E0]">illuminate</span> your vision?
                </h2>
                <p className="mt-6 text-lg text-white/70">
                  Let's collaborate to create lighting solutions that transform your space into an extraordinary
                  experience.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center border border-white/20 px-8 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                  >
                    Contact us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Design Services Section */}
            <motion.section
              className="relative py-24 md:py-32"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer(0.1, 0.1)}
            >
              <motion.div className="mx-auto max-w-3xl text-center mb-16" variants={fadeIn("up", 0.3)}>
                <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl lg:text-5xl">
                  Design <span className="font-medium">Services</span>
                </h2>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Transform your space with our professional lighting design expertise
                </p>
              </motion.div>

              <motion.div className="mx-auto max-w-5xl" variants={fadeIn("up", 0.4)}>
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Service 1: Consultation */}
                  <motion.div
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                    variants={fadeIn("up", 0.5)}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-light uppercase tracking-wider md:text-xl">Consultation</h3>
                    <p className="mt-3 text-sm text-white/70">
                      Expert guidance to illuminate your space with precision and artistry.
                    </p>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">90-minute virtual or in-person consultation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Assessment of current lighting conditions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Personalized lighting recommendations</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link href="/services/design#consultation">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>

                  {/* Service 2: Lighting Distribution */}
                  <motion.div
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                    variants={fadeIn("up", 0.6)}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-light uppercase tracking-wider md:text-xl">Lighting Distribution</h3>
                    <p className="mt-3 text-sm text-white/70">
                      Technical planning for optimal light placement and distribution throughout your space.
                    </p>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Detailed lighting layout plans</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Technical specifications for installation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Light calculation and analysis</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link href="/services/design#lighting-distribution">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>

                  {/* Service 3: Professional Lighting Design */}
                  <motion.div
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                    variants={fadeIn("up", 0.7)}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-lg font-light uppercase tracking-wider md:text-xl">Professional Lighting Design</h3>
                    <p className="mt-3 text-sm text-white/70">
                      Comprehensive end-to-end lighting design service for exceptional results.
                    </p>

                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Initial consultation and site assessment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Concept development and mood boards</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">Detailed lighting plans and 3D visualizations</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link href="/services/design#professional-lighting-design">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
