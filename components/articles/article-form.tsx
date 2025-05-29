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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/ui/image-upload";
import { ImageMetadata } from "@/lib/image-utils";
import { X } from "lucide-react";

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
  category: z.string().min(1, "Category is required"),
  tldr_desc: z.string().min(1, "TLDR description is required"),
  status: z.enum(["draft", "published", "archived"]),
  tags: z.array(z.string()).optional(),
  image: z.object({
    url: z.string(),
    thumbnailUrl: z.string(),
    width: z.number(),
    height: z.number(),
    format: z.string(),
    size: z.number(),
  }).optional().nullable(),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

interface ArticleFormProps {
  initialData?: ArticleFormValues;
  onSubmit: (data: ArticleFormValues) => void;
}

export function ArticleForm({ initialData, onSubmit }: ArticleFormProps) {
  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: initialData?.title || "",
      content: initialData?.content || "",
      author: initialData?.author || "",
      category: initialData?.category || "",
      tldr_desc: initialData?.tldr_desc || "",
      status: initialData?.status || "draft",
      tags: initialData?.tags || [],
      image: initialData?.image || null,
    },
  });

  // Update form values when initialData changes
  useEffect(() => {
    if (initialData) {
      form.reset({
        title: initialData.title,
        content: initialData.content,
        author: initialData.author,
        category: initialData.category,
        tldr_desc: initialData.tldr_desc,
        status: initialData.status,
        tags: initialData.tags,
        image: initialData.image || null,
      });
    }
  }, [initialData, form]);

  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim()) {
      const currentTags = form.getValues("tags") || [];
      if (!currentTags.includes(tagInput.trim())) {
        form.setValue("tags", [...currentTags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const currentTags = form.getValues("tags") || [];
    form.setValue(
      "tags",
      currentTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleSubmit = (data: ArticleFormValues) => {
    // Ensure image is properly formatted
    const formattedData = {
      ...data,
      image: data.image || null,
    };
    console.log('Form submitted with data:', formattedData);
    onSubmit(formattedData);
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured Image</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value?.url}
                  onChange={(metadata: ImageMetadata) => {
                    console.log('Image metadata:', metadata);
                    field.onChange(metadata);
                  }}
                  onRemove={() => {
                    console.log('Removing image');
                    field.onChange(null);
                  }}
                  folder="articles"
                  aspectRatio={16 / 9}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  className="min-h-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
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
          name="tldr_desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TLDR Description</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value || ""} />
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

        <div className="space-y-4">
          <FormLabel>Tags</FormLabel>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
              placeholder="Add a tag"
            />
            <Button type="button" onClick={addTag}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.watch("tags")?.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-md"
              >
                <span className="text-sm">{tag}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4"
                  onClick={() => removeTag(tag)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">Save Article</Button>
      </form>
    </Form>
  );
} 