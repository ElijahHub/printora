import { axiosClient } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, picture } = await req.json();

  try {
    const data = {
      data: {
        fullName: name,
        email: email,
        picture: picture,
      },
    };
    const res = await axiosClient.post("/user-lists", data);
    return NextResponse.json(res.data);
  } catch (e) {
    return NextResponse.json(e);
  }
}
