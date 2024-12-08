import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "mens",
    title: "Men's",
    image: "/assets/mens-essentials.png",
  },
  {
    id: "womens",
    title: "Women's",
    image: "/assets/women-essentials.png",
  },
  {
    id: "kids",
    title: "Kids'",
    image: "/assets/kids-essentials.png",
  },
]

export function Essentials() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">The Essentials</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative w-[410px] h-[510px] lg:w-[380px] overflow-hidden rounded-sm"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="absolute bottom-10 left-8">
                <Button variant="default" className="bg-white text-black hover:bg-white/90 rounded-3xl">
                  {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

