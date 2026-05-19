import Link from "next/link";
import type { Language } from "@/lib/language";

const copy = {
  pt: "Todos os direitos reservados.",
  en: "All rights reserved.",
};

type FooterProps = {
  language: Language;
};

export function Footer({ language }: FooterProps) {
  return (
    <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-medium tracking-tight text-brand-900">
            Atlas Software
          </span>
          <p className="text-sm text-brand-900/50">
            © 2026 Atlas Software. {copy[language]}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-brand-900/70">
          <Link href="https://www.instagram.com/atlassoftware_/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
            Instagram
          </Link>
          <Link href="https://wa.me/5586988269144" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
