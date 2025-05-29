import fs from "fs"
import path from "path"

// Define the Project type
export type ProjectSpec = {
  label: string
  value: string
}

export type ProjectTestimonial = {
  quote: string
  author: string
}

export type Project = {
  title: string
  category: string
  mainImage: string
  description: string
  details: string[]
  specs: ProjectSpec[]
  gallery: string[]
  testimonial: ProjectTestimonial
  nextProject: string
}

export type Projects = {
  [key: string]: Project
}

// Function to get all projects with language support
export function getAllProjects(lang = "en"): Projects {
  try {
    // Try to read from the language-specific file
    const filePath = path.join(process.cwd(), `static/data/${lang}/projects.json`)

    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8")
      return JSON.parse(fileContents)
    }

    // If language file doesn't exist, try English
    if (lang !== "en") {
      const enFilePath = path.join(process.cwd(), "static/data/en/projects.json")
      if (fs.existsSync(enFilePath)) {
        const fileContents = fs.readFileSync(enFilePath, "utf8")
        return JSON.parse(fileContents)
      }
    }

    // If all file reads fail, return empty object
    console.warn("Could not load project data, returning empty object")
    return {}
  } catch (error) {
    console.error(`Error loading projects data: ${error}`)
    return {}
  }
}

// Function to get a specific project by ID with language support
export function getProjectById(id: string, lang = "en"): Project | null {
  const projects = getAllProjects(lang)
  return projects[id] || null
}

// Function to get all project IDs (same across languages)
export function getAllProjectIds(): string[] {
  const projects = getAllProjects()
  return Object.keys(projects)
}

// Function to check if a language is supported
export function isLanguageSupported(lang: string): boolean {
  const supportedLanguages = ["en", "ar"]
  return supportedLanguages.includes(lang)
}
