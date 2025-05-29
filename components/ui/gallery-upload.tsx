import { useState } from "react";
import { ImageUpload } from "@/components/ui/image-upload";
import { Button } from "@/components/ui/button";

interface GalleryUploadProps {
  value: { url: string }[];
  onChange: (images: { url: string }[]) => void;
  folder: 'projects' | 'articles' | 'products';
  aspectRatio?: number;
}

export function GalleryUpload({ value, onChange, folder, aspectRatio = 16 / 9 }: GalleryUploadProps) {
  const [images, setImages] = useState<{ url: string }[]>(value || []);

  const handleAdd = (metadata: { url: string }) => {
    const newImages = [...images, metadata];
    setImages(newImages);
    onChange(newImages);
  };

  const handleRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onChange(newImages);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-40 h-28">
            <img
              src={img.url}
              alt={img.url.split('/').pop()}
              className="object-cover w-full h-full rounded-lg"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-1 right-1"
              onClick={() => handleRemove(idx)}
            >
              ×
            </Button>
          </div>
        ))}
        <div className="w-40 h-28 flex items-center justify-center border border-dashed border-gray-400 rounded-lg">
          <ImageUpload
            value={undefined}
            onChange={(meta) => handleAdd({ url: meta.url })}
            onRemove={() => {}}
            folder={folder}
            aspectRatio={aspectRatio}
          />
        </div>
      </div>
    </div>
  );
} 