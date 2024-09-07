import React from "react";
import ContactForm from "../components/contactForm";
const Contact = () => {
  return (
    <div className="bg-slate-200 flex flex-col py-16 items-center justify-center w-full">
      <h1 className="uppercase font-bold text-primary tracking-wider text-2xl lg:text-3xl">
        Get in Touch !
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
