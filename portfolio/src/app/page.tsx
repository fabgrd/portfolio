'use client'
import React from "react";
import "../translations"
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Projects from "../components/organisms/Projects";
import About from "../components/organisms/About";
import Process from "../components/organisms/Process";
import Footer from "../components/organisms/Footer";

const App: React.FC = () => {
  return (
    <div className="z-10">
      <Navbar />
      <HeroBanner />
      <About />
      <Process />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
