import React, { useRef } from "react";
import Email from "../components/Email";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section>
      <Email />
      <Footer footerText={"Get in touch"} />
    </section>
  );
};

export default Contact;
