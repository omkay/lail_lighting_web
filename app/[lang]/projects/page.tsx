import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { prisma } from "@/lib/prisma"
import { Prisma } from "@prisma/client"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import { ProjectImage } from "@/components/project-image"

interface ProjectsPageProps {
  params: {
    lang: string
  }
}

interface Project {
  id: string;
  title: string;
  category: string;
  brief: string;
  paragraph: string;
  location: string;
  clientReview?: string | null;
  status: string;
  client?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  images?: { url: string }[];
  tags?: string[];
  specifications?: any[];
  gallery: string[];
}

async function getProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      where: {
        status: "published"
      },
      include: {
        specifications: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    type RawProject = Prisma.ProjectGetPayload<{ include: { specifications: true } }>;

    return (projects as RawProject[]).map(project => ({
      ...project,
      images: project.images ? JSON.parse(project.images) : [],
      tags: project.tags ? JSON.parse(project.tags) : [],
      gallery: 'gallery' in project && project.gallery ? JSON.parse(project.gallery as string) : [],
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = params
  const isRtl = lang === "ar"
  const dir = isRtl ? "rtl" : "ltr"

  // Get projects data
  const projects = await getProjects()

  return (
    <div className={`flex min-h-screen flex-col bg-black text-white ${isRtl ? "rtl" : ""}`} dir={dir}>
      <MinimalHeader />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=800&width=1920"
                alt="Lighting Design Projects"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  {lang === "ar" ? (
                    <>
                      <span className="font-medium">مشاريعنا</span>
                    </>
                  ) : (
                    <>
                      Our <span className="font-medium">Projects</span>
                    </>
                  )}
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  {lang === "ar"
                    ? "استكشف مجموعتنا المتنوعة من مشاريع الإضاءة المعمارية التي تعرض خبرتنا وإبداعنا"
                    : "Explore our diverse portfolio of architectural lighting projects showcasing our expertise and creativity"}
                </p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Featured Projects */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-light">{lang === "ar" ? "المشاريع المميزة" : "Featured Projects"}</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: Project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <ProjectImage
                        src={project.gallery?.[0] || "/lighting_bg.jpg"}
                        alt={project.title}
                        showLogo={false}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium">{project.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{project.category}</p>
                      <div className="mt-4">
                        <Link
                          href={`/${lang}/projects/${project.id}`}
                          className="inline-flex items-center text-sm text-white/80 hover:text-white"
                        >
                          {lang === "ar" ? (
                            <>
                              عرض التفاصيل
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              View details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-black"></div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-2xl font-light md:text-3xl">
                {lang === "ar" ? (
                  <>
                    هل أنت جاهز لتحويل <span className="font-medium">مساحتك</span>؟
                  </>
                ) : (
                  <>
                    Ready to transform your <span className="font-medium">space</span>?
                  </>
                )}
              </h2>
              <p className="mt-4 text-white/70">
                {lang === "ar"
                  ? "دعنا نتعاون لإنشاء حل إضاءة يعزز هندستك المعمارية ويخلق تجارب لا تُنسى."
                  : "Let's collaborate to create a lighting solution that enhances your architecture and creates unforgettable experiences."}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href={`/${lang}/contact`}>
                    {lang === "ar" ? (
                      <>
                        اتصل بنا
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Contact us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
