import React from "react";

const Hero = () => {
  return (
    <section className=" h-[40vh] md:h-[100vh] container mx-auto">
      <div className="h-full flex flex-col justify-center items-center gap-8 md:gap-24 text-center md:text-start md:items-start">
        <div className="text-2xl font-medium leading-8 md:text-5xl md:leading-16 tracking-normal md:tracking-wide md:mt-20">
          <div>Bridging Design and Development</div>
          <div>For Your Business Needs.</div>
        </div>
        <div className="text-xs text-balance md:text-pretty md:text-xl md:float-right md:flex">
          <div className="hidden md:block md:w-[45%] cursor-pointer">
            <div className="bg-mblue text-white-smoke px-4 py-3 w-max rounded-full">
              Download My CV.
            </div>
          </div>
          <div className="md:w-[50%] leading-5 md:leading-9">
            My name is Htet Aung Lwin. I'm from Yangon. I specialize in
            front-end development with{" "}
            <span className="underline decoration-wavy decoration-1 md:decoration-2 md:underline-offset-2 decoration-mblue">
              React.
            </span>{" "}
            <span className="md:inline hidden">
              I thrive in agile environments where clean code, collaboration,
              and innovation fuel business success.
            </span>
            Ability to collaborate effectively with designers and engineers.f
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
