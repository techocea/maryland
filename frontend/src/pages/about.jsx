import React from "react";
import grp from "../assets/grp.png";

import CTA from "../components/CTA";

const About = () => {
  return (
    <div className=" flex flex-col gap-7 py-16 lg:py-20 px-4 lg:px-20">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-center pb-6 border-b border-main ">
          Brescia – The <span className="text-green-800">success</span> of
          Kattuwa and Beyond…
        </h1>
        <p className="text-center text-xl lg:text-[28px] leading-relaxed pt-6">
          With a rich history spanning 16 years, Brescia Grameen has been a
          beacon of financial stability and reliability in Negombo. Our team of
          seasoned professionals is dedicated to assisting individuals in
          achieving their international aspirations through tailored financial
          solutions.
          <br />
          <br />
          Brescia Grameen (Pvt.) Ltd is well known in the field of finance a few
          decades ago, Completion of solid 35 years built on trust and social
          integration in the local community has laid the foundation for several
          decades to come. In considering the prevailing economic conditions, we
          understood the dire need for organic growth and diversification of
          business risk. Thus, by 2014 Brescia Grameen was transformed in to a
          Group of Companies investing in diverse industries. This resulted in
          diversifying the business risk, as is deemed necessary to reduce the
          overall risk to business success.
        </p>
      </div>
      <div className="flex max-md:flex-col-reverse items-center justify-center gap-10 lg:py-10 max-md:py-16">
        <div>
          <img src={grp} alt="group" width={500} height={650} />
        </div>
        <div>
          <h1 className="text-7xl lg:text-8xl max-md:text-4xl font-bold w-[400px] max-md:w-[310px] lg:w-[600px] leading-[100px] lg:leading-[120px]">
            <span className="text-yellow">Brescia</span>&nbsp;Group of Companies
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-8 ">
        <div>
          <p className="text-center lg:text-left text-xl lg:text-2xl leading-relaxed">
            Brescia Grameen serves our valued customers like a bank.&nbsp;
            <strong>
              We take only half the processing time as compared to banks if all
              supporting documents are intact as they observe the requirements
              based on priority.
            </strong>
            &nbsp;Reinvesting profits, high return on investments, maximum
            utilization of resources and treating customers with respect are
            strengths of Brescia Grameen.
          </p>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default About;
