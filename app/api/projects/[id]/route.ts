import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type ProjectWithSpecifications = Prisma.ProjectGetPayload<{
  include: { specifications: true }
}>;

// GET single project
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  if (!id) {
    return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        specifications: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...project,
      gallery: project.gallery ? JSON.parse(project.gallery) : [],
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ error: "Error fetching project" }, { status: 500 });
  }
}

// PUT update project
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  if (!id) {
    return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { 
      title, 
      category, 
      brief, 
      paragraph, 
      location, 
      clientReview,
      status,
      specifications,
      gallery
    } = body;

    // First update the project
    const project = await prisma.project.update({
      where: { id },
      data: {
        title,
        category,
        brief,
        paragraph,
        location,
        clientReview,
        status,
        gallery: gallery ? JSON.stringify(gallery) : "[]",
      },
    });

    // Then handle specifications separately
    if (specifications && Array.isArray(specifications)) {
      // Delete existing specifications
      await prisma.projectSpecification.deleteMany({
        where: { projectId: id },
      });

      // Filter out empty specifications and create new ones
      const validSpecifications = specifications.filter(
        spec => spec.title?.trim() && spec.description?.trim()
      );

      if (validSpecifications.length > 0) {
        await prisma.projectSpecification.createMany({
          data: validSpecifications.map(spec => ({
            title: spec.title.trim(),
            description: spec.description.trim(),
            projectId: id,
          })),
        });
      }
    }

    // Return updated project with specifications
    const updatedProject = await prisma.project.findUnique({
      where: { id },
      include: {
        specifications: true,
      },
    });

    return NextResponse.json({
      ...updatedProject,
      gallery: updatedProject?.gallery ? JSON.parse(updatedProject.gallery) : [],
    });
  } catch (error) {
    console.error("Error updating project:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Error updating project" }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  if (!id) {
    return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
  }

  try {
    // Delete the project (specifications will be deleted automatically due to cascade)
    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Error deleting project" }, { status: 500 });
  }
} 