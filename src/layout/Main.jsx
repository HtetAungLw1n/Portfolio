import React from "react";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <section className="bg-white-smoke text-jet">
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Main;
