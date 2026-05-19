"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/language";

const copy = {
  pt: {
    title: "Nosso processo",
    steps: [
      { num: "01", title: "Estratégia" },
      { num: "02", title: "Design" },
      { num: "03", title: "Desenvolvimento" },
      { num: "04", title: "Lançamento" },
    ],
  },
  en: {
    title: "Our Process",
    steps: [
      { num: "01", title: "Strategy" },
      { num: "02", title: "Design" },
      { num: "03", title: "Development" },
      { num: "04", title: "Launch" },
    ],
  },
};

type ProcessProps = {
  language: Language;
};

export function Process({ language }: ProcessProps) {
  return (
    <section className="py-24 px-6 border-t border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-900">
            {copy[language].title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-6 left-6 bottom-6 w-px bg-gray-200 md:w-full md:h-px md:bottom-auto md:left-0 md:right-0 z-0" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {copy[language].steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex md:flex-col items-start gap-6 md:w-1/4 group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors text-brand-900/50 font-medium shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-900 mb-2">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
