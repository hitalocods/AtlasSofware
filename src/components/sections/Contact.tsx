"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Language } from "@/lib/language";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const copy = {
  pt: {
    title: "Quer tirar uma ideia do improviso?",
    description: "Me chama com o que você precisa resolver. Eu te respondo com um caminho possível, escopo e próximos passos.",
    whatsapp: "Pedir orçamento no WhatsApp",
  },
  en: {
    title: "Want to move an idea out of improvisation?",
    description: "Send what you need to solve. I will reply with a possible path, scope, and next steps.",
    whatsapp: "Request quote on WhatsApp",
  },
};

const whatsappUrl =
  "https://wa.me/5586988269144?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Atlas%20Software%20e%20quero%20fazer%20um%20or%C3%A7amento.";

type ContactProps = {
  language: Language;
};

export function Contact({ language }: ContactProps) {
  return (
    <section id="contact" className="py-32 px-6 bg-[#F5F7FA] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-brand-900 mb-6">
            {copy[language].title}
          </h2>
          <p className="text-xl text-brand-900/60 mb-12 max-w-xl mx-auto">
            {copy[language].description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full"
        >
          <a
            href="https://www.instagram.com/atlassoftware_/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm text-brand-900 font-medium hover:border-accent/30 hover:bg-white shadow-sm transition-all duration-300 group"
          >
            <InstagramIcon className="text-brand-900/50 group-hover:text-brand-900 transition-colors" />
            Instagram
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-900 text-white font-medium hover:bg-black shadow-sm transition-all duration-300 group"
          >
            <MessageCircle size={20} className="text-white/70 group-hover:text-white transition-colors" />
            {copy[language].whatsapp}
          </a>

        </motion.div>
      </div>
    </section>
  );
}
