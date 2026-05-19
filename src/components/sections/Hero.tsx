"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Language } from "@/lib/language";

const copy = {
  pt: {
    tagline: "Criamos experiências digitais modernas com precisão e clareza.",
    description: "Sites, aplicativos, automações e sistemas com IA construídos com design minimalista e engenharia limpa.",
    primaryCta: "Solicitar orçamento",
    secondaryCta: "Ver projetos",
  },
  en: {
    tagline: "Designing modern digital experiences with precision and clarity.",
    description: "Websites, applications, automation and AI systems built with minimal design and clean engineering.",
    primaryCta: "Request a Quote",
    secondaryCta: "View Projects",
  },
};

type HeroProps = {
  language: Language;
};

export function Hero({ language }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 bg-[#F5F7FA]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#D9DEE8_1px,transparent_1px),linear-gradient(to_bottom,#D9DEE8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_65%,transparent_100%)] opacity-70" />
        <div className="absolute right-[-10vw] top-16 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute left-[-12vw] bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-brand-900/10 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-brand-900">
              Atlas Software
            </h1>
            <p className="text-xl md:text-2xl text-brand-900/80 font-light tracking-tight">
              {copy[language].tagline}
            </p>
          </div>
          
          <p className="text-base md:text-lg text-brand-900/60 leading-relaxed max-w-xl">
            {copy[language].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-900 text-white font-medium hover:bg-black transition-colors"
            >
              {copy[language].primaryCta}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-brand-900 font-medium hover:bg-gray-50 transition-colors group shadow-sm"
            >
              {copy[language].secondaryCta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px] rounded-3xl border border-white/10 bg-brand-900 shadow-2xl shadow-brand-900/20 p-8 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(58,91,255,0.28),transparent_32%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.14),transparent_28%)]" />
            <div className="relative w-full max-w-sm aspect-[2/1]">
              <Image
                src="/logo-atlas.png"
                alt="Atlas Software"
                fill
                priority
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-6 w-32 h-32 bg-accent/20 blur-2xl rounded-full" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
