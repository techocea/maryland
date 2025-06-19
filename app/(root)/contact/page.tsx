import React from "react";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-secondary lg:py-16 sm:p-8 md:p-10 px-4 py-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black capitalize text-center">
          get in touch
        </h2>
        <Card className="w-full max-w-4xl flex flex-col-reverse lg:flex-row gap-10 rounded-xl p-4 lg:p-8">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="w-full flex-1 hidden lg:flex flex-col space-y-4 rounded-xl bg-primary-foreground text-white">
            <div className="w-full h-auto bg-none text-white rounded-xl px-2 lg:px-8 py-4">
              <h3 className="font-semibold">Contact Us</h3>
              <p className="text-sm">24/7 Customer Support</p>
              <div className="flex items-center gap-3 mt-2 ">
                <span>
                  <PhoneIcon />
                </span>
                <p className="text-sm">+94 75 112 81 5895</p>
              </div>
              <div className="flex items-center gap-3 mt-2 ">
                <span>
                  <MessageCircle />
                </span>
                <Link
                  href="https://wa.me/+94759494999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  +94 75 112 81 5895
                </Link>
              </div>
            </div>
            <div className="w-full h-auto bg-none text-white rounded-xl px-2 lg:px-8 py-4">
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm">Send us an email</p>
              <div className="flex items-center gap-3 mt-2  truncate">
                <span>
                  <Mail />
                </span>
                <p className="text-sm">contact@marylandconsultancy.lk</p>
              </div>
            </div>
            <div className="w-full h-auto bg-none text-white rounded-xl px-2 lg:px-8 py-4">
              <h3 className="font-semibold">Visit Our Office</h3>
              <p className="text-sm">Lets have a talk</p>
              <div className="flex items-start gap-3 mt-2 ">
                <span className="mt-1.5">
                  <MapPin />
                </span>
                <p className="text-sm">
                  135, 2nd Floor, Tisara Plaza, Dutugamunu Street, Kohuwala,
                  Nugegoda, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default page;
