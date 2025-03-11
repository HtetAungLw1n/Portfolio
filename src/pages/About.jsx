import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-4 py-20 container mx-auto">
      {/* intro two cards */}
      <motion.div
        className="bg-zinc-200 p-4 md:py-8 rounded mb-8 w-2/3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-xl md:text-4xl uppercase mb-4">Introduction</div>
        <div className="text-sm md:text-lg text-balance">
          My name is Htet Aung Lwin. I'm from Yangon. I'm currently working as
          Front-end Developer.
        </div>
      </motion.div>

      <motion.div
        className="flex w-full justify-end"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-zinc-200 p-4 md:py-8 rounded mb-14 w-2/3">
          <div className="text-xl md:text-4xl mb-4">Why Front-end?</div>
          <div className="text-sm md:text-lg text-pretty">
            Because I have a good background of{" "}
            <span className="text-mblue font-semibold"> Graphic Design</span>{" "}
            before changing career to Web-Developing.
          </div>
        </div>
      </motion.div>
      {/* intro two cards */}

      <motion.div
        className="text-xl md:text-4xl mb-4 uppercase text-center md:text-start"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        My journey
      </motion.div>

      <motion.div
        className="bg-zinc-200 p-4 md:py-8 rounded mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="text-xs md:text-sm text-neutral-600">In 2019</div>
        <div className="text-lg md:text-2xl mb-4">
          My first job was{" "}
          <span className="bg-gradient-to-tr from-[#1041f0] to-[#4f9105] bg-clip-text text-transparent">
            video translator
          </span>{" "}
          when I was 17 years old.
        </div>
        <ul className="text-sm md:text-lg text-neutral-600 text-pretty mt-2 list-disc pl-6">
          <li> I work in two anime fan-sub pages with a project per paid.</li>
          <li>
            {" "}
            After that I went into{" "}
            <Link to={""} className="font-semibold underline">
              Graphic design class
            </Link>{" "}
            to sharpen my vision.
          </li>
          <li>
            {" "}
            That's how I can use tools like Photoshop, Lightroom, Illustrator,
            and Kinemaster.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-zinc-200 p-4 md:py-8 rounded mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-xs md:text-sm text-neutral-600">In 2020</div>
        <div className="text-lg md:text-2xl text-pretty mb-4">
          I work as a{" "}
          <span className="underline bg-gradient-to-tr from-[#1041f0] to-[#4f9105] bg-clip-text text-transparent">
            content creater
          </span>{" "}
          in{" "}
          <Link
            to={"https://www.facebook.com/share/1BLM5pznXS/?mibextid=wwXIfr"}
            target="_blank"
            className="underline"
          >
            ACE-Gaming
          </Link>
          .
        </div>
        <ul className="text-sm md:text-lg text-neutral-600 text-pretty mt-2 list-disc pl-6">
          <li>
            Founder and manager of gaming content pages with over{" "}
            <span className="font-semibold"> 990K followers</span>.
          </li>
          <li>
            Created engaging gaming video content, including gameplay
            highlights, tutorials, and reviews.
          </li>
          <li>
            Developed non-video content such as blogs, infographics, and social
            media posts to educate and entertain the audience.
          </li>
          <li>
            Managed content strategy, audience engagement, and community
            building through interactive posts, live streaming, and discussions.
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="bg-zinc-200 p-4 md:py-8 rounded mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-xs md:text-sm text-neutral-600">In 2021</div>
        <div className="text-lg md:text-2xl text-pretty mb-4">
          I become{" "}
          <span className="underline bg-gradient-to-tr from-[#1041f0] to-[#4f9105] bg-clip-text text-transparent">
            Talent star
          </span>{" "}
          at Tier One Entertainment{" "}
        </div>
        <ul className="text-sm md:text-lg text-neutral-600 text-pretty mt-2 list-disc pl-6">
          <li>
            Represented as an official talent star as content creator under Tier
            One Entertainment, a leading gaming and esports talent agency.
          </li>
          <li>
            Collaborated with fellow creators, brands, and esports organizations
            for promotional campaigns and events.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-zinc-200 p-4 md:py-8 rounded mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="text-xs md:text-sm text-neutral-600">
          After COVID-19 in 2022
        </div>
        <div className="text-lg md:text-2xl text-pretty mb-4">
          I learn the{" "}
          <span className="underline bg-gradient-to-tr from-[#1041f0] to-[#4f9105] bg-clip-text text-transparent">
            Japanese Language
          </span>
          .
        </div>
        <ul className="text-sm md:text-lg text-neutral-600 text-balance mt-2 list-disc pl-6">
          <li>
            {" "}
            Already passed{" "}
            <Link to={""} className="underline font-semibold">
              JLPT N3
            </Link>
            .
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
