import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useTranslation } from "next-i18next";
import ShadMockup from '@/assets/projects/Shad.png';
import LuterMockup from '@/assets/projects/Luter.png';
import NftxtlMockup from '@/assets/projects/Nftxtl.png';
import AreaMockup from '@/assets/projects/Nftxtl.png';
import ProjectCard from '@/components/molecules/ProjectCard';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMdOrLarger(event.matches);
    };

    setIsMdOrLarger(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMdOrLarger ? (
        <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-dark text-primary-light p-8" id="projects" ref={containerRef}>
          <div className="container mx-auto p-8 flex flex-col justify-center">
            <ParallaxProvider>
              <Parallax translateX={[-10, 10]}>
                <motion.h1
                  className="text-4xl whitespace-nowrap text font-thin -z-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {t("projects.header")}...
                </motion.h1>
              </Parallax>
            </ParallaxProvider>
            <ProjectCard
              id={1}
              src={ShadMockup}
              alt="Shad"
              description="projects.1.description"
              technologies="React Native, Redux, MongoDB, NodeJS"
            />
            <ProjectCard
              id={2}
              src={LuterMockup}
              alt="Luter"
              description="projects.2.description"
              technologies="ReactJS, TypeScript, Redux, Tailwind"
            />
            <ProjectCard
              id={3}
              src={NftxtlMockup}
              alt="NFTXTL"
              description="projects.1.description"
              technologies=""
            />
            <ProjectCard
              id={4}
              src={AreaMockup}
              alt="AREA"
              description="projects.1.description"
              technologies="NestJS, ReactJS, React Native, TypeScript"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="ml-min-h-screen text-primary-light ">
            <motion.h1
              className="ml-10 mt-10 text-5xl whitespace-nowrap font-thin -z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {t("projects.header")}...
            </motion.h1>
            <div className='p-10 -mb-48'>
              <ProjectCard
                id={1}
                src={ShadMockup}
                alt="Shad"
                description="projects.1.description"
                technologies="React Native, Redux, MongoDB, NodeJS"
              />
              <ProjectCard
                id={2}
                src={LuterMockup}
                alt="Luter"
                description="projects.2.description"
                technologies="ReactJS, TypeScript, Redux, Tailwind"
              />
              <ProjectCard
                id={3}
                src={NftxtlMockup}
                alt="NFTXTL"
                description="projects.1.description"
                technologies=""
              />
              <ProjectCard
                id={4}
                src={AreaMockup}
                alt="AREA"
                description="projects.1.description"
                technologies="NestJS, ReactJS, React Native, TypeScript"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
