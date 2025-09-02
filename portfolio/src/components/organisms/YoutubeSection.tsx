import { useTranslation } from "@/app/PortfolioClient";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const VideoSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 50);
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001
  });

  const { t } = useTranslation();

  return (
    <motion.section
      style={{ y: smoothY }}
      className="mb-48 md:container mx-auto px-4"
    >
      <div className="flex flex-col items-center my-5">
        <motion.h1 className="text-4xl font-medium text-primary-light">
          {t("epitech.title")}
        </motion.h1>
        <motion.p className="text-2xl text-center font-thin text-primary-light mt-8 mb-16">
          {t("epitech.description")}
        </motion.p>
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            className="w-full h-[450px] md:h-[600px]"
            src={"https://www.youtube.com/embed/JAu1T0ROn-A?si=b2P-xk2yxBX_zFvZ"}
            title="School projects video"
            allowFullScreen
            frameBorder="0"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
