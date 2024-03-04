import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import HeaderIcon from "@/components/HeaderIcon";
import { MdHome } from "react-icons/md";
import { PiMonitorPlay } from "react-icons/pi";
import { FaUsersLine } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { HiViewGrid } from "react-icons/hi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { GoBellFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <div className="text-blue-500">
          <IoLogoFacebook className="text-5xl" />
        </div>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <IoSearch className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent
            outline-none placeholder-gray-500 flex-shrink "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 text-xl md:space-x-2">
          <HeaderIcon Icon={MdHome} active />
          <HeaderIcon Icon={PiMonitorPlay} />
          <HeaderIcon Icon={CiHome} />
          <HeaderIcon Icon={FaUsersLine} />
          <HeaderIcon Icon={PiMonitorPlay} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile photo */}
        <p className="whitespace-nowrap font-semibold pr-3 hidden sm:block">Nargis Khatun</p>
        <HiViewGrid className="icon" />
        <IoChatbubbleEllipsesSharp className="icon" />
        <GoBellFill className="icon" />
        <FaChevronDown className="icon" />
      </div>
    </div>
  );
}
