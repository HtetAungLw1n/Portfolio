import React from "react";
import { motion } from "framer-motion";
import FramerMagnet from "./FramerMagnet";
import { GoDownload } from "react-icons/go";
import cv from "../assets/cv.pdf";

const Hero = () => {
  return (
    <section className="h-[40vh] md:h-[100vh] container mx-auto">
      <div className="h-full flex flex-col justify-center items-center gap-8 md:gap-20 text-center md:text-start md:items-start">
        <div className="text-xl font-medium leading-8 md:text-5xl md:leading-16 tracking-normal md:tracking-wide md:mt-20">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Delivering Web Development
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              For Your Business Needs.
            </motion.div>
          </div>
        </div>
        <motion.div
          className="text-xs text-balance md:text-pretty md:text-xl md:float-right md:flex md:items-center"
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <a
            href={cv}
            download="HtetAungLwin_CV_Web_Developer"
            className="hidden md:block md:w-[45%] cursor-pointer"
          >
            <FramerMagnet>
              <div>My CV</div>
              <div>
                <GoDownload className="text-2xl mt-4" />
              </div>
            </FramerMagnet>
          </a>
          <div className="md:w-[50%] leading-5 md:leading-9">
            My name is Htet Aung Lwin. I'm from Yangon. I specialize in
            web development with{" "}
            <span className="underline decoration-wavy decoration-1 underline-offset-4 md:decoration-2 md:underline-offset-8 decoration-mblue">
              React.
            </span>{" "}
            <span className="md:inline hidden">
              Additionaly I have experience in backend and database
              environments. Therefore I can collaborate effectively with
              designers and engineers.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
