import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "LAIL LIGHTING DESIGN",
  description: "Professional lighting design solutions for architectural and interior spaces",
  keywords:
    "lighting design, architectural lighting, interior lighting, exterior lighting, Dubai lighting, UAE lighting design",
  authors: [{ name: "LAIL LIGHTING DESIGN" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laillighting.com",
    title: "LAIL LIGHTING DESIGN",
    description: "Professional lighting design solutions for architectural and interior spaces",
    siteName: "LAIL LIGHTING DESIGN",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAIL LIGHTING DESIGN",
    description: "Professional lighting design solutions for architectural and interior spaces",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black">
        <ThemeProvider defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
        <Script id="theme-switcher">{`
          // This is a placeholder for theme switching functionality
          // It can be expanded later to support dark/light mode
          document.documentElement.classList.add('dark');
        `}</Script>
      </body>
    </html>
  )
}
