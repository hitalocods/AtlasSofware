import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlas Software | Soluções Digitais Limpas",
  description: "Criamos experiências digitais modernas com precisão e clareza.",
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
