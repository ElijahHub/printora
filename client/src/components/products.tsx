import { cn, container } from "@/lib/utils";

export default function Products() {
  return (
    <section className="py-10 ">
      <div className={cn("py-5", container)}>
        <div className="flex flex-col gap-1 mb-4 ">
          <h2 className="text-left font-medium text-3xl ">Community Designs</h2>
          <p className="text-left text-sm text-gray-400">
            {" "}
            Discover trending creations from our community.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
