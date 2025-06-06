import React from "react";
import { motion } from "framer-motion";
import { LuBadgeCheck } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ footerText }) => {
  return (
    <section>
      <div
        id="#contact"
        className="w-full bg-mblue text-white-smoke text-3xl md:text-6xl  py-10 md:py-14 flex justify-center items-center gap-4 md:gap-8"
      >
        <span>{footerText ? footerText : "Let's Work Together"}</span>
        <LuBadgeCheck className="md:text-7xl" />
      </div>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden md:block">Socials</div>
          <div className="flex gap-4 md:text-2xl md:mt-4">
            <Link
              to={"https://www.linkedin.com/in/htet-aung-lwin-193707311/"}
              target="_blank"
              className="hover:text-mblue"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={"https://github.com/HtetAungLw1n"}
              target="_blank"
              className="hover:text-mblue"
            >
              <FaGithub />
            </Link>
            <Link
              to={"https://www.facebook.com/share/14rxAHjx9z9/?mibextid=wwXIfr"}
              target="_blank"
              className="hover:text-mblue"
            >
              <FaFacebook />
            </Link>
            <Link
              to={
                "https://www.instagram.com/stormhurri?igsh=MWF4c3A3NWU5NGI4OQ%3D%3D&utm_source=qr"
              }
              target="_blank"
              className="hover:text-mblue"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.threads.net/@stormhurri?igshid=NTc4MTIwNjQ2YQ=="}
              target="_blank"
              className="hover:text-mblue"
            >
              <FaThreads />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>Navigation</div>
          <div className="flex flex-col mt-2">
            <Link to={"/works"} className="hover:text-mblue">
              works
            </Link>
            <Link to={"/about-me"} className="hover:text-mblue">
              about me
            </Link>
            <Link to={"/contact"} className="hover:text-mblue">
              contact
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div>"Research / Document / Design / Develop / Deploy"</div>
          Htet Aung Lwin @ 2025
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
