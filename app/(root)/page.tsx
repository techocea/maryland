import Link from "next/link";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import AccordionSection from "@/components/AccordionSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-10 lg:flex-row items-center justify-between py-8 px-4 lg:px-10">
        <div className="max-w-md lg:max-w-lg w-full">
          <div className="relative">
            <Image
              src={"/hat.png"}
              alt="design hat"
              fill
              quality={100}
              className="max-w-20 max-h-20  sm:w-2/3 absolute top-0 left-0 sm:left-[-20px]"
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
          <div className="flex sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <Button asChild>
              <Link href="/sign-up">Join Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="lg:mr-20">
          <Image
            src="/hero-image.png"
            width={345}
            height={507}
            className="object-cover sm:w-[300px] lg:w-full"
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
