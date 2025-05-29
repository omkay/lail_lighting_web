import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { StaticSpotlightEffect } from "@/components/spotlight-effect"
import { Button } from "@/components/ui/button"

export default function ConceptDesignArticlePage() {
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
                alt="Concept Design"
                fill
                priority
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-4 text-sm font-medium uppercase tracking-wider text-white/60">01. Service</div>
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  Concept <span className="font-medium">Design</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  A visual story that sets the foundation for your lighting project
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
                  The concept design is the initial stage of the process. It's where we apply our creative ideas to the
                  material the architects and designers have provided us.
                </p>

                <p>
                  We take into account the aesthetics, functional use, and architectural structure, as well as the core
                  remit of the project. This is considered the most creative stage of the whole lighting design process.
                </p>

                <h2>What to Expect</h2>

                <p>During the concept design phase, our team will:</p>

                <ul>
                  <li>Analyze architectural and interior design drawings</li>
                  <li>Understand the intended use and atmosphere of each space</li>
                  <li>Develop initial lighting concepts that enhance architectural features</li>
                  <li>Create mood boards and visual references</li>
                  <li>Present preliminary lighting ideas and direction</li>
                </ul>

                <h2>The Importance of Concept Design</h2>

                <p>
                  A well-developed concept design serves as the foundation for all subsequent design phases. It
                  establishes the creative direction, aesthetic goals, and functional requirements that will guide the
                  entire lighting design process.
                </p>

                <p>
                  By investing time in this crucial first step, we ensure that the final lighting solution not only
                  meets technical requirements but also delivers the desired emotional impact and enhances the
                  architectural vision.
                </p>

                <div className="my-12 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Concept Design Process"
                    width={1200}
                    height={600}
                    className="object-cover"
                  />
                </div>

                <h2>Our Approach</h2>

                <p>
                  Our concept design approach is collaborative and iterative. We work closely with architects, interior
                  designers, and clients to understand their vision and requirements. We then translate these into
                  lighting concepts that enhance the space and create the desired atmosphere.
                </p>

                <p>
                  We believe that lighting should not only illuminate a space but also tell a story and create an
                  emotional connection. Our concept designs aim to capture this narrative and set the stage for a
                  successful lighting implementation.
                </p>

                <h2>Next Steps</h2>

                <p>
                  Once the concept design is approved, we move on to the schematic design phase, where we translate
                  these concepts into more detailed drawings and specifications.
                </p>
              </div>

              <div className="mt-16 flex justify-center">
                <Button
                  asChild
                  className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                >
                  <Link href="/services/design#consultation">
                    Explore Our Design Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-16 border-t border-white/10 pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div>
                    <Link href="/articles" className="text-sm text-white/60 hover:text-white">
                      ← Back to Articles
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href="/articles/schematic-design" className="text-sm text-white/60 hover:text-white">
                      Next: Schematic Design →
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
