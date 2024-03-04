import React from "react";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

export default function Posts() {
  const timestamp = new Date();
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div>
          <p className="font-radius">Nargis Khatun</p>
          <p className="text-xs text-gray-400">{timestamp?.toLocaleString()}</p>
          <p className="pt-4">AWESOME!</p>
        </div>
        {/* footer of posts */}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bt-2xl">
            <FaRegThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcon rounded-none">
            <HiOutlineChatAlt2 className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcon rounded-none rounded-bt-2xl">
            <CiShare2 className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div>
          <p className="font-radius">Nargis Khatun</p>
          <p className="text-xs text-gray-400">{timestamp?.toLocaleString()}</p>
          <p className="pt-4">AWESOME!</p>
        </div>
        {/* footer of posts */}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bt-2xl">
            <FaRegThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcon rounded-none">
            <HiOutlineChatAlt2 className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcon rounded-none rounded-bt-2xl">
            <CiShare2 className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div>
          <p className="font-radius">Nargis Khatun</p>
          <p className="text-xs text-gray-400">{timestamp?.toLocaleString()}</p>
          <p className="pt-4">AWESOME!</p>
        </div>
        {/* footer of posts */}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bt-2xl">
            <FaRegThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <div className="inputIcon rounded-none">
            <HiOutlineChatAlt2 className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>

          <div className="inputIcon rounded-none rounded-bt-2xl">
            <CiShare2 className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
