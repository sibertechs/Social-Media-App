import React from "react";
import Navbar from "../Navbar/Navbar";

import { BiCheck, BiEnvelope, BiBriefcase } from "react-icons/bi";
import { FaGraduationCap, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";

import COVER1 from "./IMG/COVER1.jpg";
import me1 from "./IMG/me1.png";
import MiniSidebar from "../MiniSidebar/MiniSidebar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <MiniSidebar />
      <div className="flex ml-20  bg-gray-100 h-scren">
        <div className="w-1/12"></div>
        <div className="w-10/12 flex flex-col lg:mt-16 justify-center items-center">
          <div className="flex flex-col justify-center lg:w-[900px] items-center">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className=" relative  mt-8 rounded-md">
                <img src={COVER1} className=" w-[45rem] rounded-md" alt="" />
                <div className=" flex md:flex-row flex-col justify-between bg-white w-full px-4 py-4 rounded-md  h-[10rem]">
                  <div className="flex flex-col">
                    <img
                      src={me1}
                      alt=""
                      className="sm:w-[6rem] w-[4rem] rounded-full p-2 absolute bottom lg:top-[50%] md:bottom-[22%] bottom-[32%] mx-8"
                    />
                    <div className="md:absolute text-center mt-10 flex flex-col ">
                      <span className=" flex ">
                        <p
                          className=" text-center
                         ml-2 mr-2 font-bold "
                        >
                          Cobby Bossman
                        </p>

                        <BiCheck className=" mt-2 text-white bg-blue-600 rounded-full" />
                      </span>
                      <p className=" text-[0.8rem] absolute mt-5 text-center mx-8">
                        CEO MOGLOM
                      </p>
                    </div>
                  </div>
                  <div className=" md:absolute right-0 md:mt-4 mt-0 flex gap-4 mx-8">
                    <a
                      href="#"
                      className=" bg-[#0891b2] text-white px-8 py-2 rounded-full text-center"
                    >
                      Message
                    </a>
                    <a
                      href="#"
                      className="px-8 py-2 border-2 border-[#0891b2] rounded-full"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white flex flex-col mt-8 w-[16 px-8">
                <div className=" w-full border-b my-2">
                  <h4 className=" font-bold">Intro</h4>
                </div>
                <div className="flex gap-3 w-full my-3">
                  <BiBriefcase className=" mt-1" />
                  <span className=" ">CEO at MOGFLOM</span>
                </div>

                <div className="flex gap-3 w-full my-3">
                  <FaGraduationCap className=" mt-1" />
                  <span>
                    Went to C.K. Tedam University Technology and Applied
                    Sciences
                  </span>
                </div>

                <div className="flex gap-3 w-full my-3">
                  <FaLocationDot className=" mt-1" />
                  <span>Lives at Cape Coast</span>
                </div>

                <div className="flex gap-3 w-full my-3">
                  <HiOutlineUsers className=" mt-1" />
                  <span>Followed by 50.35m people</span>
                </div>

                <div className="flex gap-3 w-full my-3">
                  <BiEnvelope className=" mt-1" />
                  <span className=" flex gap-3">
                    Email{" "}
                    <p className=" text-[#0891b2]">cobbybossman@gmail.com</p>{" "}
                  </span>
                </div>
                <div className="flex gap-3 w-full my-3">
                  <FaLinkedin className=" mt-1" />
                  <span className=" flex gap-3">
                    Linkedin <p className=" text-[#0891b2]">cobbybossman</p>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white my-3 relative ml- p-4 mx- flex flex-col text-justify  w-full">
              <h4 className=" my-4 font-bold border-b">About</h4>
              <p className=" px-4 my-8">
                Cobby Bossman is the CEO of MOGFLOM. He has combined a deep
                background in technology with ecommerce growth markrting at the
                world's biggest retailer. He has run MOGFLOM. He has created
                world class campaigns; He has built digital marketing
                organizations from the ground up. He has over 20 years working
                experience
              </p>

              <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center bg-white">
                <div className="flex flex-col lg:border-b-0 border-b my-2">
                  <h4 className=" font-bold text-[1.2rem]">
                    Marketing Expertise
                  </h4>
                  <span className=" text-[#0891b2] font-semibold my-3">
                    #leadership, #advertising, #public-relation, <br />{" "}
                    #branding
                  </span>

                  <span className=" text-lg my-2">Open to advertising</span>
                  <span className=" text-green-600 font-bold">Yes</span>
                </div>

                <div className="flex flex-col">
                  <h4 className=" font-bold text-[1.2rem]">
                    Marketing Interest
                  </h4>
                  <span className=" text-[#0891b2] font-semibold my-3">
                    #event-marketing, #performance-marketing, <br />{" "}
                    #account-based-marketing
                  </span>

                  <span className=" text-lg my-2">Open to advertising</span>
                  <span className=" text-green-600 font-bold">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/12"></div>
      </div>
    </div>
  );
};

export default Profile;
