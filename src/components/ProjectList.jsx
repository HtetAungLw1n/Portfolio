import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-20">
      <Project1 />
      <Project2 />
    </section>
  );
};

export default ProjectList;
