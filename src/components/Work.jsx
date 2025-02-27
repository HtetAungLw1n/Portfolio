import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Work = ({ project }) => {
  return (
    <section>
      <motion.section
        className="bg-zinc-200 w-full rounded-lg p-4 md:min-h-[55vh] h-max mb-8 flex flex-col justify-between"
        key={project.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: project.id === 1 ? 0 : project.id * 0.2,
        }}
      >
        <div className="upper">
          <div className="text-xl text-center uppercase font-semibold md:text-3xl">
            {project.name}
          </div>
          <div className="rounded-md overflow-hidden my-4">
            <img src={project.image} alt="" className="object-cover" />
          </div>
          <div>
            <div className="text-sm text-neutral-600 leading-6 md:text-lg line-clamp-3">
              {project.description}
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="flex gap-4 mt-4 text-base md:text-lg md:mt-6">
            {project.demolink ? (
              <Link
                to={project.demolink}
                target="_blank"
                className="rounded px-4 py-0.5 flex items-center gap-2 text-mblue border-2 border-mblue hover:bg-mblue hover:text-white-smoke transition duration-200 ease-in-out"
              >
                Project demo
              </Link>
            ) : (
              ""
            )}

            <Link
              to={project.githublink}
              target="_blank"
              className="flex items-center gap-2 px-4 py-0.5 bg-mblue rounded  text-white-smoke"
            >
              Github
            </Link>
          </div>
          <div className="tech text-sm flex gap-4 mt-4 md:text-lg">
            {project.tech.map((item, index) => (
              <div
                className="text-neutral-600 flex items-center gap-2"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Work;
