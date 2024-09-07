import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "@nextui-org/react";

const About = () => {
  return (
    <div className="py-16 px-4 lg:px-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-y-6 items-center lg:justify-between lg:items-start">
        <div className="lg:max-w-lg w-full flex flex-col gap-y-2">
          <div className="flex gap-4">
            <h1 className="capitalize text-xl font-bold lg:text-2xl w-full text-center lg:text-left">
              About brescia grameen
            </h1>
          </div>
          <div className="lg:px-0 pt-2.5">
            <p className="text-center lg:text-left">
              With a rich history spanning 16 years, Brescia Grameen has been a
              beacon of financial stability and reliability in Negombo. Our team
              of seasoned professionals is dedicated to assisting individuals in
              achieving their international aspirations through tailored
              financial solutions.
            </p>
          </div>
          <div>
            <p className="text-black font-semibold text-center lg:text-left">
              <span className="text-green-500">5000+</span> trusted customers
            </p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-4 mt-2.5">
            <Button color="primary" radius="none">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button
              color="primary"
              variant="ghost"
              radius="none"
              className="text-primary"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-md grid lg:grid-cols-2 gap-4 items-center justify-center lg:items-start mt-16 lg:mt-0">
          <Card className="text-white bg-gray lg:max-w-[240px] max-w-xs">
            <CardBody className="text-center lg:text-left flex flex-col gap-y-2">
              <h1 className="uppercase">Our Vision</h1>
              <p>
                &quot;To be the most preferred Financial Service Brand&quot;
              </p>
            </CardBody>
          </Card>
          <Card className="text-white bg-primary lg:max-w-[240px] max-w-xs">
            <CardBody className="text-center lg:text-left flex flex-col gap-y-2">
              <h1 className="uppercase">Our Mission</h1>
              <p className="">
                &quot;Be the premier provider of financial solutions&quot;
              </p>
            </CardBody>
          </Card>
          <Card className="text-white bg-gray lg:max-w-[240px] max-w-xs">
            <CardBody className="text-center lg:text-left flex flex-col gap-y-2">
              <h1 className="uppercase"> our core values</h1>
              <p className="">
                &quot;Trustworthy, Flexibility, Integrity & Excellence&quot;
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
