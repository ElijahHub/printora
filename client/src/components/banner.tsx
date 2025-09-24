import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const bannerImg = [1, 2, 3, 4, 5, 6];

export default function Banner() {
  return (
    <section className="bg-[#eaffea] lg:grid lg:h-screen lg:place-content-center border-b border-b-[#333] ">
      <div className="mx-auto container px-4 py-32 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="w-full text-left">
          <h5 className="text-xl font-bold text-gray-900  ">
            Premium Print-On-Demand
          </h5>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Create, Customize, and <br /> Wear Your Story
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            Quality apparels, mugs and posters-made to order. No minimums, fast
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
        <div className="hidden md:grid md:grid-cols-3 w-[500px] ">
          {bannerImg.map((img) => (
            <div className="w-[170px] h-[200px] " key={img}>
              <Image
                src={`/assets/banner_img_${img}.jpg`}
                alt={`product_img_${img}`}
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
