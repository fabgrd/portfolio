'use client'
import React from "react";
import Spline from '@splinetool/react-spline';

const App: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Spline scene="https://prod.spline.design/Dbs30PNeBmDKMOXl/scene.splinecode" />
    </div>
  );
};

export default App;
