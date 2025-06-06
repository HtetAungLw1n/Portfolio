import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import image from "../assets/NoteSpace.png";
import { DiDjango } from "react-icons/di";

const Project1 = () => {
  return (
    <motion.section
      className="bg-zinc-200 w-full rounded-lg p-4 h-max"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-xl text-center uppercase font-semibold md:text-3xl">
        NoteSpace
      </div>
      <div className="rounded-md overflow-hidden my-4">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div>
        <div className="text-sm text-neutral-600 leading-6 md:text-lg">
          NoteSpace is an AI-powered web application that redefines how users
          take, organize, and share notes.
        </div>
        <div className="flex gap-4 mt-4 text-base md:text-lg md:mt-6">
          <Link
            to={
              "https://github.com/One-Project-One-Week/NoteSpace-Frontend.git"
            }
            target="_blank"
            className="flex items-center gap-2 px-4 py-0.5 bg-mblue rounded  text-white-smoke"
          >
            <FaGithub />
            Github
          </Link>
        </div>
        <div className="tech text-sm flex gap-4 mt-4 md:text-lg">
          <div className="text-neutral-600 flex items-center gap-2">
            <FaReact /> React
          </div>
          <div className="text-neutral-600  flex items-center gap-2">
            <FaPython />
            Python
          </div>
          <div className="text-neutral-600  flex items-center gap-2">
            <RiTailwindCssFill />
            TailwindCSS
          </div>
          <div className="text-neutral-600  flex items-center gap-2">
            <DiDjango />
            Django
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project1;
