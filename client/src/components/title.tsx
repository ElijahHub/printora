import { ChevronRight } from "lucide-react";

export default function Title({}) {
  return (
    <div className="flex justify-start items-center gap-2">
      <h2 className="text-sm text-gray-900 font-medium  sm:text-md">Home</h2>
      <h2 className="text-sm text-gray-300 sm:text-md">
        <ChevronRight />
      </h2>
      <h2 className="text-sm text-gray-300 sm:text-md">Shop</h2>
      <h2 className="text-sm text-gray-300 sm:text-md">
        <ChevronRight />
      </h2>
      <h2 className="text-sm text-gray-300 sm:text-md">Cart</h2>
    </div>
  );
}
