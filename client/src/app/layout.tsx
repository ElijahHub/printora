import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/config";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Printora | Your Creativity, On Demand",
  description:
    "Printora is a print-on-demand platform built for creators, entrepreneurs, and brands. We take care of printing, packaging, and shipping while you focus on growing your business. With no inventory or upfront costs, Printora makes it simple to turn ideas into products and products into profit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Provider>{children}</Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
