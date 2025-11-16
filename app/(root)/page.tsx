import Link from "next/link";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import AccordionSection from "@/components/AccordionSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 lg:flex-row items-center justify-between pb-8 px-4 lg:px-10">
        <div className="max-w-md lg:max-w-lg w-full">
          <div className="relative">
            <Image
              src="/arrow.png"
              alt="design arrow"
              width={150}
              height={120}
              className="absolute top-0 -right-20 hidden lg:block -rotate-180"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-16 text-center lg:text-left">
            <h1 className="heading">
              study{" "}
              <span className="text-primary border-4 border-primary p-1.5">
                abroad
              </span>{" "}
              made easy with us
            </h1>
            <p className="text-muted font-medium text-xs sm:text-sm lg:text-lg">
              Assisting you in enrolling in an overseas programs at an
              affordable cost at your best university
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button variant="default" size="lg" className="rounded-full">
              <Link href="/sign-up">Join Now</Link>
              <ArrowRight />
            </Button>

            <Button variant="outline" size="lg" className="rounded-full">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/hero-image.png"
            width={945}
            height={707}
            quality={100}
            className="object-center w-full"
            alt="Hero image"
          />
        </div>
      </main>
      <About />
      <WhyUs />
      <TestimonialSection />
      <CTASection />
      <AccordionSection />
    </>
  );
}
