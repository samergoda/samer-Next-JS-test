import Image from "next/image";
import React from "react";
import { LiaBoxSolid, LiaShippingFastSolid } from "react-icons/lia";

export default function OrderInfo() {
  return (
    <div className="mt-7">
      {/* Delivery Info */}
      <div className="mb-7 space-y-3">
        {/* Estimated delivery */}
        <p className="flex  flex-wrap items-center gap-2 text-sm md:text-base">
          <LiaShippingFastSolid className="text-lg" />
          <span className="font-bold">Estimated Delivery:</span> Jul 30 - Aug 03
        </p>

        {/* Free shipping */}
        <p className="flex flex-wrap items-center gap-2 text-sm md:text-base">
          <LiaBoxSolid className="text-lg" />
          <span className="font-bold">Free Shipping & Returns:</span> On all orders over $75
        </p>
      </div>

      {/* Trust Section */}
      <div className="bg-custom-colors-light-gray p-5 flex flex-col  items-center text-center md:text-left gap-5 ">
        <div className="flex-shrink-0">
          <Image src="/trustbag.png" alt="order info" width={200} height={0} className="mx-auto md:mx-0" />
        </div>
        <div>
          <p className="text-sm md:text-base font-medium">Guarantee safe & secure checkout</p>
        </div>
      </div>
    </div>
  );
}
