import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { ServiceStructuredData } from "@/components/structured-data"
import { StaticSpotlightEffect, DualSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import { generateMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateMetadata({
  title: "ليل للإضاءة - تصميم إضاءة معمارية احترافي",
  description:
    "شركة متخصصة في تصميم الإضاءة المعمارية، نحول المساحات من خلال حلول إضاءة مبتكرة تجمع بين الدقة التقنية والرؤية الفنية.",
  path: "/",
  keywords:
    "تصميم إضاءة، إضاءة معمارية، إضاءة داخلية، إضاءة خارجية، مصمم إضاءة، دبي، الإمارات العربية المتحدة، ليل للإضاءة",
  isArabic: true,
})

export default function ArabicHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ServiceStructuredData
        name="تصميم إضاءة احترافي"
        description="خدمة تصميم إضاءة شاملة من البداية إلى النهاية لنتائج استثنائية."
        url="https://laillighting.com/ar/services/design"
        price="2500"
        isArabic={true}
      />
      <MinimalHeader isArabic={true} />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        {/* Hero Section with Spotlight Effect */}
        <section className="relative min-h-screen flex items-center justify-center">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-10">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="تصميم إضاءة معمارية"
                fill
                priority
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-20 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-5xl font-light uppercase tracking-wider md:text-6xl lg:text-7xl">ليل للإضاءة</h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">إضاءة المساحات بدقة فنية</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/ar/projects"
                    className="inline-flex items-center border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                  >
                    استكشف أعمالنا
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Design Services Section */}
        <section className="relative py-24 md:py-32">
          <DualSpotlightEffect intensity={0.5} size={0.7} color="255, 241, 224">
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl lg:text-5xl">
                  خدمات <span className="font-medium">التصميم</span>
                </h2>
                <p className="mt-6 text-lg text-white/80 md:text-xl">حوّل مساحتك بخبرتنا المتخصصة في تصميم الإضاءة</p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-3">
                  {/* Service 1: Consultation */}
                  <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">الاستشارة</h3>
                    <p className="mt-4 text-sm text-white/70">إرشادات خبيرة لإضاءة مساحتك بدقة وفن.</p>

                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">استشارة لمدة 90 دقيقة افتراضية أو شخصية</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">تقييم ظروف الإضاءة الحالية</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">توصيات إضاءة مخصصة</span>
                      </li>
                    </ul>

                    <div className="mt-8">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link href="/ar/services/design#consultation" className="flex flex-row-reverse items-center">
                          عرض التفاصيل
                          <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Service 2: Lighting Distribution */}
                  <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">توزيع الإضاءة</h3>
                    <p className="mt-4 text-sm text-white/70">
                      تخطيط تقني لوضع الإضاءة الأمثل وتوزيعها في جميع أنحاء مساحتك.
                    </p>

                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">خطط تفصيلية لتصميم الإضاءة</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">مواصفات تقنية للتركيب</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">حساب وتحليل الإضاءة</span>
                      </li>
                    </ul>

                    <div className="mt-8">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link
                          href="/ar/services/design#lighting-distribution"
                          className="flex flex-row-reverse items-center"
                        >
                          عرض التفاصيل
                          <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Service 3: Professional Lighting Design */}
                  <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">تصميم إضاءة احترافي</h3>
                    <p className="mt-4 text-sm text-white/70">
                      خدمة تصميم إضاءة شاملة من البداية إلى النهاية لنتائج استثنائية.
                    </p>

                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">استشارة أولية وتقييم الموقع</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">تطوير المفهوم ولوحات الأجواء</span>
                      </li>
                      <li className="flex items-start flex-row-reverse">
                        <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                        <span className="text-sm text-white/80">خطط إضاءة تفصيلية وتصورات ثلاثية الأبعاد</span>
                      </li>
                    </ul>

                    <div className="mt-8">
                      <Button
                        asChild
                        className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                      >
                        <Link
                          href="/ar/services/design#professional-lighting-design"
                          className="flex flex-row-reverse items-center"
                        >
                          عرض التفاصيل
                          <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DualSpotlightEffect>
        </section>

        {/* Featured Projects Section */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl lg:text-5xl">
                مشاريع <span className="font-medium">مميزة</span>
              </h2>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                استكشف مجموعة مختارة من مشاريعنا المميزة في تصميم الإضاءة
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 transition-all duration-300 hover:border-white/20 hover:bg-black/60">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77613753-2e3c-4c3e-8fca-85fdcd49a7b3.JPG-ynfKzvJTNSRDZlWEtIo1rOnYBONPqV.jpeg"
                    alt="بيت السكن"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-medium text-white">بيت السكن</h3>
                  <p className="mt-2 text-sm text-white/60">سكني | إضاءة خارجية</p>
                  <div className="mt-4 flex items-center justify-end text-sm text-white/70 group-hover:text-white/90">
                    عرض المشروع
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 transition-all duration-300 hover:border-white/20 hover:bg-black/60">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b92ff400-05d7-415c-a03b-c9f4aca74fa5.JPG-FZL4QzyraBXNT8GchgFyZHDAZeY381.jpeg"
                    alt="قصر الديوان"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-medium text-white">قصر الديوان</h3>
                  <p className="mt-2 text-sm text-white/60">ثقافي | إضاءة خارجية</p>
                  <div className="mt-4 flex items-center justify-end text-sm text-white/70 group-hover:text-white/90">
                    عرض المشروع
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 transition-all duration-300 hover:border-white/20 hover:bg-black/60">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d23b78d-4a2a-4151-955e-014c8f9bbc44%281%29.JPG-Oi64Ws0tUhP77Rlmvd4Tw77PFpo8IL.jpeg"
                    alt="ممر السكينة"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-xl font-medium text-white">ممر السكينة</h3>
                  <p className="mt-2 text-sm text-white/60">سكني | إضاءة داخلية</p>
                  <div className="mt-4 flex items-center justify-end text-sm text-white/70 group-hover:text-white/90">
                    عرض المشروع
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                <Link href="/ar/projects" className="flex items-center">
                  عرض جميع المشاريع
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-black"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-light uppercase tracking-wider md:text-4xl">
                هل أنت مستعد <span className="font-medium text-[#FFF1E0]">لإضاءة</span> رؤيتك؟
              </h2>
              <p className="mt-6 text-lg text-white/70">
                دعنا نتعاون لإنشاء حلول إضاءة تحول مساحتك إلى تجربة استثنائية.
              </p>
              <div className="mt-10">
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center border border-white/20 px-8 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                >
                  اتصل بنا
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isArabic={true} />
    </div>
  )
}
