"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarElementProps = {
  title: string;
  scrollToId: string;
  mobileIcon: string;
  setActiveElement: (scrollToId: string) => void;
};

const NavbarElement: React.FC<NavbarElementProps> = ({
  title,
  scrollToId,
  mobileIcon,
  setActiveElement,
}) => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(scrollToId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport =
          rect.bottom >= window.innerHeight / 2 &&
          rect.top <= window.innerHeight / 2;
        setIsInView(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollToId]);

  useEffect(() => {
    if (isInView) {
      setActiveElement(scrollToId);
    }
  }, [isInView, scrollToId, setActiveElement]);

  return (
    <motion.button
      className={`p-2 rounded-full flex justify-center items-center font-extrabold min-w-[50px] ${
        isInView ? "bg-green-500" : ""
      }`}
      onClick={() => {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement && typeof window !== "undefined") {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }}
    >
      <li className="text-white text-center text-sm font-bold hover:opacity-80 hover:scale-110 transition-all duration-150 hidden sm:block">
        {title}
      </li>
      <li className="text-white text-center text-2xl font-bold hover:opacity-80 hover:scale-110 transition-all duration-150 block sm:hidden">
        {mobileIcon}
      </li>
    </motion.button>
  );
};

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
      const scrolled = window.scrollY > window.innerHeight / 4 
      && window.scrollY < document.body.scrollHeight - window.innerHeight * 1.2;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: isScrolled ? 1 : 0, display: isScrolled ? "flex" : "none" });
  }, [isScrolled, controls]);

  return (
    <motion.nav
      initial={{ opacity: 0, display: "none", y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-0 p-8 flex justify-center items-center z-[1000] w-full my-8`}
    >
      <div className="rounded-full bg-dark-gray border border-light-gray p-4 flex justify-around items-center gap-2 opacity-80">
        <button
          className={`bg-primary-blue p-2 rounded-full h-full hover:scale-110 hover:-translate-y-1 transition-all duration-150 ${
            activeElement === "top" ? "bg-green-500" : ""
          }`}
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <FaArrowUp size={24} color="white" />
        </button>
        <ul className="flex justify-around items-center gap-4">
          <NavbarElement
            mobileIcon="🚀"
            title={"Accueil"}
            scrollToId=""
            setActiveElement={handleSetActiveElement}
            />
          <NavbarElement
            mobileIcon="💡"
            title={"Projects"}
            scrollToId=""
            setActiveElement={handleSetActiveElement}
            />
          <NavbarElement
            mobileIcon="💡"
            title={"About"}
            scrollToId=""
            setActiveElement={handleSetActiveElement}
            />
        </ul>
        <LanguageSwitcher />
      </div>
    </motion.nav>
  );
};

export default Navbar;
