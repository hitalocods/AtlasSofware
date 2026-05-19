"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";
import Link from "next/link";
import type { Language } from "@/lib/language";

const links = {
  pt: [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Tecnologias", href: "#stack" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ],
  en: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};

const cta = {
  pt: "Solicitar orçamento",
  en: "Request a Quote",
};

type NavbarProps = {
  language: Language;
  onToggleLanguage: () => void;
};

export function Navbar({ language, onToggleLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const nextLanguage = language === "pt" ? "EN" : "PT";
  const ariaLabel = language === "pt" ? "Traduzir para inglês" : "Translate to Portuguese";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4">
      <nav className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between gap-4 transition-all duration-300 shadow-sm">
        <Link href="/" className="text-xl font-medium tracking-tight text-brand-900 hover:text-black transition-colors">
          Atlas Software
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links[language].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-brand-900/70 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={ariaLabel}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-medium text-brand-900 hover:bg-gray-50 transition-colors"
          >
            <Languages size={16} />
            {nextLanguage}
          </button>
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-brand-900 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {cta[language]}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={ariaLabel}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 text-sm font-medium text-brand-900 hover:bg-gray-50 transition-colors"
          >
            <Languages size={16} />
            {nextLanguage}
          </button>
          <button
            className="text-brand-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={language === "pt" ? "Abrir menu" : "Toggle menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-lg"
          >
            {links[language].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-900 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-brand-900 text-center font-medium hover:bg-gray-50 transition-colors mt-2"
            >
              {cta[language]}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
