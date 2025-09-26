import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { container, cn } from "@/lib/utils";

export default function Feature() {
  return (
    <section className="py-10 border-b">
      <div className={cn("py-5", container)}>
        <div className="flex flex-col gap-1 mb-4 ">
          <h2 className="text-left font-medium text-3xl ">
            Featured Collections
          </h2>
          <p className="text-left text-sm text-gray-400">
            {" "}
            Explore our most-loved picks, curated for quality and style.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center ">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <Card className="p-0 w-full md:w-[400px] gap-0" key={img}>
              <div className=" w-full h-[200px] overflow-hidden">
                <Image
                  src={`/assets/banner_img_${img}.jpg`}
                  alt={`product_img_${img}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-t-lg  cursor-pointer mb-0 "
                />
              </div>

              <div className="px-4 py-3 flex flex-col gap-2 ">
                <h5 className="text-left font-medium text-lg">Essentials Tees</h5>
                <p className="text-left text-sm text-gray-400">
                  Ultra-soft fabrics in modern cuts, Your design, perfected
                </p>

                <div className=" flex gap-4">
                  <Link href="#">
                    <Button
                      variant="outline"
                      type="button"
                      className="cursor-pointer "
                    >
                      Shop Tees
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button type="button" className="cursor-pointer ">
                      Customize
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
