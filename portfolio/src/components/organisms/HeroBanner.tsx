import React from "react";
import Spline from '@splinetool/react-spline';
import ScrollButton from '../atoms/ScrollButton';

const HeroBanner = () => {
  const handleScrollClick = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("about");
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen flex justify-center items-center w-full ">
      <Spline scene="https://prod.spline.design/Dbs30PNeBmDKMOXl/scene.splinecode" />
      <ScrollButton onClick={handleScrollClick} />
    </div>
  );
};

export default HeroBanner;
