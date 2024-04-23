import React, { useState } from "react";
import { Link } from "react-router-dom";
import me from "./IMG/me.png";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillMessage,
  AiFillBell,
} from "react-icons/ai";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex-wrap">
      <div className="flex justify-between  w-full z-10 bg-[#0891b2] h-[3rem] py-2 px-8 gap- my-">
        <div className="flex gap-2">
          <h1 className="text-white bg-[#0891b2] text-[1.3rem] border-2 font-extrabold p-1 rounded-md h-[2.3rem]">
            CP
          </h1>
          <div className="flex">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              className=" border-2 w-[18rem] outline-0 text-center h-[2.3rem] lg:block hidden"
            />
            <AiOutlineSearch className="absolute my-2 mx-4 text-[1.5rem] cursor-pointer" />
          </div>
        </div>

        <div>
          <nav className=" lg:text-white text-white  lg:px-6  lg:absolute right-[4rem]">
            <ul className=" flex lg:gap-8 gap-2">
              <li>
                <Link to="/" className="text-[0.7rem]">
                  <AiFillHome className=" lg:mx-4 mx-2 lg:my-0 my-4" />
                  <span className="lg:block hidden mx-2">Home</span>
                </Link>
              </li>

              <li>
                <Link to="/network" className=" text-[0.7rem]">
                  <FaUserFriends className=" lg:mx-4 mx-2  lg:my-0 my-4" />
                  <span className=" lg:block hidden">My Network</span>
                </Link>
              </li>

              <li>
                <Link to="/jobs" className=" text-[0.7rem]">
                  <FaBriefcase className=" lg:mx-4 mx-2   lg:my-0 my-4" />
                  <span className="lg:block hidden ml-2">Jobs</span>
                </Link>
              </li>

              <li>
                <Link to="/chats" className=" text-[0.7rem]">
                  <AiFillMessage className=" lg:mx-4 mx-2 lg:my-0 my-4" />
                  <span className=" lg:block hidden">Messaging</span>
                </Link>
              </li>

              <li>
                <Link to="/notification" className=" text-[0.7rem]">
                  <AiFillBell className="  lg:mx-4 mx-2 lg:my-0 my-4" />
                  <span className=" lg:block hidden">Notification</span>
                </Link>
              </li>

              <li className="flex relative">
                <button
                  onClick={toggleDropdown}
                  className="text-[0.7rem] relative h-[2rem] mt-[-0.5rem] focus:outline-none"
                >
                  <img src={me} alt="" className="w-[2rem] rounded-2xl" />
                  <span className="text-center ml-2">me</span>
                </button>
                {showDropdown && (
                  <ul className="absolute right-[-3rem] mt-10  z-10 w-[12rem] h-[17rem] text-[#0891b2] bg-white border border-gray-200 rounded-md shadow-md">
                    <li className=" mt-6 text-center">
                      <Link
                        to="/profile"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className=" mt-6 text-center">
                      <Link
                        to="/cv"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        My CV
                      </Link>
                    </li>
                    <li className=" mt-6 text-center">
                      <Link
                        to="/logout"
                        className="block py-2 px-4 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="justify-center">
        <div className="gri"></div>
      </div>
    </div>
  );
};

export default Navbar;
