import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Featured() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Featured</h2>
        
        <div className="flex flex-col space-y-8">
          {/* Image Container */}
          <div className="relative aspect-[16/9] w-full lg:h-[700px] overflow-hidden md:aspect-[21/9]">
            <Image
              src="/assets/featured-image.png?height=800&width=1400"
              alt="Runner on mountain trail"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
            />
          </div>

          {/* Content Container */}
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              STEP INTO WHAT FEELS GOOD
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <Button 
              className="rounded-full bg-black px-8 py-6 text-base font-medium text-white hover:bg-black/90"
            >
              Find Your Shoe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

