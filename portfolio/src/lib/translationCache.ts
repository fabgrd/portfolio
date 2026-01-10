/**
 * Translation Cache System
 * Implements an in-memory cache with optional localStorage persistence
 * for translation data to improve performance
 */

import { Locale } from './i18n';

// In-memory cache
const translationCache = new Map<Locale, Record<string, any>>();

// Cache version for invalidation
const CACHE_VERSION = '1.0.0';
const CACHE_KEY_PREFIX = 'portfolio_translations_';
const CACHE_VERSION_KEY = 'portfolio_translations_version';

/**
 * Check if localStorage is available
 */
function isLocalStorageAvailable(): boolean {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get cached version from localStorage
 */
function getCachedVersion(): string | null {
  if (!isLocalStorageAvailable()) return null;
  
  try {
    return localStorage.getItem(CACHE_VERSION_KEY);
  } catch {
    return null;
  }
}

/**
 * Clear all translation caches (both memory and localStorage)
 */
export function clearTranslationCache(): void {
  // Clear in-memory cache
  translationCache.clear();
  
  // Clear localStorage cache
  if (isLocalStorageAvailable()) {
    try {
      const version = getCachedVersion();
      if (version !== CACHE_VERSION) {
        // Clear old cache entries
        Object.keys(localStorage)
          .filter(key => key.startsWith(CACHE_KEY_PREFIX))
          .forEach(key => localStorage.removeItem(key));
        
        localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
      }
    } catch (error) {
      console.warn('Failed to clear localStorage cache:', error);
    }
  }
}

/**
 * Get translation from cache (checks memory first, then localStorage)
 */
export function getCachedTranslation(locale: Locale): Record<string, any> | null {
  // Check in-memory cache first (fastest)
  if (translationCache.has(locale)) {
    return translationCache.get(locale) || null;
  }
  
  // Check localStorage cache
  if (isLocalStorageAvailable()) {
    try {
      const cachedVersion = getCachedVersion();
      if (cachedVersion !== CACHE_VERSION) {
        clearTranslationCache();
        return null;
      }
      
      const cacheKey = `${CACHE_KEY_PREFIX}${locale}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        const translations = JSON.parse(cached);
        // Store in memory cache for faster subsequent access
        translationCache.set(locale, translations);
        return translations;
      }
    } catch (error) {
      console.warn('Failed to get cached translation from localStorage:', error);
    }
  }
  
  return null;
}

/**
 * Set translation in cache (both memory and localStorage)
 */
export function setCachedTranslation(locale: Locale, translations: Record<string, any>): void {
  // Always store in memory cache
  translationCache.set(locale, translations);
  
  // Try to store in localStorage
  if (isLocalStorageAvailable()) {
    try {
      const cacheKey = `${CACHE_KEY_PREFIX}${locale}`;
      localStorage.setItem(cacheKey, JSON.stringify(translations));
      
      // Ensure version is set
      if (getCachedVersion() !== CACHE_VERSION) {
        localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
      }
    } catch (error) {
      console.warn('Failed to cache translation in localStorage:', error);
      // Continue execution - in-memory cache is still working
    }
  }
}

/**
 * Preload all translations into cache
 */
export async function preloadTranslations(locales: readonly Locale[]): Promise<void> {
  const promises = locales.map(async (locale) => {
    // Skip if already cached
    if (getCachedTranslation(locale)) {
      return;
    }
    
    try {
      const translations = await import(`@/translations/resources/${locale}/landing.json`);
      setCachedTranslation(locale, translations.default);
    } catch (error) {
      console.error(`Failed to preload translations for locale: ${locale}`, error);
    }
  });
  
  await Promise.all(promises);
}

// Initialize cache on module load
if (typeof window !== 'undefined') {
  // Check and clear old cache versions
  const cachedVersion = getCachedVersion();
  if (cachedVersion && cachedVersion !== CACHE_VERSION) {
    clearTranslationCache();
  }
}

