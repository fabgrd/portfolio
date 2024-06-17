import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type NavbarElementProps = {
  title: string;
  scrollToId: string;
  setActiveElement: (scrollToId: string) => void;
};

const NavbarElement: React.FC<NavbarElementProps> = ({
  title,
  scrollToId,
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
      className={`rounded-full flex justify-center items-center font-extrabold min-w-[50px] ${
        isInView ? "" : ""
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
      <li
        className={clsx(
          `text-sm font-normal tracking-widest uppercase whitespace-normal border border-primary-light rounded-xl mx-1.5 px-2 py-1 transition-all duration-300 focus:outline-none hover:text-opacity-80 hover:shadow-none hover:bg-primary-light hover:text-primary-dark ${
            isInView
              ? "bg-primary-light text-primary-dark"
              : "bg-primary-dark text-primary-light"
          }`
        )}
      >
        {title}
      </li>
    </motion.button>
  );
};

export default NavbarElement;
