import "../../../app/globals.css";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ShadMockup from "@/assets/projects/Shad.png";
import LuterMockup from "@/assets/projects/Luter.png";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ProjectImageProps {
  id: number;
  src: StaticImageData;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ id, src, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section className="my-16 flex flex-col items-center">
      <div ref={ref} className="w-full">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <motion.h2
        style={{ y: smoothY }}
        className="mt-4 text-3xl font-bold text-center text-white"
      >{`#00${id}`}</motion.h2>
    </section>
  );
};

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Découvrez mes derniers projets, où j'ai mis en œuvre mes compétences en développement web et en design. Chaque projet présente des défis uniques et des solutions créatives.
        </p>
      </header>
      <main>
        <ProjectImage id={1} src={ShadMockup} alt="Mood Production Mockup" />
        <ProjectImage id={2} src={LuterMockup} alt="Luter Mockup" />
      </main>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-green-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
