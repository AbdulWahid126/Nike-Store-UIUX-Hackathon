"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Trash2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Cart() {
  return (
    <div className="container px-4 md:ml-10 py-8">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-8">
          <div className="flex bg-secondary items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Free Delivery
              <br />
              Applies to orders of ₹14,000 or more.{" "}
              <Button variant="link" className="p-0 h-auto">
                View details
              </Button>
            </p>
          </div>
            <h1 className="text-2xl font-bold">Bag</h1>
          <div className="space-y-6">
            {/* Product 1 */}
            <div className="flex gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/assets/Gearup.png?height=96&width=96"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                    <p className="text-sm text-muted-foreground">Mens Short-Sleeve Running Top</p>
                  </div>
                  <p className="font-medium">₹ 3,995.00</p>
                </div>
                <div className="flex items-center gap-4">
                  <Select defaultValue="1">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex gap-4">
              <div className="relative w-24 h-24">
                {/* <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Nike Air Max 97 SE"
                  fill
                  className="object-cover rounded"
                /> */}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">Nike Air Max 97 SE</h3>
                    <p className="text-sm text-muted-foreground">Mens Shoes</p>
                  </div>
                  <p className="font-medium">₹ 16,995.00</p>
                </div>
                <div className="flex items-center gap-4">
                  <Select defaultValue="1">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h2 className="font-medium mb-4">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="relative aspect-square">
                  <Image
                    src="/assets/jorden-cart.png?height=200&width=200"
                    alt="Air Jordan 1 Mid SE Craft"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-medium">Air Jordan 1 Mid SE Craft</h3>
                <p className="text-sm text-muted-foreground">Mens Shoes</p>
                <p className="font-medium">MRP: ₹ 12,295.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className=" p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 20,990.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-4 border-t font-medium">
                <span>Total</span>
                <span>₹ 20,990.00</span>
              </div>
            </div>
            <Button className="w-full mt-6 rounded-3xl py-6 bg-black text-white hover:bg-black/90">
              Member Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

