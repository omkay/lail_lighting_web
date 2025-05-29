import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"

export default function SchematicDesignArticlePage() {
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
                alt="Schematic Design"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">02. Service</div>
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  Schematic <span className="font-medium">Design</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  A visual translation of concepts into practical solutions
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
                  The schematic design aims to show the application of the concepts in drawings. This is a graphical
                  representation of the concept application with sketches of possible installation solutions.
                </p>

                <p>
                  This stage is crucial before we start the detailed design stage and issuance of drawings. It bridges
                  the gap between creative vision and technical implementation.
                </p>

                <h2>What to Expect</h2>

                <p>During the schematic design phase, our team will:</p>

                <ul>
                  <li>Translate conceptual ideas into preliminary drawings</li>
                  <li>Develop lighting layouts showing fixture locations</li>
                  <li>Create initial lighting calculations</li>
                  <li>Propose fixture types and specifications</li>
                  <li>Present installation approaches and solutions</li>
                </ul>

                <h2>The Importance of Schematic Design</h2>

                <p>
                  Schematic design serves as the bridge between abstract concepts and concrete implementation. It allows
                  all stakeholders to visualize how lighting concepts will be realized in the physical space and
                  provides an opportunity to refine the approach before detailed technical drawings are created.
                </p>

                <p>
                  This phase helps identify potential challenges early in the process, allowing for adjustments that can
                  save time and resources during implementation.
                </p>

                <div className="my-12 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Schematic Design Process"
                    width={1200}
                    height={600}
                    className="object-cover"
                  />
                </div>

                <h2>Our Approach</h2>

                <p>
                  Our schematic design approach is methodical and collaborative. We work closely with the project team
                  to ensure that our lighting solutions are integrated with other building systems and architectural
                  elements.
                </p>

                <p>
                  We use a combination of 2D drawings, 3D visualizations, and lighting calculations to communicate our
                  ideas clearly and effectively. This allows all stakeholders to understand how the lighting will
                  function and appear in the completed space.
                </p>

                <h2>Next Steps</h2>

                <p>
                  Once the schematic design is approved, we move on to the detailed design phase, where we develop
                  comprehensive technical documentation for implementation.
                </p>
              </div>

              <div className="mt-16 flex justify-center">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href="/services/design#lighting-distribution">
                    Explore Our Design Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div>
                    <Link href="/articles/concept-design" className="text-sm text-white/60 hover:text-white">
                      ← Previous: Concept Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="/articles/detailed-design" className="text-sm text-white/60 hover:text-white">
                      Next: Detailed Design →
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
