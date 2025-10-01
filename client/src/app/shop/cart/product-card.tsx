import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProductCardProps } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  title,
  price,
  image,
  href = "#",
}: ProductCardProps) {
  return (
    <Card>
      <Link href={href} className="flex justify-center">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="h-28 w-auto"
        />
      </Link>
      <div className="mt-4 text-center">
        <Link
          href={href}
          className="block text-sm font-medium text-gray-900 hover:underline"
        >
          {title}
        </Link>
        <p className="mt-1 text-base font-bold text-gray-900">{price}</p>
        <div className="flex justify-end items-center gap-4">
          <Button variant="outline" size="icon">
            <Heart size={22} />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart size={22} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
