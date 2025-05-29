import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"
import { RTLReveal } from "@/components/rtl-animations"
import { generateMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateMetadata({
  title: "مشاريع الإضاءة - ليل للإضاءة",
  description: "استكشف مجموعة مشاريعنا المتميزة في تصميم الإضاءة المعمارية والداخلية والخارجية.",
  path: "/projects",
  keywords: "مشاريع إضاءة، تصميم إضاءة، إضاءة معمارية، إضاءة داخلية، إضاءة خارجية، ليل للإضاءة",
  isArabic: true,
})

export default function ArabicProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader isArabic={true} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=800&width=1920"
                alt="مشاريع الإضاءة"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <RTLReveal>
                  <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                    <span className="font-medium">مشاريع</span> الإضاءة
                  </h1>
                </RTLReveal>
                <RTLReveal delay={0.2}>
                  <p className="mt-6 text-lg text-white/80 md:text-xl">
                    تحويل المساحات من خلال التلاعب الفني بالضوء والظل
                  </p>
                </RTLReveal>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Featured Projects */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-3xl font-light text-right">مشاريع مميزة</h2>

              {/* Project 1 */}
              <div className="mb-32">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="order-2 md:order-1 flex flex-col justify-center text-right">
                    <h3 className="text-2xl font-medium">بيت السكن</h3>
                    <p className="mt-2 text-sm text-white/60">سكني | إضاءة خارجية</p>
                    <div className="mt-4 space-y-4 text-white/80">
                      <p>
                        يوضح هذا المسكن المهيب كيف يمكن للإضاءة المعمارية أن تحول المبنى إلى تحفة فنية ليلية. توظف إضاءة
                        الواجهة تقنية تراكب دقيقة، حيث تتدفق موجات ناعمة من الضوء على الأعمدة، مما يخلق تفاعلاً إيقاعياً
                        بين الضوء والظل.
                      </p>
                      <p>
                        يؤكد التصميم على فخامة الهيكل من خلال الإضاءة الاستراتيجية التي تبرز التيجان المزخرفة والعناصر
                        الزخرفية. تم اختيار درجة حرارة اللون الدافئة (2700K) خصيصاً لتكمل اللون الكريمي للواجهة الخارجية،
                        مما يعزز الحضور الرسمي للمبنى مع الحفاظ على أجواء ترحيبية.
                      </p>
                      <p>
                        لاحظ كيف تخلق الإضاءة عمقاً من خلال إبراز المناطق الغائرة بشكل مختلف عن العناصر البارزة، مما ينتج
                        عنه لوحة ثلاثية الأبعاد تكشف عن تفاصيل معمارية غير مرئية خلال ساعات النهار.
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white hover:text-black"
                      >
                        <Link href="/ar/projects/al-bayt-residence" className="flex flex-row-reverse items-center">
                          عرض تفاصيل المشروع
                          <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77613753-2e3c-4c3e-8fca-85fdcd49a7b3.JPG-ynfKzvJTNSRDZlWEtIo1rOnYBONPqV.jpeg"
                      alt="بيت السكن"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="mb-32">
                <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-start-1 md:row-span-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b92ff400-05d7-415c-a03b-c9f4aca74fa5.JPG-FZL4QzyraBXNT8GchgFyZHDAZeY381.jpeg"
                      alt="قصر الديوان"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:col-start-2 md:row-start-1 text-right">
                    <h3 className="text-2xl font-medium">قصر الديوان</h3>
                    <p className="mt-2 text-sm text-white/60">ثقافي | إضاءة خارجية</p>
                  </div>
                  <div className="space-y-4 text-white/80 md:col-start-2 md:row-start-2 text-right">
                    <p>
                      يعرض مشروع قصر الديوان نهجًا متقنًا لإضاءة المعالم الثقافية. يستخدم مخطط الإضاءة مزيجًا متناغمًا من
                      الإضاءة الخطية والإضاءة المركزة لتوضيح الواجهة المهيبة للمبنى، مما يخلق سيمفونية بصرية تحتفل
                      بتراثه المعماري.
                    </p>
                    <p>
                      يحظى كل عنصر معماري باهتمام فردي - تتوهج الكورنيشات المزخرفة بلون كهرماني رقيق، بينما يتم تحديد
                      الأقواس الإيقاعية بواسطة مصابيح موضوعة بدقة تعزز كمالها الهندسي. تخلق إضاءة القبة تأثيرًا يشبه
                      المنارة، مما يجذب العين لأعلى ويؤسس رحلة بصرية هرمية عبر الهيكل.
                    </p>
                    <p>
                      يحترم تصميم الإضاءة الأهمية التاريخية للمبنى مع تقديم تقنيات معاصرة تجعله في حوار مع محيطه الحديث.
                      النتيجة هي هوية ليلية تحول القصر إلى جوهرة مضيئة في سماء الليل، مرئية من مسافات كبيرة ولكنها لا
                      تطغى أبدًا في سطوعها.
                    </p>
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white hover:text-black"
                      >
                        <Link href="/ar/projects/al-diwan-palace" className="flex flex-row-reverse items-center">
                          عرض تفاصيل المشروع
                          <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="mb-32">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="order-2 md:order-1 flex flex-col justify-center text-right">
                    <h3 className="text-2xl font-medium">ممر السكينة</h3>
                    <p className="mt-2 text-sm text-white/60">سكني | إضاءة داخلية</p>
                    <div className="mt-4 space-y-4 text-white/80">
                      <p>
                        يوضح هذا الممر البسيط كيف يمكن للإضاءة المدروسة أن تحول مساحة انتقالية إلى ملاذ من الأناقة.
                        يستخدم التصميم مصابيح سقفية غائرة دقيقة تخلق بركًا من الإضاءة على الأرضية، مما يؤسس إيقاعًا يوجه
                        الحركة عبر المساحة دون إغراقها بسطوع غير ضروري.
                      </p>
                      <p>
                        تم إبراز الخطوط النظيفة للخزائن من خلال الوضع الدقيق للضوء والظل، مما يخلق اهتمامًا بصريًا مع
                        الحفاظ على الطابع الهادئ للمساحة. يحترم مخطط الإضاءة مادية الخشب، معززًا دفئه وملمسه الطبيعي بدلاً
                        من تسطيحه بإضاءة مفرطة.
                      </p>
                      <p>
                        لاحظ كيف تخلق الإضاءة إحساسًا بالعمق والأبعاد فيما يمكن أن يكون مجرد ممر بسيط. يؤسس التفاعل بين
                        المناطق المضاءة والمظللة تسلسلًا بصريًا متطورًا يرفع من التجربة الكاملة للتحرك عبر هذه المساحة.
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white hover:text-black"
                      >
                        <Link href="/ar/projects/serenity-corridor" className="flex flex-row-reverse items-center">
                          عرض تفاصيل المشروع
                          <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3d23b78d-4a2a-4151-955e-014c8f9bbc44%281%29.JPG-Oi64Ws0tUhP77Rlmvd4Tw77PFpo8IL.jpeg"
                      alt="ممر السكينة"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="mb-32">
                <div className="grid gap-8 md:grid-cols-2 md:grid-rows-[auto_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-start-1 md:row-span-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1219-Cover.jpg-DyerW66PSAfQJERuskvXFK819CjboY.jpeg"
                      alt="المسار المضيء"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:col-start-2 md:row-start-1 text-right">
                    <h3 className="text-2xl font-medium">المسار المضيء</h3>
                    <p className="mt-2 text-sm text-white/60">تجاري | ممر خارجي</p>
                  </div>
                  <div className="space-y-4 text-white/80 md:col-start-2 md:row-start-2 text-right">
                    <p>
                      يوضح مشروع المسار المضيء كيف يمكن للإضاءة المعمارية أن تحول مساحات التنقل الخارجية إلى تجارب
                      غامرة. تخلق المصابيح الأسطوانية الأنيقة موكبًا منظمًا من الضوء يوجه الزوار مع إلقاء ظلال درامية ترقص
                      عبر الممر.
                    </p>
                    <p>
                      يؤسس مخطط الإضاءة حوارًا بين البيئة المبنية وعناصر المناظر الطبيعية. لاحظ كيف تبرز الإضاءة الصفات
                      النسيجية للمساحات الخضراء، مما يخلق طبقات من الاهتمام البصري تتكشف أثناء التحرك عبر المساحة. تتلقى
                      الأسطح العمودية غسلات لطيفة من الضوء تكشف عن ماديتها دون إرباك التكوين.
                    </p>
                    <p>
                      يخلق التوازن الدقيق بين الإضاءة الوظيفية والتأثير الجوي مساحة تشعر بالأمان والسحر في آن واحد. تحول
                      الإضاءة ما يمكن أن يكون مجرد منطقة انتقالية إلى وجهة بحد ذاتها - حديقة ليلية حيث تتحاور العمارة
                      والطبيعة من خلال وسيط الضوء.
                    </p>
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white hover:text-black"
                      >
                        <Link href="/ar/projects/luminous-path" className="flex flex-row-reverse items-center">
                          عرض تفاصيل المشروع
                          <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional projects would continue here */}
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
                هل أنت مستعد لتحويل <span className="font-medium">مساحتك</span>؟
              </h2>
              <p className="mt-4 text-white/70">
                دعنا نتعاون لإنشاء حل إضاءة يعزز العمارة الخاصة بك ويخلق تجارب لا تُنسى.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href="/ar/contact" className="flex flex-row-reverse items-center">
                    اتصل بنا
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isArabic={true} />
    </div>
  )
}
