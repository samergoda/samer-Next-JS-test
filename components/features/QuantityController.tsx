"use client";

import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
interface QuantityControllerProps {
  quantity: number;
  setQuantity: (value: number | ((prevValue: number) => number)) => void;
}
export default function QuantityController({ quantity, setQuantity }: QuantityControllerProps) {
  // Functions
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };
  return (
    <div className="flex border items-center bg-white w-fit">
      {/* Minus button */}
      <Button onClick={decrement} className="border-0 bg-white text-black px-3">
        <FaMinus />
      </Button>

      {/* Number input */}
      <input type="number" value={quantity} onChange={handleInputChange} className="w-12  text-center outline-none no-arrows" min={1} />

      {/* Plus button */}
      <Button onClick={increment} className="border-0 bg-white text-black px-3">
        <FaPlus />
      </Button>
    </div>
  );
}
