import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useTranslation } from "next-i18next";
import { motion } from 'framer-motion';
import CardSection from '../../components/molecules/ProcessCards';

const Process = () => {
  const { t } = useTranslation();

  return (
    <ParallaxProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000000] to-primary-dark text-primary-light" id='process'>
        <div className="container mx-auto">
          <motion.div
            className="p-6 bg-dark-gray rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Parallax translateY={[-5, 5]}>
              <h2 className="text-4xl font-light italic mb-4 text-primary-light text-center"
              dangerouslySetInnerHTML={{ __html: t("process.title") }}>
              </h2>
              <p className="text-lg mb-4 text-primary-light">
                {t("process.presentation")}
              </p>
            </Parallax>
            <CardSection />
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Process;