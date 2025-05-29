import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { MinimalHeader } from "@/components/minimal-header"

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        <section className="relative py-20 md:py-28 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                Articles & <span className="font-medium">Insights</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                Explore the latest trends and innovations in lighting design.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section (Moved from services page) */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold">Our Services</h2>
              <p className="mt-2 text-lg text-white/70">EVERYTHING YOU NEED TO CREATE RADIANT RESULTS</p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Concept Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-white/60">01. CONCEPT DESIGN</div>
                  <h3 className="mt-2 text-xl font-bold text-white">A visual story</h3>
                  <p className="mt-3 text-white/70">
                    The concept design is the initial stage of the process. It's where we apply our creative ideas to
                    the material the architects and designers have provided us. We take into account the aesthetics,
                    functional use, and architectural structure, as well as the core remit of the project. This is
                    considered the most creative stage of the whole lighting design process.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/articles/concept-design"
                      className="flex items-center text-sm text-white/60 hover:text-white"
                    >
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Schematic Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-white/60">02. SCHEMATIC DESIGN</div>
                  <h3 className="mt-2 text-xl font-bold text-white">A visual translation</h3>
                  <p className="mt-3 text-white/70">
                    The schematic design aims to show the application of the concepts in drawings. This is a graphical
                    representation of the concept application with sketches of possible installation solutions. This
                    stage is crucial before we start the detailed design stage and issuance of drawings.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/articles/schematic-design"
                      className="flex items-center text-sm text-white/60 hover:text-white"
                    >
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Detailed Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-white/60">03. DETAILED DESIGN</div>
                  <h3 className="mt-2 text-xl font-bold text-white">Technical implementation</h3>
                  <p className="mt-3 text-white/70">
                    This is the final stage of the design process and aims to take into account all the details gathered
                    above. Here we develop the final ceiling, floor, and wall lighting layouts, control diagrams and
                    layouts, as well as the documentation and specifications to meet your site requirements and design
                    intent.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/articles/detailed-design"
                      className="flex items-center text-sm text-white/60 hover:text-white"
                    >
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Tender and IFC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-white/60">04. TENDER AND IFC</div>
                  <h3 className="mt-2 text-xl font-bold text-white">Process management</h3>
                  <p className="mt-3 text-white/70">
                    This is crucial to make sure that adequate information is provided to the employer on the suitable
                    tender returns. The documentation will ensure that the tenderers have met the design intent and the
                    project specification. A final tender evaluation report will be issued to the client following a
                    comprehensive tender review. Light Func will also - on final approval from the client - issue a set
                    of coordinated drawings and issue for Construction (IFC).
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/articles/tender-and-ifc"
                      className="flex items-center text-sm text-white/60 hover:text-white"
                    >
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Contract Administration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-sm font-bold text-white/60">05. CONTRACT ADMINISTRATION</div>
                  <h3 className="mt-2 text-xl font-bold text-white">Onsite support</h3>
                  <p className="mt-3 text-white/70">
                    Finally, we provide hands-on support to make sure every element of the project is delivered without
                    a hitch. This includes going onsite to inspect how things "fit". We will address any issues and
                    ensure that wiring is safe and compliant and that the design intent - especially the future
                    positioning, focusing, and scene-setting - is fully supported by the installation.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/articles/contract-administration"
                      className="flex items-center text-sm text-white/60 hover:text-white"
                    >
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <Link href="/articles/top-10-trends-in-lighting-design-for-2025">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=800&width=1200"
                        alt="Top 10 Trends in Lighting Design for 2025"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                      <div className="mb-2 text-sm text-white/60">May 1, 2025</div>
                      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        Top 10 Trends in Lighting Design for 2025
                      </h3>
                      <p className="mb-4 max-w-2xl text-white/80">
                        Explore the cutting-edge trends that are shaping the future of architectural and interior
                        lighting design in 2025 and beyond.
                      </p>
                      <div className="flex items-center text-sm text-white/70">
                        Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="space-y-8 md:col-span-4">
                <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                  <Link href="/articles/sustainable-lighting-solutions">
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Sustainable Lighting Solutions"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-1 text-sm text-white/60">April 15, 2025</div>
                      <h3 className="mb-2 text-lg font-medium text-white">
                        Sustainable Lighting Solutions for Modern Buildings
                      </h3>
                      <div className="flex items-center text-sm text-white/60 group-hover:text-white/80">
                        Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                  <Link href="/articles/light-as-narrative">
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Light as a Narrative Element"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-1 text-sm text-white/60">March 28, 2025</div>
                      <h3 className="mb-2 text-lg font-medium text-white">
                        Light as a Narrative Element in Spatial Design
                      </h3>
                      <div className="flex items-center text-sm text-white/60 group-hover:text-white/80">
                        Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <Link href="/articles/evolution-of-architectural-lighting">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Evolution of Architectural Lighting"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-sm text-white/60">March 15, 2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-medium text-white group-hover:text-white/90">
                      The Evolution of Architectural Lighting Design
                    </h3>
                    <p className="mb-4 text-sm text-white/70">
                      Explore how lighting design has transformed architecture over the decades and what the future
                      holds.
                    </p>
                    <div className="flex items-center text-sm text-white/60 group-hover:text-white/80">
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <Link href="/articles/lighting-for-wellbeing">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lighting for Wellbeing"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-sm text-white/60">March 5, 2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-medium text-white group-hover:text-white/90">
                      Lighting for Wellbeing: Human-Centric Design
                    </h3>
                    <p className="mb-4 text-sm text-white/70">
                      How lighting design can impact human health, productivity, and emotional wellbeing in built
                      environments.
                    </p>
                    <div className="flex items-center text-sm text-white/60 group-hover:text-white/80">
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
                <Link href="/articles/smart-lighting-systems">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Smart Lighting Systems"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-sm text-white/60">February 20, 2025</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-medium text-white group-hover:text-white/90">
                      The Rise of Smart Lighting Systems in Modern Architecture
                    </h3>
                    <p className="mb-4 text-sm text-white/70">
                      How intelligent lighting control systems are revolutionizing the way we interact with built
                      environments.
                    </p>
                    <div className="flex items-center text-sm text-white/60 group-hover:text-white/80">
                      Read more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                <Link href="/articles/archive">
                  View all articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
