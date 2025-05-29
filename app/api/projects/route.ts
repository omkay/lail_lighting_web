import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all projects
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        specifications: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json([], { status: 500 })
  }
}

// POST new project
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, category, brief, paragraph, location, clientReview, specifications } = body

    const project = await prisma.project.create({
      data: {
        title,
        category,
        brief,
        paragraph,
        location,
        clientReview,
        specifications: {
          create: specifications,
        },
      },
      include: {
        specifications: true,
      },
    })

    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 })
  }
} 