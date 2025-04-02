import React from "react";
import { FooterData } from "@/utils/constants";
import { FooterSection } from "@/types";
import { Facebook, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col p-10">
      <div className="flex flex-col lg:flex-row lg:items-start max-lg:space-y-10 lg:space-x-28">
        <div>
          <Image
            src="/logo.png"
            width={175}
            height={50}
            className="max-sm:w-1/2"
            alt="maryland consultancy"
          />
          <span className="flex items-center gap-x-4 mt-2">
            <Link
              href="https://www.youtube.com/@marylandstudentvisa"
              className="hover:text-red-500 transition-all duration-150"
            >
              <Youtube />
            </Link>
            <Link
              href="https://web.facebook.com/Marylandcmb"
              className="hover:text-blue-500 transition-all duration-150"
            >
              <Facebook />
            </Link>
          </span>
        </div>
        <div className="flex flex-col max-lg:space-y-6 lg:flex-row justify-between w-full">
          {FooterData.map((section: FooterSection) => (
            <div key={section.id} className="flex flex-col max-w-56 w-full">
              {section.label && (
                <h3 className="uppercase text-sm font-semibold">
                  {section.label}
                </h3>
              )}

              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-xs hover:underline transition"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {section.contacts && (
                <ul className="space-y-2">
                  {section.contacts.map((contact, index) => (
                    <li key={index} className="text-xs">
                      {contact}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-4" />
      <div className="text-center text-xs">
        © {new Date().getFullYear()} Maryland Consultancy. All rights reserved.
        <br />
        Designed and Developed by Webizera
      </div>
    </footer>
  );
};

export default Footer;
