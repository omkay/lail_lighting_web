import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { prisma } from "@/lib/prisma"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ArticlePageProps {
  params: Promise<{
    id: string
    lang: string
  }>
}

interface ArticleImage {
  url: string
  alt?: string
}

interface Article {
  id: string
  title: string
  content: string
  author: string
  category: string
  tldr_desc: string
  status: string
  publishedAt: Date | null
  createdAt: Date
  updatedAt: Date
  tags: string[]
  image: ArticleImage | null
}

async function getArticleDetails(id: string): Promise<Article | null> {
  try {
    const article = await prisma.article.findUnique({
      where: { id }
    });

    if (!article) {
      return null;
    }

    return {
      ...article,
      tags: article.tags ? JSON.parse(article.tags) : [],
      image: article.image ? JSON.parse(article.image) : null,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

async function getRelatedArticles(currentArticle: Article, limit: number = 3) {
  try {
    const articles = await prisma.article.findMany({
      where: {
        status: "published",
        id: { not: currentArticle.id },
        OR: [
          { category: currentArticle.category },
          { tags: { contains: currentArticle.tags[0] } }
        ]
      },
      take: limit,
      orderBy: {
        publishedAt: 'desc'
      }
    });

    return articles.map(article => ({
      ...article,
      tags: article.tags ? JSON.parse(article.tags) : [],
      image: article.image ? JSON.parse(article.image) : null,
    }));
  } catch (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, '').trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    headings.push({ id, text, level });
  }

  return headings;
}

function TableOfContents({ headings, lang }: { headings: { id: string; text: string; level: number }[]; lang: string }) {
  if (headings.length === 0) return null;

  return (
    <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-lg font-medium">
        {lang === "ar" ? "جدول المحتويات" : "Table of Contents"}
      </h2>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className="text-sm text-white/60 hover:text-white"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const { id, lang } = resolvedParams
  const article = await getArticleDetails(id)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article)
  const isRtl = lang === "ar"
  const dir = isRtl ? "rtl" : "ltr"
  const readingTime = calculateReadingTime(article.content)
  const headings = extractHeadings(article.content)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = article.title

  // Add IDs to headings in the content
  const contentWithIds = article.content.replace(
    /<h([2-3])([^>]*)>(.*?)<\/h\1>/g,
    (match, level, attrs, text) => {
      const id = text.toLowerCase().replace(/<[^>]*>/g, '').trim().replace(/[^a-z0-9]+/g, '-');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    }
  );

  return (
    <div className={`flex flex-col ${isRtl ? "rtl" : ""}`} dir={dir}>
      <MinimalHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh]">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-10">
              <Image
                src={article.image?.url || "/lighting_bg.jpg"}
                alt={article.title}
                fill
                priority
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-20 flex min-h-[50vh] items-center px-4 py-24 md:min-h-[60vh] md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">{article.title}</h1>
                <div className="mt-6 flex items-center justify-center gap-4 text-lg text-white/80 md:text-xl">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                  {article.publishedAt && (
                    <>
                      <span>•</span>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </>
                  )}
                  <span>•</span>
                  <span>
                    {readingTime} {lang === "ar" ? "دقائق للقراءة" : "min read"}
                  </span>
                </div>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Article Content */}
        <section className="relative py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-invert max-w-none">
                <div className="text-xl leading-relaxed text-white/90">{article.tldr_desc}</div>
                {headings.length > 0 && <TableOfContents headings={headings} lang={lang} />}
                <div className="mt-8 text-lg leading-relaxed text-white/80" dangerouslySetInnerHTML={{ __html: contentWithIds }} />
              </div>

              {/* Tags and Share */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-4 py-1 text-sm text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-black/90 border-white/10">
                    <DropdownMenuItem asChild>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="relative py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-12 text-3xl font-light">
                  {lang === "ar" ? "مقالات ذات صلة" : "Related Articles"}
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedArticles.map((relatedArticle) => (
                    <div
                      key={relatedArticle.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={relatedArticle.image?.url || "/lighting_bg.jpg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                              {relatedArticle.category}
                            </span>
                            {relatedArticle.publishedAt && (
                              <span className="text-xs text-white/80">
                                {new Date(relatedArticle.publishedAt).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                })}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-3 text-xl font-medium line-clamp-2 group-hover:text-white/90">
                          {relatedArticle.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60 line-clamp-3">
                          {relatedArticle.tldr_desc}
                        </p>
                        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-white/10" />
                            <span className="text-sm text-white/60">{relatedArticle.author}</span>
                          </div>
                          <Link
                            href={`/${lang}/articles/${relatedArticle.id}`}
                            className="inline-flex items-center text-sm font-medium text-white/80 transition-colors hover:text-white"
                          >
                            {lang === "ar" ? (
                              <>
                                قراءة المزيد
                                <ArrowRight className="mr-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read more
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Articles */}
        <section className="relative py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Link
                href={`/${lang}/articles`}
                className="inline-flex items-center text-sm uppercase tracking-wider text-white/60 hover:text-white"
              >
                {lang === "ar" ? (
                  <>
                    العودة إلى جميع المقالات
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all articles
                  </>
                )}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 