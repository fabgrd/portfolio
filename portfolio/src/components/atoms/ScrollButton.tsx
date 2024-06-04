import React from 'react';
import { motion } from 'framer-motion';

interface ScrollButtonProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <div className="absolute xs:bottom-20 md:bottom-20 flex justify-center items-center">
      <div
        onClick={onClick}
        className="w-[35px] h-[64px] rounded-3xl border-4 border-primary-light border-secondary flex justify-center items-center cursor-pointer xs:hidden md:flex"
      >
        <motion.div
          animate={{
            y: [-15, 20, -15],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            stiffness: 100,
          }}
          className="w-3 h-3 rounded-full bg-primary-light mb-1"
        />
      </div>
    </div>
  );
};

export default ScrollButton;
