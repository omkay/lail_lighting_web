import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentArticles() {
  // This would be replaced with actual data from your API
  const recentArticles = [
    {
      id: "1",
      title: "The Future of LED Technology",
      category: "Technology",
      date: "2024-03-15",
    },
    {
      id: "2",
      title: "Sustainable Lighting Solutions",
      category: "Sustainability",
      date: "2024-03-10",
    },
    {
      id: "3",
      title: "Design Trends 2024",
      category: "Design",
      date: "2024-03-05",
    },
  ]

  return (
    <div className="space-y-8">
      {recentArticles.map((article) => (
        <div key={article.id} className="flex items-center">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {article.title}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{article.category}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/articles/${article.id}`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
} 