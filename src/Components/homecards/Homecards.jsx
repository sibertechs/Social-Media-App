import { React, useState } from "react";
import {
  AiFillDashboard,
  AiOutlineDashboard,
  AiOutlineTrademark,
  AiFillCode,
} from "react-icons/ai";

import { FaShareAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { HiOutlineBookmark } from "react-icons/hi";
import { MdEmojiEmotions } from "react-icons/md";
import {
  BiSolidDashboard,
  BiUser,
  BiCodeCurly,
  BiCodeBlock,
  BiBitcoin,
  BiFootball,
  BiCalendar,
  BiPlay,
  BiImage,
  BiFile,
  BiSolidMoviePlay,
  BiMessage,
  BiHeart,
  BiSolidCake,
  BiShare,
  BiSave,
  BiUpload,
  BiPlus,
} from "react-icons/bi";

import me1 from "./IMG/me1.png";
import me from "./IMG/me.png";
import frnd from "./IMG/frnd.jpg";
import frnd6 from "./IMG/frnd6.jpg";
import frnd3 from "./IMG/frnd3.jpg";
import frnd4 from "./IMG/frnd4.jpg";
import frnd5 from "./IMG/frnd5.jpg";
import frnd7 from "./IMG/frnd7.jpg";
import frnd8 from "./IMG/frnd8.jpg";
import frnd9 from "./IMG/frnd9.jpg";
import frnd12 from "./IMG/frnd12.jpeg";
import frnd13 from "./IMG/frnd13.jpg";
import THEGAME from "./IMG/THEGAME.jpg";
import GDNEWS1 from "./IMG/GDNEWS1.png";
import NEWS1 from "./IMG/NEWS1.jpg";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import LEGEND from "./IMG/LEGEND.jpeg";
import KINGPROMISE from "./IMG/KINGPROMISE.jpg";
import Bitcoin from "./IMG/Bitcoin.jpg";
import Navbar from "../Navbar/Navbar";
const Homecards = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const eventItems = [
    { id: 1, title: "10 Events Invites" },
    { id: 2, title: "Siber's Birthday Invitation" },
    { id: 3, title: "Company Picnic" },
    { id: 4, title: "Team Building Workshop" },
    { id: 5, title: "Product Launch Party" },
    { id: 6, title: "Conference: Future Trends in Tech" },
    { id: 7, title: "Charity Fundraiser Gala" },
    { id: 8, title: "Networking Mixer" },
    { id: 9, title: "Community Cleanup Day" },
    { id: 10, title: "Volunteer Appreciation Event" },
  ];
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center mt-8">
        <div className="lg:w-2/12 w-full lg:mx-4  px- py-4 my-[-2rem]">
          <nav className="h- my-4 py-4  bg-white px-4">
            <div className="flex gap-2 bg-[#0891b2] text-white p-2 mx-2 my-4 rounded-md">
              <img
                src={me}
                className="w-[2rem] h-[2rem] mx- rounded-full"
                alt=""
              />
              <div className="flex flex-col w-full px-">
                <h5 className="font-bold">Cobby Bossman</h5>
                <h6>Programmer</h6>
              </div>
            </div>

            <div className="flex flex-row lg:flex-col lg:justify-start md:justify-around justify-between">
              <ul>
                <li className="w-[100%] border-2 rounded-md p-2">
                  <a href="" className="flex gap-2 text-[#0891b2]">
                    <BiSolidDashboard className=" mt-1 " />
                    <span className="font-bold">Feed</span>
                  </a>
                </li>

                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <BiUser className=" mt-1 " />
                    <span className="font-bold">Friends</span>
                  </a>
                </li>

                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <BiCalendar className=" mt-1 " />
                    <span className="font-bold">Events</span>
                  </a>
                </li>
                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <BiPlay className=" mt-1 border-2" />
                    <span className="font-bold">Videos</span>
                  </a>
                </li>
                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <BiImage className=" mt-1 " />
                    <span className="font-bold">Photos</span>
                  </a>
                </li>
                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <BiFile className=" mt-1 " />
                    <span className="font-bold">Files</span>
                  </a>
                </li>
                <li className="w-[100%] shadow- p-2">
                  <a href="" className="flex gap-2 ">
                    <AiOutlineTrademark className=" mt-1 " />
                    <span className="font-bold">Marketplace</span>
                  </a>
                </li>
              </ul>

              <ul className=" my-8">
                <span>PAGES YOU LIKE</span>

                <li className=" my-2">
                  <a href="" className=" flex gap-2">
                    <span className="h-[2rem] w-[2rem] bg-[#3dcf3d] p-2 font-bold text-white rounded-full">
                      <BiFootball />
                    </span>
                    <p className=" font-bold">Football</p>
                  </a>
                </li>

                <li className=" my-2">
                  <a href="" className=" flex gap-2">
                    <span className=" w-[2rem] h-[2rem] bg-[#8d3dcf] p-2 font-bold text-white rounded-full">
                      <BiBitcoin className="text-[1.1rem]" />
                    </span>
                    <p className=" font-bold">Bitcoin</p>
                  </a>
                </li>
                <li className=" my-2">
                  <a href="" className=" flex gap-2">
                    <span className=" h-[2rem] w-[2rem] bg-[#46afd8] p-2 font-bold  text-white text-center rounded-full">
                      <BiCodeBlock className="text-[1.1rem]" />
                    </span>
                    <p className=" font-bold text-[0.8rem] mt-1">
                      UI/UX Community
                    </p>
                  </a>
                </li>
                <li className=" my-2">
                  <a href="" className=" flex gap-2">
                    <span className=" bg-[#d84696] h-[2rem] w-[2rem] p-2 font-bold text-white text-center rounded-full">
                      <BiCodeCurly className=" text-[1.rem] rounded-full" />
                    </span>
                    <p className=" font-bold text-[0.8rem] mt-1">
                      Web Designer
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="lg:w-6/12 w-full flex flex-col">
          <p className=" font-bold bg-white my-2 py-2 px-4 rounded-md">
            Post Something
          </p>
          <div className="flex justify-between bg-white px-6 py-3">
            <div className="flex gap-3">
              <img src={me} className="w-[2rem] h-[2rem] rounded-full" alt="" />
              <input
                type="text"
                name=""
                placeholder="What's on your mind?"
                className=" outline-0"
                id=""
              />
            </div>
            <BiImage className="text-[2rem]" />
          </div>
          <div className="bg-white flex flex-col py-3 px-2 rounded-md my-4">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img
                  src={frnd13}
                  className=" w-[2rem] h-[2rem] rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className=" font-bold">Grat Dimafa</span>
                  <p>20th March at 2:13AM</p>
                </div>
              </div>
              <span className=" text-[2rem] cursor-pointer">...</span>
            </div>
            <p className=" my-4">
              Jude Belingham is currently making waves the Real Madrid and the
              world of football. He is currently the face of Real Madrid and no
              wonder Carlo Ancelorti was eager to sign him.
            </p>
            <div className=" lg:flex justify-center gap-8 ">
              <img
                src={frnd}
                alt=""
                className=" lg:w-[20rem] w-full h-[30rem] rounded-xl"
              />
              <div className="flex flex-col h-[30rem]">
                <img
                  src={frnd4}
                  className=" h-[15rem] rounded-xl my-2"
                  alt=""
                />
                <img src={frnd} className=" h-[15rem] rounded-xl" alt="" />
              </div>
            </div>
            <div className="flex lg:gap-6 gap-2 justify-center mt-12">
              <div className="md:flex gap-4 md:text-[1.1rem] text-[]">
                <BiMessage className="mt-2" />
                <span>25 Comments</span>
              </div>

              <div className="md:flex gap-4">
                <BiHeart className="mt-2" />
                <span>120k Likes</span>
              </div>

              <div className="md:flex gap-4">
                <FaShareAlt className="mt-2" />
                <span>350 Share</span>
              </div>

              <div className="md:flex gap-4">
                <HiOutlineBookmark className="mt-2" />
                <span>12 Saved</span>
              </div>
            </div>
            <div className="flex justify-center my-12">
              <div className=" justify-center items-center flex gap-3 ">
                <img src={me} className="w-[2rem] rounded-full border" alt="" />
                <input
                  type="text"
                  className="border-2 px-6 py-1 outline-0 rounded-full w-[30rem] "
                  name=""
                  id=""
                  placeholder="Write your comment"
                />
              </div>
              <div className="flex gap-3 absolute left-[50%] mt-2">
                <BiUpload className=" cursor-pointer" />
                <BiImage className=" cursor-pointer" />
                <MdEmojiEmotions className=" cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col py-3 px-2 rounded-md my-">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img
                  src={frnd6}
                  className=" w-[2rem] h-[2rem] rounded-full"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className=" font-bold">Streb MModelov</span>
                  <p>20th March at 3:27AM</p>
                </div>
              </div>
              <span className=" text-[2rem] cursor-pointer">...</span>
            </div>
            <p className=" my-4">
              Bitcoin is loosing it's value this days and it's mind blowing but
              let's wait and see how fast it will rise again.
            </p>

            <div className="flex gap-6 justify-center mt-12">
              <div className="flex gap-4">
                <BiMessage className="mt-2" />
                <span>25 Comments</span>
              </div>

              <div className="flex gap-4">
                <BiHeart className="mt-2" />
                <span>120k Likes</span>
              </div>

              <div className="flex gap-4">
                <FaShareAlt className="mt-2" />
                <span>350 Share</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineBookmark className="mt-2" />
                <span>12 Saved</span>
              </div>
            </div>
            <div className="flex justify-center my-12">
              <div className=" justify-center items-center flex gap-3 ">
                <img src={me} className="w-[2rem] rounded-full border" alt="" />
                <input
                  type="text"
                  className="border-2 px-6 py-1 outline-0 rounded-full w-[30rem] "
                  name=""
                  id=""
                  placeholder="Write your comment"
                />
              </div>
              <div className="flex gap-3 absolute left-[50%] mt-2">
                <BiUpload className=" cursor-pointer" />
                <BiImage className=" cursor-pointer" />
                <MdEmojiEmotions className=" cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/12 flex flex-col lg:mx-4">
          <div className=" flex justify-between bg-white py-2 px-4 rounded-lg mt-2">
            <p className=" font-bold rounded-md">Some Stories</p>
            <span className=" text-[1.3rem] cursor-pointer">...</span>
          </div>

          <div className="bg-white  py-3 px-6 mx-2 my-4 rounded-md">
            <div className="flex gap-2 my-2">
              <BiPlus className=" text-[2rem] border-2 rounded-full text-[#0891b2] cursor-pointer" />
              <div className="flex flex-col">
                <h5 className="font-semibold">Create your story</h5>
                <h6 className=" text-[0.6rem]">
                  Click the button beside to create yours
                </h6>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={KINGPROMISE}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">King Promise</h5>
                <h6 className=" text-[0.7rem]">20th March at 3:52 AM</h6>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={frnd13}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">Grat Dimafa</h5>
                <h6 className=" text-[0.7rem]">20th March at 3:54 AM</h6>
              </div>
            </div>

            <div className="flex gap-2 4">
              <img
                src={THEGAME}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">The Game</h5>
                <h6 className=" text-[0.7rem]">20th March at 3:56 AM</h6>
              </div>
            </div>

            <div className="flex gap-2 my-2">
              <img
                src={LEGEND}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">Legend</h5>
                <h6 className=" text-[0.7rem]">20th March at 3:57 AM</h6>
              </div>
            </div>
          </div>
          <div className="flex  text-center justify-center my- text-[#0891b2] font-bold cursor-pointer bg-[#c5e9f1] w-full px- py-2">
            <h4
              className={`text-[1.3rem] cursor-pointer ${
                showAll ? "text-blue-500" : ""
              }`}
              onClick={toggleShowAll}
            >
              See More
            </h4>
          </div>
          <div className="flex flex-col bg-white py-2 px-4 rounded-lg mt-2">
            <div className=" flex justify-between font-bold rounded-md border-b">
              <p className=" ">Events</p>
              <span className=" text-[1.3rem] cursor-pointer">...</span>
            </div>

            <ul
              className="list-transition delay-500"
              style={{
                display: showAll ? "block" : "none",
                // Apply transition delay conditionally
              }}
            >
              {eventItems.map((event) => (
                <li key={event.id} className="w-[100%] shadow p-2">
                  <a href="#" className=" flex gap-2">
                    <BiCalendar className="mt-1" />
                    <span>{event.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col bg-white rounded-lg w-full my-1 py-2 px-4">
            <div className="flex justify-between text-center px-2 my-1 border-b cursor-pointer ">
              <h4 className=" text-center">Suggested pages</h4>
            </div>
            <div className="flex gap-2">
              <img
                src={GDNEWS1}
                className=" w-[3rem] h-[3rem] rounded-full border border-[#0891b2]"
                alt=""
              />
              <div className="flex flex-col">
                <h4 className=" font-bold">GD NEWS</h4>
                <h5 className=" text-sm">GD News Studio</h5>
              </div>
            </div>
            <div>
              <img src={NEWS1} className="my-2 rounded-lg" alt="" />
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 flex lg:flex-col flex-row lg:justify-start md:justify-around justify-between bg-white mt-4 lg:mr-4">
          <div className=" py-3 px-6 mx-2 my-4 rounded-md">
            <div className="flex gap-2 my-2">
              <div className="flex flex-col">
                <h5 className="font-semibold uppercase">Your Pages</h5>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={Bitcoin}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Cryptocurrency</h5>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={frnd3}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Luca Modric</h5>
              </div>
            </div>

            <div className="flex gap-2 4">
              <img
                src={frnd4}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Jude Belingham</h5>
              </div>
            </div>

            <div className="flex gap-2 my-2">
              <img
                src={frnd5}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">Fashion</h5>
              </div>
            </div>
          </div>

          <div className="  py-3 px-6 mx-2 my-4 rounded-md">
            <div className="flex gap-2 my-2">
              <div className="flex flex-col">
                <h5 className="font-semibold uppercase">Friends</h5>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={Bitcoin}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Gitgoa Niitha</h5>
              </div>
            </div>

            <div className="flex gap-2 my-4">
              <img
                src={frnd6}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Bossman Sibelith</h5>
              </div>
            </div>

            <div className="flex gap-2 4">
              <img
                src={frnd7}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="">
                <h5 className="font-semibold">Pap Dad</h5>
              </div>
            </div>

            <div className="flex gap-2 my-2">
              <img
                src={frnd8}
                className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
              />
              <div className="flex flex-col">
                <h5 className="font-semibold">Imath Siber</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homecards;
