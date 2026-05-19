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
    title: "Projetos selecionados",
    description: "Produtos reais publicados, com interfaces sob medida, integrações e estrutura para operar no dia a dia.",
    projectLink: "Projeto online",
    instagramLink: "Instagram",
    highlightsLabel: "Destaques",
    projects: [
      {
        name: "Arena Chapas",
        category: "Sistema de reservas",
        description:
          "Plataforma para agendamento de horários com banco de dados, painel administrativo e CRUD para confirmar e gerenciar reservas com mais controle operacional.",
        highlights: ["Banco de dados", "Painel admin", "CRUD de horários"],
        alt: "Tela do sistema Arena Chapas",
        ...projectLinks.arenaChapas,
      },
      {
        name: "C.S Studio Beauty",
        category: "Landing page",
        description:
          "Página de marca focada em apresentação profissional e conversão para agendamentos, com visual limpo para valorizar o posicionamento do estúdio.",
        highlights: ["Marca", "Agendamento", "Presença digital"],
        alt: "Tela da landing page C.S Studio Beauty",
        ...projectLinks.studioBeauty,
      },
      {
        name: "Atlas CRM",
        category: "CRM e gestão",
        description:
          "Interface de CRM com CRUD para organizar clientes e processos internos, pensada para centralizar rotinas comerciais em uma experiência simples.",
        highlights: ["CRM", "CRUD", "Dashboard"],
        alt: "Tela do dashboard Atlas CRM",
        ...projectLinks.atlasCrm,
      },
      {
        name: "Trino Imobiliária",
        category: "Portal imobiliário",
        description:
          "Sistema imobiliário com banco de dados, CRUD e cadastro de fotos, permitindo publicar e atualizar imóveis com mais autonomia.",
        highlights: ["Banco de dados", "Fotos", "Gestão de imóveis"],
        alt: "Tela do portal Trino Imobiliária",
        ...projectLinks.trino,
      },
    ],
  },
  en: {
    title: "Selected Projects",
    description: "Live products with tailored interfaces, integrations, and structure for everyday operations.",
    projectLink: "Live project",
    instagramLink: "Instagram",
    highlightsLabel: "Highlights",
    projects: [
      {
        name: "Arena Chapas",
        category: "Booking System",
        description:
          "Scheduling platform with database, admin panel, and CRUD flows to confirm and manage bookings with stronger operational control.",
        highlights: ["Database", "Admin panel", "Schedule CRUD"],
        alt: "Arena Chapas system screen",
        ...projectLinks.arenaChapas,
      },
      {
        name: "C.S Studio Beauty",
        category: "Landing Page",
        description:
          "Brand page focused on professional presentation and appointment conversion, with a clean look that supports the studio's positioning.",
        highlights: ["Brand", "Booking", "Digital presence"],
        alt: "C.S Studio Beauty landing page screen",
        ...projectLinks.studioBeauty,
      },
      {
        name: "Atlas CRM",
        category: "CRM Interface",
        description:
          "CRM interface with CRUD flows to organize customers and internal processes, designed to centralize sales routines in a simple experience.",
        highlights: ["CRM", "CRUD", "Dashboard"],
        alt: "Atlas CRM dashboard screen",
        ...projectLinks.atlasCrm,
      },
      {
        name: "Trino Imobiliária",
        category: "Real Estate Portal",
        description:
          "Real estate system with database, CRUD, and photo uploads, giving the team more autonomy to publish and update property listings.",
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
                  <p className="text-sm md:text-base text-brand-900/60 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
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
