import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import design from "@/public/design.png";

const About = () => {
  return (
    <main className="bg-secondary lg:rounded-tl-[350px] min-h-screen py-20 lg:pl-28 lg:pr-10">
      <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-x-10 gap-y-16">
        <div className="flex-1 flex items-center justify-center relative sm:max-w-md w-full lg:max-w-[540px] z-10">
          <Image
            src="/about-image.png"
            width={402}
            height={467}
            className="w-2/3"
            alt="About Image"
          />
          <Image
            src={design as StaticImageData}
            width={186}
            height={188}
            className="hidden md:flex absolute right-20 lg:right-10 -bottom-10 z-[-10] w-40 h-40"
            alt="design"
          />
        </div>

        <div className="flex-1 flex flex-col text-center lg:text-left gap-y-4 px-4 sm:max-w-md w-full mt-10">
          <h2 className="sub-heading">
            UNDERSTANDING THE STUDENT VISA PROCESS
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Your Guide to Studying Abroad with{" "}
            <span className="text-primary">Confidence</span>
          </h3>
          <p className="text-muted text-sm leading-5">
            Our mission is to provide top-tier support for students aiming to
            study abroad, ensuring their personal and professional growth.
            Whether you&apos;re a student eager to expand your academic journey or a
            counselor dedicated to helping students achieve their career goals,
            we are here to assist you every step of the way.
          </p>
          <div>
            <Button variant="outline" className="w-full md:w-fit" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
