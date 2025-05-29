import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"

export default function DesignServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <StaticSpotlightEffect intensity={0.8} size={1.0} color="255, 255, 255">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=800&width=1920"
                alt="Lighting Design Services"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className="relative mx-auto max-w-3xl text-center">
                {/* Enhanced radiant glow effect */}
                <div className="absolute -inset-10 bg-gradient-radial from-white/30 via-white/10 to-transparent opacity-90 blur-2xl"></div>
                <div className="absolute -inset-5 bg-gradient-radial from-white/40 to-transparent opacity-75 blur-xl"></div>
                <div className="absolute -inset-20 bg-gradient-conic from-amber-100/25 via-white/15 to-amber-100/25 opacity-60 blur-3xl animate-slow-spin"></div>

                <h1 className="relative text-4xl font-light tracking-tight md:text-5xl lg:text-6xl [text-shadow:0_0_15px_rgba(255,255,255,0.5)]">
                  Design <span className="font-medium">Services</span>
                </h1>
                <p className="relative mt-6 text-lg text-white/90 md:text-xl">
                  Transform your space with our professional lighting design expertise
                </p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Services Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Service 1: Consultation */}
                <div
                  id="consultation"
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">Consultation</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]"></div>
                  <p className="mt-4 text-sm text-white/70">
                    Expert guidance to illuminate your space with precision and artistry.
                  </p>

                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">90-minute virtual or in-person consultation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Assessment of current lighting conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Personalized lighting recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Product suggestions within your budget</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Follow-up email with summary and recommendations</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link href="/checkout?service=consultation">
                        Contact us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Service 2: Lighting Distribution */}
                <div
                  id="lighting-distribution"
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">Lighting Distribution</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]"></div>
                  <p className="mt-4 text-sm text-white/70">
                    Technical planning for optimal light placement and distribution throughout your space.
                  </p>

                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Detailed lighting layout plans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Technical specifications for installation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Light calculation and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Fixture placement optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Two rounds of revisions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Digital delivery of all technical drawings</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link href="/checkout?service=lighting-distribution">
                        Contact us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Service 3: Professional Lighting Design */}
                <div
                  id="professional-lighting-design"
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-black/60"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFF1E0]/5 blur-[100px] transition-all duration-500 group-hover:bg-[#FFF1E0]/10"></div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">Professional Lighting Design</h3>
                  <div className="mt-2 text-2xl font-light text-[#FFF1E0]"></div>
                  <p className="mt-4 text-sm text-white/70">
                    Comprehensive end-to-end lighting design service for exceptional results.
                  </p>

                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Initial consultation and site assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Concept development and mood boards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Detailed lighting plans and 3D visualizations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Custom fixture selection and specification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Control system design and programming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Installation supervision and final focusing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-[#FFF1E0]" />
                      <span className="text-sm text-white/80">Three rounds of revisions</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                    >
                      <Link href="/checkout?service=professional-lighting-design">
                        Contact us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-light">Not sure which service is right for you?</h2>
                <p className="mt-4 text-white/70">
                  Contact us for a free 15-minute discovery call to discuss your project needs.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
