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
  const whatsappUrl =
    "https://wa.me/5586988269144?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Atlas%20Software%20e%20quero%20fazer%20um%20or%C3%A7amento.";

  return (
    <footer className="w-full py-12 px-6 bg-brand-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-medium tracking-tight text-white">
            Atlas Software
          </span>
          <p className="text-sm text-white/50">
            © 2026 Atlas Software. {copy[language]}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/65">
          <Link href="https://www.instagram.com/atlassoftware_/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Instagram
          </Link>
          <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            WhatsApp
          </Link>
        </div>
      </div>
    </footer>
  );
}
