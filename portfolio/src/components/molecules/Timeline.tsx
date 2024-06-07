import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
import Image , { StaticImageData } from 'next/image';
import LogoEpitech from '@/assets/about/logo-epitech.png';
import LogoFengchia from '@/assets/about/logo-fengchia.png';
import LogoWavone from '@/assets/about/logo-wavone.png';
import LogoFreelance from '@/assets/about/logo-freelance.png';
import TimelineItem from '@/components/atoms/TimelineItem';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  location: string;
  icon: StaticImageData; 
}

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  const events: TimelineEvent[] = [
    {
      id: 1,
      date: "juil. 2021 - oct. 2021",
      title: `${t("about.timeline.3.title")}`, 
      location: `${t("about.timeline.3.location")} 🇨🇭`,
      icon: LogoWavone,
    },
    {
      id: 2,
      date: "oct. 2022 - juin 2023",
      title: `${t("about.timeline.4.title")}`, 
      location: `${t("about.timeline.4.location")} 🌎`,
      icon: LogoFreelance,
    },
    {
      id: 3,
      date: "2023-2024",
      title: `${t("about.timeline.2.title")}`, 
      location: `${t("about.timeline.2.location")} 🇹🇼`,
      icon: LogoFengchia,
    },
    {
      id: 4,
      date: "2020-2025",
      title: `${t("about.timeline.1.title")}`, 
      location: `${t("about.timeline.1.location")} 🇫🇷`,
      icon: LogoEpitech,
    },
  ];

  return (
    <div className="container mx-auto font-Apfel">
      <div className="relative wrap overflow-hidden p-10 h-full flex flex-col">
        <div
          className="absolute border border-white border-4 h-full rounded-lg"
        ></div>
        {events.map((event) => (
          <TimelineItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
