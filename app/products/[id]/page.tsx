import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <div className="mt-4">
            <p className="text-2xl font-semibold">
              ₹ {product.price.toLocaleString()}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>
          <div className="mt-8">
            <Button size="lg" className="w-full sm:w-auto rounded-3xl">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
