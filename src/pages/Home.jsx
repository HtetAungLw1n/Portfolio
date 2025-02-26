import React from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <div className="z-10">
      <Hero />
      <Works />
      <TechStack />
    </div>
  );
};

export default Home;
