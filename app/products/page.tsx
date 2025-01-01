import { products, categories } from '@/lib/data'
import { ProductCard } from '@/components/ProductCard'
import { Filters } from '@/components/Filters'
import { RelatedCategories } from '@/components/RelatedCategories'
import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

const relatedCategories = [
  "Best Selling Products",
  "Best Shoes",
  "Nike Basketball Shoes",
  "Nike Football Shoes",
  "New Men's Shoes",
  "New Running Shoes",
  "Best Men's Shoes",
  "New Jordan Shoes",
  "Best Women's Shoes",
  "Best Training & Gym"
]

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="lg:hidden">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <select className="px-3 py-2 border rounded-md">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
        <div className="hidden lg:block">
          <Filters categories={categories} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <RelatedCategories categories={relatedCategories} />
        </div>
      </div>
    </div>
  )
}

