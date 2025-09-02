import { useTranslation } from "@/app/PortfolioClient";
import { useScrollHandler } from "@/hooks/useScrollHandler";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import NavbarElement from "../atoms/NavbarElement";

const Navbar = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const { t } = useTranslation();

  const handleSetActiveElement = (scrollToId: string) => {
    setActiveElement(scrollToId);
  };

  useScrollHandler((scrollY) => {
    const scrolled = scrollY > window.innerHeight / 4 &&
      scrollY < document.body.scrollHeight - window.innerHeight * 1.2;
    setIsScrolled(scrolled);
  }, { throttleMs: 16 });

  useEffect(() => {
    controls.start({
      opacity: isScrolled ? 1 : 0,
      display: isScrolled ? "flex" : "none",
    });
  }, [isScrolled, controls]);

  return (
    <motion.nav
      initial={{ opacity: 0, display: "none", y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 z-[1000] w-full`}
    >
      <ul className="justify-around items-center hidden lg:flex">
        <NavbarElement
          title={t("navbar.about")}
          scrollToId="about"
          setActiveElement={handleSetActiveElement}
        />
        <NavbarElement
          title={t("navbar.process")}
          scrollToId="process"
          setActiveElement={handleSetActiveElement}
        />
        <NavbarElement
          title={t("navbar.projects")}
          scrollToId="projects"
          setActiveElement={handleSetActiveElement}
        />
        <NavbarElement
          title={t("navbar.contact")}
          scrollToId="contact"
          setActiveElement={handleSetActiveElement}
        />
      </ul>
      <LanguageSwitcher />
    </motion.nav>
  );
};

export default Navbar;
