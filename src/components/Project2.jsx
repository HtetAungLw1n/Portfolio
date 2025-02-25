import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiPhpLine, RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiXampp } from "react-icons/si";

const Project2 = () => {
  return (
    <motion.section
      className="bg-gray-200 w-full rounded-lg p-4 h-max md:mt-[70%]"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-xl text-center uppercase font-semibold md:text-3xl">
        Mini Soical Media
      </div>
      <div className="rounded-md overflow-hidden my-4">
        <img
          src="../../images/minisocialmedia.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div>
        <div className="text-sm text-neutral-600 leading-6 md:text-lg">
          PHP နဲ့ MySql သုံးထား တဲ့ Mini Social Media Website.
        </div>
        <div className="flex gap-4 mt-4 text-base md:text-lg md:mt-6">
          <Link
            to={"https://github.com/HtetAungLw1n/mini-social-media.git"}
            target="_blank"
            className="flex items-center gap-2 px-4 py-0.5 bg-mblue rounded  text-white-smoke"
          >
            <FaGithub />
            Github
          </Link>
        </div>
        <div className="tech text-sm flex gap-4 mt-4 md:text-lg">
          <div className="text-neutral-600 flex items-center gap-2">
            <RiPhpLine /> Php
          </div>
          <div className="text-neutral-600 flex items-center gap-2">
            <SiXampp />
            Xampp
          </div>
          <div className="text-neutral-600 flex items-center gap-2">
            <RiTailwindCssFill />
            Tailwind
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project2;
