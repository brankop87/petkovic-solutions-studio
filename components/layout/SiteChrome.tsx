"use client";

import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import LanguageSuggestion from "@/components/i18n/LanguageSuggestion";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ChatbotWidget />
      <LanguageSuggestion />
    </>
  );
}
