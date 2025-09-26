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

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img
      class="p-8 rounded-t-lg"
      src="/docs/images/products/apple-watch.png"
      alt="product image"
    />
  </a>
  <div class="px-5 pb-5">
    <a href="#">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
      <div class="flex items-center space-x-1 rtl:space-x-reverse">
        <svg
          class="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          class="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
        5.0
      </span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <a
        href="#"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </a>
    </div>
  </div>
</div>;
