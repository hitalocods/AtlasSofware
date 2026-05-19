"use client";

import { motion } from "framer-motion";
import type { Language } from "@/lib/language";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Firebase",
  "PostgreSQL",
  "Node.js",
  "AI Integrations",
];

const title = {
  pt: "Tecnologias",
  en: "Technology Stack",
};

type StackProps = {
  language: Language;
};

export function Stack({ language }: StackProps) {
  return (
    <section id="stack" className="py-24 px-6 bg-brand-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
            {title[language]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white/65 hover:text-white hover:bg-white/10 hover:border-accent/40 transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
