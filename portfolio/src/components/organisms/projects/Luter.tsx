import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LuterMockup from "@/assets/projects/Luter.png";

const ShadSection = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-black to-black" id="Shad">
      <motion.div
        className="flex flex-col justify-center items-start text-left p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Votre Titre</h1>
        <p className="text-lg mb-8 max-w-2xl text-white">Votre description ici. Ajoutez des informations pertinentes qui décrivent le contenu ou le but de cette section.</p>
      </motion.div>
      <motion.div
        className="relative w-1/2 h-auto flex justify-center items-center p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <Image
          src={LuterMockup}
          alt="Mood Production"
          width={1000}
          height={1000}
          className=""
        />
      </motion.div>
    </div>
  );
}

export default ShadSection;
