import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Project1 = () => {
  return (
    <motion.section
      className="bg-zinc-200 w-full rounded-lg p-4 h-max"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="text-xl text-center uppercase font-semibold md:text-3xl">
        Randomly
      </div>
      <div className="rounded-md overflow-hidden my-4">
        <img src="../../images/randomly.png" alt="" className="object-cover" />
      </div>
      <div>
        <div className="text-sm text-neutral-600 leading-6 md:text-lg">
          React.js နဲ့ Node.js သုံးပြီး Full-stack ဆောက်ထားတဲ့အပြင် deployment
          ပါလုပ်ထားတဲ့ News Website.
        </div>
        <div className="flex gap-4 mt-4 text-base md:text-lg md:mt-6">
          <Link
            to={"https://randomly.netlify.app/"}
            target="_blank"
            className="rounded px-4 py-0.5 flex items-center gap-2 text-mblue border-2 border-mblue hover:bg-mblue hover:text-white-smoke transition duration-200 ease-in-out"
          >
            Project demo
          </Link>
          <Link
            to={"https://github.com/HtetAungLw1n/Randomly.git"}
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
            <FaNodeJs />
            Node.js
          </div>
          <div className="text-neutral-600  flex items-center gap-2">
            <RiTailwindCssFill />
            Tailwind
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project1;
