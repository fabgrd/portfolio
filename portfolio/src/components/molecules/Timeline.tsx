import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles } from "react-icons/hi2";
import { useTranslation } from "next-i18next";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  location: string;
  icon: React.ReactNode;
}

const Timeline: React.FC = () => {
  const { t } = useTranslation();

  const events: TimelineEvent[] = [
    {
      id: 1,
      date: "2020-2025",
      title: `t("about.timeline.1")}`,
      location: "Epitech, Lyon 🇫🇷",
      icon: <HiSparkles />,
    },
    {
      id: 1,
      date: "2023-2024",
      title: "Business et génie logiciel",
      location: "Feng Chia University, Taïwan 🇹🇼",
      icon: <HiSparkles />,
    },
  ];

  return (
    <div className="container mx-auto px-4 font-Apfel">
      <div className="relative wrap overflow-hidden p-10 h-full flex flex-col">
        <div
          className="border border-primary border-4 absolute h-full rounded-full"
        ></div>
        {events.map((event) => (
          <TimelineItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

interface TimelineItemProps {
  event: TimelineEvent;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`my-8 flex justify-between items-center`}
    >
      <div className="z-20 absolute bg-primary-light shadow-xl w-14 h-14 rounded-full left-4">
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", color: "#000000" }}>
          {event.icon}
        </div>
      </div>
      <div className="px-16 py-6 rounded-lg shadow-xl">
        <h4 className="mb-3 font-light text-primary-light text-md">
          {event.date}
        </h4>
        <h4 className="mb-3 font-light text-primary-light text-md">
          {event.location}
        </h4>
        <h3 className="mb-2 font-medium text-primary text-2xl">
          {event.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default Timeline;
