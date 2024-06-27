'use client'
import React from "react";
import "../translations"
import Navbar from "../components/organisms/Navbar";
import HeroBanner from "../components/organisms/HeroBanner";
import Projects from "../components/organisms/Projects";
import About from "../components/organisms/About";
import Process from "../components/organisms/Process";
import Footer from "../components/organisms/Footer";
import YouTubeSection from "../components/organisms/YoutubeSection";
import Contact from "@/components/organisms/Contact";
import { SpeedInsights } from "@vercel/speed-insights/next"

const App: React.FC = () => {
  return (
    <div className="z-10 bg-primary-dark">
      <Navbar />
      <HeroBanner />
      <About />
      <Process />
      <Projects />
      <YouTubeSection />
      <Contact />
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
