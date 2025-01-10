import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrderSummary() {
  return (
    <Card className="w-full max-w-md border-none">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Delivery/Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-bold border-b py-4">
            <span>Total</span>
            <span>₹ 20,890.00</span>
          </div>
          <p className="text-xs text-muted-foreground">
            The final total of your order, including all taxes and fees
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="h-52 w-52 relative">
                <Image
                  src="/assets/Gearup.png"
                  alt="Nike Dri-FIT"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Nike Dri-FIT</h4>
                <p className="text-sm text-muted-foreground">ADV TechKnit</p>
                <p className="text-sm text-muted-foreground">Ultra Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-sm">Style L</p>
                <p className="text-sm">Size L</p>
                <p className="font-medium">₹ 3,895.00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-52 w-52 relative">
                <Image
                  src="/assets/gray-shoes.png"
                  alt="Nike Air Max"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Nike Air Max</h4>
                <p className="text-sm text-muted-foreground">97 SE Men&apos;s Shoes</p>
                <p className="text-sm">Style L</p>
                <p className="text-sm">Size UK 9</p>
                <p className="font-medium">₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

