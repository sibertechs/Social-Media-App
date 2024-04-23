import React from "react";
import me1 from "./IMG/me1.png";
// import { BiStar } from "react-icons/bi";
import {
  FaStar,
  FaCheck,
  FaUpload,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMale,
  FaLocationArrow,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
const ServiceSidebar = () => {
  return (
    <div className="">
      <Navbar />
      <div className="md:absolute mt-[0.5rem] lg:h-screen md:mx-0 py-8 lg:py-0 bg-[#0891b2] mx-3 left-0 md:w-[17rem] w-[95%]">
        <div className="flex flex-col">
          <img
            src={me1}
            className=" w-[6rem] justify-center items-center flex mx-auto my-2 rounded-full"
            alt=""
          />
          <span className="  text-center font-bold text-white text-sm">
            Cobby Bossman
          </span>
          <span className="   text-center text-gray-300 font-semibold text-sm">
            Programmar
          </span>
          <span className="   text-center text-gray-300 font-semibold text-sm">
            Fullstack Developer
          </span>
        </div>
        <div className="flex flex-col border-b my-2 text-sm">
          <div className="flex justify-between mx-4">
            <span className=" lg:block hidden font-bold text-gray-300">
              Gender
            </span>
            <span className=" lg:block hidden text-[#1a2075] font-bold">
              Male
            </span>
          </div>

          <div className="flex justify-between mx-4">
            <span className=" lg:block hidden font-bold text-gray-300">
              Marital Status
            </span>
            <span className=" lg:block hidden text-[#1a2075] font-bold">
              Single
            </span>
          </div>

          <div className="flex justify-between mx-4">
            <span className=" lg:block hidden font-bold text-gray-300">
              Country
            </span>
            <span className=" lg:block hidden text-[#1a2075] font-bold">
              Ghana
            </span>
          </div>

          <div className="flex justify-between mx-4 mb-2">
            <span className=" lg:block hidden font-bold text-gray-300">
              City
            </span>
            <span className=" lg:block hidden text-[#1a2075] font-bold">
              Capecost
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-2 border-b">
          <div className="flex gap-3 text-white my-2">
            <span>English</span>
            <span>French</span>
            <span>Hausa</span>
          </div>
        </div>
        <div className="flex flex-col my-2 text-center text-sm border-b">
          <div className="flex flex-col">
            <div className="flex justify-between mx-6">
              <span className=" font-bold text-gray-300">HTML</span>
              <span className=" text-[#1a2075] font-bold">90%</span>
            </div>
            <div className="flex gap-3 text-white text-center mx-6 my-2">
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between mx-6">
              <span className=" font-bold text-gray-300">CSS</span>
              <span className=" text-[#1a2075] font-bold">70%</span>
            </div>
            <div className="flex gap-3 text-white text-center mx-6 my-2">
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between mx-6">
              <span className=" font-bold text-gray-300">PHP</span>
              <span className=" text-[#1a2075] font-bold">86%</span>
            </div>
            <div className="flex gap-3 text-white text-center mx-6 my-2">
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
              <FaStar className=" mx-2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b">
          <div className="flex gap-3 mx-4 my-2">
            <FaCheck className=" mt-1 text-[#1a2075]" />
            <span className=" text-white">Bootstrap, Materialized</span>
          </div>

          <div className="flex gap-3 mx-4 my-2">
            <FaCheck className=" mt-1 text-[#1a2075]" />
            <span className=" text-white">TailwindCSS, SASS, LESS</span>
          </div>

          <div className="flex gap-3 mx-4 my-2">
            <FaCheck className=" mt-1 text-[#1a2075]" />
            <span className=" text-white">Gulp, Webpack, Grunt</span>
          </div>

          <div className="flex gap-3 mx-4 my-2">
            <FaCheck className=" mt-1 text-[#1a2075]" />
            <span className=" text-white">GIT Knowledge</span>
          </div>
        </div>

        <div className="flex mt-4 text-white text-center mb-6 border-b">
          <span className=" mx-8">UPLOAD CV</span>
          <FaUpload className=" mt-1 " />
        </div>

        <div className="flex gap-4 mx-8 text-white text-[1.3rem] border-2 rounded-md border-[#1a2075] px-8 py-4">
          <FaFacebook className=" cursor-pointer" />
          <FaInstagram className=" cursor-pointer" />
          <FaTwitter className=" cursor-pointer" />
          <FaLinkedin className=" cursor-pointer" />
          <FaGithub className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
