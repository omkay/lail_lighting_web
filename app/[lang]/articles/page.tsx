import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { prisma } from "@/lib/prisma"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ArticlesPageProps {
  params: Promise<{
    lang: string
  }>
  searchParams: Promise<{
    search?: string
    category?: string
  }>
}

async function getArticles(search?: string, category?: string) {
  try {
    const articles = await prisma.article.findMany({
      where: {
        status: "published",
        ...(search && {
          OR: [
            { title: { contains: search } },
            { content: { contains: search } },
            { tldr_desc: { contains: search } }
          ]
        }),
        ...(category && category !== "all" && { category })
      },
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
    console.error('Error fetching articles:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const categories = await prisma.article.findMany({
      select: { category: true },
      distinct: ['category'],
      where: { status: "published" }
    });
    return categories.map(c => c.category);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function ArticlesPage({ params, searchParams }: ArticlesPageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams
  ])
  const { lang } = resolvedParams
  const { search, category } = resolvedSearchParams
  const isRtl = lang === "ar"
  const dir = isRtl ? "rtl" : "ltr"

  // Get articles and categories data
  const [articles, categories] = await Promise.all([
    getArticles(search, category),
    getCategories()
  ])

  return (
    <div className={`flex flex-col ${isRtl ? "rtl" : ""}`} dir={dir}>
      <MinimalHeader />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=800&width=1920"
                alt="Lighting Design Articles"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  {lang === "ar" ? (
                    <>
                      <span className="font-medium">مقالاتنا</span>
                    </>
                  ) : (
                    <>
                      Our <span className="font-medium">Articles</span>
                    </>
                  )}
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  {lang === "ar"
                    ? "اكتشف أحدث المقالات والرؤى في مجال الإضاءة المعمارية والتصميم"
                    : "Discover the latest articles and insights in architectural lighting and design"}
                </p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Search and Filter Section */}
        <section className="relative py-8">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative flex-1">
                  <form action={`/${lang}/articles`} className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                      <Input
                        type="search"
                        name="search"
                        placeholder={lang === "ar" ? "ابحث عن مقالات..." : "Search articles..."}
                        defaultValue={search}
                        className="w-full bg-white/5 pl-10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <Select name="category" defaultValue={category || "all"}>
                      <SelectTrigger className="w-[180px] bg-white/5 text-white">
                        <SelectValue placeholder={lang === "ar" ? "جميع الفئات" : "All Categories"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{lang === "ar" ? "جميع الفئات" : "All Categories"}</SelectItem>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button type="submit" className="bg-white text-black hover:bg-white/90">
                      {lang === "ar" ? "بحث" : "Search"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-light">{lang === "ar" ? "المقالات المميزة" : "Featured Articles"}</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={article.image?.url || "/lighting_bg.jpg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {article.category}
                          </span>
                          {article.publishedAt && (
                            <span className="text-xs text-white/80">
                              {new Date(article.publishedAt).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
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
                        {article.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60 line-clamp-3">
                        {article.tldr_desc}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-white/10" />
                          <span className="text-sm text-white/60">{article.author}</span>
                        </div>
                        <Link
                          href={`/${lang}/articles/${article.id}`}
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

        {/* Call to Action */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-black"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-2xl font-light md:text-3xl">
                {lang === "ar" ? (
                  <>
                    هل تريد معرفة المزيد عن <span className="font-medium">الإضاءة المعمارية</span>؟
                  </>
                ) : (
                  <>
                    Want to learn more about <span className="font-medium">architectural lighting</span>?
                  </>
                )}
              </h2>
              <p className="mt-4 text-white/70">
                {lang === "ar"
                  ? "اشترك في نشرتنا البريدية للحصول على أحدث المقالات والرؤى في مجال الإضاءة المعمارية."
                  : "Subscribe to our newsletter to receive the latest articles and insights in architectural lighting."}
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href={`/${lang}/contact`}>
                    {lang === "ar" ? (
                      <>
                        اشترك الآن
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Subscribe now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 