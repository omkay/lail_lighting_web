import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all articles
export async function GET() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    // Parse tags from JSON strings or comma-separated strings
    const articlesWithParsedTags = articles.map(article => ({
      ...article,
      tags: article.tags ? 
        (article.tags.startsWith('[') ? 
          JSON.parse(article.tags) : 
          article.tags.split(',').map((tag: string) => tag.trim())) 
        : [],
    }))

    return NextResponse.json(articlesWithParsedTags)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json([], { status: 500 })
  }
}

// POST new article
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      title, 
      content, 
      author, 
      category,
      tldr_desc,
      status,
      tags,
      image,
      publishedAt,
    } = body

    const article = await prisma.article.create({
      data: {
        title,
        content,
        author,
        category,
        tldr_desc,
        status,
        tags: tags ? JSON.stringify(tags) : null,
        image,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
      },
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
} 