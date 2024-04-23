import React from "react";
import me from "./IMG/me.png";
import { FaCaretRight } from "react-icons/fa";
import ServiceSidebar from "../ServiceProvided/ServiceSidebar";

const ServiceProfile = () => {
  return (
    <div className="container mx-auto px-4">
      <ServiceSidebar className="hidden" />
      <div className="bg-[#0891b2] text-white py-10 lg:py-20 px-4 lg:px-0 rounded-md flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Discover my Amazing Art Space
          </h1>
          <code className="text-[#1a2075] font-bold">
            &lt;code&gt;I build android apps and ios applications.&lt;/code&gt;
          </code>
          <button className="mt-4 bg-white text-[#0891b2] py-2 px-6 rounded-md font-bold hover:bg-transparent hover:text-white transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>
        <img src={me} className="w-32 h-32 lg:w-48 lg:h-48 rounded-full border-2 border-[#1a2075]" alt="Profile" />
      </div>

      <div className="flex flex-wrap justify-center mt-10 lg:mt-20 gap-6">
        <div className="flex gap-4">
          <span className="text-[#0891b2] font-bold text-[1rem] w-[2rem] h-[2rem] justify-center items-center flex text-center p-2 border-2  border-[#0891b2] rounded-full">
            10+
          </span>
          <span className="mt- font-bold text-[1rem] text-gray-600">
            Years Experience
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-[#0891b2] font-bold text-[1rem] w-[2rem] h-[2rem] justify-center items-center flex text-center p-2 border-2 border-[#0891b2] rounded-full">
            915
          </span>
          <span className="mt- font-bold text-[1rem] text-gray-600">
            Projects Completed
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-[#0891b2] font-bold text-[1rem] w-[2rem] h-[2rem] justify-center items-center flex text-center p-2 border-2 border-[#0891b2] rounded-full">
            501
          </span>
          <span className="mt- font-bold text-[1rem] text-gray-600">
            Happy Customers
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-[#0891b2] font-bold text-[1rem] w-[2rem] h-[2rem] justify-center items-center flex text-center p-2 border-2 border-[#0891b2] rounded-full">
            20+
          </span>
          <span className="mt- font-bold text-[1rem] text-gray-600">
            Honors and Awards
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-20">
        <div className="flex flex-col border-2 border-[#1a2075] rounded-md shadow-4xl text-justify justify-center items-center py-6 px-4">
          <h3 className="text-[#0891b2] my-2 font-bold text-2xl">Web Development</h3>
          <p className="text-[#1a2075] font-semibold">
            I have been developing websites for about 11 years now. I have completed over 200 useful websites so far and still counting. I also have about 20 people who work under me as web developers. I work 24/7 as a happy web developer and coach.
          </p>
          <a href="#" className="flex text-[#0891b2] bg-[#1a2075] my-3 px-8 py-2 font-bold text-lg uppercase rounded-md">
            <span>Order Now</span>
            <FaCaretRight className="mt-1" />
          </a>
        </div>

        {/* Additional service items here */}
      </div>
    </div>
  );
};

export default ServiceProfile;
