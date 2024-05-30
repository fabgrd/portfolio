import { motion, useScroll, useSpring } from "framer-motion";
import ProjectCard from "@/components/molecules/ProjectCard";
import ShadMockup from "@/assets/projects/Shad.png";
import LuterMockup from "@/assets/projects/Luter.png";
import NftxtlMockup from "@/assets/projects/Nftxtl.png";
import AreaMockup from "@/assets/projects/Nftxtl.png";
import MontgomeryMockup from "@/assets/projects/Nftxtl.png";


const Projects = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-dark text-primary-light p-8" id="projects">
      <main>
        <ProjectCard id={1} src={ShadMockup} alt="Shad" description="projects.1.description" technologies="React Native, Redux, MongoDB, NodeJS"/>
        <ProjectCard id={2} src={LuterMockup} alt="Luter" description="projects.1.description" technologies="ReactJS, TypeScript, Redux, Tailwind"/>
        <ProjectCard id={3} src={NftxtlMockup} alt="NFTXTL" description="projects.1.description" technologies=""/>
        <ProjectCard id={3} src={NftxtlMockup} alt="The Montgomery diaries" description="projects.1.description" technologies="NextJS, "/>
        <ProjectCard id={4} src={AreaMockup} alt="AREA" description="projects.1.description" technologies="NestJS, ReactJS, React Native, TypeScript"/>
      </main>
      <motion.div
        className="fixed bottom-[100px] left-0 right-0 h-[5px] bg-primary-light origin-center"
        style={{ scaleX }}
      />
    </div>
  );
}

export default Projects;
