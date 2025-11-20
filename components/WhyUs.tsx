import React from "react";
import WhyUsCard from "./WhyUsCard";
import { WHY_US } from "@/utils/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const WhyUs = () => {
  return (
    <main className="min-h-full lg:max-w-6xl px-4 sm:px-6 lg:px-10 mb-12 w-full mx-auto lg:py-12">
      <div className="flex flex-col items-center justify-center text-center lg:text-left gap-y-4 px-4 w-full">
        <div className="flex flex-col gap-y-4 text-center items-center justify-center">
          <h1 className="sub-heading">why choose us?</h1>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Unlock the gateway to your{" "}
            <span className="text-primary">education</span> with us
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          {WHY_US.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="w-full max-w-screen-lg mx-auto mt-16">
          <video
            className="w-full h-auto"
            autoPlay
            muted
            controls
            preload="none"
          >
            <source src="./video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Button variant="link">
          <Link href="https://www.youtube.com/@marylandstudentvisa">
            <Image
              src="/subscribe.png"
              width={200}
              height={50}
              alt="best study abroad agency"
            />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default WhyUs;
