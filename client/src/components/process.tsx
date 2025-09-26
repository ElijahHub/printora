import { cn, container } from "@/lib/utils";

export default function Process() {
  return (
    <section className="py-10 border-b">
      <div className={cn("py-5", container)}>
        <div className="flex flex-col gap-1 mb-4 ">
          <h2 className="text-left font-medium text-3xl ">How It Works</h2>
          <p className="text-left text-sm text-gray-400">
            {" "}
            Simple steps from idea to doorstep.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
