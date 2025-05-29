import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Users,
  ShoppingBag,
  MessageSquare
} from "lucide-react"

export function DashboardNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: `/dashboard`,
      icon: LayoutDashboard
    },
    {
      title: "Projects",
      href: `/dashboard/projects`,
      icon: Image
    },
    {
      title: "Articles",
      href: `/dashboard/articles`,
      icon: FileText
    },
    {
      title: "Products",
      href: `/dashboard/products`,
      icon: ShoppingBag
    },
    {
      title: "Clients",
      href: `/dashboard/clients`,
      icon: Users
    },
    {
      title: "Messages",
      href: `/dashboard/messages`,
      icon: MessageSquare
    },
    {
      title: "Settings",
      href: `/dashboard/settings`,
      icon: Settings
    }
  ]

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-6 z-50 h-8 w-8 rounded-full border bg-background"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>

      {/* Logo */}
      <div className="flex h-16 items-center border-b px-4">
        <Link href={`/dashboard`} className="flex items-center gap-2">
          <span className={cn("font-semibold", isCollapsed && "hidden")}>Lail Lighting</span>
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className={cn(isCollapsed && "hidden")}>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </div>
  )
} 