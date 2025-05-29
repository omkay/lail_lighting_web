"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { ArticleForm } from "@/components/articles/article-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  tldr_desc: string;
  status: "draft" | "published" | "archived";
  tags?: string[];
  image?: {
    url: string;
    thumbnailUrl: string;
    width: number;
    height: number;
    format: string;
    size: number;
  };
}

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const resolvedParams = use(params);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/articles/${resolvedParams.id}`);
        if (response.ok) {
          const data = await response.json();
          // Parse tags if they're stored as a string
          const parsedData = {
            ...data,
            tags: typeof data.tags === 'string' ? 
              (data.tags.startsWith('[') ? JSON.parse(data.tags) : data.tags.split(',').map((tag: string) => tag.trim())) 
              : (data.tags || [])
          };
          setArticle(parsedData);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [resolvedParams.id]);

  const handleSubmit = async (data: any) => {
    try {
      console.log('Submitting article data:', data);
      const response = await fetch(`/api/articles/${resolvedParams.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Failed to update article');
      }

      const updatedArticle = await response.json();
      console.log('Article updated successfully:', updatedArticle);
      
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Error updating article:", error);
      // You might want to show an error message to the user here
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mr-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">Edit Article</h2>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleForm initialData={article} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </div>
  );
} 