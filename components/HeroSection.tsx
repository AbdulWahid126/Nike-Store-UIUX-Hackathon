import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col">
      {/* Hero Content */}
      <div className="flex flex-1 flex-col">
        <div className="relative">
          {/* Main Product Image */}
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <Image
              src="/assets/hero.png?height=1080&width=1920"
              alt="Nike Air Max Pulse"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center md:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-gray-600">
                First Look
              </p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                NIKE AIR MAX PULSE
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
                Pulse—designed to push you past your limits and help you go to the
                max.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="min-w-[140px] rounded-full bg-black text-white hover:bg-black/90"
              >
                Notify Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[140px] rounded-full bg-black text-white hover:bg-black/10"
              >
                Shop Air Max
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

