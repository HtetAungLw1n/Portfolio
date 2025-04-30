import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-20">
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
    </section>
  );
};

export default ProjectList;
