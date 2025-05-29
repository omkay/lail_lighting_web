import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ShootingStars } from "@/components/shooting-stars"
import { DualSpotlightEffect } from "@/components/spotlight-effect"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        <section className="relative py-24 md:py-32">
          <DualSpotlightEffect intensity={0.5} size={0.7} color="255, 241, 224">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20"></div>
            </div>
            <ShootingStars />
            <div className="container mx-auto relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                  Inpsiring <span className="font-medium">Products</span>
                </h1>
                <p className="mt-6 text-lg text-white/80 md:text-xl">
                  Discover our range of high-quality lighting products for every space
                </p>
              </div>

              <div className="mx-auto mt-16 max-w-6xl">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <ProductCard
                    title="Downlights"
                    description="Recessed lighting solutions for clean, elegant illumination"
                    image="/products/downlight.jpg"
                    href="/products/downlights"
                  />
                  <ProductCard
                    title="Track Lights"
                    description="Versatile lighting systems for highlighting key features"
                    image="/products/track-light.jpg"
                    href="/products/track-lights"
                  />
                  <ProductCard
                    title="Wall Sconces"
                    description="Elegant wall-mounted fixtures for ambient lighting"
                    image="/products/wall-sconce.jpg"
                    href="/products/wall-sconces"
                  />
                  <ProductCard
                    title="Pendant Lights"
                    description="Suspended fixtures for statement lighting in any space"
                    image="/products/pendant-light.jpg"
                    href="/products/pendant-lights"
                  />
                  <ProductCard
                    title="Outdoor Lighting"
                    description="Weather-resistant fixtures for exterior applications"
                    image="/products/outdoor-light.jpg"
                    href="/products/outdoor-lighting"
                  />
                  <ProductCard
                    title="LED Strips"
                    description="Flexible lighting solutions for coves and indirect lighting"
                    image="/products/led-strip.jpg"
                    href="/products/led-strips"
                  />
                </div>
              </div>

              <div className="mx-auto mt-16 max-w-3xl text-center">
                <h2 className="text-2xl font-light uppercase tracking-wider md:text-3xl">
                  Custom <span className="font-medium">Solutions</span>
                </h2>
                <p className="mt-4 text-white/70">
                  Can't find what you're looking for? We offer custom lighting solutions tailored to your specific
                  needs.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center border border-white/20 px-6 py-3 text-sm uppercase tracking-wider text-white hover:bg-white/10"
                  >
                    Contact us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
