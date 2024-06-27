import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProfilePicture from '@/assets/about/pp.png';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import Timeline from '../molecules/Timeline';

const About = () => {
  const { t } = useTranslation();
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
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light flex items-center" id='about'>
          <div className="container mx-auto p-8 flex flex-col justify-center">
            <ParallaxProvider>
                <div>
                  <Parallax translateX={[-10, 10]}>
                    <motion.h1
                      className="text-4xl whitespace-nowrap text font-medium -z-10"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {t("about.header")}
                    </motion.h1>
                  </Parallax>
                </div>
              <div className="grid grid-cols-1 grid-cols-2 items-center mt-8 mt-0">
                <div className="p-4 flex justify-center justify-start">
                  <Parallax translateY={[20, -20]}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={ProfilePicture}
                        alt="Profile picture image"
                        className="rounded-lg shadow-lg h-auto filter grayscale opacity-100 z-10"
                      />
                    </motion.div>
                  </Parallax>
                </div>
                <div className="p-4 -ml-0 -ml-16 -mt-10 flex justify-center justify-start">
                  <Parallax translateY={[-10, 10]}>
                    <Timeline />
                  </Parallax>
                </div>
              </div>
            </ParallaxProvider>
          </div>
        </div>
      ) : (
        <>
          <div className="ml-min-h-screen text-primary-light">
            <motion.h1
              className="ml-10 text-5xl whitespace-nowrap font-medium -z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {t("about.header")}...
            </motion.h1>
            <div className="grid items-center mt-8">
              <div className="p-4">
                <Timeline />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
