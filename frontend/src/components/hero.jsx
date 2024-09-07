import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import mainBG from "../assets/main-img.jpeg";
import { Button, ButtonGroup } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full flex items-center justify-center gap-10 lg:gap-24">
        <div className="relative bg-gradient-to-r from-slate-500 to-slate-800 ">
          <img
            src={mainBG}
            alt="main-img"
            className="w-screen h-[500px] lg:h-[600px] object-cover border-none brightness-50"
          />

          <div className="absolute top-1/2 left-1/2 lg:left-8 -translate-x-1/2 lg:max-w-2xl -translate-y-1/2 lg:translate-x-0  w-full flex flex-col gap-y-4 px-4">
            <h1 className="text-4xl lg:text-6xl text-white text-center lg:text-left font-bold capitalize">
              Empowering dreams through financial support and guidance
            </h1>
            <p className="text-white text-center lg:text-left">
              A customer-focused financial provider that provides financial
              solutions to meet your entire financial needs
            </p>
            <div>
              <p className="text-white font-bold text-center lg:text-left">
                <span className="text-green-500">5000+</span> trusted customers
              </p>
            </div>
            <div className="flex flex-col w-full lg:flex-row gap-4">
              <Button color="primary" radius="none">
<                Link to="/contact">Get Started</Link>
              </Button>
              <Button
                color="primary"
                variant="ghost"
                radius="none"
                className="text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
