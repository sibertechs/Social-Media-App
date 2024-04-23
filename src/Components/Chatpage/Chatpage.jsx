import React from "react";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillMessage,
  AiFillBell,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import {
  MdEmojiEmotions,
  MdUpload,
  MdOutlineKeyboardVoice,
  MdVoiceOverOff,
} from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { IoIosAttach } from "react-icons/io";
import me from "./me.png";
import Bitcoin from "./IMG/Bitcoin.jpg";
import frnd from "./IMG/frnd.jpeg";
import frnd5 from "./IMG/frnd5.jpg";
import frnd6 from "./IMG/frnd6.jpg";
import frnd7 from "./IMG/frnd13.jpg";
import frnd8 from "./IMG/frnd8.jpg";
import frnd9 from "./IMG/frnd9.jpg";
import GDNEWS1 from "./IMG/GDNEWS1.png";
import THEGAME from "./IMG/THEGAME.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Chatpage = () => {
  return (
    <div>
      <div className="md:flex w-full bg-white">
        <div className="lg:w-5/12 lg:border-r w-full flex lg:gap-6 my-4 items-center md:ml-4 mx-2">
          <nav className="relative h-full left-0 w-20 bg-[#0891b2] top-0 rounded-lg ">
            <img
              src={me}
              className="w-[2rem] rounded-full border-2 m-4"
              alt=""
            />
            <ul className=" ">
              <li className=" p-4 text-white text-[1.5rem]">
                <Link to="/">
                  <AiFillHome title="Home" />
                </Link>
              </li>

              <li className=" p-4 text-white text-[1.5rem]">
                <Link to="/chats">
                  <AiFillMessage title="Chats" />
                </Link>
              </li>
              <li className=" p-4 text-white text-[1.5rem]">
                <Link to="/notification">
                  <AiFillBell title="Notifications" />
                </Link>
              </li>
              <li className=" p-4 text-white text-[1.5rem]">
                <Link to="/network">
                  <FaUserFriends title="My Networks" />
                </Link>
              </li>
              <li className=" text-white text-[1.5rem] md:absolute bottom-8 p-4">
                <a href="#">
                  <AiOutlineLogout />
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col ">
            <form action="" className=" flex">
              <AiOutlineSearch className=" absolute mt-2 mx-4 text-[1.5rem] cursor-pointer" />
              <input
                type="text"
                className=" w-[20rem] p-2 rounded-full text-center"
                placeholder="Search"
              />
            </form>

            <div className=" py-3 px-6 mx-2 my-1 rounded-md bg-white">
              <div className="flex gap-2 my-2">
                <div className="flex flex-col">
                  <h5 className="font-semibold uppercase">Groups</h5>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={Bitcoin}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Cryptocurrency</h5>
                    <p>Hello Everybody</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5 ml-6 text-white font-bold text-center rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd5}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Siber Techs</h5>
                    <p>Waguan Fam?</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5 ml-6 text-white font-bold text-center rounded-full">
                    20
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd7}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">TGIF</h5>
                    <p>Thank God it's Friday</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5 ml-6 text-white font-bold text-center rounded-full">
                    42
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd8}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Akpe na Mawu</h5>
                    <p className="">Yesu y3 da w'ase ooo</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5  ml-6 text-white font-bold text-center rounded-full">
                    4
                  </span>
                </div>
              </div>
            </div>

            <div className=" py-3 px-6 mx-2 my-1 rounded-md bg-white">
              <div className="flex gap-2 my-2">
                <div className="flex flex-col">
                  <h5 className="font-semibold uppercase">FRIENDS</h5>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd6}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Cobby Bossman</h5>
                    <p>Yo Cobby </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Online</p>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Moglom Opambour</h5>
                    <p>Money man, bless me this morning err?</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5 ml-6 text-white font-bold text-center rounded-full">
                    20
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={GDNEWS1}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Sweety</h5>
                    <p>You are one in a milli</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5 ml-6 text-white font-bold text-center rounded-full">
                    42
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4 border-b">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd9}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Mom</h5>
                    <p className="">I will becoming home this weekend</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5  ml-6 text-white font-bold text-center rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="flex justify-between my-4">
                <div className="flex gap-2 text-[0.8rem]">
                  <img
                    src={frnd9}
                    className=" w-[2rem] h-[2rem] border-2  rounded-full text-[#0891b2] cursor-pointer"
                  />

                  <div className="flex flex-col">
                    <h5 className="font-bold mt-">Dad</h5>
                    <p className="">
                      You? You better do the right thing before i come home this
                      evening <br />
                      else.......
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className=" text-[0.6rem] font-bold">Today 4:59 AM</p>
                  <span className=" text-[0.8rem] bg-red-700 w-5 h-5  ml-6 text-white font-bold text-center rounded-full">
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 w-full bg-white my-4 lg:mr-12 px-4 flex flex-col items-center md:ml-12 ">
          <div className="flex justify-between w-full border-b ">
            <div className=" flex gap-2">
              <img
                src={frnd6}
                className="w-[2rem] h-[2rem] my-6 mx-4 rounded-full border"
                alt=""
              />
              <div className="flex flex-col my-6">
                <span className=" font-bold">Cobby Bossman </span>
                <p className=" text-[0.7rem]">Online</p>
              </div>
            </div>
            <div className="flex gap-6 my-8 text-[1.2rem] text-[#0891b2] ">
              <BsTelephone className=" cursor-pointer" />
              <CiVideoOn className="cursor-pointer" />
              <div className=" flex flex-col cursor-pointer">
                <LuDot className=" my-[-0.6rem]" />
                <LuDot className=" " />
                <LuDot className=" my-[-0.6rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col my-4 w-full">
            <div className="flex justify-between gap-2 ">
              <div className=" flex  gap-2 bg-[#f1f5f9]  p-2 border-l h-[3rem] border-blue-800 rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <div className="flex flex-col relative">
                  <BiCheck className=" absolute left-0" />
                  <span className="text-[0.6rem] mt-4 ml-16">
                    <p> 3:13 PM</p>
                  </span>
                </div>
              </div>

              <div className=" flex  gap-2 bg-[#0891b2] h-[3rem]  relative mt-16  text-white p-2 border-l-2 border-[#f2f9f1]  rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <span className="relative text-[0.6rem] mt-4 ml-16">
                  3:13 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4 w-full">
            <div className="flex justify-between gap-2 ">
              <div className=" flex  gap-2 bg-[#f1f5f9]  p-2 border-l h-[3rem] border-blue-800 rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <span className="relative text-[0.6rem] mt-4 ml-16">
                  3:13 PM
                </span>
              </div>

              <div className=" flex  gap-2 bg-[#0891b2] h-[3rem]  relative  mt-16  text-white p-2 border-l-2 border-[#f2f9f1]  rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <span className="relative text-[0.6rem] mt-4 ml-16">
                  3:13 PM
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4 w-full">
            <div className="flex justify-between gap-2 ">
              <div className=" flex  gap-2 bg-[#f1f5f9]  p-2 border-l h-[3rem] border-blue-800 rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <span className="relative text-[0.6rem] mt-4 ml-16">
                  3:13 PM
                </span>
              </div>

              <div className=" flex  gap-2 bg-[#0891b2] h-[3rem]  relative  mt-16  text-white p-2 border-l-2 border-[#f2f9f1]  rounded-br-3xl">
                <p className=" text-sm">Waguan bossman </p>
                <span className="relative text-[0.6rem] mt-4 ml-16">
                  3:13 PM
                </span>
              </div>
            </div>
          </div>
          <div className=" justify-center items-center flex w-full">
            <form
              action=""
              className=" justify-center items-center flex gap-3 lg:absolute bottom-10 w-[50%] "
            >
              <input
                type="text"
                className=" border md:w-[80%] w-[30rem] p-1 rounded-full outline-none"
              />
              <div className="flex">
                <div className=" flex absolute left-20">
                  <MdEmojiEmotions />
                  <IoIosAttach />
                </div>
                <MdOutlineKeyboardVoice />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
