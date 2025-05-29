import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShootingStars } from "@/components/shooting-stars"
import { RTLReveal, RTLStagger } from "@/components/rtl-animations"
import { ArabicPattern, GeometricAccent, CalligraphyAccent } from "@/components/cultural-elements"
import { generateMetadata } from "@/lib/meta-utils"

export const metadata: Metadata = generateMetadata({
  title: "اتصل بنا - ليل للإضاءة",
  description: "تواصل مع فريق ليل للإضاءة لمناقشة احتياجات مشروعك من تصميم الإضاءة.",
  path: "/contact",
  keywords: "اتصل بنا، تواصل، استشارة إضاءة، تصميم إضاءة، ليل للإضاءة",
  isArabic: true,
})

export default function ArabicContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader isArabic={true} />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="اتصل بنا"
              fill
              priority
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
          </div>
          <ShootingStars />
          <ArabicPattern className="inset-0" />
          <CalligraphyAccent word="تواصل" className="top-20 right-[10%] opacity-10" size="lg" />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <RTLReveal>
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  اتصل <span className="font-medium">بنا</span>
                </h1>
              </RTLReveal>
              <RTLReveal delay={0.2}>
                <p className="mt-6 text-lg text-white/80 md:text-xl">دعنا نناقش كيف يمكننا إضاءة مشروعك القادم</p>
              </RTLReveal>
            </div>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <GeometricAccent className="top-20 left-10" rotate={15} />
          <GeometricAccent className="bottom-20 right-10" rotate={45} />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <RTLReveal className="text-right">
                  <h2 className="text-2xl font-bold">أرسل لنا رسالة</h2>
                </RTLReveal>
                <form className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 text-right">
                      <label htmlFor="name" className="text-sm font-medium">
                        الاسم
                      </label>
                      <Input
                        id="name"
                        placeholder="اسمك"
                        className="border-white/20 bg-white/5 text-white text-right placeholder:text-white/50 focus:border-white"
                      />
                    </div>
                    <div className="space-y-2 text-right">
                      <label htmlFor="email" className="text-sm font-medium">
                        البريد الإلكتروني
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="بريدك الإلكتروني"
                        className="border-white/20 bg-white/5 text-white text-right placeholder:text-white/50 focus:border-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 text-right">
                    <label htmlFor="subject" className="text-sm font-medium">
                      الموضوع
                    </label>
                    <Input
                      id="subject"
                      placeholder="الموضوع"
                      className="border-white/20 bg-white/5 text-white text-right placeholder:text-white/50 focus:border-white"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label htmlFor="message" className="text-sm font-medium">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      placeholder="رسالتك"
                      className="min-h-[150px] border-white/20 bg-white/5 text-white text-right placeholder:text-white/50 focus:border-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    <span className="flex items-center flex-row-reverse">
                      إرسال الرسالة
                      <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                    </span>
                  </Button>
                </form>
              </div>
              <div className="order-1 md:order-2">
                <RTLReveal className="text-right">
                  <h2 className="text-2xl font-bold">معلومات الاتصال</h2>
                  <p className="mt-4 text-white/70">
                    تواصل معنا من خلال أي من القنوات التالية. نحن مستعدون لمناقشة احتياجات تصميم الإضاءة الخاصة بك.
                  </p>
                </RTLReveal>
                <RTLStagger className="mt-8 space-y-6">
                  <div className="flex items-start flex-row-reverse">
                    <Mail className="ml-4 h-6 w-6 text-white/60" />
                    <div className="text-right">
                      <h3 className="text-lg font-medium">البريد الإلكتروني</h3>
                      <a href="mailto:laillighting@gmail.com" className="text-white/70 hover:text-white">
                        laillighting@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start flex-row-reverse">
                    <Phone className="ml-4 h-6 w-6 text-white/60" />
                    <div className="text-right">
                      <h3 className="text-lg font-medium">الهاتف</h3>
                      <a href="tel:+971559346015" className="text-white/70 hover:text-white">
                        +971 55 934 6015
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start flex-row-reverse">
                    <MessageSquare className="ml-4 h-6 w-6 text-white/60" />
                    <div className="text-right">
                      <h3 className="text-lg font-medium">واتساب</h3>
                      <a href="https://wa.me/971559346015" className="text-white/70 hover:text-white">
                        +971 55 934 6015
                      </a>
                    </div>
                  </div>
                </RTLStagger>
                <RTLReveal delay={0.4} className="mt-12 text-right">
                  <h3 className="text-lg font-medium">تابعنا</h3>
                  <div className="mt-4 flex space-x-4 flex-row-reverse space-x-reverse">
                    <a
                      href="https://instagram.com"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">انستغرام</span>
                    </a>
                    <a
                      href="https://twitter.com"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">تويتر</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">لينكد إن</span>
                    </a>
                  </div>
                </RTLReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isArabic={true} />
    </div>
  )
}
