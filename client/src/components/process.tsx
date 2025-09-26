import { cn, container } from "@/lib/utils";
import { Card } from "./ui/card";

const processCont = [
  {
    title: "Choose Design",
    desc: "Upload you artwork across tees, mugs, bags, hoodies and poster of you choice.",
  },
  {
    title: "Customize",
    desc: "Adjust color, placement, and sizes with our easy editor.",
  },
  {
    title: "We Print & Ship",
    desc: "Premium materials, precise printing, and quick delivery to your door.",
  },
];

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

        <div className="flex flex-col items-center gap-3 lg:flex-row">
          {processCont.map((item, i) => (
            <Card key={i} className="w-full p-4 gap-1">
              <div className=" w-[35px] h-[35px] rounded-full bg-fuchsia-50 text-md font-medium flex items-center justify-center">
                {i + 1}
              </div>
              <h2 className="text-xl font-medium text-left">{item.title}</h2>
              <p className="text-left text-md text-gray-400">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
