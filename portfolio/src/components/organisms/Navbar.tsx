import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight / 4 &&
        window.scrollY < document.body.scrollHeight - window.innerHeight * 1.2;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <ul className="justify-around items-center hidden md:flex">
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
      </ul>
      <LanguageSwitcher />
    </motion.nav>
  );
};

export default Navbar;
