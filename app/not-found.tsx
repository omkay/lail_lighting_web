import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-light md:text-5xl lg:text-6xl">404</h1>
          <p className="mt-4 text-xl font-light">Page not found</p>
          <p className="mt-2 text-white/70">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-8">
            <Button
              asChild
              className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
