import React from "react";
import Work from "../components/Work";
import { projects } from "../components/projects";

const WorkList = () => {
  const projectsArray = projects;
  return (
    <section className="px-4 md:px-0 pt-20 md:pt-28 container mx-auto grid md:grid-cols-3 gap-8">
      {projectsArray.map((project) => (
        <Work project={project} key={project.id} />
      ))}
    </section>
  );
};

export default WorkList;
