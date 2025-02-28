import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i7rzt8a", "template_ckj3xee", form.current, {
        publicKey: "GrOABvXAHE4H7e2zf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.section
      className="px-4 py-20 pb-16 container mx-auto md:w-[30%]"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-zinc-200 rounded flex flex-col p-4"
      >
        <label className="mb-2 md:text-2xl">Your Name</label>
        <input
          type="text"
          name="user_name"
          className="outline-none border-2 border-zinc-500 rounded mb-4 px-2 py-1 focus:border-zinc-700"
          required
        />
        <label className="mb-2 md:text-2xl">Email</label>
        <input
          type="email"
          name="user_email"
          className="outline-none border-2 border-zinc-500 rounded mb-4 px-2 py-1 focus:border-zinc-700"
          required
        />
        <label className="mb-2 md:text-2xl">Message</label>
        <textarea
          rows={5}
          name="message"
          className="outline-none border-2 border-zinc-500 rounded mb-4 px-2 py-1 focus:border-zinc-700"
          required
        />
        <input
          type="submit"
          value="Sent"
          className="bg-mblue text-white-smoke rounded py-2 md:text-2xl cursor-pointer outline-none"
        />
      </form>
    </motion.section>
  );
};

export default Email;
