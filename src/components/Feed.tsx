import React from "react";
import Stories from "@/components/Stories";
import InputBox from "@/components/InputBox";
import Posts from "@/components/Posts";

type Props = {};

export default function Feed({}: Props) {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 ml-4 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md lg:max-w-2xl">
        {/* stories */}
        <Stories />
        {/* InputBox */}
        <InputBox/>
        {/* Posts */}
          <Posts/>
      </div>
    </div>
  );
}
