import { NextResponse } from "next/server";
import { ImageManager } from "@/lib/image-utils";
import { promises as fs } from "fs";
import path from "path";

const imageManager = ImageManager.getInstance();

export async function GET() {
  try {
    const images: any[] = [];
    const folders = ["projects", "articles", "products"];

    for (const folder of folders) {
      const folderPath = path.join(process.cwd(), "public", "images", folder);
      try {
        const files = await fs.readdir(folderPath);
        for (const file of files) {
          if (file.endsWith(".webp")) {
            const metadata = await imageManager.getImageMetadata(path.join(folder, file));
            if (metadata) {
              images.push({ ...metadata, folder });
            }
          }
        }
      } catch (error) {
        console.error(`Error reading ${folder} directory:`, error);
      }
    }

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { url, thumbnailUrl, width, height, format, size, folder } = data;

    // Validate the folder
    if (!["projects", "articles", "products"].includes(folder)) {
      return NextResponse.json(
        { error: "Invalid folder" },
        { status: 400 }
      );
    }

    // Save metadata to a JSON file
    const metadata = {
      url,
      thumbnailUrl,
      width,
      height,
      format,
      size,
      folder,
    };

    return NextResponse.json(metadata);
  } catch (error) {
    console.error("Error saving media metadata:", error);
    return NextResponse.json(
      { error: "Failed to save media metadata" },
      { status: 500 }
    );
  }
} 