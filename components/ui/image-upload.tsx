import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Upload, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageMetadata } from "@/lib/image-utils";

interface ImageUploadProps {
  value?: string;
  onChange: (metadata: ImageMetadata) => void;
  onRemove: () => void;
  folder: "projects" | "articles" | "products";
  className?: string;
  aspectRatio?: number;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  folder,
  className,
  aspectRatio = 16 / 9,
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      setIsUploading(true);
      setError(null);

      const file = acceptedFiles[0];
      
      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Create form data
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);

      // Upload image
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to upload image");
      }

      const metadata = await response.json();
      onChange(metadata);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image");
      setPreview(null);
    } finally {
      setIsUploading(false);
    }
  }, [folder, onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxFiles: 1,
    disabled: isUploading,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value) {
      // Delete the image from the server
      fetch(`/api/upload?url=${encodeURIComponent(value)}`, {
        method: "DELETE",
      }).catch(console.error);
    }
    setPreview(null);
    onRemove();
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors",
          isDragActive ? "border-primary" : "border-muted",
          isUploading && "opacity-50 cursor-not-allowed"
        )}
      >
        <input {...getInputProps()} />
        {value || preview ? (
          <div className="relative" style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}>
            <Image
              src={preview || value!}
              alt="Uploaded image"
              fill
              className="object-cover rounded-lg"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={handleRemove}
              disabled={isUploading}
            >
              <X className="h-4 w-4" />
            </Button>
            {isUploading && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <Upload className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              {isDragActive
                ? "Drop the image here"
                : "Drag & drop an image, or click to select"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PNG, JPG, JPEG, WEBP up to 10MB
            </p>
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
} 