"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, X, Minus, Plus } from "lucide-react";

type CartItemProps = {
  id: number;
  title: string;
  price: string;
  quantity: number;
  imgLight: string;
  imgDark: string;
  href?: string;
};

function CartItem({
  id,
  title,
  price,
  quantity: initialQty,
  imgLight,
  imgDark,
  href = "#",
}: CartItemProps) {
  const [qty, setQty] = useState(initialQty);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* Product image */}
        <Link href={href} className="shrink-0 md:order-1">
          <Image
            src={imgLight}
            alt={title}
            width={80}
            height={80}
            className="h-20 w-20 dark:hidden"
          />
          <Image
            src={imgDark}
            alt={title}
            width={80}
            height={80}
            className="hidden h-20 w-20 dark:block"
          />
        </Link>

        {/* Quantity + Price */}
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <Input
              type="text"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value) || 1)}
              className="w-12 border-0 bg-transparent text-center text-sm font-medium"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-6 w-6"
              onClick={() => setQty(qty + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              {price}
            </p>
          </div>
        </div>

        {/* Title + Actions */}
        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            href={href}
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {title}
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Heart className="h-4 w-4 mr-1" />
              Add to Favorites
            </Button>
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 dark:text-red-500"
            >
              <X className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  title,
  price,
  imgLight,
  imgDark,
  href = "#",
}: {
  title: string;
  price: string;
  imgLight: string;
  imgDark: string;
  href?: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Link href={href} className="flex justify-center">
        <Image
          src={imgLight}
          alt={title}
          width={120}
          height={120}
          className="h-28 w-auto dark:hidden"
        />
        <Image
          src={imgDark}
          alt={title}
          width={120}
          height={120}
          className="hidden h-28 w-auto dark:block"
        />
      </Link>
      <div className="mt-4 text-center">
        <Link
          href={href}
          className="block text-sm font-medium text-gray-900 hover:underline dark:text-white"
        >
          {title}
        </Link>
        <p className="mt-1 text-base font-bold text-gray-900 dark:text-white">
          {price}
        </p>
        <Button className="mt-3 w-full">Add to Cart</Button>
      </div>
    </div>
  );
}

export default function ShoppingCartPage() {
  const items: CartItemProps[] = [
    {
      id: 1,
      title:
        'PC system All in One APPLE iMac (2023) Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB',
      price: "$1,499",
      quantity: 2,
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
    },
    {
      id: 2,
      title: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case",
      price: "$598",
      quantity: 1,
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg",
    },
  ];

  const recommended = [
    {
      title: "Apple iPhone 15 Pro Max 512GB",
      price: "$1,199",
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
    },
    {
      title: "AirPods Pro 2nd Gen",
      price: "$249",
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-light.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-dark.svg",
    },
    {
      title: "Apple HomePod Mini",
      price: "$99",
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/homepod-light.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/homepod-dark.svg",
    },
    {
      title: "Apple Magic Keyboard",
      price: "$129",
      imgLight:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/magic-keyboard-light.svg",
      imgDark:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/magic-keyboard-dark.svg",
    },
  ];

  return (
    <section className="bg-white py-8 dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Cart items */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-6 flex-1 lg:mt-0">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="flex justify-between">
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  Subtotal
                </span>
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  $2,097
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="mt-4 w-full">Proceed to Checkout</Button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
            People also bought
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {recommended.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
