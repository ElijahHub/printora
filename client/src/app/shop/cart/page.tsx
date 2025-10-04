import { cn, container } from "@/lib/utils";
import { CartItemProps, ProductCardProps } from "@/types";
import { ArrowDownLeft, ArrowRight, ChevronRight } from "lucide-react";
import CartItem from "./cart-item";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";

export default function Cart() {
  const stateObj = {
    cartItem : [],
    pageSize: 4,
    currentPage: 1,
  }



  const items: CartItemProps[] = [
    {
      id: "1",
      title:
        'PC system All in One APPLE iMac (2023) Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB',
      price: 1499,
      quantity: 2,
      image: "/assets/banner_img_1.jpg",
    },
    {
      id: "2",
      title: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case",
      price: 598,
      quantity: 1,
      image: "/assets/banner_img_2.jpg",
    },
  ];

  const recommended: ProductCardProps[] = [
    {
      title: "Apple iPhone 15 Pro Max 512GB",
      price: "$1,199",
      image: "/assets/banner_img_3.jpg",
    },
    {
      title: "AirPods Pro 2nd Gen",
      price: "$249",
      image: "/assets/banner_img_4.jpg",
    },
    {
      title: "Apple HomePod Mini",
      price: "$99",
      image: "/assets/banner_img_5.jpg",
    },
    {
      title: "Apple Magic Keyboard",
      price: "$129",
      image: "/assets/banner_img_6.jpg",
    },
  ];

  return (
    <>
      <section className="py-10 border-b">
        <div className={cn("py-20", container)}>
          <div className="flex justify-start items-center gap-2">
            <h2 className="text-sm text-gray-900 font-medium  sm:text-md">
              Home
            </h2>
            <h2 className="text-sm text-gray-300 sm:text-md">
              <ChevronRight />
            </h2>
            <h2 className="text-sm text-gray-300 sm:text-md">Shop</h2>
            <h2 className="text-sm text-gray-300 sm:text-md">
              <ChevronRight />
            </h2>
            <h2 className="text-sm text-gray-300 sm:text-md">Cart</h2>
          </div>

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
        </div>
      </section>
      <section className="py-10">
        <div className={cn(container)}>
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
    </>
  );
}
