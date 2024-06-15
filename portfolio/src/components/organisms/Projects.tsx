import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '@/components/molecules/ProjectCard';
import ShadMockup from '@/assets/projects/Shad.png';
import LuterMockup from '@/assets/projects/Luter.png';
import NftxtlMockup from '@/assets/projects/Nftxtl.png';
import AreaMockup from '@/assets/projects/Nftxtl.png';

const Projects: React.FC = () => {
  const [projectElements, setProjectElements] = useState<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousScrollTop = useRef<number>(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLDivElement>('.project-card');
    setProjectElements(Array.from(elements));
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-dark text-primary-light p-8"
      id="projects"
      ref={containerRef}
    >
      <main>
        <ProjectCard
          id={1}
          className="project-card"
          src={ShadMockup}
          alt="Shad"
          description="projects.1.description"
          technologies="React Native, Redux, MongoDB, NodeJS"
        />
        <ProjectCard
          id={2}
          className="project-card"
          src={LuterMockup}
          alt="Luter"
          description="projects.1.description"
          technologies="ReactJS, TypeScript, Redux, Tailwind"
        />
        <ProjectCard
          id={3}
          className="project-card"
          src={NftxtlMockup}
          alt="NFTXTL"
          description="projects.1.description"
          technologies=""
        />
        <ProjectCard
          id={4}
          className="project-card"
          src={AreaMockup}
          alt="AREA"
          description="projects.1.description"
          technologies="NestJS, ReactJS, React Native, TypeScript"
        />
      </main>
    </div>
  );
}

export default Projects;
