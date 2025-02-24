import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Works from "../components/Works";

const Main = () => {
  return (
    <section className="bg-white-smoke text-jet">
      <Navbar />
      <Home />
      <Works />
    </section>
  );
};

export default Main;
