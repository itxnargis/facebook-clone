import React from "react";
import SidebarRow from "@/components/SidebarRow";
import { PiUserSquareLight } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px] hidden md:block ">
      <SidebarRow Icon={PiUserSquareLight} title="Friends" />
      <SidebarRow Icon={MdGroups} title="Groups"/>
      <SidebarRow Icon={FaShoppingBag} title="MarketPlace"/>
      <SidebarRow Icon={HiDesktopComputer} title="Watch"/>
      <SidebarRow Icon={SlCalender} title="Events"/>
      <SidebarRow Icon={FiClock} title="Memories"/>
      <SidebarRow Icon={FaChevronDown} title="See More"/>
    </div>
  );
}
