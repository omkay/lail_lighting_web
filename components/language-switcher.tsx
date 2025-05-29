"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  nativeName: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState<string>("en")

  useEffect(() => {
    // Detect current language from URL or localStorage
    const detectedLang = pathname.startsWith("/ar") ? "ar" : "en"
    setCurrentLang(detectedLang)
  }, [pathname])

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang) return

    // Get the current path without the language prefix
    let newPath = pathname
    if (pathname.startsWith("/en") || pathname.startsWith("/ar")) {
      newPath = pathname.substring(3) // Remove the language prefix
    }

    // If the path is empty after removing the prefix, set it to the root
    if (!newPath) newPath = "/"

    // Navigate to the new language path
    router.push(`/${langCode}${newPath}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 border border-white/10 text-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`cursor-pointer hover:bg-white/10 ${currentLang === lang.code ? "bg-white/20" : ""}`}
          >
            <span className="mr-2">{lang.code === "ar" ? "🇦🇪" : "🇺🇸"}</span>
            <span dir={lang.code === "ar" ? "rtl" : "ltr"}>
              {lang.nativeName} ({lang.name})
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
