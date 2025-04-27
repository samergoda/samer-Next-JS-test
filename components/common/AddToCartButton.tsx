"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import QuantityController from "../features/QuantityController";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  // Variables
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Function
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success("Product added to cart", {
      className: "top-center ",
    });
  };

  return (
    <div className="flex items-end gap-8">
      {/* Quantity control */}
      <div>
        <h4 className="mb-3">Quantity</h4>
        <QuantityController quantity={quantity} setQuantity={setQuantity} />
      </div>

      {/* Add to cart button */}
      <Button onClick={handleAddToCart} className="w-full bg-white text-black border border-black rounded-sm p-3">
        Add to Cart
      </Button>
    </div>
  );
}
