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
      <div className="min-h-screen bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light" id='threegif'>
        <div className="container mx-auto p-8">
          <motion.div
            className="mt-8 p-6 bg-dark-gray rounded-lg shadow-lg h-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Parallax translateY={[-5, 5]}>
              <h2 className="text-3xl font-light italic mb-4 text-primary-light">
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