import { useTranslation } from "next-i18next";
import { FR, GB, CN } from "country-flag-icons/react/3x2";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const onToggleLanguageClick = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  };

  const getButtonClass = (locale: string) => {
    return `focus:outline-none px-2 py-1 rounded-xl ${
      i18n.language === locale ? "border-2 border-primary-light" : ""
    }`;
  };

  return (
    <div className="fixed flex flex-col items-center gap-2 top-4 right-4 w-full max-w-[80px] md:max-w-none md:fixed md:flex-row md:top-4 md:right-4 md:w-auto z-50">
      <button
        className={getButtonClass("en")}
        onClick={() => onToggleLanguageClick("en")}
        style={{
          background:
            i18n.language === "en"
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
            i18n.language === "fr"
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
            i18n.language === "cn"
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
