import Script from "next/script"

interface OrganizationStructuredDataProps {
  isArabic?: boolean
}

export function OrganizationStructuredData({ isArabic = false }: OrganizationStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isArabic ? "ليل للإضاءة" : "LAIL LIGHTING",
    url: isArabic ? "https://laillighting.com/ar" : "https://laillighting.com",
    logo: "https://laillighting.com/logo.svg",
    description: isArabic
      ? "شركة متخصصة في تصميم الإضاءة المعمارية، نحول المساحات من خلال حلول إضاءة مبتكرة تجمع بين الدقة التقنية والرؤية الفنية."
      : "We transform spaces through innovative lighting design that merges technical precision with artistic expression.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971559346015",
      email: "laillighting@gmail.com",
      contactType: "customer service",
    },
    sameAs: ["https://instagram.com/laillighting", "https://twitter.com/laillighting"],
  }

  return (
    <Script id="organization-structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

interface ServiceStructuredDataProps {
  name: string
  description: string
  url: string
  price: string
  currency?: string
  isArabic?: boolean
}

export function ServiceStructuredData({
  name,
  description,
  url,
  price,
  currency = "USD",
  isArabic = false,
}: ServiceStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: isArabic ? "ليل للإضاءة" : "LAIL LIGHTING",
      url: isArabic ? "https://laillighting.com/ar" : "https://laillighting.com",
    },
    serviceType: isArabic ? "تصميم إضاءة" : "Lighting Design",
    url: url,
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
    },
  }

  return (
    <Script id={`service-structured-data-${name}`} type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}
