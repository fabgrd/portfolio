import { useTranslation } from "@/app/PortfolioClient";
import GifDevelopment from '@/assets/about/html.gif';
import GifConception from '@/assets/about/paint-palette.gif';
import GifDeployment from '@/assets/about/rocket.gif';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';

interface CardProps {
  gif: StaticImageData;
  title: string;
  description: string;
  index: number;
}

const Card: React.FC<CardProps> = ({ gif, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const ROTATION_RANGE = 25;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * (ROTATION_RANGE / width);
    const mouseY = (e.clientY - rect.top) * (ROTATION_RANGE / height);

    const rX = (mouseY - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      key={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="bg-white p-6 rounded-lg shadow-lg xs:mt-4 md:-m-6 w-full md:w-1/3 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-2">
        <Image src={gif} unoptimized alt={title} className="w-16 h-16 mr-2" />
        <h3 className="text-xl md:text-xl font-bold">{title}</h3>
      </div>
      <p className="text-base">{description}</p>
    </motion.div>
  );
};

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
        <Card
          key={index}
          gif={card.gif}
          title={card.title}
          description={card.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardSection;
