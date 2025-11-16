"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe, SendHorizonal } from "lucide-react";
import { UNIVERSITY_DATA } from "@/utils/constants";

const page = () => {
  const router = useRouter();

  return (
    <main className="">
      <div className="py-10 px-8 xl:mx-auto w-full flex flex-col text-center gap-4">
        <div className="flex items-center justify-center gap-2 text-primary">
          <SendHorizonal size={20} />
          <h1 className="text-lg uppercase tracking-wide font-extrabold">
            Study Destinations
          </h1>
          <Globe size={20} />
        </div>
        <h2 className="lg:text-4xl sm:text-3xl text-xl tracking-wider font-black">
          Explore Your Future Across
          <br /> the Globe
        </h2>
      </div>
      <div className="mb-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {UNIVERSITY_DATA.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="relative bg-primary py-16 px-10 flex flex-col justify-between border">
                <div className="relative z-10">
                  <div className="w-12 h-12">
                    <Image
                      src={item.flag || ""}
                      width={50}
                      height={30}
                      alt={item.country}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                  </div>
                  <h3 className="capitalize text-2xl font-bold text-white my-4">
                    {item.country}
                  </h3>
                  <p className="text-sm text-white mb-4 leading-loose">
                    {item.description}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() =>
                      router.push(
                        `/study-destinations/${item.country
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`
                      )
                    }
                    className="text-white text-sm font-semibold"
                  >
                    Read More <SendHorizonal />
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] w-full">
                <Image
                  src={item.image || ""}
                  width={500}
                  height={500}
                  alt={item.country}
                  className="object-cover w-full h-full"
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default page;
