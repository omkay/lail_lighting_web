import sharp from "sharp";
import { writeFile, mkdir, readFile } from "fs/promises";
import { join } from "path";
import crypto from "crypto";

export interface ImageMetadata {
  width: number;
  height: number;
  format: string;
  size: number;
  url: string;
  thumbnailUrl: string;
}

export interface ImageOptimizationOptions {
  quality?: number; // 1-100
  maxWidth?: number;
  maxHeight?: number;
  format?: "jpeg" | "png" | "webp";
}

const DEFAULT_OPTIONS: ImageOptimizationOptions = {
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
  format: "webp",
};

export class ImageManager {
  private static instance: ImageManager;
  private metadataCache: Map<string, ImageMetadata> = new Map();

  private constructor() {}

  public static getInstance(): ImageManager {
    if (!ImageManager.instance) {
      ImageManager.instance = new ImageManager();
    }
    return ImageManager.instance;
  }

  private async ensureDirectory(path: string): Promise<void> {
    try {
      await mkdir(path, { recursive: true });
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "EEXIST") {
        throw error;
      }
    }
  }

  private generateUniqueFilename(originalName: string): string {
    const timestamp = Date.now();
    const hash = crypto.createHash("md5").update(originalName + timestamp).digest("hex");
    const extension = originalName.split(".").pop();
    return `${hash}.${extension}`;
  }

  private async optimizeImage(
    buffer: Buffer,
    options: ImageOptimizationOptions = {}
  ): Promise<{ buffer: Buffer; metadata: ImageMetadata }> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    let sharpInstance = sharp(buffer);

    // Get original metadata
    const metadata = await sharpInstance.metadata();

    // Resize if needed
    if (metadata.width && metadata.height) {
      if (metadata.width > opts.maxWidth! || metadata.height > opts.maxHeight!) {
        sharpInstance = sharpInstance.resize({
          width: opts.maxWidth,
          height: opts.maxHeight,
          fit: "inside",
          withoutEnlargement: true,
        });
      }
    }

    // Convert to desired format and compress
    const optimizedBuffer = await sharpInstance
      .toFormat(opts.format!, { quality: opts.quality })
      .toBuffer();

    // Get optimized metadata
    const optimizedMetadata = await sharp(optimizedBuffer).metadata();

    return {
      buffer: optimizedBuffer,
      metadata: {
        width: optimizedMetadata.width!,
        height: optimizedMetadata.height!,
        format: optimizedMetadata.format!,
        size: optimizedBuffer.length,
        url: "", // Will be set after saving
        thumbnailUrl: "", // Will be set after saving
      },
    };
  }

  private async createThumbnail(
    buffer: Buffer,
    options: ImageOptimizationOptions = {}
  ): Promise<Buffer> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    return sharp(buffer)
      .resize(400, 400, {
        fit: "cover",
        position: "center",
      })
      .toFormat(opts.format!, { quality: opts.quality })
      .toBuffer();
  }

  public async saveImage(
    file: File | Buffer,
    folder: string,
    options: ImageOptimizationOptions = {}
  ): Promise<ImageMetadata> {
    try {
      // Ensure directories exist
      const folderPath = join(process.cwd(), "public", "images", folder);
      const thumbnailsPath = join(process.cwd(), "public", "images", "thumbnails", folder);
      await Promise.all([
        this.ensureDirectory(folderPath),
        this.ensureDirectory(thumbnailsPath),
      ]);

      // Convert File to Buffer if needed
      const buffer = Buffer.isBuffer(file)
        ? file
        : Buffer.from(await (file as File).arrayBuffer());

      // Generate unique filename
      const filename = this.generateUniqueFilename(
        Buffer.isBuffer(file) ? "image" : (file as File).name
      );

      // Optimize image
      const { buffer: optimizedBuffer, metadata } = await this.optimizeImage(
        buffer,
        options
      );

      // Create thumbnail
      const thumbnailBuffer = await this.createThumbnail(buffer, options);

      // Save files
      const imagePath = join(folderPath, filename);
      const thumbnailPath = join(thumbnailsPath, filename);

      await Promise.all([
        writeFile(imagePath, optimizedBuffer),
        writeFile(thumbnailPath, thumbnailBuffer),
      ]);

      // Update metadata with URLs
      metadata.url = `/images/${folder}/${filename}`;
      metadata.thumbnailUrl = `/images/thumbnails/${folder}/${filename}`;

      // Cache metadata
      this.metadataCache.set(metadata.url, metadata);

      return metadata;
    } catch (error) {
      console.error("Error saving image:", error);
      throw new Error("Failed to save image");
    }
  }

  public async getImageMetadata(url: string): Promise<ImageMetadata | null> {
    // Check cache first
    if (this.metadataCache.has(url)) {
      return this.metadataCache.get(url)!;
    }

    try {
      const imagePath = join(process.cwd(), "public", url);
      const buffer = await readFile(imagePath);
      const metadata = await sharp(buffer).metadata();

      const imageMetadata: ImageMetadata = {
        width: metadata.width!,
        height: metadata.height!,
        format: metadata.format!,
        size: buffer.length,
        url,
        thumbnailUrl: url.replace("/images/", "/images/thumbnails/"),
      };

      // Cache metadata
      this.metadataCache.set(url, imageMetadata);

      return imageMetadata;
    } catch (error) {
      console.error("Error getting image metadata:", error);
      return null;
    }
  }

  public async deleteImage(url: string): Promise<void> {
    try {
      const imagePath = join(process.cwd(), "public", url);
      const thumbnailPath = imagePath.replace("/images/", "/images/thumbnails/");

      await Promise.all([
        writeFile(imagePath, ""), // Clear file
        writeFile(thumbnailPath, ""), // Clear thumbnail
      ]);

      // Remove from cache
      this.metadataCache.delete(url);
    } catch (error) {
      console.error("Error deleting image:", error);
      throw new Error("Failed to delete image");
    }
  }
} 