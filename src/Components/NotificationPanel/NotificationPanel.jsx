import React from "react";
import me from "./IMG/me.png";
import frnd6 from "./IMG/frnd6.jpg";
import Navbar from "../Navbar/Navbar";
import MiniSidebar from "../MiniSidebar/MiniSidebar";
const NotificationPanel = () => {
  return (
    <div className=" lg:bg-[#0891 my-[-2rem] py-8">
      <div>
        <Navbar />
        <MiniSidebar />
      </div>
      <div className=" justify-center items-center flex-col flex ml-8 my-6">
        <div className="bg-white w-full px-6 py-16">
          <div className=" md:justify-between justify-center md:flex w-full mx-8 border-b mb-4">
            <div className="flex gap-4">
              <img
                src={me}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Cobby Bossman
                </span>
                <span className=" font-bold">Group invitation</span>
                <p className=" pb-2">
                  Cobby Bossman sent you a link to join to follow to his tech
                  group, Cobby Techs
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to follow
                </a>
              </div>
            </div>
            <span className=" mx-16 text-center">Today, 3:20 AM</span>
          </div>

          <div className=" md:justify-between justify-center md:flex w-full mx-8 border-b">
            <div className="flex gap-4">
              <img
                src={frnd6}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Grat Dimafa
                </span>
                <span className=" font-bold">Birthday wish</span>
                <p className=" pb-2">
                  Grat Dimafa is celebrating his birthday, show him some love
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to wish him
                </a>
              </div>
            </div>
            <span className=" mx-16">Today, 3:20 AM</span>
          </div>

          <div className=" md:justify-between md:flex w-full mx-8 border-b my-2">
            <div className="flex gap-4">
              <img
                src={me}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Pap Dad
                </span>
                <span className=" font-bold">Trending News</span>
                <p className=" pb-2">
                  Pap Dad is the new sensational C.E.O and the founder of the GD
                  news is making waves and competing with news platforms though
                  it came not long ago
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to read more about this great CEO
                </a>
              </div>
            </div>
            <span className=" mx-16">Today, 3:20 AM</span>
          </div>

          <div className=" md:justify-between justify-center md:flex w-full mx-8 border-b mb-4">
            <div className="flex gap-4">
              <img
                src={me}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Cobby Bossman
                </span>
                <span className=" font-bold">Group invitation</span>
                <p className=" pb-2">
                  Cobby Bossman sent you a link to join to follow to his tech
                  group, Cobby Techs
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to follow
                </a>
              </div>
            </div>
            <span className=" mx-16">Today, 3:20 AM</span>
          </div>

          <div className=" md:justify-between md:flex w-full mx-8 border-b">
            <div className="flex gap-4">
              <img
                src={frnd6}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Grat Dimafa
                </span>
                <span className=" font-bold">Birthday wish</span>
                <p className=" pb-2">
                  Grat Dimafa is celebrating his birthday, show him some love
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to wish him
                </a>
              </div>
            </div>
            <span className=" mx-16">Today, 3:20 AM</span>
          </div>

          <div className=" md:justify-between justify-center md:flex w-full mx-8 border-b my-2">
            <div className="flex gap-4">
              <img
                src={me}
                className=" w-[3rem]  h-[3rem] rounded-full border-2 p-1"
                alt=""
              />
              <div className="flex flex-col">
                <span className=" bg-[#0891b2] text-center w-[10rem] cursor-default px-3 py-1 text-white  rounded-md font-bold">
                  Pap Dad
                </span>
                <span className=" font-bold">Trending News</span>
                <p className=" pb-2">
                  Pap Dad is the new sensational C.E.O and the founder of the GD
                  news is making waves and competing with news platforms though
                  it came not long ago
                </p>
                <a href="" className=" text-[#0891b2]">
                  Click here to read more about this great CEO
                </a>
              </div>
            </div>
            <span className=" mx-16">Today, 3:20 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
