import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  category: string
  colors: number
  price: string
  image: string
  isNew?: boolean
}

export function ProductCard({ name, category, colors, price, image, isNew = false }: ProductCardProps) {
  return (
    <Card className="rounded-none border-none shadow-none">
      <CardContent className="p-0">
        <Link href="#" className="group block">
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="mt-2 space-y-1">
            {isNew && (
              <p className="text-sm text-orange-600">Just In</p>
            )}
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
            <p className="text-sm text-muted-foreground">{colors} Colour</p>
            <p className="font-medium">MRP : {price}</p>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

