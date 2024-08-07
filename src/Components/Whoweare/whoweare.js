import React from "react";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col font-sans items-center justify-center bg-sky-950 text-white py-20 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-5 mb-4">Who We Are?</h2>
      <h3 className="text-xl font-semibold mb-2">Consulting Firm Powered by Analytics!</h3>
      <p className="italic font-medium text-base lg:text-lg mb-8 text-center">
        We support leaders to EVOLVE their organizations using our proven analytics consulting services.
      </p>
      <p className="text-center mt-5 text-base md:text-lg leading-7 md:leading-8 max-w-4xl lg:max-w-6xl mb-8">
        We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue, and accelerate innovation!
      </p>
      
      <a href="#" className="mt-10 flex items-center">
        <button className="bg-gradient-to-r from-blue-900 to-blue-500 text-white border border-blue-800 px-4 py-2 md:px-4 md:py-2 rounded-md hover:bg-gradient-to-l text-sm hover:from-blue-500 hover:to-blue-800 duration-300 flex items-center transform transition-transform hover:scale-105">
          KNOW MORE
          <ArrowRight className="ml-2 transition-transform transform hover:translate-x-1 duration-300" />
        </button>
      </a>
    </div>
  );
};

export default WhoWeAre;
