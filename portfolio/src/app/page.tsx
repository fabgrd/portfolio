'use client'
import React from "react";
import "../translations"
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Projects from "../components/organisms/Projects";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <Projects />
    </div>
  );
};

export default App;
