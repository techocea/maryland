import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { UniversityData } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="py-10 px-8 xl:mx-auto w-full">
      <div className="flex flex-col space-y-20">
        {UniversityData.map((item) => (
          <div key={item.id}>
            <h2 className="capitalize font-semibold text-muted-foreground text-2xl">
              {item.country}
            </h2>
            <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-6 sm:gap-3 grid-cols-1 gap-2">
              {item.universities.map((uni, idx) => (
                <Card className="rounded-none pb-0" key={idx}>
                  <CardContent className="w-full h-[340px] relative">
                    <Image src={uni.image} fill alt={uni.name} className="absolute object-cover" />
                  </CardContent>
                  <CardFooter className="px-0 text-center flex items-center justify-center pt-2">
                    <p className="text-sm font-medium">{uni.name}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
