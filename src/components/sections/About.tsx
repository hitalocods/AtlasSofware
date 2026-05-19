"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cpu } from "lucide-react";
import type { Language } from "@/lib/language";

const copy = {
  pt: {
    title: "Um estúdio para precisão digital.",
    description: "Projetamos e desenvolvemos sistemas digitais refinados para marcas que valorizam clareza, desempenho e elegância.",
    cards: ["Interfaces", "Aplicativos web", "Sistemas com IA"],
  },
  en: {
    title: "A studio for digital precision.",
    description: "We design and build refined digital systems for brands that value clarity, performance and elegance.",
    cards: ["Interfaces", "Web Apps", "AI Systems"],
  },
};

const icons = [
  <Monitor key="monitor" size={24} className="text-brand-900" />,
  <Smartphone key="smartphone" size={24} className="text-brand-900" />,
  <Cpu key="cpu" size={24} className="text-brand-900" />,
];

type AboutProps = {
  language: Language;
};

export function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-900 mb-6">
            {copy[language].title}
          </h2>
          <p className="text-lg md:text-xl text-brand-900/60 leading-relaxed">
            {copy[language].description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy[language].cards.map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-gray-200 bg-[#F5F7FA] overflow-hidden hover:border-accent/30 hover:shadow-lg hover:shadow-gray-200/70 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center bg-white group-hover:bg-accent/5 transition-colors shadow-sm">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-medium text-brand-900">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
