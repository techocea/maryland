import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const CTASection = () => {
  return (
    <Card className="bg-primary min-h-64 relative p-4 flex flex-col items-center justify-center w-full gap-4 border rounded-lg">
      <CardHeader className="flex flex-col mb-0">
        <CardTitle>
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center">
            Ready to Start Your Study Abroad Journey?
          </h2>
        </CardTitle>
        <p className="text-white font-medium text-center text-sm max-w-2xl">
          Connect with us on WhatsApp for instant support and guidance
          throughout your educational journey abroad.
        </p>
      </CardHeader>
      <CardDescription className="flex flex-col sm:flex-row gap-4 -mt-5 w-full lg:w-fit">
        <Button className="border-white border-2 w-full" asChild>
          <Link
            href="https://wa.me/+94759494999"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Link>
        </Button>
        <Button variant="secondary" className="w-full" asChild>
          <Link href="/contact">
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardDescription>
    </Card>
  );
};

export default CTASection;
