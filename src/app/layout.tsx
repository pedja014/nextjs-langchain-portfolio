import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Predrag Milićević",
    default: "Predrag Milićević",
  },
  description:
    "Check out my smart portfolio website with a custom AI chat bot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-3xl px-3 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
