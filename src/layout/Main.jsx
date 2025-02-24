import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <section className="bg-white-smoke text-jet">
      <Navbar />
      <Home />
    </section>
  );
};

export default Main;
