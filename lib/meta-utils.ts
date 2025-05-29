import type { Metadata } from "next"

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string
  isArabic?: boolean
}

export function generateMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
  keywords = "",
  isArabic = false,
}: GenerateMetadataProps): Metadata {
  const baseUrl = "https://laillighting.com"
  const fullPath = isArabic ? `/ar${path}` : path
  const url = `${baseUrl}${fullPath}`
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

  const alternateLanguages: Record<string, string> = {
    en: `${baseUrl}${path}`,
    ar: `${baseUrl}/ar${path}`,
  }

  return {
    title,
    description,
    keywords: keywords,
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_AE" : "en_US",
      url,
      title,
      description,
      siteName: isArabic ? "ليل للإضاءة" : "LAIL LIGHTING",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}
