import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "next-i18next";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ProjectCardProps {
  id: number;
  src: StaticImageData;
  alt: string;
  description: string;
  technologies: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, src, alt, description, technologies, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 150);
  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 10,
    restDelta: 0.001
  });

  const { t } = useTranslation();

  return (
    <motion.section
      style={{ y: smoothY }}
      ref={ref}
      className={className}
    >
      <div className="flex flex-col items-center my-5">
        <motion.h1 className="text-2xl font-medium text-primary-light">{alt}</motion.h1>
        <motion.p className="text-2xl font-thin text-primary-light mt-8 mb-16">{t(description)}</motion.p>
        <Image
          src={src}
          alt={alt}
          className="flex rounded-lg shadow-lg"
          width={800}
        />
      </div>
      <motion.h2
        style={{ scrollSnapTypeY: smoothY }}
        className="text-3xl font-thin text-right text-primary-light mr-96"
      >{`#00${id}`}
      </motion.h2>
      <motion.h4 className="ml-96">
        {t("projects.technologies")}: {technologies}
      </motion.h4>
    </motion.section>
  );
};

export default ProjectCard;
