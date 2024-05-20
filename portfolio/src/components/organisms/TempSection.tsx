"use client";
import { useEffect } from "react";

const Temp = () => {
  useEffect(() => {
    console.log(document.getElementById('tempSection'));
  }, []);
  
  return (
    <div
      className="h-screen flex justify-center items-center"
      id="tempSection"
    >
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}

export default Temp;