import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Stats = () => {
  const [yearsInBusiness, setYearsInBusiness] = useState(0);
  const [marketval, setMarketval] = useState(0);
  const [unstructuredData, setUnstructuredData] = useState(0);
  const [userGeneratedData, setUserGeneratedData] = useState(0);

  useEffect(() => {
    const duration = 2000; //in milli
    const incYears = 5;
    const incMarketval = 274; 
    const incUnstructuredData = 95;
    const incUserGeneratedData = 70;

    const updateval = (setval, target, inc) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / (target / inc)));
      
      const timer = setInterval(() => {
        start += inc;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setval(start);
      }, stepTime);
    };

    updateval(setYearsInBusiness, incYears, 1);
    updateval(setMarketval, incMarketval, 1);
    updateval(setUnstructuredData, incUnstructuredData, 1);
    updateval(setUserGeneratedData, incUserGeneratedData, 1);

  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-200 font-sans">
      <div className="flex-1 p-8 py-56 pl-12 pr-20">
        <h1 className="lg:text-6xl mb-20 md:text-4xl font-bold">
          Why You Need to Invest in Data Today?
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-9">
          There’s no denying that data has become vital for us in our everyday
          lives. Our Amazon and Google know our preferences, our smart home
          devices have adapted to our everyday lives. The World of Social Media
          itself produces enough data to help customize our lives. So why
          shouldn’t you use data, and scale your business exponentially!
        </p>
        <a
          href="#"
          className="text-blue-600 mt-10 flex items-center hover:text-black transition-colors duration-300"
        >
          LEARN MORE
          <ArrowRight className="ml-2 transition-transform transform hover:translate-x-1 duration-300" />
        </a>
      </div>
      <div className="flex-1 py-56 bg-blue-900 text-white p-8">
        <h2 className="text-xl tracking-widest md:text-2xl font-semibold mb-12">
          LET THE NUMBERS TALK
        </h2>

        <div className="space-x-12 flex justify-center">
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <span className="lg:text-7xl md:text-5xl font-bold">
                {yearsInBusiness}+
              </span>
              <span className="lg:text-2xl mt-2 font-medium md:text-xl">
                Years in Business
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="lg:text-7xl md:text-5xl font-bold">
                ${marketval}B
              </span>
              <span className="lg:text-2xl mt-2 font-medium md:text-xl">
                Big Data Analytics Market 2023
              </span>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <span className="lg:text-7xl md:text-5xl font-bold">
                {unstructuredData}%
              </span>
              <span className="lg:text-2xl mt-2 font-medium ml-5 md:text-xl">
                Blame Unstructured Data as a Problem.
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="lg:text-7xl md:text-5xl font-bold">
                {userGeneratedData}%
              </span>
              <span className="lg:text-2xl mt-2 font-medium md:text-xl">
                Of The World's Data is User Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
