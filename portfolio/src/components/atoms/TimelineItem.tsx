import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from 'next/image';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  location: string;
  icon: StaticImageData;
}

interface TimelineItemProps {
  event: TimelineEvent;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={"flex justify-between items-center"}
    >
      <div className="z-20 absolute bg-white shadow-xl w-14 h-14 rounded-full left-4">
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", color: "#000000" }}>
          <Image src={event.icon} alt={event.title} width={40} unoptimized={true} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="pl-16 py-6 rounded-lg shadow-xl">
          <h4 className="mb-1 font-light text-primary-light text-md">
            {event.date}
          </h4>
          <h3 className="mb-1 font-medium text-primary text-2xl">
            {event.title}
          </h3>
          <h4 className="font-light text-primary-light text-md">
            {event.location}
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineItem;
