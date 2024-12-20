'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max Pulse',
    category: "Women's Shoes",
    price: 13995,
    imageUrl: '/assets/white-shoes.png?height=400&width=400',
  },
  {
    id: '2',
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: 13995,
    imageUrl: '/assets/gray-shoes.png?height=400&width=400',
  },
  {
    id: '3',
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: 16995,
    imageUrl: '/assets/white-shoes.png?height=400&width=400',
  },
]

export default function ProductCarousel() {
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
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium">Best of Air Max</h2>
          <div className="flex items-center gap-2">
            <Link href="/shop" className="text-sm font-medium mr-2">
              Shop
            </Link>
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex-none w-[315px] sm:w-[415px] snap-start border-none duration-200"
            >
              <CardContent className="p-0 ">
                <Link href={`/product/${product.id}`}>
                  <div className="bg-[#f5f5f5] aspect-square relative">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="flex justify-between p-4">
                    <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    </div>
                    <p className="font-medium">₹ {product.price.toLocaleString('en-IN')}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

