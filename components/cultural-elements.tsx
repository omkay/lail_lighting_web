import type React from "react"

interface CulturalElementsProps {
  children: React.ReactNode
  className?: string
}

export function ArabicPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('/patterns/arabic-pattern.svg')] bg-repeat opacity-10"></div>
    </div>
  )
}

export function IslamicGeometry({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('/patterns/islamic-geometry.svg')] bg-repeat opacity-10"></div>
    </div>
  )
}

export function CalligraphyElement({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-2xl font-light italic tracking-wider md:text-3xl">{text}</p>
    </div>
  )
}

export function GeometricAccent({
  className = "",
  rotate = 0,
}: {
  className?: string
  rotate?: number
}) {
  return (
    <div className={`absolute w-40 h-40 opacity-10 ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M50 0 L50 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M0 50 L100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}

export function CalligraphyAccent({
  word,
  className = "",
  size = "md",
}: {
  word: string
  className?: string
  size?: "sm" | "md" | "lg"
}) {
  const sizeClasses = {
    sm: "text-4xl",
    md: "text-6xl",
    lg: "text-8xl",
  }

  return (
    <div className={`absolute ${className}`}>
      <p className={`font-arabic ${sizeClasses[size]} text-white opacity-20`}>{word}</p>
    </div>
  )
}
