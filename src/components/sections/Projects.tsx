"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Globe2 } from "lucide-react";
import type { Language } from "@/lib/language";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
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

const projectLinks = {
  arenaChapas: {
    project: "https://arenachapas-de41d.web.app/",
    instagram: "https://www.instagram.com/arenachapas/",
    image: "/projects/arena-chapas.png",
  },
  studioBeauty: {
    project: "https://cs-studiobeauty.web.app/",
    instagram: "https://www.instagram.com/c.s_studiobeauty/",
    image: "/projects/cs-studio-beauty.png",
  },
  atlasCrm: {
    project: "https://atlas-crm-two.vercel.app/dashboard/crm",
    instagram: "https://www.instagram.com/atlassoftware_/",
    image: "/projects/atlas-crm.png",
  },
  trino: {
    project: "https://trino-imobiliaria.web.app/",
    instagram: "https://www.instagram.com/trinorimobiliaria/",
    image: "/projects/trino-imobiliaria.png",
  },
};

const copy = {
  pt: {
    title: "Entregas reais, sem vitrine falsa",
    description: "Alguns projetos publicados pela Atlas, com foco em resolver uma rotina concreta do cliente.",
    projectLink: "Projeto online",
    instagramLink: "Instagram",
    highlightsLabel: "Destaques",
    problemLabel: "Problema",
    deliveryLabel: "Entrega",
    resultLabel: "Resultado",
    projects: [
      {
        name: "Arena Chapas",
        category: "Sistema de reservas",
        problem: "Reservas dependiam de conversa manual e ficavam difíceis de acompanhar.",
        delivery: "Agendamento online com banco de dados, painel administrativo e CRUD de horários.",
        result: "Mais controle sobre reservas, confirmações e disponibilidade da arena.",
        highlights: ["Banco de dados", "Painel admin", "CRUD de horários"],
        alt: "Tela do sistema Arena Chapas",
        ...projectLinks.arenaChapas,
      },
      {
        name: "C.S Studio Beauty",
        category: "Landing page",
        problem: "O studio precisava se apresentar melhor antes da conversa no Instagram ou WhatsApp.",
        delivery: "Página de marca com serviços, visual limpo e caminhos diretos para agendamento.",
        result: "Presença digital mais profissional e menos atrito para novas clientes entrarem em contato.",
        highlights: ["Marca", "Agendamento", "Presença digital"],
        alt: "Tela da landing page C.S Studio Beauty",
        ...projectLinks.studioBeauty,
      },
      {
        name: "Atlas CRM",
        category: "CRM e gestão",
        problem: "Clientes e etapas comerciais ficavam espalhados sem uma visão única.",
        delivery: "Interface de CRM com dashboard e CRUD para organizar rotinas internas.",
        result: "Processo comercial mais visível, com informações centralizadas para tomada de decisão.",
        highlights: ["CRM", "CRUD", "Dashboard"],
        alt: "Tela do dashboard Atlas CRM",
        ...projectLinks.atlasCrm,
      },
      {
        name: "Trino Imobiliária",
        category: "Portal imobiliário",
        problem: "Atualizar imóveis, fotos e informações dependia de um fluxo pouco prático.",
        delivery: "Portal imobiliário com banco de dados, CRUD e cadastro de fotos.",
        result: "Mais autonomia para publicar e manter imoveis atualizados.",
        highlights: ["Banco de dados", "Fotos", "Gestão de imóveis"],
        alt: "Tela do portal Trino Imobiliária",
        ...projectLinks.trino,
      },
    ],
  },
  en: {
    title: "Real work, no fake showcase",
    description: "A few live projects built by Atlas, each focused on a concrete client workflow.",
    projectLink: "Live project",
    instagramLink: "Instagram",
    highlightsLabel: "Highlights",
    problemLabel: "Problem",
    deliveryLabel: "Delivery",
    resultLabel: "Result",
    projects: [
      {
        name: "Arena Chapas",
        category: "Booking System",
        problem: "Bookings depended on manual conversations and were hard to track.",
        delivery: "Online scheduling with database, admin panel, and schedule CRUD.",
        result: "More control over reservations, confirmations, and venue availability.",
        highlights: ["Database", "Admin panel", "Schedule CRUD"],
        alt: "Arena Chapas system screen",
        ...projectLinks.arenaChapas,
      },
      {
        name: "C.S Studio Beauty",
        category: "Landing Page",
        problem: "The studio needed to present itself better before the Instagram or WhatsApp conversation.",
        delivery: "Brand page with services, clean visuals, and direct booking paths.",
        result: "A more professional digital presence and less friction for new clients to reach out.",
        highlights: ["Brand", "Booking", "Digital presence"],
        alt: "C.S Studio Beauty landing page screen",
        ...projectLinks.studioBeauty,
      },
      {
        name: "Atlas CRM",
        category: "CRM Interface",
        problem: "Customers and commercial stages were scattered without a single view.",
        delivery: "CRM interface with dashboard and CRUD to organize internal routines.",
        result: "A clearer commercial process with centralized information for decisions.",
        highlights: ["CRM", "CRUD", "Dashboard"],
        alt: "Atlas CRM dashboard screen",
        ...projectLinks.atlasCrm,
      },
      {
        name: "Trino Imobiliária",
        category: "Real Estate Portal",
        problem: "Updating listings, photos, and property information depended on an impractical flow.",
        delivery: "Real estate portal with database, CRUD, and photo uploads.",
        result: "More autonomy to publish and keep property listings updated.",
        highlights: ["Database", "Photos", "Property management"],
        alt: "Trino Imobiliária portal screen",
        ...projectLinks.trino,
      },
    ],
  },
};

type ProjectsProps = {
  language: Language;
};

export function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-brand-900 mb-4">
              {copy[language].title}
            </h2>
            <p className="text-brand-900/60 max-w-xl">
              {copy[language].description}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {copy[language].projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[2rem] border border-gray-200 bg-white overflow-hidden flex flex-col hover:border-accent/30 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="relative z-20 p-8 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-medium tracking-widest text-accent uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-medium text-brand-900 mb-3">
                    {project.name}
                  </h3>
                  <dl className="mt-5 grid gap-3 text-sm md:text-base">
                    {[
                      [copy[language].problemLabel, project.problem],
                      [copy[language].deliveryLabel, project.delivery],
                      [copy[language].resultLabel, project.result],
                    ].map(([label, text]) => (
                      <div key={label} className="rounded-2xl border border-gray-100 bg-[#F5F7FA] p-4">
                        <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-900/45">
                          {label}
                        </dt>
                        <dd className="text-brand-900/68 leading-relaxed">
                          {text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-wrap gap-2" aria-label={copy[language].highlightsLabel}>
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-accent/10 bg-accent/5 px-3 py-1 text-xs font-medium text-brand-900/70"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.project}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-900 text-white text-sm font-medium hover:bg-black transition-colors"
                  >
                    <Globe2 size={16} />
                    {copy[language].projectLink}
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-brand-900 hover:bg-gray-50 hover:text-black transition-colors shadow-sm"
                  >
                    <InstagramIcon />
                    {copy[language].instagramLink}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
