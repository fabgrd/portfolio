import { useTranslation } from "@/app/PortfolioClient";
import LuterMockup from '@/assets/projects/Luter.png';
import MontgomeryMockup from '@/assets/projects/Montgomery.png';
import NftxtlMockup from '@/assets/projects/Nftxtl.png';
import ShadMockup from '@/assets/projects/Shad.png';
import ProjectCard from '@/components/molecules/ProjectCard';
import { useResponsive } from '@/hooks/useResponsive';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { isDesktop } = useResponsive();
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {isDesktop ? (
        <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-dark text-primary-light p-8" id="projects" ref={containerRef}>
          <div className="container mx-auto p-8 flex flex-col justify-center">
            <ParallaxProvider>
              <Parallax translateX={[-10, 10]}>
                <motion.h1
                  className="text-4xl whitespace-nowrap text font-medium -z-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {t("projects.header")}
                </motion.h1>
              </Parallax>
            </ParallaxProvider>
            <ProjectCard
              id={1}
              src={ShadMockup}
              alt="Shad"
              description="projects.1.description"
              technologies="React Native, Redux RTK + RTK Query, MongoDB, NodeJS, TypeScript, Tailwind, Docker, Expo Go Managed CLI"
            />
            <ProjectCard
              id={2}
              src={LuterMockup}
              alt="Luter"
              description="projects.2.description"
              technologies="ReactJS, ThreeJS, Stripe, TypeScript, Redux, Tailwind, Docker, Redux RTK + RTK Query"
            />
            <ProjectCard
              id={3}
              src={NftxtlMockup}
              alt="NFTXTL"
              description="projects.3.description"
              technologies="NextJS, ReactJS, Stripe, Sanity, CSS, TypeScript, Taquito, Redux"
            />
            <ProjectCard
              id={4}
              src={MontgomeryMockup}
              alt="The Montgomery Diaries"
              description="projects.4.description"
              technologies="NextJS, ReactJS, TypeScript, Tailwind, Vercel"
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
                technologies="ThreeJS, Stripe, ReactJS, TypeScript, Redux, Tailwind"
              />
              <ProjectCard
                id={3}
                src={NftxtlMockup}
                alt="NFTXTL"
                description="projects.3.description"
                technologies="Stripe, Sanity, ReactJS, TypeScript, Redux"
              />
              <ProjectCard
                id={4}
                src={MontgomeryMockup}
                alt="The Montgomery Diaries"
                description="projects.4.description"
                technologies="ReactJS, TypeScript, Vercel"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
