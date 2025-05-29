import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X, Image as ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/ui/image-upload";
import { ImageMetadata } from "@/lib/image-utils";
import { Image } from "lucide-react";
import { GalleryUpload } from "@/components/ui/gallery-upload";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  brief: z.string().min(1, "Brief is required"),
  paragraph: z.string().min(1, "Paragraph is required"),
  location: z.string().min(1, "Location is required"),
  clientReview: z.string().optional(),
  status: z.enum(["draft", "published", "archived"]),
  gallery: z.array(z.string()).optional().default([]),
  specifications: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      description: z.string().min(1, "Description is required"),
    })
  ).min(1, "At least one specification is required"),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: ProjectFormValues;
  onSubmit: (data: ProjectFormValues) => void;
}

export function ProjectForm({ initialData, onSubmit }: ProjectFormProps) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: initialData?.title || "",
      category: initialData?.category || "",
      brief: initialData?.brief || "",
      paragraph: initialData?.paragraph || "",
      location: initialData?.location || "",
      clientReview: initialData?.clientReview || "",
      status: initialData?.status || "draft",
      gallery: initialData?.gallery || [],
      specifications: initialData?.specifications || [],
    },
  });

  // Update form values when initialData changes
  useEffect(() => {
    if (initialData) {
      form.reset({
        title: initialData.title,
        category: initialData.category,
        brief: initialData.brief,
        paragraph: initialData.paragraph,
        location: initialData.location,
        clientReview: initialData.clientReview || "",
        status: initialData.status,
        gallery: initialData.gallery || [],
        specifications: initialData.specifications,
      });
    }
  }, [initialData, form]);

  const specifications = form.watch("specifications");

  const addSpecification = () => {
    // Prevent adding if the last spec is empty
    if (specifications && specifications.length > 0) {
      const last = specifications[specifications.length - 1];
      if (!last.title.trim() || !last.description.trim()) {
        form.setError("specifications", { type: "manual", message: "Please fill out the last specification before adding a new one." });
        return;
      }
    }
    const newSpecifications = [...(specifications || []), { title: "", description: "" }];
    form.setValue("specifications", newSpecifications);
    form.clearErrors("specifications");
  };

  const removeSpecification = (index: number) => {
    const newSpecifications = specifications.filter((_, i) => i !== index);
    form.setValue("specifications", newSpecifications);
  };

  const handleSubmit = (data: ProjectFormValues) => {
    // Filter out any empty specifications before submitting
    const validSpecifications = data.specifications.filter(
      spec => spec.title.trim() !== "" && spec.description.trim() !== ""
    );
    if (validSpecifications.length === 0) {
      form.setError("specifications", { type: "manual", message: "At least one complete specification is required." });
      return;
    }
    form.clearErrors("specifications");
    onSubmit({ ...data, specifications: validSpecifications });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gallery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Gallery Images</FormLabel>
              <FormControl>
                <GalleryUpload
                  value={field.value?.map((url: string) => ({ url })) || []}
                  onChange={(images) => field.onChange(images.map(img => img.url))}
                  folder="projects"
                  aspectRatio={16 / 9}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brief"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paragraph"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paragraph</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="clientReview"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Review (Optional)</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Specifications</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSpecification}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Specification
            </Button>
          </div>
          {form.formState.errors.specifications && (
            <p className="text-sm text-red-500">{form.formState.errors.specifications.message as string}</p>
          )}

          {specifications && specifications.map((_, index) => (
            <div key={index} className="flex gap-4">
              <FormField
                control={form.control}
                name={`specifications.${index}.title`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Title" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`specifications.${index}.description`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Description" {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeSpecification(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <Button type="submit">Save Project</Button>
      </form>
    </Form>
  );
} 