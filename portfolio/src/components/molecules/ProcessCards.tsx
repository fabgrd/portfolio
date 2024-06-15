import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from "next-i18next";
import GifConception from '@/assets/about/paint-palette.gif';
import GifDevelopment from '@/assets/about/html.gif';
import GifDeployment from '@/assets/about/rocket.gif';

const CardSection = () => {
  const { t } = useTranslation();

  const cards = [
    {
      gif: GifConception,
      title: t("process.cards.conception.title"),
      description: t("process.cards.conception.description"),
    },
    {
      gif: GifDevelopment,
      title: t("process.cards.development.title"),
      description: t("process.cards.development.description"),
    },
    {
      gif: GifDeployment,
      title: t("process.cards.deployment.title"),
      description: t("process.cards.deployment.description"),
    }
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-between text-primary-dark m-6 mt-10">
      {cards.map((card, index) => (
        <motion.div 
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg xs:mt-4 md:-m-6 w-full md:w-1/3 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <div className="flex items-center mb-2">
            <Image src={card.gif} alt={card.title} className="w-16 h-16 mr-2" />
            <h3 className="text-xl md:text-2xl font-bold">{card.title}</h3>
          </div>
          <p className="text-base">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default CardSection;
