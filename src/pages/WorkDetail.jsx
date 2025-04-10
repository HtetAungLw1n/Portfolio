import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../components/projects";

const WorkDetail = () => {
  //getting id from url
  const { id } = useParams();

  //get worklist from projects.js
  const worksList = projects;

  //turing into currentwork
  const currentWork = worksList.filter((work) =>
    Number(work.id) === Number(id) ? true : false
  );

  //array to obj for better handling
  const [currentWorkObj] = currentWork;

  return (
    <section className="px-4 md:px-0 pt-20 md:pt-28 container mx-auto">
      <h1>{currentWorkObj.name}</h1>
      <div className="h-72 overflow-hidden">
        {/* <img
          src={currentWorkObj.image}
          alt=""
          className="h-72 object-contain"
        /> */}
      </div>
    </section>
  );
};

export default WorkDetail;
