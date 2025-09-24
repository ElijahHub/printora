"use client";

import { UserDetailProvider } from "@/context/UserDetailContext";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserDetailProvider>{children}</UserDetailProvider>;
}
