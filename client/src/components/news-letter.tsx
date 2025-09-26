import { cn, container } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function NewsLetter() {
  return (
    <section className="py-10 border-b bg-gray-100">
      <div
        className={cn(
          "py-15 flex flex-col justify-between lg:items-center lg:flex-row ",
          container
        )}
      >
        <div className="flex flex-col gap-1 mb-4 ">
          <h2 className="text-left font-medium text-3xl ">Stay in the loop</h2>
          <p className="text-left text-md ">
            {" "}
            Get drops, tips, and exclusive offers straight to your inbox.{" "}
          </p>
        </div>

        <form className=" w-full flex gap-2 items-center justify-end lg:w-1/2 ">
          <Input
            placeholder="Enter your email"
            className="w-full bg-white p-6 rounded-xl"
          />
          <Button type="submit" className="cursor-pointer p-6 rounded-xl ">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
