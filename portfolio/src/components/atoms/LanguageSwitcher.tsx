import { useTranslation } from "@/app/PortfolioClient";
import { Locale } from "@/lib/i18n";
import { CN, FR, GB } from "country-flag-icons/react/3x2";

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();

  const onToggleLanguageClick = async (newLocale: Locale) => {
    if (newLocale !== locale) {
      await changeLanguage(newLocale);
    }
  };

  const getButtonClass = (localeCode: string) => {
    return `focus:outline-none px-2 py-1 rounded-xl transition-all duration-200 hover:scale-105 ${
      locale === localeCode ? "border-2 border-primary-light" : ""
    }`;
  };

  return (
    <div className="fixed flex flex-col items-center gap-2 top-4 right-4 w-full max-w-[80px] md:max-w-none md:fixed md:flex-row md:top-4 md:right-4 md:w-auto z-50">
      <button
        className={getButtonClass("en")}
        onClick={() => onToggleLanguageClick("en")}
        style={{
          background:
            locale === "en"
              ? "linear-gradient(to right, #02081E, #000000)"
              : "none",
        }}
      >
        <GB height={32} width={32} />
      </button>
      <button
        className={getButtonClass("fr")}
        onClick={() => onToggleLanguageClick("fr")}
        style={{
          background:
            locale === "fr"
              ? "linear-gradient(to right, #02081E, #000000)"
              : "none",
        }}
      >
        <FR height={32} width={32} />
      </button>
      <button
        className={getButtonClass("cn")}
        onClick={() => onToggleLanguageClick("cn")}
        style={{
          background:
            locale === "cn"
              ? "linear-gradient(to right, #02081E, #000000)"
              : "none",
        }}
      >
        <CN height={32} width={32} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
