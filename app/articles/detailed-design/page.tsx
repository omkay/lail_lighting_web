import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"

export default function DetailedDesignArticlePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32">
          <StaticSpotlightEffect intensity={0.7} size={0.8} color="255, 255, 255">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=800&width=1920"
                alt="Detailed Design"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">03. Service</div>
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  Detailed <span className="font-medium">Design</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Technical implementation that brings vision to reality
                </p>
              </div>
            </div>
          </StaticSpotlightEffect>
        </section>

        {/* Article Content */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black"></div>
          <ShootingStars />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg prose-invert mx-auto">
                <p className="lead">
                  This is the final stage of the design process and aims to take into account all the details gathered
                  above. Here we develop the final ceiling, floor, and wall lighting layouts, control diagrams and
                  layouts, as well as the documentation and specifications to meet your site requirements and design
                  intent.
                </p>

                <h2>What to Expect</h2>

                <p>During the detailed design phase, our team will:</p>

                <ul>
                  <li>Develop comprehensive lighting layout drawings</li>
                  <li>Create detailed fixture schedules and specifications</li>
                  <li>Design control systems and programming</li>
                  <li>Prepare power requirements and load calculations</li>
                  <li>Coordinate with other building systems</li>
                  <li>Produce final documentation for implementation</li>
                </ul>

                <h2>The Importance of Detailed Design</h2>

                <p>
                  Detailed design transforms concepts and schematics into precise technical documentation that guides
                  the implementation process. It ensures that the lighting system can be properly installed, powered,
                  controlled, and maintained.
                </p>

                <p>
                  This phase is critical for ensuring that the final lighting installation achieves the design intent
                  while meeting all technical requirements, building codes, and energy efficiency standards.
                </p>

                <div className="my-12 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Detailed Design Process"
                    width={1200}
                    height={600}
                    className="object-cover"
                  />
                </div>

                <h2>Our Approach</h2>

                <p>
                  Our detailed design approach is thorough and precise. We leverage advanced lighting design software
                  and technical expertise to create comprehensive documentation that leaves no detail to chance.
                </p>

                <p>
                  We coordinate closely with architects, electrical engineers, and other consultants to ensure that our
                  lighting solutions integrate seamlessly with other building systems. Our specifications are clear,
                  detailed, and tailored to the specific requirements of each project.
                </p>

                <h2>Next Steps</h2>

                <p>
                  Once the detailed design is complete, we can assist with the tender process, contractor selection, and
                  construction administration to ensure that the lighting design is implemented as intended.
                </p>
              </div>

              <div className="mt-16 flex justify-center">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href="/services/design#professional-lighting-design">
                    Explore Our Design Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div>
                    <Link href="/articles/schematic-design" className="text-sm text-white/60 hover:text-white">
                      ← Previous: Schematic Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="/articles" className="text-sm text-white/60 hover:text-white">
                      Back to Articles
                    </Link>
                  </div>
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
