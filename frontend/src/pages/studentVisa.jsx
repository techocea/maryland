import React from 'react'
import CTA from "../components/CTA";
import grad from "../assets/grad.jpg";
import { HiCheck } from "react-icons/hi";

const StudentVisa = () => {
  return (
    <div className="py-16 px-4 lg:px-20">
      <div>
        <h1 className="font-medium text-center text-5xl pb-8">Student Visa Loans</h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16">
          <img
            src={grad}
            alt="grad"
            width={500}
            height={500}
            className="border-none rounded-2xl max-w-lg w-full"
          />
          <p className="text-md lg:text-lg text-center lg:text-left leading-relaxed text-slate-600">
          <span className="text-4xl font-semibold capitalize">E</span>
              mbarking on a journey to study abroad is an exciting endeavor, and
              we understand the financial challenges that may arise. Here, we
              specialize in providing financial support for your educational
              pursuits.Create a realistic budget that includes tuition, books,
              and living expenses. Stick to it to avoid unnecessary debt.It's
              tempting to take the maximum offered, but borrow only what's
              essential to minimize repayment stress after graduation.
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
                &nbsp;your dream to study abroad
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;minimum documents
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;10-14 days of working process
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;flexible payment methods
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold pb-3">
              Eligibility & Other Info
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;age above 18 years
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;permanent residence
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;Should have a passport
              </li>
              <li className="flex gap-2 items-center">
                <HiCheck className="text-green-500" />
                &nbsp;A Security document
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
}

export default StudentVisa