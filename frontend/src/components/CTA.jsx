import React from "react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

const CTA = () => {
  return (
    <Card radius="none" className="bg-gray py-10 mt-10">
      <CardBody className="flex flex-col gap-2  text-center">
        <h1 className="text-primary text-2xl lg:text-4xl font-semibold">
          At Brescia Grameen
          <br /> we are here to help you.
        </h1>
        <p className="text-white text-xl lg:text-[24px] pt-3">
          Your questions and feedbacks are important to us.
          <br />
          Just call or visit us for all your inquiries
        </p>
        <div className="mt-4">
          <Button
            color="primary"
            radius="md"
            className="w-full max-w-lg lg:max-w-fit"
          >
            <a href="tel:+94763484719"> Call Us Today</a>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CTA;
