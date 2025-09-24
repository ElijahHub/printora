"use client";

import { useUserDetail } from "@/context/UserDetailContext";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    subCategory: [
      {
        name: "Pre-Designed",
        path: "/shop/pre-designed",
      },
      {
        name: "Customize Your Own",
        path: "/shop/category",
      },
    ],
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { userDetail: user } = useUserDetail();
  return (
    <nav className="bg-white shadow-sm px-4 py-2 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center p-3 container mx-auto ">
        {/* logo */}
        <div className="flex items-center gap-2 mr-10">
          <div className="w-[30px] h-[30px] rounded-lg bg-primary "></div>
          <div className="flex items-center text-2xl text-primary">
            <p className="text-[#333]">PRIN</p>
            <span>TORA</span>
          </div>
        </div>

        {/* navLinks */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-lg mr-auto font-bold  ">
          {menus.map((links, i) => (
            <li
              key={i}
              className={`${
                links.name.toLowerCase() === "shop"
                  ? "relative group inline-block"
                  : ""
              }`}
            >
              {links.name.toLowerCase() === "shop" ? (
                <>
                  <p className="cursor-pointer">{links.name}</p>
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:flex flex-col hidden 
            bg-white shadow-lg rounded mt-2 w-60 transition duration-200 py-5 px-2 top-4 gap-2"
                  >
                    {links.subCategory?.map((item, index) => (
                      <Link href={item.path} key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={links.path!}>{links.name}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href={user ? "/shop/cart" : "/sign-in"}
            className="hover:text-primary/60"
          >
            <ShoppingCart size={22} />
          </Link>
          <Link
            href={user ? "/shop/wishlist" : "/sign-in"}
            className="hover:text-primary/60"
          >
            <Heart size={22} />
          </Link>

          {user ? (
            <Image
              src={user.picture}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/sign-in" className="font-bold text-lg text-[#555]">
                Signin
              </Link>
              <h1>|</h1>
              <Link
                href="/sign-up"
                className="px-3 py-2 bg-primary/75 text-white rounded-lg hover:bg-primary"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700 focus:outline-none ml-auto"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-74 py-4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2 mr-10">
            <div className="w-[30px] h-[30px] rounded-lg bg-primary "></div>
            <div className="flex items-center text-2xl text-primary">
              <p className="text-[#333]">PRIN</p>
              <span>TORA</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-700">
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-3 px-3 py-5 ">
          {menus.map((links, i) => (
            <li
              key={i}
              className={` w-full p-2 hover:bg-[rgba(20,20,20,0.5)] hover:text-white ${
                links.name.toLowerCase() === "shop"
                  ? "relative group inline-block"
                  : ""
              }`}
            >
              {links.name.toLowerCase() === "shop" ? (
                <>
                  <p className="cursor-pointer">{links.name}</p>
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:flex flex-col hidden 
            bg-white text-black shadow-lg rounded mt-2 w-60 transition duration-200 py-5 px-2 -top-5 -right-61 gap-2"
                  >
                    {links.subCategory?.map((item, index) => (
                      <Link href={item.path} key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={links.path!}>{links.name}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 px-3 border-t pt-4  ">
          <Link
            href={user ? "/shop/cart" : "/sign-in"}
            className="hover:text-primary/60"
          >
            <ShoppingCart size={22} />
          </Link>
          <Link
            href={user ? "/shop/wishlist" : "/sign-in"}
            className="hover:text-primary/60"
          >
            <Heart size={22} />
          </Link>

          {user ? (
            <Image
              src={user.picture}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/sign-in" className="font-bold text-lg text-[#555]">
                Signin
              </Link>
              <h1>|</h1>
              <Link
                href="/sign-up"
                className="px-3 py-2 bg-primary/75 text-white rounded-lg hover:bg-primary"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Overlay (when menu is open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[rgba(20,20,20,0.6)] bg-opacity-40 z-40"
        ></div>
      )}
    </nav>
  );
}
