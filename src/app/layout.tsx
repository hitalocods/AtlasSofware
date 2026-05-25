import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.atlassoftware.org"),
  title: {
    default: "Atlas Software | Sites, sistemas e automações",
    template: "%s | Atlas Software",
  },
  description:
    "Sites, sistemas, CRMs, reservas online e automações para negócios que precisam vender, agendar e operar melhor.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Atlas Software | Sites, sistemas e automações",
    description:
      "Produtos digitais sob medida para transformar atendimento, agendamentos e processos internos em fluxos claros.",
    url: "/",
    siteName: "Atlas Software",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Software | Sites, sistemas e automações",
    description:
      "Sites, sistemas, CRMs, reservas online e automações para negócios que precisam operar melhor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased bg-brand-50 text-brand-900`}>
      <body className="min-h-full flex flex-col scroll-smooth">{children}</body>
    </html>
  );
}
