import { ChevronDown } from 'lucide-react'

const categories = [
  "Shoes",
  "Sports Bras",
  "Tops & T-Shirts",
  "Hoodies & Sweatshirts",
  "Jackets",
  "Trousers & Tights",
  "Shorts",
  "Tracksuits",
  "Jumpsuits & Rompers",
  "Skirts & Dresses",
  "Socks",
  "Accessories & Equipment",
]

export function Sidebar() {
  return (
    <aside className="w-64 pr-8 pt-6 max-sm:hidden">
      <div className="space-y-6">
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <label className="text-sm leading-none cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3 className="font-medium flex items-center justify-between">
            Gender
            <ChevronDown className="h-4 w-4" />
          </h3>
          <div className="pl-2">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Unisex</span>
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium flex items-center justify-between">
            Kids
            <ChevronDown className="h-4 w-4" />
          </h3>
          <div className="pl-2">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Boys</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Girls</span>
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium flex items-center justify-between">
            Shop By Price
            <ChevronDown className="h-4 w-4" />
          </h3>
          <div className="pl-2">
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Under ₹ 2,500.00</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>₹ 2,501.00 - ₹ 7,500.00</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}

