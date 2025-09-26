import { cn, container } from "@/lib/utils";
import {
  Copyright,
  Facebook,
  FacebookIcon,
  GalleryVerticalEnd,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    name: "Shop",
    path: "/shop/pre-designed",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Support",
    path: "/contact",
  },
  {
    name: "Collections",
    path: "/shop/category",
  },
  {
    name: "FAQ",
    path: "/about",
  },
  {
    name: "Shipping",
    path: "/about",
  },
  {
    name: "Gift Cards",
    path: "/shop/pre-designed",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Returns",
    path: "/about",
  },
];

export default function Footer() {
  return (
    <footer className="py-10 bg-[#ddfee8] ">
      <div className={cn("", container)}>
        <div className="flex justify-between flex-col items-center lg:flex-row">
          <div className="">
            <div className="flex justify-center gap-2 md:justify-start mr-10 ">
              <Link href="/" className="flex items-center gap-2 font-medium">
                <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                Printora.
              </Link>
            </div>

            {/* socials */}
            <div className="flex gap-2 items-center ">
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
              <TwitterIcon />
            </div>
          </div>

          <div className="w-full lg:w-1/3 grid grid-cols-3 gap-4">
            {footerLinks.map((link, i) => (
              <Link href={link.path} key={i}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <hr className="w-full border-gray-200 my-5" />
        <div className="flex justify-center items-center gap-2">
          <Copyright size={16} />
          <p>pintora. 2025</p>
        </div>
      </div>
    </footer>
  );
}
