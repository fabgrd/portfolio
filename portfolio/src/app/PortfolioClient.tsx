'use client';

import LanguageLoader from "@/components/atoms/LanguageLoader";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import About from "@/components/organisms/About";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";
import HeroBanner from "@/components/organisms/HeroBanner";
import Navbar from "@/components/organisms/Navbar";
import Process from "@/components/organisms/Process";
import Projects from "@/components/organisms/Projects";
import YouTubeSection from "@/components/organisms/YoutubeSection";
import { Locale, createTranslator, getTranslations } from "@/lib/i18n";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface TranslationContextType {
  t: (key: string) => string;
  locale: Locale;
  changeLanguage: (newLocale: Locale) => Promise<void>;
}

const TranslationContext = createContext<TranslationContextType | null>(null);

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}

interface PortfolioClientProps {
  translations: Record<string, any>;
  locale: Locale;
}

export default function PortfolioClient({ translations: initialTranslations, locale: initialLocale }: PortfolioClientProps) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState(initialTranslations);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const t = createTranslator(translations);

  // Simulation du chargement réel des composants
  useEffect(() => {
    const handleLoad = () => {
      // Petit délai pour s'assurer que tout est vraiment chargé
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Si la page est déjà chargée
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Sinon, on attend l'événement load
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const changeLanguage = useCallback(async (newLocale: Locale) => {
    setIsChangingLanguage(true);
    try {
      const newTranslations = await getTranslations(newLocale);
      setTranslations(newTranslations);
      setCurrentLocale(newLocale);
      // Petit délai pour l'UX
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsChangingLanguage(false);
    }
  }, []);

  const contextValue: TranslationContextType = {
    t,
    locale: currentLocale,
    changeLanguage,
  };

  // Affichage du loader pendant le chargement initial
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {isChangingLanguage && <LanguageLoader />}
      <Navbar />
      <HeroBanner />
      <About />
      <Process />
      <Projects />
      <YouTubeSection />
      <Contact />
      <Footer />
    </TranslationContext.Provider>
  );
}
