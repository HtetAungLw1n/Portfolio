import React from "react";
import ProjectList from "./ProjectList";
import { motion } from "framer-motion";

const SelectedWorks = () => {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        className="text-2xl text-center font-medium md:text-5xl tracking-normal md:tracking-wide mb-10 md:mb-20"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Selected Works
      </motion.div>
      <ProjectList />
    </section>
  );
};

export default SelectedWorks;
