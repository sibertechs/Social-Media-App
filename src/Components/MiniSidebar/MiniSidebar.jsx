import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillMessage,
  AiFillBell,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

import me from "./IMG/me.png";
const MiniSidebar = () => {
  return (
    <div>
      <nav className=" h-full absolute z-10 left-0 lg:w-20 w-12 my-12 lg:bg-[#0891b2] border-2 border-[#0891b2]  top-0 ">
        <img
          src={me}
          className="w-[2rem] rounded-full border-2 lg:m-4 my-4"
          alt=""
        />
        <ul className=" ">
          <li className="lg:p-4 py-4 px-2 lg:text-white text-[#0891b2]  text-[1.5rem]">
            <Link to="/">
              <AiFillHome title="Home" />
            </Link>
          </li>

          <li className="lg:p-4 py-4 px-2 lg:text-white text-[#0891b2]  text-[1.5rem]">
            <Link to="/chats">
              <AiFillMessage title="Chats" />
            </Link>
          </li>
          <li className="lg:p-4 py-4 px-2 lg:text-white text-[#0891b2]  text-[1.5rem]">
            <Link to="/notification">
              <AiFillBell title="Notifications" />
            </Link>
          </li>
          <li className=" lg:p-4 py-4 px-2 lg:text-white text-[#0891b2]  text-[1.5rem]">
            <Link to="/network">
              <FaUserFriends title="My Networks" />
            </Link>
          </li>
          <li className=" lg:text-white text-[#0891b2]  text-[1.5rem] absolute bottom-8 lg:p-4 py-6 px-2">
            <a href="#">
              <AiOutlineLogout />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MiniSidebar;
