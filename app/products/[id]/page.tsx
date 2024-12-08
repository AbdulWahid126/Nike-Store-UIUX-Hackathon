import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ProductPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Product Image"
              className="object-cover rounded-lg"
              fill
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Product Thumbnail 1"
                className="object-cover rounded-lg"
                fill
              />
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Product Thumbnail 2"
                className="object-cover rounded-lg"
                fill
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Nike Air Jordan 1 Mid</h1>
            <p className="text-xl text-muted-foreground">Mens Shoes</p>
            <p className="text-xl mt-2">MRP: ₹ 11,895.00</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold">Select Size</h2>
            <div className="grid grid-cols-3 gap-2">
              {[7, 8, 9, 10, 11, 12].map((size) => (
                <Button key={size} variant="outline" className="h-12">
                  UK {size}
                </Button>
              ))}
            </div>
          </div>
          <Button className="w-full h-12">Add to Bag</Button>
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="delivery">
                <AccordionTrigger>Delivery & Returns</AccordionTrigger>
                <AccordionContent>
                  Free delivery for orders above ₹14,000. Standard delivery in 3-5 business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="reviews">
                <AccordionTrigger>Reviews (49)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {Array(5).fill(null).map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">Based on 49 reviews</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

