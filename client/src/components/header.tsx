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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tokenResponse = JSON.parse(localStorage.getItem("tokenResponse")!);

      if (tokenResponse) getUserProfileInfo(tokenResponse?.access_token);
    }
  }, []);

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
