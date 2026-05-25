"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Database, Headphones, MessageSquare } from "lucide-react";
import type { Language } from "@/lib/language";

const copy = {
  pt: {
    title: "O que fica pronto junto com o projeto",
    description:
      "A entrega não termina em uma tela bonita. Organizamos a base para o cliente usar, atualizar e medir o que foi criado.",
    items: [
      {
        title: "Projeto publicado",
        description: "Domínio, hospedagem e estrutura final em produção.",
      },
      {
        title: "Painel quando faz sentido",
        description: "CRUD, banco de dados e área administrativa para operar sem depender de código.",
      },
      {
        title: "Contato sem atrito",
        description: "Fluxos conectados a WhatsApp, Instagram ou canais que o cliente já usa.",
      },
      {
        title: "Ajustes após entrega",
        description: "Refinamos a primeira versão com base no uso real e nas dúvidas do time.",
      },
    ],
  },
  en: {
    title: "What ships with the project",
    description:
      "The delivery is not just a polished screen. We prepare the foundation so the client can use, update, and measure what was built.",
    items: [
      {
        title: "Published project",
        description: "Domain, hosting, and production-ready structure.",
      },
      {
        title: "Admin when needed",
        description: "CRUD, database, and admin areas so teams can operate without code.",
      },
      {
        title: "Low-friction contact",
        description: "Flows connected to WhatsApp, Instagram, or channels the client already uses.",
      },
      {
        title: "Post-launch refinement",
        description: "We adjust the first version based on real usage and team feedback.",
      },
    ],
  },
};

const icons = [
  <CheckCircle2 key="published" size={22} />,
  <Database key="database" size={22} />,
  <MessageSquare key="contact" size={22} />,
  <Headphones key="support" size={22} />,
];

type TrustProps = {
  language: Language;
};

export function Trust({ language }: TrustProps) {
  return (
    <section className="py-24 px-6 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            {copy[language].title}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            {copy[language].description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {copy[language].items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-accent/50 hover:bg-white/[0.07] transition-colors"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-900">
                {icons[index]}
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/58">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
