import React from "react";
import { Link } from "react-router-dom";

import { Card, CardBody } from "@nextui-org/react";

import { ServiceData } from "../utils/constants";

const WhyUs = () => {
  return (
    <div className="bg-white py-16 flex flex-col gap-8 px-24 max-md:px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-yellow font-bold text-2xl capitalize">why us ?</h1>

        <h1 className="text-main text-center text-3xl capitalize">
          Because <span className="text-primary">we provide...</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center ">
        {ServiceData.map((item) => (
          <Link to={`/services/${item.to}`} key={item.id}>
            <Card className="max-w-md w-full min-h-24 hover:bg-primary hover:text-white ease-in duration-700">
              <CardBody className="flex gap-2 h-full items-center justify-center">
                {item.icons({ size: 24 })}
                {item.title}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
