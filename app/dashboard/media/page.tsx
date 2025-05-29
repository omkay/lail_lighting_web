"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { ImageMetadata } from "@/lib/image-utils";
import Image from "next/image";
import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface MediaItem extends ImageMetadata {
  folder: string;
}

export default function MediaLibraryPage() {
  const [images, setImages] = useState<MediaItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<"all" | "projects" | "articles" | "products">("all");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/media");
      if (!response.ok) throw new Error("Failed to fetch images");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageUpload = async (metadata: ImageMetadata, folder: string) => {
    try {
      const response = await fetch("/api/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...metadata, folder }),
      });

      if (!response.ok) throw new Error("Failed to save image metadata");
      
      const newImage = await response.json();
      setImages((prev) => [...prev, newImage]);
    } catch (error) {
      console.error("Error saving image:", error);
    }
  };

  const handleDeleteImage = async (url: string) => {
    try {
      const response = await fetch(`/api/upload?url=${encodeURIComponent(url)}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete image");

      setImages((prev) => prev.filter((img) => img.url !== url));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const filteredImages = images.filter((image) => {
    const matchesSearch = image.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = selectedFolder === "all" || image.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Media Library</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <Tabs value={selectedFolder} onValueChange={(value) => setSelectedFolder(value as any)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredImages.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video group">
              <Image
                src={image.thumbnailUrl}
                alt={`Media item ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDeleteImage(image.url)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-2">
              <p className="text-xs text-muted-foreground truncate">
                {image.url.split("/").pop()}
              </p>
              <p className="text-xs text-muted-foreground">
                {image.width}x{image.height} • {Math.round(image.size / 1024)}KB
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="fixed bottom-8 right-8">
        <div className="flex gap-2">
          <ImageUpload
            value=""
            onChange={(metadata) => handleImageUpload(metadata, "projects")}
            onRemove={() => {}}
            folder="projects"
            aspectRatio={16 / 9}
            className="w-[200px]"
          />
          <ImageUpload
            value=""
            onChange={(metadata) => handleImageUpload(metadata, "articles")}
            onRemove={() => {}}
            folder="articles"
            aspectRatio={16 / 9}
            className="w-[200px]"
          />
          <ImageUpload
            value=""
            onChange={(metadata) => handleImageUpload(metadata, "products")}
            onRemove={() => {}}
            folder="products"
            aspectRatio={16 / 9}
            className="w-[200px]"
          />
        </div>
      </div>
    </div>
  );
} 