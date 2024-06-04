'use client';
import React from 'react';
import Image from 'next/image';
import ProfilePicture from '@/assets/about/test2.png';
import Navbar from '@/components/atoms/Navbar';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import CardSection from '@/components/molecules/AboutCards';
import Timeline from '../molecules/Timeline';

const About = () => {
  const { t } = useTranslation();

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light" id='about'>
        <Navbar />
        <div className="container mx-auto p-8">
          <header>
            <div>
              <Parallax translateY={[-20, 20]}>
                <motion.h1
                  className="relative top-20 text-5xl font-thin -z-10"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  About me...
                </motion.h1>
              </Parallax>
            </div>
          </header>
          <div className="grid grid-cols-2 items-center">
            <div className="col-span-1 p-4">
              <Parallax translateY={[-20, 20]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={ProfilePicture}
                    alt="Profile Picture"
                    className="rounded-lg shadow-lg h-auto filter grayscale opacity-100 z-30"
                  />
                </motion.div>
              </Parallax>
            </div>
            <div className="col-span-1 -ml-16 p-4">
              <Parallax translateY={[10, -10]}>
                <Timeline />
              </Parallax>
            </div>
          </div>
          <motion.div
            className="mt-8 p-6 bg-dark-gray rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Parallax translateY={[-5, 5]}>
              <h2 className="text-4xl font-light italic mb-4 text-primary-light">
                "{t("about.title")}"
              </h2>
              <p className="text-lg mb-4 text-primary-light">
                {t("about.presentation")}
              </p>
            </Parallax>
            <CardSection />
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default About;
