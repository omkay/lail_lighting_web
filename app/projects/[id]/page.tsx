// Restore the original project detail page for backward compatibility
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { getProjectById } from "@/lib/projects"

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params
  const project = await getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh]">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-10">
              <Image
                src={project.mainImage || "/placeholder.svg"}
                alt={project.title}
                fill
                priority
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
            </div>
            <ShootingStars />
            <div className="container mx-auto relative z-20 flex min-h-[50vh] items-center px-4 py-24 md:min-h-[60vh] md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  {project.title.split(' ').map((word, index, array) => (
                    <span key={index} className={index === array.length - 1 ? "font-medium" : ""}>
                      {word}{index < array.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">{project.category}</p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Project Overview */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-white/90">{project.description}</p>
              <div className="mt-12 space-y-6">
                {project.details.map((detail, index) => (
                  <p key={index} className="text-white/70">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="relative py-16 bg-white/5 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">Project Specifications</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {project.specs.map((spec, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <h3 className="text-sm uppercase text-white/50">{spec.label}</h3>
                    <p className="mt-2 text-lg">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">Project Gallery</h2>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="relative py-16 bg-white/5 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-4xl font-light">"</div>
              <p className="mt-4 text-xl italic text-white/90">{project.testimonial.quote}</p>
              <p className="mt-6 text-sm uppercase tracking-wider text-white/60">— {project.testimonial.author}</p>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">Next Project</h2>
              <div className="mt-8">
                <Link
                  href={`/projects/${project.nextProject}`}
                  className="inline-flex items-center border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                >
                  View next project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="relative py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/projects"
                className="inline-flex items-center text-sm uppercase tracking-wider text-white/60 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
