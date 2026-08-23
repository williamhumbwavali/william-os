import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "William Humbwavali — Engenheiro de Software",
  description:
    "Portfólio de William Humbwavali: criador do framework Lithe PHP, cofundador do Baza, fundador da Rialse. Engenharia Informática na UGS, ex-42 Luanda.",
  openGraph: {
    title: "William Humbwavali — Engenheiro de Software",
    description:
      "Framework open-source, mobilidade urbana, e-commerce e produtos digitais construídos em Angola.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-AO" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base font-body text-ink antialiased">{children}</body>
    </html>
  );
}
