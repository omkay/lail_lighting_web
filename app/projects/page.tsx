import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/projects"

export default function ProjectsPage() {
  // Get projects data
  const projectsData = getAllProjects()
  const projectIds = Object.keys(projectsData)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">Our Projects</h1>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                Explore our diverse portfolio of architectural lighting projects showcasing our expertise and creativity
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projectIds.map((id) => (
                  <ProjectCard
                    key={id}
                    title={projectsData[id].title}
                    category={projectsData[id].category}
                    image={projectsData[id].mainImage}
                    href={`/projects/${id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
