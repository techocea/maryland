import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <main className="bg-white min-h-64 relative px-4 flex flex-col items-center justify-center w-full gap-6 border border-primary rounded-lg p-4">
      <h2 className="text-primary text-2xl md:text-3xl font-bold text-center">
        Ready to Start Your Study Abroad Journey?
      </h2>
      <p className="text-muted-foreground font-medium text-center text-base max-w-2xl">
        Connect with us on WhatsApp for instant support and guidance throughout your educational journey abroad.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <Link href="https://wa.me/+94759494999" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </Link>
        </Button>
        <Button asChild>
          <Link href="/contact">
            Book an Appointment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default CTASection;
