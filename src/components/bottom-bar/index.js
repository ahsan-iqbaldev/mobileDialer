import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import { IoMdContact, IoIosKeypad } from "react-icons/io";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="w-full flex gap-7 justify-center fixed left-0 bottom-0 py-2 bg-black md:bg-transparent ">
      <div className="flex justify-center items-center flex-col">
        <FaStar className="text-gray-500 text-2xl cursor-pointer" />
        <h6 className="text-gray-500">Favourites</h6>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Link to="/recent">
          <FaClock className="text-gray-500 text-2xl cursor-pointer" />
        </Link>
        <h6 className="text-gray-500">Recents</h6>
      </div>
      <div className="flex justify-center items-center flex-col">
        <IoMdContact className="text-gray-500 text-2xl cursor-pointer" />
        <h6 className="text-gray-500">Contacts</h6>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Link to="/">
          <IoIosKeypad className="text-gray-500 text-2xl cursor-pointer" />
        </Link>
        <h6 className="text-gray-500">Keypad</h6>
      </div>
    </div>
  );
};

export default BottomBar;
