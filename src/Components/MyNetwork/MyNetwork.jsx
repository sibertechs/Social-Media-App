import React from "react";
import {
  HiUsers,
  HiUser,
  HiUserGroup,
  HiCalculator,
  HiNewspaper,
  HiHashtag,
} from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import Navbar from "../Navbar/Navbar";
import me1 from "./IMG/me1.png";
import frnd from "./IMG/frnd.jpeg";
import frnd4 from "./IMG/frnd4.jpg";
import frnd6 from "./IMG/frnd6.jpg";
import frnd5 from "./IMG/frnd5.jpg";
import frnd7 from "./IMG/frnd7.jpg";
import frnd8 from "./IMG/frnd8.jpg";

const MyNetwork = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="lg:flex">
        {/* Sidebar */}
        <div className="lg:w-2/12 bg-[#0891b2] hidden lg:block">
          <h4 className="text-white font-semibold text-[1.1rem] mt-4 mx-4">
            Manage my network
          </h4>
          <nav className="mt-4">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiUsers className="text-white mr-2" />
                    <span>Connections</span>
                  </div>
                  <span className="text-white">6</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiUser className="text-white mr-2" />
                    <span>Following & Followers</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiUserGroup className="text-white mr-2" />
                    <span>Groups</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiCalendar className="text-white mr-2" />
                    <span>Events</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiCalculator className="text-white mr-2" />
                    <span>Pages</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiNewspaper className="text-white mr-2" />
                    <span>Newsletter</span>
                  </div>
                  <span className="text-white">2</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 text-white"
                >
                  <div className="flex items-center">
                    <HiHashtag className="text-white mr-2" />
                    <span>Hashtag</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="mt-8 px-4 border-b">
              <p className="text-white text-[0.7rem] text-center mb-2">
                Unlock your full potential with CP premium
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={me1}
                  alt=""
                  className="w-[4rem] h-[4rem] rounded-full"
                />
                <h1 className="w-[4rem] h-[4rem] bg-white text-[#0891b2] font-bold text-3xl flex items-center justify-center rounded-full">
                  CP
                </h1>
              </div>
              <p className="text-white text-[0.7rem] text-center my-2">
                See who's viewed your profile in the last 30 days
              </p>
              <a
                href="#"
                className="block text-white bg-[#0891b2] border py-2 px-4 my-4 text-center rounded-full hover:bg-white hover:text-[#0891b2]"
              >
                Try for free
              </a>
            </div>
            <div className="mt-8">
              <p className="text-[#1908b2] font-bold text-center mx-4">
                Chat App
              </p>
              <span className="text-center mx-8 text-white">
                CP Corporation &copy; 2024
              </span>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:w-8/12 px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Content */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-4 justify-center items-center flex flex-col shadow-md"
              >
                <img
                  src={
                    index % 7 === 0
                      ? frnd
                      : index % 7 === 1
                      ? frnd4
                      : index % 7 === 2
                      ? frnd5
                      : index % 7 === 3
                      ? frnd6
                      : index % 7 === 4
                      ? frnd7
                      : frnd8
                  }
                  alt=""
                  className="w-[30rem] h-[30rem] lg:rounded-full rounded-sm mb-4 lg:w-[10rem] lg:h-[10rem] p-4"
                />
                <div className=" bg-[#0891b2] text-center text-white p-1 rounded-md">
                  <h4 className="text-lg font-semibold mb-2">
                    Second Chances, First Ventures: Entrepreneurship
                  </h4>
                  <p className="text-sm ">Sunday. March 24, 4:21 PM</p>
                  <div className="flex items-center justify-center text-sm  mb-2 text-center">
                    <HiUsers className="mr-1" />
                    <p className=" text-center">3,456 attendees</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="block px-4 py-2 my-4 w-full  border-2 border-[#0891b2] text-[#0891b2] font-semibold rounded-lg text-center hover:bg-blue-600 hover:text-white"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for the 2/12 width on the right */}
        <div className="lg:w-2/12 bg-white"></div>
      </div>
    </div>
  );
};

export default MyNetwork;
