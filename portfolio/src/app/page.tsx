'use client'
import React from "react";
import "../translations"
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Projects from "../components/organisms/Projects";
import About from "../components/organisms/About";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <About />
      <Projects />
    </div>
  );
};

export default App;
