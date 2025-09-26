import { cn, container } from "@/lib/utils";

export default function Reviews() {
  return (
    <section className="py-10 border-b mb-20">
      <div className={cn("py-5", container)}>
        <div className="flex flex-col gap-1 mb-4 ">
          <h2 className="text-left font-medium text-3xl ">Customer Reviews</h2>
          <p className="text-left text-sm text-gray-400">
            {" "}
            Real feedback from our community.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
