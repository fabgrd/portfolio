import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { defaultLocale, getTranslations } from "@/lib/i18n";
import { Suspense } from "react";
import PortfolioClient from "./PortfolioClient";

export default async function HomePage() {
  const translations = await getTranslations(defaultLocale);

  return (
    <main className="z-10 bg-primary-dark">
      <Suspense fallback={<LoadingSpinner />}>
        <PortfolioClient translations={translations} locale={defaultLocale} />
      </Suspense>
    </main>
  );
}
