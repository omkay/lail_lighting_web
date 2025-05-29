import { LayoutDashboard, FolderKanban, FileText, Image as ImageIcon } from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Projects",
    icon: FolderKanban,
    href: "/dashboard/projects",
    color: "text-violet-500",
  },
  {
    label: "Articles",
    icon: FileText,
    href: "/dashboard/articles",
    color: "text-pink-700",
  },
  {
    label: "Media",
    icon: ImageIcon,
    href: "/dashboard/media",
    color: "text-orange-700",
  },
]; 