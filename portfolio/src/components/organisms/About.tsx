'use client';
import React from 'react';
import Image from 'next/image';
import ProfilePicture from '@/assets/about/test2.png';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import Timeline from '../molecules/Timeline';
import ScrollButton from '../atoms/ScrollButton';

const About = () => {
  const { t } = useTranslation();

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light" id='about'>
        <div className="container mx-auto p-8">
          <header>
            <div>
              <Parallax translateX={[-10, 10]}>
                <motion.h1
                  className="relative text-4xl font-medium -z-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {t("about.header")}...
                </motion.h1>
              </Parallax>
            </div>
          </header>
          <div className="grid grid-cols-2 items-center">
            <div className="col-span-1 p-4">
              <Parallax translateY={[20, -20]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="rounded-lg shadow-lg h-auto filter grayscale opacity-100 z-10 mt-10"
                  />
                </motion.div>
              </Parallax>
            </div>
            <div className="col-span-1 -ml-16 -mt-10 p-4">
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
