"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart3, Layout, Activity } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 bg-brand-50">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-accent/10 blur-[120px] rounded-full" />
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
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-900 text-white font-medium hover:bg-black transition-colors"
            >
              {copy[language].primaryCta}
            </Link>
            <Link 
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-brand-900 font-medium hover:bg-gray-50 transition-colors group shadow-sm"
            >
              {copy[language].secondaryCta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square md:aspect-auto md:h-[500px] rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl shadow-2xl p-6 overflow-hidden flex flex-col gap-4">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
            
            {/* Header Mockup */}
            <div className="relative flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="w-24 h-4 rounded bg-gray-200" />
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            </div>

            {/* Cards Mockup */}
            <div className="relative flex-1 grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl bg-gray-50 border border-gray-100 p-4 flex flex-col justify-between">
                <Activity className="text-accent mb-4" size={20} />
                <div>
                  <div className="w-16 h-3 rounded bg-gray-200 mb-2" />
                  <div className="w-32 h-6 rounded bg-brand-900/80" />
                </div>
              </div>
              
              <div className="rounded-2xl bg-gray-50/50 border border-gray-100 p-4 flex flex-col justify-between">
                <BarChart3 className="text-brand-900/40 mb-4" size={20} />
                <div className="w-full h-2 rounded bg-gray-200 mb-1" />
                <div className="w-2/3 h-2 rounded bg-gray-200" />
              </div>
              
              <div className="rounded-2xl bg-gray-50/50 border border-gray-100 p-4 flex flex-col justify-between">
                <Layout className="text-brand-900/40 mb-4" size={20} />
                <div className="flex gap-1">
                  <div className="flex-1 h-8 rounded bg-gray-200" />
                  <div className="flex-1 h-12 rounded bg-gray-300" />
                  <div className="flex-1 h-6 rounded bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Floating Element */}
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
