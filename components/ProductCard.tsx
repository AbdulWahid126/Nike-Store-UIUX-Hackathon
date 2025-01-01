import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium">
            {product.tag}
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-900">₹ {product.price.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{product.colors} {product.colors === 1 ? 'Color' : 'Colors'}</p>
        </div>
      </div>
    </Link>
  )
}

