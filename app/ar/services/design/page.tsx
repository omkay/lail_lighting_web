import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShootingStars } from "@/components/shooting-stars"
import { generateMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateMetadata({
  title: "خدمات تصميم الإضاءة - ليل للإضاءة",
  description:
    "خدمات تصميم إضاءة احترافية تشمل الاستشارة، توزيع الإضاءة، والتصميم الشامل. حول مساحتك مع خبراء الإضاءة المعمارية.",
  path: "/services/design",
  keywords: "خدمات تصميم الإضاءة، استشارة إضاءة، توزيع الإضاءة، تصميم إضاءة احترافي، ليل للإضاءة",
  isArabic: true,
})

export default function ArabicDesignServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader isArabic={true} />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="خدمات تصميم الإضاءة"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          </div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                <span className="font-medium">خدمات</span> التصميم
              </h1>
              <p className="mt-6 text-lg text-white/80 md:text-xl">حوّل مساحتك بخبرتنا المتخصصة في تصميم الإضاءة</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Service 1: Consultation */}
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">الاستشارة</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]">250 دولار</div>
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
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">اقتراحات منتجات ضمن ميزانيتك</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">بريد إلكتروني للمتابعة مع ملخص وتوصيات</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link href="/ar/checkout?service=consultation" className="flex flex-row-reverse items-center">
                        شراء
                        <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Service 2: Lighting Distribution */}
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">توزيع الإضاءة</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]">750 دولار</div>
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
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">تحسين موضع التركيبات</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">جولتان من المراجعات</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">تسليم رقمي لجميع الرسومات التقنية</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link
                        href="/ar/checkout?service=lighting-distribution"
                        className="flex flex-row-reverse items-center"
                      >
                        شراء
                        <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Service 3: Professional Lighting Design */}
                <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60 text-right">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">تصميم إضاءة احترافي</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]">2,500 دولار</div>
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
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">اختيار وتحديد التركيبات المخصصة</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">تصميم وبرمجة نظام التحكم</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">الإشراف على التركيب والتركيز النهائي</span>
                    </li>
                    <li className="flex items-start flex-row-reverse">
                      <Check className="ml-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">ثلاث جولات من المراجعات</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link
                        href="/ar/checkout?service=professional-lighting-design"
                        className="flex flex-row-reverse items-center"
                      >
                        شراء
                        <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-16 rounded-lg border border-white/10 bg-black/30 p-8 text-right">
                <h2 className="text-2xl font-light">لماذا تختار خدمات التصميم لدينا؟</h2>
                <p className="mt-4 text-white/70">
                  في ليل للإضاءة، نجمع بين الخبرة التقنية والرؤية الفنية لإنشاء حلول إضاءة تحول المساحات. يفهم فريقنا من
                  مصممي الإضاءة ذوي الخبرة التوازن الدقيق بين الوظائف والجماليات، مما يضمن حصول كل مشروع على الاهتمام
                  بالتفاصيل التي يستحقها.
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <div>
                    <h3 className="text-lg font-medium">الخبرة</h3>
                    <p className="mt-2 text-sm text-white/70">
                      يتمتع مصممونا بسنوات من الخبرة في العمل على مشاريع سكنية وتجارية وضيافة بجميع الأحجام.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">التخصيص</h3>
                    <p className="mt-2 text-sm text-white/70">
                      نقوم بتخصيص خدماتنا وفقًا لاحتياجاتك المحددة، مما يضمن أن تعكس النتيجة النهائية رؤيتك وتعزز مساحتك.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">الجودة</h3>
                    <p className="mt-2 text-sm text-white/70">
                      نعمل مع منتجات إضاءة متميزة وشركاء تركيب موثوقين لتقديم نتائج استثنائية تصمد أمام اختبار الزمن.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16 text-right">
                <h2 className="text-2xl font-light">الأسئلة الشائعة</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">كم من الوقت تستغرق عملية التصميم؟</h3>
                    <p className="mt-2 text-sm text-white/70">
                      تختلف الأطر الزمنية بناءً على تعقيد المشروع. تكتمل الاستشارات في غضون أسبوع، وعادة ما تستغرق خطط
                      توزيع الإضاءة 2-3 أسابيع، ويمكن أن تتراوح مشاريع تصميم الإضاءة الاحترافية من 4-8 أسابيع.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">هل تعملون مع المقاولين الحاليين؟</h3>
                    <p className="mt-2 text-sm text-white/70">
                      نعم، يسعدنا التعاون مع المقاولين أو المهندسين المعماريين أو مصممي الديكور الداخلي الحاليين لضمان
                      التكامل السلس لتصميم الإضاءة لدينا.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">ما هي المناطق التي تخدمونها؟</h3>
                    <p className="mt-2 text-sm text-white/70">
                      نقدم خدمات شخصية في الإمارات العربية المتحدة والمناطق المحيطة بها. للعملاء خارج هذه المناطق، نقدم
                      استشارات افتراضية وخدمات تصميم رقمية.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">هل يمكنكم المساعدة في شراء المنتجات؟</h3>
                    <p className="mt-2 text-sm text-white/70">
                      نعم، يمكننا المساعدة في مصادر وشراء تركيبات الإضاءة وأنظمة التحكم. يمكن إضافة هذه الخدمة إلى أي من
                      حزم التصميم لدينا.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-light">غير متأكد من الخدمة المناسبة لك؟</h2>
                <p className="mt-4 text-white/70">
                  اتصل بنا للحصول على مكالمة استكشافية مجانية مدتها 15 دقيقة لمناقشة احتياجات مشروعك.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    <Link href="/ar/contact" className="flex flex-row-reverse items-center">
                      اتصل بنا
                      <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isArabic={true} />
    </div>
  )
}
