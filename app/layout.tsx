import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Petković Solutions — Petciety Digital",
  description:
    "Digitalna rešenja koja traju — web sajtovi, aplikacije, AI i SaaS temelji. Deo Petković Solutions ekosistema.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body className="min-h-screen flex flex-col bg-[#F9EBD0] text-gray-900 font-[Poppins]">
        {/* Fiksiran Navbar + razmak ispod */}
        <Navbar />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
