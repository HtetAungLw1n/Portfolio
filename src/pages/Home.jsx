import React from "react";
import Hero from "../components/Hero";
import Works from "../components/Works";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="z-10">
      <Hero />
      <Works />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Home;
