import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const DirectorMessage = () => {
  return (
    <main className="lg:max-w-6xl px-4 sm:px-6 lg:px-10 mb-12 w-full mx-auto py-12">
      <div className="flex flex-col items-center justify-center lg:flex-row gap-10 lg:gap-0 lg:items-end lg:justify-around w-full">
        <Image
          src="/director-image.png"
          width={324}
          height={352}
          alt="Director Image"
          className="lg:w-1/4 h-full object-cover"
        />
        <div className="lg:max-w-xl w-full flex flex-col max-sm:items-center max-sm:justify-center gap-4">
          <h3 className="font-semibold text-muted">ABOUT THE DIRECTOR</h3>
          <h4 className="font-semibold text-primary text-2xl">
            Ms. Michelle Fernando
          </h4>
          <p className="text-muted-foreground text-sm font-medium max-lg:text-center">
            Ms. Michelle Fernando has over 8 years of experience in student
            recruitment and placement into the UK, Canada, US, Australian and
            even Middle Eastern Markets and has worked in large and reputable
            institutions recently launching her own institution.
          </p>
          <div className="flex justify-start gap-x-4">
            <div className="flex hover:text-primary transition-all">
              <Link href="/">LinkedIn</Link>
              <ArrowUp className="rotate-45" />
            </div>

            <div className="flex hover:text-primary transition-all">
              <Link href="/">Facebook</Link>
              <ArrowUp className="rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DirectorMessage;
