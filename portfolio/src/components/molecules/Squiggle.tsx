import React, { useEffect } from 'react';

const SquiggleSVG: React.FC = () => {
  useEffect(() => {
    const svg: SVGSVGElement | null = document.querySelector('svg.squiggle');
    if (!svg) return;

    const path: SVGPathElement | null = svg.querySelector('path');
    if (!path) return;

    const scroll = () => {
      const distance = window.scrollY;
      const totalDistance = document.body.scrollHeight - window.innerHeight;

      const speedFactor = 1.6;

      const percentage = (distance / totalDistance) * speedFactor;

      const adjustedPercentage = Math.min(Math.max(percentage, 0), 1);

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength * (1 - adjustedPercentage)}`;
    };

    scroll();
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      opacity="1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 -z-10 squiggle block"
    >
      <path d="M-65.5003 -395.5C-62.6785 -341.515 -165.352 134.011 -65.5002 151C58.7613 172.142 303.5 256.099 303.5 334C303.5 459 22.4786 432.642 88.5001 620C162.5 830 524.775 814.426 674.5 649.5C773 541 767 360 544.5 408C291.456 462.589 165.5 978.5 444 920C722.5 861.5 405.459 1126.99 743.5 1081.5C1096.5 1034 1369.5 870 1478 1013C1561.42 1122.95 1496.5 1281 1388 1373.5C1218.73 1517.81 905.542 1397.17 998 1291.5C1075 1203.5 1472.03 1355.21 1348 1593.5C1221 1837.5 971.5 1519.5 743.5 1840.5C391.707 2335.79 73 1845.5 -62.5 2174.5C-170.9 2437.7 383.5 2757.83 563 2813.5"
        stroke="rgba(0, 0, 0, 1)"
        strokeWidth="40"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SquiggleSVG;
