import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// GET single article
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    // Parse tags from JSON string or comma-separated string
    const articleWithParsedTags = {
      ...article,
      tags: article.tags ? 
        (article.tags.startsWith('[') ? 
          JSON.parse(article.tags) : 
          article.tags.split(',').map((tag: string) => tag.trim())) 
        : [],
      image: article.image ? JSON.parse(article.image) : null,
    };

    return NextResponse.json(articleWithParsedTags);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json({ error: "Error fetching article" }, { status: 500 });
  }
}

// PUT update article
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    const body = await request.json();
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
    } = body;

    // Validate required fields
    if (!title || !content || !author || !category || !tldr_desc || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update the article
    const article = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        author,
        category,
        tldr_desc,
        status,
        tags: tags ? JSON.stringify(tags) : null,
        image: image ? JSON.stringify(image) : null,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
      },
    });

    // Parse tags and image for the response
    const articleWithParsedData = {
      ...article,
      tags: article.tags ? 
        (article.tags.startsWith('[') ? 
          JSON.parse(article.tags) : 
          article.tags.split(',').map((tag: string) => tag.trim())) 
        : [],
      image: article.image ? JSON.parse(article.image) : null,
    };

    return NextResponse.json(articleWithParsedData);
  } catch (error) {
    console.error("Error updating article:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Error updating article" }, { status: 500 });
  }
}

// DELETE article
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 });
    }

    await prisma.article.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Error deleting article" }, { status: 500 });
  }
} 