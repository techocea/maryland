import React from "react";
import { TESTIMONIALS } from "@/utils/constants";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const TestimonialSection = () => {
  return (
    <main className="bg-secondary min-h-full py-20 sm:px-4 lg:px-10">
      <div className="flex flex-col items-center justify-center text-center lg:text-left gap-y-4 px-4 w-full">
        <div className="flex flex-col gap-y-4 text-center items-center justify-center">
          <h1 className="sub-heading">student testimonials</h1>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
            What our <span className="text-primary">students say</span> about
            Maryland Consultancy
          </h3>
        </div>
        <BentoGrid className="max-w-5xl mx-auto mt-10 lg:mt-12">
          {TESTIMONIALS.map((item, i) => (
            <BentoGridItem
              key={i}
              name={item.name}
              university={item.university}
              saying={item.saying}
              avatar={item.avatar}
              className={i === 3 || i === 5 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
};

export default TestimonialSection;
