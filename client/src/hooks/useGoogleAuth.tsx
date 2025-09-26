"use client";

import { useUserDetail } from "@/context/UserDetailContext";
import { GetUserProfileInfoType, User } from "@/types";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";

export function useGoogleAuth() {
  const { setUserDetail, setLoading } = useUserDetail();
  const router = useRouter();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        localStorage.setItem("tokenResponse", JSON.stringify(tokenResponse));
        await getUserProfileInfo({
          access_token: tokenResponse?.access_token,
          setUserDetail,
        });

        router.push("/");
      } finally {
        setLoading(false);
      }
    },
  });

  return { googleLogin };
}

export async function getUserProfileInfo({
  access_token,
  setUserDetail,
}: GetUserProfileInfoType) {
  try {
    const userInfo = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    //Store in global context
    setUserDetail(userInfo?.data);

    // Save to DB/Strapi
    saveNewUser(userInfo?.data);
  } catch (error) {
    localStorage.removeItem("tokenResponse");
    console.error("Failed to fetch Google user profile:", error);
    throw error;
  }
}

async function saveNewUser(user: User) {
  const result = await axios.post("api/users", {
    name: user.name,
    email: user.email,
    picture: user.picture,
  });

  console.log(result.data);
}
