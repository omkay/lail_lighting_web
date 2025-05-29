import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { isLanguageSupported } from "@/lib/projects"
import { redirect } from "next/navigation"

import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lail Lighting",
  description: "Architectural Lighting Design",
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: string
  }>
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const resolvedParams = await params
  const { lang } = resolvedParams

  // Validate language parameter
  if (!isLanguageSupported(lang)) {
    redirect("/en") // Redirect to English if language is not supported
  }

  const isRtl = lang === "ar"
  const dir = isRtl ? "rtl" : "ltr"

  return (
    <html lang={lang} dir={dir} className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>{children}</body>
    </html>
  )
}
