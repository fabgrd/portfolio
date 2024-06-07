'use client'
import React from "react";
import "../translations"
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Projects from "../components/organisms/Projects";
import About from "../components/organisms/About";
import ThreeGifSection from "../components/organisms/ThreeGifSection";
import SquiggleSVG from "@/components/molecules/Squiggle";

const App: React.FC = () => {
  return (
    <div className="z-10">
      <Navbar />
      <HeroBanner />
      <SquiggleSVG />
      <About />
      <ThreeGifSection />
      <Projects />
    </div>
  );
};

export default App;
