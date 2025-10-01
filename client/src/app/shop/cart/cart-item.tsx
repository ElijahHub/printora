"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CartItemProps } from "@/types";
import { Heart, Minus, Plus, Trash, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartItem({
  id,
  title,
  price,
  quantity: initQty,
  image,
  href = "#",
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const [qty, setQty] = useState(initQty);

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onUpdateQuantity?.(id, newQty);
    }
  };

  const handleIncrease = () => {
    if (qty < 20) {
      const newQty = qty + 1;
      setQty(newQty);
      onUpdateQuantity?.(id, newQty);
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:space-y-0">
        {/* Product image */}
        <Link href={href} className="shrink-0 md:order-1">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="h-20 w-20 rounded-sm "
          />
        </Link>

        {/* Quantity + Price */}
        <div className="flex item-center justify-between md:order-3">
          <div className="flex items-center">
            <Button variant="outline" size="icon" className="h-6 w-6">
              <Minus className="h-3 w-3" />
            </Button>
            <p className="w-12 text-center text-sm font-medium">{qty}</p>
            <Button variant="outline" size="icon" className="h-6 w-6">
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">{price}</p>
          </div>
        </div>

        {/* Title + Actions */}
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md ">
          <Link
            href={href}
            className="text-base font-medium text-gray-900 hover:underline"
          >
            {title}
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="cursor-pointer">
              {" "}
              <Heart size={30} className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 cursor-pointer "
            >
              <Trash2 className="h-6 w-6 " />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
