 'use client';
import React from "react";
import { HiVideoCamera } from "react-icons/hi";
import { MdFlipCameraIos } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";

type Props = {};

const sendPost = (e: React.FormEvent) => {
  e.preventDefault();
};

export default function InputBox({}: Props) {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <form className="flex flex-1">
        <input
          className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          type="text"
          placeholder="What's on your mind?"
        />
        <button hidden type="submit" onClick={sendPost}>
          Submit
        </button>
      </form>

      <div className="flex justify-evenly p-3 border-t ">
        <div className="inputIcon">
          <HiVideoCamera className="h-7 text-red-500"/>
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
        <MdFlipCameraIos className="h-7 text-green-400"/>
        <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
      <div className="inputIcon">
        <HiOutlineEmojiHappy className="h-7 text-yellow-300"/>
        <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// type Props = {};

// export default function InputBox({}: Props) {
//   return (
//     <div></div>
//   );
// }
