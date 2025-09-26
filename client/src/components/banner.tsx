import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Sparkles, Star, Truck } from "lucide-react";
import { cn, container } from "@/lib/utils";

const bannerImg = [1, 2, 3, 4, 5, 6];

const imgIcons = [
  {
    icon: <Star size={22} />,
    title: "4.9/5 Rated",
  },
  {
    icon: <Truck size={22} />,
    title: "Fast Shipping",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Premium Inks",
  },
];

export default function Banner() {
  return (
    <section className="bg-gradient-to-b from-[#ddfee8] to-white lg:grid  border-b ">
      <div
        className={cn(
          "flex justify-center flex-col md:py-32 md:grid md:grid-cols-2 md:items-center md:justify-between md:gap-4",
          container
        )}
      >
        <div className="w-full text-left pt-32 lg:pt-0 ">
          <h5 className="text-xl font-bold text-gray-900 mb-4 ">
            Premium Print-On-Demand
          </h5>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Create, Customize, and <br /> Wear Your Story
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Quality apparels, mugs and posters-made to order. No minimums, fast{" "}
            <br />
            shipping, and vibrant print that last
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link href="/shop/pre-designed">
              <Button className="cursor-pointer">Shop Now</Button>
            </Link>
            <Link href="/shop/category" className="">
              <Button className="bg-transparent text-black border border-[#333] hover:bg-transparent cursor-pointer ">
                Customize Yours
              </Button>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="flex justify-end w-full pt-16">
          <div className="hidden md:grid md:grid-cols-3 w-[500px] rounded-2xl shadow-md overflow-hidden p-4 bg-white gap-2 ">
            {bannerImg.map((img) => (
              <div
                key={img}
                className="aspect-[3/4] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/assets/banner_img_${img}.jpg`}
                  alt={`product_img_${img}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer "
                />
              </div>
            ))}

            <div className=" w-full flex justify-between items-center pt-4 col-span-3 gap-2 ">
              {imgIcons.map((item, index) => (
                <div
                  className=" w-full flex gap-1 border p-3 shadow-sm rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300 ease-in-out justify-center items-center"
                  key={index}
                >
                  {item.icon}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
