import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import hat from "@/public/hat.png";
import Image, { StaticImageData } from "next/image";

const CTASection = () => {
  return (
    <main className="bg-primary min-h-full py-20 px-4 flex items-center justify-center w-full">
      <Card className="bg-white md:max-w-lg lg:max-w-[836px] w-full flex text-center items-center justify-center py-10">
        <div className="relative">
          <Image
            src={hat as StaticImageData}
            alt="design hat"
            className="max-w-20 max-h-20 sm:w-2/3 absolute top-[-50px] left-[40px]"
          />
          <div className="flex flex-col space-y-5 sm:space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold capitalize text-muted">
              come join us
            </h2>
            <p className="text-sm lg:text-lg font-semibold text-muted-foreground">
              We are here to provide you with comprehensive support
              <br /> and guidance throughout your entire study abroad journey.
            </p>
            <div>
              <Button>
                <Link href="/contact">Book an Appointment</Link>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default CTASection;
