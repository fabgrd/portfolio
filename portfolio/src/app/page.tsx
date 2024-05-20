'use client'
import React from "react";
import Navbar from "../components/atoms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Temp from "../components/organisms/TempSection";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <HeroBanner />
      <Temp />
    </div>
  );
};

export default App;
