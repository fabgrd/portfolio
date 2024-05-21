"use client";
import { useEffect } from "react";
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import ShadMockup from "@/assets/projects/Shad.png";
import { motion } from "framer-motion";

const Shad = () => {
  useEffect(() => {
    console.log(document.getElementById('ShadSection'));
  }, []);

  return (
    <div className="h-full flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-black-950 to-black-950" id="Shad">
      <motion.div
        className="relative w-1/2 h-auto flex justify-center items-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <Image
          src={ShadMockup}
          alt="Mood Production"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-start text-left p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Votre Titre</h1>
        <p className="text-lg mb-8 max-w-2xl text-white">Votre description ici. Ajoutez des informations pertinentes qui décrivent le contenu ou le but de cette section.</p>
      </motion.div>
    </div>
  );
}

export default Shad;