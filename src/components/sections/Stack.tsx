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
    <section id="stack" className="py-24 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-900">
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
              className="px-6 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 flex items-center justify-center text-brand-900/60 hover:text-brand-900 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
