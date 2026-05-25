"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Trust } from "@/components/sections/Trust";
import { Contact } from "@/components/sections/Contact";
import type { Language } from "@/lib/language";

export function HomeContent() {
  const [language, setLanguage] = useState<Language>("pt");
  const toggleLanguage = () => setLanguage((current) => (current === "pt" ? "en" : "pt"));

  return (
    <>
      <Navbar language={language} onToggleLanguage={toggleLanguage} />
      <main className="flex-1 w-full overflow-hidden">
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Trust language={language} />
        <Process language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
