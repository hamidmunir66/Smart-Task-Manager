import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-2 py-3 w-full bg-[#fff1f4c4]">
          <h1 className="font-semibold text-2xl ml-12">
            <span className="text-[#FF6767]">Dash</span>
            <span>Board</span>
          </h1>
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search your task here...."
              className="bg-white border border-[#F8F8F8] rounded-xl w-2xl p-3 pr-10 focus:outline-none "
            />
            <div className="border-0 p-4 bg-[#FF6767] absolute right-0 z-0 rounded-lg">
              <FaSearch className="  text-white cursor-pointer   " />
            </div>
          </div>
          <div className="flex gap-3 ">
            <div className="bg-[#FF6767] p-2 border-0 rounded-lg">
              <IoIosNotificationsOutline className=" text-white text-2xl " />
            </div>
            <div className="bg-[#FF6767] p-2 border-0 rounded-lg">
              <FaCalendarAlt className="  text-white text-2xl  " />
            </div>
          </div>
          <div className="mr-12">
            <h2 className="font-semibold">Tuesday</h2>
            <h3 className="text-[#3ABEFF] font-semibold">2/24/2026</h3>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
