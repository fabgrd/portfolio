import EasterEgg from "@/components/EasterEgg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabien Giraudier - Portfolio",
  description: "Développeur Full-Stack passionné par les technologies modernes et l'innovation digitale",
  keywords: ["développeur", "full-stack", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Fabien Giraudier" }],
  creator: "Fabien Giraudier",
  openGraph: {
    title: "Fabien Giraudier - Portfolio",
    description: "Développeur Full-Stack passionné par les technologies modernes",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const apfel = localFont({
  src: [
    {
      path: '../../public/fonts/ApfelGrotezk-Regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApfelGrotezk-Mittel.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApfelGrotezk-Fett.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ApfelGrotezk-Satt.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-apfel',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={apfel.variable}>
      <body className={`${apfel.className} antialiased`}>
        <EasterEgg />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
