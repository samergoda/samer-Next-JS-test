import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  getTotalPrice: () => number;
}

export default function OrderSummary({ getTotalPrice }: OrderSummaryProps) {
  return (
    <div className="flex justify-end mb-32">
      <div className="p-4 rounded-lg h-fit w-full sm:w-full lg:w-fit">
        <div className="flex gap-2 border-b pb-5">
          {/* Checkbox */}
          <input type="checkbox" name="discount" id="discount" />

          {/* Label */}
          <label htmlFor="discount">For $10.00 please wrap the product</label>
        </div>

        {/* Summary */}
        <div className="flex justify-between pt-11">
          <p>Subtotal</p>
          <p> ${getTotalPrice().toFixed(2)}</p>
        </div>

        {/* Checkout button */}
        <Button className="w-full mt-4 shadow-[0_20px_35px_0px_rgba(0,_0,_0,_0.15)]">Checkout</Button>
      </div>
    </div>
  );
}
