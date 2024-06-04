'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from "next-i18next";
import GifConception from '@/assets/about/paint-palette.gif';
import GifDevelopment from '@/assets/about/html.gif';
import GifDeployment from '@/assets/about/rocket.gif';

const AboutCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      gif: GifConception,
      title: t("about.cards.conception.title"),
      description: t("about.cards.conception.description"),
    },
    {
      gif: GifDevelopment,
      title: t("about.cards.development.title"),
      description: t("about.cards.development.description"),
    },
    {
      gif: GifDeployment,
      title: t("about.cards.deployment.title"),
      description: t("about.cards.deployment.description"),
    }
  ];

  return (
    <div className="flex justify-between text-primary-dark">
      {cards.map((card, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg m-4 w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <div className="flex items-center mb-2">
            <Image src={card.gif} alt={card.title} className="w-8 h-8 mr-2" />
            <h3 className="text-2xl font-bold">{card.title}</h3>
          </div>
          <p className="text-base">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutCards;
