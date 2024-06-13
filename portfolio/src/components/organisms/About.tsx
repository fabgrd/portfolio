import React from 'react';
import Image from 'next/image';
import ProfilePicture from '@/assets/about/test2.png';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import Timeline from '../molecules/Timeline';

const About = () => {
  const { t } = useTranslation();

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light flex items-center" id='about'>
        <div className="container mx-auto p-8 flex flex-col justify-center">
          <header>
            <div>
              <Parallax translateX={[-10, 10]}>
                <motion.h1
                  className="relative text-giant font-thin -z-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {t("about.header")}...
                </motion.h1>
              </Parallax>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8 md:mt-0">
            <div className="p-4 flex justify-center md:justify-start">
              <Parallax translateY={[20, -20]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="rounded-lg shadow-lg h-auto filter grayscale opacity-100 z-10"
                  />
                </motion.div>
              </Parallax>
            </div>
            <div className="p-4 -ml-0 md:-ml-16 md:-mt-10 flex justify-center md:justify-start">
              <Parallax translateY={[-10, 10]}>
                <Timeline />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default About;
