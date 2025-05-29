import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  isArabic?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
  linkWrapper?: boolean
}

export function Logo({ isArabic = false, className, size = "md", linkWrapper = true }: LogoProps) {
  const basePrefix = isArabic ? "/ar" : ""

  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-12 w-auto",
  }

  const logoElement = (
    <Image
      src="/lail-logo.svg"
      alt={isArabic ? "ليل للإضاءة" : "LAIL LIGHTING DESIGN"}
      width={240}
      height={80}
      className={cn(sizeClasses[size], "brightness-125 contrast-125")}
      priority
    />
  )

  if (linkWrapper) {
    return (
      <Link href={basePrefix + "/"} className={cn("flex items-center gap-2", className)}>
        {logoElement}
      </Link>
    )
  }

  return <div className={cn("flex items-center gap-2", className)}>{logoElement}</div>
}

interface LargeLogoProps {
  isArabic?: boolean
  className?: string
  linkWrapper?: boolean
}

export function LargeLogo({ isArabic = false, className, linkWrapper = true }: LargeLogoProps) {
  const basePrefix = isArabic ? "/ar" : ""

  const logoElement = (
    <Image
      src="/lail-logo.svg"
      alt={isArabic ? "ليل للإضاءة" : "LAIL LIGHTING DESIGN"}
      width={320}
      height={120}
      className="h-24 w-auto brightness-125 contrast-125"
      priority
    />
  )

  if (linkWrapper) {
    return (
      <Link href={basePrefix + "/"} className={cn("flex items-center gap-2", className)}>
        {logoElement}
      </Link>
    )
  }

  return <div className={cn("flex items-center gap-2", className)}>{logoElement}</div>
}
