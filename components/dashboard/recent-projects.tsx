import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectImage } from "@/components/project-image"

export function RecentProjects() {
  // This would be replaced with actual data from your API
  const recentProjects = [
    {
      id: "1",
      title: "Modern Office Lighting",
      category: "Commercial",
      image: "/lighting_bg.jpg",
    },
    {
      id: "2",
      title: "Luxury Villa Design",
      category: "Residential",
      image: "/lighting_bg.jpg",
    },
    {
      id: "3",
      title: "Hotel Lobby",
      category: "Hospitality",
      image: "/lighting_bg.jpg",
    },
  ]

  return (
    <div className="space-y-8">
      {recentProjects.map((project) => (
        <div key={project.id} className="flex items-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-lg">
            <ProjectImage
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              showLogo={false}
            />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {project.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {project.category}
            </p>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/projects/${project.id}`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
} 