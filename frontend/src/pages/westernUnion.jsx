import React from "react";
import { HiCheck } from "react-icons/hi";
import western from "../assets/western.jpg";
import CTA from "../components/CTA";
const WesternUnion = () => {
  return (
    <div className="py-16 px-4 lg:px-20">
      <div>
        <h1 className="font-medium text-center text-5xl pb-8">
          Western Union
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
          <img
            src={western}
            alt="western"
            width={500}
            height={500}
            className="border-none rounded-2xl max-w-lg w-full"
          />
          <p className="text-md lg:text-lg text-center lg:text-left leading-relaxed text-slate-600">
            <span className="text-4xl font-semibold capitalize">W</span>e
            understand the importance of staying connected with your loved ones
            and ensuring the seamless transfer of funds, no matter where they
            are in the world. As a global leader in money transfer services, we
            pride ourselves on providing secure, reliable, and convenient
            solutions for your financial needs.Whether you're supporting family
            members, assisting friends, or conducting business internationally,
            Western Union is your trusted partner for reliable and accessible
            money transfer services.
          </p>
        </div>
      </div>
      <div className="bg-transparent my-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 ml-10 lg:justify-center capitalize">
          <div className="">
            <h1 className="text-3xl font-semibold pb-3">The Benefits</h1>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Global Reach
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Speedy Transactions
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Diverse Sending Options
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Reliable Security Measures
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold pb-3">
              How to Send Money with Western Union?
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Visit an Agent Location
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;permanent residence
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Online and Mobile Services
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Track Your Transfer
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10 border-t border-b border-slate-200 py-10">
        <h1 className="text-main font-bold text-3xl">Interest Rates</h1>
        <p className="text-xl lg:text-[24px]">
          Please note that due to rapidly fluctuating Interest Rates in the
          market, the Interest Rates are subject to change without notice and
          may not be the same on the date of Renewal. Kindly contact us on
          Telephone No: 076 3 484 719 for current Interest Rates.
        </p>
      </div>
      <div className="-mx-4">
        <CTA />
      </div>
    </div>
  );
};

export default WesternUnion;
