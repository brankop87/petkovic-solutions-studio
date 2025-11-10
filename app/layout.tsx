import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Petković Solutions",
  description: "Digitalna rješenja — web, aplikacije, AI i SaaS temelji.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body className="bg-gray-950 text-white font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
