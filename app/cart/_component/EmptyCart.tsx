import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Description */}
      <p className="mb-8">Your cart is empty</p>

      {/* Link to home */}
      <Link href="/">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
