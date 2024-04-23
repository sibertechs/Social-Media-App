import React from "react";
import { useMediaQuery } from "react-responsive";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SiDell } from "react-icons/si";
import Navbar from "../Navbar/Navbar";
import {
  BsTwitterX,
  BsGoogle,
  BsAmazon,
  BsSpotify,
  BsCompass,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImTwitch } from "react-icons/im";
import {
  IoLogoLinkedin,
  IoBookmark,
  IoLogoMicrosoft,
  IoLogoFigma,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoSnapchat,
} from "react-icons/io5";
import { TfiSharethisAlt } from "react-icons/tfi";
import { BiSearch, BiLocationPlus } from "react-icons/bi";
import JOB from "./IMG/JOB.png";
const Jobs = () => {
  return (
    <div className=" flex flex-col justify-center">
      <Navbar />

      <div className=" justify-center items-center flex lg:flex-row flex-col md:mx-auto mx-[-3rem] ">
        <div className="w-7/12  md:mx-12 flex flex-col justify-center items-center mt-8">
          <span className=" text-[#0891b2] font-semibold">
            CARRIER SUCCESS PORTAL
          </span>
          <h1 className=" lg:text-[2.8rem] md:text-[2rem] text-[1.3rem] my-2 w-full font-bold h1">
            Your Ultimate Gateway <br /> to Professional Success
          </h1>
          <p className=" w-full text-justify">
            Dive into a world of endless possibilities and discover your dream
            job with our comprehensive job finding platform. Elevate your career
            to new heights as you explore a nyraid of exciting opportunities
            tailored just for you.
          </p>
          <div className="flex my-8 border-2 p-1 rounded-full">
            <div className="flex md:gap-3 ">
              <BiSearch className="mt-1 mx-4 font-bold text-xl" />
              <span>Select Categories</span>
            </div>
            <span className=" mx-2">|</span>

            <div className="flex gap-3">
              <BiLocationPlus className=" mt-1 font-bold text-xl" />
              <span>Select Categories</span>
            </div>

            <span className=" mx-4 bg-[#0891b2] py-2 px-8 text-white font-bold rounded-full">
              Search
            </span>
          </div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col">
          <div className="mx-auto w-full">
            <img src={JOB} alt="" className="rounded-lg" />
          </div>
          <div className="lg:absolute bg-white bottom-[20rem] shadow-lg justify-center items-center flex px-8 py-4 right-[2rem]">
            <div className="flex flex-col">
              <div className="flex gap-4">
                <span className="text-blue-600">UI Engineer</span>
                <span>Linkedin</span>
                <IoBookmark />
              </div>
              <div className="flex gap-4 my-2">
                <span className="bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className="bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $12 - $50/Hourly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:mx-0 mx-2 p-4 md:gap-12 gap-4 relative mt-24 bg-[#0891b2]">
        <p className=" text-white mx-8">
          Trusted by 364+ Company <br /> Around the world
        </p>
        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <IoLogoMicrosoft className=" mt-1" />
          <span className=" font-bold">Microsoft</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <BsTwitterX className=" mt-1" />
          <span className=" font-bold">TwitterX</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <BsAmazon className=" mt-1" />
          <span className=" font-bold">Amazon</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <BsGoogle className=" mt-1" />
          <span className=" font-bold">Google</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <IoLogoFigma className=" mt-1" />
          <span className=" font-bold">Figma</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <IoLogoFacebook className=" mt-1" />
          <span className=" font-bold">Facebook</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <IoLogoInstagram className=" mt-1" />
          <span className=" font-bold">Instagram</span>
        </div>

        <div className="flex md:gap-4 gap-1 text-white mt-2">
          <IoLogoGithub className=" mt-1" />
          <span className=" font-bold">Github</span>
        </div>
      </div>

      <div className="flex flex-col justify-center relative mx-auto">
        <div className="flex flex-col">
          <h4 className=" font-bold uppercase text-center text-[#0891b2] my-3">
            How it works
          </h4>
          <h4 className=" text-center my-2 font-bold text-[1.5rem]">
            How it actually works?
          </h4>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 sm:grid-cols-2 grid-cols-1 mx-8">
          <p className=" flex flex-col border-2 p-4 rounded-lg ">
            <span className=" font-bold text-[#0891b2]">01</span>
            <div className=" flex flex-col justify-center mt-12">
              <h5 className=" font-bold text-xl my-2 ">Create Your Profile</h5>
              <span className=" text-gray-400">
                Begin your journey by creating a <br /> comprehensive profile
              </span>
            </div>
          </p>

          <p className=" flex flex-col border-2 p-4 rounded-lg ">
            <span className=" font-bold text-[#0891b2]">02</span>
            <div className=" flex flex-col justify-center mt-12">
              <h5 className=" font-bold text-xl my-2 ">
                Apply with Confidence
              </h5>
              <span className="text-gray-400">
                When find the perfect job, <br /> applying is a breeze
              </span>
            </div>
          </p>

          <p className=" flex flex-col border-2 p-4 rounded-lg ">
            <span className=" font-bold text-[#0891b2]">03</span>
            <div className=" flex flex-col justify-center mt-12">
              <h5 className=" font-bold text-xl my-2 ">
                Track Your Application
              </h5>
              <span className="text-gray-400">
                Stay organozed by tracking the <br /> the status of your
                application
              </span>
            </div>
          </p>

          <p className=" flex flex-col border-2 p-4 rounded-lg ">
            <span className=" font-bold text-[#0891b2]">04</span>
            <div className=" flex flex-col justify-center mt-12">
              <h5 className=" font-bold text-xl my-2 ">
                Celebrate Your Success
              </h5>
              <span className="text-gray-400">
                When you land that dream job,
                <br /> celebrate your success with us
              </span>
            </div>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center relative mx-auto">
        <div className="flex flex-col">
          <h4 className=" font-bold uppercase text-center text-[#0891b2] my-3">
            EXPLORE JOBS
          </h4>
          <h4 className=" text-center my-2 font-bold text-[1.5rem]">
            Prime Picks for Your Professinoal Path
          </h4>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 sm:grid-cols-2 grid-cols-1 mx-8">
          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 ">
                <FcGoogle className=" mt-1" />
                <div className="flex flex-col text-[#0891b2]">
                  <span className=" font-bold ">Software Dev</span>
                  <span>Google</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $100 - $500/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Dive into the world of coding and programming as a software
                developer comprehensive profile
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <BsSpotify className=" mt-1 text-green-700" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Cloud Architect</span>
                  <span>Spotify</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Freelance
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $18 - $25/hourly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Shape the future of IT infrasture by becoming a Cloud Architect
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 ">
                <BsCompass className=" mt-1 text-red-600" />
                <div className="flex flex-col text-[#0891b2]">
                  <span className=" font-bold ">IT Support</span>
                  <span>Google</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $450/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Provide crucial technical assistance as an IT Support Specialist
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>
          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <SiDell className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Cybersecurity</span>
                  <span>Dell</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Freelance
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $420-$800/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Join the front lines of digital defense as a Cybersecurity
                Analyst
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 ">
                <ImTwitch className=" mt-1 text-[#7408b2]" />
                <div className="flex flex-col text-[#0891b2]">
                  <span className=" font-bold ">Frontend</span>
                  <span>Twitch</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $230 - $800/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Shape the user experience by becoming a Frontend Developer
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <IoLogoMicrosoft className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Technical Writter</span>
                  <span>Microsoft</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $100 - $200/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Brigde the gap between complex and technical concepts.
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <BsCompass className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">IT Support</span>
                  <span>Google</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $450/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Provide crucial technical assistance as an IT Support Specialist
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>
          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <SiDell className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Cybersecurity</span>
                  <span>Dell</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $450/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Provide crucial technical assistance as an IT Support Specialist
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <BsGoogle className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Software Dev</span>
                  <span>Google</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $100 - $500/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Dive into the world of coding and programming as a software
                developer comprehensive profile
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <BsSpotify className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Cloud Architect</span>
                  <span>Spotify</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $18 - $25/hourly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Shape the future of IT infrasture by becoming a Cloud Architect
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>

          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <BsCompass className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">IT Support</span>
                  <span>Google</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $450/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Provide crucial technical assistance as an IT Support Specialist
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>
          <p className=" flex flex-col  border-2 p-4 rounded-lg ">
            <div className="flex justify-between gap-3">
              <div className="flex gap-2 text-[#0891b2]">
                <SiDell className=" mt-1" />
                <div className="flex flex-col">
                  <span className=" font-bold ">Cybersecurity</span>
                  <span>Dell</span>
                </div>
              </div>
              <IoBookmark />
            </div>
            <div className=" flex flex-col justify-center mt-">
              <div className="flex gap-4 my-2">
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  Full Time
                </span>
                <span className=" bg-gray-100 p-2 rounded-full font-bold text-[0.8rem]">
                  $450/monthly
                </span>
              </div>
              <p className=" text-gray-400 text-sm">
                Provide crucial technical assistance as an IT Support Specialist
              </p>
            </div>

            <span className="font-bold text-[#0891b2]">12 day left</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
