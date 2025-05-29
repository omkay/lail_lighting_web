import type React from "react"

interface ArabicTypographyProps {
  children: React.ReactNode
  className?: string
}

export function ArabicHeading({ children, className = "" }: ArabicTypographyProps) {
  return (
    <h1 className={`text-right text-4xl font-bold leading-tight md:text-5xl lg:text-6xl ${className}`}>{children}</h1>
  )
}

export function ArabicSubheading({ children, className = "" }: ArabicTypographyProps) {
  return (
    <h2 className={`text-right text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl ${className}`}>
      {children}
    </h2>
  )
}

export function ArabicParagraph({ children, className = "" }: ArabicTypographyProps) {
  return <p className={`text-right text-base leading-relaxed ${className}`}>{children}</p>
}

export function ArabicCaption({ children, className = "" }: ArabicTypographyProps) {
  return <p className={`text-right text-sm leading-relaxed opacity-80 ${className}`}>{children}</p>
}
