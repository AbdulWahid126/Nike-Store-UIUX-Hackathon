import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NewProducts() {
  return (
    <div className="container px-4 py-8 lg:ml-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">New (500)</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="hidden md:flex">
            Hide Filters
          </Button>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-high">Price: High-Low</SelectItem>
              <SelectItem value="price-low">Price: Low-High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <aside className="hidden md:block space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">Shoes</Button>
              <Button variant="ghost" className="w-full justify-start">Sports Bras</Button>
              <Button variant="ghost" className="w-full justify-start">Tops & T-Shirts</Button>
              <Button variant="ghost" className="w-full justify-start">Hoodies & Sweatshirts</Button>
              <Button variant="ghost" className="w-full justify-start">Jackets</Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Gender</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">Men</Button>
              <Button variant="ghost" className="w-full justify-start">Women</Button>
              <Button variant="ghost" className="w-full justify-start">Unisex</Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop By Price</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">Under ₹ 2,500.00</Button>
              <Button variant="ghost" className="w-full justify-start">₹ 2,501.00 - ₹ 7,500.00</Button>
              <Button variant="ghost" className="w-full justify-start">Over ₹ 7,500.00</Button>
            </div>
          </div>
        </aside>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link key={i} href={`/products/${i + 1}`} className="group">
              <div className="relative aspect-square mb-2">
                <Image
                  src={`/assets/Ractangle.png?height=400&width=400&text=Product${i + 1}`}
                  alt={`Product ${i + 1}`}
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
              <div>
                <h3 className="font-medium">Nike Air Force 1 07</h3>
                <p className="text-sm text-muted-foreground">Mens Shoes</p>
                <p className="mt-1">MRP: ₹ 7,995.00</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

