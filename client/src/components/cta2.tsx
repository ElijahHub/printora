import { cn, container } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CTA2() {
  return (
    <section className="py-10 border-b">
      <div
        className={cn(
          "py-5 flex justify-center items-center flex-col gap-3",
          container
        )}
      >
        <h2 className="text-left font-medium text-3xl ">
          Ready to bring your ideas to life?
        </h2>
        <div className="flex justify-center items-center gap-2">
          <Link href="/shop/pre-designed">
            <Button type="button" className="cursor-pointer">
              Shop Now
            </Button>
          </Link>
          <Link href="/shop/category">
            <Button variant="outline" type="button" className="cursor-pointer">
              Customize Your Own
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
