import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/utils/constants";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

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
          <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-lg">
            <CarouselContent>
              {TESTIMONIALS.map((item) => (
                <CarouselItem key={item.id} className="">
                  <Card className="rounded-lg">
                    <CardHeader className="flex flex-col md:flex-row items-start gap-x-4">
                      <Image
                        src={item.avatar}
                        width={220}
                        height={200}
                        alt={`${item.id} ${item.name}`}
                        className="md:w-[220px] h-[200px] w-full object-contain"
                      />
                      <div>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADW0lEQVR4nO3dTUtVURQG4Fco0CZBhV/3RrMIauJEsR9QUdbQgeA0Kq0fIBpOg8AaSNQkQWjQKMicNAgMqlkR9DWqhg0K89oXZisu7EDCvdaRo+619lkP7GHxvufsfc/utj0CzjnnnHPOOeecc85trl4ATwEsA3gCoE/5Be41lpe1H8BnALRmNIt1QidreUV3/ivzb4xAJ2t5Wf0A/hgq1G8sL6sFwLNImZ8A6tDFWl7RcKRMc1yBPsPG8rLaAHyMlPkEYDd0aTOWVzTJzKaz0GfSWF5WLWzb1ivzCsAO6FIzllc0y8ymY9Bn1lheVh+zjbsHffqM5RW3cY8jZX4BOAhdWozlFQ0xS/kq9Bkyllfcxn2IlGl+r7IHurQZyyuaYGbTeegzYSwvqxtAI1LmtcJtXLexvKIZZjYdhz4zxvKyegCsRsrchz49xvKKFiJlVgAchj4LxvKyBpmlfA36DBrLy2oF8D5S5guAvdCl1Vhe0Rgzmy5CnzFjeVkdAL5GyrwBsBO6dBjLK5pmZtNJ6DNtLC+reTTje6TMQ+jTaSyvaCpS5jeAI9BnylheVjuAb5FCN6FPu7G8ovFImR9Kj2yMG8sresk8zMqM5bAbmQ+Hn+oVzcs6tEVlaJ3R/K7mLoADFcoruryNhSiMJQCnK5JX9CJBIQqza7QCeVm7wraNEpY6k3Fe0dGEZSiM5lcJXZnmFV1SUIg2sHe3lld0W0EZCv9pUsswr+iRgjIUxoUM84qeKyhCYcxlmFcUO8CUYrzNMK9oUUERCqORYV5R7BhHqpFbXhEZK0TKht8A+A3wFVBG6hlE/hGU/qKTPwPsPNRI2SgtdQHyG5D+opOvADtLmpQN/wiC3wBfAWWknkHkH0HpLzr5M8DOQ42UjdJSFyC/AekvOvkKsLOkSdnwjyD4DfAVUMaSgllEa4785ZZX9E5BEVrzNpPc8ormFRShDRx0spZXNKKgCIVxLsO8ono4aGrlsGvdWN5CbikodCPjvIVe85Vyd7G4wV+gYC1vIScS/ejPKoCBCuQtZHSbz16ulvzFCdbyFjLAvP5ls5fxqQrmLWQfgOtbtNtYCT9f1VXhvIXVwotOH4R/9cXex8mNRvizc+Hv2rStWwZ5nXPOOeecc8455xzy8RdKFvSJJJWhkwAAAABJRU5ErkJggg=="
                          alt="quote-left"
                        />
                      </div>
                      <div className="flex flex-col items-start text-left">
                        <h3 className="capitalize font-semibold">{item.name}</h3>
                        <p className="text-sm pt-4">{item.saying}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default TestimonialSection;
