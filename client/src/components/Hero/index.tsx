"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Kalnia } from "next/font/google";
import Image from "next/image";
import { heroCars } from "./utils";

const kalnia = Kalnia({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroCars.length);
    }, 8000); // Change car every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[calc(100vh-72px)] mt-[72px] bg-[#252525] overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between h-full p-10">
        {/* Left Side */}
        <div className="w-full h-full flex-1 lg:flex-auto">
          <HeroHeader car={heroCars[index]} />
          <HeroText car={heroCars[index]} />
        </div>

        {/* Right Side */}
        <div className="w-full h-full relative">
          <HeroColorBox car={heroCars[index]} />
          <HeroImage car={heroCars[index]} />
        </div>
      </div>
    </section>
  );
}

const HeroHeader = ({ car }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.h2
        key={car.name}
        className={`text-[40px] text-center lg:text-left -mt-5 block lg:block lg:text-[128px] leading-none drop-shadow-2xl ${kalnia.className}`} // Ensuring lg:block
        style={{ color: car.color }}
        initial={{ y: "-100%", opacity: 0 }} // Start from the top
        animate={{ y: 0, opacity: 1 }} // Move to normal position
        exit={{ y: "-100%", opacity: 0 }} // Exit upwards
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {car.name} EVENTS
      </motion.h2>
    </AnimatePresence>
  );
};


const HeroText = ({ car }) => {
  return (
    <p className="text-sm lg:text-xl text-white lg:pr-40 my-5 text-center block lg:text-left">
      {car.description}
    </p>
  );
};

const HeroImage = ({ car }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={car.img}
        className="absolute bottom-0 left-1/2 lg:left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%] lg:w-[85%] max-w-[900px]"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-50%", opacity: 1 }}
        exit={{ x: "50vw", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={car.img}
          alt={car.name}
          width={600}
          height={300}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </AnimatePresence>
  );
};

const HeroColorBox = ({ car }) => {
  return (
    <motion.div
      className="text-white text-opacity-70 w-full h-full float-right text-[80px] md:text-[110px] px-8 relative flex items-center justify-center"
      animate={{ backgroundColor: car.color }} // No re-mount, smooth transition
      transition={{ duration: 1, ease: "easeInOut" }} // Gradual transition
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={car.name}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "-70%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          {car.name}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
