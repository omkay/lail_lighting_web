import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface EnhancedLogoProps {
  isArabic?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
  linkWrapper?: boolean
}

export function EnhancedLogo({ isArabic = false, className, size = "md", linkWrapper = true }: EnhancedLogoProps) {
  const basePrefix = isArabic ? "/ar" : ""

  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-16 w-auto",
  }

  const logoElement = (
    <div className={cn("relative flex items-center gap-2", className)}>
      <Image
        src="/lail-logo.svg"
        alt={isArabic ? "ليل للإضاءة" : "LAIL LIGHTING DESIGN"}
        width={240}
        height={80}
        className={cn(sizeClasses[size], "brightness-125 contrast-125")}
        priority
      />
      <div className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-white/5 blur-xl" />
    </div>
  )

  if (linkWrapper) {
    return (
      <Link href={basePrefix + "/"} className={cn("flex items-center gap-2", className)}>
        {logoElement}
      </Link>
    )
  }

  return logoElement
}
