"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "@/types";
import { useUserDetail } from "@/context/UserDetailContext";

const menus = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const [user, setUser] = useState<User>();

  const { userDetail, setUserDetail } = useUserDetail();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const tokenResponse = JSON.parse(localStorage.getItem("tokenResponse")!);

  //     if (tokenResponse) getUserProfileInfo(tokenResponse?.access_token);
  //   }
  // }, []);

  // Google login
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Save token to local storage
      localStorage.setItem("tokenResponse", JSON.stringify(tokenResponse));
      await getUserProfileInfo(tokenResponse?.access_token);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  // Get user info from google api
  const getUserProfileInfo = async (access_token: string) => {
    try {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${access_token}` } }
      );

      setUser(userInfo?.data);
      setUserDetail(userInfo?.data);
      // Save to DB/Strapi
      saveNewUser(userInfo?.data);
    } catch (error) {
      localStorage.setItem("tokenResponse", "");
      console.error("Failed to fetch Google user profile:", error);
      throw error;
    }
  };

  const saveNewUser = async (user: User) => {
    const result = await axios.post("api/users", {
      name: user.name,
      email: user.email,
      picture: user.picture,
    });

    console.log(result.data);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <Image src={"/logo.svg"} alt="logo" width={120} height={120} />
      <ul className="flex gap-5">
        {menus.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      <div className="flex gap-3 items-center">
        <ShoppingCart />
        {user ? (
          <Image
            src={user?.picture}
            alt={user?.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <Button onClick={() => googleLogin()}>SignIn/SignUp</Button>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Example user state (replace with real auth state)
  const user = null;
  // const user = { name: "Elijah", avatar: "/user.jpg" };

  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">ShopLogo</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="hover:text-blue-600">
            <ShoppingCart size={22} />
          </button>
          <button className="hover:text-blue-600">
            <Heart size={22} />
          </button>

          {user ? (
            <img
              src={user.avatar}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-700">
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col mt-4 space-y-4 px-4 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4 px-4 mt-6 border-t pt-4">
          <button className="hover:text-blue-600">
            <ShoppingCart size={22} />
          </button>
          <button className="hover:text-blue-600">
            <Heart size={22} />
          </button>

          {user ? (
            <img
              src={user.avatar}
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Overlay (when menu is open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </nav>
  );
}

/*
<div class="relative group inline-block">
  <!-- Parent button -->
  <button class="bg-blue-500 text-white px-4 py-2 rounded">
    Menu
  </button>

  <!-- Dropdown (hidden by default) -->
  <div class="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-40">
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">Item 3</a>
  </div>
</div>

<div class="absolute opacity-0 group-hover:opacity-100 group-hover:block hidden 
            bg-white shadow-lg rounded mt-2 w-40 transition duration-200">
  ...
</div>
*/

<section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Understand user flow and
        <strong className="text-indigo-600"> increase </strong>
        conversions
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
        Natus, provident accusamus impedit minima harum corporis iusto.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>;
