import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`} className="block relative h-64 overflow-hidden">
        {/* Image  */}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>

      <div className="p-4">
        {/* Product name */}
        <Link href={`/product/${product.id}`} className="block mt-1 mb-2">
          <h3 className="text-lg font-medium line-clamp-1 hover:underline">{product.title}</h3>
        </Link>

        {/* Product price */}
        <div className="flex justify-between items-center">
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
