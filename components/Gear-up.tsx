'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: 'men' | 'women'
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nike Dri-FIT ADV TechKnit Ultra',
    description: "Men's Short-Sleeve Running Top",
    price: 3895,
    imageUrl: '/assets/Gearup.png?height=400&width=400',
    category: 'men'
  },
  {
    id: '2',
    name: 'Nike Dri-FIT Challenger',
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
    imageUrl: '/assets/Gearup1.png?height=400&width=400',
    category: 'men'
  },
  {
    id: '3',
    name: 'Nike Dri-FIT ADV Run Division',
    description: "Women's Long-Sleeve Running Top",
    price: 5295,
    imageUrl: '/assets/Gearup2.png?height=400&width=400',
    category: 'women'
  },
  {
    id: '4',
    name: 'Nike Fast',
    description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
    imageUrl: '/assets/Gearup3.png?height=400&width=400',
    category: 'women'
  }
]

export default function GearUp() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="w-full py-6">
      <div className="container lg:ml-9">
        <h2 className="text-2xl font-medium mb-6">Gear Up</h2>
        <div className="relative">
          <div className="flex items-center mb-4">
            <div className='flex w-[640px] px-5 justify-end'>
            <div className="flex items-center gap-4">
              <Link href="/shop/mens" className="text-sm font-medium">
                Shop Mens
              </Link>
              <div className="flex gap-1">
                <button
                  onClick={() => scroll('left')}
                  className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            </div>
            <div className='hidden sm:flex w-[640px] px-5 justify-end'>
            <div className="flex items-center gap-4">
              <Link href="/shop/womens" className="text-sm font-medium">
                Shop Womens
              </Link>
              <div className="flex gap-1">
                <button
                  onClick={() => scroll('left')}
                  className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-1.5 rounded-full bg-gray-50 hover:bg-gray-100"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto justify-around snap-x snap-mandatory scrollbar-hide pb-4"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-none w-[300px] snap-start rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <CardContent className="p-0">
                  <Link href={`/product/${product.id}`}>
                    <div className="bg-[#f5f5f5] aspect-square relative">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="flex p-4">
                      <div>
                      <h3 className="font-medium text-base">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      </div>
                      <div>
                      <p className="font-medium">₹ {product.price.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

