'use client'
import React from "react";
import "../translations"
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Shad from "../components/organisms/projects/Shad";
import Luter from "../components/organisms/projects/Luter";
import Projects from "../components/organisms/projects/Projects";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <Projects />
      {/* <Luter />
      <Shad /> */}
    </div>
  );
};

export default App;
