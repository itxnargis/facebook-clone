import React from "react";
import { HiVideoCamera } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Contact from "@/components/Contact";

type Props = {};

const contacts = [
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Jeff Bezos",
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates",
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark Zuckerberg",
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
  },
  {
    src: "https://links.papareact.com/6gg",
    name: "The Queen",
  },
  {
    src: "https://links.papareact.com/r57",
    name: "James Bond",
  },
];

export default function Widget({}: Props) {
  return (
    <div className="hidden md:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-center items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <HiVideoCamera className="h-6"/>
          <IoSearch className="h-6"/>
          <HiOutlineDotsHorizontal className="h-6"/>
        </div>
      </div>

      {contacts.map(contact => (
        <Contact key={contact.name} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}
