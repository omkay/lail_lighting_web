import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import Script from "next/script"

export const metadata: Metadata = {
  title: "LAIL LIGHTING DESIGN - تصميم الإضاءة",
  description: "حلول تصميم الإضاءة المهنية للمساحات المعمارية والداخلية",
}

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className="bg-black font-arabic">
        {children}
        <Script id="theme-switcher">{`
          // This is a placeholder for theme switching functionality
          // It can be expanded later to support dark/light mode
          document.documentElement.classList.add('dark');
        `}</Script>
      </div>
    </>
  )
}
