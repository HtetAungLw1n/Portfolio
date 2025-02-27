import React from "react";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="z-10">
      <Hero />
      <SelectedWorks />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Home;
