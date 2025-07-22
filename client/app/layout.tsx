import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import UserGuard from "@/components/UserGuard";
import { Slide, ToastContainer } from "react-toastify";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS",
  description: "pos service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased bg-background`}>
        <main className="m-4 my-6 max-w-[420px]">
          <ToastContainer
            position="top-center"
            transition={Slide}
            autoClose={5000}
            className="pt-4 px-4"
          />
          <UserGuard>{children}</UserGuard>
        </main>
      </body>
    </html>
  );
}
