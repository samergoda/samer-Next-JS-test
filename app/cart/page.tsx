"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import EmptyCart from "./_component/EmptyCart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import QuantityController from "@/components/features/QuantityController";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import OrderSummary from "./_component/OrderSummary";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {/* Breadcrumb */}
      <Breadcrumb className="flex justify-center mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Your Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Cart table */}
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          {/* Header table */}
          <TableHeader className="hidden md:table-header-group">
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>

          {/* Body table */}
          <TableBody className="border-b">
            {cart.map((item) => (
              <TableRow key={item.id} className="flex flex-col md:table-row mb-4 border md:border-0 rounded-md md:rounded-none p-4 md:p-0">
                <TableCell className="w-full md:w-1/4 md:table-cell">
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    {/* Product image */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain p-2" />
                    </div>

                    {/* Product name */}
                    <div className="flex flex-col">
                      <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                        {item.title}
                      </Link>

                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-custom-colors-gray underline mt-2 w-max"
                        aria-label="Remove item">
                        Remove
                      </button>
                    </div>
                  </div>
                </TableCell>

                {/* Price */}
                <TableCell className="w-full md:w-1/4 flex justify-between md:table-cell pt-4 md:pt-0">
                  <span className="font-medium md:hidden">Price:</span>${item.price.toFixed(2)}
                </TableCell>

                {/* Quantity */}
                <TableCell className="w-full md:w-1/4 flex justify-between md:table-cell pt-4 md:pt-0">
                  <span className="font-medium md:hidden">Quantity:</span>
                  <QuantityController
                    quantity={item.quantity}
                    setQuantity={(value: number | ((prevValue: number) => number)) => {
                      const newQuantity = typeof value === "function" ? value(item.quantity) : value;
                      updateQuantity(item.id, newQuantity);
                    }}
                  />
                </TableCell>

                {/* Total price */}
                <TableCell className="w-full md:w-1/4 flex justify-between md:table-cell text-right pt-4 md:pt-0">
                  <span className="font-medium md:hidden">Total:</span>${(item.quantity * item.price).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Order summary */}
        <OrderSummary getTotalPrice={getTotalPrice} />
      </div>
    </div>
  );
}
