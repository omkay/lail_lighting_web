import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://laillighting.com"

  // Define all routes that need to be in the sitemap
  const routes = ["", "/projects", "/services", "/services/design", "/team", "/articles", "/about", "/contact"]

  // Create sitemap entries for both English and Arabic versions
  const sitemap: MetadataRoute.Sitemap = []

  // Add English routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  })

  // Add Arabic routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  })

  return sitemap
}
