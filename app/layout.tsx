import type { Metadata } from "next";
import { Google_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const display = Google_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Google_Sans({
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
  title: "William Humbwavali — Software Developer",
  description:
    "Portfólio de William Humbwavali, Software Developer de Angola. Projetos, experiência, software open source e produtos digitais.",
  openGraph: {
    title: "William Humbwavali — Software Developer",
    description:
      "Projetos, experiência, software open source e produtos digitais construídos por William Humbwavali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}