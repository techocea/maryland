import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

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
        <div className="mt-4">
          <Carousel className="w-full max-w-[320px] md:max-w-lg lg:max-w-5xl">
            <CarouselContent>
              <CarouselItem className="basis-56 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-md font-medium">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar
                        scelerisque commodo imperdiet mattis interdum justo nisl
                        volutpat. Lacus enim dui lectus vitae.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-56 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-md font-medium">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar
                        scelerisque commodo imperdiet mattis interdum justo nisl
                        volutpat. Lacus enim dui lectus vitae.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-56 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-md font-medium">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar
                        scelerisque commodo imperdiet mattis interdum justo nisl
                        volutpat. Lacus enim dui lectus vitae.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default TestimonialSection;
