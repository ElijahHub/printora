import { cn, container } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="bg-amber-400 py-10">
      <div className={cn("flex justify-between items-center", container)}>
        <h3 className="font-medium text-lg text-left">
          Want something unique? Customize you own product.
        </h3>
        <Link href="/shop/category">
          <Button className="cursor-pointer" type="button" >Start Customizing</Button>
        </Link>
      </div>
    </section>
  );
}
