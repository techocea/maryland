import React from "react";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <main className="bg-secondary lg:py-16 sm:p-8 md:p-10 px-4 py-6 ">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-black capitalize text-center mb-10">get in touch</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default page;
