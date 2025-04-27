import { AddToCartButton } from "@/components/common/AddToCartButton";
import { getProduct } from "@/lib/apis/api";
import Image from "next/image";
import { Rating } from "../_components/rating";
import { Progress } from "@/components/ui/progress";
import { CiShare2 } from "react-icons/ci";
import OrderInfo from "../_components/OrderInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product page",
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Variables
  const product = await getProduct(params.id);
  const productQuantity = Math.floor(Math.random() * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product image */}
        <div className="relative h-[400px] bg-white rounded-lg overflow-hidden">
          <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-contain p-4" priority />
        </div>

        <div className="flex flex-col">
          {/* Product category */}
          <span className="text-sm uppercase text-custom-colors-dark-gray">{product.category}</span>

          {/* Product name */}
          <h1 className="text-3xl font-bold mt-1">{product.title}</h1>

          {/* Rating  */}
          <Rating rating={product.rating} />

          {/* Price */}
          <div className="mb-3">
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          </div>

          {/* Description */}
          <p className="mb-6">{product.description}</p>

          {/* Items in stock */}
          <div className="mb-12">
            <p className="text-custom-colors-dark-gray mb-3">Only {productQuantity} item(s) left in stock!</p>
            <Progress indicatorClassName={`${productQuantity < 15 ? "bg-custom-colors-red" : "bg-black"}`} value={productQuantity} />
          </div>

          {/* Add to cart button & Quantity control */}
          <AddToCartButton product={product} />

          {/* Share button */}
          <button className="flex gap-1 items-center border-b mt-16 pb-3">
            <CiShare2 size={24} />
            Share
          </button>

          {/* Order shipping info  */}
          <OrderInfo />
        </div>
      </div>
    </div>
  );
}
