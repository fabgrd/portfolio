import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['en', 'fr', 'cn'] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = 'fr';

// Locale detection
export function getLocale(locale?: string): Locale {
  if (!locale) return defaultLocale;
  
  const normalizedLocale = locale.toLowerCase();
  return locales.includes(normalizedLocale as Locale) 
    ? (normalizedLocale as Locale) 
    : defaultLocale;
}

// Translation loader
export async function getTranslations(locale: Locale) {
  try {
    const translations = await import(`@/translations/resources/${locale}/landing.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    notFound();
  }
}

// Translation helper
export function createTranslator(translations: Record<string, any>) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}
