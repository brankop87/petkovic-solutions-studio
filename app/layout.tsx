import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Manrope, Fraunces } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Petkovic Solutions",
  description:
    "Petkovic Solutions builds conversion-focused websites and landing pages for US service businesses.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} bg-[var(--bg)] text-[var(--text)]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
