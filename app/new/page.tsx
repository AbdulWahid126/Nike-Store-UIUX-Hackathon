import { Sidebar } from "@/components/Sidebar"
import { ProductCard } from "@/components/ProductCard" 
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from 'lucide-react'

const products = [
  {
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 10,795.00",
    image: "/assets/Rectangle.png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    colors: 1,
    price: "₹ 4,995.00",
    image: "/assets/Rectangle (1).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 8,695.00",
    image: "/assets/Rectangle (2).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 3 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 9,655.00",
    image: "/assets/Rectangle (3).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 4 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 2,695.00",
    image: "/assets/Rectangle (4).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 5 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 5,695.00",
    image: "/assets/Rectangle (5).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 6 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 3,695.00",
    image: "/assets/Rectangle (6).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 7 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 6,695.00",
    image: "/assets/Rectangle (7).png?height=400&width=400",
    isNew: true
  },
  {
    name: "Nike Air Force 8 PLT.AF.ORM",
    category: "Women's Shoes",
    colors: 1,
    price: "₹ 7,695.00",
    image: "/assets/Rectangle (8).png?height=400&width=400",
    isNew: true
  },
  // Add more products as needed
]

export default function Page() {
  return (
    <div className="flex min-h-screen pl-10 max-sm:pl-0 flex-col">
      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">New (500)</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Hide Filters
              </Button>
              <Button variant="outline" size="sm">
                Sort By
              </Button>
            </div>
          </div>
          <div className="mt-6 flex gap-8">
            <Sidebar />
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

