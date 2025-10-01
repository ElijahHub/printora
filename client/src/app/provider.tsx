"use client";

import { usePathname } from "next/navigation";
import { UserDetailProvider } from "@/context/user-detail-context";
import { Footer, Header } from "@/components";
import { CartWishListProvider } from "@/context/cart-wishlist-context";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const authRoutes = ["/auth/sign-in", "/auth/sign-up"];
  const hideLayout = authRoutes.includes(pathname);

  return (
    <UserDetailProvider>
      <CartWishListProvider>
        {!hideLayout && <Header />}
        {children}
        {!hideLayout && <Footer />}
      </CartWishListProvider>
    </UserDetailProvider>
  );
}
