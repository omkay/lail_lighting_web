import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { prisma } from "@/lib/prisma"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"

interface ProjectPageProps {
  params: {
    id: string
    lang: string
  }
}

interface ProjectImage {
  url: string
  alt?: string
}

interface ProjectSpecification {
  id: string
  title: string
  description: string
  projectId: string
  createdAt: Date
  updatedAt: Date
}

interface Project {
  id: string
  title: string
  category: string
  brief: string
  paragraph: string
  location: string
  clientReview: string | null
  status: string
  client: string | null
  startDate: Date | null
  endDate: Date | null
  createdAt: Date
  updatedAt: Date
  images: ProjectImage[]
  tags: string[]
  specifications: ProjectSpecification[]
  gallery: string[]
}

async function getProjectDetails(id: string): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        specifications: true
      }
    });

    if (!project) {
      return null;
    }

    // Ensure all required fields are present
    const parsedProject: Project = {
      ...project,
      images: project.images ? JSON.parse(project.images) : [],
      tags: project.tags ? JSON.parse(project.tags) : [],
      gallery: project.gallery ? JSON.parse(project.gallery) : [],
    };

    return parsedProject;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id, lang } = params
  const project = await getProjectDetails(id)

  if (!project) {
    notFound()
  }

  // Determine text direction based on language
  const isRtl = lang === "ar"
  const dir = isRtl ? "rtl" : "ltr"

  const gallery = Array.isArray(project.gallery) ? project.gallery : [];

  return (
    <div className={`flex min-h-screen flex-col bg-black text-white ${isRtl ? "rtl" : ""}`} dir={dir}>
      <MinimalHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh]">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-10">
              <Image
                src={gallery.length > 0 ? gallery[0] : "/lighting_bg.jpg"}
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
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">{project.title}</h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">{project.category}</p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Project Overview */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xl leading-relaxed text-white/90">{project.brief}</p>
              <div className="mt-12 space-y-6">
                <p className="text-white/70">{project.paragraph}</p>
                {project.location && (
                  <p className="text-white/70">
                    <strong>{lang === "ar" ? "الموقع:" : "Location:"}</strong> {project.location}
                  </p>
                )}
                {project.client && (
                  <p className="text-white/70">
                    <strong>{lang === "ar" ? "العميل:" : "Client:"}</strong> {project.client}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        {project.specifications && project.specifications.length > 0 && (
          <section className="relative py-16 bg-white/5 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">
                  {lang === "ar" ? "مواصفات المشروع" : "Project Specifications"}
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {project.specifications.map((spec) => (
                    <div key={spec.id} className="border-b border-white/10 pb-4">
                      <h3 className="text-sm uppercase text-white/50">{spec.title}</h3>
                      <p className="mt-2 text-lg">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Project Gallery */}
        {gallery.length > 0 && (
          <section className="relative py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">
                  {lang === "ar" ? "معرض المشروع" : "Project Gallery"}
                </h2>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                  {gallery.map((url: string, index: number) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={url}
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
        )}

        {/* Client Review */}
        {project.clientReview && (
          <section className="relative py-16 bg-white/5 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-3xl">
                <div className="text-4xl font-light">"</div>
                <p className="mt-4 text-xl italic text-white/90">{project.clientReview}</p>
                {project.client && (
                  <p className="mt-6 text-sm uppercase tracking-wider text-white/60">— {project.client}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <section className="relative py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href={`/${lang}/projects`}
                className="inline-flex items-center text-sm uppercase tracking-wider text-white/60 hover:text-white"
              >
                {lang === "ar" ? (
                  <>
                    العودة إلى جميع المشاريع
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all projects
                  </>
                )}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
