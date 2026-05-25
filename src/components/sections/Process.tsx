"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/language";

const copy = {
  pt: {
    title: "Nosso processo",
    description: "Um fluxo curto, claro e pensado para colocar algo utilizável no ar sem enrolar o projeto.",
    steps: [
      { num: "01", title: "Diagnóstico", description: "Mapeamos objetivo, público, rotina atual e o que precisa mudar." },
      { num: "02", title: "Direção visual", description: "Criamos uma interface limpa, coerente com a marca e fácil de entender." },
      { num: "03", title: "Construção", description: "Desenvolvemos telas, banco de dados, integrações e painel quando necessário." },
      { num: "04", title: "Publicação", description: "Colocamos no ar, testamos o fluxo principal e ajustamos a primeira versão." },
    ],
  },
  en: {
    title: "Our Process",
    description: "A short, clear workflow designed to put something usable online without dragging the project.",
    steps: [
      { num: "01", title: "Diagnosis", description: "We map the goal, audience, current workflow, and what needs to change." },
      { num: "02", title: "Visual direction", description: "We design a clean interface that fits the brand and is easy to understand." },
      { num: "03", title: "Build", description: "We develop screens, database, integrations, and admin panels when needed." },
      { num: "04", title: "Launch", description: "We publish, test the main flow, and refine the first version." },
    ],
  },
};

type ProcessProps = {
  language: Language;
};

export function Process({ language }: ProcessProps) {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
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
          <p className="mt-4 max-w-2xl text-brand-900/60 leading-relaxed">
            {copy[language].description}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-6 left-6 bottom-6 w-px bg-accent/25 md:w-full md:h-px md:bottom-auto md:left-0 md:right-0 z-0" />

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
                <div className="w-12 h-12 rounded-full border border-accent/20 bg-white flex items-center justify-center shrink-0 group-hover:border-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors text-brand-900/60 font-medium shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-brand-900 mb-2">{step.title}</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-brand-900/58">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
