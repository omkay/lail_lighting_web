import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, Check } from "lucide-react"

import { MinimalHeader } from "@/components/minimal-header"
import { Footer } from "@/components/footer"
import { ShootingStars } from "@/components/shooting-stars"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DownlightsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MinimalHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container px-4 py-4 md:px-6">
          <div className="flex items-center text-sm text-white/60">
            <Link href="/products" className="flex items-center hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Product Hero */}
        <section className="relative py-12 md:py-16">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-black/90"></div>
          <ShootingStars />
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white/5">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="LAIL Precision Downlight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-light md:text-4xl">Precision Downlights</h1>
                <p className="mt-4 text-white/70">
                  Architectural recessed luminaires designed to disappear into ceilings while delivering exceptional
                  illumination. Available in multiple beam angles, color temperatures, and trim options.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">5W-25W</div>
                    <div className="text-xs text-white/60">Power Options</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">15°-60°</div>
                    <div className="text-xs text-white/60">Beam Angles</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">2700K-4000K</div>
                    <div className="text-xs text-white/60">Color Temps</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">95+</div>
                    <div className="text-xs text-white/60">CRI</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">IP44</div>
                    <div className="text-xs text-white/60">Rating</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-lg font-medium">50,000h</div>
                    <div className="text-xs text-white/60">Lifetime</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    <Link href="/contact">Request Specification</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white">
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Datasheet
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <Tabs defaultValue="features" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-8 space-y-6 text-white/80">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">Trimless Design</h3>
                      <p className="mt-1 text-sm">
                        Seamlessly integrates into ceilings with no visible trim for a clean architectural look.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">Precision Optics</h3>
                      <p className="mt-1 text-sm">
                        Advanced optical system delivers exceptional beam control with minimal glare.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">High CRI</h3>
                      <p className="mt-1 text-sm">
                        95+ color rendering index ensures accurate color representation of illuminated objects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">Flicker-Free Dimming</h3>
                      <p className="mt-1 text-sm">
                        Compatible with leading-edge and trailing-edge dimmers for smooth dimming to 1%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">Thermal Management</h3>
                      <p className="mt-1 text-sm">
                        Advanced heat dissipation system ensures long LED lifetime and consistent performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-medium text-white">Easy Installation</h3>
                      <p className="mt-1 text-sm">
                        Tool-free mounting system and quick-connect wiring for efficient installation.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="mt-8">
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Dimensions</td>
                        <td className="py-3 text-white/70">Ø80mm, Ø100mm, Ø120mm</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Cut-out</td>
                        <td className="py-3 text-white/70">Ø70mm, Ø90mm, Ø110mm</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Power</td>
                        <td className="py-3 text-white/70">5W, 10W, 15W, 20W, 25W</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Beam Angle</td>
                        <td className="py-3 text-white/70">15°, 24°, 36°, 60°</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Color Temperature</td>
                        <td className="py-3 text-white/70">2700K, 3000K, 3500K, 4000K</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">CRI</td>
                        <td className="py-3 text-white/70">95+</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-medium text-white">Dimming</td>
                        <td className="py-3 text-white/70">TRIAC, 0-10V, DALI</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium text-white">Finish Options</td>
                        <td className="py-3 text-white/70">White, Black, Custom RAL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="applications" className="mt-8 space-y-6 text-white/80">
                <p>
                  LAIL Precision Downlights are designed for a wide range of applications where high-quality, controlled
                  illumination is required. Their versatility makes them suitable for both residential and commercial
                  environments.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-medium text-white">Residential</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Living rooms and dining areas</li>
                      <li>• Kitchen task lighting</li>
                      <li>• Bathroom vanity lighting</li>
                      <li>• Hallways and corridors</li>
                      <li>• Art and feature wall highlighting</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-medium text-white">Commercial</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Retail display lighting</li>
                      <li>• Hotel guest rooms and corridors</li>
                      <li>• Restaurant and bar accent lighting</li>
                      <li>• Office reception areas</li>
                      <li>• Museum and gallery lighting</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="relative py-16 md:py-24 bg-white/5">
          <div className="container mx-auto relative z-10 px-4 md:px-6">
            <h2 className="mb-12 text-2xl font-light">Related Products</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-black/30 overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Adjustable Downlight"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Adjustable Downlight</h3>
                  <p className="mt-1 text-sm text-white/60">Tiltable recessed spotlight</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 overflow-hidden">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Wall Washer" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Wall Washer</h3>
                  <p className="mt-1 text-sm text-white/60">Asymmetric beam distribution</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="IP65 Downlight"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">IP65 Downlight</h3>
                  <p className="mt-1 text-sm text-white/60">Wet area application</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Trimmed Downlight"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Trimmed Downlight</h3>
                  <p className="mt-1 text-sm text-white/60">Decorative bezel options</p>
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
