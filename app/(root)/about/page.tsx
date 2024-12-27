import React from "react";
import Image from "next/image";
import DirectorMessage from "@/components/DirectorMessage";
import WhyUs from "@/components/WhyUs";
import { ServiceData } from "@/utils/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  return (
    <main className="">
      <div className="relative h-screen">
        <Image
          src="/about-banner.png"
          fill
          quality={100}
          alt="about image"
          className="w-full object-cover"
        />
      </div>
      <DirectorMessage />
      <WhyUs />
      <div className="flex items-center justify-center text-center px-4 pb-20 lg:py-20">
        <div className="max-w-[900px] flex flex-col gap-4">
          <h3 className="sub-heading">about the student visa</h3>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Exploring Worldwide Educational Opportunities
          </h1>
          <p className="text-muted text-sm leading-5">
            From searching for courses to finalizing your application, each step
            is designed to be simple and accessible. With our platform, students
            have the power to choose courses that fit their goals, while our
            dedicated counselors offer personalized assistance, ensuring every
            query is resolved. Together, we make your application process easy,
            efficient, and successful.
          </p>
        </div>
      </div>

      <div className="bg-secondary lg:rounded-tl-[350px] min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-col text-center gap-y-4 px-4 w-full">
            <h2 className="sub-heading">process</h2>
            <h3 className="capitalize text-xl md:text-2xl lg:text-4xl font-bold">
              your journey is simplified
            </h3>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4 sm:mt-8 lg:mt-12">
            {ServiceData.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <CardHeader className="flex items-start justify-start">
                  <Image
                    src={item.image}
                    width={66}
                    height={66}
                    alt={item.title}
                  />
                  <span className="font-semibold text-muted-foreground text-4xl">
                    {item.id}
                  </span>
                </CardHeader>
                <CardContent>
                  <CardDescription className="max-w-[160px] text-center text-sm font-bold ">
                    {item.title}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </main>
  );
};

export default AboutPage;
