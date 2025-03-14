import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const FramerMagnet = ({ children }) => {
  const ref = useRef(null);
  const [positon, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = positon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className=" text-mblue ml-20  w-52 h-52 rounded-full flex flex-col items-center justify-center border-2 border-mblue hover:bg-mblue hover:text-white-smoke transition-colors duration-200 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default FramerMagnet;
