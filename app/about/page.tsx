import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { StarBackground } from "@/components/star-background"
import { ShootingStars } from "@/components/shooting-stars"
import { DualSpotlightEffect } from "@/components/spotlight-effect"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1 px-4 md:px-8 lg:px-16">
        <section className="relative py-24 md:py-32">
          <DualSpotlightEffect intensity={0.5} size={0.7} color="255, 241, 224">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
            </div>
            <StarBackground />
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light uppercase tracking-wider md:text-5xl lg:text-6xl">About Us</h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Illuminating spaces with innovative lighting design solutions
                </p>
              </div>
            </div>
          </DualSpotlightEffect>
        </section>

        <section className="relative py-16 md:py-24">
          <DualSpotlightEffect intensity={0.4} size={0.6} color="255, 241, 224">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black/95"></div>
            <ShootingStars />
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-12 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Our Story</h2>
                    <div className="mt-6 space-y-4 text-white/80">
                      <p>
                        LAIL Lighting Design was founded with a vision to transform spaces through the artful
                        manipulation of light. Our journey began with a passion for creating environments that evoke
                        emotion, enhance architecture, and improve the human experience.
                      </p>
                      <p>
                        Based in Dubai, we've grown from a small studio to a respected lighting design consultancy,
                        working on prestigious projects across the Middle East and beyond. Our team combines technical
                        expertise with artistic sensibility to deliver lighting solutions that are both functional and
                        beautiful.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Our Philosophy</h2>
                    <div className="mt-6 space-y-4 text-white/80">
                      <p>
                        We believe that lighting is more than illumination—it's about creating atmosphere, highlighting
                        architecture, and enhancing the way people experience spaces. Our approach is holistic,
                        considering both the technical requirements and the emotional impact of light.
                      </p>
                      <p>
                        Sustainability is at the core of our practice. We design energy-efficient lighting systems that
                        minimize environmental impact while maximizing visual comfort and aesthetic appeal. By balancing
                        artistry with technology, we create lighting solutions that are as responsible as they are
                        beautiful.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Our Expertise</h2>
                  <div className="mt-8 grid gap-8 md:grid-cols-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Architectural Lighting</h3>
                      <p className="mt-4 text-white/80">
                        Enhancing architectural features and spatial qualities through thoughtful lighting design.
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Hospitality Lighting</h3>
                      <p className="mt-4 text-white/80">
                        Creating memorable experiences in hotels, restaurants, and leisure spaces through ambient
                        lighting.
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Residential Lighting</h3>
                      <p className="mt-4 text-white/80">
                        Designing comfortable, functional, and beautiful lighting for homes and living spaces.
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Commercial Lighting</h3>
                      <p className="mt-4 text-white/80">
                        Optimizing workspaces for productivity, comfort, and energy efficiency through intelligent
                        lighting.
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Landscape Lighting</h3>
                      <p className="mt-4 text-white/80">
                        Illuminating outdoor spaces to enhance safety, security, and aesthetic appeal.
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-medium">Lighting Controls</h3>
                      <p className="mt-4 text-white/80">
                        Implementing smart lighting systems for energy efficiency, convenience, and scene-setting
                        capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Our Team</h2>
                  <div className="mt-8 grid gap-8 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-white/10"></div>
                      <h3 className="mt-4 text-xl font-medium">Sarah Al-Mansouri</h3>
                      <p className="text-white/80">Founder & Principal Designer</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-white/10"></div>
                      <h3 className="mt-4 text-xl font-medium">Ahmed Khalid</h3>
                      <p className="text-white/80">Technical Director</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-white/10"></div>
                      <h3 className="mt-4 text-xl font-medium">Layla Noor</h3>
                      <p className="text-white/80">Senior Lighting Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DualSpotlightEffect>
        </section>
      </main>
      <Footer />
    </div>
  )
}
